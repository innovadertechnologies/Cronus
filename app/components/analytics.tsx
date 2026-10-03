"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const GTM_ID = "GTM-KW3X37ZM";
const GA_ID = "G-5H90P9KP8F";
const GOOGLE_ADS_ID = "AW-18468152002";

// GTM + gtag are ~650 KB of script. Loading them during first paint is the
// biggest drag on mobile speed, so on landing pages they load on the
// visitor's first interaction (or after a few seconds, whichever is first).
// The thank-you page loads them straight away so conversions always fire.
const FALLBACK_DELAY_MS = 3500;
const INTERACTION_EVENTS = ["pointerdown", "touchstart", "keydown", "scroll", "mousemove"] as const;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    __analyticsLoaded?: boolean;
  }
}

function addScript(src: string) {
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  document.head.appendChild(script);
}

function loadAnalytics() {
  if (window.__analyticsLoaded) return;
  window.__analyticsLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  addScript(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`);

  window.gtag = function gtag() {
    // gtag.js expects the `arguments` object itself, not an array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
  window.gtag("config", GOOGLE_ADS_ID);
  addScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
}

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/thank-you")) {
      loadAnalytics();
      return;
    }

    const load = () => {
      cleanup();
      loadAnalytics();
    };
    const timer = window.setTimeout(load, FALLBACK_DELAY_MS);
    const cleanup = () => {
      window.clearTimeout(timer);
      INTERACTION_EVENTS.forEach((event) => window.removeEventListener(event, load));
    };
    INTERACTION_EVENTS.forEach((event) => window.addEventListener(event, load, { once: true, passive: true }));
    return cleanup;
  }, [pathname]);

  return null;
}
