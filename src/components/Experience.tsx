import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteData } from '../data/siteData';
import SectionHeader from './SectionHeader';

export default function Experience() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="lab" ref={ref} className="section">
            <div className="layout-main">
                <SectionHeader title="Lab" number={siteData.sections.lab.number} />

                <p className="small-text" style={{ marginBottom: 'var(--space-xl)', marginTop: 'calc(var(--space-2xl) * -0.5)' }}>
                    Engineering notebook — what I learned by building and operating real systems.
                </p>

                <div>
                    {siteData.experience.map((exp, i) => (
                        <motion.div
                            key={exp.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="lab-entry"
                        >
                            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--space-md)' }}>
                                <h3 className="lab-entry__title">{exp.title}</h3>
                                <span className="lab-entry__meta" style={{ flexShrink: 0 }}>{exp.period}</span>
                            </div>
                            <p className="lab-entry__meta">{exp.company}</p>

                            <p className="lab-entry__description">{exp.description}</p>

                            {exp.responsibilities && (
                                <ul className="lab-entry__list">
                                    {exp.responsibilities.map((r, j) => (
                                        <li key={j}>{r}</li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
