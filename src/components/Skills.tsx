import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteData } from '../data/siteData';
import SectionHeader from './SectionHeader';

export default function Skills() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="systems" ref={ref} className="section">
            <div className="layout-main">
                <SectionHeader title="Systems & Skills" number={siteData.sections.systems.number} />

                <div className="disciplines-list">
                    {siteData.skillGroups.map((group, i) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 8 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.05, duration: 0.4 }}
                            className="discipline"
                        >
                            <span className="discipline__number">{String(i + 1).padStart(2, '0')}</span>
                            <span className="discipline__title">{group.category}</span>
                            <span className="discipline__items">
                                {group.items.join(' · ')}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
