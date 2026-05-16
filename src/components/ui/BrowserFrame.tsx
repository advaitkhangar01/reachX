import React from "react";
import { cn } from "@/lib/utils";
import { Loader2, RotateCcw, ExternalLink } from "lucide-react";

interface BrowserFrameProps {
  children: React.ReactNode;
  url?: string;
  className?: string;
  isLoading?: boolean;
  onRefresh?: () => void;
  showLaunchIcon?: boolean;
}

export function BrowserFrame({ 
  children, 
  url = "reachex.io", 
  className,
  isLoading = false,
  onRefresh,
  showLaunchIcon = false
}: BrowserFrameProps) {
  return (
    <div className={cn(
      "flex flex-col h-full rounded-2xl overflow-hidden border border-rx-glass-border/60 shadow-rx-lg bg-[#0A0A0B]/80 backdrop-blur-xl transition-all duration-700", 
      className
    )}>
      {/* Chrome Bar */}
      <div className="bg-white/5 backdrop-blur-lg px-4 py-3 flex items-center gap-4 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]/40" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/40" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]/40" />
        </div>
        
        <div className="flex-1 max-w-[400px] mx-auto bg-black/40 rounded-lg px-4 py-1.5 flex items-center justify-between border border-white/5 group">
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/80 animate-pulse shrink-0" />
            <span className="rx-mono text-[10px] text-rx-text-ghost/80 truncate font-medium tracking-tight">
              https://{url.replace(/^https?:\/\//, '')}
            </span>
          </div>
          
          <div className="flex items-center gap-3">
             {isLoading ? (
               <Loader2 size={12} className="text-rx-purple-vivid animate-spin" />
             ) : (
               onRefresh && (
                 <button 
                   onClick={onRefresh}
                   className="text-rx-text-ghost hover:text-white transition-colors"
                 >
                   <RotateCcw size={12} />
                 </button>
               )
             )}
             {showLaunchIcon && (
               <ExternalLink size={12} className="text-rx-text-ghost" />
             )}
          </div>
        </div>
        
        <div className="w-16 hidden md:block" /> {/* Spacer */}
      </div>
      
      {/* Content Area */}
      <div className="flex-1 relative bg-rx-base-01 overflow-hidden group/browser">
        {children}
        
        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 z-50 bg-rx-base-01/80 backdrop-blur-sm flex flex-col items-center justify-center gap-4">
             <div className="relative">
                <div className="w-12 h-12 rounded-full border-2 border-rx-purple-vivid/20 border-t-rx-purple-vivid animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-6 h-6 rounded-full bg-rx-purple-vivid/10 blur-sm" />
                </div>
             </div>
             <span className="rx-mono text-[10px] uppercase tracking-[0.2em] text-rx-text-muted">Establishing Secure Node...</span>
          </div>
        )}
      </div>
    </div>
  );
}
