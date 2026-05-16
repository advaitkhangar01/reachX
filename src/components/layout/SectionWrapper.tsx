import React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  bgLayer?: React.ReactNode;
}

export default function SectionWrapper({
  id,
  children,
  className,
  containerClassName,
  bgLayer,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-[clamp(80px,10vw,160px)]",
        className
      )}
    >
      {/* Background Layer */}
      {bgLayer && <div className="absolute inset-0 z-0">{bgLayer}</div>}

      {/* Content Layer */}
      <div
        className={cn(
          "container mx-auto max-w-[1400px] px-10 relative z-10",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
