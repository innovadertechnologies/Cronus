"use client";

import Image from "next/image";
import { Star, Users, Calendar, Shield, Settings, BarChart3, Zap } from "lucide-react";
import { KneeHipForm } from "./knee-hip-form";
import { StatCounter } from "@/app/components/stat-counter";
import { useBookingModal } from "./booking-modal";

const stats = [
  {
    icon: Settings,
    title: "30+ Years of",
    subtitle: "Orthopedic Experience"
  },
  {
    icon: Users,
    title: "1,000+ Successful",
    subtitle: "Joint Replacement Surgeries"
  },
  {
    icon: Zap,
    title: "Advanced",
    subtitle: "Surgical Techniques"
  }
];

const trustStrip = [
  {
    icon: Star,
    stat: "4.2★",
    label: "Patient Rating",
  },
  {
    icon: Users,
    stat: "1,000+",
    label: "Successful Surgeries",
  },
  {
    icon: Calendar,
    stat: "30+ Years",
    label: "Orthopedic Experience",
  },
  {
    icon: Shield,
    stat: "100%",
    label: "Cashless Treatment*",
  },
];

export function Hero() {
  const { openBookingModal } = useBookingModal();

  return (
    <section id="hero" className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/docimage.png"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Knee joint overlay effect */}
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-200 opacity-80 blur-2xl animate-pulse"></div>
            <div className="absolute inset-0 w-32 h-32 rounded-full border-4 border-orange-300/50 animate-ping"></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-12 pb-20 sm:px-8 sm:pb-16 lg:py-20 lg:pb-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:gap-16 items-start">
          {/* Left Content */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-teal-600 uppercase mb-4">
              MOVE BETTER. LIVE FULLER.
            </p>
            
            <h1 className="text-4xl font-bold leading-tight text-gray-900 mb-6 lg:text-5xl xl:text-6xl">
              Get Knee & Hip Replacement Surgery from{" "}
              <span className="text-teal-600">Expert Doctors</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Advanced Orthopaedic care for pain free living
            </p>

            {/* Stats Grid */}
            <div className="grid gap-6 mb-6 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="flex items-start gap-2">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-teal-600 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-gray-900 leading-tight">
                        {stat.title}
                      </div>
                      <div className="text-sm font-semibold text-gray-900 leading-tight">
                        {stat.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={openBookingModal}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-teal-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-teal-700 transition-colors"
            >
              Book Your Consultation →
            </button>
          </div>

          {/* Right Form */}
          <div className="lg:mt-0 mb-8 lg:mb-0">
            <KneeHipForm id="knee-hip-form" className="shadow-xl" />
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="bg-gray-800/95 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-2 py-3 sm:px-8 sm:py-4">
            <div className="grid grid-cols-4 gap-2 sm:gap-4 divide-x divide-gray-600">
              {trustStrip.map(({ icon: Icon, stat, label }, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 px-1 sm:px-2 first:pl-0 last:pr-0">
                  <Icon className="h-4 w-4 sm:h-6 sm:w-6 text-teal-400 flex-shrink-0" />
                  <div className="text-center lg:text-left">
                    <div className="text-sm sm:text-lg font-bold text-white leading-tight">
                      {stat === "1,000+" ? <StatCounter value={1000} suffix="+" /> : stat}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-300 leading-tight">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}