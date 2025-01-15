"use client";

import Link from "next/link";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("User");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    // Handle signup process
    console.log({
      firstName,
      lastName,
      email,
      phoneNumber,
      role,
      password,
    });
    alert("Signup successful!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 md:px-8 lg:px-16">
      {/* Home Button */}
      <Link href="/">
        <button className="absolute top-5 right-5 px-4 py-2 text-xs font-bold bg-gray-200 text-blue-700 rounded-full hover:bg-blue-600 hover:text-white md:px-6 md:py-3 md:text-sm">
          HOME
        </button>
      </Link>

      {/* Heading */}
      <h2 className="mb-8 text-xl font-bold text-gray-800 text-center md:text-2xl">
        SIGNUP WITH YOUR ACCOUNT DETAILS
      </h2>

      {/* Signup Form */}
      <form
        className="w-full max-w-xs md:max-w-md lg:max-w-lg bg-white p-6 rounded-xl shadow-lg"
        onSubmit={handleSubmit}
      >
        {/* First Name */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        {/* Role Dropdown */}
        <div className="mb-8 relative">
          <button
            type="button"
            className="w-full px-4 py-3 flex items-center justify-between bg-gray-100 text-gray-700 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {role}
            <BiChevronDown size={24} />
          </button>
          {isDropdownOpen && (
            <ul className="absolute text-gray-400 w-full bg-white shadow-lg rounded-xl mt-2 border border-gray-300 z-50">
              <li
                className="px-4 py-3 hover:bg-blue-100 cursor-pointer rounded-t-xl"
                onClick={() => {
                  setRole("User");
                  setIsDropdownOpen(false);
                }}
              >
                User
              </li>
              <li
                className="px-4 py-3 hover:bg-blue-100 cursor-pointer rounded-b-xl"
                onClick={() => {
                  setRole("Restaurant Owner");
                  setIsDropdownOpen(false);
                }}
              >
                Restaurant Owner
              </li>
            </ul>
          )}
        </div>

        {/* Password */}
        <div className="relative mb-4">
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

        {/* Confirm Password */}
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-3 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          SIGNUP
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
