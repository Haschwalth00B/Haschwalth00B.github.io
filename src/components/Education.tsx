import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, ExternalLink } from 'lucide-react';
import { siteData } from '../data/siteData';
import SectionHeader from './SectionHeader';

export default function Education() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="education" ref={ref} className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeader number="02" title="Education" />
                <p className="text-muted mt-2 mb-12 max-w-2xl">
                    My academic journey and the foundation of my technical expertise.
                </p>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

                    <div className="space-y-8">
                        {siteData.education.map((edu, i) => (
                            <motion.div
                                key={edu.institution}
                                initial={{ opacity: 0, x: -20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: i * 0.15, duration: 0.5 }}
                                className="relative md:pl-16"
                            >
                                {/* Timeline dot */}
                                <div className="hidden md:flex absolute left-4 top-6 w-5 h-5 rounded-full bg-background border-2 border-cyan items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-cyan" />
                                </div>

                                <div className="glass rounded-xl p-6 glass-hover transition-all duration-300">
                                    <div className="flex items-start justify-between gap-4 flex-wrap">
                                        <div className="flex items-center gap-3">
                                            <GraduationCap className="w-5 h-5 text-cyan shrink-0" />
                                            <div>
                                                <h3 className="font-bold text-lg">{edu.degree}</h3>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-muted">{edu.institution}</span>
                                                    {edu.url && (
                                                        <a href={edu.url} target="_blank" rel="noopener noreferrer" className="text-cyan hover:text-cyan/80">
                                                            <ExternalLink className="w-3.5 h-3.5" />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            {edu.period && <p className="text-cyan font-mono text-sm">{edu.period}</p>}
                                            {edu.gpa && <p className="text-muted text-sm mt-1">GPA: {edu.gpa}</p>}
                                        </div>
                                    </div>
                                    {edu.description && <p className="text-muted mt-3 text-sm">{edu.description}</p>}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
