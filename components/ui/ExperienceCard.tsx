"use client";

import { motion } from "framer-motion";
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
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="bg-[#151515] border border-white/10 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1 h-full">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="p-2 sm:p-3 rounded-xl bg-blue-500/10 text-blue-400 flex-shrink-0">
              <Briefcase size={20} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white">
                {experience.role}
              </h3>
              <p className="text-blue-400 text-xs sm:text-sm">{experience.company}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500 text-xs sm:text-sm sm:mt-0">
            <Calendar size={12} />
            {experience.period}
          </div>
        </div>

        <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
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
