import React from "react";
import { useNavigate } from "react-router-dom";

function Contribution() {
  const navigate = useNavigate();

  return (
    <div className="lg:mx-12 lg:py-20">
      <div className="flex flex-col md:flex-row items-center justify-between rounded-2xl bg-[#fff] border border-gray-300 p-8">
        <p className="md:w-1/2 text-black text-center md:text-left mb-4 md:mb-0">
          Support our food donation initiative! Every contribution helps.
        </p>
        <button
          onClick={() => navigate("/stripe")}
          className="py-3 px-6 bg-blue-900 text-white rounded-md shadow-md hover:bg-blue-950 transition"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
}

export default Contribution;
