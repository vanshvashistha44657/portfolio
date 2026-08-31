import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { brands } from "../data/brands";

export function Brands() {
  if (brands.length === 0) return null;
  const reduceMotion = useReducedMotion();
  const track = [...brands, ...brands, ...brands, ...brands, ...brands, ...brands]; // Repeat the brands to create a seamless marquee

  return (
    <section className="relative border-t border-[var(--color-line)] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-[var(--color-ink-faint)]">
            WORKED WITH
          </p>
        </Reveal>
      </div>

      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex w-max items-center gap-16"
          animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={reduceMotion ? undefined : { duration: 38, ease: "linear", repeat: Infinity }}
        >
          {track.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex h-12 shrink-0 items-center justify-center px-4 font-mono text-sm tracking-wide text-[var(--color-ink-faint)]  "
            >
              {brand.logo ? (
                <img src={brand.logo} alt={brand.name} className="h-8 w-auto" />
              ) : (
                brand.name
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
