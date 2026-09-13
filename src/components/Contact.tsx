import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteData } from '../data/siteData';
import SectionHeader from './SectionHeader';

export default function Contact() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText(siteData.contact.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        if (typeof gtag === 'function') {
            gtag('event', 'email_copy', { event_category: 'engagement' });
        }
    };

    return (
        <section id="contact" ref={ref} className="section">
            <div className="layout-main">
                <SectionHeader title="Contact" number={siteData.sections.contact.number} />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    {/* Email as primary element */}
                    <button onClick={copyEmail} className="contact__email" title="Click to copy email">
                        {siteData.contact.email}
                    </button>

                    {copied && (
                        <p className="contact__copied">Copied to clipboard</p>
                    )}

                    {!copied && (
                        <p className="meta" style={{ marginTop: 'var(--space-sm)' }}>Click to copy</p>
                    )}

                    {/* Social links as text */}
                    <div className="contact__socials">
                        {siteData.socials.map(s => (
                            <a
                                key={s.name}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact__social-link"
                                onClick={() => {
                                    if (typeof gtag === 'function') {
                                        gtag('event', 'social_click', {
                                            event_category: 'engagement',
                                            platform: s.name,
                                            location: 'contact',
                                        });
                                    }
                                }}
                            >
                                {s.name}
                            </a>
                        ))}
                    </div>

                    {/* Location */}
                    <div className="contact__meta">
                        <span>{siteData.location}</span>
                        <span>{siteData.timezone}</span>
                        <span>{siteData.contact.responseTime}</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
