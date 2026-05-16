"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What services does Reachex offer?",
    answer: "We offer end-to-end growth systems including performance marketing (ads), custom software/web development, premium content creation, sales funnel engineering, and franchise expansion strategies.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Initial lead flow usually starts within 48-72 hours of campaign launch. Significant brand scaling and ROI stability typically occur within the first 30-60 days as our systems optimize for your specific market.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer: "Yes, provided there is a validated product-market fit. We specialize in taking brands from early traction to market domination.",
  },
  {
    question: "How is your performance marketing different?",
    answer: "We don't just 'run ads'. We build intelligent ecosystems that qualify leads before they ever reach your sales team, ensuring a higher conversion rate and lower cost per acquisition.",
  },
  {
    question: "What does your website development process look like?",
    answer: "We build editorial-grade, high-performance web applications using modern tech stacks like Next.js. Every pixel is optimized for both visual premium and conversion psychology.",
  },
  {
    question: "Do you handle franchise lead generation end-to-end?",
    answer: "Absolutely. We've enabled 140+ outlets for brands like MahaChai. We handle everything from the initial creative strategy to the final lead qualification.",
  },
  {
    question: "How do you qualify leads before handing them over?",
    answer: "We use a mix of behavioral tracking, custom interactive forms, and automated qualification sequences to ensure your sales team only spends time on high-intent prospects.",
  },
  {
    question: "What platforms do you run ads on?",
    answer: "We are experts in Meta (Facebook/Instagram), Google Search, YouTube, and LinkedIn, selecting the platform based on where your high-value customers spend their time.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="faq" className="bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <SectionLabel className="mb-4">Got Questions?</SectionLabel>
            <h2 className="rx-display-md text-rx-text-primary">Everything You Need to Know.</h2>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUp}
              className="border-b border-rx-glass-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span className={cn(
                  "rx-heading-md transition-colors duration-300",
                  openIndex === idx ? "text-rx-purple-vivid" : "text-rx-text-primary group-hover:text-rx-purple-vivid"
                )}>
                  {idx + 1}. {faq.question}
                </span>
                <div className={cn(
                  "w-8 h-8 rounded-full border border-rx-glass-border flex items-center justify-center transition-all duration-300",
                  openIndex === idx ? "bg-rx-purple-vivid border-rx-purple-vivid text-white rotate-90" : "text-rx-text-ghost group-hover:border-rx-purple-vivid group-hover:text-rx-purple-vivid"
                )}>
                  {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="pb-8 rx-body-md text-rx-text-secondary pr-12">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
