"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, ShieldAlert, Siren } from "lucide-react";
import { RevealGroup } from "@/app/components/reveal";

const risks = [
  {
    icon: AlertTriangle,
    title: "Risk of Hernia Complications",
    more: "Complications can develop over time if left unevaluated.",
  },
  {
    icon: TrendingUp,
    title: "Pain & Discomfort May Increase",
    more: "Symptoms may become more noticeable as time passes.",
  },
  {
    icon: ShieldAlert,
    title: "Hernia May Become Difficult to Treat",
    more: "Early evaluation keeps more treatment options open.",
  },
  {
    icon: Siren,
    title: "Strangulation Can Require Urgent Medical Care",
    more: "Sudden, severe symptoms need immediate medical attention.",
  },
];

export function WhyNotDelay() {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#005F70] sm:text-4xl">
            Why You Should Not Delay Hernia Treatment?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
            A hernia should be evaluated by a specialist, especially if symptoms are
            new, increasing, or affecting daily activities.
          </p>
        </div>

        <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {risks.map((risk) => (
            <motion.div
              key={risk.title}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[22px] border border-red-100 bg-white p-6 shadow-[0_10px_30px_-20px_rgba(239,83,80,0.4)] transition-shadow hover:shadow-[0_20px_40px_-20px_rgba(239,83,80,0.35)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-[#EF5350] transition-transform duration-300 group-hover:scale-110">
                <risk.icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="mt-4 text-base font-bold leading-snug text-[#1B2936]">
                {risk.title}
              </h3>
              <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-[#64748B] opacity-0 transition-all duration-300 group-hover:mt-2.5 group-hover:max-h-20 group-hover:opacity-100">
                {risk.more}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
