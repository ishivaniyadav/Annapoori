import React from "react";
import { motion } from "framer-motion";
import { IoPeople, IoShieldCheckmark, IoTime } from "react-icons/io5";
const WhyUs = () => {
  const whyUs = [
    {
      icon: <IoPeople className="text-white text-xl" />,
      title: "Community-Driven",
      desc: "We collaborate with local communities to understand real needs and create long-lasting impact.",
    },
    {
      icon: <IoShieldCheckmark className="text-white text-xl" />,
      title: "Transparent & Trusted",
      desc: "Every donation is tracked. We provide full visibility into where your contributions go.",
    },
    {
      icon: <IoTime className="text-white text-xl" />,
      title: "Always-On Support",
      desc: "We work 24/7 to respond to emergencies and provide help when it’s needed most.",
    },
  ];

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-20 bg-[#eceaea]" id="whyus">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-12">
        Why Choose Us?
      </h2>

      <div className="relative border-l-4 border-blue-900 pl-6 ml-2 sm:ml-4 space-y-10 w-full">
        {whyUs.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: true }}
            className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 lg:mx-10"
          >
            
            <div className="absolute -left-[42px] top-5 w-9 h-9 sm:w-10 sm:h-10 bg-blue-900 rounded-full flex items-center justify-center shadow-md">
              {item.icon}
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
