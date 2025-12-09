import { Router } from 'express';
import Product from '../models/Product';


const router = Router();


// Create product
router.post('/', async (req, res) => {
try {
const { name, price, stock, category } = req.body;
const p = await Product.create({ name, price, stock, category });
res.status(201).json(p);
} catch (err) {
res.status(500).json({ error: 'Create product failed', details: err });
}
});


// Read list with search & category filter
router.get('/', async (req, res) => {
try {
const { q, category } = req.query as any;
const filter: any = {};
if (q) filter.name = { $regex: q, $options: 'i' };
if (category) filter.category = category;
const products = await Product.find(filter).sort({ name: 1 });
res.json(products);
} catch (err) {
res.status(500).json({ error: 'Failed to fetch products' });
}
});


// Get single
router.get('/:id', async (req, res) => {
try {
const p = await Product.findById(req.params.id);
if (!p) return res.status(404).json({ error: 'Not found' });
res.json(p);
} catch (err) {
res.status(500).json({ error: 'Failed' });
}
});


// Update
router.put('/:id', async (req, res) => {
try {
const { name, price, stock, category } = req.body;
const p = await Product.findByIdAndUpdate(req.params.id, { name, price, stock, category }, { new: true });
if (!p) return res.status(404).json({ error: 'Not found' });
res.json(p);
} catch (err) {
res.status(500).json({ error: 'Update failed' });
}
});


// Delete
router.delete('/:id', async (req, res) => {
try {
const p = await Product.findByIdAndDelete(req.params.id);
if (!p) return res.status(404).json({ error: 'Not found' });
res.json({ success: true });
} catch (err) {
res.status(500).json({ error: 'Delete failed' });
}
});


export default router;