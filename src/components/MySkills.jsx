import React from "react";
import "../Css/MySkills.css";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import Linegradient from "./Linegradient";
import skills from "../assests/skills-image.png";

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
      <div className="md:flex md:justify-between md:gap-16 mt-10">
        <motion.div
          className="md:w-1/2"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          // viewport={{ once: true, amount: 0.5 }}
          animate="animate"
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p className=" font-playflair text-4xl font-semibold mb-5">
            MY <span className="text-rose-400">Skills</span>
          </p>
          <Linegradient width="w-full" />
          <p className="mt-10 mb-7">
            Experienced in scaleable and Responsive UI developement using Agile
            Technologies . Acquinted with SAP-BTP concepts as well as CI/CD and
            Cloud-Foundry
          </p>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
            before:w-full  before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <motion.div
                // initial={{ x: 100, opacity: 0 }}
                // whileInView={{ x: 0, opacity: 1 }}
                // viewport={{ once: true, amount: 0.5 }}
                initial = "hidden"
                animate= "visible"
                variants={{
                  hidden: { opacity: 0, x: 200 },
                  visible: { opacity: 1, x: 0 ,  transiton : { delay : 0.2 , duration: 0.5 }},
                }}
              >
                <img alt="profile" className="z-10" src={skills} />
              </motion.div>
            </div>
          ) : (
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              // viewport={{ once: true, amount: 0.5 }}
              transiton={{ duration: 1.5 }}
              // variants={{
              //   hidden: { opacity: 0, x: 200 },
              //   visible: { opacity: 1, x: 0 },
              // }}
            >
              <img alt="profile" className="z-10" src={skills} />
            </motion.div>
          )}
        </div>
      </div>
      {/* {Skills} */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          // viewport={{ once: true , amount : 0.5}}
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 z-10">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl">Experience</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-rose-500 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Experts in React.js , node.js , Sap ui5/fiori , SAP btp
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          // viewport={{ once: true , amount : 0.5}}
          whileInView="visible"
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 z-10">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-amber-100 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Experts in React.js , node.js , Sap ui5/fiori , SAP btp
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          // viewport={{ once: true , amount : 0.5}}
          whileInView="visible"
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 z-10">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl">Innovative</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-cyan-200 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Experts in React.js , node.js , Sap ui5/fiori , SAP btp
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
