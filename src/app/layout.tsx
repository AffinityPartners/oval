import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/**
 * Primary sans-serif font for the application.
 * Geist provides excellent readability and a modern aesthetic.
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/**
 * Monospace font for code blocks and technical content.
 */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Site-wide metadata for SEO and social sharing.
 * This applies to all pages unless overridden at the page level.
 */
export const metadata: Metadata = {
  title: "OVAL",
  description: "OVAL Healthcare Membership Platform",
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
 * @param children - The page content to render within the layout
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
