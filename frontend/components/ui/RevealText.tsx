"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;        // base delay before first word
  stagger?: number;      // delay between each word
  duration?: number;     // per-word animation duration
}

/**
 * RevealText — splits text into words and reveals each word
 * by sliding it up from an overflow:hidden clip, just like Noomo Agency.
 */
export default function RevealText({
  text,
  as: Tag = "p",
  className = "",
  delay = 0,
  stagger = 0.06,
  duration = 0.75,
}: RevealTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -60px 0px",
  });

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={`overflow-hidden ${className}`}>
      <span className="inline-flex flex-wrap gap-x-[0.3em]">
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden leading-tight"
          >
            <motion.span
              className="inline-block"
              initial={{ y: "110%", opacity: 0 }}
              animate={
                isInView
                  ? { y: "0%", opacity: 1 }
                  : { y: "110%", opacity: 0 }
              }
              transition={{
                duration,
                delay: delay + i * stagger,
                ease: [0.16, 1, 0.3, 1], // expo ease out — matches Noomo
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}
