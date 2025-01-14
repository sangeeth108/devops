"use client";

import Image from "next/image";
import Login from "./Login/page"; 
import Signup from "./Signup/page" // Fix: Use correct path with alias

const Home = () => {
  return (
    <div>
      <Signup />
    </div>
  );
};

export default Home;