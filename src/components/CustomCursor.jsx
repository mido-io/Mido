import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('.terminal-box') || e.target.closest('.control')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    // We only show custom cursor on desktop to avoid weird mobile touch behaviors
    if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;

    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: isHovering ? '16px' : '10px',
                height: isHovering ? '16px' : '20px',
                backgroundColor: isHovering ? 'rgba(28, 219, 76, 0.4)' : '#1cdb4c',
                borderRadius: isHovering ? '50%' : '2px', // Turn into circle on hover, block normally
                pointerEvents: 'none',
                zIndex: 9999,
                mixBlendMode: 'difference'
            }}
            animate={{
                x: mousePosition.x - (isHovering ? 8 : 5),
                y: mousePosition.y - (isHovering ? 8 : 10),
                opacity: [1, 0.5, 1] // Flashing effect
            }}
            transition={{
                x: { type: "spring", stiffness: 500, damping: 28, mass: 0.5 },
                y: { type: "spring", stiffness: 500, damping: 28, mass: 0.5 },
                opacity: { repeat: Infinity, duration: 1, ease: 'linear' }
            }}
        />
    );
};

export default CustomCursor;
