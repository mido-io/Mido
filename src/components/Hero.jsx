import React, { useState, useEffect, Suspense, lazy } from 'react'
import "../styles/Hero.css"
import "../styles/Bento.css"
import TerminalBox from './TerminalBox'
import { motion, AnimatePresence } from 'framer-motion'
import { playClickSound } from '../utils/sound'
import { FaTerminal, FaUserAlt, FaCogs, FaCode, FaEnvelope, FaToggleOn, FaToggleOff, FaGlobe } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const ContactTab = lazy(() => import('./tabs/ContactTab'));
const SkillsTab = lazy(() => import('./tabs/SkillsTab'));
const ServicesTab = lazy(() => import('./tabs/ServicesTab'));
const ProjectsTab = lazy(() => import('./tabs/ProjectsTab'));
const AboutTab = lazy(() => import('./tabs/AboutTab'));

const Hero = ({ isDevMode, setIsDevMode }) => {
    const { t, i18n } = useTranslation();
    const [activeTerminal, setActiveTerminal] = useState('about');

    useEffect(() => {
        if (isDevMode) {
            document.body.classList.remove('client-mode');
        } else {
            document.body.classList.add('client-mode');
        }

        // Ensure language direction is maintained on load if devmode overrides things
        const currentLang = i18n.language || 'en';
        document.documentElement.dir = currentLang.startsWith('ar') ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLang;
    }, [isDevMode, i18n.language]);

    const handleTerminalClick = (id) => {
        if (activeTerminal !== id) {
            playClickSound();
            setActiveTerminal(id);
        }
    };

    const toggleLanguage = () => {
        playClickSound();
        const newLang = i18n.language.startsWith('en') ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = newLang;
    };

    // Define the animation states for windows entering/leaving
    const windowVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2, ease: "easeIn" } }
    };

    // The dock icons mapping
    const dockItems = [
        { id: 'about', icon: <FaUserAlt />, label: t('dock.about') },
        { id: 'projects', icon: <FaTerminal />, label: t('dock.projects') },
        { id: 'services', icon: <FaCogs />, label: t('dock.services') },
        { id: 'skills', icon: <FaCode />, label: t('dock.skills') },
        { id: 'contact', icon: <FaEnvelope />, label: t('dock.contact') }
    ];

    return (
        <div className="desktop-container">

            {/* MAIN WINDOW AREA */}
            <div className="window-area">
                <AnimatePresence mode="wait">

                    {/* 1. PROJECTS */}
                    {activeTerminal === 'projects' && (
                        <motion.div
                            key="projects"
                            className="window-wrapper"
                            variants={windowVariants}
                            initial="hidden" animate="visible" exit="exit"
                        >
                            <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: '#0f0' }}>...</div>}>
                                <ProjectsTab isDevMode={isDevMode} />
                            </Suspense>
                        </motion.div>
                    )}

                    {/* 2. ABOUT */}
                    {activeTerminal === 'about' && (
                        <motion.div
                            key="about"
                            className="window-wrapper"
                            variants={windowVariants}
                            initial="hidden" animate="visible" exit="exit"
                        >
                            <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: '#0f0' }}>...</div>}>
                                <AboutTab isDevMode={isDevMode} />
                            </Suspense>
                        </motion.div>
                    )}

                    {/* 3. SERVICES */}
                    {activeTerminal === 'services' && (
                        <motion.div
                            key="services"
                            className="window-wrapper"
                            variants={windowVariants}
                            initial="hidden" animate="visible" exit="exit"
                        >
                            <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: '#0f0' }}>...</div>}>
                                <ServicesTab isDevMode={isDevMode} />
                            </Suspense>
                        </motion.div>
                    )}

                    {/* 4. SKILLS */}
                    {activeTerminal === 'skills' && (
                        <motion.div
                            key="skills"
                            className="window-wrapper"
                            variants={windowVariants}
                            initial="hidden" animate="visible" exit="exit"
                        >
                            <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: '#0f0' }}>...</div>}>
                                <SkillsTab isDevMode={isDevMode} />
                            </Suspense>
                        </motion.div>
                    )}

                    {/* 5. CONTACT & SOCIALS */}
                    {activeTerminal === 'contact' && (
                        <motion.div
                            key="contact"
                            className="window-wrapper"
                            variants={windowVariants}
                            initial="hidden" animate="visible" exit="exit"
                        >
                            <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: '#0f0' }}>...</div>}>
                                <ContactTab isDevMode={isDevMode} />
                            </Suspense>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* STATIC DOCK NAVIGATION */}
            <div className="os-dock">
                {dockItems.map((item) => (
                    <button
                        key={item.id}
                        className={`dock-icon ${activeTerminal === item.id ? 'active' : ''}`}
                        onClick={() => handleTerminalClick(item.id)}
                        aria-label={item.label}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </button>
                ))}

                {/* DEV / CLIENT THEME TOGGLE */}
                <div style={{ width: '1px', height: '30px', backgroundColor: '#333', marginInlineStart: '0.5rem', marginInlineEnd: '0.5rem' }}></div>
                <button
                    className={`dock-icon`}
                    onClick={() => {
                        playClickSound();
                        setIsDevMode(!isDevMode);
                    }}
                    aria-label="Toggle Theme"
                    style={{ color: isDevMode ? '#1cdb4c' : '#fbca1f' }}
                >
                    {isDevMode ? <FaToggleOn /> : <FaToggleOff />}
                    <span>{isDevMode ? t('dock.dev') : t('dock.client')}</span>
                </button>

                {/* LANGUAGE TOGGLE */}
                <button
                    className={`dock-icon`}
                    onClick={toggleLanguage}
                    aria-label="Toggle Language"
                    style={{ color: '#007aff' }}
                >
                    <FaGlobe />
                    <span>{i18n.language.startsWith('ar') ? 'English' : 'عربي'}</span>
                </button>
            </div>

        </div>
    )
}

export default Hero
