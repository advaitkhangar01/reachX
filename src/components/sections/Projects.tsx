"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { fadeUp } from "@/lib/animations";
import { Database, Globe, Layers, ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    name: "Sunrise Farms",
    url: "https://sunrisefarmsnagpur.com",
    category: "Web Architecture",
    tags: ["Next.js", "Cloudfront", "Performance"],
    description: "Agricultural digital transformation for India's leading citrus exporters. Engineered for sub-second latency across global edge nodes.",
    metrics: [
      { label: "Load Speed", value: "0.8s" },
      { label: "Global Reach", value: "24+ Countries" }
    ],
    accent: "from-green-500/20 to-blue-500/20",
    color: "#4ade80"
  },
  {
    id: 2,
    name: "Loft Coworks",
    url: "https://loftcoworks.com",
    category: "SaaS Ecosystem",
    tags: ["React", "Node.js", "Real-time"],
    description: "Smart workspace management ecosystem. Integrated IoT sensors with real-time occupancy tracking and automated billing.",
    metrics: [
      { label: "Efficiency", value: "+40%" },
      { label: "Users", value: "2k+" }
    ],
    accent: "from-orange-500/20 to-red-500/20",
    color: "#f97316"
  },
  {
    id: 3,
    name: "Qyvorin",
    url: "https://qyvorin.online",
    category: "Platform Engineering",
    tags: ["Infrastructure", "Scalability", "AWS"],
    description: "Next-gen platform engineering for modern enterprises. Built a robust CI/CD pipeline reducing deployment time by 60%.",
    metrics: [
      { label: "Deployment", value: "-60% Time" },
      { label: "Stability", value: "99.99%" }
    ],
    accent: "from-rx-purple-vivid/20 to-rx-magenta/20",
    color: "#9b25aa"
  },
  {
    id: 4,
    name: "Design Studio 16",
    url: "https://designstudio16.co.in",
    category: "Creative Tech",
    tags: ["Three.js", "Motion", "Branding"],
    description: "High-end design showcase for an award-winning architecture firm. Features immersive 3D walkthroughs and interactive portfolios.",
    metrics: [
      { label: "Engagement", value: "5m avg" },
      { label: "Awards", value: "3x Site of Day" }
    ],
    accent: "from-gray-700/20 to-black/20",
    color: "#374151"
  },
  {
    id: 5,
    name: "DS16 CRM",
    url: "https://crm.designstudio16.co.in",
    category: "CRM Ecosystem",
    tags: ["Enterprise", "Database", "Dashboard"],
    description: "Custom CRM ecosystem built for scale and efficiency. Streamlines architectural project management and client communication.",
    metrics: [
      { label: "Automation", value: "85%" },
      { label: "Efficiency", value: "+50%" }
    ],
    accent: "from-blue-500/20 to-rx-purple-vivid/20",
    color: "#3b82f6"
  },
  {
    id: 6,
    name: "Jagmart",
    url: "https://jagmart.co.in",
    category: "E-Commerce",
    tags: ["Shopify", "Optimization", "Growth"],
    description: "Modern retail commerce with a focus on speed. Optimized conversion funnels resulting in a 25% increase in AOV.",
    metrics: [
      { label: "AOV Growth", value: "+25%" },
      { label: "Conversion", value: "4.2%" }
    ],
    accent: "from-yellow-400/20 to-orange-500/20",
    color: "#fbbf24"
  },
  {
    id: 7,
    name: "Concord Fintech",
    url: "https://concordfintech.com",
    category: "Fintech Solutions",
    tags: ["Security", "API", "Finance"],
    description: "Fintech solutions for enterprise-grade scaling. Built a secure API layer handling millions of transactions with zero downtime.",
    metrics: [
      { label: "Uptime", value: "100%" },
      { label: "Security", value: "Tier 1" }
    ],
    accent: "from-blue-600/20 to-rx-purple-deep/20",
    color: "#2563eb"
  },
  {
    id: 8,
    name: "Brewin Cafe",
    url: "https://brewin-cafe.vercel.app",
    category: "Experience Design",
    tags: ["UX/UI", "PWA", "Mobile-First"],
    description: "Digital cafe experience that blends taste with tech. PWA implementation allowing offline ordering and loyalty tracking.",
    metrics: [
      { label: "Retention", value: "65%" },
      { label: "Mobile Sales", value: "+80%" }
    ],
    accent: "from-amber-400/20 to-rx-orange/20",
    color: "#fbbf24"
  },
];

function LivePreview({ url, isActive }: { url: string; isActive: boolean }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Handle scaling to force desktop view
  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        // We target 1440px as the "desktop" width
        setScale(width / 1440);
      }
    };
    
    const observer = new ResizeObserver(updateScale);
    if (containerRef.current) observer.observe(containerRef.current);
    
    updateScale();
    return () => observer.disconnect();
  }, []);

  // Reset loading state when URL changes
  useEffect(() => {
    setIsLoaded(false);
  }, [url]);

  return (
    <BrowserFrame url={url} isLoading={!isLoaded}>
      <div ref={containerRef} className="relative w-full h-full bg-rx-base-02 overflow-hidden">
        <div 
          style={{ 
            width: '1440px', 
            height: '810px', // 1440 * 9/16
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            pointerEvents: isLoaded ? 'auto' : 'none'
          }}
          className="absolute top-0 left-0"
        >
          <iframe 
            src={url} 
            onLoad={() => setIsLoaded(true)}
            className={cn(
              "w-full h-full border-none transition-opacity duration-1000",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
            title="Live Preview"
            loading="lazy"
          />
        </div>
        
        {!isLoaded && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-12 text-center bg-rx-base-01">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-rx-glow-sm">
               <Globe size={32} className="text-rx-purple-vivid animate-pulse" />
            </div>
            <h4 className="rx-mono text-[10px] uppercase tracking-[0.3em] text-rx-text-muted">Establishing Secure Node...</h4>
          </div>
        )}
      </div>
    </BrowserFrame>
  );
}

function ProjectScrollItem({ 
  project, 
  index, 
  isActive,
  setActiveIndex 
}: { 
  project: any; 
  index: number; 
  isActive: boolean;
  setActiveIndex: (idx: number) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);
  
  return (
    <div 
      ref={ref}
      className={cn(
        "min-h-[80vh] flex flex-col justify-center py-20 transition-all duration-700",
        isActive ? "opacity-100 translate-x-0" : "opacity-20 -translate-x-4"
      )}
    >
      <div className="flex items-center gap-4 mb-6">
        <span className="rx-mono text-[10px] text-rx-purple-vivid font-bold tracking-widest">0{index + 1}</span>
        <div className="h-[1px] w-12 bg-rx-purple-vivid/30" />
        <span className="rx-mono text-[10px] text-rx-text-muted uppercase tracking-widest">{project.category}</span>
      </div>

      <h3 className="rx-display-md text-rx-text-primary mb-6 tracking-tighter">
        {project.name}
      </h3>

      <p className="rx-body-md text-rx-text-secondary mb-10 max-w-md leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-12">
        {project.tags.map((tag: string) => (
          <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 rx-mono text-[8px] text-rx-text-ghost uppercase tracking-wider">
            {tag}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-8 mb-12 border-l border-rx-purple-vivid/20 pl-8">
        {project.metrics.map((m: any) => (
          <div key={m.label}>
            <div className="rx-heading-md text-rx-text-primary mb-1">{m.value}</div>
            <div className="rx-mono text-[8px] text-rx-text-muted uppercase tracking-widest">{m.label}</div>
          </div>
        ))}
      </div>

      <a 
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 rx-mono text-[10px] font-bold text-rx-text-primary uppercase tracking-[0.2em] hover:text-rx-purple-vivid transition-colors"
      >
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-rx-purple-vivid group-hover:border-rx-purple-vivid transition-all duration-500">
           <ArrowRight size={16} className="group-hover:-rotate-45 transition-transform" />
        </div>
        Visit Website
      </a>

      {/* Mobile Preview: Responsive Layout */}
      <div className="lg:hidden mt-12 w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl relative z-20 pointer-events-auto">
        <LivePreview url={project.url} isActive={isActive} />
      </div>
    </div>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section 
      ref={containerRef}
      className="relative bg-rx-base-01" 
      id="projects"
    >
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className={cn("absolute inset-0 bg-gradient-to-br opacity-30 blur-[120px]", projects[activeIndex].accent)}
            />
         </AnimatePresence>
      </div>

      <div className="container mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Column: Scrollable Content */}
          <div className="lg:w-1/2">
            <div className="pt-24 lg:pt-32 pb-12 lg:pb-20">
               <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <SectionLabel className="mb-6">Portfolio Showcase</SectionLabel>
                  <h2 className="rx-display-lg text-rx-text-primary tracking-tighter">
                    Engineered to <span className="text-gradient">Scale.</span>
                  </h2>
               </motion.div>
            </div>

            <div className="space-y-0">
               {projects.map((project, idx) => (
                 <ProjectScrollItem 
                   key={project.id} 
                   project={project} 
                   index={idx} 
                   isActive={activeIndex === idx}
                   setActiveIndex={setActiveIndex}
                 />
               ))}
            </div>
            
            <div className="h-[20vh]" /> {/* Bottom spacer for final item scroll */}
          </div>

          {/* Right Column: Sticky Preview */}
          <div className="hidden lg:block lg:w-1/2 h-screen sticky top-0 py-24 lg:py-32">
             <div className="h-full flex items-center justify-center relative group">
                <AnimatePresence mode="wait">
                   <motion.div
                     key={activeIndex}
                     initial={{ opacity: 0, y: 20, scale: 0.95 }}
                     animate={{ opacity: 1, y: 0, scale: 1 }}
                     exit={{ opacity: 0, y: -20, scale: 0.95 }}
                     transition={{ duration: 0.5, ease: "circOut" }}
                     className="w-full aspect-video shadow-rx-2xl"
                   >
                      <LivePreview 
                        url={projects[activeIndex].url} 
                        isActive={true} 
                      />
                   </motion.div>
                </AnimatePresence>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-rx-purple-vivid/5 blur-[120px] rounded-full -z-10" />
             </div>
          </div>

        </div>
      </div>

      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>
    </section>
  );
}
