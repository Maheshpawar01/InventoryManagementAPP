import React, { useState } from 'react';
import api from '../api';
import type { Product } from '../types';

interface Props {
  product: Product;
  onClose: () => void;
  onSold: () => void;
}

const SellModal: React.FC<Props> = ({ product, onClose, onSold }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleSell = async () => {
    try {
      await api.post('/sales', { productId: product._id, quantity });
      alert('Product sold!');
      onSold();
      onClose();
    } catch (err: any) {
      alert(err.response?.data?.error || 'Sale failed');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-80">
        <h3 className="text-lg font-bold mb-2">Sell {product.name}</h3>
        <input
          type="number"
          min={1}
          max={product.stock}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border p-2 rounded w-full mb-4"
        />
        <div className="flex justify-end gap-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSell}>Sell</button>
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SellModal;
