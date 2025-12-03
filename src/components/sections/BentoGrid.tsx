"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Clock, 
  Truck, 
  Shield, 
  Stethoscope, 
  Lock,
  Bot,
  HeartPulse
} from "lucide-react";
import { GlassCard, GlassCardIcon } from "@/components/ui/glass-card";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

/**
 * BentoGrid Section - Apple-style asymmetric grid showcasing OVAL benefits.
 * 
 * Features a mix of image cards and text/icon cards in a visually
 * interesting bento box layout. Highlights key platform benefits like
 * AI personalization, 24/7 support, free shipping, licensed providers, etc.
 * 
 * Layout:
 * - Large featured card (AI personalization) with image
 * - Medium cards for key features
 * - Small icon cards for additional benefits
 */

interface BentoItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  size: "large" | "medium" | "small";
  accent?: boolean;
}

const bentoItems: BentoItem[] = [
  {
    id: "ai-personalization",
    title: "AI-Powered Personalization",
    description: "Smart algorithms analyze your health profile to recommend optimal treatments and track your progress over time.",
    icon: <Bot className="w-6 h-6" />,
    image: "/images/marketing/mobile-app.png",
    size: "large",
    accent: true,
  },
  {
    id: "licensed-providers",
    title: "Board-Certified Providers",
    description: "Every consultation is with a licensed, specialized physician who understands your unique health needs.",
    icon: <Stethoscope className="w-6 h-6" />,
    image: "/images/marketing/doctors.png",
    size: "medium",
  },
  {
    id: "support-247",
    title: "24/7 Support",
    description: "Access care whenever you need it. Message your provider or support team any time, day or night.",
    icon: <Clock className="w-6 h-6" />,
    size: "small",
  },
  {
    id: "free-shipping",
    title: "Free Discreet Shipping",
    description: "All medications delivered to your door in unmarked packaging at no extra cost.",
    icon: <Truck className="w-6 h-6" />,
    size: "small",
  },
  {
    id: "fda-regulated",
    title: "FDA-Regulated",
    description: "All medications sourced from FDA-regulated pharmacies meeting the highest quality standards.",
    icon: <Shield className="w-6 h-6" />,
    size: "small",
  },
  {
    id: "hipaa-compliant",
    title: "HIPAA Compliant",
    description: "Your health information is protected with enterprise-grade encryption and strict privacy protocols.",
    icon: <Lock className="w-6 h-6" />,
    size: "small",
  },
  {
    id: "wellness",
    title: "Holistic Wellness",
    description: "From weight management to mental health, we address your complete wellbeing with comprehensive care.",
    icon: <HeartPulse className="w-6 h-6" />,
    image: "/images/marketing/lifestyle-group.png",
    size: "medium",
  },
];

export function BentoGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-oval-peach/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-oval-charcoal mb-4">
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
                className="h-full relative overflow-hidden group" 
                padding="none"
                variant="peach"
              >
                <div className="absolute inset-0">
                  <Image
                    src={bentoItems[0].image!}
                    alt={bentoItems[0].title}
                    fill
                    className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  />
                </div>
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <GlassCardIcon className="mb-4 bg-oval-orange text-white">
                    {bentoItems[0].icon}
                  </GlassCardIcon>
                  <h3 className="text-2xl font-bold text-oval-charcoal mb-2">
                    {bentoItems[0].title}
                  </h3>
                  <p className="text-oval-gray">
                    {bentoItems[0].description}
                  </p>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Medium Card - Licensed Providers */}
            <AnimatedSection 
              className="md:col-span-2 lg:col-span-2 lg:row-span-1"
              delay={0.1}
            >
              <GlassCard className="h-full relative overflow-hidden group" padding="none">
                <div className="absolute inset-0">
                  <Image
                    src={bentoItems[1].image!}
                    alt={bentoItems[1].title}
                    fill
                    className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/60" />
                </div>
                <div className="relative h-full p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <GlassCardIcon className="bg-emerald-100 text-emerald-600">
                      {bentoItems[1].icon}
                    </GlassCardIcon>
                    <h3 className="text-xl font-bold text-oval-charcoal">
                      {bentoItems[1].title}
                    </h3>
                  </div>
                  <p className="text-sm text-oval-gray max-w-sm">
                    {bentoItems[1].description}
                  </p>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Small Cards - Support, Shipping, FDA, HIPAA */}
            {bentoItems.slice(2, 6).map((item, index) => (
              <AnimatedSection key={item.id} delay={0.15 + index * 0.05}>
                <GlassCard className="h-full flex flex-col" padding="md">
                  <GlassCardIcon className="mb-3">
                    {item.icon}
                  </GlassCardIcon>
                  <h3 className="text-base font-bold text-oval-charcoal mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-oval-gray leading-relaxed">
                    {item.description}
                  </p>
                </GlassCard>
              </AnimatedSection>
            ))}

            {/* Medium Card - Wellness */}
            <AnimatedSection 
              className="md:col-span-2 lg:col-span-2"
              delay={0.35}
            >
              <GlassCard className="h-full relative overflow-hidden group" padding="none">
                <div className="absolute inset-0">
                  <Image
                    src={bentoItems[6].image!}
                    alt={bentoItems[6].title}
                    fill
                    className="object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-transparent" />
                </div>
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-2">
                    <GlassCardIcon className="bg-rose-100 text-rose-500">
                      {bentoItems[6].icon}
                    </GlassCardIcon>
                    <h3 className="text-xl font-bold text-oval-charcoal">
                      {bentoItems[6].title}
                    </h3>
                  </div>
                  <p className="text-sm text-oval-gray max-w-md">
                    {bentoItems[6].description}
                  </p>
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

