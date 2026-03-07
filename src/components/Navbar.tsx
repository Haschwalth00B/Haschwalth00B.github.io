import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Menu } from 'lucide-react';
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
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-border' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <motion.a
                            href="#home"
                            onClick={e => { e.preventDefault(); scrollTo('#home'); }}
                            className="flex items-center gap-2 group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="w-10 h-10 border-2 border-cyan flex items-center justify-center group-hover:bg-cyan transition-colors duration-300">
                                <Terminal className="w-5 h-5 text-cyan group-hover:text-background transition-colors duration-300" />
                            </div>
                            <span className="font-bold text-xl tracking-tight hidden sm:block">
                                {siteData.name}<span className="text-cyan">.</span>
                            </span>
                        </motion.a>

                        {/* Desktop nav */}
                        <div className="hidden md:flex items-center gap-1">
                            {siteData.nav.map((item, i) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    onClick={e => { e.preventDefault(); scrollTo(item.href); }}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.08 }}
                                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${active === item.href.replace('#', '') ? 'text-cyan' : 'text-muted hover:text-foreground'
                                        }`}
                                >
                                    {item.label}
                                    {active === item.href.replace('#', '') && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute bottom-0 left-3 right-3 h-0.5 bg-cyan"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </motion.a>
                            ))}
                        </div>

                        {/* CTA + Mobile toggle */}
                        <div className="flex items-center gap-3">
                            <motion.a
                                href="#contact"
                                onClick={e => { e.preventDefault(); scrollTo('#contact'); }}
                                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-cyan text-background font-medium text-sm hover:bg-cyan/90 transition-all duration-300 group rounded-sm"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Let's Talk
                                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </motion.a>
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="md:hidden w-10 h-10 flex items-center justify-center border border-border hover:border-cyan transition-colors duration-300"
                            >
                                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        <div className="absolute inset-0 bg-background/95 backdrop-blur-lg" />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="absolute right-0 top-16 bottom-0 w-full max-w-sm bg-card border-l border-border p-8"
                        >
                            <div className="flex flex-col gap-2">
                                {siteData.nav.map((item, i) => (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        onClick={e => { e.preventDefault(); scrollTo(item.href); }}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.08 }}
                                        className={`text-2xl font-bold py-3 border-b border-border transition-colors duration-300 ${active === item.href.replace('#', '') ? 'text-cyan' : 'text-foreground hover:text-cyan'
                                            }`}
                                    >
                                        {item.label}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
