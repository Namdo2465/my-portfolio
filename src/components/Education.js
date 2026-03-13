import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import "../styles/Education.css";

const educationData = [
  {
    id: 1,
    degree: "BA in Computer Science & Mathematics",
    school: "Grinnell College",
    location: "Grinnell, Iowa, USA",
    period: "2025 - 2029 (Expected)",
    activities: [
      "Student Governmental Association: Student Education Policy Committee (SEPC) coordinator",
      "Grinnell Pioneer Capital Investment",
      "Vietnamese Student Association",      
      "International Soccer Club",
    ],
  },
  {
    id: 2,
    degree: "International Baccalaureate Diploma Programme - O Levels",
    school: "Anglo-Chinese School Independent",
    location: "Singapore",
    period: "2021 - 2024",
    activities: [
        "43/45 for IB Diploma Programme",
        "Vice President of Mathematics Competition Team",
        "Vice Captain of Tan Kah Kee(TKK) House",
        "Member of Boarding School Student Council",
        "Executive committee member of Blood Drive donation",
        "Member of School Soccer Team",
        "Head of Logistics for Choir"],
  },
  {
    id: 3,
    degree: "Vietnamese High School Diploma",
    school: "Hanoi - Amsterdam High School for the Gifted",
    location: "Hanoi, Vietnam",
    period: "Aug 2020 - Dec 2020",
    activities: [
        "5th place in the country-wide entrance exam for the Math-specialised class of 2023",
        "Member of Hanoi-Amsterdam Math Club",],
  },
  // Add more education entries as needed
];

const Education = () => {
  const fadeIn = {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  };

  return (
    <div className="education" id="education">
      <div className="container">
        <div className="heading">
          {/* Static - no animation */}
          <p className="heading-text">My Journey</p>

          {/* Slides in every time */}
          <motion.p
            className="heading-sub-text"
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ type: "spring", duration: 2, bounce: 0.3 }}
          >
            Education
          </motion.p>
        </div>

        <div className="timeline">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={fadeIn}
              viewport={{ once: false }}
            >
              <div className="timeline-content">
                <div className="timeline-icon">
                  <FaGraduationCap />
                </div>
                <div className="timeline-date">
                  <span>{edu.period}</span>
                </div>
                <h3 className="timeline-title">{edu.degree}</h3>
                <h4 className="timeline-school">{edu.school}</h4>
                <p className="timeline-location">{edu.location}</p>
                {edu.activities && (
                  <ul className="timeline-achievements">
                    {edu.activities.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
