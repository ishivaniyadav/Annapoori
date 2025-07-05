import React from "react";
import { motion } from "framer-motion";

const OurImpact = () => {
  const impactData = [
    {
      title: "1,000+ meals",
      action: "distributed to families in need",
      lastDayCount: "+7",
      lastDayTime: "delivered yesterday",
    },
    {
      title: "4 cities",
      action: "across India reached",
      lastDayCount: "+1",
      lastDayTime: "new location added",
    },
    {
      title: "27 volunteers",
      action: "driving this mission",
      lastDayCount: "+3",
      lastDayTime: "joined this week",
    },
  ];

  return (
    <div className="w-full bg-[#eceaea] py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row rounded-3xl shadow-xl overflow-hidden bg-white">
        
        <div className="w-full lg:w-1/2 bg-white p-8 flex flex-col justify-between gap-6">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Impact</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Powered by a passionate team of 40+ volunteers, we’re making a difference across India—
              one meal, one city, one community at a time. Every contribution fuels our mission to ensure
              no family sleeps hungry.
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-blue-900 font-semibold hover:underline"
            >
              Learn more →
            </a>
          </div>

        </div>

        <div className="w-full lg:w-1/2 bg-blue-900 text-white p-8 flex flex-col justify-center gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-blue-900 rounded-xl p-4 shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-sm mt-1">{item.action}</p>
                <p className="text-xs mt-3 text-blue-100 italic">
                  {item.lastDayCount} {item.lastDayTime}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurImpact;
