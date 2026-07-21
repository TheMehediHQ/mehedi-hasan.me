"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Project } from "@/types";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div
        className="rounded-2xl overflow-hidden transition-all duration-300 group h-full flex flex-col"
        style={{
          backgroundColor: "var(--color-card)",
          border: "1px solid var(--color-border)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--color-border)";
          e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.05)";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--color-border)";
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {/* Image */}
        <div
          className="relative h-40 sm:h-48 overflow-hidden"
          style={{ backgroundColor: "var(--color-surface)" }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-5xl sm:text-6xl">
            {project.title.charAt(0)}
          </div>
          <div
            className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 flex-1 flex flex-col">
          <h3
            className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2"
            style={{ color: "var(--color-primary-text)" }}
          >
            {project.title}
          </h3>
          <p
            className="text-xs sm:text-sm mb-3 sm:mb-4 flex-1"
            style={{ color: "var(--color-secondary-text)" }}
          >
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
