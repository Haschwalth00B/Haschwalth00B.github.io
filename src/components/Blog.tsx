import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SectionHeader from './SectionHeader';
import { siteData } from '../data/siteData';

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

export default function Blog() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const [selected, setSelected] = useState<NotePost | null>(null);

    useEffect(() => {
        if (selected) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [selected]);

    const handleOpen = (note: NotePost) => {
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
        <section id="notes" ref={ref} className="section">
            <div className="layout-main">
                <SectionHeader title="Notes" number={siteData.sections.notes.number} />

                <div className="notes-archive">
                    {notesList.map((note, i) => (
                        <motion.article
                            key={note.slug}
                            initial={{ opacity: 0, y: 10 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.08, duration: 0.4 }}
                            onClick={() => handleOpen(note)}
                            className="notes-item"
                        >
                            <div className="notes-item__header">
                                <span className="notes-item__date">{note.date}</span>
                                <div className="notes-item__rule" />
                                <span className="notes-item__tag">ENGINEERING NOTE</span>
                            </div>

                            <div className="notes-item__body">
                                <h3 className="notes-item__title">{note.title}</h3>
                                <p className="notes-item__excerpt">{note.excerpt}</p>

                                <div className="notes-item__action">
                                    <span>Read Note</span>
                                    <ArrowUpRight size={13} />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* Note Reader Modal */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="blog-modal"
                        onClick={() => setSelected(null)}
                    >
                        <div className="blog-modal__backdrop" />
                        <div className="blog-modal__container">
                            <div className="blog-modal__close-row">
                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelected(null); }}
                                    className="blog-modal__close"
                                    title="Close note"
                                >
                                    <X size={16} />
                                </button>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                onClick={e => e.stopPropagation()}
                                className="blog-modal__content"
                            >
                                <header className="note-reader__header">
                                    <div className="note-reader__meta">
                                        <span className="meta">{selected.date}</span>
                                        <span className="meta"> · ENGINEERING NOTE</span>
                                    </div>
                                    <h1 className="note-reader__title">{selected.title}</h1>
                                </header>

                                <div className="prose">
                                    <Markdown remarkPlugins={[remarkGfm]}>{selected.content}</Markdown>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
