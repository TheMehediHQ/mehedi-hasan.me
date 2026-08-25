import type { Project } from "@/types";

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
    type: "professional",
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
    type: "professional",
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
    type: "professional",
  },
  {
    id: "4",
    title: "Kashly",
    description:
      "A modern money management app that helps users track income and expenses, set budgets, and achieve financial goals with real-time dashboards.",
    image: "/projects/kashly.png",
    technologies: ["Next.js", "TypeScript", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/TheMehediHQ/Kashly",
    liveDemo: "https://kashly.mehedi-hasan.me",
    details:
      "Built a full-stack financial tracking platform with secure authentication via Clerk, real-time expense monitoring, smart budgeting, categorized transaction history, and a responsive UI using Next.js, Express, and MongoDB.",
    type: "personal",
  },
  {
    id: "5",
    title: "Treely",
    description:
      "Treely is a plant care tracking and management web application that helps users manage their plant collections, access care guides, and track watering schedules.",
    image: "/projects/treely.png",
    technologies: ["React", "Express", "MongoDB", "Firebase", "Tailwind CSS"],
    github: "https://github.com/TheMehediHQ/Treely",
    liveDemo: "https://treely.mehedi-hasan.me",
    details:
      "Built a full-stack plant care application with secure authentication via Clerk, plant collection management, care guides, watering schedule tracking, and a responsive UI using React, Express, MongoDB, Firebase, and Tailwind CSS.",
    type: "personal",
  },
  {
    id: "6",
    title: "Foodly",
    description:
      "Foodly is a smart food inventory app that tracks expiry dates, monitors freshness, and prevents food waste in real-time.",
    image: "/projects/foodly.png",
    technologies: ["React", "Express", "MongoDB", "Firebase", "Tailwind CSS"],
    github: "https://github.com/TheMehediHQ/Foodly",
    liveDemo: "https://foodly.mehedi-hasan.me",
    details:
      "Built a full-stack food inventory application with secure authentication via Clerk, expiry date tracking, freshness monitoring, waste prevention, and a responsive UI using React, Express, MongoDB, Firebase, and Tailwind CSS.",
    type: "personal",
  },
];