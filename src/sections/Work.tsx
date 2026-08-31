import { useState } from "react";
import { Reveal } from "../components/Reveal";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectModal } from "../components/ProjectModal";
import { projects, type Project } from "../data/projects";

export function Work() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="relative border-t border-[var(--color-line)] px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="font-mono text-xs tracking-[0.25em] text-[var(--color-accent)]">SELECTED WORK</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance font-display text-[clamp(1.75rem,4vw,3rem)] font-medium text-[var(--color-ink)]">
                Things I've built, end to end.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm text-[var(--color-ink-dim)]">
              Every project here shipped as a complete system — frontend, backend and
              the thinking that ties them to a real problem.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} onOpen={() => setActive(project)} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
