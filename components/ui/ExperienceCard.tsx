"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Experience } from "@/types";
import Badge from "@/components/ui/Badge";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({
  experience,
  index,
}: ExperienceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div
        className="rounded-2xl p-4 sm:p-6 transition-all duration-300 h-full"
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
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div
              className="p-2 sm:p-3 rounded-xl flex-shrink-0"
              style={{ backgroundColor: "var(--color-accent)", color: "var(--color-button-primary-text)" }}
            >
              <Briefcase size={20} />
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
          className="text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed"
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
