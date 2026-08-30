import { Reveal } from "../components/Reveal";
import { personal } from "../data/personal";

const areas = ["Cybersecurity", "AI", "Technology", "Creative", "Marketing", "Web Development"];

export function About() {
  return (
    <section id="about" className="relative border-t border-[var(--color-line)] px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-[var(--color-accent)]">ABOUT</p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <Reveal delay={0.05}>
              <h2 className="text-balance font-display text-[clamp(1.75rem,4vw,3.25rem)] font-medium leading-[1.15] text-[var(--color-ink)]">
                A creative strategist who builds the technology behind the ideas —
                <span className="text-[var(--color-ink-dim)]"> not just the deck that describes them.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15} className="mt-8 max-w-xl space-y-5 text-[var(--color-ink-dim)]">
              <p>
                {personal.name} works at the intersection of influencer marketing and
                technology — planning creator campaigns on one side of the desk, and
                shipping full-stack products on the other.
              </p>
              <p>
                That combination shapes how the work gets done: campaigns are treated
                like products, and products are built with the same attention to
                audience and story that goes into a brand partnership.
              </p>
            </Reveal>

            <Reveal delay={0.25} className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="rounded-full border border-[var(--color-line)] px-4 py-2 text-center font-mono text-xs tracking-wide text-[var(--color-ink-dim)]"
                >
                  {area}
                </div>
              ))}
            </Reveal>
          </div>

          <div className="md:col-span-5 md:col-start-9">
            <Reveal delay={0.1} className="relative">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]">
                <img src="public/images/profile/your-photo.jpg" alt="Profile Image" className="h-full w-full object-cover" />
                <div className="flex h-full w-full items-center justify-center">
                  <span className="font-mono text-xs tracking-widest text-[var(--color-ink-faint)]">
                    PROFILE IMAGE
                    <br />
                    /images/profile/
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between font-mono text-xs text-[var(--color-ink-faint)]">
                <span>{personal.location}</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  Open to collaborations
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
