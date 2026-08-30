import { motion, useReducedMotion } from "framer-motion";

type SignalLineProps = {
  className?: string;
  /** Visual intensity — hero uses a busier line, dividers use a calmer one. */
  variant?: "hero" | "divider";
};

/**
 * The site's signature element: a single travelling waveform that reads as
 * both a broadcast signal (marketing reach) and a monitored data line
 * (security / systems). It threads through the hero and reappears as a
 * section divider, tying the two halves of Vansh's work together.
 */
export function SignalLine({ className = "", variant = "divider" }: SignalLineProps) {
  const reduceMotion = useReducedMotion();
  const path =
    variant === "hero"
      ? "M0,40 C 60,10 90,70 150,40 S 240,10 300,40 S 390,70 450,40 S 540,10 600,40 S 690,70 750,40 S 840,10 900,40 S 990,70 1050,40 S 1140,10 1200,40"
      : "M0,20 C 50,5 100,35 150,20 S 250,5 300,20 S 400,35 450,20 S 550,5 600,20 S 700,35 750,20 S 850,5 900,20 S 1000,35 1050,20 S 1150,5 1200,20";

  return (
    <svg
      className={className}
      viewBox={variant === "hero" ? "0 0 1200 80" : "0 0 1200 40"}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={path}
        fill="none"
        stroke="var(--color-line)"
        strokeWidth="1"
      />
      <motion.path
        d={path}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth={variant === "hero" ? 1.5 : 1}
        strokeLinecap="round"
        strokeDasharray="140 1200"
        initial={{ strokeDashoffset: 0 }}
        animate={reduceMotion ? undefined : { strokeDashoffset: -1340 }}
        transition={
          reduceMotion
            ? undefined
            : { duration: variant === "hero" ? 7 : 10, ease: "linear", repeat: Infinity }
        }
        style={{ opacity: variant === "hero" ? 0.85 : 0.6 }}
      />
    </svg>
  );
}
