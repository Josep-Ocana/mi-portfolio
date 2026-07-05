import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-0">
        <HeroSection />
        <ProjectsSection />
      </main>
    </>
  );
}
