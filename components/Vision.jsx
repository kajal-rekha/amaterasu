import { motion } from "framer-motion";

const lines = [
    "We empower humanity with the tools,",
    "knowledge and wisdom to face mental ",
    "health  challenges from a position of ",
    "unprecedented resilience.",
];

const Vision = () => {
    return (
        <div className="wrapper">
            <div className="pt-10 mb-20">
                <div className="flex justify-center items-center">
                    <motion.h4
                        initial={{ opacity: 0, y: -60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-lg font-semibold text-[#1b2978] pt-10"
                    >
                        <span className="text-5xl text-[#75cdd6]">.</span>{" "}
                        Vision
                    </motion.h4>
                </div>

                <div className="flex justify-center w-full mt-10">
                    <div className=" w-[50vw] text-[#1b2978] text-center leading-tight ">
                        {lines.map((line, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.3,
                                    ease: "easeOut",
                                }}
                                className="text-2xl lg:text-4xl xl:text-[2.7rem]"
                            >
                                {line}
                            </motion.p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vision;
