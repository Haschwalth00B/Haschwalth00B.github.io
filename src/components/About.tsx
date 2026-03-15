import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteData } from '../data/siteData';
import SectionHeader from './SectionHeader';

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="about" ref={ref} className="py-16">
            <div className="max-w-2xl mx-auto px-6">
                <SectionHeader title="About" />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mt-4 space-y-4"
                >
                    <p className="text-muted leading-relaxed">
                        {siteData.about.bio}
                    </p>

                    <div className="pt-2">
                        <p className="text-sm text-muted mb-3">Currently —</p>
                        <div className="space-y-1.5">
                            {siteData.about.currently.map(c => (
                                <div key={c.label} className="flex items-center gap-3 text-sm">
                                    <span>{c.label}</span>
                                    <span className="text-muted">{c.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-4 pt-2 text-sm text-muted">
                        <span>{siteData.location}</span>
                        <span>·</span>
                        <span>{siteData.timezone}</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
