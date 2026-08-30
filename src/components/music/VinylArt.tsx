import { motion, useReducedMotion } from "framer-motion";
import type { Track } from "../../data/tracks";

export function VinylArt({ track, isPlaying }: { track: Track; isPlaying: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[380px]">
      {/* faint glow behind the disc, pulses while playing */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-accent) 30%, transparent) 0%, transparent 70%)",
        }}
        animate={isPlaying && !reduceMotion ? { opacity: [0.5, 0.9, 0.5], scale: [0.95, 1.05, 0.95] } : { opacity: 0.4 }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative aspect-square w-full rounded-full border border-[var(--color-line)] shadow-[0_0_0_10px_var(--color-surface),0_20px_60px_-10px_rgba(0,0,0,0.6)]"
        style={{
          background:
            "repeating-radial-gradient(circle, #16161a 0px, #16161a 2px, #1c1c21 3px, #1c1c21 4px)",
        }}
        animate={isPlaying && !reduceMotion ? { rotate: 360 } : {}}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        {/* cover art label in the center */}
        <div className="absolute inset-[16%] overflow-hidden rounded-full border border-[var(--color-line)]">
          {track.cover ? (
            <img src={track.cover} alt="" className="h-full w-full object-cover" />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center"
              style={{ background: "linear-gradient(135deg, var(--color-surface-2), var(--color-bg))" }}
            >
              <span className="font-display text-3xl font-medium text-[var(--color-ink-dim)]">
                {track.artist
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </span>
            </div>
          )}
        </div>

        {/* spindle hole */}
        <div className="absolute inset-0 m-auto h-3.5 w-3.5 rounded-full bg-[var(--color-bg)] ring-1 ring-[var(--color-line)]" />
      </motion.div>

      {/* tonearm */}
      <motion.div
        aria-hidden="true"
        className="absolute -right-2 -top-2 h-24 w-2.5 origin-top-right rounded-full bg-[var(--color-ink-faint)]"
        animate={{ rotate: isPlaying ? -18 : -32 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "90% 10%" }}
      >
        <span className="absolute -bottom-1 -left-1 block h-4 w-4 rounded-full bg-[var(--color-ink-faint)]" />
      </motion.div>
    </div>
  );
}
