"use client";
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('http://143.244.136.237:5000/menu-items');
        if (!response.ok) {
          throw new Error('Failed to fetch menu items');
        }
        const data = await response.json();
        setMenuItems(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMenuItems();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    
    <div className="page-container">
    <div className="mt-16">
      <h1 className="text-2xl font-bold mb-4">Menu Items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menuItems.map((item) => (
          <div key={item._id} className="border p-4 rounded-lg shadow-md bg-white">
            <h2 className="text-lg text-blue-600">{item.name}</h2>
            <p className="text-sm text-gray-600">Price: ${item.price}</p>
            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Page;
