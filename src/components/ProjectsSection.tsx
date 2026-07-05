import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-24 px-6 md:px-12 bg-cream">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-syne text-3xl md:text-4xl font-bold text-carbon">
          Proyectos
        </h2>
        <p className="text-muted mb-12 max-w-xl">
          Transformo ideas en aplicaciones funcionales. Gestiono cada proyecto
          desde la arquitectura inicial hasta el despliegue final.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl overflow-hidden bg-white border border-slate-pale hover:bg-pale)] transition-colors duration-300"
            >
              <div className="aspect-video overflow-hidden bg-slate-pale">
                <img
                  src={project.image}
                  alt={`Captura de ${project.title}`}
                  className="group rounded-2xl overflow-hidden bg-white border border-slate-pale hover:bg-slate-pale transition-colors duration-300 "
                />
              </div>

              <div className="p-6">
                <h3 className="font-syne text-xl">{project.title}</h3>
                <p className="text-sm text-muted mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap- gap-2 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate hover:underline"
                  >
                    <ExternalLink size={16} />
                    Ver demo
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate hover:underline"
                  >
                    <ExternalLink size={16} />
                    Código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
