"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const variants = {
    default: {
      backgroundColor: "var(--color-surface)",
      color: "var(--color-secondary-text)",
      border: "1px solid var(--color-border)",
    },
    primary: {
      backgroundColor: "var(--color-accent)",
      color: "var(--color-button-primary-text)",
      border: "none",
    },
    success: {
      backgroundColor: "#059669",
      color: "#FFFFFF",
      border: "none",
    },
  };

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        className
      )}
      style={variants[variant]}
    >
      {children}
    </motion.span>
  );
}
