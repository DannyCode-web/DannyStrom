import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Inicio() {
  return (
    <section id="inicio" className="hero-section section-anchor">
      <div className="hero-light hero-light-one" aria-hidden="true" />
      <div className="hero-light hero-light-two" aria-hidden="true" />

      <div className="site-container relative z-10 flex min-h-[92svh] flex-col justify-center pt-24 pb-20">
        <div className="max-w-4xl">
          <p
            className="eyebrow hero-enter"
            style={{ animationDelay: "180ms" }}
          >
            <span /> Portafolio personal
          </p>

          <h1 className="hero-title mt-6">
            <span
              className="hero-enter block"
              style={{ animationDelay: "360ms" }}
            >
              Hola, soy
            </span>

            <span
              className="hero-name hero-enter block"
              style={{ animationDelay: "540ms" }}
            >
              Daniel.
            </span>
          </h1>

          <p
            className="hero-role hero-enter mt-5"
            style={{ animationDelay: "720ms" }}
          >
            Desarrollador de software
          </p>

          <p
            className="hero-copy hero-enter mt-6 max-w-2xl"
            style={{ animationDelay: "880ms" }}
          >
            Creo experiencias digitales modernas, sistemas web y soluciones
            tecnológicas utilizando desarrollo de software e inteligencia
            artificial.
          </p>

          <div
            className="hero-enter mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "1040ms" }}
          >
            <Button asChild variant="electric" size="lg">
              <a href="#proyectos">
                Ver mis proyectos <ArrowDown />
              </a>
            </Button>

            <Button asChild variant="electricOutline" size="lg">
              <a
                href="https://wa.me/51925196141"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>

        <a
          href="#sobre-mi"
          className="scroll-cue hero-enter"
          style={{ animationDelay: "1240ms" }}
          aria-label="Desplazarse a Sobre mí"
        >
          <span>Scroll</span>
          <i />
        </a>
      </div>
    </section>
  );
}