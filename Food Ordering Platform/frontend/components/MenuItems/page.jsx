"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Page = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("http://142.93.209.126:5000/menu-items");
        if (!response.ok) {
          throw new Error("Failed to fetch menu items");
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
    return <div className="text-red-500 text-center mt-10">Error: {error}</div>;
  }

  return (
    <div className="bg-blue-100">
      <div className="container mx-auto py-8 px-4 sm:px-0 max-w-screen-xl space-y-8 text-gray-800 bg-blue-100">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
          Menu Items
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Local Image from `public/` */}
              <Image
                src="/placeholder.jpg" // Use image from `public/`
                alt={item.name}
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />

              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-lg text-blue-600 font-bold">
                  Price: ${item.price}
                </p>
                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
