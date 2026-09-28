import { Github, Linkedin, Mail, FileText, MapPin } from "lucide-react";
import { site } from "@/config/site";

const links = [
  { label: "GitHub", href: site.github, icon: Github, external: true },
  { label: "LinkedIn", href: site.linkedin, icon: Linkedin, external: true },
  { label: "Email", href: `mailto:${site.email}`, icon: Mail, external: false },
  { label: "CV", href: site.cv, icon: FileText, external: true },
];

const HeroSection = () => {
  return (
    <section id="home" className="pt-16 pb-14 sm:pt-24 sm:pb-20">
      <p className="text-lg text-muted-foreground mb-2">Hi, I'm</p>
      <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-none mb-5">
        {site.name}
      </h1>
      <p className="text-xl sm:text-2xl font-bold text-primary mb-4">{site.role}</p>
      <p className="text-lg max-w-xl leading-relaxed mb-3">
        Enthusiastic about computer science and driven by a passion for problem-solving.
      </p>
      <p className="meta flex items-center gap-1.5 mb-8">
        <MapPin size={14} aria-hidden="true" /> {site.location}
      </p>

      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        {links.map(({ label, href, icon: Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Icon size={17} aria-hidden="true" /> {label}
              {external && <span className="sr-only"> (opens in a new tab)</span>}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HeroSection;
