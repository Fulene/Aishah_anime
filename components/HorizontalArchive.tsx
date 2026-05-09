"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Anime } from "@/lib/anime";

type HorizontalArchiveProps = {
  anime: Anime[];
};

export function HorizontalArchive({ anime }: HorizontalArchiveProps) {
  const rootRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;

    if (!root || !track) {
      return;
    }

    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!isDesktop || reduceMotion) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const distance = () => track.scrollWidth - window.innerWidth;

      const horizontalTween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".horizontal-panel").forEach((panel) => {
        gsap.fromTo(
          panel.querySelector(".panel-copy"),
          { autoAlpha: 0, y: 48 },
          {
            autoAlpha: 1,
            y: 0,
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizontalTween,
              start: "left 70%",
              end: "left 35%",
              scrub: true,
            },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-[#050505] py-20 md:h-screen md:py-0"
    >
      <div
        ref={trackRef}
        className="flex flex-col gap-6 px-6 sm:px-10 md:h-screen md:w-max md:flex-row md:gap-0 md:px-0"
      >
        {anime.map((item) => (
          <article
            key={item.slug}
            className="horizontal-panel relative min-h-[76vh] overflow-hidden rounded-md border border-white/12 bg-white/5 md:h-screen md:w-screen md:rounded-none md:border-0"
          >
            <Image
              src={item.backgroundImage}
              alt={`Fond cinématographique ${item.title}`}
              fill
              quality={92}
              sizes="(min-width: 768px) 100vw, 92vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88),rgba(0,0,0,0.28),rgba(0,0,0,0.82))]" />
            <div
              className="absolute inset-0 opacity-55 mix-blend-screen"
              style={{
                background: `radial-gradient(circle at 72% 30%, ${item.glow}, transparent 36%)`,
              }}
            />
            <div className="panel-copy absolute bottom-8 left-6 right-6 max-w-3xl sm:bottom-12 sm:left-10 md:bottom-16 md:left-16">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.42em] text-white/52">
                Monde archive
              </p>
              <h2 className="text-5xl font-black uppercase leading-none text-white sm:text-7xl lg:text-8xl">
                {item.title}
              </h2>
              <p className="mt-5 text-xl font-medium text-white/72 sm:text-2xl">
                {item.punchline}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
