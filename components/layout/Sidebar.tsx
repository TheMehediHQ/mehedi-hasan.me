"use client";

import Image from "next/image";
import { navItems } from "@/constants/navItems";
import { personalInfo } from "@/constants/personalInfo";
import { socials } from "@/constants/socials";
import { cn } from "@/lib/utils";

import ThemeToggle from "@/components/ThemeToggle";
import {
  Home,
  User,
  Briefcase,
  FolderOpen,
  Code,
  Mail,
  Download,
  ChevronRight,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Home,
  User,
  Briefcase,
  FolderOpen,
  Code,
  Mail,
  Download,
};

interface SidebarProps {
  activeSection: string;
  onNavClick: (id: string) => void;
}

export default function Sidebar({ activeSection, onNavClick }: SidebarProps) {
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen flex-col z-50 transition-all duration-300",
        "w-[220px] xl:w-[200px] lg:w-[200px]",
        "hidden lg:flex" // <--- মোবাইলে সম্পূর্ণ লুকানো থাকবে, শুধুমাত্র ডেস্কটপে দেখাবে (lg:flex)
      )}
      style={{
        backgroundColor: "var(--color-background)",
        borderRight: "1px solid var(--color-border)",
      }}
    >
      {/* Original Avatar Header */}
      <div
        className="p-4 sm:p-6 flex flex-col items-left"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="relative w-8 h-8 rounded-full overflow-hidden mb-2 sm:mb-3">
          <Image
            src={personalInfo.avatar}
            alt={personalInfo.name}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <h1
          className="text-base sm:text-lg font-semibold text-left"
          style={{ color: "var(--color-primary-text)" }}
        >
          {personalInfo.name}
        </h1>

        <p
          className="text-sm text-left mt-1"
          style={{ color: "var(--color-muted-text)" }}
        >
          {personalInfo.title}
        </p>
      </div>

      {/* Scrollable Nav & Socials */}
      <div className="flex-1 overflow-y-auto px-3 sm:px-4 space-y-6">
        {/* Navigation */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon] || Home;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className={cn(
                  "flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium group w-full text-left transition-all duration-200",
                  "text-[var(--color-secondary-text)]",
                  !isActive && "hover:text-[var(--color-primary-text)]",
                  isActive && "bg-[var(--nav-active-bg)]",
                  isActive && "text-[var(--color-accent)] font-semibold"
                )}
              >
                <Icon
                  size={16}
                  className={cn(
                    "flex-shrink-0 transition-colors duration-200",
                    "text-[var(--color-muted-text)]",
                    !isActive && "group-hover:text-[var(--color-primary-text)]",
                    isActive && "text-[var(--color-accent)]"
                  )}
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Vertical Socials Section */}
        <div>
          <p
            className="text-xs font-semibold px-3 sm:px-4 mb-2"
            style={{ color: "var(--color-primary-text)" }}
          >
            Socials
          </p>
          <div className="space-y-1">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 hover:text-[var(--color-primary-text)]"
                  style={{ color: "var(--color-muted-text)" }}
                >
                  <Icon size={16} />
                  <span>{social.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Resume CTA */}
      <div className="p-3 sm:p-4 flex justify-center">
        <a
          href={personalInfo.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex items-center justify-between gap-2 px-4 py-2.5 rounded-full text-[12px] font-medium btn-flicker-fix transition-all duration-200 overflow-hidden hover:bg-[var(--color-accent-hover)] w-full"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-button-primary-text)",
          }}
        >
          <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
          <span className="relative z-10">Read Resume</span>
          <ChevronRight size={14} className="relative z-10" />
        </a>
      </div>

      {/* Bottom Theme & Copyright Section */}
      <div className="p-3 sm:p-4 pt-0">
        <div className="flex items-center justify-between">
          <ThemeToggle />

          <p
            className="text-[10px] sm:text-xs font-medium"
            style={{ color: "var(--color-muted-text)" }}
          >
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
        </div>
      </div>
    </aside>
  );
}