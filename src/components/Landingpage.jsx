import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import profile from "../assests/profile-image.png";
import SocialMediaIcons from "./SocialMediaIcons";

const Landingpage = ({setselectedPage}) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* {Image Section} */}
      <div className="md:order-2 flex justify-center basis-3/6 z-19 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
         before:rounded-t-[500px] before:w-full before:max-w-[400px] before:h-full
         before:border-2 before:border-blue before:z-[-1]"
          >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transiton={{ delay:0.5, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: 200 },
            visible: { opacity: 1, x: 0 },
          }}
        >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 trasition duration-500 z-10 w-full
              max-w-[-400px] md:max-w-[600px]"
              src={profile}
            />
         </motion.div>
          </div>
        ) : (
          <div>
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 trasition duration-500 z-10 w-full
              max-w-[-400px] md:max-w-[600px]"
              src={profile}
            />
          </div>
        )}
      </div>
      <div className="z-30 basis-3/6 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transiton={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p
            className={`text-6xl font-playflair z-10 text-center md:text-start`}
          >
            Param {""}
            <span
              className="xs:relative xs:text-violet-500 xs:font-semibold z-20
                 xs:before:content-brush before:absolute before:-left-[25px]
                before:-top-[70px] before:z-[-1]"
            >
              Singh
            </span>
          </p>
          <p className="mt-10 mb-7 text-sm text-center md:tect-start">
            JavaScript Developer with over 2.5 years of experience in creating
            user interfaces for custom React.js and SAP UI5 applications.
            Expertise in React.js, Redux Toolkit, and ES6, along with a deep
            understanding of SAP technologies such as Fiori, UI5, BTP, and BAS.
            Proficient in using modern development tools such as MTA and Visual
            Studio, with a strong focus on building responsive, scalable, and
            maintainable applications. Dedicated to delivering high-quality code
            and continuously expanding technical knowledge
          </p>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transiton={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
            hover:bg-blue hover:text-white transition duration-500"
            href="#contact"
            onClick={() => setselectedPage("contact")}
          >Contact Me</AnchorLink>
           <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            href="#contact"
            onClick={() => setselectedPage("contact")}
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex
            items-center justify-center font-playflair px-10">
            Let's Talk
            </div></AnchorLink>
        </motion.div>
        <motion.div 
                  className="flex mt-5 justify-center md:justify-start"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transiton={{ delay: 0.4, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}>
          <SocialMediaIcons></SocialMediaIcons>
        </motion.div>
      </div>
    </section>
  );
};

export default Landingpage;
