import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "XGari",
    description:
      "A modern automotive marketplace platform where users can browse, compare, and discover vehicles with a fast and responsive user experience.",
    image: "/projects/xgari.png",
    technologies: ["Next.js", "PostgreSQL", "Hono", "Tailwind CSS"],
    github: "",
    liveDemo: "https://xgari.com",
    details:
      "Built a scalable automotive marketplace with secure authentication, advanced search, responsive UI, and a powerful admin dashboard for managing vehicles, users, and platform content.",
  },
  {
    id: "2",
    title: "AYVoice",
    description:
      "A cloud-based bulk SMS and voice calling platform that enables businesses to manage campaigns, contacts, and communication efficiently.",
    image: "/projects/ayvoice.png",
    technologies: ["Next.js", "Hono", "PostgreSQL"],
    github: "",
    liveDemo: "https://ayvoice.com",
    details:
      "Developed a communication platform with campaign management, contact organization, message history, and third-party API integration for bulk SMS and voice call services.",
  },
  {
    id: "3",
    title: "NexVibe",
    description:
      "A modern software agency website showcasing services, portfolio, and business solutions with a clean, responsive, and high-performance design.",
    image: "/projects/nexvibe.png",
    technologies: ["Next.js", "Tailwind CSS"],
    github: "",
    liveDemo: "https://nexvibe.tech",
    details:
      "Built a fast and SEO-friendly business website using Next.js with responsive layouts, smooth animations, optimized performance, and a professional user experience.",
  },
];