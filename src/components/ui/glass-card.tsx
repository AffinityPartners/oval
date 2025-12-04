"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * GlassCard - A premium glassmorphic card component with frosted glass effect.
 * 
 * Creates a modern, elevated card with backdrop blur, subtle borders, and
 * optional hover animations. Used throughout the OVAL landing page for
 * plan comparison cards, benefit cards, and feature highlights.
 * 
 * Enhanced Features:
 * - 3D perspective tilt on hover (subtle, premium feel)
 * - Animated gradient border option
 * - Multi-layer shadow depth
 * - Smooth spring physics
 * 
 * @param children - Card content
 * @param className - Additional CSS classes
 * @param hover - Enable hover lift animation (default: true)
 * @param tilt - Enable 3D tilt on hover (default: false)
 * @param glowBorder - Enable animated gradient border (default: false)
 * @param padding - Padding preset: 'sm', 'md', 'lg' (default: 'md')
 * @param variant - Visual variant: 'light', 'dark', 'peach' (default: 'light')
 */

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  tilt?: boolean;
  glowBorder?: boolean;
  padding?: "sm" | "md" | "lg" | "none";
  variant?: "light" | "dark" | "peach" | "orange";
  as?: "div" | "article" | "section";
  id?: string;
}

export function GlassCard({
  children,
  className = "",
  hover = true,
  tilt = false,
  glowBorder = false,
  padding = "md",
  variant = "light",
  as = "div",
  id,
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  /**
   * Motion values for 3D tilt effect.
   * Tracks cursor position relative to card center.
   */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  /**
   * Spring configuration for smooth, premium tilt.
   */
  const springConfig = { stiffness: 300, damping: 30 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

  /**
   * Handle mouse movement for 3D tilt effect.
   * Normalizes cursor position to -0.5 to 0.5 range.
   */
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !tilt) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  /**
   * Reset tilt when mouse leaves.
   */
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  /**
   * Returns the appropriate background and border styling based on variant.
   */
  const getVariantStyles = () => {
    switch (variant) {
      case "light":
        return "bg-white/70 border-white/30 shadow-glass";
      case "dark":
        return "bg-oval-charcoal/80 border-white/10 text-white";
      case "peach":
        return "bg-oval-peach/80 border-oval-orange/20 shadow-glass";
      case "orange":
        return "bg-gradient-orange border-oval-orange/30 text-white shadow-orange-glow";
      default:
        return "bg-white/70 border-white/30 shadow-glass";
    }
  };

  /**
   * Returns padding classes based on size preset.
   */
  const getPaddingStyles = () => {
    switch (padding) {
      case "sm":
        return "p-4";
      case "md":
        return "p-6";
      case "lg":
        return "p-8";
      case "none":
        return "";
      default:
        return "p-6";
    }
  };

  const Component = motion[as];

  return (
    <Component
      ref={ref}
      id={id}
      className={cn(
        "relative overflow-hidden rounded-2xl backdrop-blur-xl border",
        getVariantStyles(),
        getPaddingStyles(),
        tilt && "transform-gpu",
        className
      )}
      style={tilt ? {
        rotateX,
        rotateY,
        transformPerspective: 1000,
      } : undefined}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={
        hover
          ? {
              y: -6,
              boxShadow:
                "0 25px 30px -8px rgba(0, 0, 0, 0.1), 0 15px 15px -8px rgba(0, 0, 0, 0.05), 0 4px 6px rgba(0, 0, 0, 0.03)",
            }
          : undefined
      }
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Animated gradient border - visible on hover when enabled */}
      {glowBorder && (
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "linear-gradient(90deg, transparent, hsl(24 79% 52% / 0.3), transparent)",
            backgroundSize: "200% 100%",
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: "conic-gradient(from 0deg, transparent, hsl(24 79% 52% / 0.4), transparent, hsl(24 79% 52% / 0.2), transparent)",
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      )}

      {/* Content wrapper to ensure proper z-index */}
      <div className="relative z-10">{children}</div>

      {/* Subtle inner highlight on hover */}
      {hover && (
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
          }}
        />
      )}
    </Component>
  );
}

/**
 * GlassCardHighlight - A badge/label component for highlighting features within cards.
 * Used for "Most Popular", "Best Value", discount percentages, etc.
 */
interface GlassCardHighlightProps {
  children: React.ReactNode;
  className?: string;
  variant?: "orange" | "green" | "charcoal";
}

export function GlassCardHighlight({
  children,
  className = "",
  variant = "orange",
}: GlassCardHighlightProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "orange":
        return "bg-oval-orange text-white";
      case "green":
        return "bg-emerald-500 text-white";
      case "charcoal":
        return "bg-oval-charcoal text-white";
      default:
        return "bg-oval-orange text-white";
    }
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full",
        getVariantStyles(),
        className
      )}
    >
      {children}
    </span>
  );
}

/**
 * GlassCardIcon - An icon container for feature cards with consistent styling.
 */
interface GlassCardIconProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCardIcon({ children, className = "" }: GlassCardIconProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center w-12 h-12 rounded-xl bg-oval-peach text-oval-orange",
        className
      )}
    >
      {children}
    </div>
  );
}

