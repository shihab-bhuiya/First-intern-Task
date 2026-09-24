"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import Lenis from "lenis";
import { MotionConfig } from "framer-motion";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis(): Lenis | null {
  return useContext(LenisContext);
}

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let rafId: number;
    function raf(time: number) {
      lenisInstance.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setLenis(lenisInstance);
    }, 0);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafId);
      lenisInstance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      <MotionConfig reducedMotion="user">
        {children}
      </MotionConfig>
    </LenisContext.Provider>
  );
}
