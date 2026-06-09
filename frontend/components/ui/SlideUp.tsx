"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
}

/**
 * SlideUp — Noomo-style section reveal.
 * Combines translateY + opacity with an expo ease-out curve for a premium feel.
 */
export default function SlideUp({
  children,
  delay = 0,
  duration = 0.9,
  className = "",
  distance = 80,
}: SlideUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: distance }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // expo ease out — matches Noomo
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
