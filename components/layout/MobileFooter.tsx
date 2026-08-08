"use client";

import ThemeToggle from "@/components/ThemeToggle";
import { personalInfo } from "@/constants/personalInfo";

export default function MobileFooter() {
  return (
    <footer
      className="lg:hidden flex items-center justify-between px-6 py-0 "
      style={{ borderColor: "var(--color-border)" }}
    >
      {/* Copyright Text */}
      <p
        className="text-xs font-medium"
        style={{ color: "var(--color-muted-text)" }}
      >
        © {new Date().getFullYear()} {personalInfo.name}
      </p>

      {/* Theme Toggle Button */}
      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </footer>
  );
}