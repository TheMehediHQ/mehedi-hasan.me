"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { skills, skillCategories } from "@/constants/skills";
import { Code, Cpu, Database, Globe, Server, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

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
  const getSkillsByCategory = (category: string) =>
    skills.filter((skill) => skill.category === category);

  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-16 py-8 sm:py-12">
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: catIndex * 0.05 }}
                className="bg-[#151515] border border-white/10 rounded-2xl p-4 sm:p-6 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    {category}
                  </h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {categorySkills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                        <span className="text-xs sm:text-sm text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-[10px] sm:text-xs text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-1.5 sm:h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay: catIndex * 0.05 + skillIndex * 0.05,
                            ease: "easeOut",
                          }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
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
