export interface Project {
  name: string;
  href: string;
  video: string;
  year: string;
  tech: string[];
  type: string;
}

export const projects: Project[] = [
  {
    name: "AY Voice",
    href: "https://ayvoice.com",
    video: "/projects/ayvoice.webm",
    year: "2026",
    tech: ["Next.js", "OpenAI", "PostgreSQL"],
    type: "AI SaaS",
  },
  {
    name: "NexVibe",
    href: "https://nexvibe.tech",
    video: "/projects/mexvibe.webm",
    year: "2025",
    tech: ["Next.js", "TypeScript", "AWS"],
    type: "Web Platform",
  },
  {
    name: "Kashly",
    href: "https://kashly.mehedi-hasan.me",
    video: "/projects/kashly.webm",
    year: "2024",
    tech: ["React", "Node.js", "MongoDB"],
    type: "Full Stack",
  },
];
