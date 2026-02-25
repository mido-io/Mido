import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TerminalBox from '../TerminalBox';

const ProjectsTab = ({ isDevMode }) => {
    const { t } = useTranslation();
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <TerminalBox title={isDevMode ? t('projects.devTitle') : t('projects.clientTitle')} isActive={true} isDevMode={isDevMode}>
            <div className={isDevMode ? 'custom-scrollbar-dev' : 'custom-scrollbar-client'} style={{ padding: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
                <h2 style={{ color: isDevMode ? '#0f0' : '#1d1d1f', marginBottom: '1.5rem', fontSize: '1.8rem', letterSpacing: '-0.5px' }}>{isDevMode ? t('projects.featuredDev') : t('projects.featuredClient')}</h2>

                {isDevMode ? (
                    <ul style={{ listStyle: 'none', color: '#eee', display: 'flex', flexDirection: 'column', gap: '2rem', padding: 0, fontFamily: 'monospace' }}>
                        {/* Project 1 */}
                        <li>
                            <strong style={{ color: '#fbca1f', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap', lineHeight: '1.4' }}>
                                <span>[*] {t('projects.daberha')}</span>
                                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                                    <a href="https://daberha.vercel.app/" target="_blank" rel="noreferrer" style={{ color: '#0f0', fontSize: '0.9rem', textDecoration: 'none' }}>[Live Demo]</a>
                                    <a href="https://github.com/mido-io/Daberha" target="_blank" rel="noreferrer" style={{ color: '#aaa', fontSize: '0.9rem', textDecoration: 'none' }}>[GitHub]</a>
                                </div>
                            </strong>
                            <p style={{ fontSize: '0.95rem', color: '#aaa', marginTop: '0.5rem', lineHeight: '1.5' }}>{t('projects.daberhaDesc')}</p>
                        </li>

                        {/* Project 2 */}
                        <li>
                            <strong style={{ color: '#fbca1f', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap', lineHeight: '1.4' }}>
                                <span>[*] {t('projects.portfolio')}</span>
                                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                                    <a href="https://hossam-abdelmalek.vercel.app/" target="_blank" rel="noreferrer" style={{ color: '#0f0', fontSize: '0.9rem', textDecoration: 'none' }}>[Live Demo]</a>
                                </div>
                            </strong>
                            <p style={{ fontSize: '0.95rem', color: '#aaa', marginTop: '0.5rem', lineHeight: '1.5' }}>{t('projects.portfolioDesc')}</p>
                        </li>

                        {/* Project 3 */}
                        <li>
                            <strong style={{ color: '#fbca1f', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap', lineHeight: '1.4' }}>
                                <span>[*] {t('projects.reactSkills')}</span>
                                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                                    <a href="https://mido-io.github.io/react-skills-showcase/" target="_blank" rel="noreferrer" style={{ color: '#0f0', fontSize: '0.9rem', textDecoration: 'none' }}>[Live Demo]</a>
                                    <a href="https://github.com/mido-io/react-skills-showcase" target="_blank" rel="noreferrer" style={{ color: '#aaa', fontSize: '0.9rem', textDecoration: 'none' }}>[GitHub]</a>
                                </div>
                            </strong>
                            <p style={{ fontSize: '0.95rem', color: '#aaa', marginTop: '0.5rem', lineHeight: '1.5' }}>{t('projects.reactSkillsDesc')}</p>
                        </li>
                    </ul>
                ) : (
                    <>
                        {!selectedProject && (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                                {/* Project 1: Daberha */}
                                <div style={{
                                    backgroundColor: '#fff',
                                    borderRadius: '12px',
                                    border: '1px solid #e5e5ea',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <div style={{ height: '200px', backgroundColor: '#f5f5f7', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #e5e5ea' }}>
                                        <img src="/projects-images/daberha.png" alt="Daberha" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                                    </div>
                                    <div style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <h3 style={{ color: '#1d1d1f', margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>{t('projects.daberha')}</h3>
                                        <p style={{ color: '#666', fontSize: '0.9rem', margin: '0 0 1.2rem 0', lineHeight: '1.5' }}>{t('projects.daberhaDesc')}</p>
                                        <div style={{ display: 'flex', gap: '0.8rem', marginTop: 'auto', flexWrap: 'wrap' }}>
                                            <a href="https://daberha.vercel.app/" target="_blank" rel="noreferrer" style={{ backgroundColor: '#007aff', color: '#fff', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none', transition: 'background-color 0.2s', boxShadow: '0 2px 4px rgba(0,122,255,0.2)' }}>{t('projects.liveDemo')} &rarr;</a>
                                            <a href="https://github.com/mido-io/Daberha" target="_blank" rel="noreferrer" style={{ backgroundColor: '#f1f1f2', color: '#1d1d1f', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '500', textDecoration: 'none', transition: 'background-color 0.2s' }}>{t('projects.github')}</a>
                                            <button onClick={() => setSelectedProject({
                                                id: 'daberha',
                                                title: t('projects.daberha'),
                                                overview: t('projects.daberhaOverview'),
                                                problem: t('projects.daberhaProblem'),
                                                solution: t('projects.daberhaSolution'),
                                                link: 'https://daberha.vercel.app/'
                                            })} style={{ backgroundColor: '#ff9500', color: '#fff', border: 'none', cursor: 'pointer', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', transition: 'background-color 0.2s', boxShadow: '0 2px 4px rgba(255,149,0,0.2)' }}>{t('projects.caseStudy')}</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Project 2: Portfolio */}
                                <div style={{
                                    backgroundColor: '#fff',
                                    borderRadius: '12px',
                                    border: '1px solid #e5e5ea',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <div style={{ height: '200px', backgroundColor: '#f5f5f7', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #e5e5ea' }}>
                                        <img src="/projects-images/portfolio.png" alt="Portfolio" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                                    </div>
                                    <div style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <h3 style={{ color: '#1d1d1f', margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>{t('projects.portfolio')}</h3>
                                        <p style={{ color: '#666', fontSize: '0.9rem', margin: '0 0 1.2rem 0', lineHeight: '1.5' }}>{t('projects.portfolioDesc')}</p>
                                        <div style={{ display: 'flex', gap: '0.8rem', marginTop: 'auto', flexWrap: 'wrap' }}>
                                            <a href="https://hossam-abdelmalek.vercel.app/" target="_blank" rel="noreferrer" style={{ backgroundColor: '#007aff', color: '#fff', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none', transition: 'background-color 0.2s', boxShadow: '0 2px 4px rgba(0,122,255,0.2)' }}>{t('projects.liveDemo')} &rarr;</a>
                                            <button onClick={() => setSelectedProject({
                                                id: 'portfolio',
                                                title: t('projects.portfolio'),
                                                overview: t('projects.portfolioOverview'),
                                                problem: t('projects.portfolioProblem'),
                                                solution: t('projects.portfolioSolution'),
                                                link: 'https://hossam-abdelmalek.vercel.app/'
                                            })} style={{ backgroundColor: '#ff9500', color: '#fff', border: 'none', cursor: 'pointer', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', transition: 'background-color 0.2s', boxShadow: '0 2px 4px rgba(255,149,0,0.2)' }}>{t('projects.caseStudy')}</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Project 3: React Skills */}
                                <div style={{
                                    backgroundColor: '#fff',
                                    borderRadius: '12px',
                                    border: '1px solid #e5e5ea',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <div style={{ height: '200px', backgroundColor: '#f5f5f7', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #e5e5ea' }}>
                                        <img src="/projects-images/reactSkills.png" alt="React Skills" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                                    </div>
                                    <div style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <h3 style={{ color: '#1d1d1f', margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>{t('projects.reactSkills')}</h3>
                                        <p style={{ color: '#666', fontSize: '0.9rem', margin: '0 0 1.2rem 0', lineHeight: '1.5' }}>{t('projects.reactSkillsDesc')}</p>
                                        <div style={{ display: 'flex', gap: '0.8rem', marginTop: 'auto', flexWrap: 'wrap' }}>
                                            <a href="https://mido-io.github.io/react-skills-showcase/" target="_blank" rel="noreferrer" style={{ backgroundColor: '#007aff', color: '#fff', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none', transition: 'background-color 0.2s', boxShadow: '0 2px 4px rgba(0,122,255,0.2)' }}>{t('projects.liveDemo')} &rarr;</a>
                                            <a href="https://github.com/mido-io/react-skills-showcase" target="_blank" rel="noreferrer" style={{ backgroundColor: '#f1f1f2', color: '#1d1d1f', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '500', textDecoration: 'none', transition: 'background-color 0.2s' }}>{t('projects.github')}</a>
                                            <button onClick={() => setSelectedProject({
                                                id: 'reactSkills',
                                                title: t('projects.reactSkills'),
                                                overview: t('projects.reactSkillsOverview'),
                                                problem: t('projects.reactSkillsProblem'),
                                                solution: t('projects.reactSkillsSolution'),
                                                link: 'https://mido-io.github.io/react-skills-showcase/'
                                            })} style={{ backgroundColor: '#ff9500', color: '#fff', border: 'none', cursor: 'pointer', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', transition: 'background-color 0.2s', boxShadow: '0 2px 4px rgba(255,149,0,0.2)' }}>{t('projects.caseStudy')}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {selectedProject && isDevMode === false && (
                            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', animation: 'fadeIn 0.3s ease' }}>
                                {/* Back Button & Header */}
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', pb: '1rem', borderBottom: '1px solid #e5e5ea', paddingBottom: '1rem' }}>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                                            background: 'none', border: 'none', color: '#007aff',
                                            fontSize: '1rem', fontWeight: '600', cursor: 'pointer',
                                            padding: 0
                                        }}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                                        {t('projects.detailsBack')}
                                    </button>
                                </div>

                                {/* Content */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingBottom: '2rem' }}>
                                    <h2 style={{ fontSize: '2.2rem', color: '#1d1d1f', margin: 0, letterSpacing: '-0.5px' }}>{selectedProject.title}</h2>

                                    {/* Overview */}
                                    <div>
                                        <h3 style={{ fontSize: '1.2rem', color: '#1d1d1f', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#007aff' }}></div>
                                            {t('projects.detailsOverview')}
                                        </h3>
                                        <p style={{ color: '#555', lineHeight: '1.7', fontSize: '1.05rem', margin: 0 }}>{selectedProject.overview}</p>
                                    </div>

                                    {/* Problem */}
                                    <div style={{ padding: '1.5rem', backgroundColor: '#fff5f5', borderRadius: '12px', border: '1px solid #ffebeb' }}>
                                        <h3 style={{ fontSize: '1.2rem', color: '#d70015', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                                            {t('projects.detailsProblem')}
                                        </h3>
                                        <p style={{ color: '#4a0004', lineHeight: '1.7', fontSize: '1.05rem', margin: 0 }}>{selectedProject.problem}</p>
                                    </div>

                                    {/* Solution */}
                                    <div style={{ padding: '1.5rem', backgroundColor: '#f0fdf4', borderRadius: '12px', border: '1px solid #dcfce7' }}>
                                        <h3 style={{ fontSize: '1.2rem', color: '#248a3d', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                            {t('projects.detailsSolution')}
                                        </h3>
                                        <p style={{ color: '#0f3c1b', lineHeight: '1.7', fontSize: '1.05rem', margin: 0 }}>{selectedProject.solution}</p>
                                    </div>

                                    {/* Action */}
                                    <div style={{ marginTop: '1rem' }}>
                                        <a href={selectedProject.link} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#1d1d1f', color: '#fff', padding: '0.8rem 1.8rem', borderRadius: '30px', fontSize: '1rem', fontWeight: '600', textDecoration: 'none', transition: 'transform 0.2s', boxShadow: '0 4px 14px rgba(0,0,0,0.1)' }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                                            {t('projects.detailsShowLive')}
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        </a>
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

export default React.memo(ProjectsTab);
