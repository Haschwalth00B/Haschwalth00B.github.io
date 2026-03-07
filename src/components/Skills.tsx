import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layers } from 'lucide-react';
import { siteData } from '../data/siteData';
import SectionHeader from './SectionHeader';

export default function Skills() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="skills" ref={ref} className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeader number="05" title="Skills" />
                <p className="text-muted mt-2 mb-12 max-w-2xl">
                    Technologies I've worked with and continue to explore.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {siteData.skills.map((group, i) => (
                        <motion.div
                            key={group.group}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="glass rounded-xl p-6 glass-hover transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-8 h-8 rounded-lg bg-cyan/10 flex items-center justify-center">
                                    <Layers className="w-4 h-4 text-cyan" />
                                </div>
                                <h3 className="font-bold">{group.group}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {group.items.map(skill => (
                                    <motion.span
                                        key={skill}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="px-3 py-1.5 text-sm rounded-lg bg-surface border border-border text-muted hover:text-cyan hover:border-cyan/40 transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
