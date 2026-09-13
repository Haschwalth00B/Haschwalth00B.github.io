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
            for (const id of [...ids].reverse()) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= 160) {
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

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    return (
        <>
            <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
                <div className="layout-main">
                    <div className="nav__inner">
                        <a
                            href="#"
                            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                            className="nav__logo"
                        >
                            {siteData.name}
                        </a>

                        {/* Tiny Desktop Navigation */}
                        <div className="nav__links">
                            {siteData.nav.map(item => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={e => { e.preventDefault(); scrollTo(item.href); }}
                                    className={`nav__link ${active === item.href.replace('#', '') ? 'nav__link--active' : ''}`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        {/* Mobile toggle */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="nav__mobile-toggle"
                            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                        >
                            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
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
                        transition={{ duration: 0.2 }}
                        className="mobile-menu"
                    >
                        {siteData.nav.map((item, i) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={e => { e.preventDefault(); scrollTo(item.href); }}
                                className="mobile-menu__link"
                            >
                                <span className="mobile-menu__number">{String(i + 1).padStart(2, '0')}</span>
                                <span className="mobile-menu__label">{item.label}</span>
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
