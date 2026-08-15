import type { NavItem } from "@/types";

export const navItems: NavItem[] = [
  { id: "home", label: "Home", path: "#home", icon: "Home" },
  { id: "about", label: "About", path: "#about", icon: "User" },
  { id: "experience", label: "Experience", path: "#experience", icon: "Briefcase" },
  { id: "projects", label: "Projects", path: "#projects", icon: "FolderOpen" },
  { id: "blog", label: "Blog", path: "/blog", icon: "BookOpen" },
  { id: "contact", label: "Contact", path: "#contact", icon: "Mail" },
];

// শুধুমাত্র ওয়ান-পেজ স্ক্রোল সেকশন আইডি ফিল্টার করার জন্য (# দিয়ে শুরু হওয়াগুলো)
export const sectionIds = navItems
  .filter((item) => item.path.startsWith("#"))
  .map((item) => item.id);