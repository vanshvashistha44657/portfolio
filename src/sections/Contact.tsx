import { Mail } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { MagneticButton } from "../components/MagneticButton";
import { SignalLine } from "../components/SignalLine";
import { brandIcons } from "../components/BrandIcons";
import { personal, socials } from "../data/personal";

export function Contact() {
  const linkedin = socials.find((s) => s.icon === "linkedin");
  const github = socials.find((s) => s.icon === "github");

  return (
    <section id="contact" className="relative border-t border-[var(--color-line)] px-6 py-28 md:py-40">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-[var(--color-accent)]">CONTACT</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-6 text-balance font-display text-[clamp(2.25rem,8vw,5.5rem)] font-medium leading-[0.95] text-[var(--color-ink)]">
            LET'S BUILD
            <br />
            SOMETHING.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-md text-[var(--color-ink-dim)]">
            Have an idea, campaign, project or collaboration in mind?
          </p>
        </Reveal>

        <Reveal delay={0.25} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            as="a"
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-7 py-3.5 text-sm font-medium text-[var(--color-bg)] transition-colors hover:bg-[var(--color-accent)]"
          >
            <Mail size={16} /> Get in Touch
          </MagneticButton>
          {linkedin && (
            <MagneticButton
              as="a"
              href={linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-7 py-3.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink-dim)]"
            >
              <brandIcons.linkedin size={16} /> View LinkedIn
            </MagneticButton>
          )}
          {github && (
            <MagneticButton
              as="a"
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-7 py-3.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink-dim)]"
            >
              <brandIcons.github size={16} /> View GitHub
            </MagneticButton>
          )}
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-8 font-mono text-sm text-[var(--color-ink-faint)]">{personal.email}</p>
        </Reveal>
      </div>

      <div className="mx-auto mt-20 max-w-7xl">
        <SignalLine variant="divider" className="h-8 w-full" />
      </div>
    </section>
  );
}
