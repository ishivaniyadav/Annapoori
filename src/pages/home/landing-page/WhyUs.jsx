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
    <div className="w-full py-20 px-6 lg:px-32 bg-[#eceaea]" id="whyus">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-16">
        Why Choose Us?
      </h2>

      <div className="relative border-l-4 border-blue-900 ml-4 pl-6 space-y-12 max-w-4xl mx-auto">
        {whyUs.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: true }}
            className="relative bg-white p-6 rounded-xl w-270 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Icon Dot */}
            <div className="absolute -left-[48px] top-6 w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center shadow-md">
              {item.icon}
            </div>

            {/* Text Content */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
