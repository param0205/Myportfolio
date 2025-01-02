import React, { useState } from "react";
import Linegradient from "./Linegradient";
import { motion } from "framer-motion";
import p1 from "../assests/p1.png";
import project2 from "../assests/project-2.jpeg";
import project3 from "../assests/project-3.jpeg";
import project4 from "../assests/project-4.jpeg";
import project5 from "../assests/project-5.jpeg";
import project6 from "../assests/project-6.jpeg";
import project7 from "../assests/project-7.jpeg";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectvairant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const desc = {
  description: "",
};
console.log(p1);
const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transistion duration-500
   bg-grey z-30 flex flex-col justify-center items-center text-center p-0 text-deep-blue`;
  const projecttitle = title.split(" ").join("-").toLowerCase();

  switch (projecttitle) {
    case "smartwarehouse": {
      desc.description =
        "Developed a Warehouse Management System using SAP UI5/Fiori, boosting productivity by 50% and streamlining package flow tracking. Hosted the app on the SAP Store, with a $5K annual recurring cost, showcasing its commercial value";
    }break;
    case "sap-im/wm": {
      desc.description =
        "Developed responsive React.js solutions for warehouse management using Material-UI, Bootstrap, while leveraging ES6+ JavaScript for reusable components and performance optimization.";
    }break;
    case "sap-ewm": {
      desc.description =
        " Designed and developed the web app for the Warehouse Management product, automating SAP ERP warehouse module process flows using React.js, Material-UI, Bootstrap,Framer Motion,WebSocket,caching and Base64 encoding ";
    }break;
    case "project-4": {
      desc.description =
        "Designed and developed robust backend APIs for e-commerce and real-time chat applications using Node.js. Implemented core functionalities such as product management, user authentication, cart and order processing, and payment integration for the e-commerce platform. Built real-time messaging features for the chat application using WebSocket, including user presence tracking, room management, and chat history storage with MongoDB";
    }break;
  }

  return (
    <motion.div className="relative" variants={projectvairant}>
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-2">
          {desc.description}
        </p>
      </div>
      <img
        src={`/${projecttitle}.jpeg`}
        alt={projecttitle}
        className="relative w-full md:h-full"
      ></img>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        // viewport={{ once: true, amount: 0.5 }}
        animate={{ y: -100, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div>
          <p className="font-playflair text-4xl font-semibold mb-5">
            Pro<span className="text-rose-400">jects</span>
          </p>
          <div className="flex justify-center mt-5">
            <Linegradient width="w-full" />
          </div>
        </div>
        <p className="mt-10 mb-7">
          Here are some of my Projects I have worked on over the period of last
          2.5 years
        </p>
      </motion.div>

      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true, amount: 0.5 }}
          variants={container}
          transition={{ delay: 0.4 }}
        >
          <div className="flex justify-center text-center p-10 items center bg-rose-500 max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold ">
            BEAUTIFUL USER EXPERIENCES
          </div>
          <Project title="SAP-IMWM" />
          <Project title="SmartWarehouse" />

          {/* <Project title="SmartWarehouse" /> */}
          <Project title="SAP-EWM" />
          <Project title="Project 5" />

          {/* <Project title="Project 6" />
          <Project title="Project 7" /> */}
          <div
            className="flex justify-center text-center p-10 items center bg-teal-500 
             max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold "
          >
            SMOOTH USER EXPERIENCES
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
