"use client";

import { useEffect, useRef } from "react";

// Second half of a seamless marquee. The server sends the cards once; after
// hydration this copies the list just before it, so the HTML, the RSC payload
// and the DOM built at startup carry one copy instead of two.
// The copy is decorative but stays clickable (half the time it is what is on
// screen): aria-hidden keeps it out of the accessibility tree, its links leave
// the tab order, headings become <p> so they don't repeat, and ids are
// stripped. React renders this <ul> with no children, so it never touches
// the copies.
export function MarqueeClone({ className }: { className: string }) {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const target = ref.current;
    const source = target?.previousElementSibling;
    if (!target || !source || target.childElementCount) return;
    const copy = document.createDocumentFragment();
    for (const item of source.children) copy.append(item.cloneNode(true));
    copy.querySelectorAll("[id]").forEach((el) => el.removeAttribute("id"));
    copy.querySelectorAll("a, button, [tabindex]").forEach((el) => el.setAttribute("tabindex", "-1"));
    copy.querySelectorAll("h2, h3, h4").forEach((h) => {
      const p = document.createElement("p");
      p.className = h.className;
      p.replaceChildren(...h.childNodes);
      h.replaceWith(p);
    });
    target.append(copy);
    return () => target.replaceChildren();
  }, []);

  return <ul ref={ref} className={className} aria-hidden="true" />;
}
