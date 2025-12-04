"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion, useSpring, useTransform, MotionValue } from "framer-motion";

/**
 * MagneticButton - Button wrapper with magnetic hover effect.
 * 
 * Creates a premium interaction where the button subtly follows the cursor
 * when hovering nearby, creating a "magnetic" pull effect. Also includes
 * an optional shimmer/shine effect on hover.
 * 
 * Features:
 * - Smooth spring physics for natural movement
 * - Configurable magnetic strength
 * - Optional shimmer effect
 * - Respects reduced motion preferences
 * - Works with any child content (buttons, links, etc.)
 * 
 * @param children - Button content
 * @param strength - Magnetic pull strength (default: 0.3, range 0-1)
 * @param shimmer - Enable shimmer effect on hover (default: true)
 * @param className - Additional CSS classes
 */

interface MagneticButtonProps {
  children: ReactNode;
  strength?: number;
  shimmer?: boolean;
  className?: string;
}

export function MagneticButton({
  children,
  strength = 0.3,
  shimmer = true,
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  /**
   * Spring configuration for smooth, natural magnetic movement.
   * Lower stiffness and moderate damping create a floaty, premium feel.
   */
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  /**
   * Calculate the offset based on cursor position relative to button center.
   * The strength multiplier controls how far the button moves.
   */
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate distance from center, scaled by strength
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    x.set(deltaX);
    y.set(deltaY);
  };

  /**
   * Reset position when mouse leaves the button area.
   */
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative inline-block ${className}`}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      
      {/* Shimmer overlay - animated gradient that sweeps across on hover */}
      {shimmer && isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 -translate-x-full"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
            }}
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}

/**
 * MagneticLink - Specialized magnetic wrapper for text links.
 * Uses lighter magnetic effect suitable for inline text.
 */
interface MagneticLinkProps {
  children: ReactNode;
  className?: string;
}

export function MagneticLink({ children, className = "" }: MagneticLinkProps) {
  return (
    <MagneticButton strength={0.15} shimmer={false} className={className}>
      {children}
    </MagneticButton>
  );
}

/**
 * ShimmerButton - Button with just the shimmer effect, no magnetic pull.
 * For cases where you want the polish without the movement.
 */
interface ShimmerButtonProps {
  children: ReactNode;
  className?: string;
}

export function ShimmerButton({ children, className = "" }: ShimmerButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      
      {/* Shimmer effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)",
            }}
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </div>
  );
}

/**
 * GlowButton - Button with a subtle glow effect on hover.
 * Creates a soft halo around the button for premium feel.
 */
interface GlowButtonProps {
  children: ReactNode;
  glowColor?: string;
  className?: string;
}

export function GlowButton({
  children,
  glowColor = "rgba(231, 112, 39, 0.4)",
  className = "",
}: GlowButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        filter: isHovered
          ? `drop-shadow(0 0 20px ${glowColor})`
          : "drop-shadow(0 0 0px transparent)",
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

