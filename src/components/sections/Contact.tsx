"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { MessageSquare, Mail, Phone, Calendar, Send, CheckCircle2, ArrowRight } from "lucide-react";
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
  "Web Development",
  "Content & Creative",
  "Sales & Conversion",
  "Franchise Growth",
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
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log({ ...data, selectedServices });
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Strategy call request sent!");
    reset();
    setSelectedServices([]);
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
            <span className="rx-mono text-rx-purple-vivid text-xs font-bold uppercase tracking-[0.3em]">Let's Work Together</span>
          </motion.div>
          
          <motion.h2 variants={fadeUp} className="rx-display-lg mb-8">
            Ready to <span className="text-gradient">Scale?</span>
          </motion.h2>
          
          <motion.p variants={fadeUp} className="rx-body-lg text-rx-text-ghost mb-12 max-w-md">
            Tell us about your brand and we'll craft a custom growth strategy tailored to your industry. No fluff, just performance.
          </motion.p>

          <motion.div variants={fadeUp} className="space-y-8 mb-16">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-rx-purple-vivid group-hover:bg-rx-purple-vivid group-hover:text-white transition-all duration-300">
                <MessageSquare size={24} />
              </div>
              <div>
                <div className="rx-label text-[10px] text-rx-text-muted mb-1">WhatsApp Us</div>
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
                <div className="rx-label text-[10px] text-rx-text-muted mb-1">Direct Booking</div>
                <div className="rx-heading-md text-white">Schedule 30-min Call</div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="pt-10 border-t border-white/10">
            <div className="rx-body-sm text-rx-text-ghost mb-6 italic">"Trusted by 15+ brands across India"</div>
            <div className="flex flex-wrap gap-8 opacity-40 grayscale">
              {/* Replace with real brand icons if available */}
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
                    Our strategy team will reach out via WhatsApp <br /> or Email within the next 2 hours.
                  </p>
                  <Button variant="secondary" onClick={() => setIsSuccess(false)}>Send Another Message</Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                      placeholder="Tell us about your current growth bottlenecks..."
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
    </SectionWrapper>
  );
}
