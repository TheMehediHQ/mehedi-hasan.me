"use client";

import { motion } from "framer-motion";
import { Project } from "@/types";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="bg-[#151515] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1 group h-full flex flex-col">
        {/* Image */}
        <div className="relative h-40 sm:h-48 overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
          <div className="absolute inset-0 flex items-center justify-center text-5xl sm:text-6xl">
            {project.title.charAt(0)}
          </div>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 flex-1 flex flex-col">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2">
            {project.title}
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 flex-1">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="primary">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-2 sm:gap-3 mt-auto">
            <Button
              variant="secondary"
              size="sm"
              className="flex-1 text-xs sm:text-sm"
              onClick={() => window.open(project.github, "_blank")}
            >
              GitHub
            </Button>
            <Button
              variant="primary"
              size="sm"
              className="flex-1 text-xs sm:text-sm"
              onClick={() => window.open(project.liveDemo, "_blank")}
            >
              Live Demo
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
