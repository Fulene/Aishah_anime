"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimeImage } from "@/components/AnimeImage";
import type { Anime } from "@/lib/anime";

type SummarySectionsProps = {
  anime: Anime[];
};

export function SummarySections({ anime }: SummarySectionsProps) {
  const rootRef = useRef<HTMLDivElement>(null);

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
      gsap.utils.toArray<HTMLElement>(".summary-section").forEach((section) => {
        gsap.fromTo(
          section.querySelector(".summary-image"),
          { autoAlpha: 0, y: 90, scale: 0.94, filter: "blur(18px)" },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 72%",
              end: "top 28%",
              scrub: 0.8,
            },
          },
        );

        gsap.fromTo(
          section.querySelector(".summary-copy"),
          { autoAlpha: 0, y: 64 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 66%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="bg-[#050505]">
      {anime.map((item, index) => (
        <section
          key={item.slug}
          className="summary-section relative isolate flex min-h-screen items-center overflow-hidden px-6 py-24 sm:px-10 lg:px-12"
        >
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background: `radial-gradient(circle at ${index % 2 === 0 ? "20% 35%" : "80% 35%"}, ${item.glow}, transparent 32%), linear-gradient(180deg, #050505, #101010 48%, #050505)`,
            }}
          />
          <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
            <div
              className={`summary-image relative aspect-[3/4] min-h-[420px] overflow-hidden rounded-md border border-white/12 bg-white/5 shadow-2xl ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
              style={{ boxShadow: `0 0 92px ${item.glow}` }}
            >
              <AnimeImage
                anime={item}
                sizes="(min-width: 1024px) 42vw, 92vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(0,0,0,0.7))]" />
            </div>

            <div className="summary-copy">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.42em] text-white/45">
                Archive file 0{index + 1}
              </p>
              <h2 className="text-5xl font-black uppercase leading-[0.9] text-white sm:text-7xl lg:text-8xl">
                {item.title}
              </h2>
              <div className="mt-8 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/82"
                    style={{
                      borderColor: item.accent,
                      backgroundColor: item.glow,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl sm:leading-9">
                {item.summary}
              </p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
