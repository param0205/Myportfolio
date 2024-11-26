import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Dotgroup from "./components/Dotgroup";
import Landingpage from "./components/Landingpage";
import useMediaQuery from "./hooks/useMediaQuery";
import Linegradient from "./components/Linegradient";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import TechTiles from "./components/TechTiles";
import Contact from "./components/Contact";
const App = () => {
  const [selectedPage, setselectedPage] = useState("home");
  const [TopOfPage, setTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setTopOfPage(true);
      if (window.scrollY !== 0) setTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        TopOfPage={TopOfPage}
        selectedPage={selectedPage}
        setselectedPage={setselectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <Dotgroup
            selectedPage={selectedPage}
            setselectedPage={setselectedPage}
          />
        )}
        <Landingpage setselectedPage={setselectedPage} />
      </div>
      <Linegradient />
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>
      <Linegradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Projects/>
      </div>
      <Linegradient />
      <div className="w-5/6 mx-auto">
        <TechTiles/>
      </div>
      <Linegradient />
      <div className="w-5/6 mx-auto">
        <Contact/>
      </div>
    </div>
  );
};

export default App;
