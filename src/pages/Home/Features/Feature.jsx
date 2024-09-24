import { div } from "framer-motion/client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Wave } from "react-animated-text";
import { motion } from "framer-motion";
import img1 from "../../../assets/collab-study.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";

const Feature = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="my-32">
      <div className="w-full flex items-center justify-center tex-center font-bold text-4xl text-red-400 ">
        <Wave text="Features" />
      </div>
      <div className="w-full flex justify-center ">
        <motion.div className="grid md:grid-cols-3 justify-center items-center gap-10"
         initial={{ y: -100 }} // Start off-screen to the left
         animate={{ y: 100 }} // Move to the right
         transition={{ duration: 1 }} // Animation duration (1 second)
        >
          <div
            className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 hover:scale-105"
           
          >
            <img
              src={img1}
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <h2 className="text-xl font-semibold tracking-wide">
              Collaborative Study     </h2>
            </div>
            <p className="dark:text-gray-800">
            Enable users to create and join live study groups with features like video calls, shared whiteboards, and real-time note-taking. 
            </p>
          </div>

          <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 hover:scale-105">
            <img
              src={img2}
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
             
              <h2 className="text-xl font-semibold tracking-wide">
              Task Tracker
              </h2>
            </div>
            <p className="dark:text-gray-800">
            Provide users with a personal dashboard to manage their study goals, assignments, and track progress. 
            </p>
          </div>
          <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 hover:scale-105">
            <img
              src={img3}
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
             
              <h2 className="text-xl font-semibold tracking-wide">
              Resource Sharing Hub
              </h2>
            </div>
            <p className="dark:text-gray-800">
            Allow users to share and access study materials like lecture notes, books, and problem sets. Anyone can share assignments.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Feature;
