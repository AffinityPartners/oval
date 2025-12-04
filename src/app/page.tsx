"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionTemplate,
  useInView,
} from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

/**
 * OvalCare Landing Page - Home
 *
 * A pixel-perfect recreation of ovalcare.com's landing page, converted to Next.js
 * with Tailwind CSS and Framer Motion animations. This page showcases the
 * OvalCare healthcare platform with sections for services, treatments,
 * how it works, and membership information.
 * 
 * Design Philosophy:
 * - Clean, modern healthcare aesthetic
 * - Orange (#f97316) as primary accent color
 * - White backgrounds with subtle gray sections
 * - Smooth scroll animations and micro-interactions
 *
 * Image Sources:
 * - Solutions images: /images/oval/solutions/
 * - How it Works images: /images/oval/hiw/
 * - Trust icons: /images/oval/icons/
 * - People gallery: /images/oval/people/
 * - Section images: /images/oval/trx/
 */

/* ============================================================================
   NAVBAR COMPONENT
   Sticky navigation bar with OVAL logo and action buttons
============================================================================ */

/**
 * Navbar component - Fixed top navigation
 * Features OVAL logo (black) with Login and Get Started buttons
 * Matches the exact styling from ovalcare.com header
 */
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-sm border-b border-gray-100 safe-area-inset-top">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-24">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* OVAL Logo - SVG wordmark (responsive sizing) */}
          <Link href="/" className="flex items-center touch-target">
            <Image
              src="/images/logos/oval-logo.svg"
              alt="OVAL"
              width={100}
              height={24}
              className="h-5 sm:h-6 w-auto"
            />
          </Link>

          {/* Navigation Actions - Responsive sizing */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/login"
              className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors touch-target px-2 flex items-center justify-center"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors shadow-sm touch-target"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

/* ============================================================================
   HERO SECTION
   Main hero with headline, orange blob image, and category links
============================================================================ */

/**
 * Hero section - Primary landing area (Responsive)
 * Features "healthcare for hair, skin, balance, and beyond" headline
 * with an embedded Vimeo background video and category quick links
 *
 * Responsive Features:
 * - Uses h-screen-safe for mobile-safe viewport height (handles address bar)
 * - Video scales responsively with object-cover behavior
 * - Stronger gradient overlay on mobile for text readability
 * - Responsive typography scaling from mobile to desktop
 * - Touch-friendly CTA button with proper hit targets
 */
function HeroSection() {
  const categories = [
    { name: "Rx Skincare", href: "#skincare" },
    { name: "Rx Hair Loss", href: "#hair" },
    { name: "Rx Weight Loss", href: "#weight" },
  ];

  return (
    <section className="sticky top-0 h-screen-safe overflow-hidden bg-white z-0 snap-start snap-stop">
      {/* Full-Width Background Video - Responsive scaling */}
      <div className="absolute inset-0 w-full h-full">
        {/* Vimeo Background Video - Full Width Cover
            Video displays organic orange/red blob animation
            Settings: autoplay, muted, loop, background mode
            Responsive: Uses object-fit cover behavior via CSS positioning */}
        <iframe
          src="https://player.vimeo.com/video/1104822520?background=1&autoplay=1&muted=1&loop=1&autopause=0&playsinline=1&dnt=1&h=b989854407"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto"
          style={{ 
            aspectRatio: "16/9",
            // Ensure video covers entire container on all screen sizes
            width: "max(100%, 177.78vh)",
            height: "max(100%, 56.25vw)"
          }}
          allow="autoplay; fullscreen; picture-in-picture"
          title="OvalCare Hero Background"
        />
        {/* Gradient overlay for text readability
            Stronger on mobile (more white coverage) for better contrast
            Lighter on desktop where video is more visible on right side */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/60 md:from-white/95 md:via-white/75 md:to-transparent" />
      </div>

      {/* Content Overlay - Left aligned, responsive padding */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-24 py-16 sm:py-20 lg:py-32">
          {/* Main Headline - Responsive typography
              Mobile: 36px, SM: 48px, MD: 60px, LG: 72px, XL: 96px */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-[1.08] tracking-tight max-w-3xl text-left"
          >
            healthcare for
            <br />
            <span className="hidden sm:inline">hair, skin, balance,</span>
            <span className="sm:hidden">hair, skin,</span>
            <br />
            <span className="sm:hidden">balance,</span>
            and beyond.
          </motion.h1>

          {/* Category links - Responsive spacing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-1 mt-5 sm:mt-8 justify-start"
          >
            {categories.map((cat, index) => (
              <span key={cat.name} className="inline-flex items-center">
                <Link
                  href={cat.href}
                  className="text-xs sm:text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors py-1"
                >
                  {cat.name}
                </Link>
                {index < categories.length - 1 && (
                  <span className="mx-1.5 sm:mx-2 text-gray-400">·</span>
                )}
              </span>
            ))}
          </motion.div>

          {/* CTA Button - Touch-friendly with min 44px height */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 sm:mt-10 text-left"
          >
            <Link
              href="/register"
              className="inline-flex items-center px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl touch-target"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   PRESCRIPTION CARE SECTION
   Category selection with dropdown pills
============================================================================ */

/**
 * Prescription Care Section (Responsive)
 * "Prescription care, built around you" with 3x2 grid of category buttons
 * 
 * Responsive Features:
 * - Stacks vertically on mobile with image above text
 * - Touch-friendly category buttons with proper tap targets
 * - Responsive typography and spacing
 */
function PrescriptionCareSection() {
  const categories = [
    { name: "Hair", href: "#hair" },
    { name: "Skin Care", href: "#skincare" },
    { name: "Sexual Wellness", href: "#sexual" },
    { name: "Hormone Support", href: "#hormone" },
    { name: "Weight Care", href: "#weight" },
    { name: "Performance Creams", href: "#performance" },
  ];

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Layout: Content Left, Image Right - Stacks on mobile */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Text and Categories */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                Prescription care,
                <br />
                built around you
              </h2>
              <p className="text-gray-500 mb-6 md:mb-12 max-w-xl text-sm md:text-lg">
                From hair health to hormone balance, our doctors create a plan
                that&apos;s uniquely yours.
              </p>
            </motion.div>

            {/* Category Buttons - 2x3 grid on all screen sizes for compact layout */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link
                    href={category.href}
                    className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 sm:py-3.5 md:py-5 bg-gray-100 rounded-full text-gray-900 font-medium text-xs sm:text-sm md:text-base hover:bg-gray-200 transition-colors group touch-target"
                  >
                    <span className="truncate">{category.name}</span>
                    <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-gray-400 -rotate-90 group-hover:text-gray-600 transition-colors flex-shrink-0 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Lifestyle Image - Shows first on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative aspect-[4/3] md:aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden">
              <Image
                src="/images/oval/prescription-care.png"
                alt="Woman with healthy skin and hair"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   WHY CHOOSE OVAL SECTION
   Two-column layout with benefits and product image
============================================================================ */

/**
 * Why Choose Oval Section (Responsive)
 * Features compelling copy about pricing transparency with lifestyle image
 * 
 * Responsive Features:
 * - Stacks vertically on mobile
 * - Condensed paragraph text on mobile for better readability
 * - Touch-friendly CTA button
 */
function WhyChooseOvalSection() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content - Pricing transparency message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-8 leading-tight">
              Why Choose
              <br />
              Oval?
            </h2>
            <p className="text-gray-500 mb-4 md:mb-6 leading-relaxed text-sm md:text-lg">
              Most pharmacies profit big from your prescriptions. We don&apos;t
              play that game.
            </p>
            <p className="text-gray-500 mb-4 md:mb-6 leading-relaxed text-sm md:text-lg">
              While others mark up medications by 200% to 8,000%, we keep prices
              near wholesale—charging only a modest margin to keep things
              sustainable.
            </p>
            <p className="text-gray-500 mb-4 md:mb-6 leading-relaxed text-sm md:text-lg hidden md:block">
              Our main revenue comes from your membership, not inflated
              prescription prices.
            </p>
            <p className="text-gray-500 mb-6 md:mb-10 leading-relaxed text-sm md:text-lg">
              That means no outrageous markups, no hidden fees, and real savings
              on the meds you actually need. With Oval, you&apos;re getting
              access, transparency, and a pricing model that actually respects
              you.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-5 md:px-7 py-3 md:py-3.5 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-sm text-sm md:text-base touch-target"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right Image - Lifestyle photo from /trx/why.png */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative aspect-[4/3] md:aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden">
              <Image
                src="/images/oval/trx/why.png"
                alt="Woman with beautiful curly hair"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   MEMBERSHIP JOURNEY BANNER
   Full-width orange-tinted banner section
============================================================================ */

/**
 * Membership Journey Banner (Responsive)
 * "Your health journey starts with membership" with lifestyle image
 * 
 * Responsive Features:
 * - Stacks vertically on mobile with image above text
 * - Responsive image aspect ratio
 * - Touch-friendly CTA
 */
function MembershipJourneySection() {
  return (
    <section className="relative h-full flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Image - Lifestyle photo from /trx/journey.png */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] md:aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/oval/trx/journey.png"
              alt="Woman enjoying her health journey"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Content - Membership benefits (left-aligned to match other sections) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-8 leading-tight">
              Your health
              <br />
              journey starts with
              <br />
              membership
            </h2>
            <p className="text-gray-500 mb-6 md:mb-10 max-w-xl text-sm md:text-lg">
              Before you can access our prescription treatments, you&apos;ll
              become an Oval Member. Choose a plan, complete your health quiz,
              and get your personalized prescription, all from home.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-5 md:px-7 py-3 md:py-3.5 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors shadow-sm text-sm md:text-base touch-target"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   DOCTOR-TRUSTED SOLUTIONS SECTION
   Category cards with images
============================================================================ */

/**
 * Doctor-trusted Solutions Section
 * Grid of solution category cards with images from /solutions/
 */
/**
 * Solution Card Component with advanced scroll animations
 * Individual card for Doctor-trusted Solutions with stagger effects
 * 
 * Mobile: Label position varies (left, right, or center) based on grid position
 * Desktop: Label at bottom with gradient from bottom
 */
interface SolutionCardProps {
  name: string;
  image: string;
  index: number;
  isFloating?: boolean; // For the center floating card on mobile
  mobileLabelPosition?: "top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right"; // Label position on mobile
}

function SolutionCard({ name, image, index, isFloating = false, mobileLabelPosition = "top-left" }: SolutionCardProps) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });
  
  /**
   * Get positioning classes based on mobile label position
   * Handles both vertical (top/bottom) and horizontal (left/right/center) alignment
   */
  const getMobileLabelClasses = () => {
    const isBottom = mobileLabelPosition.startsWith("bottom");
    const alignment = mobileLabelPosition.includes("right") 
      ? "text-right" 
      : mobileLabelPosition.includes("center") 
        ? "text-center" 
        : "text-left";
    const vertical = isBottom ? "bottom-0" : "top-0";
    return { alignment, vertical, isBottom };
  };
  
  const labelClasses = getMobileLabelClasses();

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.9, rotateY: 15 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1, rotateY: 0 }
          : { opacity: 0, y: 60, scale: 0.9, rotateY: 15 }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -10, scale: 1.03 }}
      style={{ transformStyle: "preserve-3d" }}
      className={isFloating ? "shadow-2xl" : ""}
    >
      <Link
        href="#"
        className={`group block relative aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden bg-gray-100 ${
          isFloating ? "ring-4 ring-white shadow-xl" : ""
        }`}
      >
        {/* Image with parallax hover effect */}
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </motion.div>
        
        {/* Mobile: Gradient overlay - from top or bottom based on label position */}
        <div className={`md:hidden absolute inset-0 ${
          labelClasses.isBottom 
            ? "bg-gradient-to-t from-black/60 via-black/20 to-transparent" 
            : "bg-gradient-to-b from-black/60 via-black/20 to-transparent"
        }`} />
        
        {/* Desktop: Bottom gradient overlay */}
        <motion.div
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 0.9 }}
          className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
        />
        
        {/* Mobile: Title with variable position (top/bottom) and alignment (left/right/center) */}
        <motion.div
          initial={{ y: labelClasses.isBottom ? 10 : -10, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: labelClasses.isBottom ? 10 : -10, opacity: 0 }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
          className={`md:hidden absolute ${labelClasses.vertical} left-0 right-0 p-3 ${labelClasses.alignment}`}
        >
          <h3 className="text-white font-semibold text-sm group-hover:text-orange-300 transition-colors">
            {name}
          </h3>
        </motion.div>
        
        {/* Desktop: Title at bottom */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
          className="hidden md:block absolute bottom-0 left-0 right-0 p-5"
        >
          <h3 className="text-white font-semibold text-xl group-hover:text-orange-300 transition-colors">
            {name}
          </h3>
        </motion.div>
        
        {/* Hover shine effect - desktop only */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-full" />
      </Link>
    </motion.div>
  );
}

/**
 * Doctor-trusted Solutions Section (Responsive)
 * Grid of solution category cards with advanced stagger animations
 * 
 * Responsive Features:
 * - 2 columns on mobile, 3 on tablet, 5 on desktop
 * - Responsive gap spacing
 * - Touch-friendly card tap targets
 */
function DoctorTrustedSolutionsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const solutions = [
    { name: "Hair", image: "/images/oval/solutions/hair.png" },
    { name: "Skin", image: "/images/oval/solutions/skin.png" },
    { name: "Weight", image: "/images/oval/solutions/weight.png" },
    { name: "Sexual Health", image: "/images/oval/solutions/sexual.png" },
    { name: "Hormone", image: "/images/oval/solutions/hormone.png" },
  ];

  // Parallax effects
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -15]);

  return (
    <section ref={sectionRef} className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ y: headerY }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-6 md:mb-12 gap-4 md:gap-6"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
            >
              Doctor-trusted solutions for every
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>concern
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-500 mt-2 md:mt-4 text-sm md:text-lg"
            >
              Browse by category to find your perfect treatment.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-semibold text-gray-900 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors touch-target"
            >
              View All
            </Link>
          </motion.div>
        </motion.div>

        {/* Desktop: Standard 5-column grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.name} {...solution} index={index} />
          ))}
        </div>
        
        {/* Mobile: 2x2 grid with 5th card floating centered above
            Label positions create visual balance around center card:
            - Hair (top-left), Skin (top-right) - labels at top corners
            - Weight (bottom-left), Sexual Health (bottom-right) - labels at bottom corners
            - Hormone (top-center) - floating card with centered label */}
        <div className="md:hidden relative">
          {/* 2x2 Grid for first 4 cards with corner label positions */}
          <div className="grid grid-cols-2 gap-3">
            {/* Row 1: Hair (top-left), Skin (top-right) */}
            <SolutionCard {...solutions[0]} index={0} mobileLabelPosition="top-left" />
            <SolutionCard {...solutions[1]} index={1} mobileLabelPosition="top-right" />
            {/* Row 2: Weight (bottom-left), Sexual Health (bottom-right) */}
            <SolutionCard {...solutions[2]} index={2} mobileLabelPosition="bottom-left" />
            <SolutionCard {...solutions[3]} index={3} mobileLabelPosition="bottom-right" />
          </div>
          
          {/* 5th card (Hormone) floating centered above the grid with centered label */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] z-10">
            <SolutionCard 
              {...solutions[4]} 
              index={4} 
              isFloating={true}
              mobileLabelPosition="top-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   PERSONALIZED TREATMENTS SECTION
   Product grid with medication bottles
============================================================================ */

/**
 * Treatment Card Component with scroll-triggered animations (Responsive)
 * Individual card for the Personalized Treatments scrollytelling section
 * 
 * Responsive Features:
 * - Fluid width on mobile (full card in view), fixed on larger screens
 * - Touch-optimized with no hover-dependent interactions on mobile
 * - Smaller padding on mobile for better space usage
 */
interface TreatmentCardProps {
  name: string;
  category: string;
  description: string;
  image: string;
  index: number;
}

function TreatmentCard({ name, category, description, image, index }: TreatmentCardProps) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0.3, y: 20, scale: 0.98 }
      }
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="flex-shrink-0 w-[200px] sm:w-[240px] md:w-[280px] bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
      role="group"
      aria-label={name}
    >
      {/* Product Image with hover zoom - smaller aspect ratio on mobile */}
      <div className="relative aspect-[4/3] sm:aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain p-3 sm:p-4"
          />
        </motion.div>
        {/* Shine effect on hover - desktop only */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full hidden md:block" />
      </div>
      {/* Card Content - Responsive padding */}
      <div className="p-3 sm:p-4 md:p-5">
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          transition={{ delay: index * 0.08 + 0.2 }}
          className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold text-orange-600 bg-orange-50 rounded-full"
        >
          {category}
        </motion.span>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.08 + 0.3 }}
          className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mt-2 sm:mt-3"
        >
          {name}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.08 + 0.4 }}
          className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2 line-clamp-2"
        >
          {description}
        </motion.p>
      </div>
    </motion.article>
  );
}

/**
 * Personalized Treatments Section (Responsive)
 * Scrollytelling carousel with scroll-triggered animations
 * 
 * Responsive Features:
 * - Mobile: Native horizontal scroll with snap points (no JS carousel)
 * - Tablet+: Button-controlled carousel with animation
 * - Touch-friendly navigation buttons (44px minimum tap target)
 * - Responsive card sizing and gap spacing
 */
function PersonalizedTreatmentsSection() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  // Initialize to 0 to avoid hydration mismatch - carousel starts at x=0 regardless of cardWidth
  // The correct width is calculated on client mount, preventing SSR/CSR value differences
  const [cardWidth, setCardWidth] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /**
   * Calculates the total card width (card + gap) based on viewport size.
   * This must match the responsive CSS classes on TreatmentCard and the carousel container:
   * - Mobile (<640px): 200px card + 16px gap (gap-4) = 216px
   * - Tablet (640-767px): 240px card + 20px gap (gap-5) = 260px
   * - Desktop md (768-1023px): 280px card + 20px gap (gap-5) = 300px
   * - Desktop lg (≥1024px): 280px card + 24px gap (gap-6) = 304px
   * 
   * Note: The md breakpoint uses gap-5 (20px), while lg uses gap-6 (24px).
   * This distinction is critical for accurate carousel animation positioning.
   */
  useEffect(() => {
    const calculateCardWidth = () => {
      if (typeof window === 'undefined') return 304;
      if (window.innerWidth < 640) return 216;  // 200 + 16 (gap-4)
      if (window.innerWidth < 768) return 260;  // 240 + 20 (gap-5)
      if (window.innerWidth < 1024) return 300; // 280 + 20 (gap-5 at md breakpoint)
      return 304;                                // 280 + 24 (gap-6 at lg breakpoint)
    };
    setCardWidth(calculateCardWidth());
    const handleResize = () => {
      setCardWidth(calculateCardWidth());
      setCurrentIndex(0);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const treatments = [
    {
      name: "Metformin Hydration",
      category: "Rx Hair",
      description: "Hydrates your scalp for healthier, stronger hair growth.",
      image: "/images/oval/trx/prescription-bottle.png",
    },
    {
      name: "Sertraline & Tadalafil",
      category: "Rx Sex",
      description: "Combination therapy for erectile dysfunction and performance anxiety.",
      image: "/images/oval/trx/orange-bottle.png",
    },
    {
      name: "Testosterone Cream",
      category: "Rx Hair",
      description: "Arousal cream boosts blood flow and sensitivity.",
      image: "/images/oval/trx/cream-tub.png",
    },
    {
      name: "Metformin Hydration",
      category: "Rx Hair",
      description: "Hydrates scalp and nourishes follicles for fuller hair.",
      image: "/images/oval/trx/prescription-bottle.png",
    },
    {
      name: "Finasteride & Minoxidil",
      category: "Rx Hair",
      description: "Dual-action treatment reduces hair loss and stimulates regrowth.",
      image: "/images/oval/trx/spray-bottle.png",
    },
    {
      name: "Hormone Support",
      category: "Balance",
      description: "Balances hormones for better energy, mood, and wellness.",
      image: "/images/oval/trx/vitamin.png",
    },
  ];

  /**
   * Navigate to the previous card in the carousel.
   * Prevents scrolling before the first card (index 0).
   */
  const scrollPrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  /**
   * Navigate to the next card in the carousel.
   * Calculates visible cards based on cardWidth to prevent scrolling past the last card:
   * - At md breakpoint (768-1023px): cardWidth = 300, ~2-3 cards visible → use 2
   * - At lg+ breakpoint (≥1024px): cardWidth = 304, ~4 cards visible → use 4
   * The threshold of 304 distinguishes between md (gap-5) and lg (gap-6) breakpoints.
   */
  const scrollNext = () => {
    const visibleCards = cardWidth >= 304 ? 4 : 2;
    setCurrentIndex((prev) => Math.min(treatments.length - visibleCards, prev + 1));
  };

  // Parallax effects for header
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -20]);
  const headerScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);

  return (
    <section ref={sectionRef} className="py-12 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with parallax and controls - Responsive spacing */}
        <motion.div
          style={{ y: headerY, scale: headerScale }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-6 md:mb-12 gap-4 md:gap-6"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 md:mb-4 leading-tight"
            >
              Personalized Treatments,
              <br />
              Backed by Experts
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-500 max-w-xl text-sm md:text-lg"
            >
              From skin health to wellness, explore solutions tailored to your needs.
            </motion.p>
          </div>
          {/* Navigation Controls - Touch-friendly 44px targets, hidden on mobile (use swipe) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-2"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollPrev}
              disabled={currentIndex === 0}
              className="w-11 h-11 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-900 hover:text-gray-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed touch-target"
              aria-label="Previous treatments"
            >
              <span className="text-xl">‹</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollNext}
              disabled={currentIndex >= treatments.length - 4}
              className="w-11 h-11 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-900 hover:text-gray-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed touch-target"
              aria-label="Next treatments"
            >
              <span className="text-xl">›</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Mobile: Native scroll with snap points */}
        <div 
          ref={scrollContainerRef}
          className="md:hidden overflow-x-auto snap-scroll-x scrollbar-hide -mx-4 px-4 pb-4"
        >
          <div className="flex gap-4">
            {treatments.map((treatment, index) => (
              <TreatmentCard
                key={`${treatment.name}-${index}`}
                {...treatment}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Tablet+: Animated carousel with button controls */}
        <div className="hidden md:block overflow-hidden">
          <motion.div
            className="flex gap-5 lg:gap-6"
            animate={{ x: -currentIndex * cardWidth }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {treatments.map((treatment, index) => (
              <TreatmentCard
                key={`${treatment.name}-${index}`}
                {...treatment}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   HOW IT WORKS SECTION
   True stacked cards with sticky scroll effect
============================================================================ */

/**
 * How It Works Section - Stacked Cards on Scroll
 * 
 * Creates a scrollytelling experience where:
 * - Section height is extended to allow scrolling
 * - Cards stack on top of each other in a sticky container
 * - As user scrolls, each card slides up and scales down to reveal the next
 * - Progress indicators show current step
 */
/**
 * How It Works Section
 * Three-column card layout matching the OvalCare design
 * Card 1: Black background, Card 2: Orange background, Card 3: Light gray background
 */
function HowItWorksSection() {
  const steps = [
    {
      step: 1,
      title: "Choose Your Membership",
      description: "Pick one of our three membership plans to unlock personalized care.",
      image: "/images/oval/hiw/membership.png",
      imageAlt: "Membership tiers sheet",
      cta: "Get Started",
      bgColor: "bg-black",
      textColor: "text-white",
      badgeBorder: "border-white/30",
      badgeText: "text-white",
      descColor: "text-white/70",
    },
    {
      step: 2,
      title: "Complete Your Health Quiz",
      description: "Answer a few simple, clinically guided questions to help us understand your needs.",
      image: "/images/oval/hiw/quiz.png",
      imageAlt: "Health quiz on phone",
      cta: "Get a Diagnosis",
      bgColor: "bg-orange-500",
      textColor: "text-white",
      badgeBorder: "border-white/30",
      badgeText: "text-white",
      descColor: "text-white/90",
    },
    {
      step: 3,
      title: "Get Your Doctor-Approved Plan",
      description: "Our licensed providers review your quiz and recommend the right prescription for you.",
      image: "/images/oval/hiw/plan.png",
      imageAlt: "Doctor reaching hand",
      cta: "Talk to Expert",
      bgColor: "bg-gray-100",
      textColor: "text-gray-900",
      badgeBorder: "border-gray-300",
      badgeText: "text-gray-600",
      descColor: "text-gray-500",
    },
  ];

  return (
    <div className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">How It Works</h2>
        </motion.div>

        {/* Three Column Cards Grid - Stacks on mobile, horizontal scroll on tablet option */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`${step.bgColor} rounded-2xl md:rounded-3xl overflow-hidden flex flex-col`}
            >
              <div className="p-4 md:p-6 flex-1 flex flex-col">
                <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full border-2 ${step.badgeBorder} flex items-center justify-center mb-4 md:mb-6`}>
                  <span className={`${step.badgeText} text-xs md:text-sm font-medium`}>{step.step}</span>
                </div>
                <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold ${step.textColor} mb-3 md:mb-4 leading-tight`}>
                  {step.title}
                </h3>
                <div className="relative flex-1 min-h-[200px] md:min-h-[280px] -mx-4 md:-mx-6 mb-3 md:mb-4">
                  <Image src={step.image} alt={step.imageAlt} fill className="object-contain object-bottom" />
                </div>
                <p className={`${step.descColor} text-xs md:text-sm leading-relaxed`}>{step.description}</p>
              </div>
              <Link
                href="#"
                className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 bg-gray-900 hover:bg-gray-800 transition-colors touch-target"
              >
                <span className="text-white font-semibold text-sm md:text-base">{step.cta}</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   HEALTHCARE YOU CAN TRUST SECTION
   Trust badges with icons
============================================================================ */

/**
 * Healthcare You Can Trust Section
 * Trust indicators with icons from /icons/ (FDA, HIPAA, etc.)
 */
function HealthcareTrustSection() {
  const trustBadges = [
    {
      icon: "/images/oval/icons/1.png",
      title: "Board-certified physicians",
      description: "All prescriptions reviewed by licensed MDs",
    },
    {
      icon: "/images/oval/icons/2.png",
      title: "FDA-regulated medications",
      description: "Only approved, safe treatments",
    },
    {
      icon: "/images/oval/icons/3.png",
      title: "HIPAA compliant",
      description: "Your health data is protected",
    },
    {
      icon: "/images/oval/icons/4.png",
      title: "Free shipping",
      description: "Discreet delivery to your door",
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Layout: Image Left, Content Right - Stacks on mobile */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Lifestyle Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] md:aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden">
              <Image
                src="/images/oval/trust-portrait.png"
                alt="Trusted healthcare professional"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 md:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Healthcare you can trust
              </h2>
            </motion.div>

            {/* Trust Badges - 2x2 Grid with responsive gaps and sizing */}
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-center sm:text-left"
                >
                  <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 relative">
                    <Image
                      src={badge.icon}
                      alt={badge.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm md:text-lg">
                      {badge.title}
                    </h3>
                    <p className="text-gray-500 mt-0.5 md:mt-1 text-xs md:text-base">{badge.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button - Touch-friendly */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 md:mt-10"
            >
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-5 md:px-7 py-3 md:py-3.5 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-sm text-sm md:text-base touch-target"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   REAL PEOPLE REAL RESULTS SECTION
   Testimonial/results image gallery
============================================================================ */

/**
 * Real People Real Results Section (Responsive)
 * Gallery of customer images from /people/
 * 
 * Responsive Features:
 * - 2 columns on mobile, 3 on tablet, 5 on desktop
 * - Always shows name/result on mobile (no hover required)
 * - Responsive gaps and padding
 */
function RealResultsSection() {
  const results = [
    {
      image: "/images/oval/people/1.png",
      name: "Sarah M.",
      result: "Hair regrowth",
    },
    {
      image: "/images/oval/people/2.png",
      name: "Mike T.",
      result: "Weight loss",
    },
    {
      image: "/images/oval/people/3.png",
      name: "Jessica L.",
      result: "Clear skin",
    },
    {
      image: "/images/oval/people/4.png",
      name: "David R.",
      result: "More energy",
    },
    {
      image: "/images/oval/people/5.png",
      name: "Emily K.",
      result: "Better sleep",
    },
  ];

  return (
    <section className="h-full flex flex-col justify-center bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-24 py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Real people, Real results
          </h2>
        </motion.div>

        {/* Results Gallery - Responsive grid with visible labels on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
          {results.map((result, index) => (
            <motion.div
              key={result.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-[2/3] rounded-xl md:rounded-3xl overflow-hidden bg-gray-100"
            >
              <Image
                src={result.image}
                alt={result.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Mobile: Always visible gradient and text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 md:translate-y-4 md:group-hover:translate-y-0 md:opacity-0 md:group-hover:opacity-100 transition-all">
                <p className="text-white font-semibold text-sm md:text-lg">{result.name}</p>
                <p className="text-white/80 text-xs md:text-base">{result.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   SECONDARY CTA SECTION
   Healthcare for hair, skin, balance and beyond with image
============================================================================ */

/**
 * Secondary CTA Section (Responsive)
 * Full-width hero card with Vimeo video background on right side
 * 
 * Responsive Features:
 * - Mobile: Stacked layout with video hidden or above content
 * - Tablet+: Side-by-side with video on right
 * - Touch-friendly CTA button
 */
function SecondaryCTASection() {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Card Container - Responsive min-height */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl md:rounded-[20px] overflow-hidden min-h-[400px] md:min-h-[520px] lg:min-h-[580px] bg-gradient-to-br from-orange-50 to-white md:bg-white"
        >
          {/* Video Background - Hidden on mobile, right side on tablet+ */}
          <div className="absolute inset-0 hidden md:flex justify-end">
            <div className="relative w-[60%] h-full">
              <iframe
                src="https://player.vimeo.com/video/1116152740?background=1&autoplay=1&muted=1&loop=1&autopause=0&playsinline=1&dnt=1&h=a762bc5a62"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%]"
                style={{ transform: "translate(-42%, -50%)" }}
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                title="Background video"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Fade Gradient Overlay - Left to Right (desktop only) */}
          <div
            className="absolute inset-0 pointer-events-none hidden md:block"
            style={{
              background:
                "linear-gradient(to right, #FFFFFF 40%, rgba(255,255,255,0.95) 55%, rgba(255,255,255,0.7) 70%, rgba(255,255,255,0) 85%)",
            }}
          />

          {/* Content - Responsive positioning and sizing */}
          <div className="relative z-10 flex items-center min-h-[400px] md:min-h-[520px] lg:min-h-[580px] py-8 md:py-12 lg:py-16 px-4 sm:px-8 lg:px-16">
            <div className="max-w-lg">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1]">
                healthcare for
                <br />
                hair, skin, balance,
                <br />
                and beyond.
              </h2>
              <p className="text-gray-500 mb-6 md:mb-8 text-sm md:text-lg max-w-md">
                Discover Oval&apos;s modern approach to wellness, where frosted
                clarity meets quiet confidence.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-lg text-sm md:text-base touch-target"
              >
                Give it a TRY
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================================
   FAQ SECTION
   Accordion with frequently asked questions
============================================================================ */

/**
 * FAQ Section
 * "Your questions, answered" with expandable accordion items
 * Uses /trx/faqs.png for the side image (orange product collection)
 */
function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Oval?",
      answer:
        "Oval is a healthcare platform that provides prescription treatments for hair, skin, sexual wellness, hormones, weight care, and more. Instead of buying products directly, you start with a membership and a personalized health review.",
    },
    {
      question: "How does the membership work?",
      answer:
        "Choose a membership plan that fits your needs, complete your health assessment, and get matched with the right prescription treatments—all from the comfort of your home.",
    },
    {
      question: "Do I need a prescription?",
      answer:
        "Yes, all treatments require a prescription from a licensed healthcare provider. Your health quiz allows our doctors to evaluate your needs and prescribe appropriate treatment.",
    },
    {
      question: "How does the health quiz work?",
      answer:
        "The health quiz takes just a few minutes to complete. You'll answer questions about your health history, current medications, and treatment goals. A licensed provider reviews your responses.",
    },
    {
      question: "Are Oval's products safe?",
      answer:
        "Yes, all medications are FDA-approved and dispensed by licensed pharmacies. Our providers are board-certified physicians who ensure every treatment is appropriate for you.",
    },
    {
      question: "Is delivery discreet?",
      answer:
        "Absolutely. All packages are shipped in plain, unmarked boxes with no indication of the contents inside. Your privacy is our priority.",
    },
    {
      question: "Can I cancel my membership?",
      answer:
        "Yes, you can cancel your membership at any time. There are no long-term contracts or hidden cancellation fees.",
    },
    {
      question: "Who are the providers?",
      answer:
        "Our providers are licensed, board-certified physicians and nurse practitioners with extensive experience in telemedicine and personalized healthcare.",
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-[#232323]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: Title first, then accordion, image hidden */}
        {/* Desktop: Side by side with image */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left - FAQ Image with product collection and floating title - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block relative aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden"
          >
            <Image
              src="/images/oval/trx/faqs.png"
              alt="OVAL product collection"
              fill
              className="object-cover"
            />
            {/* Floating title overlay in top left */}
            <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight drop-shadow-lg">
                Your questions,
                <br />
                answered
              </h2>
            </div>
            {/* Subtle gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Right - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2 md:space-y-3"
          >
            {/* Mobile title - Only visible on mobile */}
            <h2 className="lg:hidden text-2xl md:text-3xl font-bold text-white leading-tight mb-6">
              Your questions, answered
            </h2>
            
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between py-4 md:py-5 text-left hover:text-orange-500 transition-colors touch-target"
                >
                  <span className="font-semibold text-white pr-4 text-sm md:text-base">
                    {faq.question}
                  </span>
                  <span className="text-xl md:text-2xl text-gray-500 flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    {openFAQ === index ? "–" : "+"}
                  </span>
                </button>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="pb-4 md:pb-5 text-gray-400 leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   FOOTER
   Orange CTA banner, newsletter signup, and copyright
============================================================================ */

/**
 * Footer Component (Responsive)
 * Contains orange CTA banner, newsletter signup, and legal links
 * 
 * Responsive Features:
 * - Responsive padding and spacing
 * - Touch-friendly form inputs and buttons
 * - Safe area padding for mobile bottom navigation
 */
function PageFooter() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-gray-950 text-white pb-16 md:pb-0">
      {/* Orange CTA Banner - Floating card */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Your Health.
              <br />
              Your Membership.
            </h2>
            <p className="text-white/90 mt-3 md:mt-4 max-w-md text-sm md:text-base">
              One membership. Personalized care, prescriptions, and expert
              support—made simple.
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex items-center px-5 md:px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap text-sm md:text-base touch-target"
          >
            Log in to Your Account
          </Link>
        </motion.div>
      </div>

      {/* Newsletter Section - Centered */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-center">
        <h3 className="text-lg md:text-xl font-bold text-white">Stay Informed.</h3>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Get updates, offers, and wellness insights from Oval Care.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 mt-5 md:mt-6 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="flex-1 px-4 md:px-5 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm md:text-base touch-target"
          />
          <button
            type="submit"
            className="px-5 md:px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors text-sm md:text-base touch-target"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Bottom Bar - Copyright and Legal Links */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-gray-500 text-xs md:text-sm">
            © {new Date().getFullYear()} Oval Care. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-xs md:text-sm">
            <Link
              href="#"
              className="text-gray-500 hover:text-white transition-colors py-1"
            >
              Terms & Conditions
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-white transition-colors py-1"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-white transition-colors py-1"
            >
              HIPAA Notice
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-white transition-colors py-1"
            >
              Returns & Refunds
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================================
   MAIN PAGE EXPORT
   Combines all sections into the complete OvalCare landing page
============================================================================ */

/* ============================================================================
   STACKED SECTIONS - Full-page scroll reveal effect
   Each major section stacks and reveals as user scrolls
============================================================================ */

/**
 * StackedSection Component - Rolodex Effect with Scroll Snap & Margin Animation
 * 
 * Creates a rolodex/card-flip scrollytelling effect where:
 * - Each section takes up the FULL viewport height using 100dvh (mobile-safe)
 * - Sections are sticky and stack on top of each other
 * - New sections slide up and completely cover previous ones
 * - Like flipping through cards in a rolodex
 * - CSS scroll-snap provides a brief "sticky" moment at each section
 * 
 * Scroll-Linked Margin Animation:
 * - As sections scroll into view, they start with side margins (8-16px)
 * - The margin reduces exponentially as the section approaches the snap point
 * - Creates a satisfying "card sliding in and expanding" effect
 * - Uses cubic-bezier easing for exponential curve feel
 * 
 * Scroll Snap Behavior:
 * - snap-start: Aligns section top to viewport top when snapping
 * - snap-stop: Forces scroll to stop at this section (creates page-like feel)
 * - Combined with parent's snap-scroll-y proximity, creates natural "click into place"
 * 
 * Responsive Features:
 * - Uses CSS custom property --section-radius for responsive border radius
 * - Mobile: 8px margin, Desktop: 16px margin (scales with viewport)
 * - Uses 100dvh for mobile-safe viewport height (handles address bar)
 * - Responsive shadows (lighter on mobile, dramatic on desktop)
 * - Touch-optimized scrolling within sections
 */
interface StackedSectionProps {
  children: React.ReactNode;
  index: number;
  bgColor?: string;
  id?: string;
}

function StackedSection({ children, index, bgColor = "bg-white", id }: StackedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [maxMargin, setMaxMargin] = useState(16);
  
  /**
   * Responsive margin sizing based on viewport width.
   * - Mobile (<640px): 8px margin for tighter fit
   * - Tablet (640-1024px): 12px margin
   * - Desktop (>1024px): 16px margin for more dramatic effect
   * 
   * Updates on resize to maintain responsive behavior.
   */
  useEffect(() => {
    const updateMargin = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 640) {
        setMaxMargin(8);
      } else if (window.innerWidth < 1024) {
        setMaxMargin(12);
      } else {
        setMaxMargin(16);
      }
    };
    
    updateMargin();
    window.addEventListener('resize', updateMargin);
    return () => window.removeEventListener('resize', updateMargin);
  }, []);
  
  /**
   * Track this section's scroll progress relative to the viewport.
   * - offset: ["start end", "start start"] means:
   *   - 0 = section's start is at viewport's end (section just appeared at bottom)
   *   - 1 = section's start is at viewport's start (section is fully snapped/docked)
   */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });
  
  /**
   * Transform scroll progress to horizontal margin using exponential easing.
   * 
   * The input range [0, 0.7, 0.9, 1] creates an exponential-like curve where:
   * - Most of the scroll (0 to 0.7): margin stays mostly full
   * - Final 30% of scroll (0.7 to 1): margin drops rapidly to 0
   * 
   * This creates the "snap into place" feel where the card expands
   * quickly right as it reaches the snap point.
   * 
   * Output values are scaled based on maxMargin (responsive).
   */
  const horizontalMargin = useTransform(
    scrollYProgress,
    [0, 0.7, 0.9, 1],
    [maxMargin, maxMargin * 0.875, maxMargin * 0.375, 0]
  );
  
  /**
   * Transform scroll progress to border radius.
   * Starts at full radius (from CSS variable ~20-40px) and reduces slightly
   * as the section docks into place, creating a "flush edges" effect.
   * 
   * Values: 20px → 20px → 16px as section scrolls to snap point
   * The reduction is subtle (4px) for a polished but not jarring effect.
   */
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.9, 1],
    [20, 20, 16] // Pixel values that work well across breakpoints
  );
  
  /**
   * Create CSS border-radius template string from MotionValue.
   * useMotionTemplate allows MotionValues to be interpolated into CSS strings.
   * Only top corners get radius (bottom is flush with next section).
   */
  const borderRadiusTemplate = useMotionTemplate`${borderRadius}px ${borderRadius}px 0 0`;

  return (
    <div
      ref={sectionRef}
      id={id}
      className="sticky top-0 h-[calc(100dvh-60px)] md:h-screen-safe snap-start snap-stop"
      style={{
        // Higher index = higher z-index (new sections go OVER old ones)
        zIndex: index + 10,
      }}
    >
      {/* Animated inner container that handles the margin and appearance */}
      <motion.div
        className={`${bgColor} h-full overflow-hidden relative`}
        style={{
          marginLeft: horizontalMargin,
          marginRight: horizontalMargin,
          borderRadius: borderRadiusTemplate,
          // Apply shadow for depth (matches .stacked-section from CSS but animated)
          boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.08), 0 -2px 8px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* Top edge highlight for card definition - subtle on mobile, more visible on desktop */}
        <div 
          className="absolute top-0 left-0 right-0 h-[1px] md:h-[2px] bg-gradient-to-r from-transparent via-white/60 md:via-white/80 to-transparent pointer-events-none"
          style={{ zIndex: 1 }}
        />
        {/* Content container - scrollable if content overflows
            Responsive padding: smaller on mobile for more content space */}
        <div className="h-full overflow-y-auto py-4 md:py-6">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

/* ============================================================================
   SECTION INDICATOR COMPONENT
   Visual dots on right side showing current section position
============================================================================ */

/**
 * Section names for the indicator tooltips
 * Maps to the 10 stacked sections in order
 */
/**
 * Section data for the indicator - includes name and ID for navigation
 */
const sections = [
  { name: "Prescription Care", id: "prescription-care", bgColor: "bg-white", cssColor: "#ffffff" },
  { name: "Why Choose Oval", id: "why-choose-oval", bgColor: "bg-gray-50", cssColor: "#f9fafb" },
  { name: "Membership", id: "membership", bgColor: "bg-gradient-to-r from-orange-50 via-orange-100 to-orange-50", cssColor: "#ffedd5" },
  { name: "Solutions", id: "solutions", bgColor: "bg-white", cssColor: "#ffffff" },
  { name: "Treatments", id: "treatments", bgColor: "bg-gray-50", cssColor: "#f9fafb" },
  { name: "How It Works", id: "how-it-works", bgColor: "bg-white", cssColor: "#ffffff" },
  { name: "Trust", id: "trust", bgColor: "bg-gray-50", cssColor: "#f9fafb" },
  { name: "Results", id: "results", bgColor: "bg-white", cssColor: "#ffffff" },
  { name: "CTA", id: "cta", bgColor: "bg-white", cssColor: "#ffffff" },
  { name: "FAQ", id: "faq", bgColor: "bg-[#232323]", cssColor: "#232323" },
];

/* ============================================================================
   MOBILE CARD STACK PREVIEW COMPONENT
   Visual deck-of-cards effect showing previous/upcoming sections on mobile
============================================================================ */

/**
 * CardStackPreview Component - Mobile Only
 * 
 * Creates a visual "deck of cards" effect on mobile showing:
 * - Previous sections peeking at the top (tucked under navbar)
 * - Upcoming sections peeking at the bottom
 * 
 * Key behaviors:
 * - Only visible after hero section is scrolled past
 * - Top stack has lower z-index than navbar (cards tuck UNDER it)
 * - Shows max 3 cards in each direction
 * - Each card peek is 8px tall with 4px cascade offset
 * - Smooth transitions when active section changes
 */
interface CardStackPreviewProps {
  position: "top" | "bottom";
  activeSection: number;
  isPastHero: boolean;
}

function CardStackPreview({ position, activeSection, isPastHero }: CardStackPreviewProps) {
  /**
   * Calculate which card indices to show in this stack.
   * - Top stack: shows sections BEFORE active (max 3)
   * - Bottom stack: shows sections AFTER active (max 3)
   */
  const getVisibleCards = () => {
    if (position === "top") {
      // Previous sections (show up to 3, closest to active first)
      const start = Math.max(0, activeSection - 3);
      const cards = [];
      for (let i = activeSection - 1; i >= start; i--) {
        cards.push(i);
      }
      return cards; // e.g., [2, 1, 0] if active is 3
    } else {
      // Upcoming sections (show up to 3, closest to active first)
      const end = Math.min(sections.length - 1, activeSection + 3);
      const cards = [];
      for (let i = activeSection + 1; i <= end; i++) {
        cards.push(i);
      }
      return cards; // e.g., [4, 5, 6] if active is 3
    }
  };

  const visibleCards = getVisibleCards();
  
  // Don't render if no cards to show or not past hero
  if (visibleCards.length === 0) return null;

  /**
   * Card peek dimensions and offsets:
   * - Each card shows 8px of its edge
   * - Cards cascade with 4px offset creating depth
   * - Scale reduces slightly for cards further back (0.98, 0.96, 0.94)
   */
  const cardHeight = 10; // px - height of each peek
  const cardOffset = 6;  // px - cascade offset between cards
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isPastHero ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={`md:hidden fixed left-0 right-0 pointer-events-none ${
        position === "top" 
          ? "top-14 z-[90]"  // Below navbar (z-100), tucks under it
          : "bottom-0 z-[150]" // Above sections
      }`}
      aria-hidden="true"
    >
      <div className="relative mx-2">
        {visibleCards.map((sectionIndex, stackIndex) => {
          // Stack index 0 = closest to active section
          const depth = stackIndex;
          const scale = 1 - (depth * 0.02); // 1.0, 0.98, 0.96
          
          // Calculate position offset based on stack position
          const offset = position === "top"
            ? depth * cardOffset  // Cards cascade downward from navbar
            : depth * cardOffset; // Cards cascade upward from bottom
          
          return (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: position === "top" ? -20 : 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale,
              }}
              transition={{ 
                duration: 0.3, 
                delay: depth * 0.05,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="absolute left-0 right-0 rounded-xl overflow-hidden"
              style={{
                height: cardHeight,
                backgroundColor: sections[sectionIndex].cssColor,
                [position === "top" ? "top" : "bottom"]: offset,
                zIndex: 10 - depth, // Closer cards have higher z-index
                boxShadow: position === "top"
                  ? `0 2px 8px rgba(0, 0, 0, ${0.08 - depth * 0.02})`
                  : `0 -2px 8px rgba(0, 0, 0, ${0.08 - depth * 0.02})`,
                // Match section border radius style
                borderTopLeftRadius: position === "bottom" ? "12px" : "0",
                borderTopRightRadius: position === "bottom" ? "12px" : "0",
                borderBottomLeftRadius: position === "top" ? "12px" : "0",
                borderBottomRightRadius: position === "top" ? "12px" : "0",
              }}
            >
              {/* Subtle edge highlight for definition */}
              <div 
                className={`absolute left-0 right-0 h-[1px] ${
                  position === "top" ? "bottom-0" : "top-0"
                } bg-gradient-to-r from-transparent via-black/5 to-transparent`}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

/**
 * SectionIndicator Component (Responsive)
 * 
 * Fixed position navigation dots showing current section in view.
 * 
 * Responsive Behavior:
 * - Hidden on mobile (< 768px) to avoid clutter and overlap
 * - On tablet+: Vertical dots on right side with hover tooltips
 * - Touch-friendly tap targets (min 44px hit area)
 * - Accessible with proper ARIA labels
 */
function SectionIndicator({ activeSection }: { activeSection: number }) {
  /**
   * Scroll to a specific section when dot is clicked
   * Uses dvh-aware calculation for mobile viewport compatibility.
   * On mobile, uses document.documentElement.clientHeight which is more reliable.
   */
  const scrollToSection = (index: number) => {
    // Use clientHeight which respects actual visible viewport on mobile
    const viewportHeight = document.documentElement.clientHeight || window.innerHeight;
    // Hero is full viewport, each section is full viewport
    // We scroll to the start of the target section
    const targetScroll = viewportHeight + (index * viewportHeight);
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* Desktop/Tablet: Vertical indicator on right side - hidden on mobile */}
      <nav 
        className="hidden md:flex fixed right-4 lg:right-8 xl:right-12 top-1/2 -translate-y-1/2 z-[200] flex-col items-end gap-2 lg:gap-3"
        aria-label="Page sections"
      >
        {sections.map((section, index) => (
          <div key={section.id} className="group relative flex items-center">
            {/* Tooltip on hover with arrow - only visible on desktop */}
            <div className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden lg:block">
              {section.name}
              {/* Arrow pointing right */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-900" />
            </div>
            {/* Indicator dot - larger touch target with 44px minimum */}
            <motion.button
              onClick={() => scrollToSection(index)}
              className="touch-target flex items-center justify-center cursor-pointer"
              aria-label={`Go to ${section.name} section`}
              aria-current={activeSection === index ? "true" : undefined}
            >
              <motion.div
                className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                  activeSection === index
                    ? "bg-orange-500"
                    : "bg-gray-400/60 hover:bg-gray-400/80"
                }`}
                animate={{
                  scale: activeSection === index ? 1.4 : 1,
                }}
                whileHover={{ scale: 1.5 }}
                style={{
                  boxShadow: activeSection === index 
                    ? "0 0 12px rgba(249, 115, 22, 0.6)" 
                    : "0 1px 3px rgba(0,0,0,0.3)"
                }}
              />
            </motion.button>
          </div>
        ))}
      </nav>
    </>
  );
}

/**
 * OvalCare Landing Page - Home
 * Main page component with stacked sections scroll effect
 * 
 * Major sections are wrapped in StackedSection to create a card stack
 * effect where each section slides up and stacks as you scroll.
 * 
 * Visual Design:
 * - Dark base background creates depth when cards scale down
 * - Alternating section colors create visual rhythm
 * - Rounded corners and shadows enhance card illusion
 * 
 * Scroll Snap Behavior:
 * - Uses CSS scroll-snap-type: y proximity for a subtle "sticky" feel
 * - Sections snap into place when user slows/stops scrolling near them
 * - Creates satisfying page-like transitions without being jarring
 * 
 * Performance:
 * - All animations use GPU-accelerated transforms
 * - will-change hints optimize browser rendering
 */
export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [isPastHero, setIsPastHero] = useState(false);
  const sectionsRef = useRef<HTMLDivElement>(null);

  /**
   * Scroll tracking effect
   * Calculates which section is currently in view based on scroll position
   * Each section is 100vh tall, so we divide scroll position by viewport height
   * Also tracks when user has scrolled past the hero section for card stack visibility
   */
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionsRef.current) return;
      
      // Get the top position of the stacked sections container
      const containerTop = sectionsRef.current.offsetTop;
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Calculate how far we've scrolled into the stacked sections
      const scrollIntoSections = scrollY - containerTop + viewportHeight;
      
      // Each section is 100vh, so divide by viewport height to get section index
      const sectionIndex = Math.floor(scrollIntoSections / viewportHeight);
      
      // Clamp to valid section range (0-9)
      const clampedIndex = Math.max(0, Math.min(9, sectionIndex));
      
      setActiveSection(clampedIndex);
      
      // Track when hero has been scrolled past (80% threshold for smooth transition)
      // This controls visibility of the mobile card stack previews
      setIsPastHero(scrollY > viewportHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#111827] snap-scroll-y">
      <Navbar />
      
      {/* Section Indicator - Desktop: Fixed dots on right side */}
      <SectionIndicator activeSection={activeSection} />
      
      {/* Mobile Card Stack Previews - Replaces dot indicator on mobile
          Shows visual deck of cards effect with previous/upcoming sections */}
      <CardStackPreview position="top" activeSection={activeSection} isPastHero={isPastHero} />
      <CardStackPreview position="bottom" activeSection={activeSection} isPastHero={isPastHero} />
      
      {/* Hero - Not stacked, serves as the visual base layer */}
      <HeroSection />
      
      {/* Rolodex Stacked Sections Container
          Each section is 100vh tall and stacks like a rolodex
          As you scroll, new sections slide up and cover the sticky hero */}
      <div ref={sectionsRef} className="relative">
        {/* Section 1: Prescription Care Categories */}
        <StackedSection index={0} bgColor="bg-white" id="prescription-care">
          <PrescriptionCareSection />
        </StackedSection>

        {/* Section 2: Why Choose Oval - Value proposition */}
        <StackedSection index={1} bgColor="bg-gray-50" id="why-choose-oval">
          <WhyChooseOvalSection />
        </StackedSection>

        {/* Section 3: Membership Journey - Orange gradient accent */}
        <StackedSection index={2} bgColor="bg-gradient-to-r from-orange-50 via-orange-100 to-orange-50" id="membership">
          <MembershipJourneySection />
        </StackedSection>

        {/* Section 4: Doctor-trusted Solutions Grid */}
        <StackedSection index={3} bgColor="bg-white" id="solutions">
          <DoctorTrustedSolutionsSection />
        </StackedSection>

        {/* Section 5: Personalized Treatments Carousel */}
        <StackedSection index={4} bgColor="bg-gray-50" id="treatments">
          <PersonalizedTreatmentsSection />
        </StackedSection>

        {/* Section 6: How It Works - 3 Step Process */}
        <StackedSection index={5} bgColor="bg-white" id="how-it-works">
          <HowItWorksSection />
        </StackedSection>

        {/* Section 7: Healthcare Trust Badges */}
        <StackedSection index={6} bgColor="bg-gray-50" id="trust">
          <HealthcareTrustSection />
        </StackedSection>

        {/* Section 8: Real Results Gallery */}
        <StackedSection index={7} bgColor="bg-white" id="results">
          <RealResultsSection />
        </StackedSection>

        {/* Section 9: Secondary CTA */}
        <StackedSection index={8} bgColor="bg-white" id="cta">
          <SecondaryCTASection />
        </StackedSection>

        {/* Section 10: FAQ - Dark theme */}
        <StackedSection index={9} bgColor="bg-[#232323]" id="faq">
          <FAQSection />
        </StackedSection>

        {/* Footer - Not in stacking system, just positioned at end
            Still gets snap-start for smooth transition from last section */}
        <div className="relative z-[100] bg-[#111827] snap-start">
          <PageFooter />
        </div>
      </div>
    </main>
  );
}