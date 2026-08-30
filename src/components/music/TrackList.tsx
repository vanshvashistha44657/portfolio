import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import type { Track } from "../../data/tracks";

export function TrackList({
  tracks,
  activeIndex,
  isPlaying,
  onSelect,
}: {
  tracks: Track[];
  activeIndex: number;
  isPlaying: boolean;
  onSelect: (index: number) => void;
}) {
  return (
    <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
      {tracks.map((track, i) => {
        const active = i === activeIndex;
        return (
          <li key={track.id}>
            <button
              onClick={() => onSelect(i)}
              data-cursor="hover"
              className={`group flex w-full items-center gap-4 px-1 py-4 text-left transition-colors ${
                active ? "text-[var(--color-ink)]" : "text-[var(--color-ink-dim)] hover:text-[var(--color-ink)]"
              }`}
              aria-current={active ? "true" : undefined}
            >
              <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-line)]">
                {active && isPlaying ? (
                  <span className="flex items-end gap-[2px] h-3.5" aria-hidden="true">
                    {[0, 1, 2].map((b) => (
                      <motion.span
                        key={b}
                        className="w-[2px] rounded-full bg-[var(--color-accent)]"
                        animate={{ height: ["30%", "100%", "50%", "80%", "30%"] }}
                        transition={{ duration: 1 + b * 0.2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    ))}
                  </span>
                ) : active ? (
                  <Pause size={13} />
                ) : (
                  <Play size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
                )}
                {!active && (
                  <span className="absolute font-mono text-[10px] text-[var(--color-ink-faint)] transition-opacity group-hover:opacity-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
              </span>

              <span className="min-w-0 flex-1">
                <span className="block truncate font-display text-base font-medium">{track.title}</span>
                <span className="block truncate text-xs text-[var(--color-ink-faint)]">{track.artist}</span>
              </span>

              {track.tag && (
                <span className="hidden shrink-0 rounded-full border border-[var(--color-line)] px-2.5 py-1 font-mono text-[10px] tracking-widest text-[var(--color-ink-faint)] sm:inline-block">
                  {track.tag.toUpperCase()}
                </span>
              )}

              <span className="shrink-0 font-mono text-xs text-[var(--color-ink-faint)]">{track.duration}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
