import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const IntroModal = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);
    // eslint-disable-next-line no-unused-vars
    const { t, i18n } = useTranslation();

    // Animation sequence states
    const [step, setStep] = useState(0);

    useEffect(() => {
        // Show the verse for 4.5 seconds
        const t1 = setTimeout(() => setStep(1), 2500);
        // Fade out overlay -> Complete
        const t2 = setTimeout(() => setIsVisible(false), 3500);

        // Add Amiri font to document if not present
        if (!document.getElementById('amiri-font')) {
            const link = document.createElement('link');
            link.id = 'amiri-font';
            link.href = 'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap';
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        }

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, []);

    const handleExitComplete = () => {
        if (onComplete) onComplete();
    };

    return (
        <AnimatePresence onExitComplete={handleExitComplete}>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} // Apple-like ease out
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: '#fafafa', // Premium white/grey
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 99999,
                        padding: '2rem',
                        textAlign: 'center'
                    }}
                >
                    <div style={{ position: 'relative', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <AnimatePresence mode="wait">
                            {step === 0 && (
                                <motion.div
                                    key="step0"
                                    initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    style={{
                                        position: 'absolute',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '1.5rem',
                                        alignItems: 'center',
                                        width: 'max-content'
                                    }}
                                >
                                    <h1 style={{
                                        fontFamily: '"Amiri", serif',
                                        fontSize: 'clamp(2rem, 6vw, 4.5rem)',
                                        fontWeight: 700,
                                        color: '#1d1d1f',
                                        margin: 0,
                                        lineHeight: 1.2,
                                        letterSpacing: '0px'
                                    }}>
                                        وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ
                                    </h1>
                                    <h2 style={{
                                        fontFamily: '"Amiri", serif',
                                        fontSize: 'clamp(1.8rem, 5vw, 4rem)',
                                        fontWeight: 700,
                                        color: '#1d1d1f',
                                        margin: 0,
                                        lineHeight: 1.2,
                                        letterSpacing: '0px'
                                    }}>
                                        وَأَنَّ سَعْيَهُ سَوْفَ يُرَىٰ
                                    </h2>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Skip button for the impatient */}
                    <motion.button
                        onClick={() => setIsVisible(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                        style={{
                            position: 'absolute',
                            bottom: '3rem',
                            padding: '0.6rem 1.5rem',
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: '#888',
                            cursor: 'pointer',
                            fontFamily: 'inherit',
                            fontSize: '0.9rem',
                            textDecoration: 'underline',
                            textUnderlineOffset: '4px'
                        }}
                        whileHover={{ color: '#1d1d1f' }}
                    >
                        {t('intro.skip') || 'Skip'}
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IntroModal;
