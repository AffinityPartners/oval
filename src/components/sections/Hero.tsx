"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextReveal } from "@/components/ui/text-reveal";
import { ArrowRight } from "lucide-react";

/**
 * Hero Section - Compact, professional hero for the OVAL landing page.
 * 
 * Features the OVAL logo, a compelling headline about wholesale medication pricing,
 * a brief value proposition, and dual CTAs for OVAL One and OVAL Plus.
 * 
 * Design follows OvalCare's clean aesthetic with subtle premium touches:
 * - No full-screen hero (per user requirement)
 * - Soft peach gradient background with grain texture
 * - Smooth fade-in animations on load
 * - Animated stat counters for engagement
 * - Professional, healthcare-focused messaging
 * - Split layout with lifestyle image on larger screens
 */

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-oval-peach via-white to-white grain-overlay">
      {/* Subtle decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-oval-orange/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-oval-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-16 md:py-24 z-10">
        {/* Split layout: text left, image right on larger screens */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left column: Text content */}
          <div className="text-center lg:text-left">
            {/* OVAL Logo */}
            <AnimatedSection delay={0} direction="down">
              <div className="flex justify-center lg:justify-start mb-8">
              <Image
                src="/images/logos/oval-main.png"
                alt="OVAL - Modern Healthcare Platform"
                width={160}
                height={48}
                className="h-12 w-auto"
                priority
              />
            </div>
          </AnimatedSection>

          {/* Main Headline - Uses Inter Tight display font with text reveal animation */}
          <div className="mb-6">
            <h1 className="section-title text-balance">
              <TextReveal delay={0.2} stagger={0.1}>
                Wholesale Pricing on
              </TextReveal>{" "}
              <span className="text-oval-orange">
                <TextReveal delay={0.5} stagger={0.08}>
                  High-Demand
                </TextReveal>
              </span>{" "}
              <br className="hidden sm:block" />
              <TextReveal delay={0.8} stagger={0.1}>
                Wellness Medications
              </TextReveal>
            </h1>
          </div>

            {/* Value Proposition */}
            <AnimatedSection delay={0.2} direction="up">
              <p className="text-lg md:text-xl text-oval-gray max-w-2xl mx-auto lg:mx-0 mb-4 font-sans">
              Access FDA-regulated medications for weight management, sexual health, 
              mental wellness, and more — delivered discreetly to your door.
            </p>
          </AnimatedSection>

            {/* Key Stats with Animated Counters */}
            <AnimatedSection delay={0.3} direction="up">
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10 mb-10">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-oval-orange font-sans">
                  <AnimatedCounter from={0} to={80} prefix="Up to " suffix="%" duration={2} />
                </div>
                <div className="text-sm text-oval-gray">Savings on Medications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-oval-charcoal font-sans">
                  <AnimatedCounter from={0} to={50} suffix=" States" duration={1.8} />
                </div>
                <div className="text-sm text-oval-gray">Coverage Nationwide</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-oval-charcoal font-sans">
                  24/7
                </div>
                <div className="text-sm text-oval-gray">Provider Support</div>
              </div>
            </div>
          </AnimatedSection>

            {/* Dual CTAs with Magnetic Effect */}
            <AnimatedSection delay={0.4} direction="up">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <MagneticButton strength={0.2}>
                <Button
                  asChild
                  size="lg"
                  className="btn-orange-gradient px-8 py-6 text-base font-semibold rounded-xl min-w-[200px] transition-all duration-300"
                >
                  <Link href="#oval-one">
                    Explore OVAL One
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.2} shimmer={false}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-base font-semibold rounded-xl min-w-[200px] border-2 border-oval-charcoal text-oval-charcoal hover:bg-oval-charcoal hover:text-white transition-all duration-300"
                >
                  <Link href="#oval-plus">
                    Explore OVAL Plus
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </AnimatedSection>

            {/* Trust indicator */}
            <AnimatedSection delay={0.5} direction="up">
              <motion.div 
                className="mt-10 flex items-center justify-center lg:justify-start gap-2 text-sm text-oval-gray"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Licensed providers • FDA-regulated pharmacies • HIPAA compliant</span>
              </motion.div>
            </AnimatedSection>
          </div>

          {/* Right column: Lifestyle image - shows couple relaxing at home */}
          <AnimatedSection delay={0.3} direction="right" className="hidden lg:block">
            <div className="relative">
              {/* Decorative background blob for depth */}
              <div className="absolute -inset-4 bg-gradient-to-br from-oval-orange/10 to-oval-peach rounded-[2rem] blur-xl" />
              
              {/* Main image container with rounded corners and subtle shadow */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/images/marketing/couple-couch-home-cozy.png"
                  alt="Couple relaxing at home - healthcare delivered to your door"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Subtle gradient overlay for polish */}
                <div className="absolute inset-0 bg-gradient-to-t from-oval-charcoal/10 via-transparent to-transparent" />
              </motion.div>

              {/* Floating badge accent */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-oval-charcoal">Delivered to your door</p>
                    <p className="text-xs text-oval-gray">Free discreet shipping</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

