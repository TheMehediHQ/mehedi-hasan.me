"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { navItems } from "@/constants/navItems";
import { personalInfo } from "@/constants/personalInfo";
import { socialLinks } from "@/constants/projects";
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
  Menu,
  X,
  ExternalLink,

} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {  FaXTwitter } from "react-icons/fa6";


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
  Github: <FaGithub size={18} className="w-[18px] h-[18px]" />,
  Linkedin: <FaLinkedinIn size={18} className="w-[18px] h-[18px]" />,
  Twitter: <FaXTwitter size={18} className="w-[18px] h-[18px]" />,
  Mail: <Mail size={18} className="w-[18px] h-[18px]" />,
};


interface SidebarProps {
  activeSection: string;
  onNavClick: (id: string) => void;
}

function FloatingFab({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  if (typeof document === "undefined") return null;

  return createPortal(
    <button
      onClick={onToggle}
      className={cn(
        "fixed flex items-center justify-center h-14 w-14 rounded-full backdrop-blur-xl border shadow-2xl transition-all duration-300 ease-out hover:scale-110 active:scale-95",
        "lg:hidden",
      )}
      style={{
        bottom: `calc(env(safe-area-inset-bottom, 0px) + 24px)`,
        right: "24px",
        zIndex: 100,
        backgroundColor: "var(--color-card)",
        borderColor: "var(--color-border)",
        color: "var(--color-primary-text)",
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
      }}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>,
    document.body,
  );
}

export default function Sidebar({ activeSection, onNavClick }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FloatingFab isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />

      {/* Overlay - mobile + tablet */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar - drawer on mobile+tablet, fixed on desktop */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen flex flex-col z-50 transition-transform duration-300",
          "w-[220px] xl:w-[200px] lg:w-[200px]",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0"
        )}
        style={{
          backgroundColor: "var(--color-background)",
          borderRight: "1px solid var(--color-border)",
        }}
      >
        {/* Avatar */}
        <div
          className="p-4 sm:p-6 flex flex-col items-left border-b"
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
            className="text-[10px] sm:text-xs text-left mt-1"
            style={{ color: "var(--color-muted-text)" }}
          >
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
                  setIsOpen(false);
                }}
                className={cn(
                  "flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 relative group w-full text-left",
                  isActive && "bg-[var(--color-accent)]/10"
                )}
                style={{
                  color: isActive
                    ? "var(--color-accent)"
                    : "var(--color-secondary-text)",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor =
                      "var(--color-hover)";
                    e.currentTarget.style.color =
                      "var(--color-primary-text)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color =
                      "var(--color-secondary-text)";
                  }
                }}
              >
                <Icon
                  size={16}
                  className="flex-shrink-0 transition-colors duration-200"
                  style={{
                    color: isActive
                      ? "var(--color-accent)"
                      : "var(--color-muted-text)",
                  }}
                />
                {item.label}
              </button>
            );
          })}
          
        </nav>
<div className="flex items-center justify-center gap-2 sm:gap-3 pt-1 sm:pt-2">
  {socialLinks.map((link) => {
    const icon = brandIcons[link.icon];

    return (
      <a
        key={link.name}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="p-1.5 sm:p-2 rounded-lg transition-all duration-200"
        style={{ color: "var(--color-muted-text)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "var(--color-hover)";
          e.currentTarget.style.color = "var(--color-primary-text)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "var(--color-muted-text)";
        }}
      >
        {icon}
      </a>
    );
  })}
</div>



<div
  className="flex justify-start p-3 sm:p-4 border-t"
  style={{ borderColor: "var(--color-border)" }}
>
  <a
    href={personalInfo.resume}
    target="_blank"
    rel="noopener noreferrer"
    className="flex w-full justify-center items-center gap-2 px-4 py-2 rounded-lg text-[12px] font-medium transition-all duration-200"
    style={{
      backgroundColor: "var(--color-accent)",
      color: "var(--color-button-primary-text)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "var(--color-accent-hover)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "var(--color-accent)";
    }}
  >
    <Download size={14} />
    Resume
  </a>
</div>






        {/* Bottom section */}
       <div
  className="p-3 sm:p-4 border-t"
  style={{ borderColor: "var(--color-border)" }}
>
  <div className="flex items-center justify-between">
    {/* Icon-only Theme Toggle */}
    <ThemeToggle />

    {/* Copyright */}
    <p
      className="text-[10px] sm:text-xs font-medium"
      style={{ color: "var(--color-muted-text)" }}
    >
      © {new Date().getFullYear()} {personalInfo.name}
    </p>
  </div>
</div>


      </aside>
    </>
  );
}
