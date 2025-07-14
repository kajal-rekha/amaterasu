"use client";
import { useRef, useState } from "react";
import NaturePage01 from "./NaturePage01";
import NaturePage02 from "./NaturePage02";
import NaturePage03 from "./NaturePage03";
import NaturePage04 from "./NaturePage04";
import { useHumanCircleGsap } from "@/hooks/gsap";
import { useScrollPaging } from "@/hooks/useScrollPaging";

const pages = [
    <NaturePage01 key={1} />,
    <NaturePage02 key={2} />,
    <NaturePage03 key={3} />,
    <NaturePage04 key={4} />,
];

const Human = () => {
    const circleRef = useRef(null);
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [scrollLocked, setScrollLocked] = useState(false);
    const [isCircleFlat, setIsCircleFlat] = useState(false);

    useHumanCircleGsap({ circleRef, setScrollLocked, setIsCircleFlat });

    useScrollPaging({
        containerRef,
        setActiveIndex,
        totalPages: pages.length,
        scrollLocked,
    });

    return (
        <section className="relative z-10 min-h-[200vh] text-white w-full overflow-hidden">
            {/*============= section circle ===============*/}
            <div
                ref={circleRef}
                className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-br from-[#030c47] to-[#5291b6] z-0 w-[75vw] h-[75vw] rounded-full animated-gradient"
            />

            {/*============= render components ===============*/}
            <div
                ref={containerRef}
                className="w-full h-full flex items-center justify-center pt-[30rem]"
            >
                {isCircleFlat && (
                    <div className="w-full h-full flex items-center justify-center">
                        {pages[activeIndex]}
                    </div>
                )}
            </div>

            {/*============= Cursor Pagination ===============*/}
            {isCircleFlat && (
                <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex gap-3 hidden">
                    {pages.map((_, i) => (
                        <div
                            key={i}
                            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                                i === activeIndex
                                    ? "bg-white scale-125"
                                    : "bg-white/40"
                            }`}
                            onClick={() => setActiveIndex(i)}
                        ></div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Human;
