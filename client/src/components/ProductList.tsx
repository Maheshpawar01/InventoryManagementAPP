import React, { useEffect, useState } from 'react';
import api from '../api';
import type { Product } from '../types';
import SellModal from './SellModal';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [sellProduct, setSellProduct] = useState<Product | null>(null);

  const fetchProducts = async () => {
    const res = await api.get('/products');
    setProducts(res.data);
  };

  const deleteProduct = async (id: string) => {
    if (!confirm('Delete this product?')) return;
    await api.delete(`/products/${id}`);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter ? p.category === filter : true)
  );

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Products</h2>
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <input
          className="border p-2 rounded flex-1"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          className="border p-2 rounded flex-1"
          placeholder="Filter by category"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Name</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Stock</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p._id}>
                <td className="border p-2">{p.name}</td>
                <td className="border p-2">{p.price}</td>
                <td className={`border p-2 ${p.stock < 5 ? 'text-red-500 font-bold' : ''}`}>
                  {p.stock} {p.stock < 5 && 'Low'}
                </td>
                <td className="border p-2">{p.category}</td>
                <td className="border p-2 space-x-2">
                  <button className="bg-green-500 text-white px-2 py-1 rounded" onClick={() => setSellProduct(p)}>Sell</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => deleteProduct(p._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {sellProduct && (
        <SellModal product={sellProduct} onClose={() => setSellProduct(null)} onSold={fetchProducts} />
      )}
    </div>
  );
};

export default ProductList;
