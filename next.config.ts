import type { NextConfig } from "next";

/**
 * Next.js Configuration
 * 
 * Production optimizations for mobile performance:
 * - Image optimization with proper device sizes
 * - Compression enabled
 * - Font optimization via next/font
 * - Static generation where possible
 */
const nextConfig: NextConfig = {
  /**
   * Image optimization configuration.
   * Defines breakpoints for responsive images and supported formats.
   * WebP and AVIF provide better compression than JPEG/PNG.
   */
  images: {
    // Device sizes for responsive images (matches common mobile/tablet/desktop widths)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Icon sizes for smaller images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Modern formats for better compression
    formats: ["image/avif", "image/webp"],
    // Allow external image domains (add Vimeo if needed)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.vimeocdn.com",
      },
    ],
  },
  
  /**
   * Experimental features for additional performance.
   * Note: optimizeCss requires 'critters' package and may not be stable.
   * Disabled by default - enable only if you install critters: npm i critters
   */
  // experimental: {
  //   optimizeCss: true,
  // },
  
  /**
   * Compiler options for production builds.
   * Removes console.log statements and React DevTools in production.
   */
  compiler: {
    // Remove console.* calls in production (except error and warn)
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ["error", "warn"],
    } : false,
  },
  
  /**
   * Headers configuration for caching and security.
   * Adds performance-focused headers to responses.
   */
  async headers() {
    return [
      {
        // Cache static assets aggressively
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache fonts
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
