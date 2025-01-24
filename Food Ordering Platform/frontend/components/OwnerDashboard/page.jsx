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

    const itemData = {
      owner: userID,
      name: itemName,
      description: description,
      price: parseFloat(price),
      image: image,
      quantity: parseInt(quantity, 10)
    };

    try {
      const response = await fetch("http://localhost:5000/create/menu-items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemData),
      });

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
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Owner Dashboard
        </h1>
        <h2 className="text-xl text-gray-600 text-center mb-8">
          Welcome, {userName}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-2">Item Name</label>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              rows="4"
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Image URL</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
  
  
  
};

export default OwnerDashboard;