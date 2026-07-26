// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { navItems } from "@/constants/navItems";
// import { personalInfo } from "@/constants/personalInfo";
// import { socials } from "@/constants/socials";
// import { cn } from "@/lib/utils";
// import ThemeToggle from "@/components/ThemeToggle";
// import {
//   Home,
//   User,
//   Briefcase,
//   FolderOpen,
//   Code,
//   Mail,
//   Download,
//   Menu,
//   X,
 

// } from "lucide-react";



// const iconMap: Record<string, React.ElementType> = {
//   Home,
//   User,
//   Briefcase,
//   FolderOpen,
//   Code,
//   Mail,
//   Download,
// };




// interface SidebarProps {
//   activeSection: string;
//   onNavClick: (id: string) => void;
// }

// function FloatingFab({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
//   return (
//     <button
//       onClick={onToggle}
//       className={cn(
//         "fixed flex items-center justify-center h-10 w-10 rounded-full backdrop-blur-xl border btn-flicker-fix shadow-2xl transition-all duration-300 ease-out hover:scale-110 active:scale-95",
//         "lg:hidden",
//       )}
//       style={{
//         bottom: `calc(env(safe-area-inset-bottom, 0px) + 24px)`,
//         right: "24px",
//         zIndex: 100,
//         backgroundColor: "var(--color-card)",
//         borderColor: "var(--color-border)",
//         color: "var(--color-primary-text)",
//         boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
//       }}
//       aria-label={isOpen ? "Close menu" : "Open menu"}
//     >
//       {isOpen ? <X size={18} /> : <Menu size={18} />}
//     </button>
//   );
// }

// export default function Sidebar({ activeSection, onNavClick }: SidebarProps) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <FloatingFab isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />

//       {/* Overlay - mobile + tablet */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-40 lg:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       {/* Sidebar - drawer on mobile+tablet, fixed on desktop */}
//       <aside
//         className={cn(
//           "fixed left-0 top-0 h-screen flex flex-col z-50 transition-transform duration-300",
//           "w-[220px] xl:w-[200px] lg:w-[200px]",
//           isOpen ? "translate-x-0" : "-translate-x-full",
//           "lg:translate-x-0"
//         )}
//         style={{
//           backgroundColor: "var(--color-background)",
//           borderRight: "1px solid var(--color-border)",
//         }}
//       >
//         {/* Avatar */}
//         <div
//           className="p-4 sm:p-6 flex flex-col items-left "
//           style={{ borderColor: "var(--color-border)" }}
//         >
//           <div className="relative w-8 h-8 rounded-full overflow-hidden mb-2 sm:mb-3">
//             <Image
//               src={personalInfo.avatar}
//               alt={personalInfo.name}
//               fill
//               className="object-cover"
//               unoptimized
//             />
//           </div>
//           <h1
//             className="text-base sm:text-lg font-semibold text-left"
//             style={{ color: "var(--color-primary-text)" }}
//           >
//             {personalInfo.name}
//           </h1>
          
//           <p
//   className="text-sm text-left mt-1"
//   style={{ color: "var(--color-muted-text)" }}
// >
 

//             {personalInfo.title}
//           </p>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 p-3 sm:p-4 space-y-1 overflow-y-auto">
//           {navItems.map((item) => {
//             const Icon = iconMap[item.icon] || Home;
//             const isActive = activeSection === item.id;

//             return (
//               <button
//                 key={item.id}
//                 onClick={() => {
//                   onNavClick(item.id);
//                   setIsOpen(false);
//                 }}
//                 className={cn(
//                   "flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium btn-flicker-fix transition-all duration-200 relative group w-full text-left",
//                   "text-[var(--color-secondary-text)]",
//                   !isActive && "hover:text-[var(--color-primary-text)]",
                 
//                   isActive && "bg-[var(--color-hover)]",
//                   isActive && "text-[var(--color-accent)]",
//                 )}
//               >
//                 <Icon
//                   size={16}
//                   className={cn(
//                     "flex-shrink-0 transition-colors duration-200",
//                     "text-[var(--color-muted-text)]",
//                     !isActive && "group-hover:text-[var(--color-primary-text)]",
//                     isActive && "text-[var(--color-accent)]",
//                   )}
//                 />
//                 {item.label}
//               </button>
//             );
//           })}
          
//         </nav>
// <div className="flex items-center justify-center gap-2 sm:gap-3 pt-1 sm:pt-2">
//   {socials.map((social) => {
//     const Icon = social.icon;

//     return (
//       <a
//         key={social.label}
//         href={social.href}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="p-1.5 sm:p-2 rounded-lg transition-all duration-200 hover:text-[var(--color-primary-text)]"
//         style={{ color: "var(--color-muted-text)" }}
//       >
//         <Icon size={18} />
//       </a>
//     );
//   })}
// </div>



// <div
//   className="flex justify-start p-3 sm:p-4"
//   style={{ borderColor: "var(--color-border)" }}
// >
//   <a
//     href={personalInfo.resume}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex w-full justify-center items-center gap-2 px-4 py-2 rounded-lg text-[12px] font-medium btn-flicker-fix transition-all duration-200 hover:bg-[var(--color-accent-hover)]"
//     style={{
//       backgroundColor: "var(--color-accent)",
//       color: "var(--color-button-primary-text)",
//     }}
//   >
//     <Download size={14} />
//     Resume
//   </a>
// </div>






//         {/* Bottom section */}
//        <div
//   className="p-3 sm:p-4 "
//   style={{ borderColor: "var(--color-border)" }}
// >
//   <div className="flex items-center justify-between">
//     {/* Icon-only Theme Toggle */}
//     <ThemeToggle />

//     {/* Copyright */}
//     <p
//       className="text-[10px] sm:text-xs font-medium"
//       style={{ color: "var(--color-muted-text)" }}
//     >
//       © {new Date().getFullYear()} {personalInfo.name}
//     </p>
//   </div>
// </div>


//       </aside>
//     </>
//   );
// }


"use client";

import { useState } from "react";
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
  Menu,
  X,
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

function FloatingFab({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "fixed flex items-center justify-center h-10 w-10 rounded-full backdrop-blur-xl border btn-flicker-fix shadow-2xl transition-all duration-300 ease-out hover:scale-110 active:scale-95",
        "lg:hidden",
      )}
      style={{
        bottom: `calc(env(safe-area-inset-bottom, 0px) + 24px)`,
        right: "24px",
        zIndex: 100,
        backgroundColor: "transparent", // updated
        borderColor: "var(--color-border)",
        color: "var(--color-primary-text)",
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
      }}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? <X size={18} /> : <Menu size={18} />}
    </button>
  );
}

export default function Sidebar({ activeSection, onNavClick }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FloatingFab isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

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
                  "flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium btn-flicker-fix transition-all duration-200 relative group w-full text-left",
                  "text-[var(--color-secondary-text)]",
                  !isActive && "hover:text-[var(--color-primary-text)]",
                  isActive && "bg-[var(--nav-active-bg)]",
                  isActive && "text-[var(--color-accent)]",
                )}
              >
                <Icon
                  size={16}
                  className={cn(
                    "flex-shrink-0 transition-colors duration-200",
                    "text-[var(--color-muted-text)]",
                    !isActive && "group-hover:text-[var(--color-primary-text)]",
                    isActive && "text-[var(--color-accent)]",
                  )}
                />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 pt-1 sm:pt-2">
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-lg transition-all duration-200 hover:text-[var(--color-primary-text)]"
                style={{ color: "var(--color-muted-text)" }}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        {/* Resume Button */}
        <div
          className="flex justify-start p-3 sm:p-4"
          style={{ borderColor: "var(--color-border)" }}
        >
          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full justify-center items-center gap-2 px-4 py-2 rounded-lg text-[12px] font-medium btn-flicker-fix transition-all duration-200 hover:bg-[var(--color-accent-hover)]"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-button-primary-text)",
            }}
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        {/* Bottom Section */}
        <div
          className="p-3 sm:p-4"
          style={{ borderColor: "var(--color-border)" }}
        >
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
    </>
  );
}
