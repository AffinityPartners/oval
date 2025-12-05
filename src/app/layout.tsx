import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

/**
 * Primary font for the OVAL brand.
 * Lato is clean, modern, and highly readable - matching the brand guidelines.
 * Using display: swap for better performance (shows fallback font immediately).
 */
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

/**
 * Site-wide metadata for SEO and social sharing.
 * This applies to all pages unless overridden at the page level.
 * Icons configuration ensures the OVAL logo appears as the favicon across all browsers.
 */
export const metadata: Metadata = {
  title: "OVAL",
  description: "OVAL Healthcare Membership Platform",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

/**
 * Viewport configuration for proper mobile support.
 * viewport-fit=cover enables safe area insets for notched devices (iPhone X+)
 * allowing content to extend into the notch/home indicator areas while
 * respecting the env(safe-area-inset-*) CSS values.
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

/**
 * Root layout component that wraps all pages.
 * Provides consistent font configuration and base styling across the application.
 * 
 * Performance Optimizations:
 * - Preconnect to Vimeo CDN for faster video loading
 * - DNS prefetch for Google Fonts
 * - Font display swap to prevent FOIT (Flash of Invisible Text)
 * 
 * @param children - The page content to render within the layout
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Vimeo CDN for faster video loading
            Establishes early connection to reduce latency when videos load */}
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://i.vimeocdn.com" />
        <link rel="preconnect" href="https://f.vimeocdn.com" />
        
      </head>
      <body
        className={`${lato.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
