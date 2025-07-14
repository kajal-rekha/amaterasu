"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const circles = [
    "Initial Assessment",
    "Evaluation",
    "Assessment continued",
    "Diagnostic",
    "Re-do initial assessment",
    "Understand the patient",
];

const CircleSlider = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".slider-track", {
                xPercent: -50,
                repeat: -1,
                ease: "linear",
                duration: 20,
            });
        }, sliderRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative overflow-hidden w-full ">
            <div ref={sliderRef} className="w-full overflow-hidden">
                
                <div className="flex slider-track w-max gap-14">
                    {[...circles, ...circles].map((text, i) => (
                        <div
                            key={i}
                            className="min-w-[260px] h-[260px] flex-shrink-0 border border-white/30 rounded-full flex justify-center items-center relative text-white text-center text-[12px] font-medium uppercase"
                        >
                            {text}
                            {i !== [...circles, ...circles].length - 1 && (
                                <span className="absolute top-1/2 -right-10 -translate-y-1/2 text-white text-xl">
                                    &#10140;
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CircleSlider;
