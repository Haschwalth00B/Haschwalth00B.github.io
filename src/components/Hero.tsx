import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, Film } from 'lucide-react';
import { siteData } from '../data/siteData';

const iconMap: Record<string, React.ElementType> = {
    github: Github,
    linkedin: Linkedin,
    mail: Mail,
    film: Film,
};

export default function Hero() {
    const [downloaded, setDownloaded] = useState(false);

    const handleDownload = () => {
        setDownloaded(true);
        setTimeout(() => setDownloaded(false), 2000);
        if (typeof gtag === 'function') {
            gtag('event', 'resume_download', { event_category: 'engagement' });
        }
    };

    return (
        <section className="hero" id="home">
            <div className="layout-main" style={{ position: 'relative', zIndex: 1 }}>
                {/* Top Identity Header */}
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hero__topbar"
                >
                    <div className="hero__identity">
                        <span className="hero__name">{siteData.fullName}</span>
                        <span className="hero__role-badge">LINUX SYSTEMS · INFRASTRUCTURE · NETWORKING</span>
                    </div>

                    <div className="hero__location">
                        <span>{siteData.location}</span>
                        <span className="hero__timezone">BCA 2024–2027</span>
                    </div>
                </motion.div>

                {/* Primary Natural Headline Statement */}
                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="hero__headline"
                >
                    {siteData.hero.statement}
                </motion.h1>

                {/* Asymmetric Editorial Grid */}
                <div className="hero__grid">
                    {/* Left Column: Technical Descriptor & Brief Supporting Line */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="hero__col-main"
                    >
                        <p className="hero__subtitle">
                            {siteData.hero.descriptor}
                        </p>
                        <p className="hero__bio">
                            {siteData.hero.bio}
                        </p>

                        <div className="hero__actions">
                            <div className="hero__socials">
                                {siteData.socials.map(s => {
                                    const Icon = iconMap[s.icon] || Mail;
                                    return (
                                        <a
                                            key={s.name}
                                            href={s.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hero__social-link"
                                            title={s.name}
                                            onClick={() => {
                                                if (typeof gtag === 'function') {
                                                    gtag('event', 'social_click', {
                                                        event_category: 'engagement',
                                                        platform: s.name,
                                                        location: 'hero',
                                                    });
                                                }
                                            }}
                                        >
                                            <Icon size={16} />
                                        </a>
                                    );
                                })}
                            </div>

                            {siteData.hero.hasResume && (
                                <a
                                    href={siteData.hero.resumeUrl}
                                    download
                                    onClick={handleDownload}
                                    className="hero__resume"
                                >
                                    {downloaded ? 'Downloaded' : 'Resume'}
                                    <ArrowUpRight size={13} />
                                </a>
                            )}
                        </div>
                    </motion.div>

                    {/* Right Column: Key Focus Areas (Direct from Resume) */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="hero__col-meta"
                    >
                        <div className="hero__meta-card">
                            <div className="hero__meta-item">
                                <span className="hero__meta-key">CURRENT FOCUS</span>
                                <span className="hero__meta-val">Multi-region network fabric (Containerlab + FRRouting)</span>
                            </div>
                            <div className="hero__meta-item">
                                <span className="hero__meta-key">DECLARATIVE INFRASTRUCTURE</span>
                                <span className="hero__meta-val">NixOS Flakes + Home Manager (14 modules)</span>
                            </div>
                            <div className="hero__meta-item">
                                <span className="hero__meta-key">EDUCATION</span>
                                <span className="hero__meta-val">BCA · NSAM First Grade College (GPA 7.9/10)</span>
                            </div>
                            <div className="hero__meta-item">
                                <span className="hero__meta-key">CERTIFICATION GOAL</span>
                                <span className="hero__meta-val">AWS Certified CloudOps Engineer – Associate</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="hero__divider" aria-hidden="true" />
        </section>
    );
}
