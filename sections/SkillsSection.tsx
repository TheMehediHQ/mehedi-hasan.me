"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { skills, skillCategories } from "@/constants/skills";
import { Code, Cpu, Database, Globe, Server, Smartphone } from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  Frontend: Globe,
  Backend: Server,
  Database: Database,
  API: Code,
  DevOps: Cpu,
  Tools: Smartphone,
  Design: Code,
  Languages: Code,
};

export default function SkillsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  const getSkillsByCategory = (category: string) =>
    skills.filter((skill) => skill.category === category);

  return (
    <div
      ref={containerRef}
      className="min-h-screen px-4 sm:px-8 lg:px-16 py-8 sm:py-12"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Skills"
          subtitle="Technologies I work with"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, catIndex) => {
            const Icon = categoryIcons[category] || Code;
            const categorySkills = getSkillsByCategory(category);

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: catIndex * 0.05 }}
                className="rounded-2xl p-4 sm:p-6 transition-all duration-300"
                style={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div
                    className="p-1.5 sm:p-2 rounded-lg"
                    style={{
                      backgroundColor: "var(--color-accent)",
                      color: "var(--color-button-primary-text)",
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <h3
                    className="text-base sm:text-lg font-semibold"
                    style={{ color: "var(--color-primary-text)" }}
                  >
                    {category}
                  </h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {categorySkills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                        <span
                          className="text-xs sm:text-sm"
                          style={{ color: "var(--color-secondary-text)" }}
                        >
                          {skill.name}
                        </span>
                        <span
                          className="text-[10px] sm:text-xs"
                          style={{ color: "var(--color-muted-text)" }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className="w-full rounded-full h-1.5 sm:h-2 overflow-hidden"
                        style={{ backgroundColor: "var(--color-surface)" }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: catIndex * 0.05 + skillIndex * 0.05,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full"
                          style={{
                            background: "linear-gradient(to right, var(--color-accent), var(--color-accent-hover))",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
