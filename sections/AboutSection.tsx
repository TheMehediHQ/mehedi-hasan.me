"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { personalInfo } from "@/constants/personalInfo";
import { skills } from "@/constants/skills";

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
  className="rounded-2xl p-5 sm:p-6 lg:p-8 flex items-center justify-center"
>
  <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden shadow-lg">
    <img
      src="/image.png"   // ⭐ your image path here
      alt="Mehedi Hasan"
      className="object-cover w-full h-full"
    />
  </div>
</motion.div>

        </div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="rounded-2xl p-5 sm:p-6 lg:p-8"
          
        >
          <h3
            className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6"
            style={{ color: "var(--color-primary-text)" }}
          >
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 20).map((skill) => (
           <motion.div
  key={skill.name}
  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl  backdrop-blur-md 
              hover:scale-110 transition-transform duration-300 
             flex items-center justify-center"
>
  <img
  src={`/tech/${skill.icon || "default.svg"}`}
  alt={skill.name}
  className="
    w-8 h-8
    sm:w-10 sm:h-10
    md:w-12 md:h-12
    lg:w-14 lg:h-14
    object-contain
  "
/>

</motion.div>

            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
