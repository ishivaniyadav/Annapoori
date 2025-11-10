import React from "react";
import { Link } from "react-router-dom";
const FailurePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">
        Payment Failed
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Oops! Something went wrong. Please try again later.
      </p>
      <Link to="/">
        <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition">
          Go Back to Home
        </button>
      </Link>
    </div>
  );
};

export default FailurePage;
