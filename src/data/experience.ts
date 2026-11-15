import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Full Stack Software Engineer",
    company: "NexVibe",
    companyUrl: "https://www.nexvibe.tech",
    period: "January 2026 - October 2026",
    description:
      "Leading full-stack development for a SaaS platform serving 100k+ users. Implemented micro-frontend architecture and improved performance by 40%.",
   technologies: ["React", "Next.js", "TypeScript","PostgreSQL", "Node.js"]

  },
  {
    id: "2",
    role: "Full Stack Developer Intern",
    company: "Apexiums Technologies",
    companyUrl: "https://www.apexiumstechnologies.com",
    period: "October 2025 - December 2025",
    description:
      "Built and maintained multiple client projects from concept to deployment. Specialized in React ecosystems and RESTful API design.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "AWS"],
  },
  {
    id: "3",
    role: "Volunteer",
    company: "Quantum Foundation",
    companyUrl: "https://quantummethod.org",
    period: "February 2018 - Present",
    description:
      "Working as a volunteer, contributing to motivational initiatives and community outreach programs to inspire and uplift people.",
    technologies: ["Motivational Speaking", "Community Outreach", "Leadership", "Public Speaking"],
    type: "volunteer",
  }
];
