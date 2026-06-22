import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TerminalBox from '../TerminalBox';
import { FaGlobe, FaCode, FaCogs, FaUserAlt } from 'react-icons/fa';

const ServicesTab = ({ isDevMode }) => {
    const { t } = useTranslation();
    const [selectedService, setSelectedService] = useState(null);

    return (
                            <TerminalBox title={isDevMode ? t('services.devTitle') : t('services.clientTitle')} isActive={true} isDevMode={isDevMode}>
                                <div className={isDevMode ? 'custom-scrollbar-dev' : 'custom-scrollbar-client'} style={{ padding: '1.5rem', overflowY: 'auto', height: '100%' }}>
                                    <h2 style={{ color: isDevMode ? '#0f0' : '#1d1d1f', marginBottom: '1.5rem', fontSize: '1.8rem', letterSpacing: '-0.5px' }}>{isDevMode ? t('services.headingDev') : t('services.headingClient')}</h2>
                                    {isDevMode ? (
                                        <ul style={{ listStyle: 'none', color: '#eee', display: 'flex', flexDirection: 'column', gap: '1.8rem', padding: 0 }}>
                                            <li>
                                                <strong style={{ color: '#fbca1f', fontSize: '1.2rem' }}>[*] {t('services.service1Title')}</strong>
                                                <p style={{ fontSize: '0.9rem', color: '#aaa', marginTop: '0.4rem', lineHeight: '1.4' }}>{t('services.service1Desc')}</p>
                                            </li>
                                            <li>
                                                <strong style={{ color: '#fbca1f', fontSize: '1.2rem' }}>[*] {t('services.service2Title')}</strong>
                                                <p style={{ fontSize: '0.9rem', color: '#aaa', marginTop: '0.4rem', lineHeight: '1.4' }}>{t('services.service2Desc')}</p>
                                            </li>
                                            <li>
                                                <strong style={{ color: '#fbca1f', fontSize: '1.2rem' }}>[*] {t('services.service3Title')}</strong>
                                                <p style={{ fontSize: '0.9rem', color: '#aaa', marginTop: '0.4rem', lineHeight: '1.4' }}>{t('services.service3Desc')}</p>
                                            </li>
                                            <li>
                                                <strong style={{ color: '#fbca1f', fontSize: '1.2rem' }}>[*] {t('services.service4Title')}</strong>
                                                <p style={{ fontSize: '0.9rem', color: '#aaa', marginTop: '0.4rem', lineHeight: '1.4' }}>{t('services.service4Desc')}</p>
                                            </li>
                                            <li>
                                                <strong style={{ color: '#fbca1f', fontSize: '1.2rem' }}>[*] {t('services.service5Title')}</strong>
                                                <p style={{ fontSize: '0.9rem', color: '#aaa', marginTop: '0.4rem', lineHeight: '1.4' }}>{t('services.service5Desc')}</p>
                                            </li>
                                            <li>
                                                <strong style={{ color: '#fbca1f', fontSize: '1.2rem' }}>[*] {t('services.service6Title')}</strong>
                                                <p style={{ fontSize: '0.9rem', color: '#aaa', marginTop: '0.4rem', lineHeight: '1.4' }}>{t('services.service6Desc')}</p>
                                            </li>
                                        </ul>
                                    ) : (
                                        <>
                                            {!selectedService && (
                                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', padding: 0 }}>
                                                    {[
                                                        { id: 'service1', icon: <FaGlobe />, title: t('services.service1Title'), desc: t('services.service1Desc'), offer: t('services.service1Offer'), included: t('services.service1Included', { returnObjects: true }), bestFor: t('services.service1BestFor'), color: '#007aff' },
                                                        { id: 'service2', icon: <FaCode />, title: t('services.service2Title'), desc: t('services.service2Desc'), offer: t('services.service2Offer'), included: t('services.service2Included', { returnObjects: true }), bestFor: t('services.service2BestFor'), color: '#ff2d55' },
                                                        { id: 'service3', icon: <FaGlobe />, title: t('services.service3Title'), desc: t('services.service3Desc'), offer: t('services.service3Offer'), included: t('services.service3Included', { returnObjects: true }), results: t('services.service3Results'), color: '#ff9500' },
                                                        { id: 'service4', icon: <FaCogs />, title: t('services.service4Title'), desc: t('services.service4Desc'), offer: t('services.service4Offer'), included: t('services.service4Included', { returnObjects: true }), bestFor: t('services.service4BestFor'), color: '#5856d6' },
                                                        { id: 'service5', icon: <FaGlobe />, title: t('services.service5Title'), desc: t('services.service5Desc'), offer: t('services.service5Offer'), included: t('services.service5Included', { returnObjects: true }), bestFor: t('services.service5BestFor'), color: '#34c759' },
                                                        { id: 'service6', icon: <FaUserAlt />, title: t('services.service6Title'), desc: t('services.service6Desc'), offer: t('services.service6Offer'), included: t('services.service6Included', { returnObjects: true }), bestFor: t('services.service6BestFor'), color: '#af52de' }
                                                    ].map(service => (
                                                        <div key={service.id} style={{
                                                            padding: '1.5rem',
                                                            backgroundColor: '#fff',
                                                            borderRadius: '16px',
                                                            border: '1px solid #e5e5ea',
                                                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            transition: 'transform 0.2s, box-shadow 0.2s',
                                                            cursor: 'default'
                                                        }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)' }}
                                                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)' }}>

                                                            <div style={{ fontSize: '2rem', color: service.color, marginBottom: '1rem', backgroundColor: `${service.color}15`, width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px' }}>
                                                                {service.icon}
                                                            </div>
                                                            <strong style={{ display: 'block', color: '#1d1d1f', fontSize: '1.2rem', marginBottom: '0.8rem', lineHeight: '1.3' }}>{service.title}</strong>
                                                            <p style={{ fontSize: '0.95rem', color: '#555', margin: '0 0 1.5rem 0', lineHeight: '1.6', flexGrow: 1 }}>{service.desc}</p>

                                                            <button
                                                                onClick={() => setSelectedService(service)}
                                                                style={{
                                                                    backgroundColor: '#f5f5f7', color: '#1d1d1f', border: 'none', cursor: 'pointer',
                                                                    padding: '0.6rem 1rem', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '600',
                                                                    transition: 'background-color 0.2s', marginTop: 'auto', textAlign: 'center'
                                                                }}
                                                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e5e5ea'}
                                                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5f5f7'}
                                                            >
                                                                {t('services.detailsBtn')}
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {selectedService && (
                                                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', animation: 'fadeIn 0.3s ease' }}>
                                                    {/* Back Button */}
                                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', pb: '1rem', borderBottom: '1px solid #e5e5ea', paddingBottom: '1rem' }}>
                                                        <button
                                                            onClick={() => setSelectedService(null)}
                                                            style={{
                                                                display: 'flex', alignItems: 'center', gap: '0.5rem',
                                                                background: 'none', border: 'none', color: '#007aff',
                                                                fontSize: '1rem', fontWeight: '600', cursor: 'pointer',
                                                                padding: 0
                                                            }}
                                                        >
                                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                                                            {t('services.detailsBack')}
                                                        </button>
                                                    </div>

                                                    <div style={{ padding: '2rem', backgroundColor: '#f9f9fb', borderRadius: '16px', border: '1px solid #e5e5ea' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                                            <div style={{ fontSize: '2.5rem', color: selectedService.color, backgroundColor: `${selectedService.color}15`, width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>
                                                                {selectedService.icon}
                                                            </div>
                                                            <h2 style={{ fontSize: '1.8rem', color: '#1d1d1f', margin: 0 }}>{selectedService.title}</h2>
                                                        </div>

                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                                            {/* What I offer */}
                                                            <div>
                                                                <h3 style={{ fontSize: '1.2rem', color: selectedService.color, marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                                                    {t('services.whatIOffer')}
                                                                </h3>
                                                                <p style={{ color: '#333', lineHeight: '1.6', fontSize: '1.05rem', margin: 0, padding: '1rem', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e5ea' }}>
                                                                    {selectedService.offer}
                                                                </p>
                                                            </div>

                                                            {/* What's included */}
                                                            <div>
                                                                <h3 style={{ fontSize: '1.2rem', color: selectedService.color, marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                                                                    {t('services.whatsIncluded')}
                                                                </h3>
                                                                <ul style={{ margin: 0, padding: '1rem 1rem 1rem 2.5rem', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e5ea', color: '#333', lineHeight: '1.8', fontSize: '1.05rem', listStyleType: 'disc' }}>
                                                                    {Array.isArray(selectedService.included) ? selectedService.included.map((item, index) => (
                                                                        <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
                                                                    )) : <li>{selectedService.included}</li>}
                                                                </ul>
                                                            </div>

                                                            {/* Best for or Results */}
                                                            <div>
                                                                <h3 style={{ fontSize: '1.2rem', color: selectedService.color, marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                                                    {selectedService.results ? t('services.results') : t('services.bestFor')}
                                                                </h3>
                                                                <p style={{ color: '#333', lineHeight: '1.6', fontSize: '1.05rem', margin: 0, padding: '1rem', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e5ea', fontWeight: '500' }}>
                                                                    {selectedService.results || selectedService.bestFor}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            </TerminalBox>
    );
};

export default React.memo(ServicesTab);