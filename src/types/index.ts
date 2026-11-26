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

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
  links?: Record<string, string>;
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

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  issuerIcon: string;
  date: string;
  credentialUrl: string;
  tags: string[];
}

export interface InspirationItem {
  id: string;
  type: "book" | "philosophy" | "science" | "engineering";
  author: string;
  authorRole: string;
  authorImage?: string;
  quote: string;
  sourceOrContext: string;
  reflection?: string;
  tags: string[];
  link?: string;
}

export interface MediaImage {
  src: string;
  alt: string;
  caption?: string;
  featured?: boolean;
}

export interface MediaEvent {
  id: string;
  title: string;
  subtitle?: string;
  location?: string;
  date?: string;
  images: MediaImage[];
}
