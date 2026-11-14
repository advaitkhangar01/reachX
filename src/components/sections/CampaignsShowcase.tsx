"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MetaBadge } from "@/components/ui/MetaBadge";
import { CampaignLightbox } from "@/components/ui/CampaignLightbox";
import { campaignAssets, CampaignItem } from "@/data/campaigns";
import { fadeUp } from "@/lib/animations";
import { 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Maximize2, 
  Eye, 
  Target,
  Sparkles,
  Layers
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function CampaignsShowcase() {
  const [selectedCampaign, setSelectedCampaign] = useState<CampaignItem | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Divide the 9 assets into two alternating marquee rows for rich visual density
  const row1 = campaignAssets.slice(0, 5);
  const row2 = campaignAssets.slice(4, 9).concat(campaignAssets.slice(0, 1));

  return (
    <section 
      id="campaigns" 
      className="relative bg-rx-base-01 py-24 lg:py-32 overflow-hidden border-b border-rx-glass-border"
    >
      {/* Anchor alias for backwards compatibility */}
      <div id="projects" className="absolute -top-24 pointer-events-none" />
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-rx-purple-vivid/10 via-[#0081FB]/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-tl from-rx-orange/10 via-rx-magenta/10 to-transparent blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="container mx-auto max-w-[1440px] px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT HALF: STRATEGIC CONTENT & TRUST FACTORS ================= */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div 
              variants={fadeUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Top Label & Meta Platform Badge */}
              <div className="flex flex-wrap items-center gap-3">
                <SectionLabel>Paid Performance & Creative Lab</SectionLabel>
                <MetaBadge variant="partner" />
              </div>

              {/* Display Headline */}
              <h2 className="rx-display-lg text-rx-text-primary tracking-tighter">
                Creatives Engineered to Print{" "}
                <span className="text-gradient">ROAS.</span>
              </h2>

              {/* Live Auction Pulse Node */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <MetaBadge variant="telemetry" />
                <MetaBadge variant="testing" />
              </div>

              {/* Narrative Copy */}
              <p className="rx-body-md text-rx-text-secondary leading-relaxed">
                We don’t just run ads—we construct algorithmic growth engines. From high-retention 3-second visual hooks to server-side Conversions API (CAPI) infrastructure, we systematically lower CPA and scale verified revenue across Meta and performance networks.
              </p>

              {/* High-Impact Stat Grid */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/70 border border-rx-glass-border shadow-rx-sm backdrop-blur-md">
                  <div className="flex items-center gap-1.5 text-rx-purple-vivid mb-1">
                    <TrendingUp size={14} />
                    <span className="rx-mono text-[9px] uppercase tracking-wider font-semibold">ROAS</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-rx-text-primary tracking-tight">
                    4.8x
                  </div>
                  <div className="rx-mono text-[8px] sm:text-[9px] text-rx-text-muted">
                    Blended Return
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/70 border border-rx-glass-border shadow-rx-sm backdrop-blur-md">
                  <div className="flex items-center gap-1.5 text-[#0081FB] mb-1">
                    <ShieldCheck size={14} />
                    <span className="rx-mono text-[9px] uppercase tracking-wider font-semibold">Scale</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-rx-text-primary tracking-tight">
                    ₹1.5Cr+
                  </div>
                  <div className="rx-mono text-[8px] sm:text-[9px] text-rx-text-muted">
                    Profitable Spend
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/70 border border-rx-glass-border shadow-rx-sm backdrop-blur-md">
                  <div className="flex items-center gap-1.5 text-rx-orange mb-1">
                    <Zap size={14} />
                    <span className="rx-mono text-[9px] uppercase tracking-wider font-semibold">Cost</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-rx-text-primary tracking-tight">
                    -38%
                  </div>
                  <div className="rx-mono text-[8px] sm:text-[9px] text-rx-text-muted">
                    Average CPA
                  </div>
                </div>
              </div>

              {/* Strategic Methodology Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "3s Hook Rate Testing",
                  "Creative Fatigue AI Rotator",
                  "High-Intent Audience Slicing",
                  "Server-Side CAPI Telemetry"
                ].map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 rounded-full bg-rx-base-03 border border-rx-glass-border rx-mono text-[9px] font-medium text-rx-text-secondary uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Conversion CTA */}
              <div className="pt-4 flex items-center gap-4">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-rx-purple-deep via-rx-purple-vivid to-rx-magenta text-white font-medium text-xs sm:text-sm shadow-rx-md hover:shadow-rx-glow transition-all duration-300"
                >
                  <span>Launch High-ROAS Campaign</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={13} />
                  </div>
                </a>
                <span className="rx-mono text-[9px] text-rx-text-muted uppercase tracking-widest hidden sm:inline-block">
                  Live Audit Included
                </span>
              </div>
            </motion.div>
          </div>

          {/* ================= RIGHT HALF: AUTO-SLIDING STREAM WITH EDGE FADE ================= */}
          <div className="lg:col-span-7 relative">
            
            {/* Visual Header / Instructions Bar */}
            <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="rx-mono text-[10px] text-rx-text-muted uppercase tracking-widest">
                  Live Campaign Feeds
                </span>
              </div>
              <div className="rx-mono text-[9px] text-rx-text-muted flex items-center gap-1.5 bg-rx-base-02 px-3 py-1 rounded-full border border-rx-glass-border">
                <Eye size={12} className="text-rx-purple-vivid" />
                Hover to freeze · Click to expand
              </div>
            </div>

            {/* Slider Viewport with Mid-to-Right Edge Gradient Fade Masks */}
            <div 
              className="relative w-full overflow-hidden rounded-3xl p-2 sm:p-4 group/carousel"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Fade Overlay Left (Mid screen border) */}
              <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-rx-base-01 via-rx-base-01/80 to-transparent z-20 pointer-events-none" />

              {/* Fade Overlay Right (Viewport Edge) */}
              <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-rx-base-01 via-rx-base-01/90 to-transparent z-20 pointer-events-none" />

              {/* Dual Sliding Tracks */}
              <div className="space-y-4">
                
                {/* Track 1: Sliding Left */}
                <div className="flex gap-4 overflow-hidden select-none">
                  <div 
                    className="flex gap-4 animate-marquee shrink-0"
                    style={{ animationPlayState: isPaused ? "paused" : "running" }}
                  >
                    {[...row1, ...row1].map((campaign, idx) => (
                      <CampaignCard 
                        key={`row1-${campaign.id}-${idx}`} 
                        campaign={campaign} 
                        onClick={() => setSelectedCampaign(campaign)} 
                      />
                    ))}
                  </div>
                </div>

                {/* Track 2: Sliding Right (Reverse) */}
                <div className="flex gap-4 overflow-hidden select-none">
                  <div 
                    className="flex gap-4 animate-marquee-reverse shrink-0"
                    style={{ animationPlayState: isPaused ? "paused" : "running" }}
                  >
                    {[...row2, ...row2].map((campaign, idx) => (
                      <CampaignCard 
                        key={`row2-${campaign.id}-${idx}`} 
                        campaign={campaign} 
                        onClick={() => setSelectedCampaign(campaign)} 
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Subtle decorative edge line */}
            <div className="absolute -bottom-4 right-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-rx-purple-vivid/30 to-transparent" />
          </div>

        </div>
      </div>

      {/* Enlarged Lightbox Modal */}
      <CampaignLightbox 
        campaign={selectedCampaign} 
        isOpen={!!selectedCampaign} 
        onClose={() => setSelectedCampaign(null)} 
      />
    </section>
  );
}

// Individual Campaign Visual Card
function CampaignCard({ 
  campaign, 
  onClick 
}: { 
  campaign: CampaignItem; 
  onClick: () => void; 
}) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className={cn(
        "group/card relative w-[300px] sm:w-[380px] h-[190px] sm:h-[220px] rounded-2xl overflow-hidden cursor-pointer",
        "bg-white border border-rx-glass-border/80 shadow-rx-sm",
        "transition-all duration-500 ease-out",
        "hover:scale-[1.03] hover:shadow-rx-lg hover:border-rx-purple-vivid/50 hover:ring-2 hover:ring-rx-purple-vivid/20"
      )}
    >
      {/* Campaign Image */}
      <div className="relative w-full h-full bg-rx-base-03 overflow-hidden">
        <Image
          src={campaign.src}
          alt={campaign.alt}
          fill
          sizes="(max-width: 768px) 300px, 380px"
          className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
        />
        
        {/* Subtle Ambient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity" />
      </div>

      {/* Top Floating Badge */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
        <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white rx-mono text-[8px] sm:text-[9px] uppercase tracking-wider font-semibold">
          {campaign.platform}
        </span>
        <div className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform translate-y-1 group-hover/card:translate-y-0 shadow-lg">
          <Maximize2 size={12} />
        </div>
      </div>

      {/* Bottom Information Overlay */}
      <div className="absolute bottom-3 left-3 right-3 z-10 pointer-events-none">
        <span className="rx-mono text-[8px] text-white/70 uppercase tracking-widest block mb-0.5">
          {campaign.category}
        </span>
        <h4 className="text-white text-xs sm:text-sm font-semibold tracking-tight truncate mb-1">
          {campaign.title}
        </h4>
        <div className="flex items-center justify-between pt-1 border-t border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="rx-mono text-[8px] text-white/60 uppercase">Impact</span>
            <span className="text-emerald-400 font-bold text-xs sm:text-sm rx-mono">
              {campaign.metric}
            </span>
          </div>
          <span className="rx-mono text-[8px] text-white/50 tracking-wider">
            {campaign.metricLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
