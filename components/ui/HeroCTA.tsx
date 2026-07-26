// "use client";

// import { ArrowUpRight } from "lucide-react";

// interface HeroCTAProps {
//   items: Array<{ label: string; href: string }>;
// }

// export default function HeroCTA({ items }: HeroCTAProps) {
//   return (
//     <div className="flex flex-wrap gap-2 sm:gap-3 align-center">
//       {items.map((item) => (
//         <a
//           key={item.href}
//           href={item.href}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-2 px-2 py-1 rounded-xl border text-sm font-medium btn-flicker-fix transition-all duration-200"
//           style={{
//             borderColor: "var(--btn-border)",
//             backgroundColor:
//               item.label === "Resume"
//                 ? "var(--color-accent)"
//                 : "var(--btn-bg)",
//             color:
//               item.label === "Resume"
//                 ? "var(--color-button-primary-text)"
//                 : "var(--btn-text)",
//           }}
//           onMouseEnter={(e) => {
//             if (item.label === "Resume") {
//               e.currentTarget.style.backgroundColor = "var(--color-accent-hover)";
//               e.currentTarget.style.color = "var(--color-button-primary-text)";
//             } else {
//               e.currentTarget.style.backgroundColor = "var(--btn-bg-hover)";
//               e.currentTarget.style.color = "var(--btn-text)";
//             }
//           }}
//           onMouseLeave={(e) => {
//             if (item.label === "Resume") {
//               e.currentTarget.style.backgroundColor = "var(--color-accent)";
//               e.currentTarget.style.color = "var(--color-button-primary-text)";
//             } else {
//               e.currentTarget.style.backgroundColor = "var(--btn-bg)";
//               e.currentTarget.style.color = "var(--btn-text)";
//             }
//           }}
//         >
//           {item.label}
//           <ArrowUpRight size={14} className="opacity-70" />
//         </a>
//       ))}
//     </div>
//   );
// }


"use client";

import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroCTAProps {
  items: Array<{ label: string; href: string }>;
}

export default function HeroCTA({ items }: HeroCTAProps) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
      {items.map((item) => {
        const isResume = item.label === "Resume";
        
        return (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center gap-2 px-2 py-1 rounded-xl border text-sm font-medium btn-flicker-fix transition-all duration-200",
              isResume ? "hero-cta-btn resume" : "hero-cta-btn default"
            )}
            style={{
              borderColor: "var(--btn-border)",
              backgroundColor: isResume ? "var(--color-accent)" : "var(--btn-bg)",
              color: isResume ? "var(--color-button-primary-text)" : "var(--btn-text)",
            }}
          >
            {item.label}
            <ArrowUpRight size={14} className="opacity-70" />
          </a>
        );
      })}
    </div>
  );
}