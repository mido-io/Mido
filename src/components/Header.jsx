import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header>
      <div className="logo">&lt;Mido/&gt;</div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

        <ul>
          <li onClick={() => setMenuOpen(false)}>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Mido
            </NavLink>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
              Projects
            </NavLink>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <NavLink to="/skills" className={({ isActive }) => (isActive ? "active" : "")}>
              Skills
            </NavLink>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>
              Services
            </NavLink>
          </li>
          <li className="mobile-only" onClick={() => setMenuOpen(false)}>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="contact-btn desktop-only">
        <Link to="/contact">Contact</Link>
      </div>

      <button
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
      </button>
    </header>
  );
};

export default Header;
