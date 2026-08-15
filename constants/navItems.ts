import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  { id: "home", label: "Home", path: "#home", icon: "Home" },
  { id: "about", label: "About", path: "#about", icon: "User" },
  { id: "experience", label: "Experience", path: "#experience", icon: "Briefcase" },
  { id: "projects", label: "Projects", path: "#projects", icon: "FolderOpen" },
  { id: "blog", label: "Blog", path: "", icon: "BookOpen", href: "https://blog.mehedi-hasan.me" },
  { id: "contact", label: "Contact", path: "#contact", icon: "Mail" },
];

export const sectionIds = navItems.filter((item) => !item.href).map((item) => item.id);
