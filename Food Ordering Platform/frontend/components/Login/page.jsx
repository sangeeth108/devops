"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isClient, setIsClient] = useState(false); // Added for client-only checks

  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // Ensures we are on the client side
  }, []);

  useEffect(() => {
    if (isClient) {
      const savedEmail = localStorage.getItem("email");
      if (savedEmail) {
        setEmail(savedEmail);
        setRememberMe(true);
      }
    }
  }, [isClient]);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rememberMe) {
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("email");
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.status === "ok") {
        alert("Login successful");
        localStorage.setItem("token", data.data);
        localStorage.setItem("role", data.type);
        localStorage.setItem("loggedIn", "true");

        if (data.type === "restaurantowner")
          localStorage.setItem("RestaurantOwnerID", data.RestaurantOwnerID);
        if (data.type === "user")
          localStorage.setItem("UserID", data.UserID);

        if (data.type === "restaurantowner") router.push("/restaurant");
        else if (data.type === "user") router.push("/user");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white px-4">
      {/* HOME button */}
      <Link href="/">
        <button className="absolute top-5 right-5 px-4 py-2 text-xs md:px-10 md:py-2 md:text-sm font-bold bg-gray-200 text-blue-700 rounded-full hover:bg-blue-600 hover:text-white">
          HOME
        </button>
      </Link>

      {/* Heading */}
      <h2 className="mb-8 text-xl font-bold text-gray-800 md:text-2xl text-center">
        LOGIN WITH YOUR ACCOUNT DETAILS
      </h2>

      {/* Login Form */}
      <form className="w-full max-w-sm md:max-w-md" onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className="mb-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        {/* Password Input */}
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-3 text-gray-500"
          >
            {showPassword ? (
              <AiFillEyeInvisible size={24} />
            ) : (
              <AiFillEye size={24} />
            )}
          </button>
        </div>

        {/* Remember Me and Forget Password */}
        <div className="flex font-bold items-center justify-between mb-8 text-gray-600">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2 accent-gray-500"
            />
            Remember Me
          </label>
          <Link href="#" className="text-sm hover:text-gray-800">
            Forget Password?
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="font-bold w-full px-4 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
