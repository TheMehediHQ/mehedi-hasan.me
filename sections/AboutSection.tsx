"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { personalInfo } from "@/constants/personalInfo";
import { skills } from "@/constants/skills";
import { User, Target, Zap, Award } from "lucide-react";
import { cv } from "@/lib/utils";

export default function AboutSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  const stats = [
    { icon: User, label: "Experience", value: "5+ Years" },
    { icon: Target, label: "Projects", value: "50+" },
    { icon: Zap, label: "Technologies", value: "20+" },
    { icon: Award, label: "Awards", value: "10+" },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen px-4 sm:px-8 lg:px-16 py-8 sm:py-12"
    >
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="About Me" subtitle="Get to know me better" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl p-5 sm:p-6 lg:p-8"
            style={{
              backgroundColor: "var(--color-card)",
              border: "1px solid var(--color-border)",
            }}
          >
            <h3
              className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4"
              style={{ color: "var(--color-primary-text)" }}
            >
              Who I Am
            </h3>
            <p
              className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6"
              style={{ color: "var(--color-secondary-text)" }}
            >
              {personalInfo.bio}
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: "var(--color-secondary-text)" }}
            >
              I&apos;m passionate about creating seamless user experiences and
              building robust backend systems. When I&apos;m not coding, you can
              find me exploring new technologies, contributing to open-source, or
              sharing knowledge through technical writing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-2xl p-5 sm:p-6 lg:p-8"
            style={{
              backgroundColor: "var(--color-card)",
              border: "1px solid var(--color-border)",
            }}
          >
            <h3
              className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4"
              style={{ color: "var(--color-primary-text)" }}
            >
              Current Focus
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {personalInfo.currentFocus.map((item, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  />
                  <span
                    className="text-sm sm:text-base"
                    style={{ color: "var(--color-secondary-text)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl p-4 sm:p-6 text-center transition-all duration-300"
              style={{
                backgroundColor: "var(--color-card)",
                border: "1px solid var(--color-border)",
              }}
            >
              <stat.icon
                className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3"
                style={{ color: "var(--color-accent)" }}
              />
              <div
                className="text-xl sm:text-2xl font-bold mb-1"
                style={{ color: "var(--color-primary-text)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs sm:text-sm"
                style={{ color: "var(--color-muted-text)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="rounded-2xl p-5 sm:p-6 lg:p-8"
          style={{
            backgroundColor: "var(--color-card)",
            border: "1px solid var(--color-border)",
          }}
        >
          <h3
            className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6"
            style={{ color: "var(--color-primary-text)" }}
          >
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 10).map((skill) => (
              <Badge key={skill.name} variant="primary">
                {skill.name}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
