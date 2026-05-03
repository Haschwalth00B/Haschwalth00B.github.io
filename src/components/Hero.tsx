
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram, Film, Download, Check } from 'lucide-react';
import { siteData } from '../data/siteData';

const iconMap: Record<string, React.ElementType> = { github: Github, linkedin: Linkedin, mail: Mail, instagram: Instagram, film: Film };


export default function Hero() {
    const [downloaded, setDownloaded] = useState(false);

    const handleDownload = () => {
        setDownloaded(true);
        setTimeout(() => setDownloaded(false), 2000);
        gtag('event', 'resume_download', { event_category: 'engagement' });
    };

    return (
        <section id="home" className="pt-20 pb-10">
            <div className="container-main px-6">
                {/* Banner image — links to Art Institute of Chicago page for Nighthawks (1942) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-lg overflow-hidden mb-6 aspect-[3/1] bg-surface"
                >
                    <a
                        href="https://www.artic.edu/artworks/111628/nighthawks"
                        target="_blank"
                        rel="noopener noreferrer"

                    >
                        <img
                            src="/images/banner.jpg"
                            alt="Nighthawks (1942) by Edward Hopper"
                            className="w-full h-full object-cover"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                    </a>
                </motion.div>

                {/* Name + Role row */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-4"
                >
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        {siteData.hero.displayName}
                    </h1>
                    <p className="text-muted mt-1">{siteData.hero.subtitle}</p>
                </motion.div>

                {/* Social icons row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-3 mb-5"
                >
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
                                onClick={() => gtag('event', 'social_click', {
                                    event_category: 'engagement',
                                    platform: s.name,
                                    location: 'hero',
                                })}
                            >
                                <Icon className="w-[18px] h-[18px]" />
                            </a>
                        );
                    })}
                </motion.div>

                {/* Bio + metadata row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}

                    className="flex items-start justify-between gap-6"
                >
                    <p className="text-muted leading-relaxed max-w-md">

                        {siteData.hero.bio}
                    </p>
                    <div className="text-right text-sm text-muted shrink-0 hidden sm:block">
                        <p>{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>

                        <p className="mt-0.5">{siteData.location}</p>
                    </div>
                </motion.div>

                {/* Resume button */}
                {siteData.hero.hasResume && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-5"
                    >
                        <a
                            href={siteData.hero.resumeUrl}
                            download
                            onClick={handleDownload}
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-accent text-background rounded-md hover:bg-accent/90 transition-colors"
                        >
                            {downloaded ? (
                                <>
                                    <Check className="w-4 h-4" />
                                    Downloaded
                                </>
                            ) : (
                                <>
                                    <Download className="w-4 h-4" />
                                    Resume
                                </>
                            )}
                        </a>
                    </motion.div>
                )}
            </div>
        </section>
    );
}

