"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { personalInfo } from "@/constants/personalInfo";
import { skills } from "@/constants/skills";
import Badge from "@/components/ui/Badge";
import { User, Target, Zap, Award } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { icon: User, label: "Experience", value: "5+ Years" },
    { icon: Target, label: "Projects", value: "50+" },
    { icon: Zap, label: "Technologies", value: "20+" },
    { icon: Award, label: "Awards", value: "10+" },
  ];

  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-16 py-8 sm:py-12">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="About Me" subtitle="Get to know me better" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
          <div className="bg-[#151515] border border-white/10 rounded-2xl p-5 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">
              Who I Am
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              {personalInfo.bio}
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              I&apos;m passionate about creating seamless user experiences and
              building robust backend systems. When I&apos;m not coding, you can
              find me exploring new technologies, contributing to open-source, or
              sharing knowledge through technical writing.
            </p>
          </div>

          <div className="bg-[#151515] border border-white/10 rounded-2xl p-5 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">
              Current Focus
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {personalInfo.currentFocus.map((item, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span className="text-gray-400 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#151515] border border-white/10 rounded-2xl p-4 sm:p-6 text-center hover:border-white/20 transition-all duration-300"
            >
              <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mx-auto mb-2 sm:mb-3" />
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-gray-500 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-[#151515] border border-white/10 rounded-2xl p-5 sm:p-6 lg:p-8">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 10).map((skill) => (
              <Badge key={skill.name} variant="primary">
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
