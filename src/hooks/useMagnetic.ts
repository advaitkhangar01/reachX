"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useSpring } from "framer-motion";

export function useMagnetic() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<any>(null);

  const x = useSpring(0, { stiffness: 300, damping: 20, mass: 0.5 });
  const y = useSpring(0, { stiffness: 300, damping: 20, mass: 0.5 });

  const handleMouse = useCallback(
    (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const element = ref.current;
      if (!element) return;

      const { height, width, left, top } = element.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);

      x.set(middleX * 0.35);
      y.set(middleY * 0.35);
    },
    [x, y]
  );

  const reset = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener("mousemove", handleMouse);
      element.addEventListener("mouseleave", reset);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouse);
        element.removeEventListener("mouseleave", reset);
      }
    };
  }, [handleMouse, reset]);

  return { ref, x, y };
}
