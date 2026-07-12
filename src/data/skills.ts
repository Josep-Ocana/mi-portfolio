export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools";
}

export const skills: Skill[] = [
  //Frontend
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "React Hook Form", category: "frontend" },
  { name: "Zod", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },

  //Backend
  { name: "Supabase", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Node.js", category: "backend" },

  // Tools
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "Vite", category: "tools" },
  { name: "Vercel", category: "tools" },
];

export const categoryLabels: Record<Skill["category"], string> = {
  frontend: "Frontend",
  backend: "Backend & BBDD",
  tools: "Herramientas",
};
