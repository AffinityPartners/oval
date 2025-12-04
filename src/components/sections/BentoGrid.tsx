"use client";

import { 
  Clock, 
  Truck, 
  Shield, 
  Stethoscope, 
  Lock,
  Bot,
  HeartPulse,
  BadgeCheck
} from "lucide-react";
import { GlassCard, GlassCardIcon } from "@/components/ui/glass-card";
import { AnimatedSection } from "@/components/ui/animated-section";

/**
 * BentoGrid Section - Apple-style asymmetric grid showcasing OVAL benefits.
 * 
 * Features a dual-hero layout with two prominent 2x2 feature cards:
 * - AI Personalization (orange theme)
 * - Holistic Wellness (rose theme)
 * 
 * Supporting cards include:
 * - Board-Certified Providers (emerald theme, medium)
 * - 24/7 Support (sky theme, medium with tags)
 * - Trust Strip (combined FDA, HIPAA, Shipping badges)
 * 
 * Layout Structure (4-column grid):
 * Row 1-2: [AI Personalization 2x2] [Providers 2x1]
 *                                   [24/7 Support 2x1]
 * Row 3-4: [Holistic Wellness 2x2]  [Trust Strip 2x1]
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

        {/* Bento Grid - Dual Hero Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
            
            {/* ===== HERO CARD 1: AI Personalization (2x2) ===== */}
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
                  {/* AI feature tags - showcasing smart capabilities */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs bg-oval-orange/10 text-oval-orange rounded-full">Smart Recommendations</span>
                    <span className="px-3 py-1 text-xs bg-oval-orange/10 text-oval-orange rounded-full">Progress Tracking</span>
                    <span className="px-3 py-1 text-xs bg-oval-orange/10 text-oval-orange rounded-full">Health Insights</span>
                    <span className="px-3 py-1 text-xs bg-oval-orange/10 text-oval-orange rounded-full">Treatment Matching</span>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* ===== MEDIUM CARD: Board-Certified Providers (2x1) ===== */}
            <AnimatedSection 
              className="md:col-span-2 lg:col-span-2"
              delay={0.1}
            >
              <GlassCard className="h-full" padding="md">
                <div className="h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-3">
                    <GlassCardIcon className="bg-emerald-100 text-emerald-600 w-12 h-12 flex-shrink-0">
                      <Stethoscope className="w-6 h-6" />
                    </GlassCardIcon>
                    <h3 className="text-xl font-bold text-oval-charcoal">
                      {bentoItems[1].title}
                    </h3>
                  </div>
                  <p className="text-sm text-oval-gray mb-3">
                    {bentoItems[1].description}
                  </p>
                  {/* Provider credential tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="px-2.5 py-1 text-[11px] bg-emerald-100 text-emerald-700 rounded-full">Licensed MDs</span>
                    <span className="px-2.5 py-1 text-[11px] bg-emerald-100 text-emerald-700 rounded-full">Specialists</span>
                    <span className="px-2.5 py-1 text-[11px] bg-emerald-100 text-emerald-700 rounded-full">Telemedicine</span>
                    <span className="px-2.5 py-1 text-[11px] bg-emerald-100 text-emerald-700 rounded-full">Fast Response</span>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* ===== MEDIUM CARD: 24/7 Support (2x1, expanded) ===== */}
            <AnimatedSection 
              className="md:col-span-2 lg:col-span-2"
              delay={0.15}
            >
              <GlassCard className="h-full" padding="md">
                <div className="h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-3">
                    <GlassCardIcon className="bg-sky-100 text-sky-600 w-12 h-12 flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </GlassCardIcon>
                    <h3 className="text-xl font-bold text-oval-charcoal">
                      {bentoItems[2].title}
                    </h3>
                  </div>
                  <p className="text-sm text-oval-gray mb-3">
                    {bentoItems[2].description}
                  </p>
                  {/* Support feature tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="px-2.5 py-1 text-[11px] bg-sky-100 text-sky-700 rounded-full">Instant Chat</span>
                    <span className="px-2.5 py-1 text-[11px] bg-sky-100 text-sky-700 rounded-full">Provider Access</span>
                    <span className="px-2.5 py-1 text-[11px] bg-sky-100 text-sky-700 rounded-full">Emergency Help</span>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* ===== HERO CARD 2: Holistic Wellness (2x2) ===== */}
            <AnimatedSection 
              className="md:col-span-2 md:row-span-2"
              delay={0.2}
            >
              <GlassCard 
                className="h-full" 
                padding="lg"
                variant="light"
              >
                <div className="h-full flex flex-col">
                  <GlassCardIcon className="mb-4 bg-rose-500 text-white w-14 h-14">
                    <HeartPulse className="w-7 h-7" />
                  </GlassCardIcon>
                  <h3 className="text-2xl font-bold text-oval-charcoal mb-3">
                    {bentoItems[3].title}
                  </h3>
                  <p className="text-oval-gray mb-4">
                    {bentoItems[3].description}
                  </p>
                  {/* Wellness category tags - showcasing treatment areas */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs bg-rose-100 text-rose-600 rounded-full">Weight Loss</span>
                    <span className="px-3 py-1 text-xs bg-rose-100 text-rose-600 rounded-full">Mental Health</span>
                    <span className="px-3 py-1 text-xs bg-rose-100 text-rose-600 rounded-full">Sexual Health</span>
                    <span className="px-3 py-1 text-xs bg-rose-100 text-rose-600 rounded-full">Skin Care</span>
                    <span className="px-3 py-1 text-xs bg-rose-100 text-rose-600 rounded-full">Hair Loss</span>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* ===== TRUST STRIP: Combined FDA, HIPAA, Shipping (2x1) ===== */}
            <AnimatedSection 
              className="md:col-span-2 lg:col-span-2"
              delay={0.25}
            >
              <GlassCard className="h-full" padding="md" variant="light">
                <div className="h-full flex flex-col">
                  {/* Header with badge icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <GlassCardIcon className="bg-slate-100 text-slate-600 w-10 h-10 flex-shrink-0">
                      <BadgeCheck className="w-5 h-5" />
                    </GlassCardIcon>
                    <h3 className="text-lg font-bold text-oval-charcoal">
                      Trust & Compliance
                    </h3>
                  </div>
                  
                  {/* Three trust badges in a row */}
                  <div className="flex-1 grid grid-cols-3 gap-3">
                    {/* FDA Badge */}
                    <div className="flex flex-col items-center justify-center text-center p-2 bg-slate-50 rounded-xl">
                      <Shield className="w-6 h-6 text-slate-600 mb-1.5" />
                      <span className="text-xs font-semibold text-oval-charcoal">FDA-Regulated</span>
                      <span className="text-[10px] text-oval-gray leading-tight mt-0.5">Quality assured</span>
                    </div>
                    
                    {/* HIPAA Badge */}
                    <div className="flex flex-col items-center justify-center text-center p-2 bg-slate-50 rounded-xl">
                      <Lock className="w-6 h-6 text-slate-600 mb-1.5" />
                      <span className="text-xs font-semibold text-oval-charcoal">HIPAA Compliant</span>
                      <span className="text-[10px] text-oval-gray leading-tight mt-0.5">Data protected</span>
                    </div>
                    
                    {/* Free Shipping Badge */}
                    <div className="flex flex-col items-center justify-center text-center p-2 bg-slate-50 rounded-xl">
                      <Truck className="w-6 h-6 text-slate-600 mb-1.5" />
                      <span className="text-xs font-semibold text-oval-charcoal">Free Shipping</span>
                      <span className="text-[10px] text-oval-gray leading-tight mt-0.5">Discreet delivery</span>
                    </div>
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
