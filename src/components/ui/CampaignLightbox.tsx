"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Zap, ShieldCheck } from "lucide-react";
import { CampaignItem } from "@/data/campaigns";
import { MetaLogoSvg } from "@/components/ui/MetaBadge";

interface CampaignLightboxProps {
  campaign: CampaignItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CampaignLightbox({ campaign, isOpen, onClose }: CampaignLightboxProps) {
  // Handle Escape key to close
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !campaign) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-5xl max-h-[90vh] flex flex-col bg-[#0D0B14] rounded-3xl border border-white/15 shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.03]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0081FB] to-rx-purple-vivid flex items-center justify-center shadow-md">
                <MetaLogoSvg className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm sm:text-base tracking-tight leading-tight">
                  {campaign.title}
                </h4>
                <p className="rx-mono text-[10px] text-white/50 uppercase tracking-widest">
                  {campaign.category}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/80 rx-mono text-[9px] uppercase tracking-wider">
                <ShieldCheck size={12} className="text-emerald-400" />
                Verified Ad Campaign
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Image Display Area */}
          <div className="relative flex-1 min-h-[300px] sm:min-h-[420px] max-h-[65vh] w-full bg-black/60 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={campaign.src}
                alt={campaign.alt}
                width={1600}
                height={800}
                className="max-h-[62vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Bottom Bar: Metrics & Context */}
          <div className="px-6 py-4 border-t border-white/10 bg-white/[0.04] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div>
                <span className="rx-mono text-[9px] text-white/40 uppercase tracking-widest block mb-0.5">
                  Platform
                </span>
                <span className="text-white text-xs sm:text-sm font-medium">
                  {campaign.platform}
                </span>
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div>
                <span className="rx-mono text-[9px] text-white/40 uppercase tracking-widest block mb-0.5">
                  Target Outcome
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-gradient font-bold text-base sm:text-lg">
                    {campaign.metric}
                  </span>
                  <span className="rx-mono text-[10px] text-white/60">
                    {campaign.metricLabel}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="rx-mono text-[9px] text-white/40 uppercase tracking-widest">
                Press ESC to dismiss
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
