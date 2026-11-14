"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Campaigns", href: "#campaigns" },
  { name: "Team", href: "#team" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-500 py-1.5",
        scrolled ? "py-1 bg-white/80 backdrop-blur-xl border-bottom border-rx-glass-border shadow-rx-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto max-w-[1400px] px-10 flex items-center justify-between">
        <Link href="/" className="relative z-[110] group">
          <Image
            src="/logo.svg"
            alt="Reachex Logo"
            width={288}
            height={96}
            className="h-18 w-auto transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rx-body-sm font-medium text-rx-text-secondary hover:text-rx-purple-vivid transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-rx-purple-vivid to-rx-magenta transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Button variant="primary" size="sm" className="ml-4">
            Book a Strategy Call
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-[110] p-2 text-rx-text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-white z-[100] pt-32 px-10 flex flex-col gap-8"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rx-heading-lg text-rx-text-primary hover:text-rx-purple-vivid transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button
                variant="primary"
                size="lg"
                className="mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Strategy Call
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
