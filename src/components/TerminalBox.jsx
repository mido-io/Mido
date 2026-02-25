import React from 'react';
import '../styles/TerminalBox.css';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const TerminalBox = ({ title = "Status", children, className = "", isActive = true, isDevMode = true, onClick }) => {

    // Theme configurations
    const theme = {
        boxBg: isDevMode ? '#121212' : '#f5f5f7',
        boxBorder: isDevMode ? '0.1em solid #3a3a3a' : '1px solid #e0e0e0',
        textColor: isDevMode ? '#1cdb4c' : '#1d1d1f',
        headerBg: isDevMode ? '#2a2a2a' : '#e5e5ea',
        headerText: isDevMode ? '#ccc' : '#1d1d1f',
        fontFamily: isDevMode ? '"Courier New", Courier, monospace' : 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    };

    return (
        <motion.div
            layout
            onClick={onClick}
            className={`terminal-box ${className}`}
            style={{
                cursor: onClick ? 'pointer' : 'default',
                backgroundColor: theme.boxBg,
                border: theme.boxBorder,
                color: theme.textColor,
                fontFamily: theme.fontFamily
            }}
            whileHover={!isActive ? { scale: 1.05 } : {}}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="terminal-header" style={{ backgroundColor: theme.headerBg }}>
                <div className="terminal-title" style={{ color: theme.headerText, fontWeight: isDevMode ? 'normal' : '500' }}>{title}</div>
                <div className="terminal-controls" aria-hidden="true">
                    <div className="control close"></div>
                    <div className="control minimize"></div>
                    <div className="control maximize"></div>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {isActive && (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.1 } }}
                        className="terminal-content"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            {!isActive && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="minimized-overlay"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: '#555',
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        pointerEvents: 'none'
                    }}
                >
                    {'{ }'}
                </motion.div>
            )}
        </motion.div>
    );
};

export default TerminalBox;
