import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useIsTouchDevice } from "../hooks/useIsTouchDevice";

/** Subtle custom cursor: a small dot with a lagging ring that expands over interactive elements. */
export function CustomCursor() {
  const isTouch = useIsTouchDevice();
  const reduceMotion = useReducedMotion();
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 30 });
  const ringY = useSpring(y, { stiffness: 300, damping: 30 });

  const active = !isTouch && !reduceMotion;

  useEffect(() => {
    if (!active) {
      document.documentElement.classList.remove("custom-cursor-active");
      return;
    }
    document.documentElement.classList.add("custom-cursor-active");

    function handleMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
      const target = e.target as HTMLElement;
      setHovering(!!target.closest('a, button, [data-cursor="hover"]'));
    }
    function handleLeaveWindow() {
      setVisible(false);
    }

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeaveWindow);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeaveWindow);
      document.documentElement.classList.remove("custom-cursor-active");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  if (!active) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block" aria-hidden="true">
      <motion.div
        className="fixed top-0 left-0 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
        style={{ x, y, translateX: "-50%", translateY: "-50%", opacity: visible ? 1 : 0 }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[var(--color-accent)]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 0.6 : 0,
        }}
        animate={{
          width: hovering ? 56 : 28,
          height: hovering ? 56 : 28,
          opacity: visible ? (hovering ? 0.9 : 0.5) : 0,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      />
    </div>
  );
}
