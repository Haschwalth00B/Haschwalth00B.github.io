import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github } from 'lucide-react';
import { siteData } from '../data/siteData';
import SectionHeader from './SectionHeader';

export default function Projects() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const [filter, setFilter] = useState('All');

    const categories = ['All', ...new Set(siteData.projects.map(p => p.category))];
    const filtered = filter === 'All' ? siteData.projects : siteData.projects.filter(p => p.category === filter);

    return (
        <section id="projects" ref={ref} className="py-10">
            <div className="max-w-2xl mx-auto px-6">
                <SectionHeader title="Projects" />

                {/* Filter */}
                <div className="flex flex-wrap gap-2 mt-4 mb-8">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-3 py-1 text-sm rounded-md transition-colors ${filter === cat
                                    ? 'bg-accent/15 text-accent'
                                    : 'text-muted hover:text-foreground'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Project list */}
                <div className="space-y-4">
                    {filtered.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.08, duration: 0.4 }}
                            className="card p-5 card-hover transition-all duration-200"
                        >
                            <div className="flex items-start justify-between gap-3 mb-2">
                                <h3 className="font-semibold">{project.title}</h3>
                                <div className="flex items-center gap-2 shrink-0">
                                    <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Active' ? 'bg-green' : 'bg-muted'}`} />
                                    <span className="text-xs text-muted">{project.status}</span>
                                </div>
                            </div>

                            <p className="text-muted text-sm mb-3">{project.description}</p>

                            <div className="flex items-center justify-between">
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-2 py-0.5 text-xs font-mono rounded text-muted bg-background border border-border">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {'github' in project && (project as any).github && (
                                    <a
                                        href={(project as any).github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted hover:text-accent transition-colors shrink-0"
                                        title="View on GitHub"
                                    >
                                        <Github className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
