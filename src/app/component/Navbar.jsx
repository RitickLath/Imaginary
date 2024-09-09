"use client";
import React, { useState } from "react";
import { IoSparkles } from "react-icons/io5";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <div
      className={`py-4 px-4 lg:px-6 border-b-[1.5px] border-[var(--bordermargin)] bg-[var(--form-background)]`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-[var(--primary-purple)] font-medium text-xl flex space-x-2 items-center">
          <IoSparkles />
          <span className="">IMAGINARY</span>
        </h1>

        <button
          onClick={toggleMode}
          className={`flex items-center space-x-2 px-3 py-1 rounded-lg text-white bg-gradient-to-r from-[#3B1179] to-[#4C2EA5]`}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
          <span className="hidden sm:block">
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
