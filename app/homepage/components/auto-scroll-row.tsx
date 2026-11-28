"use client";

import { useEffect, useRef, type ReactNode } from "react";

const SPEED = 60;
const RESUME_MS = 2500;

export function AutoScrollRow({ label, children }: { label: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const track = el?.firstElementChild as HTMLElement | null;
    if (!el || !track) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let pos = 1;
    let hovering = false;
    let focused = false;
    let touching = false;
    let visible = true;
    let resumeAt = 0;

    const half = () => track.scrollWidth / 2;
    const wrap = () => {
      const h = half();
      if (h <= el.clientWidth) return;
      if (pos >= h) pos -= h;
      else if (pos < 1) pos += h;
    };
    const apply = () => {
      el.scrollLeft = pos;
    };
    const pauseForAWhile = () => {
      resumeAt = performance.now() + RESUME_MS;
    };
    apply();

    const onScroll = () => {
      if (Math.abs(el.scrollLeft - pos) <= 2) return; // our own movement
      pos = el.scrollLeft;
      pauseForAWhile();
      const before = pos;
      wrap();
      if (pos !== before) apply();
    };

    let dragStartX = 0;
    let dragStartPos = 0;
    let dragging = false;
    let dragged = false;
    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") {
        touching = true;
        return;
      }
      if (e.button !== 0) return;
      dragging = true;
      dragged = false;
      dragStartX = e.clientX;
      dragStartPos = pos;
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - dragStartX;
      if (Math.abs(dx) > 5) dragged = true;
      if (!dragged) return;
      pos = dragStartPos - dx;
      wrap();
      dragStartPos = pos + dx;
      apply();
    };
    const onPointerUp = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") {
        touching = false;
        pauseForAWhile();
        return;
      }
      if (dragging && dragged) pauseForAWhile();
      dragging = false;
    };
    const onClickCapture = (e: MouseEvent) => {
      if (dragged) {
        e.preventDefault();
        e.stopPropagation();
        dragged = false;
      }
    };
    const onDragStart = (e: DragEvent) => e.preventDefault();
    const onEnter = (e: PointerEvent) => {
      if (e.pointerType === "mouse") hovering = true;
    };
    const onLeave = (e: PointerEvent) => {
      if (e.pointerType === "mouse") hovering = false;
    };
    const onFocusIn = () => (focused = true);
    const onFocusOut = () => (focused = false);

    const observer = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    observer.observe(el);

    let raf = 0;
    let last = 0;
    const tick = (t: number) => {
      raf = requestAnimationFrame(tick);
      const dt = last ? Math.min(t - last, 100) : 0;
      last = t;
      if (!visible || hovering || focused || touching || dragging || reduceMotion.matches || t < resumeAt) return;
      pos += (SPEED * dt) / 1000;
      wrap();
      apply();
    };
    raf = requestAnimationFrame(tick);

    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);
    el.addEventListener("click", onClickCapture, true);
    el.addEventListener("dragstart", onDragStart);
    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("focusin", onFocusIn);
    el.addEventListener("focusout", onFocusOut);
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
      el.removeEventListener("click", onClickCapture, true);
      el.removeEventListener("dragstart", onDragStart);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("focusin", onFocusIn);
      el.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  return (
    <div
      ref={ref}
      role="region"
      aria-label={label}
      className="cursor-grab overflow-x-auto overscroll-x-contain [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
    >
      <div className="flex w-max select-none py-0">{children}</div>
    </div>
  );
}
