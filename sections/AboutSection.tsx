"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";


export default function AboutSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <div ref={containerRef} className="px-4 sm:px-8 lg:px-16 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="About Me" subtitle="" />

        {/* WHO I AM SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-10">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            // className="rounded-2xl p-5 sm:p-6 lg:p-8"
          >
            <h3
              className="text-xl sm:text-2xl font-semibold mb-4"
              style={{ color: "var(--color-primary-text)" }}
            >
              Who I Am
            </h3>

            {/* MOBILE IMAGE */}
            <div className="relative mb-4 w-32 sm:w-40 md:w-44 h-32 sm:h-40 md:h-44 rounded-3xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] md:hidden">
              <Image
                src="/image.png"
                alt="Mehedi Hasan"
                fill
                className="object-cover"
              />
            </div>

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

          {/* DESKTOP IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-2xl p-5 sm:p-6 lg:p-8 hidden md:flex justify-center"
          >
            <div className="relative w-40 sm:w-48 lg:w-52 h-40 sm:h-48 lg:h-52 rounded-3xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]">
              <Image
                src="/image.png"
                alt="Mehedi Hasan"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

      
        
      </div>
    </div>
  );
}
