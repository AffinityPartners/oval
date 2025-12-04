"use client";

import { motion } from "framer-motion";

/**
 * DecorativePills - CSS-based floating pill decorative element.
 * 
 * A lightweight alternative to 3D Three.js pills that provides visual interest
 * without the complexity and potential compatibility issues of WebGL.
 * 
 * Features floating, rotating pill shapes in OVAL brand colors with
 * smooth, organic CSS animations for a premium feel.
 * 
 * Enhanced with:
 * - Smoother bezier curves for natural motion
 * - Subtle blur and glow effects
 * - Multiple layered elements for depth
 * - GPU-accelerated transforms
 */

export function DecorativePills() {
  return (
    <div className="relative w-full h-full">
      {/* Ambient glow base layer */}
      <motion.div 
        className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-oval-orange/15 blur-2xl"
        style={{ transform: "translate(-50%, -50%)" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main orange pill - smooth organic float */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-16 h-8 rounded-full bg-gradient-to-r from-oval-orange via-orange-400 to-oval-orange shadow-orange-glow"
        style={{ transform: "translate(-50%, -50%)" }}
        animate={{
          y: [0, -12, 0, 8, 0],
          x: [0, 5, 0, -5, 0],
          rotate: [45, 52, 45, 38, 45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: [0.45, 0.05, 0.55, 0.95], // Smooth sine-like curve
        }}
      />

      {/* Secondary charcoal pill - counter-motion */}
      <motion.div
        className="absolute top-[30%] right-[20%] w-10 h-5 rounded-full bg-gradient-to-r from-oval-charcoal to-gray-600 shadow-lg"
        animate={{
          y: [0, 8, 0, -6, 0],
          x: [0, -4, 0, 4, 0],
          rotate: [30, 22, 30, 38, 30],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: [0.45, 0.05, 0.55, 0.95],
          delay: 0.5,
        }}
      />

      {/* Small peach accent - gentle bob */}
      <motion.div
        className="absolute bottom-[35%] left-[25%] w-5 h-5 rounded-full bg-gradient-to-br from-oval-peach to-orange-100 shadow-md"
        animate={{
          y: [0, -8, 0, 5, 0],
          scale: [1, 1.15, 1, 0.95, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: [0.45, 0.05, 0.55, 0.95],
          delay: 1,
        }}
      />

      {/* Tiny accent dot - subtle pulse */}
      <motion.div
        className="absolute top-[60%] right-[35%] w-3 h-3 rounded-full bg-oval-orange/60"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Secondary glow layer */}
      <motion.div 
        className="absolute top-[30%] right-[25%] w-20 h-20 rounded-full bg-oval-charcoal/10 blur-xl"
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}

