import { categoryLabels, skills, type Skill } from "../data/skills";

const categories: Skill["category"][] = ["frontend", "backend", "tools"];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-slate-pale">
      <div className="font-[Syne] text-lg font-semibold text-carbon mb-4">
        <h2>Skills & Tecnologías</h2>
        <p className="text-muted mb-12 max-w-xl">
          Las herramientas con las que construyo mis aplicaciones
        </p>

        <div className="flex flex-col gap-10">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="font-[Syne] text-lg font-semibold text-carbon mb-4">
                {categoryLabels[category]}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className="px-4 py-2 rounded-full bg-white text-sm font-medium text-carbon border border-muted/20 hover:border-slate transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
