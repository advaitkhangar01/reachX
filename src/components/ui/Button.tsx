"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/useMagnetic";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  isMagnetic?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isMagnetic = true, children, ...props }, ref) => {
    const magnetic = useMagnetic();
    const buttonRef = (isMagnetic ? magnetic.ref : ref) as React.RefObject<HTMLButtonElement>;

    const variants = {
      primary: "bg-rx-purple-deep text-white shadow-rx-sm hover:shadow-rx-glow-sm bg-gradient-primary",
      secondary: "bg-transparent border border-rx-glass-border glass-bg text-rx-text-primary hover:border-rx-purple-vivid/30",
      ghost: "bg-transparent text-rx-text-secondary hover:text-rx-text-primary hover:bg-rx-base-04/50",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-8 py-4 text-base",
      lg: "px-10 py-5 text-lg",
    };

    const baseStyles = "relative inline-flex items-center justify-center rounded-rx-pill font-medium transition-all duration-300 active:scale-95";

    const content = (
      <motion.button
        ref={buttonRef}
        style={isMagnetic ? { x: magnetic.x, y: magnetic.y } : {}}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...(props as any)}
      >
        {children}
      </motion.button>
    );

    return content;
  }
);

Button.displayName = "Button";

export { Button };
