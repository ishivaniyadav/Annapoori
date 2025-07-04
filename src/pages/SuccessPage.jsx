import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
        Thank you for your donation!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Your support helps us feed more people 🙏
      </p>
      <Link to="/">
        <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
          Go Back to Home
        </button>
      </Link>
    </div>
  );
};

export default SuccessPage;
