"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useSpring, useInView, useMotionValue } from "framer-motion";

/**
 * AnimatedCounter - Scroll-triggered number counting animation component.
 * 
 * Creates an engaging count-up effect when the element scrolls into view.
 * Uses Framer Motion's useSpring for smooth, physics-based number transitions.
 * 
 * Features:
 * - Scroll-triggered activation (only counts when visible)
 * - Configurable from/to values
 * - Optional prefix and suffix (e.g., "$", "%", "+")
 * - Smooth spring physics for natural motion
 * - Respects reduced motion preferences
 * 
 * @param from - Starting number value (default: 0)
 * @param to - Target number value to count to
 * @param duration - Animation duration in seconds (default: 2)
 * @param prefix - Text to display before the number (e.g., "Up to ")
 * @param suffix - Text to display after the number (e.g., "%", "+")
 * @param decimals - Number of decimal places to show (default: 0)
 * @param className - Additional CSS classes for styling
 */

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(from);
  
  /**
   * Motion value that drives the animation.
   * Starts at 'from' and animates to 'to' when in view.
   */
  const motionValue = useMotionValue(from);
  
  /**
   * Spring configuration for smooth, natural motion.
   * Stiffness and damping tuned for pleasant counting effect.
   */
  const springValue = useSpring(motionValue, {
    stiffness: 50,
    damping: 30,
    duration: duration * 1000,
  });

  /**
   * Trigger animation when element enters viewport.
   * Only runs once due to { once: true } in useInView.
   */
  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }
  }, [isInView, motionValue, to]);

  /**
   * Subscribe to spring value changes and update display.
   * Rounds to specified decimal places for clean display.
   */
  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(parseFloat(latest.toFixed(decimals)));
    });
    return unsubscribe;
  }, [springValue, decimals]);

  /**
   * Format the number for display with proper locale formatting.
   * Adds commas for thousands, respects decimal places.
   */
  const formattedValue = displayValue.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {prefix}
      {formattedValue}
      {suffix}
    </motion.span>
  );
}

/**
 * AnimatedPercentage - Specialized counter for percentage displays.
 * Wraps AnimatedCounter with sensible defaults for percentages.
 */
interface AnimatedPercentageProps {
  value: number;
  prefix?: string;
  className?: string;
}

export function AnimatedPercentage({
  value,
  prefix = "",
  className = "",
}: AnimatedPercentageProps) {
  return (
    <AnimatedCounter
      from={0}
      to={value}
      suffix="%"
      prefix={prefix}
      className={className}
      duration={1.8}
    />
  );
}

/**
 * AnimatedStat - Compound component for stat displays with label.
 * Combines counter animation with a descriptive label below.
 */
interface AnimatedStatProps {
  value: number | string;
  label: string;
  prefix?: string;
  suffix?: string;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}

export function AnimatedStat({
  value,
  label,
  prefix = "",
  suffix = "",
  className = "",
  valueClassName = "",
  labelClassName = "",
}: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  /**
   * Determine if value is a number or string.
   * Numbers get animated, strings are displayed statically.
   */
  const isNumeric = typeof value === "number";

  return (
    <motion.div
      ref={ref}
      className={`text-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className={valueClassName}>
        {isNumeric ? (
          <AnimatedCounter
            from={0}
            to={value}
            prefix={prefix}
            suffix={suffix}
            className="inline-block"
          />
        ) : (
          <span>
            {prefix}
            {value}
            {suffix}
          </span>
        )}
      </div>
      <div className={labelClassName}>{label}</div>
    </motion.div>
  );
}

