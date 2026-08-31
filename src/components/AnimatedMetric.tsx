import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/**
 * Animates a numeric prefix inside a value like "50+" or "10M+" or "₹XX L+".
 * Non-numeric / placeholder values (anything containing letters other than
 * the trailing unit, or bracketed placeholders) are shown as-is without a
 * count animation, since there's nothing real to count up to yet.
 */
export function AnimatedMetric({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);

  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  const isPlaceholder = value.includes("[");

  useEffect(() => {
    if (!inView) return;
    if (!match || isPlaceholder || reduceMotion) {
      setDisplay(value);
      return;
    }
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr);
    const duration = 1200;
    const start = performance.now();

    function tick(now: number) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = (target * eased).toFixed(numStr.includes(".") ? 1 : 0);
      setDisplay(`${prefix}${current}${suffix}`);
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="border-t border-[var(--color-line)] pt-6"
    >
      <p className="font-display text-[clamp(2rem,5vw,3.5rem)] font-medium text-[var(--color-ink)]">
        {display}
      </p>
      <p className="mt-2 font-mono text-xs tracking-widest text-[var(--color-ink-faint)]">
        {label.toUpperCase()}
      </p>
    </motion.div>
  );
}
