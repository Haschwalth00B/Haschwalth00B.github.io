import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram, Film, ChevronDown, Download } from 'lucide-react';
import { siteData } from '../data/siteData';

const iconMap: Record<string, React.ElementType> = { github: Github, linkedin: Linkedin, mail: Mail, instagram: Instagram, film: Film };

export default function Hero() {
    const phrases = siteData.hero.typingPhrases;
    const [phraseIdx, setPhraseIdx] = useState(0);
    const [text, setText] = useState('');
    const [deleting, setDeleting] = useState(false);


    useEffect(() => {
        const target = phrases[phraseIdx];
        const speed = deleting ? 30 : 70;
        if (!deleting && text === target) {
            setTimeout(() => setDeleting(true), 2000);
            return;
        }
        if (deleting && text === '') {
            setDeleting(false);
            setPhraseIdx(i => (i + 1) % phrases.length);
            return;
        }
        const timer = setTimeout(() => {
            setText(deleting ? target.substring(0, text.length - 1) : target.substring(0, text.length + 1));
        }, speed);
        return () => clearTimeout(timer);
    }, [text, deleting, phraseIdx, phrases]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated gradient bg */}
            <motion.div
                animate={{
                    background: [
                        'radial-gradient(ellipse at 20% 30%, rgba(0,217,255,0.08) 0%, transparent 50%)',
                        'radial-gradient(ellipse at 80% 70%, rgba(255,107,107,0.08) 0%, transparent 50%)',
                        'radial-gradient(ellipse at 50% 50%, rgba(240,160,80,0.08) 0%, transparent 50%)',
                        'radial-gradient(ellipse at 20% 30%, rgba(0,217,255,0.08) 0%, transparent 50%)',
                    ],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"

            />

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(228,228,231,1) 1px, transparent 1px), linear-gradient(90deg, rgba(228,228,231,1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                {/* Terminal line */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 text-sm text-muted font-mono"
                >
                    <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                    {siteData.name.toLowerCase()}@homelab:~
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight mb-4"
                >
                    <span className="gradient-text">{siteData.hero.displayName}</span>
                </motion.h1>


                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-lg text-muted mb-6"
                >
                    {siteData.hero.subtitle}
                </motion.p>

                {/* Typewriter */}

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-2xl sm:text-3xl font-bold mb-8 h-10"
                >
                    <span className="text-cyan">{text}</span>
                    <span className="animate-pulse text-cyan">|</span>
                </motion.div>

                {/* Bio */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-muted max-w-2xl mx-auto mb-10 text-lg"
                >
                    {siteData.hero.bio}

                </motion.p>

                {/* Resume download button — only shown when hasResume is true */}
                {siteData.hero.hasResume && (
                    <motion.div

                        initial={{ opacity: 0, y: 20 }}

                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                        className="flex justify-center mb-10"
                    >
                        <motion.a
                            href={siteData.hero.resumeUrl}
                            download
                            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-background font-bold rounded-sm hover:bg-cyan/90 transition-all duration-300 group"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Download className="w-5 h-5" />
                            Download Resume
                            <span className="group-hover:translate-y-0.5 transition-transform duration-300">↓</span>
                        </motion.a>
                    </motion.div>
                )}

                {/* Social icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: siteData.hero.hasResume ? 1.2 : 1.1 }}
                    className="flex justify-center gap-4 mb-12"
                >
                    {siteData.socials.map(s => {
                        const Icon = iconMap[s.icon] || Mail;
                        return (
                            <motion.a
                                key={s.name}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 glass rounded-lg flex items-center justify-center text-muted hover:text-cyan hover:border-cyan transition-all duration-300"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                title={s.name}
                            >
                                <Icon className="w-5 h-5" />
                            </motion.a>
                        );
                    })}
                </motion.div>

                {/* Scroll indicator */}
                <motion.button
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 8, 0] }}

                    transition={{ delay: 1.5, y: { duration: 2, repeat: Infinity } }}
                    className="text-muted hover:text-cyan transition-colors"
                >
                    <ChevronDown className="w-6 h-6" />
                </motion.button>
            </div>
        </section>
    );
}
