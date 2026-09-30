import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  ["inicio", "Inicio"],
  ["sobre-mi", "Sobre mí"],
  ["proyectos", "Proyectos"],
  ["contacto", "Contacto"],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-35% 0px -55% 0px" },
    );
    links.forEach(([id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`site-nav ${scrolled ? "site-nav-scrolled" : ""}`}>
      <div className="site-container flex h-18 items-center justify-between">
        <a href="#inicio" className="logo-link" aria-label="Daniel, ir al inicio">
          Daniel<span>.</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={`nav-link ${active === id ? "is-active" : ""}`}>
              {label}
            </a>
          ))}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="min-h-11 min-w-11 md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      <nav className={`mobile-menu ${open ? "is-open" : ""}`} aria-label="Navegación móvil">
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className={active === id ? "is-active" : ""}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}