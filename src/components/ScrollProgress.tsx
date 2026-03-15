import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
            setScrollProgress(progress);
            setShowTopBtn(window.scrollY > 400);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* Scroll progress bar */}
            <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
                <motion.div
                    className="h-full bg-accent"
                    style={{ width: `${scrollProgress}%` }}
                    transition={{ duration: 0.1 }}
                />
            </div>

            {/* Back to top button */}
            <AnimatePresence>
                {showTopBtn && (
                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        onClick={scrollToTop}
                        className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-md bg-surface border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors shadow-lg"
                        title="Back to top"
                    >
                        <ArrowUp className="w-4 h-4" />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
}
