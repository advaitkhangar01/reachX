"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  glow?: boolean;
  intensity?: "low" | "medium" | "high";
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, glow = false, intensity = "medium", ...props }, ref) => {
    const intensityStyles = {
      low: "bg-white/40 backdrop-blur-md",
      medium: "bg-white/72 backdrop-blur-xl",
      high: "bg-white/90 backdrop-blur-2xl",
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative overflow-hidden border border-rx-glass-border rounded-rx-xl will-change-transform",
          intensityStyles[intensity],
          glow && "shadow-rx-md hover:shadow-rx-lg transition-shadow duration-500",
          className
        )}
        {...props}
      >
        {glow && (
          <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500">
            <div className="absolute -inset-[1px] bg-gradient-to-br from-rx-purple-vivid/20 via-rx-magenta/20 to-rx-orange/20 rounded-[inherit]" />
          </div>
        )}
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
