import React from "react";
import "../styles/Projects.css";

const ProjectCard = ({ title, branding, link, github }) => {
  return (
    <div className="project-card">

      <div className="project-header" style={{ background: branding.color, padding: "0.4rem" }}>
        <div className="project-identity">
          {branding.icon}
        </div>
        <h3>{title}</h3>
      </div>

      <div className="project-actions">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
        )}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">Live</a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;


