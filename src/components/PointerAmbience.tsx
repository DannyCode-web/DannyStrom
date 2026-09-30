import * as React from "react";

export function PointerAmbience() {
  React.useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--scroll-y", `${window.scrollY}px`);
        frame = 0;
      });
    };
    const onPointer = (event: PointerEvent) => {
      root.style.setProperty("--cursor-x", `${event.clientX}px`);
      root.style.setProperty("--cursor-y", `${event.clientY}px`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="cursor-glow" aria-hidden="true" />;
}
