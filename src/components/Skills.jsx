import React from "react";
import "../styles/Skills.css";

import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt
} from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiFirebase, SiMongodb, SiSupabase, SiMysql } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { TbCloudComputing } from "react-icons/tb";

const Skills = () => {

  const frontend = [
    { title: "HTML", icon: <FaHtml5 /> },
    { title: "CSS", icon: <FaCss3Alt /> },
    { title: "JavaScript", icon: <FaJs /> },
    { title: "React", icon: <FaReact /> },
    { title: "Next.js", icon: <SiNextdotjs /> },
  ];

  const backend = [
    { title: "Node.js", icon: <FaNodeJs /> },
    { title: "Express", icon: <SiExpress /> },
    { title: "Supabase", icon: <SiSupabase /> },
    { title: "Firebase", icon: <SiFirebase /> },
    { title: "MongoDB", icon: <SiMongodb /> },
    { title: "SQL", icon: <SiMysql /> },
  ];

  const general = [
    { title: "UI/UX Basics", icon: <MdDesignServices /> },
    { title: "Version Control", icon: <FaGitAlt /> },
    { title: "Deployment (Render, Vercel)", icon: <TbCloudComputing /> },
  ];

  const renderSkills = (skills) =>
    skills.map((s, idx) => (
      <div className="skill-card" key={idx}>
        <div className="skill-icon">{s.icon}</div>
        <p>{s.title}</p>
      </div>
    ));

  return (
    <section className="skills-section">

      <h2 className="skills-title">Skills</h2>

      <div className="skills-group">
        <h3>Frontend</h3>
        <div className="skills-grid">{renderSkills(frontend)}</div>
      </div>

      <div className="skills-group">
        <h3>Backend</h3>
        <div className="skills-grid">{renderSkills(backend)}</div>
      </div>

      <div className="skills-group">
        <h3>General</h3>
        <div className="skills-grid">{renderSkills(general)}</div>
      </div>

    </section>
  );
};

export default Skills;
