import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { siteData } from '../data/siteData';
import SectionHeader from './SectionHeader';

export default function Education() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="education" ref={ref} className="py-10">
            <div className="max-w-2xl mx-auto px-6">
                <SectionHeader title="Education" />

                <div className="mt-6 space-y-6">
                    {siteData.education.map((edu, i) => (
                        <motion.div
                            key={edu.institution}
                            initial={{ opacity: 0, y: 10 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            className="group"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="min-w-0">
                                    <h3 className="font-semibold">{edu.degree}</h3>
                                    <div className="flex items-center gap-2 mt-0.5">
                                        <span className="text-muted text-sm">{edu.institution}</span>
                                        {edu.url && (
                                            <a href={edu.url} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                                                <ExternalLink className="w-3 h-3" />
                                            </a>
                                        )}
                                    </div>
                                    {edu.description && (
                                        <p className="text-muted text-sm mt-1">{edu.description}</p>
                                    )}
                                </div>
                                <div className="text-right shrink-0">
                                    {edu.period && <p className="text-sm text-muted font-mono">{edu.period}</p>}
                                    {edu.gpa && <p className="text-xs text-muted mt-0.5">{edu.gpa}</p>}
                                </div>
                            </div>
                            {i < siteData.education.length - 1 && (
                                <div className="divider mt-6" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
