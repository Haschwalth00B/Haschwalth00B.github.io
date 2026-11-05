import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SectionHeader from './SectionHeader';
import { Surface, WellImage } from './motion';

import haClusterRaw from '../../content/blog/ha-cluster-blog-post.md?raw';

interface NotePost {
    slug: string;
    title: string;
    date: string;
    content: string;
    excerpt: string;
}

// Clean frontmatter parser supporting CRLF and stripping YAML frontmatter completely
function parseFrontmatter(raw: string): NotePost {
    const normalized = raw.replace(/\r\n/g, '\n');
    const match = normalized.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

    if (!match) {
        return {
            slug: 'note',
            title: 'Untitled Note',
            date: '',
            content: normalized,
            excerpt: normalized.slice(0, 150),
        };
    }

    const meta: Record<string, string> = {};
    match[1].split('\n').forEach(line => {
        const colonIdx = line.indexOf(':');
        if (colonIdx !== -1) {
            const key = line.slice(0, colonIdx).trim();
            const val = line.slice(colonIdx + 1).trim().replace(/^['"]|['"]$/g, '');
            if (key) meta[key] = val;
        }
    });

    let body = match[2].trim();

    // Strip duplicate H1 heading matching title if present
    if (meta.title) {
        const titleRegex = new RegExp(`^#\\s+${meta.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\n+`, 'i');
        body = body.replace(titleRegex, '');
    }

    // Extract first non-heading paragraph for excerpt
    const paragraphs = body
        .split('\n\n')
        .map(p => p.trim())
        .filter(p => p.length > 0 && !p.startsWith('#') && !p.startsWith('!['))
    const firstPara = paragraphs[0] || '';
    const excerpt = firstPara.length > 180 ? firstPara.slice(0, 180).trim() + '…' : firstPara;

    return {
        slug: meta.title?.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') || 'note',
        title: meta.title || 'Untitled Note',
        date: meta.date || '',
        content: body,
        excerpt,
    };
}

const notesList: NotePost[] = [parseFrontmatter(haClusterRaw)];

function formatDate(iso: string) {
    const date = new Date(`${iso}T00:00:00`);
    if (Number.isNaN(date.getTime())) return iso;
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function Blog() {
    const [selected, setSelected] = useState<NotePost | null>(null);
    const opener = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!selected) return;
        document.body.style.overflow = 'hidden';
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelected(null);
        };
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
            opener.current?.focus();
        };
    }, [selected]);

    const handleOpen = (note: NotePost) => {
        opener.current = document.activeElement as HTMLElement;
        setSelected(note);
        if (typeof gtag === 'function') {
            gtag('event', 'blog_post_read', {
                event_category: 'engagement',
                blog_title: note.title,
                blog_slug: note.slug,
            });
        }
    };

    return (
        <section id="notes" className="section notes">
            <SectionHeader title="Notes" />

            {notesList.map(note => (
                <Surface key={note.slug} as="article" className="surface surface--lg note">
                    <div className="note__text">
                        <h3 className="head">{note.title}</h3>
                        <p className="small-line">{formatDate(note.date)}</p>
                        <p>{note.excerpt}</p>
                        <button onClick={() => handleOpen(note)} className="key key--solid">
                            Read the note
                            <ArrowUpRight size={18} aria-hidden="true" />
                        </button>
                    </div>
                    <WellImage
                        src="/images/plates/cluster-room.jpg"
                        alt="The cluster on a long desk in a college classroom, with laptops beside it and a chalkboard behind."
                        width={1600}
                        height={1080}
                        className="note__picture"
                    />
                </Surface>
            ))}

            {/* Note reader */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.2 } }}
                        exit={{ opacity: 0, transition: { duration: 0.15 } }}
                        className="reader"
                        role="dialog"
                        aria-modal="true"
                        aria-label={selected.title}
                        onClick={() => setSelected(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, transform: 'translateY(16px)' }}
                            animate={{ opacity: 1, transform: 'translateY(0px)', transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] } }}
                            exit={{ opacity: 0, transform: 'translateY(8px)', transition: { duration: 0.15, ease: [0.16, 1, 0.3, 1] } }}
                            onClick={e => e.stopPropagation()}
                            className="reader__sheet"
                        >
                            <button
                                onClick={() => setSelected(null)}
                                className="key key--round reader__close"
                                aria-label="Close note"
                                autoFocus
                            >
                                <X size={20} aria-hidden="true" />
                            </button>
                            <header className="reader__head">
                                <h2 className="head">{selected.title}</h2>
                                <p className="small-line">{formatDate(selected.date)}</p>
                            </header>
                            <div className="prose">
                                <Markdown remarkPlugins={[remarkGfm]}>{selected.content}</Markdown>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
