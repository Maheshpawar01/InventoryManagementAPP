import React, { useEffect, useState } from 'react';
import api from '../api';

interface Report {
  total: { totalSales: number; totalQuantity: number };
  bestSelling: Array<{
    productId: string;
    name: string;
    category: string;
    qty: number;
    revenue: number;
  }>;
}

const SalesReport: React.FC = () => {
  const [report, setReport] = useState<Report | null>(null);

  const fetchReport = async () => {
    const res = await api.get('/sales/report');
    setReport(res.data);
  };

  useEffect(() => { fetchReport(); }, []);

  if (!report) return <div>Loading...</div>;

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Sales Report</h2>
      <p>Total Sales Amount: <span className="font-bold">{report.total.totalSales}</span></p>
      <p>Total Quantity Sold: <span className="font-bold">{report.total.totalQuantity}</span></p>

      <h3 className="text-lg font-bold mt-4 mb-2">Best Selling Products</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Name</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Quantity Sold</th>
              <th className="border p-2">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {report.bestSelling.map((p) => (
              <tr key={p.productId}>
                <td className="border p-2">{p.name}</td>
                <td className="border p-2">{p.category}</td>
                <td className="border p-2">{p.qty}</td>
                <td className="border p-2">{p.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesReport;
