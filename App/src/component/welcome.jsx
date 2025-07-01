/** @format */

import React from "react";

const WelcomeCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-xl text-center w-96">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome!</h1>
        <p className="text-gray-600 mb-4">
          This is your first Tailwind-powered React component.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WelcomeCard;
