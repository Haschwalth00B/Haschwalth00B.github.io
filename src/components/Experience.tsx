import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, CheckCircle } from 'lucide-react';
import { siteData } from '../data/siteData';
import SectionHeader from './SectionHeader';

export default function Experience() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="experience" ref={ref} className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeader number="03" title="Experience" />
                <p className="text-muted mt-2 mb-12 max-w-2xl">
                    Building real-world skills through hands-on projects and continuous self-learning.
                </p>

                <div className="space-y-8">
                    {siteData.experience.map((exp, i) => (
                        <motion.div
                            key={exp.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            className="glass rounded-xl p-6 glass-hover transition-all duration-300"
                        >
                            <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                                        <Briefcase className="w-5 h-5 text-cyan" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">{exp.title}</h3>
                                        <p className="text-muted">{exp.company}</p>
                                    </div>
                                </div>
                                <span className="px-3 py-1 text-xs font-mono text-cyan bg-cyan/10 rounded-full border border-cyan/20">
                                    {exp.period}
                                </span>
                            </div>

                            <p className="text-muted mb-4">{exp.description}</p>

                            {exp.responsibilities && (
                                <div>
                                    <h4 className="text-sm font-semibold mb-3 text-foreground">Key Activities</h4>
                                    <ul className="space-y-2">
                                        {exp.responsibilities.map((r, j) => (
                                            <li key={j} className="flex items-start gap-2 text-muted text-sm">
                                                <CheckCircle className="w-4 h-4 text-cyan mt-0.5 shrink-0" />
                                                {r}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Encouraging note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                    className="mt-8 glass rounded-xl p-5 border-l-2 border-gold text-sm text-muted"
                >
                    💡 My projects and self-learning demonstrate real-world skills. Check out the <a href="#projects" className="text-cyan hover:underline">Projects</a> section to see what I've built.
                </motion.div>
            </div>
        </section>
    );
}
