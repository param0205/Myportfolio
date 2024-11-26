import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from "react";
import menu from "../assests/menu-icon.svg";
import decline from "../assests/close-icon.svg";
import { motion } from "framer-motion";

const Link = ({ page, selectedPage, setselectedPage }) => {
  const spage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === spage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${spage}`}
      onClick={() => setselectedPage(spage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ TopOfPage , selectedPage, setselectedPage }) => {
  const [IsMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreen = useMediaQuery("(min-width : 768px)");
  const Headerbg = TopOfPage ? "" : "bg-rose-500";
  return (
    <nav className={`${Headerbg} z-40 w-full fixed top-0 py-2`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <motion.h4
         variants={{
           hidden : { y : -100 , opacity : 0 },
           visible:{
             opacity:1,
             y:0 ,   
             transistion : { duration : 0.5}
            },
        
         }}
        className="font-playfair text-3xl font-bold hover:text-yellow">
          Software Engineer
        </motion.h4>

        {/*DEKSTOP NAV */}
        {isAboveSmallScreen ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setselectedPage={setselectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setselectedPage={setselectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setselectedPage={setselectedPage}
            />
            <Link
              page="TechTiles"
              selectedPage={selectedPage}
              setselectedPage={setselectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setselectedPage={setselectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-rose-500 p-2"
            onClick={() => setIsMenuToggled(!IsMenuToggled)}
          >
            <img alt="menu-icon" src={menu} />
          </button>
        )}
        {/*Menu Pop-up */}
        {!isAboveSmallScreen && IsMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            {/* Close Icon */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!IsMenuToggled)}>
                <img alt="close icon" src={decline} />
              </button>
            </div>
            {/* Menu Items */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setselectedPage={setselectedPage}
              />
             <Link
                page="Skills"
                selectedPage={selectedPage}
                setselectedPage={setselectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setselectedPage={setselectedPage}
              />
              <Link
                page="TechTiles"
                selectedPage={selectedPage}
                setselectedPage={setselectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setselectedPage={setselectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
