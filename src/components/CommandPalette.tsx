import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../data/siteData';

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
        const onKey = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setOpen(prev => !prev);
                setQuery('');
            }
            if (e.key === 'Escape') setOpen(false);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    const handleSelect = (item: typeof items[0]) => {
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
                    className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]"
                    onClick={() => setOpen(false)}
                >
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        onClick={e => e.stopPropagation()}
                        className="relative w-full max-w-md bg-surface border border-border rounded-lg shadow-2xl overflow-hidden"
                    >
                        {/* Search input */}
                        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
                            <span className="text-muted text-sm">›</span>
                            <input
                                type="text"
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                placeholder="Type a command..."
                                autoFocus
                                className="flex-1 bg-transparent text-foreground text-sm placeholder-muted outline-none"
                            />
                            <kbd className="text-xs text-muted px-1.5 py-0.5 rounded border border-border bg-background font-mono">esc</kbd>
                        </div>

                        {/* Results */}
                        <div className="max-h-64 overflow-y-auto py-2">
                            {filtered.length === 0 ? (
                                <p className="text-muted text-sm text-center py-4">No results found.</p>
                            ) : (
                                filtered.map(item => (
                                    <button
                                        key={item.label}
                                        onClick={() => handleSelect(item)}
                                        className="w-full text-left px-4 py-2.5 text-sm hover:bg-accent/10 transition-colors flex items-center justify-between group"
                                    >
                                        <span className="text-foreground group-hover:text-accent transition-colors">{item.label}</span>
                                        <span className="text-xs text-muted capitalize">{item.type}</span>
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
