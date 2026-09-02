"use client";

import { motion } from "framer-motion";
import { Stethoscope, Building2, ClipboardList, HeartHandshake } from "lucide-react";
import { Reveal } from "@/app/components/reveal";

const features = [
  {
    number: "01",
    icon: Stethoscope,
    title: "Expert Surgical Care",
    description: "Experienced specialists for gallbladder conditions.",
  },
  {
    number: "02",
    icon: Building2,
    title: "Modern Surgical Facilities",
    description: "Well-equipped infrastructure for laparoscopic procedures.",
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Complete Medical Support",
    description: "From diagnosis to post-surgery care.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Patient-Focused Care",
    description: "Personalized treatment and dedicated support.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose" className="scroll-mt-24 bg-[#F8FAFC]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal className="lg:sticky lg:top-28">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#005F70] sm:text-4xl">
            Why Choose Cronus Multispeciality Hospital?
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-[#64748B]">
            Trusted surgical care backed by modern infrastructure, experienced
            specialists and complete support from diagnosis through recovery.
          </p>
        </Reveal>

        <div className="flex flex-col gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-[22px] border border-slate-200/80 bg-white p-6 pl-8"
            >
              <span className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-[#129EA8] transition-transform duration-300 group-hover:scale-y-100" />
              <div className="flex items-start gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E3F6F7] text-[#129EA8]">
                  <feature.icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <div>
                  <span className="text-xs font-extrabold tracking-widest text-[#129EA8]">
                    {feature.number}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-[#1B2936]">{feature.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#64748B]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
