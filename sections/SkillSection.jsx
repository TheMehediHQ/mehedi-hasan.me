"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { skills } from "@/constants/skills";

export default function SkillSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto">

        {/* SECTION TITLE */}
        <h2
          className="text-2xl sm:text-3xl font-bold mb-6"
          style={{ color: "var(--color-primary-text)" }}
        >
          Tech Stack
        </h2>

        {/* GRID */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.4 }}
       
        >
          <div
            className="
              grid 
              grid-cols-4 
              sm:grid-cols-5 
              md:grid-cols-6 
              lg:grid-cols-7 
              gap-x-8 sm:gap-x-10 
              gap-y-10
            "
          >
            {skills.slice(0, 20).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                // whileHover={{ y: -4 }}
                className="group flex flex-col items-center justify-center"
              >
                <Image
                  src={`/tech/${skill.icon || "default.svg"}`}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className="object-contain transition-all duration-300 "
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
