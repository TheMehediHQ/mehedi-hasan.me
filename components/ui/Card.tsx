"use client";

import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({ children, className, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "bg-[#151515] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1",
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
