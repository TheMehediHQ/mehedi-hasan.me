"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { skills } from "@/constants/skills";
import Image from "next/image";

export default function AboutSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });



  return (
    <div
      ref={containerRef}
      className=" px-4 sm:px-8 lg:px-16 py-8 sm:py-12"
    >
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="About Me" subtitle="" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl p-5 sm:p-6 lg:p-8"
           
          >
            <h3
              className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4"
              style={{ color: "var(--color-primary-text)" }}
            >
              Who I Am
            </h3>
            {/* <p
              className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6"
              style={{ color: "var(--color-secondary-text)" }}
            >
              {personalInfo.bio}
            </p> */}
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
  className="rounded-2xl p-5 sm:p-6 lg:p-8 flex items-center justify-center"
>
  <div className="relative w-44 h-44 rounded-3xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]">
  <Image
    src="/image.png"
    alt="Mehedi Hasan"
    fill
    className="object-cover"
  />
</div>
</motion.div>

        </div>


     <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={{ duration: 0.4, delay: 0.4 }}
>
  <h3
    className="text-xl sm:text-2xl font-semibold mb-6"
    style={{ color: "var(--color-primary-text)" }}
  >
    Tech Stack
  </h3>

  <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-x-10 gap-y-10">
    {skills.slice(0, 20).map((skill, index) => (
      <motion.div
        key={skill.name}
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.3,
          delay: index * 0.03,
        }}
        whileHover={{
          y: -4,
        }}
        className="group flex flex-col items-center justify-center"
      >
        <Image
          src={`/tech/${skill.icon || "default.svg"}`}
          alt={skill.name}
          width={40}
          height={40}
          className="object-contain transition-all duration-300 group-hover:scale-110"
        />

      
      </motion.div>
    ))}
  </div>
</motion.div>
      </div>
    </div>
  );
}
