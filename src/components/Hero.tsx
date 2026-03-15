import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram, Film, Download } from 'lucide-react';
import { siteData } from '../data/siteData';

const iconMap: Record<string, React.ElementType> = { github: Github, linkedin: Linkedin, mail: Mail, instagram: Instagram, film: Film };

export default function Hero() {
    return (
        <section id="home" className="min-h-[85vh] flex items-center">
            <div className="max-w-2xl mx-auto px-6 w-full py-24">
                {/* Greeting */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-muted text-sm font-mono mb-4"
                >
                    {siteData.hero.greeting}
                </motion.p>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
                >
                    {siteData.hero.displayName}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-muted text-lg mb-6"
                >
                    {siteData.hero.subtitle}
                </motion.p>

                {/* Bio */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-muted mb-8 max-w-lg leading-relaxed"
                >
                    {siteData.hero.bio}
                </motion.p>

                {/* Actions row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-5 flex-wrap"
                >
                    {/* Resume button */}
                    {siteData.hero.hasResume && (
                        <a
                            href={siteData.hero.resumeUrl}
                            download
                            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-accent text-background rounded-md hover:bg-accent/90 transition-colors"
                        >
                            <Download className="w-4 h-4" />
                            Resume
                        </a>
                    )}

                    {/* Social icons */}
                    <div className="flex items-center gap-3">
                        {siteData.socials.map(s => {
                            const Icon = iconMap[s.icon] || Mail;
                            return (
                                <a
                                    key={s.name}
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted hover:text-foreground transition-colors"
                                    title={s.name}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
