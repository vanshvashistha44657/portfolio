import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { personal, socials } from "../data/personal";
import { brandIcons } from "../components/BrandIcons";
import { SignalLine } from "../components/SignalLine";
import { MagneticButton } from "../components/MagneticButton";
import { useIsTouchDevice } from "../hooks/useIsTouchDevice";

const headline = "VANSH VASHISTHA".split("");

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isTouch = useIsTouchDevice();
  const reduceMotion = useReducedMotion();

  const mvX = useMotionValue(0.5);
  const mvY = useMotionValue(0.3);
  const glowX = useSpring(mvX, { stiffness: 60, damping: 20 });
  const glowY = useSpring(mvY, { stiffness: 60, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    if (isTouch || reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mvX.set((e.clientX - rect.left) / rect.width);
    mvY.set((e.clientY - rect.top) / rect.height);
  }

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-6 pt-32 pb-10 grain"
    >
      {/* mouse-reactive gradient glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 h-[60vmax] w-[60vmax] rounded-full blur-[110px]"
        style={{
          left: useSpring(glowX, { stiffness: 60, damping: 20 }),
          top: useSpring(glowY, { stiffness: 60, damping: 20 }),
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-accent) 22%, transparent) 0%, color-mix(in srgb, var(--color-signal) 12%, transparent) 45%, transparent 70%)",
        }}
      />
      {/* fine grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%)",
        }}
      />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 font-mono text-xs tracking-[0.25em] text-[var(--color-ink-dim)]"
        >
          {personal.positioning.toUpperCase()}
        </motion.p>

        <h1
          className="font-display font-semibold leading-[0.92] tracking-tight text-[clamp(2.75rem,10vw,8.5rem)] text-[var(--color-ink)]"
          aria-label={personal.name}
        >
          {headline.map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: "0.6em" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 + i * 0.02, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden="true"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-8 max-w-xl text-balance font-body text-lg text-[var(--color-ink-dim)] sm:text-xl"
        >
          {personal.heroStatement}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            as="a"
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-bg)] transition-colors hover:bg-[var(--color-accent)]"
          >
            View My Work
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink-dim)]"
          >
            Contact Me
          </MagneticButton>
        </motion.div>
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <SignalLine variant="hero" className="h-10 w-full opacity-80" />
        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <ul className="flex items-center gap-5">
            {socials.map((s) => {
              const Icon = brandIcons[s.icon];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    data-cursor="hover"
                    className="text-[var(--color-ink-dim)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    <Icon size={18} />
                  </a>
                </li>
              );
            })}
          </ul>

          <motion.a
            href="#about"
            data-cursor="hover"
            aria-label="Scroll to About section"
            className="flex items-center gap-2 font-mono text-xs tracking-widest text-[var(--color-ink-faint)]"
            animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
            transition={reduceMotion ? undefined : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            SCROLL <ArrowDown size={14} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
