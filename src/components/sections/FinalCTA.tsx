"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedSection } from "@/components/ui/animated-section";

/**
 * FinalCTA Section - Closing call-to-action with dual plan cards.
 * 
 * Provides a final opportunity for visitors to choose between OVAL One
 * and OVAL Plus with clear value propositions and prominent CTAs.
 * 
 * Features:
 * - Soft peach gradient background
 * - Side-by-side plan cards
 * - Orange gradient buttons
 * - Key differentiators highlighted
 */

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-oval-peach">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-oval-charcoal mb-4">
            Ready to Take Control?
          </h2>
          <p className="text-lg text-oval-gray max-w-2xl mx-auto">
            Join thousands who have discovered a better way to access healthcare. 
            Choose the plan that fits your needs.
          </p>
        </AnimatedSection>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* OVAL One Card */}
          <AnimatedSection delay={0.1} direction="left">
            <GlassCard className="h-full bg-white/90" padding="lg" hover={true}>
              <div className="flex flex-col h-full">
                {/* Logo */}
                <Image
                  src="/images/logos/oval-one.svg"
                  alt="OVAL One"
                  width={140}
                  height={20}
                  className="h-5 w-auto mb-4"
                />

                {/* Tagline */}
                <p className="text-sm text-oval-orange font-medium mb-2">
                  Comprehensive Specialty Access
                </p>

                {/* Value Prop */}
                <h3 className="text-2xl font-bold text-oval-charcoal mb-3">
                  Up to 80% Savings
                </h3>
                <p className="text-oval-gray text-sm mb-6 flex-grow">
                  Access oral medications for ED, hair loss, mental health, 
                  weight management, and more at exclusive member pricing.
                </p>

                {/* Key Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 text-xs bg-oval-peach text-oval-charcoal rounded-full">
                    ED Treatment
                  </span>
                  <span className="px-3 py-1 text-xs bg-oval-peach text-oval-charcoal rounded-full">
                    Hair Loss
                  </span>
                  <span className="px-3 py-1 text-xs bg-oval-peach text-oval-charcoal rounded-full">
                    Mental Health
                  </span>
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  className="w-full py-6 text-base font-semibold rounded-xl bg-oval-charcoal text-white hover:bg-oval-charcoal/90 transition-all duration-300"
                >
                  <Link href="#oval-one">
                    Get Started with OVAL One
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </GlassCard>
          </AnimatedSection>

          {/* OVAL Plus Card */}
          <AnimatedSection delay={0.2} direction="right">
            <GlassCard 
              className="h-full bg-gradient-to-br from-oval-peach to-white border-oval-orange/30 relative overflow-visible" 
              padding="lg" 
              hover={true}
            >
              {/* Popular Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold bg-oval-orange text-white rounded-full shadow-orange-glow">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  Recommended
                </span>
              </div>

              <div className="flex flex-col h-full pt-2">
                {/* Logo */}
                <Image
                  src="/images/logos/oval-plus.svg"
                  alt="OVAL Plus"
                  width={140}
                  height={20}
                  className="h-5 w-auto mb-4"
                />

                {/* Tagline */}
                <p className="text-sm text-oval-orange font-medium mb-2">
                  Premium VIP Healthcare
                </p>

                {/* Value Prop */}
                <h3 className="text-2xl font-bold text-oval-charcoal mb-3">
                  GLP-1 Injectables + Concierge
                </h3>
                <p className="text-oval-gray text-sm mb-6 flex-grow">
                  Everything in OVAL One plus FDA-approved weight loss injections, 
                  dedicated health coordinator, and priority service.
                </p>

                {/* Key Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 text-xs bg-oval-orange/10 text-oval-orange rounded-full font-medium">
                    Wegovy & Ozempic
                  </span>
                  <span className="px-3 py-1 text-xs bg-oval-orange/10 text-oval-orange rounded-full font-medium">
                    VIP Concierge
                  </span>
                  <span className="px-3 py-1 text-xs bg-oval-orange/10 text-oval-orange rounded-full font-medium">
                    Priority Service
                  </span>
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  className="w-full py-6 text-base font-semibold rounded-xl btn-orange-gradient transition-all duration-300"
                >
                  <Link href="#oval-plus">
                    Get Started with OVAL Plus
                    <Sparkles className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>

        {/* Support Note */}
        <AnimatedSection delay={0.3} className="text-center mt-10">
          <p className="text-sm text-oval-gray">
            Not sure which plan is right for you?{" "}
            <a href="#" className="text-oval-orange font-medium hover:underline">
              Talk to our team
            </a>{" "}
            — we&apos;re here to help.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

