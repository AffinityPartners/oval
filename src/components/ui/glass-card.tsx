"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * GlassCard - A premium glassmorphic card component with frosted glass effect.
 * 
 * Creates a modern, elevated card with backdrop blur, subtle borders, and
 * optional hover animations. Used throughout the OVAL landing page for
 * plan comparison cards, benefit cards, and feature highlights.
 * 
 * @param children - Card content
 * @param className - Additional CSS classes
 * @param hover - Enable hover lift animation (default: true)
 * @param padding - Padding preset: 'sm', 'md', 'lg' (default: 'md')
 * @param variant - Visual variant: 'light', 'dark', 'peach' (default: 'light')
 */

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg" | "none";
  variant?: "light" | "dark" | "peach" | "orange";
  as?: "div" | "article" | "section";
  id?: string;
}

export function GlassCard({
  children,
  className = "",
  hover = true,
  padding = "md",
  variant = "light",
  as = "div",
  id,
}: GlassCardProps) {
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
      id={id}
      className={cn(
        "relative overflow-hidden rounded-2xl backdrop-blur-xl border",
        getVariantStyles(),
        getPaddingStyles(),
        className
      )}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }
          : undefined
      }
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
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

