"use client";

import { 
  Clock, 
  Truck, 
  Shield, 
  Stethoscope, 
  Lock,
  Bot,
  HeartPulse
} from "lucide-react";
import { GlassCard, GlassCardIcon } from "@/components/ui/glass-card";
import { AnimatedSection } from "@/components/ui/animated-section";

/**
 * BentoGrid Section - Apple-style asymmetric grid showcasing OVAL benefits.
 * 
 * Features clean icon-based cards in a visually interesting bento box layout.
 * Highlights key platform benefits like AI personalization, 24/7 support,
 * free shipping, licensed providers, etc.
 * 
 * Layout:
 * - Large featured card (AI personalization) with accent tags
 * - Medium cards for key features (licensed providers, holistic wellness)
 * - Small icon cards for additional benefits
 */

interface BentoItem {
  id: string;
  title: string;
  description: string;
}

const bentoItems: BentoItem[] = [
  {
    id: "ai-personalization",
    title: "AI-Powered Personalization",
    description: "Smart algorithms analyze your health profile to recommend optimal treatments and track your progress over time.",
  },
  {
    id: "licensed-providers",
    title: "Board-Certified Providers",
    description: "Every consultation is with a licensed, specialized physician who understands your unique health needs.",
  },
  {
    id: "support-247",
    title: "24/7 Support",
    description: "Access care whenever you need it. Message your provider or support team any time, day or night.",
  },
  {
    id: "free-shipping",
    title: "Free Discreet Shipping",
    description: "All medications delivered to your door in unmarked packaging at no extra cost.",
  },
  {
    id: "fda-regulated",
    title: "FDA-Regulated",
    description: "All medications sourced from FDA-regulated pharmacies meeting the highest quality standards.",
  },
  {
    id: "hipaa-compliant",
    title: "HIPAA Compliant",
    description: "Your health information is protected with enterprise-grade encryption and strict privacy protocols.",
  },
  {
    id: "wellness",
    title: "Holistic Wellness",
    description: "From weight management to mental health, we address your complete wellbeing with comprehensive care.",
  },
];

export function BentoGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-oval-peach/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title mb-4">
            Why Choose OVAL?
          </h2>
          <p className="text-lg text-oval-gray max-w-2xl mx-auto">
            A modern healthcare platform built on trust, technology, and exceptional care.
          </p>
        </AnimatedSection>

        {/* Bento Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
            {/* Large Feature Card - AI Personalization */}
            <AnimatedSection 
              className="md:col-span-2 md:row-span-2"
              delay={0}
            >
              <GlassCard 
                className="h-full" 
                padding="lg"
                variant="peach"
              >
                <div className="h-full flex flex-col">
                  <GlassCardIcon className="mb-4 bg-oval-orange text-white w-14 h-14">
                    <Bot className="w-7 h-7" />
                  </GlassCardIcon>
                  <h3 className="text-2xl font-bold text-oval-charcoal mb-3">
                    {bentoItems[0].title}
                  </h3>
                  <p className="text-oval-gray mb-4">
                    {bentoItems[0].description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs bg-oval-orange/10 text-oval-orange rounded-full">Smart Recommendations</span>
                    <span className="px-3 py-1 text-xs bg-oval-orange/10 text-oval-orange rounded-full">Progress Tracking</span>
                    <span className="px-3 py-1 text-xs bg-oval-orange/10 text-oval-orange rounded-full">Health Insights</span>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Medium Card - Licensed Providers */}
            <AnimatedSection 
              className="md:col-span-2 lg:col-span-2 lg:row-span-1"
              delay={0.1}
            >
              <GlassCard className="h-full" padding="md">
                <div className="h-full flex items-center gap-4">
                  <GlassCardIcon className="bg-emerald-100 text-emerald-600 w-14 h-14 flex-shrink-0">
                    <Stethoscope className="w-7 h-7" />
                  </GlassCardIcon>
                  <div>
                    <h3 className="text-xl font-bold text-oval-charcoal mb-1">
                      {bentoItems[1].title}
                    </h3>
                    <p className="text-sm text-oval-gray">
                      {bentoItems[1].description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Small Card - 24/7 Support */}
            <AnimatedSection delay={0.15}>
              <GlassCard className="h-full flex flex-col" padding="md">
                <GlassCardIcon className="mb-3">
                  <Clock className="w-6 h-6" />
                </GlassCardIcon>
                <h3 className="text-base font-bold text-oval-charcoal mb-1">
                  {bentoItems[2].title}
                </h3>
                <p className="text-xs text-oval-gray leading-relaxed">
                  {bentoItems[2].description}
                </p>
              </GlassCard>
            </AnimatedSection>

            {/* Small Card - Free Shipping */}
            <AnimatedSection delay={0.2}>
              <GlassCard className="h-full flex flex-col" padding="md">
                <GlassCardIcon className="mb-3">
                  <Truck className="w-6 h-6" />
                </GlassCardIcon>
                <h3 className="text-base font-bold text-oval-charcoal mb-1">
                  {bentoItems[3].title}
                </h3>
                <p className="text-xs text-oval-gray leading-relaxed">
                  {bentoItems[3].description}
                </p>
              </GlassCard>
            </AnimatedSection>

            {/* Small Card - FDA Regulated */}
            <AnimatedSection delay={0.25}>
              <GlassCard className="h-full flex flex-col" padding="md">
                <GlassCardIcon className="mb-3">
                  <Shield className="w-6 h-6" />
                </GlassCardIcon>
                <h3 className="text-base font-bold text-oval-charcoal mb-1">
                  {bentoItems[4].title}
                </h3>
                <p className="text-xs text-oval-gray leading-relaxed">
                  {bentoItems[4].description}
                </p>
              </GlassCard>
            </AnimatedSection>

            {/* Small Card - HIPAA Compliant */}
            <AnimatedSection delay={0.3}>
              <GlassCard className="h-full flex flex-col" padding="md">
                <GlassCardIcon className="mb-3">
                  <Lock className="w-6 h-6" />
                </GlassCardIcon>
                <h3 className="text-base font-bold text-oval-charcoal mb-1">
                  {bentoItems[5].title}
                </h3>
                <p className="text-xs text-oval-gray leading-relaxed">
                  {bentoItems[5].description}
                </p>
              </GlassCard>
            </AnimatedSection>

            {/* Medium Card - Wellness */}
            <AnimatedSection 
              className="md:col-span-2 lg:col-span-2"
              delay={0.35}
            >
              <GlassCard className="h-full" padding="md">
                <div className="h-full flex items-center gap-4">
                  <GlassCardIcon className="bg-rose-100 text-rose-500 w-14 h-14 flex-shrink-0">
                    <HeartPulse className="w-7 h-7" />
                  </GlassCardIcon>
                  <div>
                    <h3 className="text-xl font-bold text-oval-charcoal mb-1">
                      {bentoItems[6].title}
                    </h3>
                    <p className="text-sm text-oval-gray">
                      {bentoItems[6].description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

