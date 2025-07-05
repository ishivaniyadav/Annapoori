import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { auth, provider } from "../../../firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  const navbarLinks = [
    { name: "Home", link: "/" },
    { name: "Foundation", link: "/foundation" },
    { name: "volunteers", link: "/volunteers" },
    { name: "events", link: "/events" },
    { name: "dashboard", link: "/dashboard"}
  ];

  const AuthButton = () => {
    if (user) {
      return (
        <motion.button
          onClick={handleLogout}
          className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-950 transition-all"
          whileTap={{ scale: 0.95 }}
        >
          Logout
        </motion.button>
      );
    } else {
      return (
        <Link to="/auth">
          <motion.button
            className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-950 transition-all"
            whileTap={{ scale: 0.95 }}
          >
            Join Now
          </motion.button>
        </Link>
      );
    }
  };


  return (
    <>
      <div className="w-full bg-white lg:pt-8">
        <motion.div
          className="hidden text-blue-900 lg:justify-between bg-white lg:items-center lg:mx-12 lg:flex lg:h-12"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          exit={{ opacity: 0, y: -100 }}
        >
          <span className="text-3xl font-bold">Annapoori</span>
          <div className="flex items-center gap-8 *:capitalize *:font-semibold">
            {navbarLinks.map((link, index) => (
             <a
              key={index}
              href={link.link}
              className="hover:text-blue-800 hover:underline transition-all duration-200"
            >
              {link.name}
            </a>

            ))}
            <AuthButton />
          </div>
        </motion.div>
      </div>
      
      <div className="relative w-full text-blue-900 px-4 py-4 lg:hidden bg-white flex justify-between items-center">
        <span className="text-xl font-bold text-blue-900">Annapoori</span>
        <motion.div
          className={`${
            open ? "flex h-screen" : "hidden"
          } absolute top-0 z-40 left-0 px-4 w-full h-screen bg-white flex-col items-center justify-center`}
        >
          <motion.span
            whileTap={{ scale: 0.9 }}
            className="absolute top-6 right-6 bg-white text-blue-900 rounded-full p-2"
            onClick={() => setOpen(false)}
          >
            <CgClose />
          </motion.span>
          {navbarLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="w-full h-12 flex items-center justify-center py-2 font-semibold capitalize hover:text-blue-800 hover:underline transition-all duration-200"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="mt-6">
            <AuthButton />
          </div>
        </motion.div>
        <div className="flex items-center gap-4">
          <AuthButton />
          <motion.span
            className="bg-white p-2 rounded-xl text-blue-900"
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(true)}
          >
            <FiMenu className="text-2xl" />
          </motion.span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
