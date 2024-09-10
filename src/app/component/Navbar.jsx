"use client";
import React, { useState } from "react";
import { IoSparkles } from "react-icons/io5";
import { FaSun, FaMoon } from "react-icons/fa";

// Modular styles
const navbarStyles = {
  navbarContainer: `z-10 fixed top-0 left-0 w-full h-[4rem] py-4 px-4 lg:px-6 border-b-[1.5px] border-[var(--bordermargin)] bg-[var(--form-background)]`,
  title:
    "text-[var(--primary-purple)] font-medium text-xl flex space-x-2 items-center",
  button:
    "flex items-center space-x-2 px-3 py-2 rounded-lg shadow-md bg-gradient-to-r from-[var(--from)] to-[var(--to)] ",
  buttonText: "hidden sm:block",
};

const Navbar = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  // Function to toggle between light and dark modes
  const toggleMode = () => {
    setIsLightMode(!isLightMode);
    document.body.classList.toggle("light-mode", !isLightMode);
  };

  return (
    <div className={navbarStyles.navbarContainer}>
      <div className="flex justify-between items-center">
        <h1 className={navbarStyles.title}>
          <IoSparkles />
          <span>IMAGINARY</span>
        </h1>

        <button onClick={toggleMode} className={navbarStyles.button}>
          {isLightMode ? <FaSun /> : <FaMoon />}
          <span className={navbarStyles.buttonText}>
            {isLightMode ? "Dark Mode" : "Light Mode"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
