"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { TeamBackground } from "@/components/ui/TeamBackground";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/animations";
import { MessageCircle, Mail, Link, X } from "lucide-react";
import { cn } from "@/lib/utils";

const founders = [
  {
    name: "Shreyash Gadwe",
    role: "Founder & Chief Executive Officer (CEO)",
    tags: ["Growth Strategy", "Leadership", "Visionary"],
    image: "/Team/Shreyash Gadwe - Founder.png",
    initials: "SG",
  },
  {
    name: "Kalash Chouria",
    role: "Co-Founder & Chief Operations Officer (COO)",
    tags: ["Operations", "Performance Marketing", "Meta Ads"],
    image: "/Team/Kalash chouria - Co-Founder - CEO.png",
    initials: "KC",
  },
  {
    name: "Jitendra Uikey",
    role: "Co-Founder & Chief Marketing & Sales Officer (CMSO)",
    tags: ["Sales Strategy", "Marketing Systems", "Growth"],
    image: "/Team/Jitendra Uikey.PNG",
    initials: "JU",
  },
  {
    name: "Advait Khangar",
    role: "Chief Technology Officer (CTO)",
    tags: ["Systems Architecture", "Tech Strategy", "Innovation"],
    image: "/Team/Advait Khangar - CTO.png",
    initials: "AK",
  },
];

const team = [
  { name: "Chaitanya Yawale", role: "Business Development Manager & Operations Executive", image: "/Team/Chaitnya Yawale -  COO.png", initials: "CY" },
  { name: "Divya Khawas", role: "Graphic Designer & Visual Media Editor", image: "/Team/Divya Khawas - Graphic Designer.png", initials: "DK" },
  { name: "Anuradha Baghele", role: "Franchise Expansion & Business Development Executive", image: "/Team/Anuradha Baghele - Business Developer.png", initials: "AB" },
  { name: "Rimzim Mahiti", role: "Lead Qualification Executive (Inbound Sales & Coordination)", image: "/Team/Rimzim Mahiti - Business Developer.png", initials: "RM" },
  { name: "Jiya Rajpoot", role: "Creative Content Strategist & Script Writer", image: "/Team/Jiya Rajput -  Script Writer.png", initials: "JR" },
  { name: "Mihir Dhotkar", role: "Associate Video Editor (Freelance Collaborator)", image: null, initials: "MD" },
  { name: "Asmit Pendam", role: "Offline Sales & Field Marketing Executive", image: "/Team/Asmit Pendam - Sales Executive.png", initials: "AP" },
  { name: "Vivek Dhone", role: "Senior Video Editor & Visual Content Specialist", image: null, initials: "VD" },
  { name: "Antara Shinde", role: "Lead Qualification Executive", image: null, initials: "AS" },
  { name: "Lobina Barsagade", role: "Lead Qualification Executive", image: "/Team/Lobina Barsagade.png", initials: "LB" },
];

function TeamCard({ member, isFounder = false }: { member: any; isFounder?: boolean }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={isFounder ? scaleIn : fadeUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative flex flex-col",
        isFounder ? "gap-6" : "gap-4"
      )}
    >
      {/* Image Container (Tilts) */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "relative perspective-1000 overflow-hidden rounded-[2rem] border border-rx-glass-border/20 shadow-rx-lg transition-all duration-500 group-hover:border-rx-purple-vivid/30",
          isFounder ? "aspect-[3/4]" : "aspect-[1/1.2]"
        )}
      >
        <div style={{ transform: "translateZ(50px)" }} className="absolute inset-0">
          {member.image ? (
            <div className="absolute inset-0 bg-[#F8F7FF]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-rx-purple-deep/10 to-rx-magenta/10 flex items-center justify-center">
              <span className="rx-display-xl text-rx-purple-deep/20 font-bold select-none">{member.initials}</span>
            </div>
          )}
          
          {/* Subtle overlay for pro look */}
          <div className="absolute inset-0 bg-gradient-to-t from-rx-base-01/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Social Links Overlay (Only on hover) */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 bg-rx-base-01/20 backdrop-blur-[2px]">
            <a href="#" className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-rx-purple-deep hover:bg-rx-purple-vivid hover:text-white transition-all shadow-rx-md">
              <Link size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-rx-purple-deep hover:bg-rx-magenta hover:text-white transition-all shadow-rx-md">
              <X size={18} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Info Block (Static below) */}
      <div className={cn("px-2", isFounder ? "text-center" : "text-left")}>
        <div className="flex flex-col gap-1">
          <h3 className={cn(
            "text-rx-text-primary font-bold tracking-tight transition-colors duration-300 group-hover:text-rx-purple-vivid",
            isFounder ? "text-2xl lg:text-3xl" : "text-lg lg:text-xl"
          )}>
            {member.name}
          </h3>
          
          <div className={cn(
            "font-semibold uppercase tracking-[0.1em] text-rx-text-muted",
            isFounder ? "text-[10px] lg:text-xs" : "text-[9px]"
          )}>
            <span className="text-gradient bg-gradient-to-r from-rx-purple-deep to-rx-magenta">
              {member.role}
            </span>
          </div>
        </div>

        {isFounder && member.tags && (
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {member.tags.map((t: string) => (
              <span key={t} className="px-3 py-1 bg-rx-purple-vivid/5 border border-rx-purple-vivid/10 rounded-full rx-mono text-[9px] text-rx-purple-deep uppercase tracking-wider">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <SectionWrapper id="team" className="bg-rx-base-01 relative overflow-hidden">
      <TeamBackground />
      
      <div className="text-center mb-20 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <SectionLabel className="mb-4">Our Elite Squad</SectionLabel>
          <h2 className="rx-display-md text-rx-text-primary mb-6">Minds Behind the Machine.</h2>
          <p className="rx-body-lg text-rx-text-secondary max-w-2xl mx-auto">
            A tight, high-performance team obsessed with one thing — your brand's exponential growth.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Founders Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {founders.map((founder) => (
            <TeamCard key={founder.name} member={founder} isFounder />
          ))}
        </motion.div>

        {/* Specialists Section */}
        <div className="pt-20 border-t border-rx-glass-border/10">
          <div className="flex items-center gap-6 mb-16">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-rx-glass-border/20" />
            <h3 className="rx-mono text-[10px] font-bold text-rx-text-muted uppercase tracking-[0.4em]">Core Specialists</h3>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-rx-glass-border/20" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
