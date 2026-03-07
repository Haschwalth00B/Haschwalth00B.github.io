import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight, X } from 'lucide-react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SectionHeader from './SectionHeader';

// Blog posts are imported statically since Vite doesn't support dynamic fs reads at runtime.
// To add a new post: import it here and add to the posts array.
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
    const inView = useInView(ref, { once: true, margin: '-100px' });
    const [selected, setSelected] = useState<BlogPost | null>(null);

    return (
        <section id="blog" ref={ref} className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeader number="06" title="Blog" />
                <p className="text-muted mt-2 mb-12 max-w-2xl">
                    Documenting my technical adventures, tutorials, and learnings about infrastructure and self-hosting.
                </p>

                {posts.length === 0 ? (
                    <div className="glass rounded-xl p-10 text-center">
                        <BookOpen className="w-10 h-10 text-muted mx-auto mb-4" />
                        <p className="text-muted">Blog posts coming soon!</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post, i) => (
                            <motion.button
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                onClick={() => setSelected(post)}
                                className="glass rounded-xl p-6 text-left glass-hover transition-all duration-300 group cursor-pointer"
                            >
                                <div className="flex items-center gap-2 text-xs text-muted mb-3">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {post.date}
                                </div>
                                <h3 className="font-bold text-lg mb-3 group-hover:text-cyan transition-colors">{post.title}</h3>
                                <p className="text-muted text-sm line-clamp-3 mb-4">
                                    {post.content.replace(/^#.*\n*/gm, '').substring(0, 150)}...
                                </p>
                                <span className="text-cyan text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Read more <ArrowRight className="w-4 h-4" />
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
                        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 30, scale: 0.97 }}
                            onClick={e => e.stopPropagation()}
                            className="relative glass rounded-xl p-8 max-w-3xl w-full mb-20"
                        >
                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center hover:bg-surface text-muted hover:text-foreground transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="flex items-center gap-2 text-xs text-muted mb-4">
                                <Calendar className="w-3.5 h-3.5" />
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
