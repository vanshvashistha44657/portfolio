import { useRef, useState, type ReactNode, type ElementType, type ComponentPropsWithoutRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useIsTouchDevice } from "../hooks/useIsTouchDevice";

type MagneticButtonProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

/** A button/link that leans gently toward the cursor. Disabled on touch devices and reduced motion. */
export function MagneticButton<T extends ElementType = "button">({
  as,
  children,
  className = "",
  ...rest
}: MagneticButtonProps<T>) {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const isTouch = useIsTouchDevice();
  const reduceMotion = useReducedMotion();
  const Comp = motion[(as ?? "button") as "button"];

  const disabled = isTouch || reduceMotion;

  function handleMove(e: React.MouseEvent) {
    if (disabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
    setOffset({ x, y });
  }

  function handleLeave() {
    setOffset({ x: 0, y: 0 });
  }

  return (
    <Comp
      ref={ref as React.Ref<never>}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className={className}
      data-cursor="hover"
      {...rest}
    >
      {children}
    </Comp>
  );
}
