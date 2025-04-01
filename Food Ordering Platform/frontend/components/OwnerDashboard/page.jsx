"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const OwnerDashboard = () => {
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState("");
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("loggedIn");
    const name = localStorage.getItem("name");
    const id = localStorage.getItem("userid");
    if (loggedInStatus === "true" && name) {
      setIsLoggedIn(true);
      setUserName(name);
      setUserID(id);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const itemData = {
      owner: userID,
      name: itemName,
      description: description,
      price: parseFloat(price),
      image: image,
      quantity: parseInt(quantity, 10),
    };

    try {
      const response = await fetch(
        "http://142.93.209.126:5000/create/menu-items",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(itemData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add menu item");
      }

      const result = await response.json();
      alert("Menu item added successfully!");
      // Clear form fields after submission
      setItemName("");
      setDescription("");
      setPrice(0);
      setQuantity(1);
      setImage("");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6">
          <h1 className="text-3xl font-bold text-white text-center">
            Owner Dashboard
          </h1>
          <h2 className="text-xl text-blue-100 text-center mt-2">
            Welcome, {userName}
          </h2>
        </div>
        
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  Item Name
                </label>
                <input
                  type="text"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  required
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                    itemName ? 'text-gray-900' : 'text-gray-500'
                  }`}
                  placeholder="Enter item name"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  Price
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    className={`w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                      price > 0 ? 'text-gray-900' : 'text-gray-500'
                    }`}
                    placeholder="0.00"
                    step="0.01"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                  description ? 'text-gray-900' : 'text-gray-500'
                }`}
                rows="4"
                placeholder="Describe your menu item"
              ></textarea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  Quantity
                </label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  min="1"
                  required
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                    quantity > 1 ? 'text-gray-900' : 'text-gray-500'
                  }`}
                  placeholder="Available quantity"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  Image URL
                </label>
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                    image ? 'text-gray-900' : 'text-gray-500'
                  }`}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 focus:ring-4 focus:ring-blue-300 transition-all shadow-md"
            >
              {loading ? (
                <span className="inline-flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Add Item to Menu"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;