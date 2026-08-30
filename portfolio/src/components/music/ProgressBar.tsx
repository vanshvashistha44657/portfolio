import { useRef, useState } from "react";
import { motion } from "framer-motion";

function formatTime(s: number) {
  if (!isFinite(s) || s < 0) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${sec}`;
}

export function ProgressBar({
  currentTime,
  duration,
  onSeek,
}: {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [hoverRatio, setHoverRatio] = useState<number | null>(null);
  const pct = duration > 0 ? Math.min(currentTime / duration, 1) * 100 : 0;

  function ratioFromEvent(e: React.MouseEvent | React.PointerEvent) {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return 0;
    return Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
  }

  function handleClick(e: React.MouseEvent) {
    if (!duration) return;
    onSeek(ratioFromEvent(e) * duration);
  }

  return (
    <div className="flex items-center gap-3">
      <span className="w-10 shrink-0 font-mono text-xs text-[var(--color-ink-faint)]">
        {formatTime(currentTime)}
      </span>
      <div
        ref={trackRef}
        onClick={handleClick}
        onMouseMove={(e) => setHoverRatio(ratioFromEvent(e))}
        onMouseLeave={() => setHoverRatio(null)}
        role="slider"
        aria-label="Seek"
        aria-valuemin={0}
        aria-valuemax={duration}
        aria-valuenow={currentTime}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") onSeek(Math.min(currentTime + 5, duration));
          if (e.key === "ArrowLeft") onSeek(Math.max(currentTime - 5, 0));
        }}
        data-cursor="hover"
        className="group relative h-6 flex-1 cursor-pointer"
      >
        <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-[var(--color-line)]" />
        <motion.div
          className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-[var(--color-accent)]"
          style={{ width: `${pct}%` }}
        />
        {hoverRatio !== null && (
          <div
            className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-[var(--color-ink-dim)] opacity-40"
            style={{ width: `${hoverRatio * 100}%` }}
          />
        )}
        <motion.div
          className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[var(--color-ink)] opacity-0 transition-opacity group-hover:opacity-100"
          style={{ left: `calc(${pct}% - 6px)` }}
        />
      </div>
      <span className="w-10 shrink-0 font-mono text-xs text-[var(--color-ink-faint)]">
        {formatTime(duration)}
      </span>
    </div>
  );
}
