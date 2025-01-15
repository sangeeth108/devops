"use client";

import Image from "next/image";
import Login from "./Login/page"; 
import Signup from "./Signup/page" // Fix: Use correct path with alias
import LandingPage from "./Landing/page";

const Home = () => {
  return (
    <div>
      <LandingPage />
    </div>
  );
};

export default Home;