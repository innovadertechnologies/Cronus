import Image from "next/image";
import { RevealGroup } from "@/app/components/reveal";

const types = [
  {
    name: "Inguinal Hernia",
    image: "/inguinalharnia.png",
    description: "A hernia that develops in the groin area and is one of the most common types.",
  },
  {
    name: "Umbilical Hernia",
    image: "/umbilicalharnia.png",
    description: "A bulge that develops around the belly button.",
  },
  {
    name: "Incisional Hernia",
    image: "/incisionalharnia.png",
    description: "A hernia that develops at or near a previous surgical incision.",
  },
  {
    name: "Ventral Hernia",
    image: "/ventralharnia.png",
    description: "A hernia that occurs through a weakness in the abdominal wall.",
  },
  {
    name: "Recurrent Hernia",
    image: "/recurrentharnia.png",
    description: "A hernia that returns after previous hernia surgery.",
  },
];

export function HerniaTypes() {
  return (
    <section id="hernia-types" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 pt-8 pb-16 sm:px-8 sm:pt-10 sm:pb-20">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#0B3446] sm:text-4xl">
          Types of Hernia We Treat
        </h2>
        <span className="mt-3 block h-1 w-14 rounded-full bg-[#129EA8]" />

        <RevealGroup className="mt-8 grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {types.map((type) => (
            <div
              key={type.name}
              className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_10px_28px_-20px_rgba(11,31,51,0.35)] transition-all hover:-translate-y-1 hover:border-[#129EA8]/30 hover:shadow-[0_20px_40px_-20px_rgba(11,31,51,0.35)]"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-[#F8FAFC] p-4">
                <Image
                  src={type.image}
                  alt={type.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-[#0B3446]">{type.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{type.description}</p>
              </div>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
