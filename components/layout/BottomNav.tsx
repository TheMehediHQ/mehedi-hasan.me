"use client";

import { cn } from "@/lib/utils";
import { navItems } from "@/constants/navItems";
import {
  Home,
  Briefcase,
  FolderOpen,
  Mail,
} from "lucide-react";

// শুধু ব্যবহৃত আইকনগুলো ইমপোর্ট করা হয়েছে
const iconMap: Record<string, React.ElementType> = {
  Home,
  Briefcase,
  FolderOpen,
  Mail,
};

interface BottomNavProps {
  activeSection: string;
  onNavClick: (id: string) => void;
}

export default function BottomNav({ activeSection, onNavClick }: BottomNavProps) {
  // 'about' আইডিটি ফিল্টার করে হাইড করা হলো
  const filteredNavItems = navItems.filter((item) => item.id !== "about");

  return (
    <nav
      className={cn(
        // ১. স্ক্রিনের নিচে ফিক্সড করে আটকে রাখার জন্য (শুধু মোবাইল ভার্সন)
        "fixed bottom-0 left-0 right-0 z-50 lg:hidden",
        "flex items-center justify-around w-full",
        // ২. মোবাইল অ্যাপ লুক, বর্ডার এবং সেফ-এরিয়া প্যাডিং
        "border-t pt-2 pb-[calc(env(safe-area-inset-bottom,0px)+8px)] px-2",
        "backdrop-blur-xl transition-all duration-300"
      )}
      style={{
        backgroundColor: "var(--color-background)",
        borderColor: "var(--color-border)",
      }}
    >
      {filteredNavItems.map((item) => {
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