import profilePhoto from "@/assets/foto.jpg";
import { Reveal } from "@/components/Reveal";
import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { Brain } from "lucide-react";

const skills = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "Inteligencia Artificial", icon: Brain, color: "#10A37F" },
];

export function SobreMi() {
  return (
    <section id="sobre-mi" className="section-anchor section-space">
      <div className="site-container">
        <div className="about-grid">
          <Reveal variant="left" className="portrait-wrap">
            <div className="portrait-frame">
              <img
                src={profilePhoto}
                alt="Retrato profesional de Daniel"
                loading="lazy"
              />
            </div>

            <span className="portrait-code">01 / PERFIL</span>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">
                <span /> Sobre mí
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="section-title mt-5">
                Transformo ideas en
                <br />
                <em>experiencias digitales.</em>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <div className="section-copy mt-7 space-y-4">
                <p>
                  Soy desarrollador de software enfocado en crear soluciones
                  digitales modernas, funcionales y atractivas.
                </p>

                <p>
                  Me interesa construir productos que no solo funcionen
                  correctamente, sino que también tengan una experiencia
                  visual memorable.
                </p>

                <p>
                  Utilizo tecnologías modernas e inteligencia artificial como
                  herramientas para desarrollar proyectos de manera eficiente.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="skills-block">
          <Reveal>
            <p className="skills-label">Tecnologías y herramientas</p>
          </Reveal>

          <div className="skills-grid">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <Reveal
                  key={skill.name}
                  delay={index * 85}
                  variant="scale"
                >
                  <div className="skill-chip">
                    <Icon
                      className="skill-icon"
                      style={{
                        color: skill.color,
                        width: "50px",
                        height: "50px",
                      }}
                      aria-hidden="true"
                    />

                    <span
                      className="skill-name"
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 600,
                      }}
                    >
                      {skill.name}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
