import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./pages/home/landing-page/Navbar";
import HomeLayout from "./pages/home/HomeLayout";
import ContactUs from "./pages/contact/ContactUs";
import Stripe from "./pages/StripePage";
const App = () => {

  return (
    <div className="text-[#FAFAFA]">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/stripe" element={<Stripe />} />
        </Routes>
      </Router>
      <Toaster />
    </div>
  );
};

export default App;
