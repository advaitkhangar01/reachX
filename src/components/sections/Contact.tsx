"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { 
  MessageSquare, 
  Mail, 
  Calendar, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  MapPin,
  Navigation,
  ExternalLink,
  Sparkles
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  business: z.string().min(2, "Business name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  message: z.string().min(10, "Please tell us a bit more about your needs"),
});

type FormValues = z.infer<typeof formSchema>;

const services = [
  "Performance Marketing",
  "Meta Ads Specialist",
  "SMMA Growth Systems",
  "Web Development",
  "Content & Creative",
  "Franchise Expansion",
];

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/founder@reachx.world", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          business: data.business,
          email: data.email,
          phone: data.phone,
          services: selectedServices.length > 0 ? selectedServices.join(", ") : "None specified",
          message: data.message,
          _subject: `New Growth Inquiry from ${data.name} (${data.business})`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setIsSuccess(true);
      toast.success("Strategy call request sent! We'll reach out shortly.");
      reset();
      setSelectedServices([]);
    } catch (error) {
      console.error("FormSubmit error:", error);
      toast.error("Failed to send message. Please try again or contact us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper 
      id="contact" 
      className="bg-[#0D0B14] text-white"
      bgLayer={
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A0F2E] to-[#0D0B14]" />
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-rx-purple-deep/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-rx-magenta/5 blur-[100px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </>
      }
    >
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        {/* Left: Context Block */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
            <span className="w-12 h-[1px] bg-rx-purple-vivid/50" />
            <span className="rx-mono text-rx-purple-vivid text-xs font-bold uppercase tracking-[0.3em]">
              Top SMMA & Meta Ads Specialist Near You
            </span>
          </motion.div>
          
          <motion.h2 variants={fadeUp} className="rx-display-lg mb-8">
            Ready to <span className="text-gradient">Scale?</span>
          </motion.h2>
          
          <motion.p variants={fadeUp} className="rx-body-lg text-rx-text-ghost mb-12 max-w-md">
            Whether you need a full-service social media marketing agency near you or an elite Meta ads specialist to unlock profitable ROAS, we build custom growth engines tailored to your exact industry.
          </motion.p>

          <motion.div variants={fadeUp} className="space-y-8 mb-16">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-rx-purple-vivid group-hover:bg-rx-purple-vivid group-hover:text-white transition-all duration-300">
                <MessageSquare size={24} />
              </div>
              <div>
                <div className="rx-label text-[10px] text-rx-text-muted mb-1">WhatsApp Strategy Line</div>
                <div className="rx-heading-md text-white">+91 91724 64547</div>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-rx-magenta group-hover:bg-rx-magenta group-hover:text-white transition-all duration-300">
                <Mail size={24} />
              </div>
              <div>
                <div className="rx-label text-[10px] text-rx-text-muted mb-1">Email Strategy</div>
                <div className="rx-heading-md text-white">hello@reachex.io</div>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-rx-orange group-hover:bg-rx-orange group-hover:text-white transition-all duration-300">
                <Calendar size={24} />
              </div>
              <div>
                <div className="rx-label text-[10px] text-rx-text-muted mb-1">Direct Consultation</div>
                <div className="rx-heading-md text-white">Schedule 30-min Audit</div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="pt-10 border-t border-white/10">
            <div className="rx-body-sm text-rx-text-ghost mb-6 italic">
              "Trusted by 15+ high-growth brands across Maharashtra & India"
            </div>
            <div className="flex flex-wrap gap-8 opacity-40 grayscale">
              <div className="rx-heading-md">Pyramid</div>
              <div className="rx-heading-md">MahaChai</div>
              <div className="rx-heading-md">Ambika</div>
              <div className="rx-heading-md">Heera</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Form Block */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard className="p-8 lg:p-12 bg-white/5 border-white/10" intensity="low">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-20"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-8">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="rx-heading-lg mb-4">Message Received!</h3>
                  <p className="rx-body-md text-rx-text-ghost mb-10">
                    Our lead Meta ads specialist will reach out via WhatsApp <br /> or Email within 2 hours.
                  </p>
                  <Button variant="secondary" onClick={() => setIsSuccess(false)}>Send Another Message</Button>
                </motion.div>
              ) : (
                <form 
                  action="https://formsubmit.co/founder@reachx.world" 
                  method="POST" 
                  onSubmit={handleSubmit(onSubmit)} 
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="rx-label text-[10px] text-rx-text-muted ml-1">Your Name</label>
                      <input 
                        {...register("name")}
                        className={cn(
                          "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 rx-body-md text-white focus:outline-none focus:border-rx-purple-vivid focus:bg-white/10 transition-all",
                          errors.name && "border-rx-magenta/50"
                        )}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="rx-label text-[10px] text-rx-text-muted ml-1">Business Name</label>
                      <input 
                        {...register("business")}
                        className={cn(
                          "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 rx-body-md text-white focus:outline-none focus:border-rx-purple-vivid focus:bg-white/10 transition-all",
                          errors.business && "border-rx-magenta/50"
                        )}
                        placeholder="Acme Growth"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="rx-label text-[10px] text-rx-text-muted ml-1">WhatsApp / Phone</label>
                      <input 
                        {...register("phone")}
                        className={cn(
                          "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 rx-body-md text-white focus:outline-none focus:border-rx-purple-vivid focus:bg-white/10 transition-all",
                          errors.phone && "border-rx-magenta/50"
                        )}
                        placeholder="+91 00000 00000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="rx-label text-[10px] text-rx-text-muted ml-1">Work Email</label>
                      <input 
                        {...register("email")}
                        className={cn(
                          "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 rx-body-md text-white focus:outline-none focus:border-rx-purple-vivid focus:bg-white/10 transition-all",
                          errors.email && "border-rx-magenta/50"
                        )}
                        placeholder="john@business.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <label className="rx-label text-[10px] text-rx-text-muted ml-1">I'm interested in...</label>
                    <div className="flex flex-wrap gap-2">
                      {services.map(s => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleService(s)}
                          className={cn(
                            "px-4 py-2 rounded-full rx-mono text-[10px] border transition-all duration-300",
                            selectedServices.includes(s)
                              ? "bg-rx-purple-vivid border-rx-purple-vivid text-white shadow-rx-glow-sm"
                              : "bg-white/5 border-white/10 text-rx-text-ghost hover:border-white/30"
                          )}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <label className="rx-label text-[10px] text-rx-text-muted ml-1">Brief Project Context</label>
                    <textarea 
                      {...register("message")}
                      rows={4}
                      className={cn(
                        "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 rx-body-md text-white focus:outline-none focus:border-rx-purple-vivid focus:bg-white/10 transition-all resize-none",
                        errors.message && "border-rx-magenta/50"
                      )}
                      placeholder="Tell us about your current growth bottlenecks or target ROAS..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full mt-6 py-6" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Send size={18} />
                        </motion.div>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Growth Inquiry <ArrowRight size={18} />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </AnimatePresence>
          </GlassCard>
        </motion.div>
      </div>

      {/* Themed Google Maps UI Box (Local SEO & GEO Grounding) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-20 lg:mt-28"
      >
        <div className="relative rounded-[32px] overflow-hidden border border-white/15 bg-gradient-to-b from-[#160E28] via-[#0E0A1A] to-[#0A0713] p-6 lg:p-10 shadow-2xl">
          {/* Subtle Accent Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-rx-purple-vivid/10 blur-[90px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-rx-magenta/10 blur-[90px] pointer-events-none rounded-full" />

          {/* Map Header Bar */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rx-purple-vivid/15 border border-rx-purple-vivid/30 mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rx-purple-vivid opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rx-purple-vivid"></span>
                </span>
                <span className="rx-mono text-[11px] text-rx-purple-glow font-semibold tracking-wider uppercase">
                  Headquarters & Operations Center
                </span>
              </div>
              <h3 className="rx-heading-lg text-white flex items-center gap-2">
                <MapPin className="text-rx-magenta" size={24} />
                ReachX — Nagpur, Maharashtra
              </h3>
              <p className="rx-body-sm text-rx-text-ghost mt-1">
                Your premier local and national performance marketing agency • Serving clients across Nagpur, Pune, Mumbai, Bangalore & Pan-India
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.google.com/maps?cid=3306307394348583166"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-rx-purple-vivid hover:text-white border border-white/15 text-white rx-mono text-xs font-medium transition-all duration-300 shadow-rx-sm group"
              >
                <Navigation size={15} className="group-hover:translate-x-0.5 transition-transform" />
                Get Directions
              </a>
              <a
                href="https://www.google.com/maps?cid=3306307394348583166"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-rx-purple-deep via-rx-magenta to-rx-orange text-white rx-mono text-xs font-semibold hover:opacity-95 transition-all shadow-rx-sm"
              >
                <ExternalLink size={15} />
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Embedded Google Maps Viewport with Theme Styling */}
          <div className="relative z-10 mt-8 rounded-2xl overflow-hidden border border-white/10 bg-[#09060F] shadow-inner">
            <div className="w-full h-[360px] md:h-[440px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.9637647190034!2d79.04171198019667!3d21.114010755740086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bfdeb8b6561d%3A0x2de299dc193388fe!2sReachX!5e0!3m2!1sen!2sin!4v1794656958208!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="ReachX Google Maps Location"
                className="w-full h-full filter contrast-[1.05] brightness-[0.92] hover:brightness-100 transition-all duration-300"
              />
            </div>
          </div>

          {/* Localized GEO Footnotes */}
          <div className="relative z-10 mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="rx-mono text-[10px] text-rx-text-muted block mb-1">GEO Coordinates</span>
              <span className="rx-mono text-xs text-white font-medium">21.1140° N, 79.0417° E</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="rx-mono text-[10px] text-rx-text-muted block mb-1">Regional HQ</span>
              <span className="rx-body-sm text-white font-medium">Nagpur, Maharashtra</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="rx-mono text-[10px] text-rx-text-muted block mb-1">Direct Phone</span>
              <span className="rx-mono text-xs text-white font-medium">+91 91724 64547</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="rx-mono text-[10px] text-rx-text-muted block mb-1">Local Focus</span>
              <span className="rx-body-sm text-rx-orange font-medium flex items-center gap-1.5">
                <Sparkles size={13} /> SMMA & Meta Ads Near You
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
