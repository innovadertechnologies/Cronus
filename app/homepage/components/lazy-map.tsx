"use client";

import { useEffect, useRef, useState } from "react";
import { FooterMap } from "@/app/components/footer-map";

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
