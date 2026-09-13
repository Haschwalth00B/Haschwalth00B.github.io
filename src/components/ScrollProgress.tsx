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

    // Track when user reaches the bottom of the page (≥90% scroll depth)
    useEffect(() => {
        if (scrollProgress >= 90) {
            gtag('event', 'page_scrolled_to_bottom', {
                event_category: 'engagement',
                scroll_depth: Math.round(scrollProgress),
            });
        }
    }, [scrollProgress >= 90]); // only fires once when threshold is crossed

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        gtag('event', 'back_to_top_click', { event_category: 'engagement' });
    };

    return (
        <>
            {/* Scroll progress bar — 1px accent line */}
            <div className="scroll-progress">
                <motion.div
                    className="scroll-progress__bar"
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
                        className="back-to-top"
                        title="Back to top"
                    >
                        <ArrowUp size={14} />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
}
