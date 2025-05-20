import { motion, useAnimation, DOMMotionComponents } from "framer-motion";
import React from "react";

type ValidMotionTags = keyof DOMMotionComponents;

interface SplitTextLinesProps {
    lines: string[];
    tag?: ValidMotionTags;
    className?: string;
    animationControls?: ReturnType<typeof useAnimation>;
    fadeIndex?: number;
}

export const SplitTextLines = ({
                                   lines,
                                   tag = "p",
                                   className = "",
                                   animationControls,
                               }: SplitTextLinesProps) => {
    const controls = useAnimation() || animationControls;
    const MotionTag = motion[tag] as React.ElementType;

    return (
        <div className={`${className} split-text-wrapper`}>
            {lines.map((line, i) => (
                <MotionTag
                    key={i}
                    custom={i}
                    initial={{ y: 20, opacity: 0 }}
                    animate={controls}
                    className="block overflow-hidden"
                >
          <span className="inline-block">
            {line}
          </span>
                </MotionTag>
            ))}
        </div>
    );
};
