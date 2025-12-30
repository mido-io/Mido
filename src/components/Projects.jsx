import React from "react";
import "../styles/Projects.css";
import ProjectCard from "./ProjectCard";
import { FaReact, FaCube, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  const data = [
    {
      id: 1,
      title: "Hossam Portfolio",
      link: "https://hossam-abdelmalek.vercel.app/",
      branding: {
        color: "rgba(150, 80, 255, 0.15)",
        icon: <FaUserCircle size={34} color="#A770FF" />
      }
    },
    {
      id: 2,
      title: "GetBox",
      link: "https://getbox.onrender.com/",
      github: "https://github.com/mido-io/GetBox",
      branding: {
        color: "rgba(255,255,255,0.06)",
        icon: <FaCube size={36} color="#fff" />
      }
    },
    {
      id: 3,
      title: "React Skills Showcase",
      link: "https://mido-io.github.io/react-skills-showcase/",
      github: "https://github.com/mido-io/react-skills-showcase",
      branding: {
        color: "rgba(30, 144, 255, 0.15)",
        icon: <FaReact size={38} color="#1E90FF" />
      }
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>

      <motion.div
        className="projects-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {data.map(project => (
          <motion.div key={project.id} variants={item}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
