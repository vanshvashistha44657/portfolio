import { ArrowUp } from "lucide-react";
import { personal } from "../data/personal";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-xs text-[var(--color-ink-faint)]">
          © {new Date().getFullYear()} {personal.name}. Built from scratch.
        </p>
        <a
          href="#home"
          data-cursor="hover"
          className="flex items-center gap-1.5 font-mono text-xs text-[var(--color-ink-faint)] transition-colors hover:text-[var(--color-ink)]"
        >
          Back to top <ArrowUp size={12} />
        </a>
      </div>
    </footer>
  );
}
