"use client";

import { useEffect, useState, ReactNode } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import Preloader from "@/components/layout/Preloader";

export default function Providers({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.8,
      infinite: false,
    });

    if (isLoading) {
      lenis.stop();
    } else {
      lenis.start();
    }

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3600); // Matches Preloader exit + buffer

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, [isLoading]);

  return (
    <>
      <Preloader />
      <div className={isLoading ? "h-screen overflow-hidden" : ""}>
        {children}
      </div>
      <Toaster position="bottom-right" richColors />
    </>
  );
}
