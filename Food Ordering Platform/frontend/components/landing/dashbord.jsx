"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import burgerImage from "../../public/assets/images/hero.png";
import AppStore from "../../public/assets/images/AppStore.png";
import GooglePlay from "../../public/assets/images/GooglePlay.png";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const updateAuthState = () => {
      const loggedInStatus = localStorage.getItem("loggedIn") === "true";
      setIsLoggedIn(loggedInStatus);
      if (loggedInStatus) {
        const userRole = localStorage.getItem("role");
        setRole(userRole);
      } else {
        setRole("");
      }
    };

    // Check initial state
    updateAuthState();

    // Listen for storage changes (logout update)
    window.addEventListener("storage", updateAuthState);

    // Add scroll listener for animations
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("storage", updateAuthState);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 transform -skew-y-6 origin-top-left h-4/5"></div>
        
        <div className="relative max-w-screen-xl mx-auto px-4 pt-12 pb-32 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              <span className="block">Delicious Food </span>
              <span className="block mt-1">
                <span className="text-yellow-300">Delivered</span> To UOR
              </span>
            </h1>
            <p className="mt-4 text-xl text-white/90 max-w-md mx-auto md:mx-0">
              Experience the best local restaurants at your fingertips. Fresh, fast, and right to your door.
            </p>
          </div>
          
          <div className="md:w-1/2 relative">
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-yellow-400 rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-red-400 rounded-full opacity-60 animate-pulse delay-700"></div>
            
            <div className="relative transform transition-all duration-700 hover:scale-105 hover:rotate-2">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl blur-xl opacity-30 transform -rotate-6"></div>
              <Image
                src={burgerImage}
                alt="Burger and Fries"
                className="relative rounded-3xl shadow-2xl"
                width={600}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="-mt-24 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl mx-auto max-w-screen-md p-8 transform transition-all duration-500 hover:shadow-2xl border border-gray-100">
          <h2 className="text-indigo-800 text-3xl font-bold text-center mb-3">
            Tuck into a takeaway now!
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Satisfy your cravings with just a few clicks. Your favorite food is waiting for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {isLoggedIn ? (
              role === "restaurantowner" ? (
                <button
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-700 text-white rounded-xl font-medium shadow-lg hover:shadow-indigo-500/30 transform transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={() => router.push("/OwnerDashboard")}
                >
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                    Go to Dashboard
                  </span>
                </button>
              ) : (
                <button
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-medium shadow-lg hover:shadow-orange-500/30 transform transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  onClick={() => router.push("/MenuItems")}
                >
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    Find Delicious Food
                  </span>
                </button>
              )
            ) : (
              <button
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-xl font-medium shadow-lg hover:shadow-gray-500/30 transform transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                onClick={() => router.push("/Login")}
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                  </svg>
                  Login to Find Foods
                </span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose MernEats?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We connect you with the food you love from the best local restaurants.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Your food delivered in 30 minutes or less, guaranteed.</p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Food</h3>
            <p className="text-gray-600">We partner with only the best restaurants in your area.</p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Payment</h3>
            <p className="text-gray-600">Multiple payment options for a seamless checkout experience.</p>
          </div>
        </div>
      </div>

      {/* App Promotion Section */}
      <div className="bg-gradient-to-br from-indigo-900 to-blue-900 py-16 px-4 rounded-3xl mx-4 sm:mx-8 lg:mx-16 mb-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-4">
                Order takeaway even faster!
              </h2>
              <p className="text-blue-100 mb-8 max-w-md">
                Download the MernEats App for faster ordering, exclusive deals, and personalized recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <div className="transform transition hover:scale-105">
                  <Image 
                    src={AppStore} 
                    alt="Download on App Store" 
                    width={150} 
                    height={50}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="transform transition hover:scale-105">
                  <Image 
                    src={GooglePlay} 
                    alt="Get it on Google Play" 
                    width={150} 
                    height={50}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="relative mx-auto w-64 h-96 md:w-80 md:h-96 bg-indigo-800/30 rounded-3xl p-2 transform rotate-3 shadow-xl">
                <div className="absolute inset-0 bg-gray-900 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-500/20"></div>
                  {/* Mock app screen - replace with actual app screenshot */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <div className="w-full h-8 bg-blue-500/30 rounded-full mb-4"></div>
                    <div className="w-full h-24 bg-white/10 rounded-xl mb-4"></div>
                    <div className="w-full flex gap-2 mb-4">
                      <div className="w-1/2 h-32 bg-orange-400/20 rounded-xl"></div>
                      <div className="w-1/2 h-32 bg-red-400/20 rounded-xl"></div>
                    </div>
                    <div className="w-full h-24 bg-white/10 rounded-xl mb-4"></div>
                    <div className="w-full h-8 bg-indigo-500/30 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">MernEats</h3>
            <p className="text-gray-400 mb-4">Bringing the best local food right to your doorstep.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partner With Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">123 Food Street, Foodville</li>
              <li className="text-gray-400">contact@merneats.com</li>
              <li className="text-gray-400">(123) 456-7890</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 max-w-screen-xl mx-auto">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} MernEats. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}