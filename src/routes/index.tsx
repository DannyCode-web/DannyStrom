import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PointerAmbience } from "@/components/PointerAmbience";
import { Contacto } from "@/sections/Contacto";
import { Inicio } from "@/sections/Inicio";
import { Proyectos } from "@/sections/Proyectos";
import { SobreMi } from "@/sections/SobreMi";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Daniel | Desarrollador de Software" },
      { name: "description", content: "Portafolio personal de Daniel, desarrollador de software especializado en crear sitios web, sistemas y soluciones digitales modernas." },
      { property: "og:title", content: "Daniel | Desarrollador de Software" },
      { property: "og:description", content: "Portafolio personal de Daniel, desarrollador de software especializado en crear sitios web, sistemas y soluciones digitales modernas." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="portfolio-shell">
      <PointerAmbience />
      <Navbar />
      <main>
        <Inicio />
        <SobreMi />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
