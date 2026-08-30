import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";

export function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.button
      onClick={onOpen}
      data-cursor="hover"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] text-left"
      aria-label={`Open details for ${project.title}`}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center transition-transform duration-700 ease-out group-hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, var(--color-surface-2), var(--color-surface))",
            }}
          >
            <span className="font-mono text-[11px] tracking-widest text-[var(--color-ink-faint)]">
              /images/projects/{project.slug}
            </span>
          </div>
        )}

        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="translate-y-3 p-6 transition-transform duration-500 group-hover:translate-y-0">
            <p className="font-mono text-xs tracking-widest text-[var(--color-accent)]">
              {project.category}
            </p>
          </div>
        </div>

        <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-bg)]/70 text-[var(--color-ink)] opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
          <ArrowUpRight size={16} />
        </div>
      </div>

      <div className="flex items-start justify-between gap-4 p-6">
        <div>
          <h3 className="font-display text-xl font-medium text-[var(--color-ink)]">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-[var(--color-ink-dim)]">{project.description}</p>
        </div>
        <span className="shrink-0 font-mono text-xs text-[var(--color-ink-faint)]">
          {project.year}
        </span>
      </div>
    </motion.button>
  );
}
