import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { siteData } from '../data/siteData';
import SectionHeader from './SectionHeader';

export default function Contact() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText(siteData.contact.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" ref={ref} className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeader number="07" title="Contact" />

                <div className="grid md:grid-cols-2 gap-10 mt-12">
                    {/* Left — Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-bold">{siteData.contact.heading}</h3>
                        <p className="text-muted text-lg">{siteData.contact.description}</p>

                        {/* Email */}
                        <motion.button
                            onClick={copyEmail}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className="w-full glass rounded-xl p-5 flex items-center gap-4 glass-hover transition-all duration-300 text-left"
                        >
                            <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0">
                                <Mail className="w-6 h-6 text-cyan" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm text-muted">Email Me Directly</p>
                                <p className="font-bold truncate">{siteData.contact.email}</p>
                            </div>
                            {copied ? (
                                <CheckCircle className="w-5 h-5 text-green shrink-0" />
                            ) : (
                                <span className="text-xs text-muted shrink-0">Click to copy</span>
                            )}
                        </motion.button>

                        {/* Location & timezone */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass rounded-xl p-4">
                                <MapPin className="w-5 h-5 text-cyan mb-2" />
                                <p className="text-xs text-muted">Location</p>
                                <p className="font-semibold text-sm">{siteData.location}</p>
                            </div>
                            <div className="glass rounded-xl p-4">
                                <Clock className="w-5 h-5 text-cyan mb-2" />
                                <p className="text-xs text-muted">Timezone</p>
                                <p className="font-semibold text-sm">{siteData.timezone}</p>
                            </div>
                        </div>

                        <p className="text-sm text-muted">{siteData.contact.responseTime}</p>
                    </motion.div>

                    {/* Right — Contact form */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass rounded-xl p-6 space-y-5"
                        action={`mailto:${siteData.contact.email}`}
                        method="GET"
                    >
                        <div>
                            <label className="block text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Your name"
                                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-cyan transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-cyan transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Message</label>
                            <textarea
                                name="body"
                                rows={5}
                                placeholder="What's on your mind?"
                                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-cyan transition-colors resize-none"
                            />
                        </div>
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-3 bg-cyan text-background font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-cyan/90 transition-colors"
                        >
                            <Send className="w-4 h-4" />
                            Send Message
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
