export interface NavDropdownItem {
  id: string;
  label: string;
  path: string;
  icon?: string;
  href?: string;
}

export interface NavItem {
  id: string;
  label: string;
  path?: string;
  icon?: string;
  href?: string;
  children?: NavDropdownItem[];
}

export const navItems: NavItem[] = [
  {
    id: "experience",
    label: "Experience",
    path: "#experience",
    icon: "Briefcase",
  },
  {
    id: "projects",
    label: "Projects",
    path: "#projects",
    icon: "FolderOpen",
  },
  {
    id: "blog",
    label: "Blog",
    path: "/blog",
    icon: "BookOpen",
  },
  {
    id: "more",
    label: "More",
    children: [
      {
        id: "certificates",
        label: "Certificates",
        path: "/certificates",
        icon: "Award",
      },
      {
        id: "awards",
        label: "Awards",
        path: "/awards",
        icon: "Trophy",
      },
      {
        id: "inspiration",
        label: "Inspiration",
        path: "/inspiration",
        icon: "Sparkles",
      },
    ],
  },
  {
    id: "contact",
    label: "Contact",
    path: "#contact",
    icon: "Mail",
  },
];

export const sectionIds = navItems
  .filter((item) => !item.href && item.path)
  .map((item) => item.id);