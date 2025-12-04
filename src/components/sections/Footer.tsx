"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * Footer Section - Site footer with OVAL branding, links, and copyright.
 * 
 * Features:
 * - OVAL main logo
 * - Navigation links (Privacy, Terms, Contact)
 * - Copyright notice
 * - Clean, minimal design matching OvalCare's aesthetic
 */

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Contact Us", href: "/contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-oval-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <Image
              src="/images/logos/oval-main.png"
              alt="OVAL"
              width={100}
              height={30}
              className="h-8 w-auto brightness-0 invert mb-3"
            />
            <p className="text-sm text-gray-400 text-center md:text-left">
              Modern healthcare, reimagined.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="text-sm text-gray-400">
              Support: <a href="tel:13059390168" className="text-oval-orange hover:underline">1-305-939-0168</a>
            </p>
            <p className="text-sm text-gray-400 mt-1">
              <a href="https://ovalcare.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                ovalcare.com
              </a>
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xs text-gray-500 text-center md:text-left"
          >
            © {currentYear} American Online Benefits. All rights reserved.
          </motion.p>

          {/* Compliance Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-xs text-gray-500"
          >
            <span>HIPAA Compliant</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>FDA-Regulated</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>Licensed Providers</span>
          </motion.div>
        </div>

        {/* Legal Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-[10px] text-gray-600 text-center mt-6 max-w-3xl mx-auto leading-relaxed"
        >
          OVAL is a telemedicine platform connecting patients with licensed healthcare providers. 
          All medical decisions are made by board-certified physicians. Medication availability 
          and eligibility determined by provider evaluation. Not all treatments are available 
          in all states. This is not a substitute for emergency medical care.
        </motion.p>
      </div>
    </footer>
  );
}

