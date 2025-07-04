import React from "react";
import DonateButton from "../components/DonateButton";
import { FaHandsHelping } from "react-icons/fa";

const Stripe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-100 to-blue-200 flex flex-col items-center justify-center px-4 py-10 font-sans">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
          Welcome to <span className="text-blue-900">Annapoori</span>
        </h1>
        <p className="text-md md:text-lg text-gray-700 mt-4 max-w-xl mx-auto">
          Your contribution helps us serve meals to those who need it the most.
          Every rupee matters. Donate now and make a difference.
        </p>
      </div>

      <DonateButton />
    </div>
  );
};

export default Stripe;
