"use client";

import Image from "next/image";
import { useBookingModal } from "./booking-modal";

const conditions = [
  {
    name: "Osteoarthritis",
    image: "/Osteoarthritis.png"
  },
  {
    name: "Rheumatoid Arthritis",
    image: "/Rheumatoid Arthritis.png"
  },
  {
    name: "Knee Pain & Knee Disorders",
    image: "/kneedisorder.png"
  },
  {
    name: "Hip Disorders",
    image: "/hipdisorder.png"
  },
  {
    name: "Shoulder Conditions",
    image: "/shouldercondition.png"
  },
  {
    name: "Sports Injuries",
    image: "/sportsinjury.png"
  },
  {
    name: "ACL, PCL & Ligament Tears",
    image: "/acl-pcl-ligament-tears.png"
  },
  {
    name: "Meniscus Injuries",
    image: "/Meniscus Injuries.png"
  },
  {
    name: "Rotator Cuff Tears",
    image: "/Rotator Cuff Tears.png"
  },
  {
    name: "Fractures & Trauma Injuries",
    image: "/fractures-trauma-injuries.png"
  },
  {
    name: "Osteoporosis",
    image: "/Osteoporosis.png"
  },
  {
    name: "Joint Deformities",
    image: "/Joint Deformities.png"
  },
  {
    name: "Paediatric Orthopaedic Conditions",
    image: "/Paediatric Orthopaedic Conditions.png"
  },
  {
    name: "Bone & Soft Tissue Tumours",
    image: "/bone-soft-tissue-tumours.png"
  },
  {
    name: "Foot & Ankle Disorders",
    image: "/foot-ankle-disorders.png"
  },
  {
    name: "Hand & Wrist Conditions",
    image: "/hand-wrist-conditions.png"
  }
];

export function ConditionsSection() {
  const { openBookingModal } = useBookingModal();

  return (
    <section id="conditions" className="bg-white py-6 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center mb-6 lg:mb-12">
          <h2 className="text-3xl font-bold text-[#0B3446] sm:text-4xl mb-3 lg:mb-4">
            Conditions We Treat
          </h2>
        </div>

        <div className="grid gap-4 lg:gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-6 lg:mb-12">
          {conditions.map((condition, index) => (
            <div
              key={index}
              className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-48 lg:h-64"
            >
              {/* Hero Image - 75% of card height */}
              <div className="relative h-36 lg:h-48 w-full overflow-hidden">
                <Image
                  src={condition.image}
                  alt={condition.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              
              {/* Title Section - 25% of card height */}
              <div className="h-12 lg:h-16 flex items-center justify-center px-1 lg:px-4">
                <h3 className="text-[10px] sm:text-xs lg:text-sm font-semibold text-[#0B3446] text-center leading-tight">
                  {condition.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button 
            onClick={openBookingModal}
            className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-teal-700 hover:shadow-xl transition-all duration-200"
          >
            Book Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
}