import { DiJavascript1 } from "react-icons/di";
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaDocker,
  FaAws,
  FaGitlab,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiFirebase,
  SiSupabase,
  SiCplusplus,
  SiR,
  SiFlask,
  SiMysql,
  SiMongodb,
  SiBootstrap,
  SiC,
  SiCypress,
  SiGooglecloud,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const SkillsData = {
  Languages: [
    { name: "Python", icon: <FaPython /> },
    { name: "JavaScript", icon: <DiJavascript1 /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "C", icon: <SiC /> },
    { name: "R", icon: <SiR /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
  ],

  Frameworks: [
    { name: "React JS", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Next JS", icon: <SiNextdotjs /> },
    { name: "React Native", icon: <TbBrandReactNative /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "Redux", icon: <SiRedux /> },
  ],

  Databases: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Supabase", icon: <SiSupabase /> },
  ],

  Tools: [
    { name: "Docker", icon: <FaDocker /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Linux", icon: <FaLinux /> },
    { name: "GitLab CI/CD", icon: <FaGitlab /> },
    { name: "Cypress", icon: <SiCypress /> },
    { name: "GCP", icon: <SiGooglecloud /> },
  ],
};
