import { Project, SocialLink } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
    github: "https://github.com/mehedihasan/ecommerce",
    liveDemo: "https://ecommerce-demo.vercel.app",
    details:
      "Built a scalable e-commerce platform handling 10k+ daily active users. Features include real-time inventory tracking, Stripe integration, and a comprehensive admin dashboard with analytics.",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates and team workspaces.",
    image: "/projects/taskmanager.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    github: "https://github.com/mehedihasan/taskmanager",
    liveDemo: "https://taskmanager-demo.vercel.app",
    details:
      "A real-time task management app supporting multiple teams, Kanban boards, and live collaboration. Implemented using WebSockets for instant updates.",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "Beautiful weather dashboard with 7-day forecasts, interactive maps, and location-based alerts.",
    image: "/projects/weather.jpg",
    technologies: ["React", "OpenWeather API", "Mapbox", "Tailwind CSS"],
    github: "https://github.com/mehedihasan/weather-dashboard",
    liveDemo: "https://weather-dashboard-demo.vercel.app",
    details:
      "A visually stunning weather dashboard featuring 7-day forecasts, interactive maps, severe weather alerts, and beautiful animated transitions between weather states.",
  },
  {
    id: "4",
    title: "Developer Portfolio",
    description:
      "Modern, animated portfolio website with 3D elements and smooth page transitions.",
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "Framer Motion", "Three.js", "Tailwind CSS"],
    github: "https://github.com/mehedihasan/portfolio",
    liveDemo: "https://mehedihasan.dev",
    details:
      "A cutting-edge portfolio featuring 3D animations, smooth page transitions, and a custom content management system. Built with performance and accessibility in mind.",
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/mehedihasan", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/mehedihasan", icon: "Linkedin" },
  { name: "Twitter", url: "https://twitter.com/mehedihasan", icon: "Twitter" },
  { name: "Email", url: "mailto:mehedi@example.com", icon: "Mail" },
];
