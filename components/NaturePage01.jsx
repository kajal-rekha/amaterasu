"use client";

import { motion } from "framer-motion";

const NaturePage01 = () => {
    const textLines = [
        "Our minds are a deep reflection of",
        "nature, yet our internal world has",
        "driven too far from natural order.",
    ];
    return (
        <div className="relative w-full">
            <div className="h-screen flex justify-start items-center ">
                <div className="flex flex-col items-start max-w-xl w-full ml-10 mt-20">
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
            </div>

            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute w-[500px] h-[500px] border border-white/10 rounded-full top-[55%] left-[60%]"></div>

                <div className="absolute w-[1300px] h-[1300px] border border-white/10 rounded-full top-[2%] left-[45%]"></div>
                <div className="absolute w-[120px] h-[120px] border border-white/10 rounded-full top-[55%] left-[43%]"></div>

                <div className="absolute w-[1200px] h-[1200px] border border-white/10 rounded-full top-[-40%] left-[3%]"></div>

                <div className="absolute w-[170px] h-[170px] border border-white/10 rounded-full top-[52%] left-[85%]"></div>
                <div className="absolute w-[100px] h-[100px] border border-white/10 rounded-full top-[100%] left-[58%]"></div>

                <div className="absolute w-[700px] h-[700px] border border-white/10 rounded-full top-[55%] left-[-4%]"></div>
                <div className="absolute w-[300px] h-[300px] border border-white/10 rounded-full top-[100%] left-[35%]"></div>
            </div>

            <div className="absolute top-6 right-10 flex items-center gap-3 text-xs tracking-widest z-10">
                <div className="w-6 h-6 border border-white/30 rounded-full grid grid-cols-2 grid-rows-2 gap-0.5 p-1">
                    <div className="bg-white/30 rounded-full"></div>
                    <div className="bg-white/30 rounded-full"></div>
                    <div className="bg-white/30 rounded-full"></div>
                    <div className="bg-white/30 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default NaturePage01;
