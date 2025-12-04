"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
 * Uses react-multi-carousel for smooth, infinite scrolling with:
 * - Responsive breakpoints for different screen sizes
 * - Autoplay with pause on hover
 * - Custom navigation arrows
 * - Smooth CSS transitions
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

/**
 * Responsive breakpoint configuration for the carousel.
 * Shows different number of items based on screen width.
 */
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1536 },
    items: 4,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1536, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

/**
 * Custom arrow components for carousel navigation.
 * Styled to match the dark theme with glassmorphic effect.
 */
interface ArrowProps {
  onClick?: () => void;
}

const CustomLeftArrow = ({ onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110"
    aria-label="Previous slide"
  >
    <ChevronLeft className="w-6 h-6" />
  </button>
);

const CustomRightArrow = ({ onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110"
    aria-label="Next slide"
  >
    <ChevronRight className="w-6 h-6" />
  </button>
);

/**
 * Custom dot component for carousel pagination.
 * Orange active state matches OVAL brand.
 */
interface DotProps {
  onClick?: () => void;
  active?: boolean;
}

const CustomDot = ({ onClick, active }: DotProps) => (
  <button
    onClick={onClick}
    className={`w-2.5 h-2.5 rounded-full mx-1 transition-all duration-300 ${
      active 
        ? "bg-oval-orange w-6" 
        : "bg-white/30 hover:bg-white/50"
    }`}
    aria-label="Go to slide"
  />
);

export function MedicationCarousel() {
  return (
    <section className="py-20 bg-oval-charcoal overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="section-title !text-white mb-4">
            Treatment Categories
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-sans">
            Access specialized care across multiple health categories, 
            all from one convenient platform.
          </p>
        </AnimatedSection>

        {/* Carousel Container */}
        <div className="relative px-4 md:px-12">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["mobile"]}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            showDots={true}
            dotListClass="!relative !mt-8"
            customDot={<CustomDot />}
            itemClass="px-2"
            pauseOnHover={true}
          >
            {categories.map((category) => (
              <div key={category.id} className="h-full pb-4">
                <div className="group h-full">
                  <GlassCard 
                    className="h-full bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 min-h-[320px]" 
                    padding="lg"
                    variant="dark"
                    hover={false}
                  >
                    {/* Category Icon with gradient background */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                      <span className="text-white">{category.icon}</span>
                    </div>

                    {/* Tier Badge */}
                    {category.tier === "plus" && (
                      <span className="inline-block px-2.5 py-1 text-[10px] font-semibold bg-oval-orange text-white rounded-full mb-3">
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
                    <div className="flex flex-wrap gap-1.5 mt-auto">
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
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
