"use client";

import CustomCursor from "@/components/CustomCursor";
import Human from "@/components/Human";

import Vision from "@/components/Vision";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useRef } from "react";

const HomePage = () => {
    const innerCursorRef = useRef(null);
    const outerCursorRef = useRef(null);
    useSmoothScroll();
    useCustomCursor(innerCursorRef, outerCursorRef);

    return (
        <div className="">
            <CustomCursor
                innerCursorRef={innerCursorRef}
                outerCursorRef={outerCursorRef}
            />
            {/* <CircleAnimation /> */}
            <Vision />
            <div className="min-h-[200vh]">
                <Human />
            </div>
        </div>
    );
};

export default HomePage;
