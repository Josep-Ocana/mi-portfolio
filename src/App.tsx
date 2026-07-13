import { AboutSection } from "./components/AboutSection";
import Header from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-0">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
      </main>
    </>
  );
}
