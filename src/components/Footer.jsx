import React from "react";
import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-bottom">
        © {new Date().getFullYear()} Mido — All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
