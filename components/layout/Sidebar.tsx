"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { navItems } from "@/constants/navItems";
import { personalInfo } from "@/constants/personalInfo";
import { socialLinks } from "@/constants/projects";
import { cn } from "@/lib/utils";
import {
  Home,
  User,
  Briefcase,
  FolderOpen,
  Code,
  Mail,
  Sun,
  Moon,
  Download,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Home,
  User,
  Briefcase,
  FolderOpen,
  Code,
  Mail,
  ExternalLink,
  Download,
};

const brandIcons: Record<string, React.ReactNode> = {
  Github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  Linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  Twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};

interface SidebarProps {
  activeSection: string;
  onNavClick: (id: string) => void;
}

export default function Sidebar({ activeSection, onNavClick }: SidebarProps) {
  const [isTabletOpen, setIsTabletOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      {/* Tablet hamburger menu - only visible on md (768px-1023px) */}
      <button
        onClick={() => setIsTabletOpen(!isTabletOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-[#151515] border border-white/10 hidden md:flex lg:hidden"
      >
        {isTabletOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Tablet overlay - only visible on md */}
      {isTabletOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 hidden md:block lg:hidden"
          onClick={() => setIsTabletOpen(false)}
        />
      )}

      {/* Sidebar - hidden on mobile, drawer on tablet, visible on desktop */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen bg-[#0A0A0A] border-r border-white/10 flex flex-col z-50 transition-transform duration-300",
          "w-[220px] xl:w-[220px] lg:w-[200px]",
          "hidden md:flex md:flex-col",
          isTabletOpen ? "md:translate-x-0" : "-translate-x-full",
          "lg:translate-x-0"
        )}
      >
        {/* Avatar */}
        <div className="p-4 sm:p-6 flex flex-col items-center border-b border-white/10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
            {personalInfo.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <h1 className="text-base sm:text-lg font-semibold text-white text-center">
            {personalInfo.name}
          </h1>
          <p className="text-[10px] sm:text-xs text-gray-400 text-center mt-1">
            {personalInfo.title}
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 sm:p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon] || Home;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavClick(item.id);
                  setIsTabletOpen(false);
                }}
                className={cn(
                  "flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 relative group w-full text-left",
                  isActive
                    ? "bg-blue-500/10 text-blue-400"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                <Icon
                  size={16}
                  className={cn(
                    "transition-colors duration-200 flex-shrink-0",
                    isActive ? "text-blue-400" : "text-gray-500 group-hover:text-gray-300"
                  )}
                />
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute left-0 w-1 h-6 sm:h-8 bg-blue-500 rounded-r-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className="p-3 sm:p-4 border-t border-white/10 space-y-2 sm:space-y-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>

          {/* Social links */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 pt-1 sm:pt-2">
            {socialLinks.map((link) => {
              const icon = brandIcons[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                  {icon || <ExternalLink size={16} />}
                </a>
              );
            })}
          </div>

          {/* Resume button */}
          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-xs sm:text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <Download size={14} />
            Resume
          </a>
        </div>
      </aside>
    </>
  );
}
