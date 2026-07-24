"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TeamBackground } from "@/components/ui/TeamBackground";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/animations";
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
  {
    name: "Vipul Agrawal",
    role: "Business Expansion & Franchise Development",
    tags: ["Franchise Expansion", "Business Development", "Franchise Scale"],
    image: "/Team/Vipul Agrawal - Business expansion and franchise development.png",
    initials: "VA",
  },
];

function TeamCard({ member, isFounder = false }: { member: any; isFounder?: boolean }) {
  return (
    <motion.div
      variants={isFounder ? scaleIn : fadeUp}
      className={cn(
        "group relative flex flex-col",
        isFounder ? "gap-6" : "gap-4"
      )}
    >
      {/* Image Container */}
      <div
        className={cn(
          "relative overflow-hidden rounded-[2rem] border border-rx-glass-border/20 shadow-rx-lg bg-[#F8F7FF]",
          isFounder ? "aspect-[3/4]" : "aspect-[1/1.2]"
        )}
      >
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-rx-purple-deep/10 to-rx-magenta/10 flex items-center justify-center">
            <span className="rx-display-xl text-rx-purple-deep/20 font-bold select-none">{member.initials}</span>
          </div>
        )}
      </div>

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
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {founders.map((founder) => (
            <TeamCard key={founder.name} member={founder} isFounder />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
