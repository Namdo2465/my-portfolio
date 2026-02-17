import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import "../styles/Experience.css";

const experienceData = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "FinBud AI",
    location: "Chicago, Illinois",
    period: "Aug 2025 - Present",
    responsibilities: [
      "Integrated financial chatbot by connecting FastAPI backend with Vue.js frontend, enabling users to access real-time investment insights and market analysis.",
      "Engineered RAG pipeline using LangChain and ChromaDB to retrieve and ground LLM responses in real-time data, improving answer accuracy and reducing hallucinations.",
      "Optimized chatbot performance through database indexing and multi-layer caching, reducing query latency and improving user experience.",
    ],
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "Center for Environmental Economics and Climate Change",
    location: "Hanoi, Vietnam",
    period: "May 2025 - Aug 2025",
    responsibilities: [
      "Worked under Vietnam Union of Science and Technology Associations to formulate an operational research model for Vietnam to identify locations that are the most profitable for solar and wind energy.",
      "Improved the spatial resolution of the model by processing and analyzing satellite imagery (Sentinel-1 & 2) and elevation data with Geopandas and geostatistical techniques, enabling more accurate land classification and slope analysis across 9,000+ grid cells in Vietnam.",
      "Co-authored an abstract named “Examining the Levelized Cost of Electricity of Offshore Wind in Vietnam” and got approved by The 5th ASEAN International Conference on Energy and Environment (AICEE-2025).",
    ],
  },
  {
    id: 3,
    title: "Data Analyst Intern",
    company: "Asean Securities Corporation",
    location: "Hanoi, Vietnam",
    period: "Feb 2025 - May 2025",
    responsibilities: [
      "Use Selenium and Pandas to automate the process of collecting Vietnamese stock market data everyday.",
      "Analyse the data to predict certain trends of the stock market.",
    ],
  },
  {
    id: 4,
    title: "Web Developer",
    company: "Career Foundation Hub",
    location: "Virginia, U.S.",
    period: "Nov 2024 - Feb 2025",
    responsibilities: [
      "Developed full-stack job application platform with automated crawling, NLP-based job matching, and AI-powered coaching to generate personalized application strategies.",
      "Built AI chatbot using Langchain, OpenAI APIs, and ChromaDB to provide instant career mentorship and guidance at scale.",
      "Collaborated with product team to optimize user experience and chatbot performance through prompt engineering and iterative improvements based on user feedback.",
    ],
  },
  // Add more experience entries as needed
];

const Experience = () => {
  const fadeIn = {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  };

  return (
    <div className="experience" id="experience">
      <div className="container">
        <div className="heading">
          <motion.p
            className="heading-sub-text"
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ type: "spring", duration: 2, bounce: 0.3 }}
          >
            Experience
          </motion.p>
        </div>

        <div className="timeline">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`timeline-item ${index % 2 === 1 ? "left" : "right"}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={fadeIn}
              viewport={{ once: false }}
            >
              <div className="timeline-content">
                <div className="timeline-icon">
                  <FaBriefcase />
                </div>
                <div className="timeline-date">
                  <span>{exp.period}</span>
                </div>
                <h3 className="timeline-company">{exp.company}</h3>
                <h4 className="timeline-title">{exp.title}</h4>
                <p className="timeline-location">{exp.location}</p>
                {exp.responsibilities && (
                  <ul className="timeline-responsibilities">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
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

export default Experience;
