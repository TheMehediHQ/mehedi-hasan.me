"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";


import { Project } from "@/types";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
  index: number;
}



export default function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-10%",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
      }}
    >
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        tabIndex={0}
        className={cn(
          "group flex flex-col lg:flex-row items-center gap-5",

          "p-4 lg:p-5",
          "transition-all duration-300",
        )}
      >
        {/* Image */}
   <div
 className="
  relative
  w-full
  max-w-[260px]
  aspect-[16/10]
  overflow-hidden
  rounded-xl
  flex-shrink-0
  ml-0
  mr-auto
"
>
  <Image
    src={project.image}
    alt={project.title}
    fill
    unoptimized
    sizes="260px"
    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
  />

  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center">
          <h3
            className="text-xl lg:text-2xl font-semibold tracking-tight"
            style={{
              color: "var(--color-primary-text)",
            }}
          >
            {project.title}
          </h3>

          <p
            className="mt-2 max-w-xl text-sm leading-6 line-clamp-3"
            style={{
              color: "var(--color-secondary-text)",
            }}
          >
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="default">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5">
           <Button
  variant="secondary"
  size="sm"
  className="gap-2 cursor-pointer"
  onClick={() => window.open(project.github, "_blank")}
>
  <FaGithub size={15} />  
  GitHub
</Button>

            <Button
              variant="primary"
              size="sm"
              className="gap-2 cursor-pointer"
              onClick={() => window.open(project.liveDemo, "_blank")}
            >
              <ArrowUpRight size={15} />
              Live Demo
            </Button>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}
