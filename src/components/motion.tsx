import { useRef, useState, type ReactNode } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

// Anything above the viewport counts as seen, so an anchor jump or a fast scroll
// can never leave a section waiting to appear when the visitor scrolls back up.
export const REVEAL_MARGIN = '100000px 0px -6% 0px';

/** A part of a section arriving in reading order: pass a delay per part. */
export function Rise({
    children,
    delay = 0,
    y = 24,
    className,
}: {
    children: ReactNode;
    delay?: number;
    y?: number;
    className?: string;
}) {
    // On a phone the page is long and scrolled fast: parts rise, but are never hidden first.
    const [startOpacity] = useState(() => (window.matchMedia('(max-width: 720px)').matches ? 1 : 0));
    // Reduced motion keeps the fade and drops the travel.
    const travel = useReducedMotion() ? 0 : y;
    return (
        <motion.div
            className={className}
            // A full transform string runs on the compositor; the `y` shorthand runs on the main thread.
            initial={{ opacity: startOpacity, transform: `translateY(${travel}px)` }}
            whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
            viewport={{ once: true, margin: REVEAL_MARGIN }}
            transition={{ duration: 0.7, delay, ease: EASE }}
        >
            {children}
        </motion.div>
    );
}

/**
 * A surface that swells out of the ground as it enters: the moulding is on
 * pseudo-elements, so only their opacity animates. See .surface in index.css.
 */
export function Surface({
    children,
    className = '',
    as: Tag = 'div',
}: {
    children: ReactNode;
    className?: string;
    as?: 'div' | 'article';
}) {
    const ref = useRef<HTMLDivElement>(null);
    const seen = useInView(ref, { once: true, margin: REVEAL_MARGIN });
    return (
        <Tag ref={ref} className={`${className} ${seen ? 'is-seen' : ''}`}>
            {children}
        </Tag>
    );
}

/** A picture set into a well. The drift is a CSS scroll-driven animation, so it costs no JavaScript. */
export function WellImage({
    src,
    alt,
    className = '',
    width,
    height,
}: {
    src: string;
    alt: string;
    className?: string;
    width: number;
    height: number;
}) {
    return (
        <div className={`well well--picture ${className}`}>
            <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
        </div>
    );
}
