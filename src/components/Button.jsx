import React from "react";
import { motion } from "framer-motion";

const Button = ({ name, classes, icon, link }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1,
        boxShadow: "0px 2px 0px rgba(255, 255, 255, 0.5)",
      }}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
        duration: 0.3,
      }}
      className={`${classes} py-2 px-4 rounded-full text-white font-semibold bg-blue-900 capitalize flex gap-1 items-center justify-center`}
    >
      <a href={link} className="flex items-center gap-2">
        {name} {icon && <span className="mt-1 text-2xl">{icon}</span>}
      </a>
    </motion.button>
  );
};

export default Button;
