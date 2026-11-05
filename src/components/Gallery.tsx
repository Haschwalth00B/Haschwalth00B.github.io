// ============================================
// Gallery — Auto-discovers images from: src/assets/gallery/
// Supported formats: .jpg, .jpeg, .png, .webp, .gif
//
// To add images: drop files into src/assets/gallery/
// They will appear on the site automatically — no code changes needed.
// ============================================

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const imageModules = import.meta.glob<string>(
    '/src/assets/gallery/*.{jpg,jpeg,png,webp,gif}',
    { eager: true, import: 'default' }
);

interface GalleryImage {
    src: string;
    name: string;
}

const images: GalleryImage[] = Object.entries(imageModules).map(([path, url]) => ({
    src: url,
    name: path.split('/').pop()?.replace(/\.[^.]+$/, '')?.replace(/[-_]/g, ' ') || '',
}));

export default function Gallery() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        if (typeof gtag === 'function') {
            gtag('event', 'gallery_image_open', {
                event_category: 'engagement',
                image_name: images[index].name,
                image_index: index + 1,
                total_images: images.length,
            });
        }
    };

    const closeLightbox = () => setLightboxIndex(null);

    const goNext = useCallback(() => {
        if (lightboxIndex === null) return;
        setLightboxIndex((lightboxIndex + 1) % images.length);
    }, [lightboxIndex]);

    const goPrev = useCallback(() => {
        if (lightboxIndex === null) return;
        setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    }, [lightboxIndex]);

    // Keyboard navigation + body scroll lock
    useEffect(() => {
        if (lightboxIndex === null) return;

        document.body.style.overflow = 'hidden';

        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
        };
        window.addEventListener('keydown', onKey);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [lightboxIndex, goNext, goPrev]);

    // If no images, render nothing
    if (images.length === 0) {
        return null;
    }

    return (
        <section id="gallery" ref={ref} className="section">
            <div>
                <h2 className="head gallery__head">Gallery</h2>
                {/* Masonry grid */}
                <div className="masonry">
                    {images.map((img, i) => (
                        <motion.div
                            key={img.src}
                            initial={{ opacity: 0, y: 10 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.06, duration: 0.4 }}
                            className="masonry-item well well--picture"
                        >
                            <button
                                onClick={() => openLightbox(i)}
                                style={{ width: '100%', display: 'block', background: 'none', border: 'none', padding: 0, cursor: 'zoom-in' }}
                            >
                                <img
                                    src={img.src}
                                    alt={img.name}
                                    loading="lazy"
                                />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="lightbox"
                        onClick={closeLightbox}
                    >
                        <div className="lightbox__backdrop" />

                        {/* Close button */}
                        <button
                            onClick={closeLightbox}
                            className="lightbox__btn lightbox__btn--close"
                            title="Close (Esc)"
                        >
                            <X size={16} />
                        </button>

                        {/* Previous button */}
                        {images.length > 1 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                                className="lightbox__btn lightbox__btn--prev"
                                title="Previous (←)"
                            >
                                <ChevronLeft size={16} />
                            </button>
                        )}

                        {/* Next button */}
                        {images.length > 1 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); goNext(); }}
                                className="lightbox__btn lightbox__btn--next"
                                title="Next (→)"
                            >
                                <ChevronRight size={16} />
                            </button>
                        )}

                        {/* Image */}
                        <motion.img
                            key={lightboxIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            src={images[lightboxIndex].src}
                            alt={images[lightboxIndex].name}
                            onClick={(e) => e.stopPropagation()}
                            className="lightbox__image"
                        />

                        {/* Counter */}
                        <div className="lightbox__counter">
                            {lightboxIndex + 1} / {images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
