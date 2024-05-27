import React from "react";
import { motion } from "framer-motion";
import icon from "../assets/file.png";

const HeroBanner = () => {
  return (
    <div className="bg-blue-100 h-screen flex flex-col items-center justify-center text-center p-4">
      <div className="flex w-full h-2/3">
        <motion.div
          className="flex justify-start w-1/2"
          animate={{ opacity: [0, 1], y: [-20, 0] }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center relative w-[500px] ml-16">
            <h1 className="text-6xl text-left">
              Find the Best Activity for your Child!
            </h1>
            <div className="ml-4 flex absolute items-center justify-center w-16 h-16 bottom-[40px] right-0 bg-blue-900 rounded-full cursor-pointer">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </div>
          </div>
        </motion.div>
        <div className="flex items-center justify-center w-1/2">
          <img className="w-auto h-full" src={icon} alt="Activity Icon" />
        </div>
      </div>
      <div className="flex gap-9 mt-8">
        <motion.button
          className="bg-yellow-400 px-6 py-3 rounded-[25px] hover:bg-yellow-800 shadow-md hover:shadow-lg"
          animate={{ scale: [0.9, 1] }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <a href="#" className="text-white font-semibold">
            For Academies
          </a>
        </motion.button>
        <motion.button
          className="bg-yellow-400 px-6 py-3 rounded-[25px] hover:bg-yellow-800 shadow-md hover:shadow-lg"
          animate={{ scale: [0.9, 1] }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <a href="#" className="text-white font-semibold">
            SpArts in your home
          </a>
        </motion.button>
      </div>
    </div>
  );
};

export default HeroBanner;
