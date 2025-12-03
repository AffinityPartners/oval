"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Stethoscope, 
  Lock, 
  Truck,
  MapPin,
  Clock,
  BadgePercent
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

/**
 * TrustBadges Section - Credibility indicators and key statistics.
 * 
 * Displays trust badges for:
 * - FDA-regulated pharmacies
 * - Licensed providers
 * - HIPAA compliance
 * - Discreet shipping
 * 
 * Also shows key statistics:
 * - 50+ states coverage
 * - 24/7 support
 * - Up to 80% savings
 */

interface TrustBadge {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const badges: TrustBadge[] = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "FDA-Regulated",
    description: "All medications from licensed, FDA-regulated pharmacies",
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "Licensed Providers",
    description: "Board-certified physicians in every specialty",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "HIPAA Compliant",
    description: "Enterprise-grade encryption protects your data",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Discreet Delivery",
    description: "Unmarked packaging for complete privacy",
  },
];

const stats: Stat[] = [
  {
    value: "50+",
    label: "States Covered",
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    value: "24/7",
    label: "Provider Support",
    icon: <Clock className="w-5 h-5" />,
  },
  {
    value: "80%",
    label: "Savings on Meds",
    icon: <BadgePercent className="w-5 h-5" />,
  },
];

export function TrustBadges() {
  return (
    <section className="py-16 bg-gradient-to-b from-oval-peach/30 to-white">
      <div className="container mx-auto px-4">
        {/* Trust Badges */}
        <AnimatedSection className="mb-16">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {badges.map((badge, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="flex flex-col items-center text-center p-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center mb-3 text-oval-orange">
                    {badge.icon}
                  </div>
                  <h3 className="text-sm font-bold text-oval-charcoal mb-1">
                    {badge.title}
                  </h3>
                  <p className="text-xs text-oval-gray leading-relaxed">
                    {badge.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>

        {/* Divider */}
        <div className="section-divider max-w-2xl mx-auto mb-16" />

        {/* Stats */}
        <AnimatedSection>
          <StaggerContainer className="flex flex-wrap justify-center gap-12 md:gap-20">
            {stats.map((stat, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-oval-orange">{stat.icon}</span>
                    <span className="text-4xl md:text-5xl font-bold text-oval-charcoal">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-sm text-oval-gray font-medium">{stat.label}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>
      </div>
    </section>
  );
}

