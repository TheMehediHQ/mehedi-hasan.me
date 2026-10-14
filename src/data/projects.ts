import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "AY Voice",
    description:
      "A cloud-based SMS and voice platform for businesses to manage campaigns, contacts, and bulk communications efficiently.",
    image: "/projects/ayvoice.webp",
    technologies: ["Next.js", "Hono", "PostgreSQL"],
    github: "https://github.com/TheMehediHQ",
    liveDemo: "https://ayvoice.com",
    details:
      "Developed a communication platform with campaign management, contact organization, message history, and third-party API integration for bulk SMS and voice call services.",
    type: "professional",
  },
  {
    id: "2",
    title: "NexVibe",
    description:
      "A modern software agency website showcasing services, portfolio, and business solutions with a clean, responsive design.",
    image: "/projects/nexvibe.webp",
    technologies: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/TheMehediHQ/NexvibeHq",
    liveDemo: "https://nexvibe.tech",
    details:
      "Built a fast and SEO-friendly business website using Next.js with responsive layouts, smooth animations, optimized performance, and a professional user experience.",
    type: "professional",
  },
  {
    id: "3",
    title: "Kashly",
    description:
      "A modern money management app for tracking income, expenses, budgets, and financial goals with real-time dashboards.",
    image: "/projects/kashly.webp",
    technologies: [
      "Next.js",
      "TypeScript",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    github: "https://github.com/TheMehediHQ/Kashly",
    liveDemo: "https://kashly.mehedi-hasan.me",
    details:
      "Built a full-stack financial tracking platform with secure authentication via Clerk, real-time expense monitoring, smart budgeting, categorized transaction history, and a responsive UI using Next.js, Express, and MongoDB.",
    type: "personal",
  },
  {
    id: "4",
    title: "Foodly",
    description:
      "Foodly is a smart food inventory app that tracks expiry dates, monitors freshness, and helps prevent food waste.",
    image: "/projects/foodly.webp",
    technologies: [
      "React",
      "Express",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
    ],
    github: "https://github.com/TheMehediHQ/Foodly",
    liveDemo: "https://foodly.mehedi-hasan.me",
    details:
      "Built a full-stack food inventory application with secure authentication via Clerk, expiry date tracking, freshness monitoring, waste prevention, and a responsive UI using React, Express, MongoDB, Firebase, and Tailwind CSS.",
    type: "personal",
  },
];