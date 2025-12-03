"use client";

import { motion } from "framer-motion";
import { 
  UserPlus, 
  ClipboardList, 
  Stethoscope, 
  Package,
  ArrowRight
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

/**
 * HowItWorks Section - 4-step visual flow showing the OVAL onboarding process.
 * 
 * Steps derived from the fulfillment documentation:
 * 1. Create your account
 * 2. Complete medical assessment  
 * 3. Provider review (within 8 hours)
 * 4. Medication delivered discreetly
 * 
 * Features numbered badges, connecting lines, and staggered animations
 * for an engaging, easy-to-understand process visualization.
 */

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  highlight?: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Create Your Account",
    description: "Sign up in minutes with basic information. Your data is encrypted and HIPAA-protected from day one.",
    icon: <UserPlus className="w-6 h-6" />,
  },
  {
    number: 2,
    title: "Complete Assessment",
    description: "Answer questions about your health history and treatment goals. Takes about 10-15 minutes.",
    icon: <ClipboardList className="w-6 h-6" />,
  },
  {
    number: 3,
    title: "Provider Review",
    description: "A board-certified physician reviews your case and approves your personalized treatment plan.",
    icon: <Stethoscope className="w-6 h-6" />,
    highlight: "Within 8 hours",
  },
  {
    number: 4,
    title: "Delivered to You",
    description: "Your medication ships free in discreet packaging. No pharmacy visits, no awkward conversations.",
    icon: <Package className="w-6 h-6" />,
    highlight: "Free shipping",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-oval-charcoal mb-4">
            How It Works
          </h2>
          <p className="text-lg text-oval-gray max-w-2xl mx-auto">
            Getting started with OVAL is simple, secure, and completely online. 
            No office visits required.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <StaggerContainer className="grid md:grid-cols-4 gap-8 md:gap-4 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-oval-peach via-oval-orange/30 to-oval-peach" />

            {steps.map((step, index) => (
              <StaggerItem key={step.number} className="relative">
                <motion.div
                  className="flex flex-col items-center text-center"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Step Number Badge */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-oval-peach flex items-center justify-center relative z-10">
                      <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <span className="text-oval-orange">{step.icon}</span>
                      </div>
                    </div>
                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-oval-orange text-white font-bold text-sm flex items-center justify-center shadow-orange-glow z-20">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <h3 className="text-lg font-bold text-oval-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-oval-gray leading-relaxed mb-2">
                    {step.description}
                  </p>
                  
                  {/* Highlight Badge */}
                  {step.highlight && (
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">
                      {step.highlight}
                    </span>
                  )}

                  {/* Mobile Arrow */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden mt-6 text-oval-orange/40">
                      <ArrowRight className="w-6 h-6 rotate-90" />
                    </div>
                  )}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.5} className="text-center mt-12">
          <p className="text-oval-gray">
            Questions? Our support team is available{" "}
            <span className="font-semibold text-oval-charcoal">24/7</span> to help you get started.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

