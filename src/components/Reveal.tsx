import type { CSSProperties, ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "left" | "right" | "scale" | "blur";
};

export function Reveal({ children, className = "", delay = 0, variant = "up" }: RevealProps) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}