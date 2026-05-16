"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Store, Percent, Briefcase, Globe } from "lucide-react";

const stats = [
  {
    icon: Store,
    value: 140,
    suffix: "+",
    label: "Franchise Outlets Enabled",
    sublabel: "Across India via MahaChai & more",
    color: "var(--color-rx-purple-vivid)",
  },
  {
    icon: Percent,
    value: 40,
    suffix: "%",
    label: "Avg Site Visit Conversion",
    sublabel: "Pyramid Group: 40% · Siddhivinayak: 30%",
    color: "var(--color-rx-magenta)",
  },
  {
    icon: Globe,
    value: 9,
    suffix: "+",
    label: "Industries Served",
    sublabel: "Real Estate · F&B · EdTech · Infra",
    color: "var(--color-rx-orange)",
  },
  {
    icon: Briefcase,
    value: 360,
    suffix: "°",
    label: "End-to-End Growth Systems",
    sublabel: "From creatives to sales closure",
    color: "var(--color-rx-purple-deep)",
  },
];

export default function Achievements() {
  return (
    <SectionWrapper
      id="achievements"
      className="bg-rx-base-02"
      bgLayer={
        <>
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#5A2193_1.5px,transparent_1.5px)] [background-size:32px_32px]" />
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
          
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-rx-purple-vivid/5 blur-[120px] rounded-full" />
        </>
      }
    >
      <div className="text-center mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <SectionLabel className="mb-4">What We've Built</SectionLabel>
          <h2 className="rx-display-md text-rx-text-primary">Numbers That Speak.</h2>
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {stats.map((stat, index) => (
          <motion.div key={index} variants={fadeUp}>
            <GlassCard
              glow
              className="p-10 h-full group hover:-translate-y-2 transition-all duration-500"
              intensity="medium"
            >
              <div
                className="w-12 h-12 rounded-xl mb-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                <stat.icon size={24} style={{ color: stat.color }} />
              </div>

              <div className="flex items-baseline gap-1 mb-2">
                <span className="rx-display-lg text-rx-text-primary">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </span>
                <span className="rx-heading-lg text-rx-purple-vivid">{stat.suffix}</span>
              </div>

              <h3 className="rx-heading-md text-rx-text-primary mb-2">
                {stat.label}
              </h3>
              <p className="rx-body-sm text-rx-text-muted">
                {stat.sublabel}
              </p>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-rx-purple-vivid via-rx-magenta to-rx-orange transition-all duration-700 group-hover:w-full" />
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
