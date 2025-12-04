"use client";

import { Hero } from "@/components/sections/Hero";
import { PlanComparison } from "@/components/sections/PlanComparison";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { MedicationCarousel } from "@/components/sections/MedicationCarousel";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { WaveDivider, CurvedDivider } from "@/components/ui/wave-divider";

/**
 * OVAL Premium Landing Page (Legacy)
 * 
 * This is the original landing page now accessible at /oval.
 * The new scrollytelling landing page is now the home page.
 * 
 * A single-page marketing site showcasing OVAL One and OVAL Plus healthcare plans.
 * Built for American Online Benefits in partnership with OvalCare (https://ovalcare.com).
 * 
 * Design Philosophy:
 * - Professional and subtle (not flashy or over-animated)
 * - Follows OvalCare's clean, minimal aesthetic
 * - Premium touches: glassmorphic cards, scroll animations, bento grid layouts
 * - Organic wave dividers for smooth section transitions
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
 * - Wave dividers create organic transitions between sections
 * - All animations are subtle and professional
 * - Fully responsive design across all breakpoints
 */

export default function OvalLegacyPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Plan Comparison - Core conversion section */}
      <PlanComparison />

      {/* Wave transition to Bento Grid (peach-tinted background) */}
      <WaveDivider 
        variant="gentle" 
        fillColor="hsl(24 100% 97% / 0.3)" 
        height={60}
      />

      {/* Benefits Bento Grid - Why choose OVAL */}
      <BentoGrid />

      {/* Curved transition to dark Carousel section */}
      <CurvedDivider 
        fillColor="#282828" 
        height={50}
      />

      {/* Medication Categories Carousel */}
      <MedicationCarousel />

      {/* Wave transition back to light (How It Works) */}
      <WaveDivider 
        variant="medium" 
        fillColor="white" 
        flip={true}
        height={60}
      />

      {/* How It Works - Onboarding process */}
      <HowItWorks />

      {/* Trust Badges & Stats */}
      <TrustBadges />

      {/* Gentle wave transition to Final CTA */}
      <WaveDivider 
        variant="gentle" 
        fillColor="hsl(24 100% 97%)" 
        height={50}
      />

      {/* Final Call-to-Action */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
