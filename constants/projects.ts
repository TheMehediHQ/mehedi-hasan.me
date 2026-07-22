import { Project, SocialLink } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Plants Care",
    description:
      "A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
    image: "/projects/plant.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
    github: "https://github.com/themehedihq/ecommerce",
    liveDemo: "https://ecommerce-demo.vercel.app",
    details:
      "Built a scalable e-commerce platform handling 10k+ daily active users. Features include real-time inventory tracking, Stripe integration, and a comprehensive admin dashboard with analytics.",
  },
  {
    id: "2",
    title: "Food Management App",
    description:
      "Collaborative task management application with real-time updates and team workspaces.",
    image: "/projects/food.png",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    github: "https://github.com/themehedihq/taskmanager",
    liveDemo: "https://taskmanager-demo.vercel.app",
    details:
      "A real-time task management app supporting multiple teams, Kanban boards, and live collaboration. Implemented using WebSockets for instant updates.",
  },
  {
    id: "3",
    title: "Dhuranta Online",
    description:
      "Beautiful weather dashboard with 7-day forecasts, interactive maps, and location-based alerts.",
    image: "/projects/duranta.png",
    technologies: ["React", "OpenWeather API", "Mapbox", "Tailwind CSS"],
    github: "https://github.com/themehedihq/weather-dashboard",
    liveDemo: "https://weather-dashboard-demo.vercel.app",
    details:
      "A visually stunning weather dashboard featuring 7-day forecasts, interactive maps, severe weather alerts, and beautiful animated transitions between weather states.",
  }
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/themehedihq", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/themehedihq", icon: "Linkedin" },
  { name: "Twitter", url: "https://twitter.com/themehedihq", icon: "Twitter" },
  { name: "Email", url: "mailto:mehedi.hasan16111@gmail.com", icon: "Mail" },
];
