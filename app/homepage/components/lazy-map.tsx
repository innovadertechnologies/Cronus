"use client";

import { useEffect, useRef, useState } from "react";
import { FooterMap } from "@/app/components/footer-map";

// The shared map uses loading="lazy", but Chrome starts lazy iframes up to
// ~2500px early, so on phones the Google Maps embed (about 1 MB of script)
// loaded with the page and competed with the hero banner. This mounts it
// only when the map is about to scroll into view; until then a same-size
// placeholder holds the space, so nothing shifts.
export function LazyMap({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (show) return <FooterMap className={className} />;
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`overflow-hidden rounded-xl border border-slate-200 bg-[#E9F1F5] ${className}`}
    />
  );
}
