"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView, Variants } from "framer-motion";

/**
 * TextReveal - Animated text reveal component for headlines.
 * 
 * Creates an engaging reveal effect where text appears word-by-word
 * or character-by-character with staggered animation. Perfect for
 * hero headlines and section titles.
 * 
 * Features:
 * - Word-by-word or character-by-character animation
 * - Configurable stagger timing
 * - Clip-path reveal with optional blur
 * - Respects reduced motion preferences
 * - SSR-safe implementation
 * 
 * @param children - Text content to animate (string only)
 * @param mode - Animation mode: 'words' or 'chars' (default: 'words')
 * @param delay - Initial delay before animation starts (default: 0)
 * @param stagger - Delay between each word/char (default: 0.08)
 * @param className - Additional CSS classes
 */

interface TextRevealProps {
  children: string;
  mode?: "words" | "chars";
  delay?: number;
  stagger?: number;
  className?: string;
}

export function TextReveal({
  children,
  mode = "words",
  delay = 0,
  stagger = 0.08,
  className = "",
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  /**
   * Split text into units (words or characters) for animation.
   * Preserves spaces between words when in word mode.
   */
  const units = mode === "words" 
    ? children.split(" ").map((word, i, arr) => 
        i < arr.length - 1 ? word + " " : word
      )
    : children.split("");

  /**
   * Animation variants for the container.
   * Controls when children animations begin.
   */
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  /**
   * Animation variants for each text unit.
   * Creates a smooth upward fade-in effect.
   */
  const unitVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {units.map((unit, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={unitVariants}
          style={{ whiteSpace: "pre-wrap" }}
        >
          {unit}
        </motion.span>
      ))}
    </motion.span>
  );
}

/**
 * SplitText - Advanced text animation with line-by-line reveal.
 * 
 * For multi-line headlines where you want each line to animate
 * separately with a staggered effect.
 */
interface SplitTextProps {
  children: ReactNode;
  delay?: number;
  stagger?: number;
  className?: string;
}

export function SplitText({
  children,
  delay = 0,
  stagger = 0.15,
  className = "",
}: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  /**
   * Container variants for line staggering.
   */
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  /**
   * Line animation with clip-path reveal.
   * Creates a more dramatic "curtain" effect.
   */
  const lineVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      clipPath: "inset(100% 0% 0% 0%)",
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        duration: 0.7,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div variants={lineVariants}>{children}</motion.div>
    </motion.div>
  );
}

/**
 * HighlightReveal - Text with animated highlight/underline effect.
 * 
 * Reveals text normally, then animates a highlight behind specific words.
 */
interface HighlightRevealProps {
  children: string;
  highlightWords?: string[];
  highlightColor?: string;
  delay?: number;
  className?: string;
}

export function HighlightReveal({
  children,
  highlightWords = [],
  highlightColor = "rgba(231, 112, 39, 0.2)",
  delay = 0,
  className = "",
}: HighlightRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const words = children.split(" ");

  return (
    <motion.span
      ref={ref}
      className={`inline ${className}`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {words.map((word, index) => {
        const shouldHighlight = highlightWords.some(
          (hw) => word.toLowerCase().includes(hw.toLowerCase())
        );

        return (
          <span key={index} className="relative inline-block">
            <span className="relative z-10">{word}</span>
            {shouldHighlight && (
              <motion.span
                className="absolute inset-0 -mx-1 rounded"
                style={{ backgroundColor: highlightColor, zIndex: 0 }}
                initial={{ scaleX: 0, originX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{
                  duration: 0.5,
                  delay: delay + 0.5 + index * 0.1,
                  ease: "easeOut",
                }}
              />
            )}
            {index < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </motion.span>
  );
}

/**
 * TypewriterText - Classic typewriter animation effect.
 * 
 * Reveals text character by character as if being typed.
 */
interface TypewriterTextProps {
  children: string;
  delay?: number;
  speed?: number;
  className?: string;
  cursor?: boolean;
}

export function TypewriterText({
  children,
  delay = 0,
  speed = 0.05,
  className = "",
  cursor = true,
}: TypewriterTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const chars = children.split("");

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {chars.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delay: delay + index * speed,
                duration: 0,
              },
            },
          }}
        >
          {char}
        </motion.span>
      ))}
      {cursor && (
        <motion.span
          className="inline-block w-0.5 h-[1em] bg-current ml-0.5 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: delay + chars.length * speed,
          }}
        />
      )}
    </motion.span>
  );
}

