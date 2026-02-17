import React from "react";
import About from "./About";
import Contact from "./Contact";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Achievements from "./Achievements";
import Chatbot from "./Chatbot";
// import Works from './Works';

const Main = ({ nav, handleNav, closeNav }) => {
  return (
    <div onClick={closeNav} className="main">
      <HeroSection nav={nav} handleNav={handleNav} />
      <About />
      <Education />
      <Experience />
      <Achievements />
      <Skills />
      {/* <Works /> */}
      <Contact />
      <Chatbot />
    </div>
  );
};

export default Main;
