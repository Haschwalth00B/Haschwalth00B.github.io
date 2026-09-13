import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import { siteData } from '../data/siteData';
import SectionHeader from './SectionHeader';

export default function Projects() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="work" ref={ref} className="section">
            <div className="layout-main">
                <SectionHeader title="Selected Work" number={siteData.sections.work.number} />

                {/* Featured Projects — Case Study Spreads */}
                <div className="projects-list">
                    {siteData.projects.map((project, i) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 15 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="case-study"
                        >
                            <div className="case-study__header">
                                <span className="case-study__num">
                                    {String(i + 1).padStart(2, '0')}
                                </span>

                                <div className="case-study__meta">
                                    <span className="case-study__period">{project.period}</span>
                                    <span className="case-study__status">
                                        <span className="case-study__dot" />
                                        {project.status}
                                    </span>
                                </div>
                            </div>

                            <div className="case-study__grid">
                                {/* Case Study Narrative */}
                                <div className="case-study__content">
                                    <h3 className="case-study__title">{project.title}</h3>
                                    <p className="case-study__desc">{project.description}</p>

                                    {/* Implementation Details List */}
                                    <ul className="case-study__bullets">
                                        {project.implementationDetails.map((detail, idx) => (
                                            <li key={idx}>{detail}</li>
                                        ))}
                                    </ul>

                                    <div className="case-study__footer">
                                        <span className="case-study__tech">
                                            {project.tags.join(' · ')}
                                        </span>

                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="case-study__link"
                                                onClick={() => {
                                                    if (typeof gtag === 'function') {
                                                        gtag('event', 'github_link_click', {
                                                            event_category: 'engagement',
                                                            project_name: project.title,
                                                        });
                                                    }
                                                }}
                                            >
                                                <Github size={13} />
                                                Source
                                                <ArrowUpRight size={11} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Authentic Visual Column: Real Hardware Image or Technical Spec */}
                                {project.image ? (
                                    <div className="case-study__visual">
                                        <div className="case-study__img-wrapper">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="case-study__img"
                                            />
                                        </div>
                                        <span className="case-study__caption">
                                            Fig. {String(i + 1).padStart(2, '0')} — Proxmox VE Lab Hardware Cluster Nodes
                                        </span>
                                    </div>
                                ) : (
                                    <div className="case-study__spec-box">
                                        <div className="case-study__spec-inner">
                                            <span className="case-study__spec-label">SYSTEM ARCHITECTURE</span>
                                            <div className="case-study__spec-rows">
                                                <div className="case-study__spec-row">
                                                    <span>CATEGORY</span>
                                                    <span>{project.category}</span>
                                                </div>
                                                <div className="case-study__spec-row">
                                                    <span>TIMELINE</span>
                                                    <span>{project.period}</span>
                                                </div>
                                                <div className="case-study__spec-row">
                                                    <span>STATE</span>
                                                    <span>{project.status}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Secondary Repositories & Dotfiles */}
                <div className="other-projects">
                    <div className="other-projects__header">
                        <span className="meta">SECONDARY REPOSITORIES & DOTFILES</span>
                    </div>

                    <div className="other-projects__table">
                        {siteData.otherProjects.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : {}}
                                transition={{ delay: (siteData.projects.length + i) * 0.05, duration: 0.4 }}
                                className="other-projects__row"
                            >
                                <span className="other-projects__cat">{item.category}</span>
                                <div>
                                    <span className="other-projects__title">{item.title}</span>
                                    <p className="small-text" style={{ marginTop: '2px' }}>{item.desc}</p>
                                </div>
                                <span className="other-projects__tags">{item.tags.join(' · ')}</span>

                                <div className="other-projects__actions">
                                    {item.github && (
                                        <a
                                            href={item.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="other-projects__link"
                                            title="View Source"
                                        >
                                            <Github size={13} />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
