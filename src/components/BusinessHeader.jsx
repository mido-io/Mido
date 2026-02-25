import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const BusinessHeader = () => {
    const { t } = useTranslation();

    return (
        <motion.header
            className="business-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                padding: '1.5rem 3rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 100, // Above windows
                pointerEvents: 'none' // Let clicks pass through empty space
            }}
        >
            {/* Logo */}
            <div style={{ pointerEvents: 'auto', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <span style={{
                    fontSize: '1.8rem',
                    fontWeight: '800',
                    letterSpacing: '-1px',
                    color: '#1d1d1f'
                }}>Mido.</span>
            </div>

            {/* CTA */}
            <div style={{ pointerEvents: 'auto' }}>
                <a
                    href="mailto:abdelhamidfarhat@outlook.com"
                    style={{
                        backgroundColor: '#1d1d1f',
                        color: '#fff',
                        padding: '0.7rem 1.8rem',
                        borderRadius: '30px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                        transition: 'transform 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    {t('contact.email')}
                </a>
            </div>
        </motion.header>
    );
};

export default BusinessHeader;
