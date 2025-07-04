import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../../../components/Button";
import { CgClose } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navbarLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Foundation",
      link: "#",
    },
    {
      name: "how to help?",
      link: "#",
    },
    {
      name: "volunteers",
      link: "#",
    },
    {
      name: "events",
      link: "#",
    },
    {
      name: "contact",
      link: "/contact",
    },
  ];
  return (
    <>
      {/* // desktop navbar */}
      <div className="w-full bg-white lg:pt-8">
        <motion.div
          className={`hidden text-blue-900 lg:justify-between bg-white lg:items-center lg:mx-12 lg:flex lg:h-12 filter`}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          exit={{ opacity: 0, y: -100 }}
        >
          {/* logo span */}
          <span className="text-3xl font-bold">Annapoori</span>
          {/* links */}
          <motion.div className="flex items-center gap-8 *:capitalize *:font-semibold">
            {navbarLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.link}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {link.name}
              </motion.a>
            ))}
            <Button classname="bg-bue-900" name="join now" link={"/register"} />
          </motion.div>
        </motion.div>
      </div>
      {/* // mobile navbar */}
      <div
        className={`relative w-full text-blue-900 rounded-xl px-4 py-4 filter backdrop-blur-md bg-white flex justify-between items-center lg:hidden`}
      >
        {/* mobile view logo span */}
        <span className="text-xl font-bold text-blue-900">Annapoori</span>
        {/* mobile view navigation */}
        <motion.div
          className={`${
            open ? "flex h-screen" : "hidden"
          } absolute top-0 z-40 left-0 px-4 w-full h-screen bg-white flex-col items-center justify-center *:capitalize *:font-semibold lg:flex`}
        >
          {/* mobile view close button */}
          <motion.span
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 800, damping: 17 }}
            className="block absolute top-6 right-6 bg-white text-blue-900 rounded-full p-2 z-40 lg:hidden"
            onClick={() => setOpen(!open)}
          >
            <CgClose />
          </motion.span>
          {/* mobile view Navbar links */}
          {navbarLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.link}
              className="w-full h-12 flex items-center justify-center py-2 text-blue-900 font-semibold bg-white capitalize"
              onClick={() => setOpen(!open)}
              whileHover={{ scale: 1.2 }}
              initial={
                open ? { opacity: 0, x: -100 * index } : { opacity: 1, x: 0 }
              }
              animate={
                open ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 * index }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>
        {/* mobile view menu button */}
        <div className="flex items-center gap-4 ">
          <Button className="bg-blue-900" name={"join now"} link={"/register"} />
          <motion.span
            className=" shadow bg-white p-2 rounded-xl text-blue-900"
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 800, damping: 17 }}
            onClick={() => setOpen(!open)}
          >
            <FiMenu className="text-2xl" />
          </motion.span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
