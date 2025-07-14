import { motion } from "framer-motion";
import CircleSlider from "./CircleSlider";

const NaturePage03 = () => {
    const textLines = [
        "Modern mental health care operates in ",
        "a linear way, isolating insights over long",
        "periods of time, with little consideration",
        "or ability to map a full view of the mind",
    ];

    return (
        <div className="pt-[10rem] relative w-full  text-white">
            <div className="">
                <CircleSlider />

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
        </div>
    );
};

export default NaturePage03;
