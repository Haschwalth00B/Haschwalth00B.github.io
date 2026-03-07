import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Clock, Cpu, Quote } from 'lucide-react';
import { siteData } from '../data/siteData';
import SectionHeader from './SectionHeader';

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" ref={ref} className="py-24 relative">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeader number="01" title="About Me" />

                <div className="grid md:grid-cols-5 gap-10 mt-12">
                    {/* Bio column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-3 space-y-6"
                    >
                        <p className="text-foreground text-lg leading-relaxed">
                            {siteData.about.bio}
                        </p>

                        <div className="glass rounded-xl p-5 border-l-2 border-cyan">
                            <div className="flex items-start gap-3">
                                <Quote className="w-5 h-5 text-cyan mt-1 shrink-0" />
                                <div>
                                    <p className="text-foreground italic">"{siteData.about.philosophy}"</p>
                                    <p className="text-muted text-sm mt-2">— My debugging philosophy</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-muted leading-relaxed">
                            {siteData.about.originStory}
                        </p>
                    </motion.div>

                    {/* Info sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:col-span-2 space-y-5"
                    >
                        {/* Location card */}
                        <div className="glass rounded-xl p-5">
                            <div className="flex items-center gap-3 mb-3">
                                <MapPin className="w-5 h-5 text-cyan" />
                                <span className="font-semibold">Location</span>
                            </div>
                            <p className="text-muted">{siteData.location}</p>
                            <div className="flex items-center gap-2 mt-2 text-sm text-muted">
                                <Clock className="w-4 h-4" />
                                {siteData.timezone}
                            </div>
                        </div>

                        {/* Currently doing */}
                        <div className="glass rounded-xl p-5">
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Cpu className="w-5 h-5 text-cyan" />
                                What I'm Working On
                            </h4>
                            <div className="space-y-3">
                                {siteData.about.currently.map(c => (
                                    <div key={c.label} className="flex items-start gap-2">
                                        <span className="text-sm shrink-0">{c.label}</span>
                                        <span className="text-muted text-sm">{c.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="glass rounded-xl p-5">
                            <h4 className="font-semibold mb-3">Quick Stats</h4>
                            <div className="grid grid-cols-1 gap-3">
                                {siteData.about.stats.map(s => (
                                    <div key={s.label} className="flex justify-between items-center">
                                        <span className="text-muted text-sm">{s.label}</span>
                                        <span className="text-cyan font-bold">{s.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tech obsessions */}
                        <div className="glass rounded-xl p-5">
                            <h4 className="font-semibold mb-3">Currently obsessing over:</h4>
                            <div className="flex flex-wrap gap-2">
                                {siteData.about.techObsessions.map(t => (
                                    <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-cyan/10 text-cyan border border-cyan/20">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
