import React from "react";
import Linegradient from "./Linegradient";
import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { RiCss3Line } from "react-icons/ri";
import { SiSap } from "react-icons/si";
import { animate, motion } from "framer-motion";


const reanimate =  (time) =>({
     initial : { y : -10} ,
     animate : {
        y : [-10 , 10],
        transition : {
            duration : time,
            ease: "linear",
            repeat : Infinity ,
            repeatType : "reverse"
        }
     }
})

const TechTiles = () => {
  return (
    <section id="techtiles" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        animate={{ y: -50, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div>
          <p className="font-playflair text-4xl font-semibold mb-5">
            Techn<span className="text-rose-400">ologies</span>
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
        <motion.div
          className="flex flex-wrap justify-center items-center gap-5 pt-30"
          initial="hidden"
          whileInView={{ x: 0, opacity: 1 }}
          animate={{ x: -100, opacity: 0 }}
          transition={{ delay : 0.2 , duration  : 0.7}}
        >
          <motion.div animate="animate"
            initial = "initial"
            variants={reanimate(1)}
            className="rounded-2xl border-4 border-neutral-800 gap-4"
             >
            <RiReactjsLine className="text-8xl text-cyan-300"/>
          </motion.div>
          <motion.div animate="animate"
            initial = "initial"
            variants={reanimate(1.5)}
            className="rounded-2xl border-4 border-neutral-800 gap-4"
             >
            <RiJavascriptLine  className="text-8xl text-orange-400"/>
          </motion.div>
          <motion.div animate="animate"
            initial = "initial"
            variants={reanimate(2)}
            className="rounded-2xl border-4 border-neutral-800 gap-4"
             >
            <RiHtml5Line className="text-8xl text-emerald-500" />
          </motion.div>
          <motion.div animate="animate"
            initial = "initial"
            variants={reanimate(2.5)}
            className="rounded-2xl border-4 border-neutral-800 gap-4"
             >
            <RiCss3Line className="text-8xl text-rose-400"/>
          </motion.div>
          <motion.div animate="animate"
            initial = "initial"
            variants={reanimate(3)}
            className="rounded-2xl border-4 border-neutral-800 gap-4"
             >
            <SiSap className="text-8xl text-cyan-500" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechTiles;
