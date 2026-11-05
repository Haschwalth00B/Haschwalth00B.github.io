import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, Copy } from 'lucide-react';
import { siteData } from '../data/siteData';
import SectionHeader from './SectionHeader';
import { Rise } from './motion';
import SocialIcon from './SocialIcon';

const HELLO = `mailto:${siteData.contact.email}?subject=${encodeURIComponent('Hello from your portfolio')}`;

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(siteData.contact.email);
        } catch {
            // Clipboard blocked or unavailable: open the email instead of claiming it was copied.
            window.location.href = HELLO;
            return;
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        if (typeof gtag === 'function') {
            gtag('event', 'email_copy', { event_category: 'engagement' });
        }
    };

    const links = siteData.socials.filter(s => s.icon !== 'mail');

    return (
        <section id="contact" className="section contact">
            <SectionHeader title="Contact" />

            <Rise>
                <button onClick={copyEmail} className="key contact__email">
                    <span className="contact__address">{siteData.contact.email}</span>
                    <span className="contact__copy" aria-live="polite">
                        <span key={String(copied)} className="swap contact__copy-inner">
                            {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
                            {copied ? 'Copied' : 'Copy'}
                        </span>
                    </span>
                </button>
            </Rise>

            <div className="contact__links">
                {links.map((s, i) => (
                    <Rise key={s.name} delay={0.06 * i}>
                        <a
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="key contact__link"
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
                            <SocialIcon icon={s.icon} size={22} />
                            <span>{s.name}</span>
                            <ArrowUpRight size={18} aria-hidden="true" />
                        </a>
                    </Rise>
                ))}
            </div>

            <Rise delay={0.1} className="well contact__place">
                <div className="contact__facts">
                    <p className="lead">{siteData.location}</p>
                    <p>{siteData.timezone}. {siteData.contact.responseTime}.</p>
                </div>
                <a href={HELLO} className="contact__hello">
                    <span className="head">Say hello</span>
                    <span className="key key--solid key--round contact__arrow" aria-hidden="true">
                        <ArrowRight size={24} />
                    </span>
                </a>
            </Rise>
        </section>
    );
}
