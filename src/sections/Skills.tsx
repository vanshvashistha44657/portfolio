import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { skillCategories } from "../data/skills";

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-[var(--color-line)] px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-[var(--color-accent)]">SKILLS</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-[clamp(1.75rem,4vw,3rem)] font-medium text-[var(--color-ink)]">
            Four disciplines, one working process.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, i) => (
            <Reveal
              key={cat.label}
              delay={i * 0.08}
              className="group border-t border-[var(--color-line)] py-8 pr-6 first:border-t sm:border-l sm:border-t-0 sm:px-6 sm:py-0 lg:first:border-l-0"
            >
              <div className="flex items-baseline justify-between font-mono text-xs tracking-widest text-[var(--color-ink-faint)]">
                <span>{cat.code}</span>
                <span>0{i + 1}</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-medium text-[var(--color-ink)]">
                {cat.label}
              </h3>
              <ul className="mt-5 space-y-3">
                {cat.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="border-b border-[var(--color-line)] pb-2.5 text-sm text-[var(--color-ink-dim)] transition-colors group-hover:text-[var(--color-ink-dim)] hover:text-[var(--color-ink)]"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
