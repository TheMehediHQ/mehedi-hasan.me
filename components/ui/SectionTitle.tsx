"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  className,
}: SectionTitleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className={cn("mb-6 sm:mb-8 lg:mb-10", className)}
    >
      <h2
        className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3"
        style={{ color: "var(--color-primary-text)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-sm sm:text-base lg:text-lg"
          style={{ color: "var(--color-secondary-text)" }}
        >
          {subtitle}
        </p>
      )}
      <div
        className="w-16 sm:w-20 h-1 rounded-full mt-3 sm:mt-4"
        style={{ backgroundColor: "var(--color-accent)" }}
      />
    </motion.div>
  );
}
