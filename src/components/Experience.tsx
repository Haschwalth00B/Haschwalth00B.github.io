import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteData } from '../data/siteData';
import SectionHeader from './SectionHeader';

export default function Experience() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="engineering" ref={ref} className="py-10">
            <div className="container-main px-6">
                <SectionHeader title="Engineering" />
                <p className="text-muted text-sm mb-6 -mt-1">
                    Personal infrastructure projects — what I learned by building and operating real systems.
                </p>

                <div className="mt-6 space-y-6">
                    {siteData.experience.map((exp, i) => (
                        <motion.div
                            key={exp.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                        >
                            <div className="flex items-start justify-between gap-4 mb-2">
                                <div>
                                    <h3 className="font-semibold">{exp.title}</h3>
                                    <p className="text-muted text-sm">{exp.company}</p>
                                </div>
                                <span className="text-sm text-muted font-mono shrink-0">{exp.period}</span>
                            </div>

                            <p className="text-muted text-sm mb-3">{exp.description}</p>

                            {exp.responsibilities && (
                                <ul className="space-y-1.5">
                                    {exp.responsibilities.map((r, j) => (
                                        <li key={j} className="text-muted text-sm flex items-start gap-2">
                                            <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                                            {r}
                                        </li>
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
