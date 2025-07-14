"use client";

import { motion } from "framer-motion";

const NaturePage02 = () => {
    const textLines = ["It is now our duty to restore", "balance and harmony"];
    return (
        <div className="relative w-full h-screen">
            <div className="h-screen flex justify-start items-center ">
                <div className="flex flex-col items-start max-w-xl w-full ml-10 mt-32">
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

            <div className="absolute inset-0 z-0 pointer-events-none -mt-[8rem]">
                <div className="absolute w-[1200px] h-[1200px] border border-white/10 rounded-full top-[10%] left-[15%]"></div>
                <div>
                    <div className="absolute w-[330px] h-[330px] border border-white/10 rounded-full top-[40%] left-[50.2%]"></div>

                    <div className="absolute w-[200px] h-[200px] border border-white/10 rounded-full top-[50%] left-[55%]"></div>

                    <div className="absolute w-[140px] h-[140px] border border-white/10 rounded-full top-[52%] left-[59%]"></div>

                    <div className="absolute w-[88px] h-[88px] border border-white/10 rounded-full top-[52%] left-[61%]"></div>

                    <div className="absolute w-[470px] h-[470px] border border-white/10 rounded-full top-[33%] left-[50%]"></div>

                    <div className="absolute w-[750px] h-[750px] border border-white/10 rounded-full top-[32%] left-[44.5%]"></div>
                </div>
            </div>
        </div>
    );
};

export default NaturePage02;
