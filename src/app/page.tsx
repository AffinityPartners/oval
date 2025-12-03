"use client";

import { Hero } from "@/components/sections/Hero";
import { PlanComparison } from "@/components/sections/PlanComparison";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { MedicationCarousel } from "@/components/sections/MedicationCarousel";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { DecorativePills } from "@/components/ui/decorative-pills";

/**
 * OVAL Premium Landing Page
 * 
 * A single-page marketing site showcasing OVAL One and OVAL Plus healthcare plans.
 * Built for American Online Benefits in partnership with OvalCare (https://ovalcare.com).
 * 
 * Design Philosophy:
 * - Professional and subtle (not flashy or over-animated)
 * - Follows OvalCare's clean, minimal aesthetic
 * - Premium touches: glassmorphic cards, scroll animations, bento grid layouts
 * - NO full-screen heroes per user requirement
 * 
 * Sections:
 * 1. Hero - Compact intro with logo, value prop, dual CTAs
 * 2. PlanComparison - Side-by-side OVAL One vs OVAL Plus cards
 * 3. BentoGrid - Benefits showcase in Apple-style asymmetric layout
 * 4. MedicationCarousel - Horizontal scrolling medication categories
 * 5. HowItWorks - 4-step onboarding process
 * 6. TrustBadges - Credibility indicators and key stats
 * 7. FinalCTA - Closing call-to-action with plan cards
 * 8. Footer - Links, contact, copyright
 * 
 * Technical Notes:
 * - Uses Framer Motion for scroll-triggered animations (built into AnimatedSection)
 * - CSS-based decorative pills for visual interest without Three.js overhead
 * - All animations are subtle and professional
 * - Fully responsive design across all breakpoints
 */

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with decorative element */}
      <div className="relative">
        <Hero />
        {/* CSS Floating Pills - subtle decorative accent */}
        <div className="hidden lg:block absolute top-20 right-10 w-48 h-48 opacity-70">
          <DecorativePills />
        </div>
      </div>

      {/* Plan Comparison - Core conversion section */}
      <PlanComparison />

      {/* Benefits Bento Grid - Why choose OVAL */}
      <BentoGrid />

      {/* Medication Categories Carousel */}
      <MedicationCarousel />

      {/* How It Works - Onboarding process */}
      <HowItWorks />

      {/* Trust Badges & Stats */}
      <TrustBadges />

      {/* Final Call-to-Action */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
