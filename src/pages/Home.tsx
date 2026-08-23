import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import ResumeSection from "../components/ResumeSection";
import Contact from "../components/Contact";
import ScrollSpyNav from "../components/ScrollSpyNav";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [location]);

  return (
    <main id="main-content">
      <ScrollSpyNav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <ResumeSection />
      <Contact />
    </main>
  );
}
