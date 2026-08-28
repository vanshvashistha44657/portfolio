import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import type { Project } from "../data/projects";
import { GithubIcon } from "./BrandIcons";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-h-[92svh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-[var(--color-line)] bg-[var(--color-surface)] sm:rounded-2xl"
          >
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close project details"
              className="absolute top-5 right-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-bg)]/80 text-[var(--color-ink)] backdrop-blur"
              data-cursor="hover"
            >
              <X size={16} />
            </button>

            <div className="aspect-[16/9] w-full overflow-hidden">
              {project.image ? (
                <img src={project.image} alt="" className="h-full w-full object-cover" />
              ) : (
                <div
                  className="flex h-full w-full items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, var(--color-surface-2), var(--color-surface))",
                  }}
                >
                  <span className="font-mono text-xs tracking-widest text-[var(--color-ink-faint)]">
                    /images/projects/{project.slug}
                  </span>
                </div>
              )}
            </div>

            <div className="p-7 sm:p-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-mono text-xs tracking-widest text-[var(--color-accent)]">
                  {project.category} · {project.year}
                </p>
              </div>

              <h3
                id="project-modal-title"
                className="mt-3 font-display text-3xl font-medium text-[var(--color-ink)] sm:text-4xl"
              >
                {project.title}
              </h3>

              <p className="mt-4 max-w-xl text-[var(--color-ink-dim)]">{project.description}</p>

              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-xs tracking-widest text-[var(--color-ink-faint)]">MY ROLE</p>
                  <p className="mt-2 text-sm text-[var(--color-ink-dim)]">{project.role}</p>
                </div>
                <div>
                  <p className="font-mono text-xs tracking-widest text-[var(--color-ink-faint)]">TECHNOLOGIES</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--color-line)] px-3 py-1 text-xs text-[var(--color-ink-dim)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {project.features.length > 0 && (
                <div className="mt-8">
                  <p className="font-mono text-xs tracking-widest text-[var(--color-ink-faint)]">
                    KEY FEATURES
                  </p>
                  <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[var(--color-ink-dim)]">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.impact && (
                <div className="mt-8">
                  <p className="font-mono text-xs tracking-widest text-[var(--color-ink-faint)]">IMPACT</p>
                  <p className="mt-2 text-sm text-[var(--color-ink-dim)]">{project.impact}</p>
                </div>
              )}

              <div className="mt-10 flex flex-wrap gap-3 border-t border-[var(--color-line)] pt-6">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-colors hover:bg-[var(--color-accent)]"
                  >
                    Live Project <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-[var(--color-line)] px-5 py-2.5 text-sm text-[var(--color-ink-faint)]">
                    Live link coming soon
                  </span>
                )}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink-dim)]"
                  >
                    <GithubIcon size={14} /> GitHub
                  </a>
                ) : null}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
