import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { siteData } from '../data/siteData';
import SectionHeader from './SectionHeader';

export default function Projects() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });
    const [filter, setFilter] = useState('All');

    const categories = ['All', ...new Set(siteData.projects.map(p => p.category))];
    const filtered = filter === 'All' ? siteData.projects : siteData.projects.filter(p => p.category === filter);

    return (
        <section id="projects" ref={ref} className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeader number="04" title="Projects" />
                <p className="text-muted mt-2 mb-8 max-w-2xl">
                    A collection of things I've built, broken, and rebuilt. Each project is a lesson learned.
                </p>

                {/* Filter tabs */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                    ? 'bg-cyan text-background'
                                    : 'glass text-muted hover:text-foreground hover:border-cyan'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Project grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {filtered.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="glass rounded-xl p-6 glass-hover transition-all duration-300 group relative"
                        >
                            {project.featured && (
                                <span className="absolute top-4 right-4 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-cyan/10 text-cyan rounded border border-cyan/20">
                                    Featured
                                </span>
                            )}

                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                                    <Folder className="w-5 h-5 text-cyan" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg group-hover:text-cyan transition-colors">{project.title}</h3>
                                    <div className="flex items-center gap-2">
                                        <span className={`w-2 h-2 rounded-full ${project.status === 'Active' ? 'bg-green' : 'bg-muted'}`} />
                                        <span className="text-xs text-muted">{project.status}</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-muted text-sm mb-5 leading-relaxed">{project.description}</p>

                            <div className="flex items-center justify-between">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-2.5 py-1 text-[11px] font-mono rounded bg-surface text-muted border border-border">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {project.title === 'Portfolio Website' && (
                                    <ExternalLink className="w-4 h-4 text-muted group-hover:text-cyan transition-colors" />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
