// server/src/routes/sales.ts
import { Router } from 'express';
import mongoose from 'mongoose';
import Product from '../models/Product';
import Sale from '../models/Sale';

const router = Router();


router.post('/', async (req, res) => {
  const session = await mongoose.startSession();

  try {
    const { productId, quantity } = req.body as { productId?: string; quantity?: number };

    if (!productId || typeof quantity !== 'number' || quantity <= 0) {
      return res.status(400).json({ error: 'Missing or invalid productId/quantity' });
    }

    // start transaction
    session.startTransaction();

    // fetch product inside session
    const product = await Product.findById(productId).session(session);

    if (!product) {
      await session.abortTransaction();
      return res.status(404).json({ error: 'Product not found' });
    }

    // check stock
    if (product.stock < quantity) {
      await session.abortTransaction();
      return res.status(400).json({ error: 'Insufficient stock' });
    }

    // decrement stock and save
    product.stock -= quantity;
    await product.save({ session });

    // create sale record
    const totalPrice = product.price * quantity;
    const [sale] = await Sale.create(
      [{ product: product._id, quantity, totalPrice }],
      { session }
    );

    // commit
    await session.commitTransaction();

    return res.status(201).json(sale);
  } catch (err: any) {
    // abort if something went wrong
    try {
      await session.abortTransaction();
    } catch (_) {
      /* ignore abort errors */
    }
    return res.status(500).json({ error: 'Sale failed', details: err?.message ?? err });
  } finally {
    session.endSession();
  }
});

router.get('/report', async (req, res) => {
  try {
    const total = await Sale.aggregate([
      {
        $group: {
          _id: null,
          totalSales: { $sum: '$totalPrice' },
          totalQuantity: { $sum: '$quantity' },
        },
      },
    ]);

    const bestSelling = await Sale.aggregate([
      { $group: { _id: '$product', qty: { $sum: '$quantity' }, revenue: { $sum: '$totalPrice' } } },
      { $sort: { qty: -1 } },
      { $limit: 5 },
      {
        $lookup: {
          from: 'products',
          localField: '_id',
          foreignField: '_id',
          as: 'product',
        },
      },
      { $unwind: { path: '$product', preserveNullAndEmptyArrays: false } },
      {
        $project: {
          productId: '$_id',
          name: '$product.name',
          category: '$product.category',
          qty: 1,
          revenue: 1,
        },
      },
    ]);

    return res.json({
      total: total[0] || { totalSales: 0, totalQuantity: 0 },
      bestSelling,
    });
  } catch (err) {
    return res.status(500).json({ error: 'Report failed', details: (err as any)?.message ?? err });
  }
});

export default router;
