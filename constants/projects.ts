import { Project, SocialLink } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Plants Care",
    description:
      "Plant Care Tracker is a digital gardening assistant that helps users manage plants, track watering schedules, and monitor plant health.",
    image: "/projects/plant.png",
    technologies: ["React", "MongoDB", "Node.js", "Tailwind CSS"],
    github: "https://github.com/TheMehediHQ/Plant-Care-Client",
    liveDemo: "https://plant-care-tracker-bd.web.app",
    details:
      "Built a scalable e-commerce platform handling 10k+ daily active users. Features include real-time inventory tracking, Stripe integration, and a comprehensive admin dashboard with analytics.",
  },
  {
    id: "2",
    title: "Food Management App",
    description:
      "Food Management is a web application that helps users organize groceries, track expiry dates, and manage food inventory.",
    image: "/projects/food.png",
    technologies: ["React", "Node.js",  "MongoDB"],
    github: "https://github.com/TheMehediHQ/Food-Garden-Client",
    liveDemo: "https://food-garden-bd.web.app",
    details:
      "A comprehensive food management system enabling users to categorize groceries, set expiry alerts, and maintain an organized inventory with real-time updates.",
  },
  {
    id: "3",
    title: "Dhuranta Online",
    description:
      "Duranta Online Ltd. is a trusted IT solutions provider offering reliable internet services for home and business users.",
    image: "/projects/duranta.png",
    technologies: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://duranta-online.vercel.app",
    liveDemo: "https://duranta-online.vercel.app",
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
