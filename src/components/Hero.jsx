import React from "react";
import "../styles/Hero.css";
import profile from "../assets/profile.webp";
import { FaTwitter, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">
        <div className="photo-card">
          <img src={profile} alt="Mido" />
        </div>
      </div>

      <div className="hero-right">

        <h1>Hello<br />World!</h1>

        <p>
          I’m <span>Mido</span>, a web developer with design background.
        </p>

        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="cv-btn">View CV</a>

        <div className="socials">
          <a href="https://github.com/mido-io" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/3bdhmeed_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="mailto:abdelhamidfarhat@outlook.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
