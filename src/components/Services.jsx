import React from "react";
import "../styles/Services.css";
import {
  FaCode, FaLayerGroup, FaLaptopCode,
  FaTools, FaCloudUploadAlt
} from "react-icons/fa";

const services = [
  {
    title: "Frontend Web Development",
    icon: <FaCode />,
    desc: "Building modern, fast, responsive user interfaces using React & Next.js."
  },
  {
    title: "Landing Page Development",
    icon: <FaLaptopCode />,
    desc: "High-conversion landing pages with clean UI and smooth interactions."
  },
  {
    title: "Full Website Development",
    icon: <FaLayerGroup />,
    desc: "Frontend-focused sites with backend integrations (Node, Firebase, Supabase)."
  },
  {
    title: "UI/UX Improvement & Fixing",
    icon: <FaTools />,
    desc: "Improving visuals, layout, usability, and user experience across your website."
  },
  {
    title: "Deployment & Hosting Setup",
    icon: <FaCloudUploadAlt />,
    desc: "Deploying websites smoothly using Vercel, Render, and GitHub Pages."
  }
];

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Services</h2>

      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>

            <div className="service-card__header">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
            </div>

            <p className="service-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
