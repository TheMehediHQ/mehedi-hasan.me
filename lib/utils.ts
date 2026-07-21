import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cv(variable: string, fallback?: string): string {
  return `var(${variable}${fallback ? `, ${fallback}` : ""})`;
}
