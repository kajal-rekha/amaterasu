"use client";

import { useEffect } from "react";
import gsap from "gsap";

/*============= useGsapCircleScroll ===============*/

export const useGsapCircleScroll = (itemsRef, delay = 0, trig) => {
    useEffect(() => {
        const init = async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger"))
                .ScrollTrigger;

            gsap.registerPlugin(ScrollTrigger);

            if (!itemsRef.current || !trig?.current) return;

            itemsRef.current.forEach((el, i) => {
                if (!el) return;

                gsap.fromTo(
                    el,
                    {
                        scale: 0.8,
                        opacity: 0.3,
                    },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 1.5,
                        delay: delay + i * 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: trig.current,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                        },
                    }
                );
            });
        };

        init();
    }, []);
};

/*============= useHorizontalLoop ===============*/
export const useHorizontalLoop = (refSelector, duration = 20) => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(refSelector, {
                xPercent: -50,
                repeat: -1,
                ease: "linear",
                duration,
            });
        });

        return () => ctx.revert();
    }, [refSelector, duration]);
};

/*============= useHumanCircleGsap ===============*/
export const useHumanCircleGsap = ({
    circleRef,
    setScrollLocked,
    setIsCircleFlat,
}) => {
    useEffect(() => {
        const initGsap = async () => {
            const gsap = (await import("gsap")).gsap;
            const ScrollTrigger = (await import("gsap/ScrollTrigger"))
                .ScrollTrigger;
            gsap.registerPlugin(ScrollTrigger);

            const el = circleRef.current;

            let hasFlattened = false;

            gsap.fromTo(
                el,
                {
                    width: "75vw",
                    height: "75vw",
                    borderRadius: "50%",
                    y: 0,
                },
                {
                    width: "200vw",
                    height: "200vw",
                    borderRadius: "0%",
                    y: -300,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: el,
                        start: "top top+=100",
                        end: "bottom top",
                        scrub: 1,
                        onEnter: () => {
                            setIsCircleFlat(true);
                        },
                        onUpdate: (self) => {
                            if (self.progress >= 0.5 && !hasFlattened) {
                                setScrollLocked(true);
                                setIsCircleFlat(true);
                                hasFlattened = true;
                            }
                        },
                    },
                }
            );
        };

        initGsap();
    }, [circleRef, setScrollLocked, setIsCircleFlat]);
};


