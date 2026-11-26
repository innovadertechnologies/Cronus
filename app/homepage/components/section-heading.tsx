import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  id?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

// Quiet label + H2 + intro used by every /homepage section.
export function SectionHeading({ eyebrow, title, description, id, align = "center", tone = "light" }: Props) {
  const center = align === "center";
  const dark = tone === "dark";
  return (
    <div className={center ? "text-center" : "text-left"}>
      <p className={`text-sm font-medium ${dark ? "text-[#8FD3D8]" : "text-[#0B6A73]"}`}>{eyebrow}</p>
      <h2
        id={id}
        className={`mt-3 text-[1.75rem] font-semibold leading-tight sm:text-[2.5rem] sm:tracking-[-0.02em] ${dark ? "text-white" : "text-[#0B3446]"
          }`}
      >
        {title}
      </h2>
      {
        description && (
          <p className={`mt-4 text-[17px] leading-relaxed ${dark ? "text-white/75" : "text-[#46575F]"}`}>{description}</p>
        )
      }
    </div >
  );
}
