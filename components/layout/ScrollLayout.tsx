"use client";

import { useHashNavigation } from "@/hooks/useHashNavigation";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { sectionIds } from "@/constants/navItems";
import Sidebar from "@/components/layout/Sidebar";
import BottomNav from "@/components/layout/BottomNav";
import HomeSection from "@/sections/HomeSection";
import AboutSection from "@/sections/AboutSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ProjectsSection from "@/sections/ProjectsSection";
import SkillsSection from "@/sections/SkillsSection";
import ContactSection from "@/sections/ContactSection";

const sections = [
  { id: "home", component: <HomeSection key="home" /> },
  { id: "about", component: <AboutSection key="about" /> },
  { id: "experience", component: <ExperienceSection key="experience" /> },
  { id: "projects", component: <ProjectsSection key="projects" /> },
  { id: "skills", component: <SkillsSection key="skills" /> },
  { id: "contact", component: <ContactSection key="contact" /> },
];

export default function ScrollLayout() {
  const activeId = useScrollSpy(sectionIds);
  const { scrollToSection } = useHashNavigation();

  const handleNavClick = (id: string) => {
    scrollToSection(id);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#0A0A0A]">
      <Sidebar activeSection={activeId} onNavClick={handleNavClick} />
      
      <main className="flex-1 lg:ml-[200px] xl:ml-[220px] overflow-y-auto">
        {sections.map(({ id, component }) => (
          <section key={id} id={id} className="min-h-screen">
            {component}
          </section>
        ))}
      </main>

      <BottomNav activeSection={activeId} onNavClick={handleNavClick} />
    </div>
  );
}
