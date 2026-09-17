"use client";

import Image from "next/image";
import { Heart, Users, Shield, Baby, Home, Clock } from "lucide-react";
import { Reveal } from "@/app/components/reveal";

const features = [
  {
    icon: Heart,
    title: "Personalized Pregnancy Care",
  },
  {
    icon: Users,
    title: "Experienced Medical Team",
  },
  {
    icon: Shield,
    title: "Complete Maternity Support",
  },
  {
    icon: Baby,
    title: "Mother & Baby Focused Care",
  },
  {
    icon: Home,
    title: "Comfortable Hospital Environment",
  },
  {
    icon: Clock,
    title: "Care from Pregnancy to Postpartum",
  },
];

export function WhyChooseMaternity() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative">
              <Image
                src="/maternity2.png"
                alt="Maternity care at Cronus Hospital"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <h2 className="text-3xl font-bold text-[#0B3446] sm:text-4xl">
                Why Choose Cronus for Maternity Care?
              </h2>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <Reveal key={feature.title} delay={0.1 + index * 0.05}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                      <feature.icon className="h-4 w-4" strokeWidth={2} />
                    </div>
                    <span className="text-sm font-medium text-[#1B2936]">
                      {feature.title}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}