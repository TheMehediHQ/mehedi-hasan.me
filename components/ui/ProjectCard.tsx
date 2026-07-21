"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Project } from "@/types";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const githubIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className={cn(
          "flex flex-col lg:flex-row rounded-3xl overflow-hidden transition-all duration-300",
          "focus-within:ring-2 focus-within:ring-[var(--color-ring)] focus-within:ring-offset-2 focus-within:ring-offset-[var(--color-background)]"
        )}
        style={{
          backgroundColor: "var(--color-card)",
          border: "1px solid var(--color-border)",
        }}
        whileHover={{
          y: -4,
          borderColor: "var(--color-border)",
          transition: { duration: 0.2 },
        }}
        tabIndex={0}
        role="article"
        aria-label={`${project.title} project`}
      >
        {/* Image */}
        <div
          className="relative w-full lg:w-[40%] aspect-video lg:aspect-auto lg:h-auto overflow-hidden flex-shrink-0"
          style={{ backgroundColor: "var(--color-surface)" }}
        >
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover transition-transform duration-500 ease-out"
            sizes="(max-width: 1024px) 100vw, 40vw"
            unoptimized
          />
          <div
            className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
            style={{ pointerEvents: "none" }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-5 sm:p-6 lg:p-8 flex flex-col justify-center">
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Title */}
            <h3
              className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight"
              style={{ color: "var(--color-primary-text)" }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              className="text-sm sm:text-base leading-relaxed line-clamp-3"
              style={{ color: "var(--color-secondary-text)" }}
            >
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="default">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1">
              <Button
                variant="secondary"
                size="sm"
                className="gap-1.5 text-xs sm:text-sm"
                onClick={() => window.open(project.github, "_blank")}
                aria-label={`View ${project.title} on GitHub`}
              >
                {githubIcon}
                GitHub
              </Button>
              <Button
                variant="primary"
                size="sm"
                className="gap-1.5 text-xs sm:text-sm"
                onClick={() => window.open(project.liveDemo, "_blank")}
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink size={14} />
                Live Demo
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
