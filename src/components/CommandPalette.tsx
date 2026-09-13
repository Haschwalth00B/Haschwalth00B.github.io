import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../data/siteData';
import { onCommandPaletteToggle } from '../lib/commandPaletteEvents';

export default function CommandPalette() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');

    const items = [
        ...siteData.nav.map(n => ({ label: n.label, action: () => { document.querySelector(n.href)?.scrollIntoView({ behavior: 'smooth' }); }, type: 'navigate' as const })),
        ...siteData.socials.map(s => ({ label: s.name, action: () => { window.open(s.url, '_blank'); }, type: 'link' as const })),
        ...(siteData.hero.hasResume ? [{ label: 'Download Resume', action: () => { window.open(siteData.hero.resumeUrl, '_blank'); }, type: 'action' as const }] : []),
    ];

    const filtered = query
        ? items.filter(i => i.label.toLowerCase().includes(query.toLowerCase()))
        : items;

    useEffect(() => {
        // Keyboard shortcut: Ctrl+K / Cmd+K
        const onKey = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                const willOpen = !open;
                setOpen(willOpen);
                setQuery('');
                if (willOpen && typeof gtag === 'function') {
                    gtag('event', 'command_palette_open', {
                        event_category: 'engagement',
                        trigger: 'keyboard',
                    });
                }
            }
            if (e.key === 'Escape') setOpen(false);
        };
        window.addEventListener('keydown', onKey);

        // Shared event from Navbar button
        const unsubscribe = onCommandPaletteToggle(() => {
            setOpen(prev => {
                const willOpen = !prev;
                if (willOpen && typeof gtag === 'function') {
                    gtag('event', 'command_palette_open', {
                        event_category: 'engagement',
                        trigger: 'button',
                    });
                }
                return willOpen;
            });
            setQuery('');
        });

        return () => {
            window.removeEventListener('keydown', onKey);
            unsubscribe();
        };
    }, [open]);

    const handleSelect = (item: typeof items[0]) => {
        if (typeof gtag === 'function') {
            gtag('event', 'command_palette_select', {
                event_category: 'engagement',
                item_label: item.label,
                item_type: item.type,
            });
        }
        setOpen(false);
        setQuery('');
        item.action();
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="cmd-overlay"
                    onClick={() => setOpen(false)}
                >
                    <div className="cmd-backdrop" />
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        onClick={e => e.stopPropagation()}
                        className="cmd-panel"
                    >
                        {/* Search input */}
                        <div className="cmd-input-row">
                            <span className="cmd-input-row__prompt">›</span>
                            <input
                                type="text"
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                placeholder="Type a command..."
                                autoFocus
                                className="cmd-input"
                            />
                            <kbd className="cmd-kbd">esc</kbd>
                        </div>

                        {/* Results */}
                        <div className="cmd-results">
                            {filtered.length === 0 ? (
                                <p className="cmd-empty">No results found.</p>
                            ) : (
                                filtered.map(item => (
                                    <button
                                        key={item.label}
                                        onClick={() => handleSelect(item)}
                                        className="cmd-item"
                                    >
                                        <span className="cmd-item__label">{item.label}</span>
                                        <span className="cmd-item__type">{item.type}</span>
                                    </button>
                                ))
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
