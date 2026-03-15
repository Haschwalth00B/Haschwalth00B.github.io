import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
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
    };

    return (
        <section id="contact" ref={ref} className="py-10">
            <div className="max-w-2xl mx-auto px-6">
                <SectionHeader title="Contact" />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mt-4 space-y-6"
                >
                    <p className="text-muted">{siteData.contact.description}</p>

                    {/* Email */}
                    <button
                        onClick={copyEmail}
                        className="flex items-center gap-3 group cursor-pointer"
                    >
                        <Mail className="w-4 h-4 text-muted" />
                        <span className="text-accent hover:underline underline-offset-2">{siteData.contact.email}</span>
                        {copied ? (
                            <CheckCircle className="w-4 h-4 text-green" />
                        ) : (
                            <span className="text-xs text-muted opacity-0 group-hover:opacity-100 transition-opacity">click to copy</span>
                        )}
                    </button>

                    {/* Location & timezone */}
                    <div className="flex items-center gap-6 text-sm text-muted">
                        <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5" />
                            {siteData.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {siteData.timezone}
                        </span>
                    </div>

                    <p className="text-sm text-muted">{siteData.contact.responseTime}</p>
                </motion.div>
            </div>
        </section>
    );
}
