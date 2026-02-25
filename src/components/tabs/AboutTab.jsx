import React from 'react';
import { useTranslation } from 'react-i18next';
import TerminalBox from '../TerminalBox';

const AboutTab = ({ isDevMode }) => {
    const { t } = useTranslation();

    return (
        <TerminalBox title={isDevMode ? t('about.devTitle') : t('about.clientTitle')} isActive={true} isDevMode={isDevMode}>
            <div className={isDevMode ? 'custom-scrollbar-dev' : 'custom-scrollbar-client'} style={{ padding: 'clamp(1rem, 3vw, 2rem)', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', overflowY: 'auto' }}>
                {isDevMode ? (
                    <ul style={{ listStyle: 'none', color: '#eee', display: 'flex', flexDirection: 'column', gap: 'clamp(1.5rem, 4vw, 2rem)', padding: 0, fontFamily: 'monospace', height: '100%', paddingBottom: '1rem' }}>
                        <li>
                            <strong style={{ color: '#fbca1f', fontSize: 'clamp(1.15rem, 4.5vw, 1.6rem)', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <span>[*] {t('about.headingDev')}</span>
                            </strong>
                            <p style={{ color: '#aaa', lineHeight: 'clamp(1.6, 2.5vw, 1.8)', fontSize: 'clamp(0.95rem, 3.5vw, 1.15rem)', margin: 'clamp(1.2rem, 3vw, 1.5rem) 0 0 0', maxWidth: '800px' }}>
                                {t('about.description1')} {t('about.description2')}
                            </p>
                        </li>
                        <li style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px dashed #333' }}>
                            <a href="/resume.pdf" download style={{ padding: 'clamp(0.6rem, 2vw, 0.8rem) clamp(1rem, 3vw, 1.5rem)', backgroundColor: '#0f0', color: '#000', border: 'none', cursor: 'pointer', fontFamily: 'monospace', fontWeight: 'bold', fontSize: 'clamp(0.9rem, 3vw, 1.1rem)', display: 'inline-block', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#1cdb4c'} onMouseLeave={(e) => e.target.style.backgroundColor = '#0f0'}>
                                download_resume.sh
                            </a>
                        </li>
                    </ul>
                ) : (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ flexShrink: 0 }}>
                            <img
                                src="/profile.webp"
                                alt="Mido Farhat"
                                loading="lazy"
                                style={{
                                    width: 'clamp(150px, 30vw, 240px)',
                                    height: 'clamp(150px, 30vw, 240px)',
                                    borderRadius: '24px',
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 300px' }}>
                            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', color: '#1d1d1f', margin: '0 0 1rem 0' }}>
                                {t('about.headingClient')}
                            </h1>
                            <p style={{ color: '#555', lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '2rem' }}>
                                {t('about.description1')}
                                <br />
                                {t('about.description2')}
                            </p>
                            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #e5e5ea' }}>
                                <a href="/resume.pdf" download style={{ color: '#000', backgroundColor: '#fff', border: '1px solid #e5e5ea', padding: '0.6rem 1.2rem', textDecoration: 'none', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', cursor: 'pointer' }}>
                                    {t('about.downloadClient')}
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </TerminalBox>
    );
};

export default React.memo(AboutTab);
