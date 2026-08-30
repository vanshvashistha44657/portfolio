import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { experience } from "../data/experience";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  return (
    <section id="experience" className="relative border-t border-[var(--color-line)] px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-[var(--color-accent)]">EXPERIENCE</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-[clamp(1.75rem,4vw,3rem)] font-medium text-[var(--color-ink)]">
            Where the strategy met the shipping.
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-16">
          {/* track */}
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-[var(--color-line)] sm:left-[11px]" />
          {/* animated progress fill */}
          <motion.div
            className="absolute left-[7px] top-0 w-px origin-top bg-[var(--color-accent)] sm:left-[11px]"
            style={{ scaleY: progress, height: "100%" }}
          />

          <ol className="space-y-14">
            {experience.map((entry, i) => (
              <Reveal as="li" key={`${entry.company}-${i}`} delay={i * 0.06} className="relative pl-8 sm:pl-14">
                <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)] sm:h-5 sm:w-5" />

                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-display text-2xl text-[var(--color-ink-faint)]">{entry.year}</span>
                  <span className="font-mono text-xs tracking-widest text-[var(--color-ink-faint)]">
                    {entry.duration}
                  </span>
                </div>

                <h3 className="mt-2 font-display text-xl font-medium text-[var(--color-ink)] sm:text-2xl">
                  {entry.role} <span className="text-[var(--color-ink-dim)]">— {entry.company}</span>
                </h3>

                <p className="mt-3 max-w-2xl text-sm text-[var(--color-ink-dim)]">{entry.summary}</p>

                {entry.achievements.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {entry.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-[var(--color-ink-dim)]">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-signal)]" />
                        {a}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
