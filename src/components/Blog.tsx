import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight, X, BookOpen } from 'lucide-react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SectionHeader from './SectionHeader';

import haClusterRaw from '../../content/blog/ha-cluster-blog-post.md?raw';

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    content: string;
}

function parseFrontmatter(raw: string): BlogPost {
    const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) return { slug: '', title: 'Untitled', date: '', content: raw };
    const meta: Record<string, string> = {};
    match[1].split('\n').forEach(line => {
        const [k, ...v] = line.split(':');
        if (k && v.length) meta[k.trim()] = v.join(':').trim().replace(/^['"]|['"]$/g, '');
    });
    return {
        slug: meta.title?.toLowerCase().replace(/\s+/g, '-') || '',
        title: meta.title || 'Untitled',
        date: meta.date || '',
        content: match[2],
    };
}

const posts: BlogPost[] = [parseFrontmatter(haClusterRaw)];

export default function Blog() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const [selected, setSelected] = useState<BlogPost | null>(null);

    return (
        <section id="blog" ref={ref} className="py-10">
            <div className="max-w-2xl mx-auto px-6">
                <SectionHeader title="Blog" />

                {posts.length === 0 ? (
                    <div className="mt-6 text-center py-10">
                        <BookOpen className="w-8 h-8 text-muted mx-auto mb-3" />
                        <p className="text-muted text-sm">Posts coming soon.</p>
                    </div>
                ) : (
                    <div className="mt-6 space-y-0">
                        {posts.map((post, i) => (
                            <motion.button
                                key={post.slug}
                                initial={{ opacity: 0, y: 10 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: i * 0.08, duration: 0.4 }}
                                onClick={() => setSelected(post)}
                                className="w-full text-left py-4 border-b border-border hover:bg-surface/50 transition-colors group"
                            >
                                <div className="flex items-center gap-2 text-xs text-muted mb-1 font-mono">
                                    <Calendar className="w-3 h-3" />
                                    {post.date}
                                </div>
                                <h3 className="font-semibold text-accent group-hover:underline underline-offset-2 mb-1">
                                    {post.title}
                                </h3>
                                <p className="text-muted text-sm line-clamp-2">
                                    {post.content.replace(/^#.*\n*/gm, '').substring(0, 150)}...
                                </p>
                                <span className="text-accent text-xs flex items-center gap-1 mt-2 group-hover:gap-2 transition-all">
                                    Read more <ArrowRight className="w-3 h-3" />
                                </span>
                            </motion.button>
                        ))}
                    </div>
                )}
            </div>

            {/* Blog modal */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 overflow-y-auto"
                        onClick={() => setSelected(null)}
                    >
                        <div className="absolute inset-0 bg-background/95" />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            onClick={e => e.stopPropagation()}
                            className="relative bg-surface border border-border rounded-lg p-8 max-w-3xl w-full mb-20"
                        >
                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-4 right-4 text-muted hover:text-foreground transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="flex items-center gap-2 text-xs text-muted mb-4 font-mono">
                                <Calendar className="w-3 h-3" />
                                {selected.date}
                            </div>

                            <div className="prose max-w-none">
                                <Markdown remarkPlugins={[remarkGfm]}>{selected.content}</Markdown>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
