import React from "react";
import { useNavigate } from "react-router-dom";
function Contribution() {
  const navigate = useNavigate();

  return (
    <div className="lg:mx-10 lg:py-20">
      <div className="flex flex-col md:flex-row items-center justify-between rounded-2xl bg-[#fff] border border-gray-300 p-8">
        <p className="md:w-1/2 text-black text-center md:text-left mb-0 md:mb-0">
          Support our food donation initiative! Every contribution helps.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/stripe")}
            className="py-3 px-6 bg-blue-900 text-white rounded-md shadow-md hover:bg-blue-950 transition"
          >
            Donate Money
          </button>
          <button
            onClick={() => navigate("/food")}
            className="py-3 px-6 bg-blue-900 text-white rounded-md shadow-md hover:bg-blue-950 transition"
          >
            Donate Food
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contribution;
