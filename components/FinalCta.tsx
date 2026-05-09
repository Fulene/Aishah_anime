"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function FinalCta() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".final-copy",
        { autoAlpha: 0, y: 54, filter: "blur(12px)" },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030303] px-6 py-24 text-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.11),transparent_28%),linear-gradient(180deg,#050505,#030303)]" />
      <div className="final-copy relative z-10 max-w-5xl">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.42em] text-white/42">
          End archive
        </p>
        <h2 className="text-5xl font-black uppercase leading-[0.92] text-white sm:text-7xl lg:text-8xl">
          Choose your next world.
        </h2>
        <button className="mt-10 rounded-full border border-white/18 bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.24em] text-black shadow-[0_0_48px_rgba(255,255,255,0.36)] transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_78px_rgba(255,255,255,0.58)]">
          Enter archive
        </button>
      </div>
    </section>
  );
}
