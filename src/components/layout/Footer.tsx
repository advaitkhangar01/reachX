"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MessageSquare, Mail, Send, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-rx-base-01 pt-32 pb-12 border-t border-rx-glass-border">
      <div className="container mx-auto max-w-[1400px] px-10">
        {/* Footer CTA Band */}
        <div className="bg-gradient-to-r from-rx-purple-deep via-rx-magenta to-rx-orange rounded-[40px] p-12 lg:p-20 text-white flex flex-col lg:flex-row items-center justify-between gap-12 mb-32 shadow-rx-lg">
          <div className="text-center lg:text-left">
            <h2 className="rx-display-md mb-6">Ready to scale your brand?</h2>
            <p className="rx-body-lg opacity-80 max-w-md">
              Let's build your growth engine together. Book a strategy call today and see the Reachex difference.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="secondary" className="bg-white text-rx-purple-deep border-none hover:bg-white/90">
              Book a Strategy Call
            </Button>
            <Button variant="ghost" className="text-white border-white/20 hover:bg-white/10">
              View Case Studies
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-32">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-8">
              <Image src="/logo.svg" alt="Reachex Logo" width={336} height={112} className="h-28 w-auto" />
            </Link>
            <p className="rx-body-sm text-rx-text-muted max-w-xs mb-10">
              Performance marketing and intelligent growth systems for premium brands looking to dominate their market.
            </p>
            <div className="flex gap-4">
              {[MessageSquare, Mail, Send].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white border border-rx-glass-border flex items-center justify-center text-rx-text-secondary hover:bg-rx-purple-vivid hover:text-white hover:border-rx-purple-vivid transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="rx-label text-rx-text-primary mb-8">Services</h4>
            <ul className="space-y-4">
              {["Performance Marketing", "Software Dev", "Content Creative", "Sales Conversion", "Franchise Growth"].map(item => (
                <li key={item}>
                  <Link href="#" className="rx-body-sm text-rx-text-muted hover:text-rx-purple-vivid transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="rx-label text-rx-text-primary mb-8">Projects</h4>
            <ul className="space-y-4">
              {["Real Estate", "F&B · Retail", "SaaS · Platforms", "Fintech", "CRM Systems"].map(item => (
                <li key={item}>
                  <Link href="#" className="rx-body-sm text-rx-text-muted hover:text-rx-purple-vivid transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="rx-label text-rx-text-primary mb-8">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Case Studies", "Our Team", "Careers", "Contact"].map(item => (
                <li key={item}>
                  <Link href="#" className="rx-body-sm text-rx-text-muted hover:text-rx-purple-vivid transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="rx-label text-rx-text-primary mb-8">Legal</h4>
            <ul className="space-y-4">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(item => (
                <li key={item}>
                  <Link href="#" className="rx-body-sm text-rx-text-muted hover:text-rx-purple-vivid transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-rx-glass-border flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="rx-mono text-[10px] text-rx-text-ghost uppercase tracking-widest">
            © 2025 REACHEX. ALL RIGHTS RESERVED.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 rx-mono text-[10px] text-rx-text-ghost uppercase tracking-widest hover:text-rx-purple-vivid transition-colors"
          >
            Back to Top
            <div className="w-10 h-10 rounded-full border border-rx-glass-border flex items-center justify-center group-hover:border-rx-purple-vivid transition-all">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
