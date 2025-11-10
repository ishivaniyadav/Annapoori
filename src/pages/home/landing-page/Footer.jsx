import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <motion.div
      className="w-full flex flex-col gap-12 bg-[#080144] text-white py-10 px-6 lg:py-16 lg:px-20"
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
        
        <div className="lg:w-1/2">
          <h1 className="text-2xl font-bold mb-4">Annapoori</h1>
          <p className="text-sm leading-relaxed text-gray-300">
            Annapoori is a mission-driven initiative focused on combating hunger and food waste across India.
            By redistributing surplus food and providing essential food kits to underprivileged families, we strive to ensure no one sleeps hungry.
            Join us in spreading hope, one meal at a time.
          </p>
        </div>

        <div className="flex flex-wrap gap-10 lg:gap-20 lg:w-1/2 justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold mb-2">Explore</h2>
            <a href="/" className="hover:underline text-sm">Home</a>
            <a href="/foundation" className="hover:underline text-sm">Foundation</a>
            <a href="/dashboard" className="hover:underline text-sm">Dashboard</a>
            <a href="/contact" className="hover:underline text-sm">Contact</a>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold mb-2">Resources</h2>
            <a href="/volunteers" className="hover:underline text-sm">Volunteers</a>
            <a href="/events" className="hover:underline text-sm">Events</a>
            <a href="/faq" className="hover:underline text-sm">FAQ</a>
          </div>

          <div className="flex flex-col gap-2 items-start">
            <h2 className="text-lg font-semibold mb-2">Connect With Us</h2>
            <div className="flex gap-4 text-2xl">
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-300"><FaLinkedin /></a>
              <a href="#" aria-label="Facebook" className="hover:text-blue-300"><FaFacebook /></a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-300"><FaTwitter /></a>
              <a href="#" aria-label="Instagram" className="hover:text-blue-300"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Annapoori Foundation. All rights reserved.
      </div>
    </motion.div>
  );
};

export default Footer;
