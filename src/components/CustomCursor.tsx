import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isPointerFine, setIsPointerFine] = useState(false);
    const [hoverState, setHoverState] = useState<'normal' | 'link' | 'image'>('normal');

    useEffect(() => {
        // Check if device has fine pointer (mouse/trackpad)
        const mediaQuery = window.matchMedia('(pointer: fine)');
        setIsPointerFine(mediaQuery.matches);

        const handleMediaChange = (e: MediaQueryListEvent) => {
            setIsPointerFine(e.matches);
        };
        mediaQuery.addEventListener('change', handleMediaChange);

        if (!mediaQuery.matches) return;

        let mouseX = -100;
        let mouseY = -100;
        let targetX = -100;
        let targetY = -100;
        let animationFrameId: number;

        const onMouseMove = (e: MouseEvent) => {
            targetX = e.clientX;
            targetY = e.clientY;

            // Detect hover state on interactive targets
            const target = e.target as HTMLElement | null;
            if (target) {
                const interactive = target.closest('a, button, [role="button"], input, textarea, select, .notes-item, .other-projects__row, .topology-node-btn');
                const imageTarget = target.closest('img, .case-study__img-wrapper, .masonry-item');

                if (interactive) {
                    setHoverState('link');
                } else if (imageTarget) {
                    setHoverState('image');
                } else {
                    setHoverState('normal');
                }
            }
        };

        const render = () => {
            // Smooth lerp (linear interpolation) for subtle fluidity
            mouseX += (targetX - mouseX) * 0.25;
            mouseY += (targetY - mouseY) * 0.25;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            }

            animationFrameId = requestAnimationFrame(render);
        };

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        render();

        return () => {
            mediaQuery.removeEventListener('change', handleMediaChange);
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    if (!isPointerFine) return null;

    return (
        <div
            ref={cursorRef}
            className={`custom-cursor custom-cursor--${hoverState}`}
            aria-hidden="true"
        />
    );
}
