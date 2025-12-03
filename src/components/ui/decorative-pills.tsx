"use client";

import { motion } from "framer-motion";

/**
 * DecorativePills - CSS-based floating pill decorative element.
 * 
 * A lightweight alternative to 3D Three.js pills that provides visual interest
 * without the complexity and potential compatibility issues of WebGL.
 * 
 * Features floating, rotating pill shapes in OVAL brand colors with
 * smooth CSS animations for a premium feel.
 */

export function DecorativePills() {
  return (
    <div className="relative w-full h-full">
      {/* Main orange pill */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-16 h-8 rounded-full bg-gradient-to-r from-oval-orange to-orange-400 shadow-orange-glow"
        style={{
          transform: "translate(-50%, -50%) rotate(45deg)",
        }}
        animate={{
          y: [0, -8, 0],
          rotate: [45, 50, 45],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary charcoal pill */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-10 h-5 rounded-full bg-oval-charcoal/80 shadow-lg"
        style={{
          transform: "rotate(30deg)",
        }}
        animate={{
          y: [0, 6, 0],
          rotate: [30, 25, 30],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Small accent circle */}
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-4 h-4 rounded-full bg-oval-peach shadow-md"
        animate={{
          y: [0, -5, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Subtle glow effect behind main pill */}
      <div 
        className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-oval-orange/20 blur-xl"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}

