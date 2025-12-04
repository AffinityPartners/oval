---
name: OVAL Premium Landing Page
overview: ""
todos:
  - id: fed7d531-28b2-4318-9f60-1b902a4e0fe7
    content: Configure OVAL brand colors in globals.css and tailwind.config.ts
    status: pending
  - id: 8dc3b9b4-5b98-465e-9e76-70c572b840df
    content: Install three.js, @react-three/fiber, @react-three/drei, gsap packages
    status: pending
  - id: 19f1c1ea-e71a-495b-a285-458e228d286e
    content: Copy logos and select marketing images to public/images/
    status: pending
  - id: cb47c16e-c230-470b-8b55-d149c5ef3dd5
    content: Build compact Hero section with logo, tagline, and dual CTAs
    status: pending
  - id: ea8f9410-f7b8-4f62-819d-614663c2f645
    content: Build glassmorphic PlanComparison cards for OVAL One and Plus
    status: pending
  - id: 17ae96a8-09fb-4755-a96c-1b56e8dbd05c
    content: Build BentoGrid benefits section with mixed media cards
    status: pending
  - id: 69c82fc8-b548-4210-a4f2-412199d42d2b
    content: Build MedicationCarousel for category showcase
    status: pending
  - id: ad1c54e2-f938-46b4-8d14-23f3eb4d1c7c
    content: Build HowItWorks 4-step process section
    status: pending
  - id: 8e7a1a01-a2a7-4f03-95a2-de19bc147016
    content: Build TrustBadges and stats section
    status: pending
  - id: d4eeb3f1-c892-462d-9d4c-86738aec9fd3
    content: Build FinalCTA section with dual plan buttons
    status: pending
  - id: 4d36de5d-d110-43c5-907e-bdd43b588c7c
    content: Build Footer with links and copyright
    status: pending
  - id: a3e548a0-55af-4388-baa0-47f3e25caf5e
    content: Add scroll-triggered animations with Framer Motion and GSAP
    status: pending
  - id: 9c3bcd57-889c-4aaa-b342-544ea841fe7c
    content: Add subtle FloatingPill 3D element as decorative accent
    status: pending
  - id: efbb56fc-1051-4b10-b822-6c6747fd20c1
    content: Ensure full mobile responsiveness across all sections
    status: pending
---

# OVAL Premium Landing Page

## Design Direction

Following OvalCare's clean, professional aesthetic with subtle premium elevations:

- **NO full-screen heroes** - refined, compact hero section with OVAL logo and value proposition
- **Brand Colors**: Primary Orange (#E77027), Dark Charcoal (#282828), Light Peach (#fff5ef), White
- **Visual Enhancements**: Subtle glassmorphic cards, soft shadows, refined bento grids, scroll-triggered fade-ins
- **Typography**: Clean sans-serif (keep Lato from brand guidelines)

## Technical Approach

### 1. Install Required Packages

```bash
npm install @react-three/fiber @react-three/drei three gsap
```

- `three/@react-three` for a subtle floating 3D pill element (decorative, not dominant)
- `gsap` for smooth scroll-triggered animations

### 2. Configure Brand Theme

Update [`src/app/globals.css`](src/app/globals.css) with OVAL brand colors as CSS variables:

- `--oval-orange: 24 79% 52%` (HSL for #E77027)
- `--oval-charcoal: 0 0% 16%` (#282828)
- `--oval-peach: 24 100% 97%` (#fff5ef)

### 3. Page Structure (Single Scrolling Page)

**Section 1: Hero (Compact)**

- OVAL logo (from [`E123/Marketing/Logos & Fonts/Oval Logo Final/OVAL.svg`](E123/Marketing/Logos & Fonts/Oval Logo Final/OVAL.svg)(E123/Marketing/Logos & Fonts/Oval Logo Final/OVAL.svg)(E123/Marketing/Logos & Fonts/Oval Logo Final/OVAL.svg)(E123/Marketing/Logos & Fonts/Oval Logo Final/OVAL.svg))
- Tagline: "Wholesale Pricing on High-Demand Wellness Medications"
- Brief value proposition
- Two CTAs: "Explore OVAL One" / "Explore OVAL Plus"
- Subtle floating 3D pill element (decorative accent, small scale)

**Section 2: Plan Comparison Cards**

- Side-by-side glassmorphic cards for OVAL One and OVAL Plus
- Product logos (from [`E123/logos/`](E123/logos/))
- Key differentiators with icon badges
- Highlight: "Up to 80% discount" / "Up to 50% on GLP-1"
- Subtle hover animations

**Section 3: Benefits Bento Grid**

- Apple-style asymmetric grid layout
- Cards featuring: AI Personalization, 24/7 Support, Free Shipping, Licensed Providers, FDA-Regulated
- Use marketing images from [`E123/Marketing/Images/`](E123/Marketing/Images/)
- Mix of image cards and text cards with glassmorphic styling

**Section 4: Medication Categories**

- Horizontal scrolling carousel (embla-carousel already installed)
- Categories: Sexual Health, Hair Loss, Mental Wellness, Weight Management, Women's Health, Dermatology
- Each card shows category name + representative image

**Section 5: How It Works**

- 4-step visual flow with numbered badges
- Steps from fulfillment pages: Register -> Complete Assessment -> Provider Review -> Delivered

**Section 6: Trust & Credibility**

- Trust badges row: FDA-regulated, Licensed Providers, HIPAA Compliant, Discreet Shipping
- Stats: "50+ states", "24/7 support", "80% savings"

**Section 7: Final CTA**

- Dual CTA cards for OVAL One and OVAL Plus
- Orange gradient buttons
- Soft peach background

**Section 8: Footer**

- OVAL logo
- Links: Privacy, Terms, Contact
- Copyright

### 4. Key Components to Create

| Component | Location | Purpose |

|-----------|----------|---------|

| `Hero` | `src/components/sections/Hero.tsx` | Compact hero with logo, tagline, CTAs |

| `PlanComparison` | `src/components/sections/PlanComparison.tsx` | Side-by-side plan cards |

| `BentoGrid` | `src/components/sections/BentoGrid.tsx` | Benefits showcase |

| `MedicationCarousel` | `src/components/sections/MedicationCarousel.tsx` | Category slider |

| `HowItWorks` | `src/components/sections/HowItWorks.tsx` | Process steps |

| `TrustBadges` | `src/components/sections/TrustBadges.tsx` | Credibility indicators |

| `FinalCTA` | `src/components/sections/FinalCTA.tsx` | Closing call-to-action |

| `GlassCard` | `src/components/ui/glass-card.tsx` | Reusable glassmorphic card |

| `AnimatedSection` | `src/components/ui/animated-section.tsx` | Scroll-triggered wrapper |

| `FloatingPill` | `src/components/3d/FloatingPill.tsx` | Subtle 3D decorative element |

### 5. Asset Setup

Copy key marketing images to `public/images/`:

- Select 8-10 best lifestyle images from `E123/Marketing/Images/`
- Copy logos: OVAL main, OVAL ONE, OVAL PLUS
- Optimize for web (compress PNGs)

### 6. Animation Strategy

- **Framer Motion**: Section fade-in on scroll, card hover states
- **GSAP ScrollTrigger**: Parallax effects on bento grid, staggered reveals
- **CSS**: Glassmorphic blur, subtle gradients, smooth transitions
- All animations subtle and professional - no flashy effects

### 7. Mobile Responsiveness

- Stack plan cards vertically on mobile
- Bento grid collapses to single column
- Carousel touch-friendly
- All touch targets 44px minimum