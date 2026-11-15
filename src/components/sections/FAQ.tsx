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
    question: "Looking for the best social media marketing agency (SMMA) near me?",
    answer:
      "ReachX is a top-rated social media marketing agency (SMMA) and performance marketing consultancy headquartered in Nagpur, Maharashtra, servicing brands locally and across India. We engineer end-to-end growth systems, paid Meta ads, server-side CAPI tracking, and automated lead qualification pipelines that directly deliver high-intent customer acquisitions.",
  },
  {
    question: "Who is the leading Meta ads specialist near me?",
    answer:
      "ReachX features dedicated Meta ads specialists led by co-founder Kalash Chouria. We specialize in algorithmic Facebook and Instagram campaign scaling, dynamic creative testing, server-side Conversion API (CAPI) data integration, and lowering cost per acquisition (CPA) for brands spending thousands to crores monthly.",
  },
  {
    question: "What core services does ReachX offer?",
    answer:
      "We provide full-funnel Performance Marketing (Meta Ads & Google Ads), Custom Web Development & CRM software (Next.js/React), High-Converting Content & Creative production, Sales Funnel Engineering, and Franchise Multi-Location Expansion strategies.",
  },
  {
    question: "How long does it take to see results from Meta ads?",
    answer:
      "Initial lead flow typically begins within 48 to 72 hours of campaign launch. Significant scaling and sustainable return on ad spend (ROAS) stability occur within 30 to 60 days as our custom Conversion API and algorithmic bidding models mature.",
  },
  {
    question: "How is ReachX's performance marketing different from other agencies?",
    answer:
      "We don't just 'boost posts' or chase vanity metrics. We construct full-funnel ecosystems combining live Meta CAPI tracking, conditional lead qualification forms, and editorial-grade creative testing to ensure your sales team only closes high-intent prospects.",
  },
  {
    question: "Do you handle franchise lead generation and multi-city expansion?",
    answer:
      "Absolutely. ReachX has enabled over 140+ franchise outlets across India for brands like MahaChai and Pyramid, handling everything from hyper-local geo-targeted Meta ad campaigns to qualified investor discovery.",
  },
  {
    question: "Can ReachX work with brands outside Nagpur and Maharashtra?",
    answer:
      "Yes. While our headquarters are in Nagpur, Maharashtra, our performance systems serve high-growth brands across Mumbai, Pune, Bangalore, Delhi NCR, and international markets with remote dashboards and real-time reporting.",
  },
  {
    question: "What platforms do you run ad campaigns on?",
    answer:
      "We specialize heavily in Meta (Instagram & Facebook), Google Search, YouTube, and LinkedIn, deploying capital to the exact channels where your high-lifetime-value customers congregate.",
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
            <p className="rx-body-md text-rx-text-secondary mt-3">
              Answers to common questions about our SMMA, Meta ads specialization, and local growth systems.
            </p>
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
