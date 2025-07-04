import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "./Image";

const WhyUsCard = ({ image, title, desc, index }) => {
  const getInitialX = (index) => {
    // if (index === 0) return 0; // from left
    // if (index === 2) return 0; // from right
    // return 0; // no horizontal movement
  };

  const getInitialY = (index) => {
    // if (index === 1) return 100; // from bottom
    // return 0; // no vertical movement
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  x.set(200);
  y.set(200);

  const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, 400], [-45, 45]);

  function handleMouse(event) {
    // const rect = event.currentTarget.getBoundingClientRect();

    // x.set(event.clientX - rect.left);
    // y.set(event.clientY - rect.top);
  }

  function handleMouseLeave() {
    // x.set(10);
    // y.set(10);
  }

  return (
    // <motion.div
    //   onMouseMove={handleMouse}
    //   onMouseLeave={handleMouseLeave}
    //   style={{ perspective: 400 }}
    //   className="w-full lg:w-1/4"
    // >
      <motion.div
        className="w-full flex flex-col gap-2 items-center rounded-2xl p-4 shadow hover:shadow-2xl"
        whileHover={{ boxShadow: "lg", scale: 1 }}
        transition={{ type: "spring", stiffness: 10, duration: 0.3 }}
        initial={{
          opacity: 0,
          x: getInitialX(index),
          y: getInitialY(index),
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
        style={{
          rotateX,
          rotateY,
        }}
      >
        <Image image={image} alt="" style={"w-20"} />
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="p-8">{desc}</p>
      </motion.div>
//    </motion.div>
  );
};

export default WhyUsCard;
