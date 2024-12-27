import React from "react";
import { motion } from "framer-motion";
import Linegradient from "./Linegradient";

const WorkExp = () => {
  return (
    <section id="workexp" className="pt-10 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-10">
        <motion.div
          className="md:w-1/2"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          // viewport={{ once: true, amount: 0.5 }}
          animate="animate"
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div>
            <p className=" font-playflair text-4xl font-semibold mb-5">
              Work <span className="text-rose-400">Experience</span>
            </p>
            <Linegradient width="w-[300px]" />
          </div>
        </motion.div>
      </div>
      <div className="md:flex md:justify-between mt-16">
        <motion.div
          className="md:w-full"
          initial="hidden"
          // viewport={{ once: true , amount : 0.5}}
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative h-32 z-10">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl">
                Software Engineer, Incture Technologies
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-rose-500 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Built responsive UIs with React.js, SAP UI5/Fiori, Material-UI,
            Bootstrap, CSS3, and HTML5, using reusable components and ES6+
            JavaScript for efficient, maintainable code. Translated Figma
            designs into pixel-perfect, high-performance interfaces, ensuring
            design fidelity.Optimized React components with modern hooks and
            Redux for maximum performance across devices and browsers.
            Integrated RESTful APIs, ensuring seamless data flow and resolving
            back-end integration issues.
          </p>
        </motion.div>
      </div>
      <div>
        <motion.div
          className="md:w-full"
          initial="hidden"
          // viewport={{ once: true , amount : 0.5}}
          whileInView="visible"
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative h-32 z-10">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl">
                Software Engineer,Intern, Incture Technologies
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-fuchsia-400 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Developed a Timesheet Management Solution to track working hours and
            provide training recommendations based on individual and team
            performance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExp;
