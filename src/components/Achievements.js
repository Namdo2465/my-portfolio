import React from "react";
import { motion } from "framer-motion";
import { 
  FaTrophy, 
  FaMedal, 
  FaAward, 
  FaCertificate,
  FaStar,
} from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { HiOutlineDocumentText } from "react-icons/hi";
import "../styles/Achievements.css";
import CV from "../data/namdo_full_resume.pdf";

const achievementsData = [
  {
    id: 1,
    title: "Gold Medal in Singapore Mathematics Olympiad",
    organization: "Singapore Mathematical Society",
    description: "National mathematics competition for highschool students in Singapore, where I secured a position in top 50 overall.",
    icon: <FaTrophy />,
  },
  {
    id: 2,
    title: "A*STAR Science Scholarship",
    organization: "Agency for Science, Technology and Research",
    description: "A highly prestigious, fully funded 4-year Singapore government scholarship awarded to only 5 students across all of Vietnam each year.",
    icon: <FaGoogleScholar />,
  },
  {
    id: 3,
    title: "Distinction Award in AMC 12",
    organization: "Mathematical Association of America",
    description: "Achieved exceptional score in the American Mathematics Competition 12 and invited to participate in the American Invitational Mathematics Examination (AIME).",
    icon: <FaAward />,
  },
  {
    id: 4,
    title: "AICEE-2025 Conference Publication",
    organization: "ASEAN International Conference on Energy and Environment",
    description: "Co-authored abstract on 'Examining the Levelized Cost of Electricity of Offshore Wind in Vietnam'.",
    icon: <FaCertificate />,
  },
  {
    id: 5,
    title: "5th Place in National Math Entrance Exam",
    organization: "Hanoi-Amsterdam High School",
    description: "Ranked 5th in the country-wide entrance exam for the Math-specialised class.",
    icon: <FaMedal />,
  },
  {
    id: 6,
    title: "Distinction Award in IMMC",
    organization: "Consortium for Mathematics and its Applications",
    description: "Led a team of 4 members to develop an evaluation model of a household’s readiness for pet ownership.",
    icon: <FaStar />,
  },
];

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  return (
    <div className="achievements" id="achievements">
      <div className="container">
        <div className="heading">
          <p className="heading-text">What I've Accomplished</p>

          <motion.p
            className="heading-sub-text"
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ type: "spring", duration: 2, bounce: 0.3 }}
          >
            Achievements
          </motion.p>
        </div>

        <motion.div
          className="achievements-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {achievementsData.map((achievement) => (
            <motion.div
              key={achievement.id}
              className="achievement-card"
              variants={cardVariants}
            >
              <div className="achievement-icon">
                {achievement.icon}
              </div>
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <h4 className="achievement-org">{achievement.organization}</h4>
                <p className="achievement-desc">{achievement.description}</p>
              </div>
              <div className="achievement-decoration"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* PDF Button */}
        <motion.div
          className="achievements-button"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <a href={CV} target="_blank" rel="noreferrer" className="view-achievements-btn">
            View Full Achievements <HiOutlineDocumentText className="btn-icon" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;