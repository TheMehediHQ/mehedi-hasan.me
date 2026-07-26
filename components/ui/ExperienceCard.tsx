"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Experience } from "@/types";
import Badge from "@/components/ui/Badge";
import { Calendar } from "lucide-react";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="will-change-transform"
    >
      <div
        className="transition-transform duration-300 h-full btn-flicker-fix will-change-transform"
        style={{
          borderColor: "var(--btn-border)",   // ✔ border only
          // ❌ backgroundColor removed completely
          transform: "translateZ(0)",         // GPU boost
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div
              className="flex-shrink-0 rounded-md p-1.5"
              style={{
                backgroundColor: "var(--color-button-secondary-bg)",
                color: "var(--color-button-secondary-text)",
              }}
            >
              <img
                src="/icon/work.svg"
                alt="Work"
                className="w-6 h-6 sm:w-6 sm:h-6 object-contain"
                loading="lazy"
              />
            </div>

            <div>
              <h3
                className="text-base sm:text-lg font-semibold"
                style={{ color: "var(--color-primary-text)" }}
              >
                {experience.role}
              </h3>
              <p
                className="text-xs sm:text-sm"
                style={{ color: "var(--color-accent)" }}
              >
                {experience.company}
              </p>
            </div>
          </div>

          <div
            className="flex items-center gap-1.5 text-xs sm:text-sm sm:mt-0"
            style={{ color: "var(--color-muted-text)" }}
          >
            <Calendar size={12} />
            {experience.period}
          </div>
        </div>

        <p
          className="text-sm leading-6 sm:text-sm mb-3 sm:mb-4"
          style={{ color: "var(--color-secondary-text)" }}
        >
          {experience.description}
        </p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {experience.technologies.map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
