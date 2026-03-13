import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/my_img.JPG'
import { FaHandSparkles, FaRocket, FaLaptopCode, FaDumbbell } from 'react-icons/fa';

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Who I am</p>
                    <p className='heading-text'>About Me</p>
                  </motion.div>
                  <div className="split-about">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                      <p><FaHandSparkles className="about-icon" /> Hi there! I'm Nam, a Computer Science & Mathematics undergrad at Grinnell College and a former A*STAR Scholar from Anglo-Chinese School Independent in Singapore. <FaRocket className="about-icon" /></p>
                      <br />
                      <p><FaLaptopCode className="about-icon" /> I love problems that linger in my head long after I’ve closed my laptop: the kind that make me want to chase one more idea or test one more assumption. Through months of hands-on experience at FinBud AI, 
                      the Center for Environmental Economics and Climate Change, and Career Foundation Hub, combined with a largely self-directed learning journey, I’ve built a strong foundation in backend development, AI-driven systems, and applied quantitative modeling. 
                      This hands-on exposure has strengthened my ability to design efficient, scalable applications and pushed me to continuously take on more challenging and meaningful projects.</p>
                      <br />
                      <p><FaDumbbell className="about-icon" /> Beyond academics and technical work, I’m part of Grinnell's Student Governmental Association, where I help coordinate academic initiatives and act as the connection between students and faculties. Outside of that, you’ll usually find me playing soccer, at the gym, watching K-dramas, or investing a questionable amount of emotional energy into Chelsea Football Club.</p>
                  </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>  
          </div>
      </>
  )
};

export default About;
