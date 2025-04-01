"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserDashboard = () => {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);

  const goToHome = () => {
    router.push("/");  // Navigate to the home page
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            User Dashboard
          </h1>
          <p className="text-blue-100 text-center mt-2">
            Welcome to your personalized dashboard
          </p>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stats Card 1 */}
            <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">Orders</h3>
                <div className="bg-blue-500 rounded-full p-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-700 mt-4">0</p>
              <p className="text-sm text-gray-500 mt-2">Total orders placed</p>
            </div>
            
            {/* Stats Card 2 */}
            <div className="bg-indigo-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">Favorites</h3>
                <div className="bg-indigo-500 rounded-full p-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-700 mt-4">0</p>
              <p className="text-sm text-gray-500 mt-2">Saved items</p>
            </div>
            
            {/* Stats Card 3 */}
            <div className="bg-purple-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">Rewards</h3>
                <div className="bg-purple-500 rounded-full p-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-700 mt-4">0</p>
              <p className="text-sm text-gray-500 mt-2">Points earned</p>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button
              onClick={goToHome}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:opacity-90 transition-all"
            >
              <svg 
                className={`w-5 h-5 transform ${isHovering ? '-translate-x-1' : ''} transition-transform`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Return to Home</span>
            </button>
            
            <button className="px-6 py-3 border-2 border-blue-500 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
              View Account Settings
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>© 2025 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default UserDashboard;