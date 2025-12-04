<!-- db241b76-19a1-47eb-a2f3-02e0d6083636 6c28cec0-74a6-4721-b551-5c4da9872890 -->
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

### To-dos

- [ ] Configure OVAL brand colors in globals.css and tailwind.config.ts
- [ ] Install three.js, @react-three/fiber, @react-three/drei, gsap packages
- [ ] Copy logos and select marketing images to public/images/
- [ ] Build compact Hero section with logo, tagline, and dual CTAs
- [ ] Build glassmorphic PlanComparison cards for OVAL One and Plus
- [ ] Build BentoGrid benefits section with mixed media cards
- [ ] Build MedicationCarousel for category showcase
- [ ] Build HowItWorks 4-step process section
- [ ] Build TrustBadges and stats section
- [ ] Build FinalCTA section with dual plan buttons
- [ ] Build Footer with links and copyright
- [ ] Add scroll-triggered animations with Framer Motion and GSAP
- [ ] Add subtle FloatingPill 3D element as decorative accent
- [ ] Ensure full mobile responsiveness across all sections