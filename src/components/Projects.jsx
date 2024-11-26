import React from "react";
import Linegradient from "./Linegradient";
import { motion } from "framer-motion";
import p1 from '../assests/p1.png';
import project2 from "../assests/project-2.jpeg";
import project3 from "../assests/project-3.jpeg";
import project4 from "../assests/project-4.jpeg";
import project5 from "../assests/project-5.jpeg";
import project6 from "../assests/project-6.jpeg";
import project7 from "../assests/project-7.jpeg";


const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

const projectvairant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
console.log(p1);
const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transistion duration-500
   bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projecttitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div className="relative" variants={projectvairant}>
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          It was a great experience working here with this organisation
        </p>
      </div>
      <img src={`src/assests/${projecttitle}.jpeg`} alt={projecttitle}></img>
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
          Experienced in scaleable and Responsive UI developement using Agile
          Technologies . Acquinted with SAP-BTP concepts as well as CI/CD and
          Cloud-Foundry
        </p>
      </motion.div>

      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true, amount: 0.5 }}
          variants={container}
          transition={{ delay : 0.4}}
        >
          <div
            className="flex justify-center text-center p-10 items center bg-rose-500 max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold "
          >
            BEAUTIFUL USER EXPERIENCES
          </div>
          <Project title="Project 1" />
          <Project title="Project 2" />

          <Project title="Project 3" />
          <Project title="Project 4" />
          <Project title="Project 5" />

          <Project title="Project 6" />
          <Project title="Project 7" />
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
