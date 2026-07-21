"use client";

import { navItems } from "@/constants/navItems";
import { cn } from "@/lib/utils";
import {
  Home,
  User,
  Briefcase,
  FolderOpen,
  Code,
  Mail,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Home,
  User,
  Briefcase,
  FolderOpen,
  Code,
  Mail,
};

interface BottomNavProps {
  activeSection: string;
  onNavClick: (id: string) => void;
}

export default function BottomNav({ activeSection, onNavClick }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-[#0A0A0A]/90 backdrop-blur-md border-t border-white/10 flex items-center justify-around z-50 md:hidden">
      {navItems.map((item) => {
        const Icon = iconMap[item.icon] || Home;
        const isActive = activeSection === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onNavClick(item.id)}
            className={cn(
              "flex flex-col items-center justify-center gap-0.5 p-2 rounded-xl transition-all duration-200 min-w-[60px]",
              isActive
                ? "text-blue-400"
                : "text-gray-500 hover:text-gray-300"
            )}
          >
            <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
