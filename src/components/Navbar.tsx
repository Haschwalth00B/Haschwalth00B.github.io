import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [active, setActive] = useState('');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
            const ids = siteData.nav.map(n => n.href.replace('#', ''));
            let current = '';
            for (const id of [...ids].reverse()) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= 160) {
                    current = id;
                    break;
                }
            }
            setActive(current);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (href: string) => {
        setMobileOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    return (
        <>
            <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`} aria-label="Main">
                <a
                    href="#"
                    onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="nav__logo"
                >
                    {siteData.name}
                </a>

                {/* The links sit in a recessed groove; the current one is a key standing in it. */}
                <div className="nav__groove">
                    {siteData.nav.map(item => {
                        const isActive = active === item.href.replace('#', '');
                        return (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={e => { e.preventDefault(); scrollTo(item.href); }}
                                className="nav__link"
                                aria-current={isActive ? 'true' : undefined}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="nav-key"
                                        className="nav__key"
                                        transition={{ duration: 0.25, ease: [0.77, 0, 0.175, 1] }}
                                    />
                                )}
                                <span className="nav__label">{item.label}</span>
                            </a>
                        );
                    })}
                </div>

                <div className="nav__end">
                    <a
                        href="#contact"
                        onClick={e => { e.preventDefault(); scrollTo('#contact'); }}
                        className="key key--solid key--small nav__action"
                    >
                        Contact
                    </a>
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="key key--round nav__toggle"
                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mobile-menu"
                    >
                        {[...siteData.nav, { label: 'Contact', href: '#contact' }].map((item, i) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.04, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                onClick={e => { e.preventDefault(); scrollTo(item.href); }}
                                className="key mobile-menu__link"
                            >
                                {item.label}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
