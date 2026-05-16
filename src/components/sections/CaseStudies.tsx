"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import CountUp from "react-countup";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { ArrowRight, Star, TrendingUp, Target, Rocket, Layers, MousePointer2 } from "lucide-react";
import { cn } from "@/lib/utils";

import { useMagnetic } from "@/hooks/useMagnetic";

const caseStudies = [
  {
    id: "pyramid",
    name: "Pyramid Group",
    industry: "Infrastructure",
    metric: "~40%",
    label: "Site Visit Conv.",
    landscape: "/Case-study/Pyramid Lanscape.jpg.jpeg",
    portrait: "/Case-study/Pyramid amara 4 X 5.jpg.jpeg",
    description: "We partnered with Pyramid Group to deliver a refined performance marketing strategy, combining high-end creatives with targeted lead generation and structured sales call management.",
    results: [
      { label: "Site Visits", value: "~40%" },
      { label: "Lead Quality", value: "Qualified" },
      { label: "Sales Support", value: "End-to-End" },
    ],
    accent: "bg-rx-purple-vivid"
  },
  {
    id: "mahachai",
    name: "MahaChai",
    industry: "F&B · Franchise",
    metric: "140+",
    label: "Outlets Enabled",
    landscape: "/Case-study/Mahachai lp.jpg.jpeg",
    portrait: "/Case-study/Mahachai 4 X 5.jpg.jpeg",
    description: "Leading pan-India expansion through structured lead generation and franchise growth strategies, managing the entire funnel from acquisition to direct deal closures.",
    results: [
      { label: "Outlets", value: "140+" },
      { label: "Lead Intent", value: "High" },
      { label: "Model", value: "Scalable" },
    ],
    accent: "bg-rx-magenta"
  },
  {
    id: "ambika",
    name: "Ambika Farms",
    industry: "Real Estate",
    metric: "35%",
    label: "Sales Growth",
    landscape: "/Case-study/Ambika Landscape.jpg.jpeg",
    portrait: "/Case-study/Ambika 4X5.jpg.jpeg",
    description: "Executed a refined lead generation strategy combining high-end creatives and targeted campaigns with influencer collaborations to elevate brand perception.",
    results: [
      { label: "Sales Growth", value: "25-35%" },
      { label: "Lead Quality", value: "High-Intent" },
      { label: "Presence", value: "Premium" },
    ],
    accent: "bg-rx-purple-deep"
  },
  {
    id: "cac",
    name: "CAC Allrounder",
    industry: "Adventure & Education",
    metric: "High",
    label: "Closure Intent",
    landscape: "/Case-study/CAC landscape.jpg",
    portrait: "/Case-study/CAC 4 X5.jpg.jpeg",
    description: "Performance-driven strategy for diverse adventure camps, focusing on generating and qualifying high-intent leads with a strong emphasis on advance booking conversions.",
    results: [
      { label: "Lead Quality", value: "High-Intent" },
      { label: "Bookings", value: "Advance" },
      { label: "Handover", value: "Smooth" },
    ],
    accent: "bg-blue-500"
  },
  {
    id: "siddhivinayak",
    name: "Siddhivinayak",
    industry: "Infrastructure",
    metric: "~30%",
    label: "Site Visit Conv.",
    landscape: "/Case-study/Siddhivinayak Lanscape.jpg.jpeg",
    portrait: "/Case-study/Siddhivinayak 4 X 5.jpg.jpeg",
    description: "Crafting high-end creatives and video ads with a structured lead qualification system to ensure only high-intent prospects progress through the funnel.",
    results: [
      { label: "Site Visits", value: "~30%" },
      { label: "Lead Quality", value: "High-Quality" },
      { label: "Sales", value: "Efficient" },
    ],
    accent: "bg-rx-orange"
  },

  {
    id: "designhome",
    name: "Design Home",
    industry: "Construction",
    metric: "20%",
    label: "Business Growth",
    landscape: "/Case-study/Design home landscape.jpg",
    portrait: "/Case-study/Design Home 4 X 5.jpg.jpeg",
    description: "Refined performance strategy combining high-quality ad creatives with targeted lead generation and managed sales calls for seamless conversion.",
    results: [
      { label: "Growth", value: "20%" },
      { label: "Leads", value: "Qualified" },
      { label: "Pipeline", value: "Strong" },
    ],
    accent: "bg-emerald-500"
  },
  {
    id: "heera",
    name: "Heera Sweets",
    industry: "F&B",
    metric: "100+",
    label: "Orders Month 1",
    landscape: "/Case-study/Heera Sweet Landscape.jpg.jpeg",
    portrait: "/Case-study/Heera sweet 4 X 5.jpg.jpeg",
    description: "End-to-end growth strategy for market expansion, handling content creation, video ads, performance marketing, and distribution management.",
    results: [
      { label: "Orders", value: "100+" },
      { label: "Traction", value: "Initial" },
      { label: "Solution", value: "360°" },
    ],
    accent: "bg-rx-magenta"
  },
  {
    id: "eatruth",
    name: "Eatruth",
    industry: "Organic F&B",
    metric: "Elite",
    label: "E-comm Growth",
    landscape: "/Case-study/Eathruth Landscape.jpg.jpeg",
    portrait: "/Case-study/Eatruth 4 X 5.jpg.jpeg",
    description: "Premium digital growth strategy combining video content and performance ads with e-commerce operations and strategic collaborations.",
    results: [
      { label: "Operations", value: "E-comm" },
      { label: "Bulk Orders", value: "High-Intent" },
      { label: "Visibility", value: "Enhanced" },
    ],
    accent: "bg-green-600"
  },
  {
    id: "shreelalji",
    name: "Shreelalji",
    industry: "Dairy Products",
    metric: "Strong",
    label: "Brand Performance",
    landscape: "/Case-study/Shreelalji Landscape.jpg.jpeg",
    portrait: "/Case-study/Shreelalji 4 X 5.jpg.jpeg",
    description: "Enhancing digital presence through trend-driven content and targeted lead generation for home delivery services, backed by authentic customer reviews.",
    results: [
      { label: "Performance", value: "Strong" },
      { label: "Leads", value: "Home Delivery" },
      { label: "Trust", value: "Amplified" },
    ],
    accent: "bg-amber-600"
  }
];

const testimonials = [
  { quote: "Reachex transformed our lead quality. We're seeing real conversions, not just numbers.", name: "Saurabh", role: "CEO, MahaChai" },
  { quote: "The most professional agency we've worked with. Their systems are truly world-class.", name: "Amit", role: "Director, Pyramid Group" },
  { quote: "35% growth in just 30 days. The results speak for themselves.", name: "Rahul", role: "Founder, Ambika Farms" },
  { quote: "Finally, an agency that understands the intersection of design and performance.", name: "Priya", role: "Marketing Head, DS16" },
  { quote: "Their franchise growth engine is unmatched. 140+ outlets is proof.", name: "Vikram", role: "COO, MahaChai" },
];


function CaseStudySlide({ cs, index }: { cs: typeof caseStudies[0], index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: magneticRef, x: magneticX, y: magneticY } = useMagnetic();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const isEven = index % 2 === 0;
  
  // Parallax transforms - Synchronized for the visual unit
  const visualY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  
  const smoothVisualY = useSpring(visualY, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="py-8 md:py-16 relative overflow-hidden border-b border-white/[0.03]">
      <div className="container mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center",
          isEven ? "" : "lg:direction-rtl" // Note: we'll handle alignment via flex/order instead of direction
        )}>
          
          {/* Visual Side - Split Canvas */}
          <motion.div 
            style={{ y: smoothVisualY }}
            className={cn(
              "lg:col-span-7 relative flex items-center justify-between gap-6",
              isEven ? "lg:order-1" : "lg:order-2"
            )}
          >
            {/* Landscape / Platform Exhibit - Signature Rim-Light */}
            <div className="relative w-[65%] group/canvas">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)] bg-rx-base-04">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={cs.landscape}
                    alt={cs.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover/canvas:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 910px"
                  />
                  {/* Rim Light Effect */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl pointer-events-none z-20" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 opacity-60 z-10" />
                </div>
              </div>
            </div>

            {/* Portrait / Creative Exhibit - Signature Rim-Light */}
            <motion.div 
              ref={magneticRef as any}
              style={{ 
                x: magneticX, 
                y: magneticY,
                rotateZ: isEven ? 2 : -2 
              }}
              className="relative w-[30%] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.7)] rounded-xl overflow-hidden cursor-none group/portrait"
            >
              <div className="relative aspect-[4/5] bg-rx-base-03">
                <Image
                  src={cs.portrait}
                  alt={cs.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 40vw, 420px"
                />
                {/* Rim Light Effect */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/30 rounded-xl pointer-events-none z-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-white/5 opacity-80 z-10" />
                
                {/* Minimalist Hover Indicator */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px] z-30"
                >
                  <MousePointer2 size={20} className="text-white/80 animate-pulse" />
                </motion.div>
              </div>
            </motion.div>

            {/* Background Accent - Very subtle */}
            <div className={cn("absolute inset-0 -z-10 blur-[120px] opacity-20 rounded-full scale-150", cs.accent)} />
          </motion.div>

          {/* Content Side */}
          <motion.div 
            style={{ y: contentY }}
            className={cn(
              "lg:col-span-5 flex flex-col justify-center",
              isEven ? "lg:order-2" : "lg:order-1"
            )}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="rx-mono text-[9px] text-rx-purple-vivid uppercase tracking-[0.4em] font-bold">Case {index + 1}</span>
              <div className="h-[1px] flex-1 bg-white/10" />
            </div>

            <h3 className="rx-display-sm text-rx-text-primary mb-2 tracking-tighter">
              {cs.name}
            </h3>
            
            <span className="rx-mono text-[9px] text-rx-text-muted uppercase tracking-[0.2em] mb-8">
              {cs.industry}
            </span>

            <p className="rx-body-sm text-rx-text-secondary mb-10 max-w-md leading-relaxed">
              {cs.description}
            </p>

            {/* Impact Grid - Ultra Compact */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                <div className="rx-heading-md text-gradient mb-0.5">
                  {(() => {
                    const numericMatch = cs.metric.match(/\d+/);
                    const numericValue = numericMatch ? parseInt(numericMatch[0]) : null;
                    const prefix = cs.metric.match(/^[^\d]+/)?.[0] || "";
                    const suffix = cs.metric.match(/[^\d]+$/)?.[0] || "";
                    
                    if (numericValue !== null) {
                      return (
                        <CountUp 
                          end={numericValue} 
                          prefix={prefix}
                          suffix={suffix} 
                          enableScrollSpy 
                          scrollSpyOnce 
                        />
                      );
                    }
                    return cs.metric;
                  })()}
                </div>
                <div className="rx-mono text-[7px] text-rx-text-muted uppercase tracking-tight">{cs.label}</div>
              </div>

              {cs.results.map((r, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                  <div className="rx-heading-md text-rx-text-primary mb-0.5">{r.value}</div>
                  <div className="rx-mono text-[7px] text-rx-text-muted uppercase tracking-tight">{r.label}</div>
                </div>
              ))}
            </div>

            <button className="group flex items-center gap-3 rx-body-sm font-bold text-rx-text-primary hover:text-rx-purple-vivid transition-all">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-rx-purple-vivid group-hover:border-rx-purple-vivid transition-all duration-500">
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
              <span className="uppercase tracking-[0.2em] text-[9px]">Case Details</span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <SectionWrapper id="case-studies">
      <div className="text-center mb-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <SectionLabel className="mb-4">Selected Works</SectionLabel>
          <h2 className="rx-display-lg text-rx-text-primary mb-6">Real Brands. <br/> <span className="text-gradient">Real Engineering.</span></h2>
        </motion.div>
      </div>

      {/* Editorial Slides */}
      <div className="space-y-0">
        {caseStudies.map((cs, idx) => (
          <CaseStudySlide key={cs.id} cs={cs} index={idx} />
        ))}
      </div>

      {/* Testimonials Marquee */}
      <div className="relative overflow-hidden py-32 bg-rx-base-02 rounded-[60px] border border-rx-glass-border shadow-rx-glow-sm mt-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-rx-purple-vivid to-transparent opacity-50" />
        
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-bg border border-white/10 mb-6">
            <Star size={12} className="fill-rx-orange text-rx-orange" />
            <span className="rx-mono text-[9px] uppercase tracking-[0.2em] text-rx-text-secondary">Verified Growth</span>
          </div>
          <h3 className="rx-heading-lg text-rx-text-primary">Trusted by ambitious founders.</h3>
        </div>
        
        <div className="flex flex-col gap-8">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...testimonials, ...testimonials].map((t, i) => (
              <GlassCard key={i} className="min-w-[400px] p-10" intensity="low">
                <p className="rx-body-lg italic text-rx-text-secondary mb-10 whitespace-normal leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-rx-glass-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rx-purple-vivid to-rx-magenta flex items-center justify-center rx-mono text-white font-bold">{t.name[0]}</div>
                  <div>
                    <div className="rx-body-md font-bold text-rx-text-primary">{t.name}</div>
                    <div className="rx-body-sm text-[11px] text-rx-text-muted uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
          
          <div className="flex gap-8 animate-marquee-reverse whitespace-nowrap">
            {[...testimonials, ...testimonials].reverse().map((t, i) => (
              <GlassCard key={i} className="min-w-[400px] p-10" intensity="low">
                <p className="rx-body-lg italic text-rx-text-secondary mb-10 whitespace-normal leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-rx-glass-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rx-magenta to-rx-orange flex items-center justify-center rx-mono text-white font-bold">{t.name[0]}</div>
                  <div>
                    <div className="rx-body-md font-bold text-rx-text-primary">{t.name}</div>
                    <div className="rx-body-sm text-[11px] text-rx-text-muted uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
