import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "CrossyRoad",
    description: "Faithful recreation of the mobile game Crossy Road applying object-oriented design principles. Developed for the course of Object Oriented Programming, final evaluation 30L.",
    url: "https://github.com/TheRealGtx/OOP25-crossy-road",
    tags: ["Java", "OOP"],
  },
  {
    name: "Classmate",
    description: "RESTful API backend for a school-oriented social platform allowing students to upload and share lesson notes.",
    url: "https://github.com/TheRealGtx/Classmate",
    tags: ["REST API", "Backend"],
  },
  {
    name: "Receipt splitter",
    description: "A website that allows users to split fairly their bills. Scope of the project is to experiment with Docker, AWS app runner and CI/CD pipelines.",
    url: "https://github.com/TheRealGtx/receipt-splitter",
    tags: ["Docker", "AWS", "CI/CD"],
    status: "Under development",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title mb-3">Projects</h2>
      <p className="text-muted-foreground mb-8">
        A selection of some of my open source projects. Additional business projects are confidential.
      </p>

      <div className="grid gap-4">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-md border border-border bg-card p-5 shadow-sm hover:shadow-md hover:border-foreground/30 transition"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                {project.name}
                <span className="sr-only"> (GitHub repository, opens in a new tab)</span>
              </h3>
              <ArrowUpRight size={18} aria-hidden="true" className="shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            {project.status && <p className="meta text-primary mb-2">{project.status}</p>}
            <p className="text-muted-foreground leading-relaxed mb-4 flex-1">{project.description}</p>
            <p className="meta">{project.tags.join(" · ")}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
