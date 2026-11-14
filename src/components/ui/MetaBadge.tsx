"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ShieldCheck, Activity, Sparkles, TrendingUp } from "lucide-react";

export function MetaLogoSvg({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M16.924 3.018C15.19 3.018 13.567 3.931 12.5 5.37 11.433 3.931 9.81 3.018 8.076 3.018 4.385 3.018 1.5 5.992 1.5 9.817c0 4.148 3.518 7.974 7.545 10.985a5.556 5.556 0 0 0 6.91 0c4.027-3.011 7.545-6.837 7.545-10.985 0-3.825-2.885-6.799-6.576-6.799zm-4.424 14.54a24.16 24.16 0 0 1-4.788-3.79c-2.42-2.39-3.712-4.665-3.712-6.951 0-2.385 1.706-4.223 4.076-4.223 1.624 0 3.082.973 3.704 2.476l.72 1.745.72-1.745c.622-1.503 2.08-2.476 3.704-2.476 2.37 0 4.076 1.838 4.076 4.223 0 2.286-1.292 4.56-3.712 6.951a24.16 24.16 0 0 1-4.788 3.79z" 
        fill="url(#metaGradient)" 
      />
      <defs>
        <linearGradient id="metaGradient" x1="1.5" y1="3.018" x2="22.5" y2="20.802" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0081FB" />
          <stop offset="0.5" stopColor="#0064E0" />
          <stop offset="1" stopColor="#9B25AA" />
        </linearGradient>
      </defs>
    </svg>
  );
}

interface MetaBadgeProps {
  className?: string;
  variant?: "partner" | "telemetry" | "roas" | "testing";
  label?: string;
}

export function MetaBadge({ className, variant = "partner", label }: MetaBadgeProps) {
  if (variant === "telemetry") {
    return (
      <div className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 shadow-sm backdrop-blur-sm",
        className
      )}>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="rx-mono text-[9px] uppercase tracking-wider font-semibold">
          {label || "Live Server-Side CAPI (Conversions API)"}
        </span>
      </div>
    );
  }

  if (variant === "roas") {
    return (
      <div className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-rx-purple-vivid/10 to-rx-magenta/10 border border-rx-purple-vivid/30 text-rx-purple-deep shadow-sm backdrop-blur-sm",
        className
      )}>
        <TrendingUp size={13} className="text-rx-purple-vivid" />
        <span className="rx-mono text-[9px] uppercase tracking-wider font-bold">
          {label || "4.8x Avg Blended ROAS"}
        </span>
      </div>
    );
  }

  if (variant === "testing") {
    return (
      <div className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rx-orange/10 border border-rx-orange/30 text-rx-orange shadow-sm backdrop-blur-sm",
        className
      )}>
        <Sparkles size={13} />
        <span className="rx-mono text-[9px] uppercase tracking-wider font-bold">
          {label || "Dynamic Creative Testing (DCT)"}
        </span>
      </div>
    );
  }

  // Default "partner" badge
  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#0081FB]/10 via-[#0064E0]/10 to-rx-purple-vivid/10 border border-[#0081FB]/30 shadow-sm backdrop-blur-md",
      className
    )}>
      <MetaLogoSvg className="w-4 h-4 shrink-0" />
      <span className="rx-mono text-[9px] uppercase tracking-wider font-bold text-rx-text-primary">
        {label || "Meta Ads Engine · Verified Scaling"}
      </span>
      <ShieldCheck size={13} className="text-[#0081FB] shrink-0" />
    </div>
  );
}
