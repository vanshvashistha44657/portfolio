import { Reveal } from "../components/Reveal";
import { AnimatedMetric } from "../components/AnimatedMetric";
import { metrics } from "../data/metrics";

export function Metrics() {
  return (
    <section className="relative border-t border-[var(--color-line)] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-[var(--color-accent)]">IMPACT</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
          {metrics.map((m) => (
            <AnimatedMetric key={m.label} value={m.value} label={m.label} />
          ))}
        </div>
        <p className="mt-8 max-w-xl font-mono text-[11px] leading-relaxed text-[var(--color-ink-faint)]">
          Figures above are not calculated in real-time and are subject to change. They are meant to provide a general overview of my impact and reach in the industry.
        </p>
      </div>
    </section>
  );
}
