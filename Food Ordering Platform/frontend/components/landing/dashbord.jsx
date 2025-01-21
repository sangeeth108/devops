// pages/index.js
import Image from 'next/image';
import burgerImage from "../../public/assets/images/hero.png"; // Replace with the burger image
import AppStore from '../../public/assets/images/AppStore.png';
import GooglePlay from '../../public/assets/images/GooglePlay.png';  // Replace with the app preview image

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div className="relative bg-orange-500">
        <div className="w-full max-w-screen-xl mx-auto px-4 py-16">
          <div className="flex justify-center">
            <Image
              src={burgerImage}
              alt="Burger and Fries"
              className="rounded-lg"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="-mt-20 relative z-10">
        <div className="bg-white shadow-lg rounded-lg mx-auto max-w-screen-md p-8">
          <h1 className="text-blue-800 text-3xl font-bold text-center mb-2">
            Tuck into a takeaway today
          </h1>
          <p className="text-gray-600 text-center mb-6">
            Food is just a click away!
          </p>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search by City or Town"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button
              className="px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-green-700 focus:outline-none"
            >
              Search
            </button>
            <button
              className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 focus:outline-none"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* App Promotion Section */}
      <div className="bg-white py-16">
        <div className="text-center mb-12">
          <h2 className="text-gray-800 text-2xl font-bold">
            Order takeaway even faster!
          </h2>
          <p className="text-gray-600">
            Download the MernEats App for faster ordering and personalised recommendations
          </p>
        </div>
        <div className="flex justify-center space-x-4">
         
          <Image
            src={AppStore}
            alt="App Preview"
            width={200}
            height={400}
          />
          <Image
            src={GooglePlay}
            alt="App Preview"
            width={200}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
