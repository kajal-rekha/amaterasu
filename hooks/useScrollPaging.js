import { useEffect } from "react";

export const useScrollPaging = ({
    containerRef,
    setActiveIndex,
    totalPages,
    scrollLocked,
}) => {
    useEffect(() => {
        if (!containerRef.current) return;

        let ticking = false;

        const handleScroll = (e) => {
            if (!scrollLocked) return;

            e.preventDefault();

            const delta = e.deltaY;

            if (!ticking) {
                ticking = true;

                requestAnimationFrame(() => {
                    setActiveIndex((prev) => {
                        if (delta > 0 && prev < totalPages - 1) {
                            return prev + 1;
                        } else if (delta < 0 && prev > 0) {
                            return prev - 1;
                        }
                        return prev;
                    });

                    ticking = false;
                });
            }
        };

        const container = containerRef.current;

        container.addEventListener("wheel", handleScroll, { passive: false });

        return () => {
            container.removeEventListener("wheel", handleScroll);
        };
    }, [containerRef, setActiveIndex, totalPages, scrollLocked]);
};
