import Image from "next/image";
import { Reveal } from "@/app/components/reveal";

const rows = [
  { lap: "Small incisions", open: "Larger incision" },
  { lap: "Minimal scarring", open: "More visible scarring" },
  { lap: "Less tissue disruption", open: "More tissue disruption" },
  { lap: "Shorter hospital stay", open: "Longer hospital stay" },
  { lap: "Quicker recovery (for suitable patients)", open: "Longer recovery time" },
];

export function Comparison() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0B3446] sm:text-4xl">
            Laparoscopic Surgery vs Open Surgery
          </h2>
          <span className="mt-3 block h-1 w-14 rounded-full bg-[#129EA8]" />
        </Reveal>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-[1.6fr_1fr_auto_1fr]">
          <Reveal className="hidden lg:block">
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image
                src="/docimage.png"
                alt="Surgeon reviewing laparoscopic imaging during a procedure"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-xl border border-slate-200/80">
              <div className="bg-[#0E7C82] px-4 py-3 text-center text-sm font-bold text-white">
                Laparoscopic Surgery
              </div>
              {rows.map((row, index) => (
                <div
                  key={row.lap}
                  className={`px-4 py-3 text-center text-sm text-[#1B2936] ${
                    index % 2 === 1 ? "bg-slate-50" : "bg-white"
                  }`}
                >
                  {row.lap}
                </div>
              ))}
            </div>
          </Reveal>

          <div className="hidden flex-col items-center justify-center gap-2 lg:flex">
            <span className="h-10 w-px bg-slate-200" />
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B3446] text-xs font-bold text-white">
              VS
            </span>
            <span className="h-10 w-px bg-slate-200" />
          </div>

          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-xl border border-slate-200/80">
              <div className="bg-slate-200 px-4 py-3 text-center text-sm font-bold text-[#0B3446]">
                Open Surgery
              </div>
              {rows.map((row, index) => (
                <div
                  key={row.open}
                  className={`px-4 py-3 text-center text-sm text-[#1B2936] ${
                    index % 2 === 1 ? "bg-slate-50" : "bg-white"
                  }`}
                >
                  {row.open}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-[#64748B]">
            *Recovery and outcomes vary depending on the patient&rsquo;s condition, hernia
            type, surgical technique and other individual factors. Your surgeon will
            recommend the appropriate approach.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
