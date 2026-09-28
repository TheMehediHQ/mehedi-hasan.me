export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  subjects?: string[];
}

export const educations: Education[] = [
  {
    id: "1",
    degree: "Bachelor of Science in Physics",
    institution: "National University, Bangladesh",
    period: "2018 - 2026",
    description:
      "Studied fundamental concepts of physics including mechanics, electronics, mathematics, and scientific problem-solving.",
    subjects: ["Physics", "Mathematics", "Electronics"],
  }
];