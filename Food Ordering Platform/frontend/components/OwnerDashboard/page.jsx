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
    <div>
      <div className="mt-16">
        <h1>Owner Dashboard</h1>
        <h1>{userName}</h1>
        <form onSubmit={handleSubmit} className="my-8">
          <div>
            <label>Item Name</label>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
              style={{ color: 'black' }}
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              style={{ color: 'black' }}
            ></textarea>
          </div>
          <div>
            <label>Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              style={{ color: 'black' }}
            />
          </div>
          <div>
            <label>Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
              required
              style={{ color: 'black' }}
            />
          </div>
          <div>
            <label>Image</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              style={{ color: 'black' }}
            />
          </div>
          <button type="submit">Add Item</button>
        </form>
      </div>
    </div>
  );
  
  
};

export default OwnerDashboard;