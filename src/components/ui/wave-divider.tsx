"use client";

/**
 * WaveDivider - Organic SVG wave divider for section transitions.
 * 
 * Creates smooth, organic wave shapes to transition between sections
 * instead of harsh straight lines. Adds visual flow and premium feel.
 * 
 * Features:
 * - Multiple wave variants (gentle, medium, dramatic)
 * - Configurable colors for top/bottom sections
 * - Flip option for inverted waves
 * - Responsive scaling
 * 
 * @param variant - Wave shape: 'gentle', 'medium', 'dramatic', 'layered'
 * @param fillColor - Color of the wave fill (the bottom section color)
 * @param flip - Flip the wave vertically (default: false)
 * @param className - Additional CSS classes
 */

interface WaveDividerProps {
  variant?: "gentle" | "medium" | "dramatic" | "layered";
  fillColor?: string;
  flip?: boolean;
  className?: string;
  height?: number;
}

export function WaveDivider({
  variant = "gentle",
  fillColor = "white",
  flip = false,
  className = "",
  height = 80,
}: WaveDividerProps) {
  /**
   * Returns the SVG path data for each wave variant.
   * Paths are designed to tile horizontally seamlessly.
   */
  const getWavePath = () => {
    switch (variant) {
      case "gentle":
        return "M0,64 C320,96 640,32 960,64 C1280,96 1440,48 1440,48 L1440,128 L0,128 Z";
      case "medium":
        return "M0,80 C180,110 360,20 540,60 C720,100 900,30 1080,70 C1260,110 1440,40 1440,40 L1440,128 L0,128 Z";
      case "dramatic":
        return "M0,96 C120,128 240,0 360,64 C480,128 600,0 720,64 C840,128 960,0 1080,64 C1200,128 1320,32 1440,64 L1440,128 L0,128 Z";
      case "layered":
        // For layered, we return multiple paths
        return "";
      default:
        return "M0,64 C320,96 640,32 960,64 C1280,96 1440,48 1440,48 L1440,128 L0,128 Z";
    }
  };

  const transform = flip ? "scale(1, -1)" : "";
  const viewBox = flip ? "0 -128 1440 128" : "0 0 1440 128";

  // Layered variant gets special handling with multiple overlapping waves
  if (variant === "layered") {
    return (
      <div
        className={`w-full overflow-hidden ${className}`}
        style={{ height, marginTop: flip ? 0 : -1, marginBottom: flip ? -1 : 0 }}
      >
        <svg
          viewBox={viewBox}
          preserveAspectRatio="none"
          className="w-full h-full"
          style={{ transform }}
        >
          {/* Back layer - lighter/more transparent */}
          <path
            d="M0,80 C360,120 720,20 1080,80 C1260,110 1440,60 1440,60 L1440,128 L0,128 Z"
            fill={fillColor}
            opacity={0.3}
          />
          {/* Middle layer */}
          <path
            d="M0,64 C240,100 480,30 720,70 C960,110 1200,40 1440,80 L1440,128 L0,128 Z"
            fill={fillColor}
            opacity={0.5}
          />
          {/* Front layer - full opacity */}
          <path
            d="M0,96 C320,80 640,110 960,90 C1280,70 1440,100 1440,100 L1440,128 L0,128 Z"
            fill={fillColor}
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      style={{ height, marginTop: flip ? 0 : -1, marginBottom: flip ? -1 : 0 }}
    >
      <svg
        viewBox={viewBox}
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{ transform }}
      >
        <path d={getWavePath()} fill={fillColor} />
      </svg>
    </div>
  );
}

/**
 * CurvedDivider - Simple curved divider (arc shape).
 * 
 * A more subtle alternative to waves, creates a gentle curve
 * between sections.
 */
interface CurvedDividerProps {
  fillColor?: string;
  flip?: boolean;
  className?: string;
  height?: number;
}

export function CurvedDivider({
  fillColor = "white",
  flip = false,
  className = "",
  height = 60,
}: CurvedDividerProps) {
  const transform = flip ? "scale(1, -1)" : "";
  const viewBox = flip ? "0 -100 1440 100" : "0 0 1440 100";

  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      style={{ height, marginTop: flip ? 0 : -1, marginBottom: flip ? -1 : 0 }}
    >
      <svg
        viewBox={viewBox}
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{ transform }}
      >
        <path
          d="M0,100 Q720,-20 1440,100 L1440,100 L0,100 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

/**
 * DiagonalDivider - Angled/diagonal section divider.
 * 
 * Creates a clean diagonal cut between sections for a modern,
 * dynamic look.
 */
interface DiagonalDividerProps {
  fillColor?: string;
  direction?: "left" | "right";
  className?: string;
  height?: number;
}

export function DiagonalDivider({
  fillColor = "white",
  direction = "right",
  className = "",
  height = 80,
}: DiagonalDividerProps) {
  const path =
    direction === "right"
      ? "M0,0 L1440,80 L1440,80 L0,80 Z"
      : "M0,80 L1440,0 L1440,80 L0,80 Z";

  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      style={{ height, marginTop: -1 }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <path d={path} fill={fillColor} />
      </svg>
    </div>
  );
}

/**
 * GradientDivider - Soft gradient fade between sections.
 * 
 * Instead of a shape, creates a gradient fade from one color to another.
 * Subtlest option for section transitions.
 */
interface GradientDividerProps {
  fromColor?: string;
  toColor?: string;
  className?: string;
  height?: number;
}

export function GradientDivider({
  fromColor = "white",
  toColor = "transparent",
  className = "",
  height = 100,
}: GradientDividerProps) {
  return (
    <div
      className={`w-full ${className}`}
      style={{
        height,
        background: `linear-gradient(180deg, ${fromColor} 0%, ${toColor} 100%)`,
        marginTop: -1,
      }}
    />
  );
}

