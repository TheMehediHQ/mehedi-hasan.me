

"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

    const variantClasses = {
      primary: [
        "bg-[var(--color-accent)]",
        "text-[var(--color-button-primary-text)]",
        "border-none",
        "hover:!bg-[var(--color-accent-hover)]",
        "hover:!shadow-md",
       
        "active:scale-95",
      ].join(" "),
      secondary: [
        "bg-transparent",
        "text-[var(--color-button-secondary-text)]",
        "border",
        "border-[var(--secondary-border)]",
        "hover:!bg-[var(--color-hover)]",
        "hover:!border-[var(--color-hover-border)]",
      
        "active:scale-95",
      ].join(" "),
      ghost: [
        "bg-transparent",
        "text-[var(--color-secondary-text)]",
        "border-none",
        "hover:!bg-[var(--color-hover)]",
        
        "active:scale-95",
      ].join(" "),
    };

    const sizes = {
      sm: "px-2 py-1 text-sm",
      md: "px-5 py-2.5 text-sm",
      lg: "px-8 py-3.5 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          sizes[size],
          variantClasses[variant],
          "btn-flicker-fix",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;