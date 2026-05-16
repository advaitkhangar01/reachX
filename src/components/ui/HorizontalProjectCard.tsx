"use client";

import React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";
import { ExternalLink, Globe, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  name: string;
  url: string;
  category: string;
  tags: string[];
  gradient: string;
  icon?: LucideIcon;
  desc?: string;
}

interface HorizontalProjectCardProps {
  project: Project;
  index: number;
  velocity: MotionValue<number>;
  onClick: () => void;
}

export function HorizontalProjectCard({ project, index, velocity, onClick }: HorizontalProjectCardProps) {
  // Kinetic transforms based on velocity
  // Velocity is in pixels per second (approx), so we map it to degrees
  const skewX = useTransform(velocity, [-500, 500], [-5, 5], { clamp: false });
  const scale = useTransform(velocity, [-500, 0, 500], [0.95, 1, 0.95]);
  
  // Holographic shine follows velocity
  const shineX = useTransform(velocity, [-500, 500], ["-20%", "120%"]);

  return (
    <motion.div
      style={{ skewX, scale }}
      whileHover={{ y: -20 }}
      onClick={onClick}
      className="relative flex-shrink-0 w-[80vw] md:w-[600px] h-[50vh] md:h-[400px] cursor-pointer group"
    >
      {/* Main Card Body */}
      <div className="relative w-full h-full rounded-[48px] overflow-hidden bg-white border border-rx-glass-border shadow-rx-md transition-shadow duration-500 group-hover:shadow-rx-lg flex flex-col">
        
        {/* Visual Top Area */}
        <div className={cn("relative flex-1 overflow-hidden", project.gradient)}>
           {/* Subtle Noise/Grain */}
           <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
           
           {/* Holographic Shine Flare */}
           <motion.div 
             style={{ x: shineX }}
             className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] pointer-events-none z-10"
           />

           {/* Icon / Meta */}
           <div className="absolute top-8 left-8 z-20">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-lg">
                 {project.icon ? <project.icon size={28} /> : <Globe size={28} />}
              </div>
           </div>

           <div className="absolute top-8 right-8 z-20">
              <div className="flex gap-2">
                 {project.tags.slice(0, 2).map(tag => (
                   <span key={tag} className="px-4 py-1.5 rounded-full bg-black/10 backdrop-blur-md rx-mono text-[9px] text-white border border-white/20">
                     {tag}
                   </span>
                 ))}
              </div>
           </div>

           {/* View Indicator */}
           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="px-8 py-3 rounded-full bg-white text-rx-text-primary rx-mono text-[11px] font-bold shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                 Explore Project
              </div>
           </div>
        </div>

        {/* Content Bottom Area */}
        <div className="p-8 md:p-10 flex flex-col">
           <div className="flex items-center justify-between mb-2">
              <span className="rx-mono text-[10px] text-rx-purple-vivid font-bold uppercase tracking-[0.3em]">{project.category}</span>
              <span className="rx-mono text-[10px] text-rx-text-ghost">0{index + 1}</span>
           </div>
           <h3 className="rx-heading-lg text-rx-text-primary mb-2">{project.name}</h3>
           <p className="rx-body-sm text-rx-text-muted">{project.desc}</p>
        </div>
      </div>

      {/* Decorative Aura */}
      <div className={cn(
        "absolute -inset-4 blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 -z-10 rounded-[60px]",
        project.gradient
      )} />
    </motion.div>
  );
}
