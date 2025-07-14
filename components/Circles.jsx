import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useCircularPositions from "@/hooks/useCircularPositions";

const CircleAnimation = () => {
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

    return (
        <div className="relative w-full  flex items-center justify-center h-[100vh] bg-gradient-to-br from-[#0a0a2a] via-[#0d1b3c] to-[#3c7fa6] overflow-hidden">
            
            {/*============ Main Center Circle  ===============*/}

            <motion.div
                className="absolute w-60 h-60 border border-white rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
            >
                {/*============== Text animate later ================*/}
                {showText && (
                    <motion.span
                        className="text-white text-xs tracking-widest"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        CLICK TO ENTER
                    </motion.span>
                )}
            </motion.div>

            {/*============== Outer Circles =================*/}
            {showOuter &&
                positions.map((pos) => (
                    <motion.div
                        key={pos.id}
                        className="absolute w-60 h-60 border border-white/20 rounded-full"
                        initial={{ x: 0, y: 0, opacity: 0 }}
                        animate={{ x: pos.x, y: pos.y, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 + pos.id * 0.1 }}
                    />
                ))}
        </div>
    );
};

export default CircleAnimation;
