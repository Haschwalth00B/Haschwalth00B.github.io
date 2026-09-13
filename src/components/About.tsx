import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { siteData } from '../data/siteData';
import SectionHeader from './SectionHeader';

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="about" ref={ref} className="section">
            <div className="layout-main">
                <SectionHeader title="About & Education" number={siteData.sections.about.number} />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    {/* Summary bio paragraph */}
                    <p className="body-text" style={{ maxWidth: '65ch', marginBottom: 'var(--space-2xl)', fontSize: '1.05rem', lineHeight: '1.75' }}>
                        {siteData.about.summary}
                    </p>

                    {/* Editorial metadata fragments */}
                    <div className="about-grid" style={{ marginBottom: 'clamp(3rem, 6vh, 4.5rem)' }}>
                        {siteData.about.fragments.map((fragment, i) => (
                            <motion.div
                                key={fragment.label}
                                initial={{ opacity: 0, y: 8 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: i * 0.08, duration: 0.4 }}
                                style={{ display: 'contents' }}
                            >
                                <span className="about-label">{fragment.label}</span>
                                <p className="about-value">{fragment.value}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Academic Background & Education Archive */}
                    <div className="education-section">
                        <div className="other-projects__header" style={{ marginBottom: 'var(--space-lg)' }}>
                            <span className="meta">ACADEMIC BACKGROUND & EDUCATION</span>
                        </div>

                        <div className="education-timeline">
                            {siteData.education.map((edu, i) => (
                                <motion.div
                                    key={edu.institution}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: i * 0.08, duration: 0.4 }}
                                    className="edu-card"
                                >
                                    <div className="edu-card__period">
                                        <span className="edu-card__year">{edu.period}</span>
                                        <span className="edu-card__status">{edu.status}</span>
                                    </div>

                                    <div className="edu-card__info">
                                        <div className="edu-card__title-row">
                                            <h3 className="edu-card__degree">{edu.degree}</h3>
                                            {edu.url && (
                                                <a
                                                    href={edu.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="edu-card__link"
                                                    title={edu.institution}
                                                >
                                                    <ArrowUpRight size={13} />
                                                </a>
                                            )}
                                        </div>

                                        <span className="edu-card__institution">{edu.institution} · {edu.location}</span>

                                        {edu.coursework && (
                                            <p className="edu-card__desc">Relevant Coursework: {edu.coursework}</p>
                                        )}

                                        {edu.gpa && (
                                            <span className="edu-card__gpa">GPA: {edu.gpa}</span>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
