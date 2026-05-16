"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slogan = "Reach se Revenue tak";

export default function Preloader() {
  const [isExiting, setIsExiting] = useState(false);
  const words = slogan.split(" ");

  useEffect(() => {
    // Initial delay to show the slogan
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 2800); // Slogan shows for ~2.8s

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-rx-purple-deep overflow-hidden"
        >
          {/* Subtle background pulse */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-br from-rx-purple-vivid/20 to-transparent"
          />

          <div className="relative flex flex-col items-center">
            <div className="flex gap-x-3 overflow-hidden">
              {words.map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.2 + idx * 0.15,
                    ease: [0.33, 1, 0.68, 1] 
                  }}
                  className="rx-display-md text-white font-bold tracking-tighter"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            
            {/* Elegant loading bar */}
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              className="h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent mt-8 w-48"
            />
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="mt-4 rx-mono text-[10px] text-white/40 uppercase tracking-[0.4em]"
            >
              Initializing Systems
            </motion.div>
          </div>

          {/* Decorative grain */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none noise-bg" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
