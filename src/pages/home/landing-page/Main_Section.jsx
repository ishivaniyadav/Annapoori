import React from "react";
import { motion } from "framer-motion";
import Button from "../../../components/Button";
import banner from "../../../components/banner.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Main_Section = () => {
  const text =
    "Help us bring hope to hungry families. Our Food Pack Appeal provides essential staples like rice, flour, oil, and lentils to those facing daily food insecurity — offering not just meals, but dignity and a chance for a better tomorrow.".split(
      " "
    );

  const navigate = useNavigate(); 

  const handleDonateClick = () => {
    navigate("/stripe"); 
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={banner}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-10 brightness-70"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-opacity-60 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 lg:px-24 text-center gap-8">
        <motion.h1
          className="text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-4xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          From your hands to their table,{" "}
          <span className="text-blue-700">a gift of nourishment</span>
        </motion.h1>

        <motion.p
          className="text-white text-lg text-extrabold leading-relaxed max-w-4xl flex flex-wrap justify-center gap-[5px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {text.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.03 }}
            >
              {word + " "}
            </motion.span>
          ))}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <button
            onClick={handleDonateClick}
            className="w-44 h-12 bg-blue-700 hover:bg-blue-1100 text-white text-bold border-none shadow-lg transition-all duration-300 flex items-center justify-center gap-2 rounded"
          >
            Donate Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Main_Section;
