"use client";

import { motion } from "framer-motion";
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn("mb-6 sm:mb-8 lg:mb-10", className)}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-3">
        {title}
      </h2>
      {subtitle && <p className="text-gray-400 text-sm sm:text-base lg:text-lg">{subtitle}</p>}
      <div className="w-16 sm:w-20 h-1 bg-blue-500 rounded-full mt-3 sm:mt-4" />
    </motion.div>
  );
}
