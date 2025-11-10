import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
const faqItems = [
  {
    question: "Who can donate food through Annapoori?",
    answer:
      "Anyone! Whether you're an individual, a restaurant, or an event organizer — all clean, edible food is welcome.",
  },
  {
    question: "What happens after I schedule a donation?",
    answer:
      "Our team reviews the request, confirms the pickup, and ensures the food is delivered to someone in need within hours.",
  },
  {
    question: "Is there any cost involved in donating?",
    answer:
      "No, food donation is completely free. We're here to make giving easy and impactful.",
  },
  {
    question: "What if I need help with food?",
    answer:
      "You or someone on your behalf can reach out via SMS, missed call, or visit a community center we're partnered with.",
  },
  {
    question: "How can I support if I don’t have food to give?",
    answer:
      "You can volunteer your time, spread the word, or donate money to help us serve more people every day.",
  },
];


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full bg-[#fff] py-20 px-4 md:px-12 text-gray-800"
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-500">
          Answers to the most common questions about donating, volunteering, and support.
        </p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {faqItems.map((item, index) => {
          const isOpen = index === activeIndex;

          return (
            <div
              key={index}
              className="border border-gray-200 bg-white rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none transition hover:bg-gray-50"
              >
                <span className="text-lg font-medium">{item.question}</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="text-xl" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 text-gray-600 text-base"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
