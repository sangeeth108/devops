"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const loginHandel = () => {
    router.push("@/app/Login/page");
  };
  const signupHandel = () => {
    router.push("./app/Signup/page");
  };

  return (
    <nav className="fixed top-0 z-20 w-full border-b bg-blue-700 backdrop-blur-sm">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <span className="self-center text-2xl font-semibold text-white whitespace-nowrap">
          QUICK BITE
        </span>
        <div className="mr-4 flex space-x-3 md:order-2 md:space-x-0">
        <button
            onClick={signupHandel}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-lg  text-center  md:text-sm font-bold bg-gray-200 text-blue-700 rounded-full hover:bg-blue-600 hover:text-white"
          >
            Signup
          </button>
          <button
            onClick={loginHandel}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-lg  text-center  md:text-sm font-bold bg-gray-200 text-blue-700 rounded-full hover:bg-blue-600 hover:text-white"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;