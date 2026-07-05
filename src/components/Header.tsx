import { useEffect, useState } from "react";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Skills", href: "#skills" },
  { label: "Sobre mi", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-100
        bg-cream
        transition-colors duration-300
        px-8 h-16
        flex flex-col sm:flex-row items-center justify-between
        ${
          scrolled
            ? "border-b border-slate-pale"
            : "border-b border-transparent"
        }
      `}
    >
      {/* Logo */}
      <a href="#hero" aria-label="Inicio">
        <img src="/logo.png" alt="JOP" className="h-20" />
      </a>

      {/* Nav links */}
      <nav>
        <ul className="flex md:gap-4 ">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActive(`${link.label}`)}
                className={` flex-1 rounded-xl px-3 py-2 text-center md:text-lg font-medium transition-all duration-300 hover:text-mutes
                  ${
                    active === link.label
                      ? "bg-carbon text-cream"
                      : "bg-cream text-carbon"
                  }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
