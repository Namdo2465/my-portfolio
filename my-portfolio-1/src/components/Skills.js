import React from "react";
import "../styles/Skills.css";
import { motion } from "framer-motion";
import { SkillsData } from "../data/SkillsData";

const Skills = () => {
  const skillEffect = {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.4,
    },
  };

  return (
    <div className="skills" id="skills">
      <div className="container">
        {/* Heading */}
        <motion.div
          whileInView={skillEffect}
          initial={{ y: "-80px", opacity: 0 }}
          className="heading"
        >
          <p className="heading-sub-text">What I work with</p>
          <p className="heading-text">My Skills</p>
        </motion.div>

        {/* Skills Sections */}
        {Object.entries(SkillsData).map(([category, skills]) => (
          <motion.div
            key={category}
            whileInView={skillEffect}
            initial={{ y: "-80px", opacity: 0 }}
            className="skills-section"
          >
            {/* Category Title */}
            <h3 className="skills-title">{category}</h3>

            {/* Skills Grid */}
            <div className="skills-box">
              {skills.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <div className="skill-icon">{skill.icon}</div>
                  <small className="skill-desc">{skill.name}</small>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
