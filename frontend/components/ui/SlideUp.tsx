"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;       // stagger delay in seconds
  duration?: number;    // animation duration in seconds
  className?: string;   // pass-through className for the wrapper div
  distance?: number;    // how far (px) the element slides up from
}

/**
 * SlideUp — wraps any content and animates it sliding up when it enters the viewport.
 * Uses Framer Motion's useInView for scroll-triggered animation.
 */
export default function SlideUp({
  children,
  delay = 0,
  duration = 0.7,
  className = "",
  distance = 60,
}: SlideUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,       // animate only the first time it enters view
    margin: "0px 0px -80px 0px", // trigger slightly before fully visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: distance }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // smooth easeOutQuart curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
