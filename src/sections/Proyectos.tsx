import { ArrowUpRight, Boxes, GraduationCap, ShoppingBag } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const projects = [
  { name: "STROM URBAN", type: "E-COMMERCE", text: "Tienda online de moda urbana masculina con catálogo, carrito y gestión de pedidos.", icon: ShoppingBag, visual: "visual-commerce" },
  { name: "DIGITAL WEAVER", type: "SISTEMA DE VENTAS", text: "Sistema para administrar clientes, productos, ventas y procesos de facturación.", icon: Boxes, visual: "visual-system" },
  { name: "INCA EDUCA", type: "PLATAFORMA EDUCATIVA", text: "Plataforma institucional con administración, chatbot, automatizaciones y herramientas digitales.", icon: GraduationCap, visual: "visual-education" },
];

export function Proyectos() {
  return (
    <section id="proyectos" className="section-anchor section-space projects-section">
      <div className="site-container">
        <Reveal><p className="eyebrow"><span /> Proyectos</p></Reveal>
        <Reveal delay={100}><h2 className="section-title mt-5">Algunos proyectos que<br /><em>he construido.</em></h2></Reveal>
        <div className="projects-grid mt-14">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Reveal key={project.name} delay={index * 150} variant="up">
                <article className="project-card">
                  <div className={`project-visual ${project.visual}`} aria-label={`Composición tecnológica de ${project.name}`} role="img">
                    <div className="visual-grid" /><span className="visual-orbit" /><Icon className="visual-icon" />
                    <span className="project-index">0{index + 1}</span>
                  </div>
                  <div className="project-content">
                    <div className="flex items-center justify-between gap-4"><p className="project-type">{project.type}</p><ArrowUpRight className="project-arrow" /></div>
                    <h3>{project.name}</h3><p>{project.text}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}