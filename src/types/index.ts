export interface NavItem {
  id: string;
  label: string;
  path: string;
  icon: string;
  href?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
  type?: "full-time" | "internship" | "volunteer";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  liveDemo: string;
  details: string;
  type: "professional" | "personal";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  subjects?: string[];
}
