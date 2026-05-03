// ============================================
// Gallery — Auto-discovers images from: src/assets/gallery/
// Supported formats: .jpg, .jpeg, .png, .webp, .gif
//
// To add images: drop files into src/assets/gallery/
// They will appear on the site automatically — no code changes needed.
// ============================================

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import SectionHeader from './SectionHeader';

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
        gtag('event', 'gallery_image_open', {
            event_category: 'engagement',
            image_name: images[index].name,
            image_index: index + 1,
            total_images: images.length,
        });
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

    if (images.length === 0) {
        return (
            <section id="gallery" ref={ref} className="py-10">
                <div className="container-main px-6">
                    <SectionHeader title="Gallery" />
                    <div className="mt-6 text-center py-10">
                        <ImageIcon className="w-8 h-8 text-muted mx-auto mb-3" />
                        <p className="text-muted text-sm">Photos coming soon.</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="gallery" ref={ref} className="py-10">
            <div className="container-main px-6">
                <SectionHeader title="Gallery" />

                {/* Masonry grid */}
                <div className="masonry mt-6">
                    {images.map((img, i) => (
                        <motion.div
                            key={img.src}
                            initial={{ opacity: 0, y: 10 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.06, duration: 0.4 }}
                            className="masonry-item"
                        >
                            <button
                                onClick={() => openLightbox(i)}
                                className="w-full rounded-lg overflow-hidden border border-border hover:border-muted transition-colors cursor-zoom-in block"
                            >
                                <img
                                    src={img.src}
                                    alt={img.name}
                                    className="w-full h-auto object-cover"
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
                        className="fixed inset-0 z-[100] flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />

                        {/* Close button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-md bg-surface border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-muted transition-colors"
                            title="Close (Esc)"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Previous button */}

                        {images.length > 1 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                                className="absolute left-4 z-10 w-10 h-10 rounded-md bg-surface border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-muted transition-colors"
                                title="Previous (←)"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                        )}

                        {/* Next button */}
                        {images.length > 1 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); goNext(); }}
                                className="absolute right-4 z-10 w-10 h-10 rounded-md bg-surface border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-muted transition-colors"
                                title="Next (→)"
                            >
                                <ChevronRight className="w-5 h-5" />
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
                            className="relative max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
                        />

                        {/* Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-muted font-mono">
                            {lightboxIndex + 1} / {images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

