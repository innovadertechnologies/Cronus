"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { useBookingModal } from "./booking-modal";

const kneeSymptoms = [
  "Persistent knee pain",
  "Knee stiffness or swelling", 
  "Difficulty walking or climbing stairs",
  "Pain while standing or sitting",
];

const hipSymptoms = [
  "Persistent hip pain",
  "Difficulty walking or standing",
  "Pain while sitting or getting up",
  "Limited hip movement",
];

function SymptomCard({ 
  title, 
  symptoms, 
  imageSrc,
  icon
}: { 
  title: string; 
  symptoms: string[];
  imageSrc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="relative rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow min-h-[400px]">
      {/* Background Image - Full Coverage */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={`${title} illustration`}
          fill
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/60 to-white/85" />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 shadow-sm">
              {icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {title}
            </h3>
          </div>
          
          <ul className="space-y-4">
            {symptoms.map((symptom, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                </div>
                <span className="text-gray-800 leading-relaxed font-medium">
                  {symptom}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Symptoms() {
  const { openBookingModal } = useBookingModal();

  return (
    <section id="symptoms" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex-1">
              <p className="mb-3 text-sm font-semibold tracking-wider text-teal-600 uppercase">
                COMMON SYMPTOMS
              </p>
              <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                Experiencing these symptoms?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                It could be a sign of knee or hip problem. Get evaluated by our orthopedic specialists.
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <button 
                onClick={openBookingModal}
                className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-teal-700 hover:shadow-xl transition-all duration-200"
              >
                Consult an Orthopedic Specialist →
              </button>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          <SymptomCard
            title="Knee Replacement"
            symptoms={kneeSymptoms}
            imageSrc="/knee.png"
            icon={<span className="text-2xl">🦵</span>}
          />
          
          <SymptomCard
            title="Hip Replacement"
            symptoms={hipSymptoms}
            imageSrc="/hip.png"
            icon={<span className="text-2xl">🦴</span>}
          />
        </div>
      </div>
    </section>
  );
}