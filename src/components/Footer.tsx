import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
  { label: "Correo", href: "mailto:daniel@example.com", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="site-container flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-muted-foreground">© 2026 Daniel. Todos los derechos reservados.</p>
        <div className="flex items-center gap-5">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="social-link" aria-label={label}>
              <Icon size={18} /> <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}