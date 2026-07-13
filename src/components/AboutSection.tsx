import josepFoto from "../assets/josep-foto.png";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 px-6 md:px-12 bg-cream">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-start">
        {/* Foto */}
        <div className="w-full max-w-70 mx-auto md:mx-0">
          <img
            src={josepFoto}
            alt="Josep Ocaña"
            className="w-full aspect-square md:aspect-auto object-cover rounded-2xl"
          />
        </div>

        {/* Texto */}
        <div>
          <h2 className="font-[Syne] text-3xl md:text-4xl font-bold text-carbon mb-6">
            Sobre mí
          </h2>

          <div className="space-y-4 text-carbon leading-relaxed">
            <p>
              Soy desarrollador frontend autodidacta, vivo en Girona. Mi camino
              no empezó en el código: pasé por AutoCAD, Rhinoceros y finalmente
              Solidworks, donde obtuve la certificación CSWA en 2022. Estos
              programas me dieron una base sólida de pensamiento espacial y
              precisión técnica.
            </p>
            <p>
              La transición al desarrollo web fue metodica y a la vez
              desafiante: HTML y CSS primero, con un curso CSS que completé en
              2022, seguido de Javascript, donde obtuve una certificación del
              curso en 2023. Finalmente estudié React con TypeScript donde desde
              entonces he ido construyendo muchos proyectos reales tanto
              siguiendo tutoriales como creándolos de principio a fin.
            </p>
            <p>
              Mi proyecto más completo hasta ahora es: {""}
              <a
                href="https://mi-gestor-de-tareas-josep.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate font-medium hover:underline"
              >
                Mi Gestor de Tareas
              </a>
              , una app full-stack con React, TypeScript y Supabase, desplegada
              con Vercel.
            </p>
            <p>
              Actualmente busco mi primer trabajo como desarrollador fullStack,
              preferentemente en remoto, en una product company de tamaño
              mediano donde pueda seguir aprendiendo y desarrollar todo mi
              potencial.
            </p>
          </div>

          {/* Stats rápidas */}
          <div className="flex justify-between gap-8 mt-8 pt-8 border-t border-muted/20">
            <div>
              <p className="font-[Syne] text-2xl font-bold text-slate">3</p>
              <p className="text-sm var-muted">años programando</p>
            </div>
            <div>
              <p className="font-[Syne] text-2xl font-bold text-slate">CSWA</p>
              <p className="text-sm var-muted">certificado Solidworks</p>
            </div>
            <div>
              <p className="font-[Syne] text-2xl font-bold text-slate">
                Remoto
              </p>
              <p className="text-sm var-muted">disponibilidad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
