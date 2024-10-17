// AdminPage.jsx
import React from 'react';

const AdminPage = ({ items, onGeneratePDF }) => {
  return (
    <div className="p-4 bg-white">
      <h2 className="text-2xl font-bold mb-4">Admin Page</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {items.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.size}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.price.toFixed(2)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onGeneratePDF} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Generate PDF
      </button>
    </div>
  );
};

export default AdminPage;
