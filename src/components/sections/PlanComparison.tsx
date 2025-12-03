"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Star, Sparkles, Pill, Brain, Heart, Leaf, Users } from "lucide-react";
import { GlassCard, GlassCardHighlight } from "@/components/ui/glass-card";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

/**
 * PlanComparison Section - Side-by-side comparison of OVAL One and OVAL Plus plans.
 * 
 * Features glassmorphic cards with key differentiators, pricing highlights,
 * and medication category coverage. Uses OVAL product logos and brand styling
 * to create a premium comparison experience.
 * 
 * OVAL One: Comprehensive specialty access with up to 80% savings
 * OVAL Plus: Premium VIP tier with GLP-1 injectables + concierge service
 */

interface PlanFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

interface PlanData {
  id: string;
  name: string;
  logo: string;
  tagline: string;
  discount: string;
  discountLabel: string;
  description: string;
  features: PlanFeature[];
  categories: string[];
  ctaText: string;
  popular?: boolean;
  premium?: boolean;
}

const plans: PlanData[] = [
  {
    id: "oval-one",
    name: "OVAL One",
    logo: "/images/logos/oval-one.svg",
    tagline: "Comprehensive Specialty Access",
    discount: "Up to 80%",
    discountLabel: "Savings on Standard Therapies",
    description:
      "Exclusive access to oral medications, hair loss treatments, mental health care, and standard therapy prescriptions at member-exclusive pricing.",
    features: [
      { text: "All OVAL Access platform features", included: true },
      { text: "AI-powered personalization", included: true },
      { text: "24/7 telemedicine support", included: true },
      { text: "Free discreet shipping", included: true },
      { text: "ED medications (Sildenafil, Tadalafil)", included: true, highlight: true },
      { text: "Hair loss treatments (Finasteride, Minoxidil)", included: true, highlight: true },
      { text: "Mental health SSRIs (Lexapro, Zoloft, Prozac)", included: true, highlight: true },
      { text: "Oral weight management medications", included: true },
      { text: "Women's health & contraception", included: true },
      { text: "Dermatology (Tretinoin, custom formulas)", included: true },
      { text: "Patient Assistance Program (PAP)", included: true },
      { text: "Injectable GLP-1 medications", included: false },
      { text: "Dedicated VIP concierge", included: false },
    ],
    categories: ["Sexual Health", "Hair Loss", "Mental Health", "Weight (Oral)", "Women's Health", "Dermatology"],
    ctaText: "Get OVAL One",
  },
  {
    id: "oval-plus",
    name: "OVAL Plus",
    logo: "/images/logos/oval-plus.svg",
    tagline: "Premium VIP Healthcare",
    discount: "Up to 50%",
    discountLabel: "On GLP-1 Injectable Medications",
    description:
      "The pinnacle of modern healthcare — injectable GLP-1 medications, dedicated concierge service, and complete access to all specialty treatments.",
    features: [
      { text: "Everything in OVAL One included", included: true, highlight: true },
      { text: "Up to 80% savings on standard therapies", included: true },
      { text: "Wegovy, Ozempic, Mounjaro access", included: true, highlight: true },
      { text: "Compounded GLP-1 alternatives", included: true, highlight: true },
      { text: "Dedicated personal health coordinator", included: true, highlight: true },
      { text: "Priority prescription processing", included: true },
      { text: "Same-day response guarantee", included: true },
      { text: "Proactive refill management", included: true },
      { text: "Comprehensive weight management program", included: true },
      { text: "Nutrition & lifestyle coaching", included: true },
      { text: "Early access to new treatments", included: true },
      { text: "Patient Assistance Program (PAP)", included: true },
      { text: "White-glove VIP service", included: true, highlight: true },
    ],
    categories: ["GLP-1 Injectables", "Sexual Health", "Hair Loss", "Mental Health", "Weight Management", "Women's Health", "Dermatology", "VIP Concierge"],
    ctaText: "Get OVAL Plus",
    premium: true,
  },
];

export function PlanComparison() {
  return (
    <section id="plans" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-oval-charcoal mb-4">
            Choose Your Membership
          </h2>
          <p className="text-lg text-oval-gray max-w-2xl mx-auto">
            Two powerful tiers designed for comprehensive healthcare access. 
            Both include licensed providers, FDA-regulated pharmacies, and discreet delivery.
          </p>
        </AnimatedSection>

        {/* Plan Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection
              key={plan.id}
              delay={index * 0.15}
              direction={index === 0 ? "left" : "right"}
            >
              <GlassCard
                id={plan.id}
                className={`h-full relative ${
                  plan.premium
                    ? "border-oval-orange/40 bg-gradient-to-br from-oval-peach/90 to-white/90"
                    : "bg-white/80"
                }`}
                padding="lg"
                hover={true}
              >
                {/* Premium Badge */}
                {plan.premium && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <GlassCardHighlight variant="orange" className="flex items-center gap-1.5 px-4 py-1.5">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      Most Popular
                    </GlassCardHighlight>
                  </div>
                )}

                {/* Plan Logo */}
                <div className="mb-6 pt-2">
                  <Image
                    src={plan.logo}
                    alt={plan.name}
                    width={180}
                    height={24}
                    className="h-6 w-auto"
                  />
                </div>

                {/* Tagline */}
                <p className="text-sm font-medium text-oval-orange mb-2">{plan.tagline}</p>

                {/* Discount Highlight */}
                <div className="mb-4">
                  <span className="text-4xl font-bold text-oval-charcoal">{plan.discount}</span>
                  <span className="text-sm text-oval-gray ml-2">{plan.discountLabel}</span>
                </div>

                {/* Description */}
                <p className="text-oval-gray text-sm mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* Categories Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {plan.categories.slice(0, 5).map((category) => (
                    <span
                      key={category}
                      className="px-3 py-1 text-xs font-medium bg-oval-peach text-oval-charcoal rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                  {plan.categories.length > 5 && (
                    <span className="px-3 py-1 text-xs font-medium bg-oval-charcoal/10 text-oval-charcoal rounded-full">
                      +{plan.categories.length - 5} more
                    </span>
                  )}
                </div>

                {/* Features List */}
                <StaggerContainer className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <StaggerItem key={featureIndex}>
                      <div className="flex items-start gap-3">
                        {feature.included ? (
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                            feature.highlight ? "bg-oval-orange" : "bg-emerald-500"
                          }`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        ) : (
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="w-2 h-0.5 bg-gray-400" />
                          </div>
                        )}
                        <span
                          className={`text-sm ${
                            feature.included
                              ? feature.highlight
                                ? "text-oval-charcoal font-medium"
                                : "text-oval-gray"
                              : "text-gray-400"
                          }`}
                        >
                          {feature.text}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                {/* CTA Button */}
                <Button
                  className={`w-full py-6 text-base font-semibold rounded-xl transition-all duration-300 ${
                    plan.premium
                      ? "btn-orange-gradient"
                      : "bg-oval-charcoal text-white hover:bg-oval-charcoal/90"
                  }`}
                >
                  {plan.ctaText}
                </Button>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom Note */}
        <AnimatedSection delay={0.4} className="text-center mt-10">
          <p className="text-sm text-oval-gray">
            All plans include access to FDA-regulated pharmacies, licensed board-certified providers, 
            and HIPAA-compliant care. Medication costs are separate from membership.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

