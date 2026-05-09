"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimeImage } from "@/components/AnimeImage";
import type { Anime } from "@/lib/anime";

type HeroSectionProps = {
  anime: Anime[];
};

export function HeroSection({ anime }: HeroSectionProps) {
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
      gsap.to(".hero-bg", {
        scale: 1.18,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-copy", {
        autoAlpha: 0,
        y: -90,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "35% top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-card", {
        yPercent: (index) => [-24, -42, -18, -36, -28][index] ?? -25,
        rotate: (index) => [-5, 4, -3, 5, -4][index] ?? 0,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-screen overflow-hidden bg-[#050505]"
    >
      <div className="hero-bg absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(56,189,248,0.2),transparent_32%),radial-gradient(circle_at_75%_12%,rgba(244,114,182,0.18),transparent_30%),linear-gradient(135deg,#050505,#111827_42%,#050505)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.08)_46%,transparent_58%)] animate-[sweep_7s_linear_infinite]" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.36)_58%,rgba(0,0,0,0.94)_100%)]" />

      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {anime.map((item, index) => (
          <div
            key={item.slug}
            className="hero-card absolute aspect-[3/4] w-[15vw] max-w-64 overflow-hidden rounded-md border border-white/12 bg-white/5 shadow-2xl"
            style={{
              left: `${10 + index * 18}%`,
              top: `${index % 2 === 0 ? 17 : 48}%`,
              boxShadow: `0 0 70px ${item.glow}`,
            }}
          >
            <AnimeImage anime={item} priority={index < 2} sizes="16vw" />
            <div
              className="absolute inset-0 mix-blend-screen"
              style={{
                background: `linear-gradient(180deg, transparent, ${item.glow})`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="hero-copy relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-end px-6 pb-24 pt-32 sm:px-10 lg:px-12">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.48em] text-white/54">
          Premium anime archive
        </p>
        <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.85] text-white sm:text-8xl lg:text-[10rem]">
          Anime Archives
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-white/70 sm:text-2xl">
          Five worlds. Five stories. One cinematic scroll.
        </p>
      </div>
    </section>
  );
}
