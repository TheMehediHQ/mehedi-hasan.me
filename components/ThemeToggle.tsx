"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center gap-2 w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200"
      style={{
        color: "var(--color-secondary-text)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "var(--color-hover)";
        e.currentTarget.style.color = "var(--color-primary-text)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.color = "var(--color-secondary-text)";
      }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
    </button>
  );
}
