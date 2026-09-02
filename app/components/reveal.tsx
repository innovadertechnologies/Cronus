import type { ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const Tag = as;
  return <Tag className={className}>{children}</Tag>;
}

export function RevealGroup({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return <div className={className}>{children}</div>;
}
