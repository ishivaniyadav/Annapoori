import React from "react";
import { motion } from "framer-motion";
import { FaSms, FaPhoneAlt } from "react-icons/fa";

const OfflineSupport = () => {
  return (
    <div className="bg-[#fff] text-[#1F2937] px-6 py-16 w-full flex flex-col items-center gap-8 lg:px-24 lg:py-20">
      {/* Heading */}
      <motion.h2
        className="text-3xl lg:text-4xl font-bold text-blue-900 text-center leading-tight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        No Internet or Smartphone? <br className="hidden lg:block" /> We're Still Here to Help
      </motion.h2>

      {/* Description */}
      <p className="text-center text-gray-700 max-w-2xl">
        If you or someone you know doesn't have access to a smartphone or internet, they can still reach out for help.
        Just send an SMS or give a missed call and our team will get in touch.
      </p>


      {/* Cards */}
      <div className="w-full max-w-3.5xl grid grid-cols-1 md:grid-cols-2 gap-6 text-white text-lg font-semibold">
        <div className="bg-blue-900 px-6 py-5 rounded-xl shadow flex items-center justify-center gap-3">
          <FaSms className="text-2xl" />
          SMS <span className="font-bold">“FOOD”</span> to <span>+91 91234 56789</span>
        </div>
        <div className="bg-green-500 px-6 py-5 rounded-xl shadow flex items-center justify-center gap-2">
          <FaPhoneAlt className="text-xl" />
          Missed Call: <span>+91 98765 43210</span>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-sm text-gray-500 text-center max-w-md mt-2">
        Volunteers, community workers, or neighbors can also use these options on behalf of someone in need.
      </p>
    </div>
  );
};

export default OfflineSupport;
