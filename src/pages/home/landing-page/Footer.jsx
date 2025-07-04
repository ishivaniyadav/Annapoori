import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.div
      className="w-full flex flex-col gap-12 bg-[#080144] h-full text-white py-8 px-4 lg:py-12 lg:px-12"
    >
      {/* Main container */}
      <div className="flex flex-col gap-6 bg-#cdcdff lg:flex-row">
        {/* Logo and description section */}
        <div className="w-full h-full flex flex-col items-center lg:w-1/2">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Annapoori</h1>
            <p className=" text-sm">
              Annapoori is the leading technology-enabled surplus recovery
              service, empowering businesses to easily distribute their surplus.
              National brands across the US work with Copia to reduce food
              insecurity in the communities where they operate, help reduce
              their greenhouse gas emissions, and boost their profitability.
            </p>
          </div>
        </div>
        {/* Links section */}
        <div className="w-full h-full  flex gap-8 capitalize lg:gap-12 lg:w-1/2">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold  pb-4">Annapori</h1>
            <a href="#">solutions</a>
            <a href="#whyus">about</a>
            <a href="#">non-profite</a>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold pb-4">More</h1>
            <a href="#">news</a>
            <a href="#faq">FAQ and Support</a>
          </div>
          {/* Social media section */}
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold pb-4 text-center">
              let's get social
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 *:text-2xl">
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Policy and copyright section */}
      <div className="w-full flex flex-col items-center gap-4 capitalize mx-auto pt-6 lg:items-center">
        <span className="text-center">©2025 Annapoori. All right reserved</span>
      </div>
    </motion.div>
  );
};

export default Footer;
