import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [active, setActive] = useState('home');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
            const ids = siteData.nav.map(n => n.href.replace('#', ''));
            for (const id of [...ids].reverse()) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= 150) {
                    setActive(id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (href: string) => {
        setMobileOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-2xl mx-auto px-6">
                    <div className="flex items-center justify-between h-14">
                        {/* Logo */}
                        <a
                            href="#home"
                            onClick={e => { e.preventDefault(); scrollTo('#home'); }}
                            className="font-bold text-lg tracking-tight hover:text-accent transition-colors"
                        >
                            {siteData.name}<span className="text-accent">.</span>
                        </a>

                        {/* Desktop nav */}
                        <div className="hidden md:flex items-center gap-6">
                            {siteData.nav.map(item => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={e => { e.preventDefault(); scrollTo(item.href); }}
                                    className={`text-sm transition-colors duration-200 ${active === item.href.replace('#', '') ? 'text-foreground' : 'text-muted hover:text-foreground'
                                        }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        {/* Mobile toggle */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden text-muted hover:text-foreground transition-colors"
                        >
                            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        <div className="absolute inset-0 bg-background/98" />
                        <div className="relative pt-20 px-6">
                            <div className="flex flex-col gap-1">
                                {siteData.nav.map(item => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        onClick={e => { e.preventDefault(); scrollTo(item.href); }}
                                        className={`text-lg py-3 border-b border-border transition-colors ${active === item.href.replace('#', '') ? 'text-accent' : 'text-foreground hover:text-accent'
                                            }`}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
