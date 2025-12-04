"use client";

import { motion } from "framer-motion";

/**
 * AmbientBackground - Creates atmospheric depth with slowly drifting gradient orbs.
 * 
 * Adds visual sophistication to sections with organic, floating gradient elements.
 * These orbs drift slowly and subtly, creating a living, premium feel without
 * being distracting.
 * 
 * Features:
 * - Multiple gradient orbs with different colors and sizes
 * - Very slow, organic movement patterns
 * - Positioned absolutely to layer behind content
 * - GPU-accelerated transforms for smooth 60fps
 * 
 * @param variant - Color theme: 'peach' (warm) or 'cool' (blue/purple tones)
 * @param intensity - Opacity level: 'subtle' (default), 'medium', or 'bold'
 * @param className - Additional CSS classes
 */

interface AmbientBackgroundProps {
  variant?: "peach" | "cool" | "mixed";
  intensity?: "subtle" | "medium" | "bold";
  className?: string;
}

export function AmbientBackground({
  variant = "peach",
  intensity = "subtle",
  className = "",
}: AmbientBackgroundProps) {
  /**
   * Maps intensity to opacity values for the gradient orbs.
   */
  const getOpacity = () => {
    switch (intensity) {
      case "subtle":
        return { base: 0.08, secondary: 0.05 };
      case "medium":
        return { base: 0.15, secondary: 0.10 };
      case "bold":
        return { base: 0.25, secondary: 0.15 };
      default:
        return { base: 0.08, secondary: 0.05 };
    }
  };

  /**
   * Returns gradient colors based on selected variant.
   */
  const getColors = () => {
    switch (variant) {
      case "peach":
        return {
          primary: "from-orange-400 to-orange-300",
          secondary: "from-amber-300 to-yellow-200",
          accent: "from-rose-300 to-pink-200",
        };
      case "cool":
        return {
          primary: "from-blue-400 to-cyan-300",
          secondary: "from-violet-300 to-purple-200",
          accent: "from-teal-300 to-emerald-200",
        };
      case "mixed":
        return {
          primary: "from-orange-400 to-rose-300",
          secondary: "from-violet-300 to-blue-200",
          accent: "from-amber-300 to-orange-200",
        };
      default:
        return {
          primary: "from-orange-400 to-orange-300",
          secondary: "from-amber-300 to-yellow-200",
          accent: "from-rose-300 to-pink-200",
        };
    }
  };

  const opacity = getOpacity();
  const colors = getColors();

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Primary large orb - slow drift top-right */}
      <motion.div
        className={`absolute w-[500px] h-[500px] rounded-full bg-gradient-radial ${colors.primary} blur-3xl`}
        style={{ opacity: opacity.base }}
        initial={{ x: "60%", y: "-20%" }}
        animate={{
          x: ["60%", "65%", "55%", "60%"],
          y: ["-20%", "-15%", "-25%", "-20%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary medium orb - slow drift bottom-left */}
      <motion.div
        className={`absolute w-[400px] h-[400px] rounded-full bg-gradient-radial ${colors.secondary} blur-3xl`}
        style={{ opacity: opacity.secondary }}
        initial={{ x: "-30%", y: "70%" }}
        animate={{
          x: ["-30%", "-25%", "-35%", "-30%"],
          y: ["70%", "75%", "65%", "70%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Accent small orb - drifts center-right */}
      <motion.div
        className={`absolute w-[300px] h-[300px] rounded-full bg-gradient-radial ${colors.accent} blur-3xl`}
        style={{ opacity: opacity.secondary }}
        initial={{ x: "80%", y: "50%" }}
        animate={{
          x: ["80%", "85%", "75%", "80%"],
          y: ["50%", "45%", "55%", "50%"],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

/**
 * GrainOverlay - Standalone grain texture component.
 * 
 * Adds a subtle noise texture overlay to any section for a premium,
 * organic feel. Can be used independently of AmbientBackground.
 */
interface GrainOverlayProps {
  opacity?: number;
  className?: string;
}

export function GrainOverlay({
  opacity = 0.03,
  className = "",
}: GrainOverlayProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none z-10 ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        opacity,
        mixBlendMode: "overlay",
      }}
      aria-hidden="true"
    />
  );
}

/**
 * FloatingParticles - Small floating particle accents.
 * 
 * Creates very subtle, small floating dots that add dimension
 * without being distracting. Think subtle dust motes in light.
 */
interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

export function FloatingParticles({
  count = 6,
  className = "",
}: FloatingParticlesProps) {
  /**
   * Generate random positions and animation delays for particles.
   * Uses deterministic pseudo-random for SSR consistency.
   */
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${15 + (i * 17) % 70}%`,
    top: `${10 + (i * 23) % 80}%`,
    size: 3 + (i % 3),
    delay: i * 0.8,
    duration: 8 + (i % 4) * 2,
  }));

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-oval-orange/20"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

