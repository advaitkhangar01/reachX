"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Megaphone, Code, Palette, Zap, ArrowUpRight, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/useMagnetic";

const services = [
  {
    id: "01",
    title: "Meta Ads & SMMA Performance",
    description: "Full-funnel social media marketing agency (SMMA) infrastructure and certified Meta ads specialist architectures that systematically scale brand revenue.",
    features: ["Meta Ads Specialist", "Conversion API (CAPI)", "High-ROAS Funnels"],
    icon: Megaphone,
    color: "#5A2193",
    outcome: "25–40% lead quality improvement",
    size: "lg", // Occupies more space in bento
  },
  {
    id: "02",
    title: "Software & Development",
    description: "High-performance websites and custom CRM solutions engineered for conversion and operational efficiency.",
    features: ["Next.js", "Custom CRMs", "SaaS"],
    icon: Code,
    color: "#9B25AA",
    outcome: "Site speed increased by 200%",
    size: "md",
  },
  {
    id: "03",
    title: "Content & Creative",
    description: "Premium editorial design and cinematic content that positions your brand as a market leader.",
    features: ["Branding", "Motion", "UX/UI"],
    icon: Palette,
    color: "#DA334F",
    outcome: "CTR increased by avg 1.8x",
    size: "md",
  },
  {
    id: "04",
    title: "Sales & Conversion",
    description: "Full-funnel optimization and sales systems that turn high-intent leads into loyal customers.",
    features: ["CRO", "Automation", "Funnel Engineering"],
    icon: Zap,
    color: "#AD2A66",
    outcome: "Sales cycle reduced by 30%",
    size: "sm",
  },
  {
    id: "05",
    title: "Franchise Growth",
    description: "End-to-end systems for franchise expansion, from lead generation to outlet launch across India.",
    features: ["Lead Gen", "Expansion Systems", "Support"],
    icon: TrendingUp,
    color: "#E3514C",
    outcome: "140+ outlets enabled",
    size: "sm",
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-white overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mb-20"
      >
        <SectionLabel className="mb-4">Our Engine</SectionLabel>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <motion.h2 variants={fadeUp} className="rx-display-md text-rx-text-primary">
            Five Systems. <br /> One Growth OS.
          </motion.h2>
          <motion.p variants={fadeUp} className="rx-body-lg text-rx-text-secondary max-w-md">
            We build the complete digital infrastructure required to scale your revenue with precision and speed.
          </motion.p>
        </div>
      </motion.div>

      {/* Holographic Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
        {/* Row 1 */}
        <BentoCard 
          service={services[0]} 
          className="lg:col-span-8 min-h-[340px]" 
        />
        
        <BentoCard 
          service={services[1]} 
          className="lg:col-span-4 min-h-[340px]" 
        />
        
        {/* Row 2 */}
        <BentoCard 
          service={services[2]} 
          className="lg:col-span-4 min-h-[340px]" 
        />
        
        <BentoCard 
          service={services[3]} 
          className="lg:col-span-4 min-h-[340px]" 
        />
        
        <BentoCard 
          service={services[4]} 
          className="lg:col-span-4 min-h-[340px]" 
        />
      </div>
    </SectionWrapper>
  );
}

function BentoCard({ service, className }: { service: typeof services[0], className?: string }) {
  const { ref: magneticRef, x, y } = useMagnetic();
  
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "group relative glass-bg border border-rx-glass-border rounded-[32px] overflow-hidden p-8 flex flex-col transition-all duration-500 hover:shadow-rx-glow-sm",
        className
      )}
    >
      {/* Animated Background Engine Visual */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none transition-transform duration-700 group-hover:scale-110">
        <div 
          className="absolute -top-1/2 -left-1/2 w-full h-full blur-[120px] rounded-full opacity-30 animate-pulse"
          style={{ background: service.color }}
        />
        <div 
          className="absolute -bottom-1/2 -right-1/2 w-full h-full blur-[120px] rounded-full opacity-20"
          style={{ background: service.color }}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-8">
          <motion.div 
            ref={magneticRef}
            style={{ x, y, background: service.color }}
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg cursor-pointer"
          >
            <service.icon size={28} />
          </motion.div>
          <div className="rx-mono text-[10px] text-rx-text-muted opacity-40 uppercase tracking-widest">
            Module {service.id}
          </div>
        </div>

        <h3 className="rx-display-sm text-rx-text-primary mb-4 group-hover:text-rx-purple-vivid transition-colors">
          {service.title}
        </h3>
        
        <p className={cn(
          "rx-body-md text-rx-text-secondary mb-8",
          service.size === "lg" ? "max-w-md" : "max-w-xs"
        )}>
          {service.description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {service.features.map(f => (
              <span key={f} className="px-3 py-1 bg-rx-base-03 border border-rx-glass-border rounded-full rx-mono text-[9px] text-rx-text-primary">
                {f}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-rx-glass-border pt-6">
            <div>
              <div className="rx-label text-[9px] text-rx-text-muted mb-1 uppercase tracking-tighter">Typical Outcome</div>
              <div className="rx-body-sm font-bold text-rx-text-primary flex items-center gap-2">
                {service.outcome} <ArrowUpRight size={14} className="text-rx-magenta" />
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-rx-base-03 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
              <ArrowUpRight size={20} className="text-rx-text-primary" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
