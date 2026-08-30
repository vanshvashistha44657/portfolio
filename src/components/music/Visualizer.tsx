import { useEffect, useRef } from "react";

export function Visualizer({
  analyser,
  isPlaying,
  className = "",
}: {
  analyser: AnalyserNode | null;
  isPlaying: boolean;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | undefined>(undefined);
  const idlePhase = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const bufferLength = analyser?.frequencyBinCount ?? 64;
    const data = new Uint8Array(bufferLength);
    const barCount = 48;

    const accentColor = getComputedStyle(document.documentElement).getPropertyValue("--color-accent") || "#FF8A42";
    const signalColor = getComputedStyle(document.documentElement).getPropertyValue("--color-signal") || "#7C6CFF";

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      const barWidth = width / barCount;
      const gap = barWidth * 0.35;

      if (analyser && isPlaying) {
        analyser.getByteFrequencyData(data);
      }

      for (let i = 0; i < barCount; i++) {
        let amp: number;
        if (analyser && isPlaying) {
          const dataIndex = Math.floor((i / barCount) * bufferLength * 0.75);
          amp = data[dataIndex] / 255;
        } else {
          // Gentle idle breathing animation when nothing is playing.
          idlePhase.current += 0.02;
          amp = 0.12 + Math.abs(Math.sin(idlePhase.current + i * 0.4)) * 0.08;
        }
        const barHeight = Math.max(3, amp * height);
        const x = i * barWidth + gap / 2;
        const y = height - barHeight;
        const t = i / barCount;

        const grad = ctx!.createLinearGradient(0, y, 0, height);
        grad.addColorStop(0, t > 0.5 ? signalColor.trim() : accentColor.trim());
        grad.addColorStop(1, "transparent");
        ctx!.fillStyle = grad;
        ctx!.globalAlpha = analyser && isPlaying ? 0.55 + amp * 0.45 : 0.35;
        ctx!.beginPath();
        const r = Math.min(3, barWidth / 2);
        const w = barWidth - gap;
        ctx!.roundRect(x, y, w, barHeight, [r, r, 0, 0]);
        ctx!.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [analyser, isPlaying]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
