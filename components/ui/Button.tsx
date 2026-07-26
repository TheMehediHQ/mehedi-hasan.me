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
        border: "1px solid var(--secondary-border)",
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

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          sizes[size],
          "btn-flicker-fix",
          className,
          variant === "primary" && "hover:bg-[var(--color-accent-hover)]",
          variant === "secondary" && "secondary-btn hover:bg-[var(--color-hover)]",
          variant === "ghost" && "hover:bg-[var(--color-hover)]",
        )}
        style={variants[variant]}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
