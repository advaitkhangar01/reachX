import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <span className="w-8 h-[1px] bg-rx-purple-vivid/30" />
      <span className="rx-label text-rx-purple-vivid uppercase tracking-[0.2em] font-bold">
        {children}
      </span>
    </div>
  );
}
