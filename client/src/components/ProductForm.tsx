import React, { useState } from 'react';
import api from '../api';

const ProductForm: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [category, setCategory] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/products', { name, price, stock, category });
      alert('Product created!');
      setName(''); setPrice(0); setStock(0); setCategory('');
      window.location.reload();
    } catch (err: any) {
      alert(err.response?.data?.error || 'Error creating product');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6 grid grid-cols-1 md:grid-cols-5 gap-2">
      <input
        className="border rounded p-2"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="border rounded p-2"
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        required
      />
      <input
        className="border rounded p-2"
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(Number(e.target.value))}
        required
      />
      <input
        className="border rounded p-2"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Product</button>
    </form>
  );
};

export default ProductForm;
