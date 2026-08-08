"use client";

import { cn } from "@/lib/utils";
import { navItems } from "@/constants/navItems";
import {
  Home,
  User,
  Briefcase,
  FolderOpen,
  Code,
  Mail,
  Download,
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

interface BottomNavProps {
  activeSection: string;
  onNavClick: (id: string) => void;
}

export default function BottomNav({ activeSection, onNavClick }: BottomNavProps) {
  // সেরা ৫টি মেনু আইটেম
  const mainNavItems = navItems.slice(0, 5);

  return (
    <nav
      className={cn(
        // ১. স্ক্রিনের একদম তলানিতে ফিক্সড করে আটকে রাখার জন্য
        "fixed bottom-0 left-0 right-0 z-50 lg:hidden",
        "flex items-center justify-around w-full",
        // ২. মোবাইল অ্যাপের মতো বর্ডার, ব্লার এবং সেফ-এরিয়া প্যাডিং
        "border-t pt-2 pb-[calc(env(safe-area-inset-bottom,0px)+8px)] px-2",
        "backdrop-blur-xl transition-all duration-300"
      )}
      style={{
        backgroundColor: "var(--color-background)",
        borderColor: "var(--color-border)",
      }}
    >
      {mainNavItems.map((item) => {
        const Icon = iconMap[item.icon] || Home;
        const isActive = activeSection === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onNavClick(item.id)}
            className={cn(
              "relative flex flex-col items-center justify-center flex-1 py-1 transition-all duration-200 active:scale-95",
              isActive
                ? "text-[var(--color-accent)] font-semibold"
                : "text-[var(--color-muted-text)] hover:text-[var(--color-primary-text)]"
            )}
          >
            {/* Active Top Bar Indicator (Native App look) */}
            {/* {isActive && (
              <span
                className="absolute -top-2 h-[0px] w-8 rounded-full transition-all duration-300"
                style={{ backgroundColor: "var(--color-accent)" }}
              />
            )} */}

            <Icon size={20} className="transition-transform duration-200" />
            <span className="text-[10px] tracking-tight mt-1">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}