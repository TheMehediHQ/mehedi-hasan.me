"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Toaster } from "sonner";
import { useHashNavigation } from "@/hooks/useHashNavigation";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { sectionIds } from "@/constants/navItems";
import Sidebar from "@/components/layout/Sidebar";
import HomeSection from "@/sections/HomeSection";
import AboutSection from "@/sections/AboutSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ContactSection from "@/sections/ContactSection";
import EducationSection from "@/sections/EducationSection";
import SkillSection from "@/sections/SkillSection";


const sections = [
  { id: "home", component: <HomeSection key="home" /> },
  { id: "about", component: <AboutSection key="about" /> },
  { id: "experience", component: <ExperienceSection key="experience" /> },
   { id: "education", component: <EducationSection key="education" /> },
  { id: "projects", component: <ProjectsSection key="projects" /> },
  { id: "skills", component: <SkillSection key="skills" /> },
  { id: "contact", component: <ContactSection key="contact" /> },
];

export default function ScrollLayout() {
  const mainRef = useRef<HTMLElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const activeId = useScrollSpy(sectionIds, !isScrolling);
  const { scrollToSection } = useHashNavigation(mainRef, () => setIsScrolling(false));

  const handleNavClick = useCallback((id: string) => {
    setIsScrolling(true);
    scrollToSection(id);
  }, [scrollToSection]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const currentIndex = sectionIds.indexOf(activeId);
      if (currentIndex === -1) return;

      if (event.key === "ArrowDown" || event.key === "PageDown") {
        event.preventDefault();
        const nextIndex = Math.min(currentIndex + 1, sectionIds.length - 1);
        setIsScrolling(true);
        scrollToSection(sectionIds[nextIndex]);
      } else if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        const prevIndex = Math.max(currentIndex - 1, 0);
        setIsScrolling(true);
        scrollToSection(sectionIds[prevIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeId, scrollToSection]);

return (
    <div
      className="flex h-screen w-full overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <Sidebar activeSection={activeId} onNavClick={handleNavClick} />

      <main ref={mainRef} className="flex-1 lg:ml-[200px] xl:ml-[220px] overflow-y-auto">
        {sections.map(({ id, component }) => (
          <section key={id} id={id}>
            {component}
          </section>
        ))}
      </main>

      <Toaster />
    </div>
  );
}
