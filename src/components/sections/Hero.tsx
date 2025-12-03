"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ArrowRight } from "lucide-react";

/**
 * Hero Section - Compact, professional hero for the OVAL landing page.
 * 
 * Features the OVAL logo, a compelling headline about wholesale medication pricing,
 * a brief value proposition, and dual CTAs for OVAL One and OVAL Plus.
 * 
 * Design follows OvalCare's clean aesthetic with subtle premium touches:
 * - No full-screen hero (per user requirement)
 * - Soft peach gradient background
 * - Smooth fade-in animations on load
 * - Professional, healthcare-focused messaging
 */

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-oval-peach via-white to-white">
      {/* Subtle decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-oval-orange/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-oval-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* OVAL Logo */}
          <AnimatedSection delay={0} direction="down">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/logos/oval-main.svg"
                alt="OVAL - Modern Healthcare Platform"
                width={160}
                height={48}
                className="h-12 w-auto"
                priority
              />
            </div>
          </AnimatedSection>

          {/* Main Headline */}
          <AnimatedSection delay={0.1} direction="up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-oval-charcoal leading-tight mb-6">
              Wholesale Pricing on{" "}
              <span className="text-oval-orange">High-Demand</span>{" "}
              <br className="hidden sm:block" />
              Wellness Medications
            </h1>
          </AnimatedSection>

          {/* Value Proposition */}
          <AnimatedSection delay={0.2} direction="up">
            <p className="text-lg md:text-xl text-oval-gray max-w-2xl mx-auto mb-4">
              Access FDA-regulated medications for weight management, sexual health, 
              mental wellness, and more — delivered discreetly to your door.
            </p>
          </AnimatedSection>

          {/* Key Stats */}
          <AnimatedSection delay={0.3} direction="up">
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-oval-orange">Up to 80%</div>
                <div className="text-sm text-oval-gray">Savings on Medications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-oval-charcoal">50 States</div>
                <div className="text-sm text-oval-gray">Coverage Nationwide</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-oval-charcoal">24/7</div>
                <div className="text-sm text-oval-gray">Provider Support</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Dual CTAs */}
          <AnimatedSection delay={0.4} direction="up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
            </div>
          </AnimatedSection>

          {/* Trust indicator */}
          <AnimatedSection delay={0.5} direction="up">
            <motion.div 
              className="mt-10 flex items-center justify-center gap-2 text-sm text-oval-gray"
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
      </div>
    </section>
  );
}

