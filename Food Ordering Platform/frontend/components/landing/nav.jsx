"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("loggedIn");
    const name = localStorage.getItem("name");
    if (loggedInStatus === "true" && name) {
      setIsLoggedIn(true);
      setUserName(name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <nav className="fixed top-0 z-20 w-full border-b bg-blue-800 backdrop-blur-sm">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <span
          onClick={() => router.push("/")}
          className="self-center text-2xl font-semibold text-white whitespace-nowrap cursor-pointer"
        >
          QUICK BITE
        </span>
        <div className="mr-4 ml-4 gap-x-2 flex space-x-3 md:order-2 md:space-x-0">
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <span className="text-white font-bold">{userName}</span>
              <button
                onClick={handleLogout}
                type="button"
                className="inline-flex items-center p-2 text-lg text-center md:text-sm font-bold bg-gray-200 text-blue-800 rounded-full hover:bg-blue-950 hover:text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => router.push("/Signup")}
                type="button"
                className="inline-flex items-center p-2 text-lg text-center md:text-sm font-bold bg-gray-200 text-blue-800 rounded-full hover:bg-blue-950 hover:text-white"
              >
                Signup
              </button>
              <button
                onClick={() => router.push("/Login")}
                type="button"
                className="inline-flex items-center p-2 text-lg text-center md:text-sm font-bold bg-gray-200 text-blue-800 rounded-full hover:bg-blue-950 hover:text-white"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
