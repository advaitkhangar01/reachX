"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/animations";
import dynamic from "next/dynamic";
import { ArrowRight, Play, CheckCircle2, TrendingUp, Users, Target, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const HeroShader = dynamic(() => import("@/components/canvas/HeroShader"), {
  ssr: false,
});

const activities = [
  { id: 1, text: "New Lead — Nagpur", type: "success" },
  { id: 2, text: "Deal Closed — Pune", type: "success" },
  { id: 3, text: "Site Visit Booked", type: "pending" },
  { id: 4, text: "Campaign Live — Mumbai", type: "active" },
];

export default function Hero() {
  const [activityIndex, setActivityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivityIndex((prev) => (prev + 1) % activities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden">
      {/* Background Layer */}
      <HeroShader />
      <div className="absolute inset-0 bg-white/10 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none noise-bg" />

      <div className="container mx-auto max-w-[1400px] px-10 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div variants={fadeUp} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-bg border border-rx-glass-border shadow-rx-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="rx-mono text-rx-text-muted text-[10px]">
                  15+ Brands Scaled → 140+ Outlets Enabled
                </span>
              </div>
            </motion.div>

            <motion.h1 variants={fadeUp} className="rx-display-xl mb-6">
              Scaling Brands <br />
              <span className="text-gradient relative">
                Beyond Reach.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-rx-magenta/30"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 25 0, 50 5 T 100 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="rx-body-lg text-rx-text-secondary mb-10 max-w-xl">
              We engineer intelligent growth systems that turn brands into market leaders. 
              Performance marketing meets luxury editorial design.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
              <Button variant="primary" size="lg">
                Book a Strategy Call
              </Button>
              <Button variant="secondary" size="lg">
                View Case Studies
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-10 border-l-2 border-rx-purple-vivid/20 pl-8"
            >
              <div>
                <div className="rx-heading-lg text-rx-purple-deep">140+</div>
                <div className="rx-body-sm text-rx-text-muted">Franchise Outlets</div>
              </div>
              <div className="w-[1px] h-8 bg-rx-glass-border" />
              <div>
                <div className="rx-heading-lg text-rx-purple-deep">38%</div>
                <div className="rx-body-sm text-rx-text-muted">Avg Conv. Rate</div>
              </div>
              <div className="w-[1px] h-8 bg-rx-glass-border" />
              <div>
                <div className="rx-heading-lg text-rx-purple-deep">9+</div>
                <div className="rx-body-sm text-rx-text-muted">Industries</div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Dashboard */}
          <div className="relative hidden lg:block h-[600px]">
            {/* Card 1: Lead Volume */}
            <motion.div
              variants={scaleIn}
              className="absolute top-0 right-0 w-72"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <GlassCard className="p-6" glow>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-rx-purple-vivid/10 rounded-lg">
                    <TrendingUp size={20} className="text-rx-purple-vivid" />
                  </div>
                  <div className="rx-mono text-[10px] text-green-600 bg-green-50 px-2 py-0.5 rounded">
                    +34.2%
                  </div>
                </div>
                <div className="rx-body-sm text-rx-text-muted mb-1">Leads This Month</div>
                <div className="rx-heading-xl text-rx-text-primary">2,847</div>
                <div className="mt-4 h-12 w-full flex items-end gap-1">
                  {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                      className="flex-1 bg-rx-purple-vivid/20 rounded-t-sm"
                    />
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            {/* Card 2: Conversion Ring */}
            <motion.div
              variants={scaleIn}
              className="absolute top-1/2 left-0 -translate-y-1/2 w-64"
              animate={{ y: ["-50%", "-53%", "-50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <GlassCard className="p-8 flex flex-col items-center text-center" intensity="high">
                <div className="relative w-32 h-32 mb-4">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50" cy="50" r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-rx-base-04"
                    />
                    <motion.circle
                      cx="50" cy="50" r="45"
                      fill="none"
                      stroke="url(#hero-grad)"
                      strokeWidth="8"
                      strokeDasharray="283"
                      initial={{ strokeDashoffset: 283 }}
                      animate={{ strokeDashoffset: 283 - (283 * 0.38) }}
                      transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="hero-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#9B25AA" />
                        <stop offset="100%" stopColor="#E9572C" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="rx-heading-lg text-rx-purple-deep">38%</span>
                  </div>
                </div>
                <div className="rx-body-sm font-medium text-rx-text-secondary">Site Visit Conv.</div>
                <div className="rx-mono text-[10px] text-rx-text-muted mt-1 tracking-widest uppercase">Benchmark Active</div>
              </GlassCard>
            </motion.div>

            {/* Card 3: Activity Feed */}
            <motion.div
              variants={scaleIn}
              className="absolute bottom-0 right-10 w-80"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <GlassCard className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Activity size={16} className="text-rx-magenta" />
                  <span className="rx-label text-[10px]">Real-time Systems</span>
                </div>
                <div className="space-y-3">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activityIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-3 p-3 bg-rx-base-02 rounded-lg border border-rx-glass-border"
                    >
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        activities[activityIndex].type === "success" ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" :
                        activities[activityIndex].type === "pending" ? "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" :
                        "bg-rx-purple-vivid shadow-[0_0_8px_rgba(155,37,170,0.5)]"
                      )} />
                      <span className="rx-body-sm font-medium text-rx-text-primary">
                        {activities[activityIndex].text}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Ghost items for context */}
                  <div className="opacity-30 blur-[1px]">
                    <div className="flex items-center gap-3 p-3 bg-rx-base-02 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-gray-400" />
                      <div className="h-4 w-32 bg-gray-200 rounded" />
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
