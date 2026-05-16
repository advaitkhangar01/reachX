"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { ArrowUpRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  name: string;
  url: string;
  category: string;
  tags: string[];
  gradient: string;
  icon: LucideIcon;
  desc: string;
}

interface ProjectPerspectiveCardProps {
  project: Project;
  index: number;
  total: number;
  globalProgress: MotionValue<number>;
  onClick: () => void;
}

export function ProjectPerspectiveCard({ project, index, total, globalProgress, onClick }: ProjectPerspectiveCardProps) {
  const Icon = project.icon;
  
  // Calculate specific scroll range for this card with safety margins
  // Using total || 1 to avoid division by zero
  // Use memoized ranges to ensure stability during re-renders
  const { range, opacityRange } = React.useMemo(() => {
    const s = index / (total || 1);
    const e = (index + 1) / (total || 1);
    const c = (s + e) / 2;
    
    // Tiny epsilon to guarantee strict monotonicity even with floating point jitter
    const eps = 0.00001;
    
    // Ensure values are strictly increasing even if total is large or calculations are close
    const s_safe = s;
    const c_safe = Math.max(s_safe + eps, c);
    const e_safe = Math.max(c_safe + eps, e);
    
    const o1 = Math.max(0, s_safe - 0.01);
    const o2 = Math.max(o1 + eps, s_safe);
    const o4 = Math.min(1, e_safe + 0.01);
    const o3 = Math.min(o4 - eps, e_safe);
    
    return {
      range: [s_safe, c_safe, e_safe],
      // Ensure opacity range is strictly increasing and stays within [0, 1]
      opacityRange: [o1, o2, o3, o4]
    };
  }, [index, total]);
  
  // 3D Transforms based on global scroll
  const opacity = useTransform(globalProgress, opacityRange, [0, 1, 1, 0]);
  const scale = useTransform(globalProgress, range, [0.9, 1, 0.95]);
  const rotateX = useTransform(globalProgress, range, [15, 0, -10]);
  const z = useTransform(globalProgress, range, [-100, 0, -50]);
  const y = useTransform(globalProgress, range, [50, 0, -25]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
        rotateX,
        z,
        y,
        position: "absolute",
        zIndex: total - index
      }}
      className="w-full max-w-5xl aspect-[16/10] md:aspect-[21/9] rounded-[40px] overflow-hidden cursor-pointer group bg-rx-base-03 border border-rx-glass-border shadow-rx-lg"
      onClick={onClick}
    >
      {/* Background Layer with Kinetic Parallax */}
      <div className={cn(
        "absolute inset-0 opacity-10 bg-gradient-to-br transition-all duration-1000",
        project.gradient
      )} />

      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] z-0" />

      {/* Content Layout */}
      <div className="relative h-full w-full flex items-center p-12 lg:p-20 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Side: Visual/Icon */}
          <motion.div 
            className="relative hidden md:flex items-center justify-center h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-[40px] bg-white shadow-rx-glow flex items-center justify-center border border-rx-base-04 group-hover:rotate-6 transition-transform duration-700">
               <Icon size={80} className="text-rx-text-primary group-hover:scale-110 transition-transform duration-700" />
               
               {/* Decorative Rim Light */}
               <div className="absolute inset-0 rounded-[40px] ring-1 ring-inset ring-rx-purple-vivid/20 pointer-events-none" />
            </div>

            {/* Orbiting Elements (Subtle decoration) */}
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-rx-magenta blur-2xl opacity-20 group-hover:opacity-40 animate-pulse" />
            <div className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full bg-rx-purple-vivid blur-3xl opacity-20 group-hover:opacity-40" />
          </motion.div>

          {/* Right Side: Information */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="flex items-center gap-4">
               <span className="rx-mono text-[10px] text-rx-purple-vivid uppercase tracking-[0.4em] font-bold">Project 0{index + 1}</span>
               <div className="h-[1px] w-12 bg-rx-text-ghost/30" />
            </div>

            <h3 className="rx-display-md text-rx-text-primary leading-none tracking-tighter">
              {project.name}
            </h3>

            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span key={tag} className="rx-mono text-[9px] uppercase tracking-widest text-rx-text-muted bg-rx-base-04 px-3 py-1.5 rounded-full border border-rx-glass-border">
                  {tag}
                </span>
              ))}
            </div>

            <p className="rx-body-lg text-rx-text-secondary max-w-md leading-relaxed">
              {project.desc}
            </p>

            <motion.div 
              className="flex items-center gap-4 group/btn mt-4"
              whileHover={{ x: 10 }}
            >
              <div className="w-14 h-14 rounded-full border border-rx-text-ghost/30 flex items-center justify-center text-rx-text-primary group-hover/btn:bg-rx-text-primary group-hover/btn:text-white transition-all duration-500">
                <ArrowUpRight size={24} />
              </div>
              <span className="rx-mono text-[10px] uppercase tracking-[0.2em] font-bold">Explore Deployment</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hover Light Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
      
      {/* Dynamic Aura Rim */}
      <div className={cn(
        "absolute inset-0 ring-1 ring-inset ring-white/20 group-hover:ring-rx-purple-vivid/30 transition-all duration-700 rounded-[40px] pointer-events-none"
      )} />
    </motion.div>
  );
}
