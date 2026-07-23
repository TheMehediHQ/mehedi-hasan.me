"use client";

import { ArrowUpRight } from "lucide-react";

interface HeroCTAProps {
  items: Array<{ label: string; href: string }>;
}

export default function HeroCTA({ items }: HeroCTAProps) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 align-center">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-2 py-1 rounded-xl border text-sm font-medium transition-all duration-200"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "var(--color-card)",
            color: "var(--color-primary-text)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-hover)";
            e.currentTarget.style.color = "var(--color-primary-text)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-card)";
            e.currentTarget.style.color = "var(--color-primary-text)";
          }}
        >
          {item.label}
          <ArrowUpRight size={14} className="opacity-70" />
        </a>
      ))}
    </div>
  );
}