"use client";

import Image from "next/image";
import Login from "./Login/page"; // Fix: Use correct path with alias

const Home = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default Home;