import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

export function Contacto() {
  return (
    <section id="contacto" className="section-anchor contact-section">
      <div className="contact-beam" aria-hidden="true" />

      <div className="site-container relative z-10 py-28 text-center sm:py-36">
        <Reveal>
          <p className="eyebrow justify-center">
            <span /> Contacto
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="contact-title mt-6">
            ¿Tienes una idea?
            <br />
            <em>Hagámosla realidad.</em>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="section-copy mx-auto mt-7 max-w-xl">
            Estoy interesado en nuevos proyectos, oportunidades y
            colaboraciones.
            <br />
            Si tienes una idea, conversemos.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <Button
            asChild
            variant="electric"
            size="lg"
            className="mt-9"
          >
            <a
              href="https://wa.me/51925196141"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablemos <ArrowUpRight />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}