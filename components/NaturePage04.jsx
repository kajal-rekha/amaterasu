"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useCircularPositions from "@/hooks/useCircularPositions";

const NaturePage04 = () => {
    const [showOuter, setShowOuter] = useState(false);
    const [showText, setShowText] = useState(false);
    const positions = useCircularPositions({ numCircles: 6, radius: 180 });

    useEffect(() => {
        const outerTimeout = setTimeout(() => setShowOuter(true), 1000);
        const textTimeout = setTimeout(() => setShowText(true), 2000);
        return () => {
            clearTimeout(outerTimeout);
            clearTimeout(textTimeout);
        };
    }, []);

    const textLines = [
        "Amaterasu moves beyond the linear ",
        "leveraging nonlinear dynamics to",
        "capture the fully connected conscious",
        "mind, towards holistic, dynamic, and ",
        "interconnected truths.",
    ];

    return (
        <div className=" pt-[10rem] text-white">
            <div className="flex flex-col md:flex-row justify-between items-center gap-20 px-10 md:px-20">
                <div className="flex flex-col items-start max-w-xl w-full">
                    {textLines.map((line, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: i * 0.3,
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="text-2xl md:text-[2rem] leading-tight"
                        >
                            {line}
                        </motion.p>
                    ))}

                    <p className="text-[0.8rem] mt-3 tracking-widest">
                        <span className="text-5xl text-[#75cdd6]">.</span>{" "}
                        RECONNECTING WITH NATURE
                    </p>
                </div>

                <div className="relative w-[400px] h-[400px] flex items-center justify-center">
                    <motion.div
                        className="absolute w-64 h-64 border border-white rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                    >
                        {showText && (
                            <motion.span
                                className="text-white text-xs tracking-widest"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                Human
                            </motion.span>
                        )}
                    </motion.div>

                    {showOuter &&
                        positions.map((pos) => (
                            <motion.div
                                key={pos.id}
                                className="absolute w-64 h-64 border border-white/20 rounded-full"
                                initial={{ x: 0, y: 0, opacity: 0 }}
                                animate={{ x: pos.x, y: pos.y, opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    delay: 0.2 + pos.id * 0.1,
                                }}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default NaturePage04;
