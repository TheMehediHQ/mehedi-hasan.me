"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/constants/projects";

export default function ProjectsSection() {
  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-16 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Projects"
          subtitle="Things I&apos;ve built"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
