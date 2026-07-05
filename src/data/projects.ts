export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  demoUrl: string;
  codeUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "gestor-tareas",
    title: "Mi gestor de Tareas",
    description:
      "Aplicación full-stack de gestión de tareas con proyectos, etiquetas y autenticación. CRUD completo, filtros por estado y modo oscuro.",
    image: "/projects/gestor-tareas.png",
    stack: ["React 19", "TypeScript", "Supabase", "Tailwind v4", "Zod"],
    demoUrl: "https://mi-gestor-de-tareas-josep.vercel.app",
    codeUrl: "https://github.com/Josep-Ocana/mi-gestor-de-tareas",
    featured: true,
  },
];
