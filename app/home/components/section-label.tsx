import type { ReactNode } from "react";

// Small ruled label above each section heading.
export function SectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-sm font-medium ${light ? "text-[#8FD3D8]" : "text-[#0E7C86]"}`}>
      <span className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}
