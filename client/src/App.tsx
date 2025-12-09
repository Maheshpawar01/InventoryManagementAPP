import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import SalesReport from './components/SalesReport';
import Login from './components/Login';

const App: React.FC = () => {
  const [user, setUser] = useState<string | null>(null);
  const [page, setPage] = useState<'products' | 'report'>('products');

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="flex flex-col md:flex-row items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 md:mb-0">Inventory Management System</h1>
        <div className="flex items-center space-x-2">
          <span className="text-gray-700">Hello, {user}</span>
          <nav className="space-x-2">
            <button
              onClick={() => setPage('products')}
              className={`px-4 py-2 rounded ${page === 'products' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            >
              Products
            </button>
            <button
              onClick={() => setPage('report')}
              className={`px-4 py-2 rounded ${page === 'report' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            >
              Sales Report
            </button>
          </nav>
        </div>
      </header>

      <main>
        {page === 'products' && (
          <>
            <ProductForm />
            <ProductList />
          </>
        )}
        {page === 'report' && <SalesReport />}
      </main>
    </div>
  );
};

export default App;
