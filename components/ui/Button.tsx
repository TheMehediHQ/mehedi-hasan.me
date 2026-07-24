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
  
    const variants = {
      primary: {
        backgroundColor: "var(--color-accent)",
        color: "var(--color-button-primary-text)",
        border: "none",
      },
      secondary: {
        backgroundColor: "transparent",
        color: "var(--color-button-secondary-text)",
        border: "1px solid var(--color-border)",
      },
      ghost: {
        backgroundColor: "transparent",
        color: "var(--color-secondary-text)",
        border: "none",
      },
    };

    const sizes = {
      sm: "px-2 py-1 text-sm",
      md: "px-5 py-2.5 text-sm",
      lg: "px-8 py-3.5 text-base",
    };

    const hoverStyles = {
      primary: { backgroundColor: "var(--color-accent-hover)" },
      secondary: { backgroundColor: "var(--color-hover)" },
      ghost: { backgroundColor: "var(--color-hover)" },
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizes[size], className)}
        style={variants[variant]}
        onMouseEnter={(e) => {
          Object.assign(e.currentTarget.style, hoverStyles[variant]);
        }}
        onMouseLeave={(e) => {
          Object.assign(e.currentTarget.style, variants[variant]);
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
