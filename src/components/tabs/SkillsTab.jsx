import React from 'react';
import { useTranslation } from 'react-i18next';
import TerminalBox from '../TerminalBox';
import { FaTerminal, FaCode, FaCogs, FaGlobe, FaUserAlt } from 'react-icons/fa';

const SkillsTab = ({ isDevMode }) => {
    const { t } = useTranslation();

    return (
        <TerminalBox title={isDevMode ? t('skills.devTitle') : t('skills.clientTitle')} isActive={true} isDevMode={isDevMode}>
            <div className={isDevMode ? 'custom-scrollbar-dev' : 'custom-scrollbar-client'} style={{ padding: '1.5rem', overflowY: 'auto', height: '100%' }}>
                <h2 style={{ color: isDevMode ? '#0f0' : '#1d1d1f', marginBottom: '1.5rem', fontSize: '1.8rem', letterSpacing: '-0.5px' }}>{isDevMode ? t('skills.headingDev') : t('skills.headingClient')}</h2>
                {isDevMode ? (
                    <ul style={{ listStyle: 'none', color: '#eee', display: 'flex', flexDirection: 'column', gap: '2rem', padding: 0, fontFamily: 'monospace' }}>
                        {Object.entries(t('skills.categories', { returnObjects: true })).map(([key, category]) => (
                            <li key={key}>
                                <strong style={{ color: '#fbca1f', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    [*] {category.title}
                                </strong>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: '0.8rem' }}>
                                    {category.items.map((skill, index) => (
                                        <span key={index} style={{ color: '#aaa', fontSize: '0.95rem', backgroundColor: '#111', padding: '0.3rem 0.6rem', borderRadius: '4px', border: '1px solid #333' }}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                        {Object.entries(t('skills.categories', { returnObjects: true })).map(([key, category]) => {
                            let Icon = FaCode;
                            let color = '#007aff';
                            if (key === 'stateData') { Icon = FaCogs; color = '#ff2d55'; }
                            else if (key === 'backend') { Icon = FaTerminal; color = '#34c759'; }
                            else if (key === 'uiUx') { Icon = FaGlobe; color = '#af52de'; }
                            else if (key === 'tooling') { Icon = FaCogs; color = '#ff9500'; }
                            else if (key === 'deployment') { Icon = FaGlobe; color = '#5856d6'; }

                            return (
                                <div key={key} style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e5ea', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem', borderBottom: '1px solid #f0f0f0', paddingBottom: '0.8rem' }}>
                                        <div style={{ color: color, fontSize: '1.4rem' }}><Icon /></div>
                                        <h3 style={{ color: '#1d1d1f', margin: 0, fontSize: '1.2rem' }}>{category.title}</h3>
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                                        {category.items.map(skill => (
                                            <span key={skill} style={{ padding: '0.4rem 0.8rem', backgroundColor: '#f5f5f7', color: '#555', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '500' }}>
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </TerminalBox>
    );
};

export default React.memo(SkillsTab);