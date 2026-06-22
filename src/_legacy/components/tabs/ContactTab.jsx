import React from 'react';
import { useTranslation } from 'react-i18next';
import TerminalBox from '../TerminalBox';

const ContactTab = ({ isDevMode }) => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.dir() === 'rtl';

    return (
        <TerminalBox title={isDevMode ? t('contact.devTitle') : t('contact.clientTitle')} isActive={true} isDevMode={isDevMode}>
            <div className={isDevMode ? 'custom-scrollbar-dev' : 'custom-scrollbar-client'} style={{ padding: '1rem', display: 'flex', flexDirection: 'column', height: '100%', overflowY: 'auto' }}>
                <div style={{ margin: 'auto 0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
                    <h2 style={{ color: isDevMode ? '#0f0' : '#1d1d1f', marginBottom: '1rem', fontSize: '1.8rem' }}>{t('contact.heading')}</h2>
                    {isDevMode ? (
                        <div className="contact-dev-grid" style={{ width: '100%', maxWidth: '800px', textAlign: isRTL ? 'right' : 'left', fontFamily: 'monospace', alignItems: 'start' }}>
                            {/* Left Side: Printed Logs */}
                            <ul style={{ listStyle: 'none', color: '#eee', display: 'flex', flexDirection: 'column', padding: 0, margin: 0 }}>
                                <li>
                                    <strong style={{ color: '#fbca1f', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        [*] {t('contact.devDetailsTitle')}
                                    </strong>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1rem', fontSize: '0.95rem' }}>
                                        <div><span style={{ color: '#aaa', display: 'inline-block', width: isRTL ? '80px' : '60px' }}>{t('contact.devEmailLabel')}</span> <a href="mailto:abdelhamidfarhat@outlook.com" style={{ color: '#0f0', textDecoration: 'none' }}>abdelhamidfarhat@outlook.com</a></div>
                                        <div><span style={{ color: '#aaa', display: 'inline-block', width: isRTL ? '80px' : '60px' }}>{t('contact.devGithubLabel')}</span> <a href="https://github.com/mido-io" target="_blank" rel="noreferrer" style={{ color: '#0f0', textDecoration: 'none' }}>github.com/mido-io</a></div>
                                        <div><span style={{ color: '#aaa', display: 'inline-block', width: isRTL ? '80px' : '60px' }}>{t('contact.devInstaLabel')}</span> <a href="https://www.instagram.com/3bdhmeed_" target="_blank" rel="noreferrer" style={{ color: '#0f0', textDecoration: 'none' }}>@3bdhmeed_</a></div>
                                    </div>
                                </li>
                            </ul>

                            {/* Right Side: Terminal Input Form */}
                            <ul style={{ listStyle: 'none', color: '#eee', display: 'flex', flexDirection: 'column', padding: 0, margin: 0 }}>
                                <li>
                                    <strong style={{ color: '#fbca1f', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                                        [*] {t('contact.devFormTitle')}
                                    </strong>
                                    <form action="https://formspree.io/f/mgolrznz" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', padding: '1rem', backgroundColor: '#050505', borderRadius: '8px', border: '1px solid #333' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                                            <span style={{ color: '#aaa', width: isRTL ? '80px' : '60px' }}>{t('contact.devNameLabel')}</span>
                                            <input type="text" name="name" required style={{ flex: 1, backgroundColor: 'transparent', border: 'none', borderBottom: '1px dashed #333', color: '#fff', outline: 'none', fontFamily: 'monospace', fontSize: '0.9rem', padding: '0.2rem' }} onFocus={(e) => e.target.style.borderColor = '#0f0'} onBlur={(e) => e.target.style.borderColor = '#333'} />
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                                            <span style={{ color: '#aaa', width: isRTL ? '80px' : '60px' }}>{t('contact.devEmailLabel')}</span>
                                            <input type="email" name="email" required style={{ flex: 1, backgroundColor: 'transparent', border: 'none', borderBottom: '1px dashed #333', color: '#fff', outline: 'none', fontFamily: 'monospace', fontSize: '0.9rem', padding: '0.2rem' }} onFocus={(e) => e.target.style.borderColor = '#0f0'} onBlur={(e) => e.target.style.borderColor = '#333'} />
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', marginTop: '0.2rem', fontSize: '0.9rem' }}>
                                            <span style={{ color: '#aaa' }}>{t('contact.devMessageLabel')}</span>
                                            <textarea name="message" required rows="2" style={{ width: '100%', backgroundColor: 'transparent', border: '1px dashed #333', color: '#fff', outline: 'none', fontFamily: 'monospace', fontSize: '0.9rem', padding: '0.3rem', resize: 'vertical' }} onFocus={(e) => e.target.style.borderColor = '#0f0'} onBlur={(e) => e.target.style.borderColor = '#333'}></textarea>
                                        </div>

                                        <button type="submit" style={{ alignSelf: isRTL ? 'flex-end' : 'flex-start', padding: '0.4rem 1rem', backgroundColor: '#0f0', color: '#000', border: 'none', cursor: 'pointer', fontFamily: 'monospace', fontWeight: 'bold', marginTop: '0.5rem', fontSize: '0.9rem' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#1cdb4c'} onMouseLeave={(e) => e.target.style.backgroundColor = '#0f0'}>{t('contact.devExecuteBtn')}</button>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '400px' }}>
                            <p style={{ color: '#555', marginBottom: '1.5rem', lineHeight: '1.6', fontSize: '1.1rem' }}>
                                {t('contact.description')}
                            </p>
                            <form action="https://formspree.io/f/mgolrznz" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                                <input type="text" name="name" placeholder={t('contact.namePlaceholder')} required style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem', outline: 'none', fontFamily: 'inherit' }} onFocus={(e) => e.target.style.borderColor = '#007aff'} onBlur={(e) => e.target.style.borderColor = '#ccc'} />
                                <input type="email" name="email" placeholder={t('contact.emailPlaceholder')} required style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem', outline: 'none', fontFamily: 'inherit' }} onFocus={(e) => e.target.style.borderColor = '#007aff'} onBlur={(e) => e.target.style.borderColor = '#ccc'} />
                                <textarea name="message" placeholder={t('contact.messagePlaceholder')} required rows="4" style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc', resize: 'vertical', fontSize: '1rem', outline: 'none', fontFamily: 'inherit' }} onFocus={(e) => e.target.style.borderColor = '#007aff'} onBlur={(e) => e.target.style.borderColor = '#ccc'}></textarea>
                                <button type="submit" style={{ padding: '0.8rem 1.5rem', backgroundColor: '#007aff', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,122,255,0.3)', fontSize: '1rem', transition: 'transform 0.2s', marginTop: '0.5rem' }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>{t('contact.sendButton')}</button>
                            </form>
                            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2rem' }}>
                                <a href="https://github.com/mido-io" target="_blank" rel="noreferrer" style={{ padding: '0.6rem 1.2rem', backgroundColor: '#f5f5f7', color: '#333', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.9rem' }}>{t('contact.github')}</a>
                                <a href="https://www.instagram.com/3bdhmeed_" target="_blank" rel="noreferrer" style={{ padding: '0.6rem 1.2rem', backgroundColor: '#f5f5f7', color: '#333', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.9rem' }}>{t('contact.instagram')}</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </TerminalBox>
    );
};

export default React.memo(ContactTab);