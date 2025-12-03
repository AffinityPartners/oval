"use client";

import { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { 
  Heart, 
  Sparkles, 
  Brain, 
  Scale, 
  Users, 
  Leaf,
  Syringe,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

/**
 * MedicationCarousel Section - Horizontal scrolling showcase of medication categories.
 * 
 * Displays the various healthcare categories available through OVAL:
 * - GLP-1 Weight Loss (OVAL Plus exclusive)
 * - Sexual Health
 * - Hair Loss
 * - Mental Wellness
 * - Women's Health
 * - Dermatology
 * 
 * Uses Embla Carousel for smooth touch-friendly scrolling with
 * navigation arrows for desktop users.
 */

interface MedicationCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  medications: string[];
  tier: "one" | "plus" | "both";
  color: string;
}

const categories: MedicationCategory[] = [
  {
    id: "glp1",
    name: "GLP-1 Weight Loss",
    description: "FDA-approved injectable medications for significant, sustainable weight loss.",
    icon: <Syringe className="w-6 h-6" />,
    medications: ["Wegovy", "Ozempic", "Mounjaro", "Tirzepatide", "Compounded Options"],
    tier: "plus",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "sexual-health",
    name: "Sexual Health",
    description: "Confidential ED treatment and performance solutions with discreet delivery.",
    icon: <Heart className="w-6 h-6" />,
    medications: ["Sildenafil", "Tadalafil", "Brand Cialis", "Sertraline", "Propranolol"],
    tier: "both",
    color: "from-rose-500 to-rose-600",
  },
  {
    id: "hair-loss",
    name: "Hair Restoration",
    description: "Evidence-based treatments to prevent hair loss and promote regrowth.",
    icon: <Sparkles className="w-6 h-6" />,
    medications: ["Finasteride", "Minoxidil", "Biotin", "Custom Topicals"],
    tier: "both",
    color: "from-amber-500 to-amber-600",
  },
  {
    id: "mental-health",
    name: "Mental Wellness",
    description: "Stigma-free psychiatric care for anxiety, depression, and more.",
    icon: <Brain className="w-6 h-6" />,
    medications: ["Lexapro", "Zoloft", "Prozac", "Celexa", "Propranolol"],
    tier: "both",
    color: "from-violet-500 to-violet-600",
  },
  {
    id: "weight-oral",
    name: "Weight Management",
    description: "Oral medications to support your weight loss journey.",
    icon: <Scale className="w-6 h-6" />,
    medications: ["Metformin", "Bupropion", "Topiramate", "Vitamin B12"],
    tier: "both",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    id: "womens-health",
    name: "Women's Health",
    description: "Comprehensive reproductive health and contraception services.",
    icon: <Users className="w-6 h-6" />,
    medications: ["Oral Contraceptives", "Sprintec", "Plan B", "PCOS Treatment"],
    tier: "both",
    color: "from-pink-500 to-pink-600",
  },
  {
    id: "dermatology",
    name: "Dermatology",
    description: "Prescription-strength skin care for acne, anti-aging, and more.",
    icon: <Leaf className="w-6 h-6" />,
    medications: ["Tretinoin", "Custom Formulas", "Anti-Aging", "Acne Treatment"],
    tier: "both",
    color: "from-teal-500 to-teal-600",
  },
];

export function MedicationCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-20 bg-oval-charcoal overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Treatment Categories
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Access specialized care across multiple health categories, 
            all from one convenient platform.
          </p>
        </AnimatedSection>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <div className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
          <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollNext}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  className="flex-none w-[280px] md:w-[320px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="group h-full">
                    <GlassCard 
                      className="h-full bg-white/5 border-white/10 hover:bg-white/10 transition-colors duration-300" 
                      padding="lg"
                      variant="dark"
                    >
                      {/* Category Icon with gradient background */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                        <span className="text-white">{category.icon}</span>
                      </div>

                      {/* Tier Badge */}
                      {category.tier === "plus" && (
                        <span className="inline-block px-2 py-0.5 text-[10px] font-semibold bg-oval-orange text-white rounded-full mb-3">
                          OVAL Plus Exclusive
                        </span>
                      )}

                      {/* Category Name */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-oval-orange transition-colors">
                        {category.name}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                        {category.description}
                      </p>

                      {/* Medications List */}
                      <div className="flex flex-wrap gap-1.5">
                        {category.medications.slice(0, 4).map((med) => (
                          <span
                            key={med}
                            className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded"
                          >
                            {med}
                          </span>
                        ))}
                        {category.medications.length > 4 && (
                          <span className="px-2 py-1 text-xs bg-oval-orange/20 text-oval-orange rounded">
                            +more
                          </span>
                        )}
                      </div>
                    </GlassCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile scroll indicator */}
          <div className="flex justify-center mt-6 md:hidden">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <ChevronLeft className="w-4 h-4" />
              <span>Swipe to explore</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

