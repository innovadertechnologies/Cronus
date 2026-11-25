"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { HERO_SLIDES } from "../data";
import { GoogleIcon, Stars } from "./rating-icons";

const INTERVAL = 5000;

type Props = {
  rating: string;
  count: string;
  googleUrl: string;
};

// Image-only hero: existing banners cross-fade automatically. Pauses while
// hovered or focused, and stays on the first slide for reduced motion.
// The Google rating sits in the top-left corner.
export function Hero({ rating, count, googleUrl }: Props) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const next = useCallback(() => setActive((i) => (i + 1) % HERO_SLIDES.length), []);

  useEffect(() => {
    if (paused || reduced.current) return;
    const timer = setTimeout(next, INTERVAL);
    return () => clearTimeout(timer);
  }, [active, paused, next]);

  return (
    <section
      id="hero"
      aria-roledescription="carousel"
      aria-label="Cronus Multispeciality Hospital"
      className="relative h-[37.5svh] min-h-[200px] overflow-hidden bg-[#E9F1F5] lg:h-[clamp(440px,40vw,620px)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          role="group"
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${HERO_SLIDES.length}`}
          aria-hidden={i !== active}
          className={`absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover ${slide.position}`}
          />
        </div>
      ))}

      {/* Google rating, top-left */}
      <a
        id="homepage-hero-google-rating"
        href={googleUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Rated ${rating} out of 5 on Google from ${count} reviews`}
        className="absolute left-4 top-4 z-10 flex items-center gap-3 rounded-xl bg-white/95 px-3 py-2 shadow-[0_8px_24px_rgba(11,52,70,0.16)] ring-1 ring-[#0B3446]/10 transition-colors hover:bg-white sm:left-8 sm:top-6 sm:px-4 sm:py-3"
      >
        <GoogleIcon className="h-7 w-7 sm:h-8 sm:w-8" />
        <span className="leading-tight">
          <span className="flex items-center gap-2">
            <span className="text-lg font-semibold tabular-nums text-[#0B3446] sm:text-xl">{rating}</span>
            <Stars rating={Number(rating)} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </span>
          <span className="block text-xs text-[#5B6B73]">{count} Google reviews</span>
        </span>
      </a>

      {/* Slide dots */}
      <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2">
        {HERO_SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            id={`homepage-hero-slide-${i + 1}-btn`}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === active}
            onClick={() => setActive(i)}
            className="flex h-6 items-center"
          >
            <span
              className={`block h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                i === active ? "w-6 bg-[#0E7C86]" : "w-1.5 bg-[#0B3446]/30"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
