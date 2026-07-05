function HeroSection() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center pt-20 pb-16 relative overflow-hidden bg-cream"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-carbon leading-tight max-w-3xl">
        Hola soy <span className="text-slate">Josep Ocaña</span>.
        <br /> Desarrollador Web
      </h1>

      <p className="text-base sm:text-lg md:text-xl mb-10 max-w-xl mx-auto text-slate font-light leading-relaxed">
        Transformo ideas complejas en aplicaciones web modernas, escalables y
        funcionales. Especializado en React y ecosistemas de JavaScript.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-3 w-full max-w-sm sm:max-w-none">
        <a
          href="#proyectos"
          className="px-8 py-3 text-base font-semibold rounded-xl shadow-md transition duration-300 hover:opacity-90 bg-slate text-white text-center border-b-4 border-transparent hover:border-slate-dark"
        >
          {" "}
          Ver Proyectos
        </a>
        <a
          href="#contacto"
          className="px-8 py-3 text-base font-semibold rounded-xl shadow-md transition duration-300 hover:opacity-90 bg-slate text-white text-center border-b-4 border-transparent hover:border-slate-dark"
        >
          Contactar
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
