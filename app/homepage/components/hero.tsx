"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import { HERO_SLIDES } from "../data";
import { GoogleIcon, Stars } from "./rating-icons";

const INTERVAL = 4000;
const SLIDE_MS = 700; // matches duration-700 on the track
const COUNT = HERO_SLIDES.length;
// The first slide is repeated at the end so the last → first step keeps
// sliding the same way; once it lands, the track jumps back to the real first
// slide without animation.
const TRACK = [...HERO_SLIDES, HERO_SLIDES[0]];

type Props = {
  rating: string;
  count: string;
  googleUrl: string;
};

// Image-only hero: existing banners slide right-to-left automatically. It
// keeps running on hover; it pauses only with the pause button or while a
// control inside it has keyboard focus. With reduced motion the slides still
// change, just without the sliding animation (see globals.css).
export function Hero({ rating, count, googleUrl }: Props) {
  const [index, setIndex] = useState(0); // 0..COUNT (COUNT = the repeated first slide)
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const [focused, setFocused] = useState(false);

  // Only the first slide is in the server HTML (preloaded, high priority) so
  // it is the LCP image with nothing competing. The rest mount a moment after
  // the page has loaded (or on the first interaction), still well before the
  // first slide change at 4s. Fetching them right at load put them inside the
  // LCP window, which Lighthouse counts against the hero image.
  const [loadRest, setLoadRest] = useState(false);
  useEffect(() => {
    let timer: number | undefined;
    const load = () => setLoadRest(true);
    const afterLoad = () => {
      timer = window.setTimeout(load, 1500);
    };
    if (document.readyState === "complete") afterLoad();
    else window.addEventListener("load", afterLoad, { once: true });
    window.addEventListener("pointerdown", load, { once: true, passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("load", afterLoad);
      window.removeEventListener("pointerdown", load);
    };
  }, []);

  const current = index % COUNT;

  useEffect(() => {
    if (paused || focused) return;
    const timer = setTimeout(() => {
      setAnimate(true);
      // Never step past the repeated first slide: beyond it the track is empty.
      setIndex((i) => Math.min(i + 1, COUNT));
    }, INTERVAL);
    return () => clearTimeout(timer);
  }, [index, paused, focused]);

  // After landing on the repeated first slide, snap back to the real one.
  // A timer, not transitionend: that event never fires in a background tab
  // or when the transition is cut short, which used to leave the track
  // stuck past the last slide (a blank banner).
  useEffect(() => {
    if (index !== COUNT) return;
    const timer = setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, SLIDE_MS + 50);
    return () => clearTimeout(timer);
  }, [index]);

  // Re-enable the animation on the frame after the snap.
  useEffect(() => {
    if (animate) return;
    const frame = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    return () => cancelAnimationFrame(frame);
  }, [animate]);

  function goTo(i: number) {
    setAnimate(true);
    setIndex(i);
  }

  return (
    <section
      id="hero"
      aria-roledescription="carousel"
      aria-label="Cronus Multispeciality Hospital"
      className="relative h-[37.5svh] min-h-[200px] overflow-hidden bg-[#E9F1F5] lg:h-[clamp(360px,min(40vw,calc(100svh_-_182px)),620px)]"
      // Pause only for keyboard focus; a mouse click on a dot must not stop it.
      onFocus={(e) => setFocused(e.target.matches(":focus-visible"))}
      onBlur={() => setFocused(false)}
    >
      <div
        className={`flex h-full ${animate ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" : ""}`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {TRACK.map((slide, i) => (
          <div
            key={`${slide.src}-${i}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${(i % COUNT) + 1} of ${COUNT}`}
            aria-hidden={i !== index}
            className="relative h-full w-full shrink-0"
          >
            {i === 0 ? (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority
                fetchPriority="high"
                sizes="100vw"
                className={`object-cover ${slide.position}`}
              />
            ) : (
              loadRest && (
                <Image
                  src={slide.src}
                  alt={i === COUNT ? "" : slide.alt}
                  fill
                  // Eager: off-screen slides sit sideways in the track, where
                  // lazy loading would wait until they slide in. The loop copy
                  // of slide 1 is lazy: its file is already cached.
                  loading={i === COUNT ? "lazy" : "eager"}
                  sizes="100vw"
                  className={`object-cover ${slide.position}`}
                />
              )
            )}
          </div>
        ))}
      </div>

      {/* Google rating, top-left */}
      <a
        id="homepage-hero-google-rating"
        href={googleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-4 top-4 z-10 flex items-center gap-3 rounded-xl bg-white/95 px-3 py-2 shadow-[0_8px_24px_rgba(11,52,70,0.16)] ring-1 ring-[#0B3446]/10 transition-colors hover:bg-white sm:left-8 sm:top-6 sm:px-4 sm:py-3"
      >
        <GoogleIcon className="h-7 w-7 sm:h-8 sm:w-8" />
        <span className="leading-tight">
          <span className="flex items-center gap-2">
            <span className="text-lg font-semibold tabular-nums text-[#0B3446] sm:text-xl">
              {rating}
              <span className="sr-only"> out of 5,</span>
            </span>
            <Stars rating={Number(rating)} className="h-3.5 sm:h-4" />
          </span>
          {/* Visible text doubles as the link's accessible name, so voice
              control ("click 1,012 Google reviews") works. */}
          <span className="block text-xs text-[#5B6B73]">{count} Google reviews</span>
        </span>
      </a>

      {/* Slide dots + pause/play */}
      <div className="absolute inset-x-0 bottom-3 z-10 flex items-center justify-center gap-1">
        {HERO_SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            id={`homepage-hero-slide-${i + 1}-btn`}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === current}
            onClick={() => goTo(i)}
            className="flex h-6 min-w-6 items-center justify-center"
          >
            <span
              className={`block h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                i === current ? "w-6 bg-[#0E7C86]" : "w-1.5 bg-[#0B3446]/30"
              }`}
            />
          </button>
        ))}
        <button
          id="homepage-hero-pause-btn"
          type="button"
          aria-label={paused ? "Play slideshow" : "Pause slideshow"}
          onClick={() => setPaused((p) => !p)}
          className="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-[#0B3446] ring-1 ring-[#0B3446]/10"
        >
          {paused ? <Play className="h-3 w-3" aria-hidden="true" /> : <Pause className="h-3 w-3" aria-hidden="true" />}
        </button>
      </div>
    </section>
  );
}
