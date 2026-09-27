export interface NavItem {
  id: string;
  label: string;
  path: string;
  icon: string;
  href?: string;
}

export const navItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
    path: "#home",
    icon: "Home",
  },
  {
    id: "blog",
    label: "Blog",
    path: "/blog",
    icon: "BookOpen",
  },
  {
    id: "contact",
    label: "Contact",
    path: "#contact",
    icon: "Mail",
  },
];

export const sectionIds = navItems
  .filter((item) => !item.href)
  .map((item) => item.id);