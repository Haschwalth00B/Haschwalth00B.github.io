import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteData } from '../data/siteData';
import SectionHeader from './SectionHeader';

export default function Skills() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="skills" ref={ref} className="py-16">
            <div className="max-w-2xl mx-auto px-6">
                <SectionHeader title="Skills" />

                <div className="mt-6 space-y-6">
                    {siteData.skills.map((group, i) => (
                        <motion.div
                            key={group.group}
                            initial={{ opacity: 0, y: 10 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.08, duration: 0.4 }}
                        >
                            <h3 className="text-sm font-medium text-muted mb-3">{group.group}</h3>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map(skill => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm rounded-md bg-surface border border-border text-foreground hover:border-muted transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
