import React from "react";
import "../Css/MySkills.css";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import Linegradient from "./Linegradient";
import skills from "../assests/skills-image.png"

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  const randomText = () => {
    let text = ["Reactjs", "Nodejs", "SAPUI5", "Expressjs", "MongoDB", "DSA"];
    let letters = text[Math.floor(Math.random() * text.length)];
    console.log(letters);
    return letters;
  };
  const rain = () => {
    let cloud = document.querySelector(".cloud");
    let e = document.createElement("div");
    e.classList.add("drop");
    cloud.appendChild(e);

    let left = Math.floor(Math.ramdon * 100);
    let size = Math.random * 1.5;
    let duration = Math.random() * 1;

    e.innerText = randomText();
    e.style.left = left + "px";
    e.style.fontSize = 0.5 + size + "em";
    e.style.animationDuration = 1 + duration + "s";

    setTimeout(function () {
      cloud.removeChild(e);
    }, 20);
  };
  // setInterval(function(){
  //     rain()
  // },200)
  return (
    <section id="skills" className="pt-10 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          animate={{ y: -100, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p className=" font-playflair text-4xl font-semibold mb-5">
            MY <span className="text-rose-400">Skills</span>
          </p>
          <Linegradient width="w-1/2" />
        </motion.div>
        {/* <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          animate={{ y: -100, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
        <p className=" font-playflair text-4xl font-semibold mb-5">
             <span className="text-rose-400">Technologies</span>
        </p>
        <Linegradient width="w-1/2"/>
        </motion.div> */}
        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-10
            before:w-full  before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transiton={{ delay: 0.5, duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: 200 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <img
                  alt="profile"
                  className="z-10"
                  src={skills}
                />
              </motion.div>
            </div>
          ) : (
            <img
            alt="profile"
            className="z-10"
            src={skills}
          />
          )}
        </div> 
      </div> 
      </section>
  );
};

export default MySkills;
