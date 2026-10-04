"use client";

import Image from "next/image";
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
  imageSrc
}: { 
  title: string; 
  symptoms: string[];
  imageSrc: string;
}) {
  return (
    <div className="relative rounded-2xl bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow min-h-[300px] flex flex-col md:flex-row">
      {/* Left Side - Background Image */}
      <div className="relative w-full md:w-2/5 h-64 md:h-auto">
        <Image
          src={imageSrc}
          alt={`${title} illustration`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 40vw"
          priority
        />
        {/* Subtle overlay for visual enhancement */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/5"></div>
      </div>
      
      {/* Right Side - Content */}
      <div className="flex-1 p-6 flex flex-col justify-center">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900">
            {title}
          </h3>
        </div>
        
        <ul className="space-y-3">
          {symptoms.map((symptom, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-teal-600"></div>
              </div>
              <span className="text-gray-700 leading-relaxed text-sm">
                {symptom}
              </span>
            </li>
          ))}
        </ul>
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
          />
          
          <SymptomCard
            title="Hip Replacement"
            symptoms={hipSymptoms}
            imageSrc="/hip.png"
          />
        </div>
      </div>
    </section>
  );
}