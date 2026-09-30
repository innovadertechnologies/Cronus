import Image from "next/image";
import { Activity } from "lucide-react";

const conditions = [
  {
    name: "Osteoarthritis",
    image: "/Osteoarthritis.png"
  },
  {
    name: "Rheumatoid Arthritis", 
    image: "/Rheumatoid%20Arthritis.png"
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
    image: "/ACL,%20PCL%20&%20Ligament%20Tears.png"
  },
  {
    name: "Meniscus Injuries",
    image: "/Meniscus%20Injuries.png"
  },
  {
    name: "Rotator Cuff Tears",
    image: "/Rotator%20Cuff%20Tears.png"
  },
  {
    name: "Fractures & Trauma Injuries",
    image: "/Fractures%20&%20Trauma%20Injuries.png"
  },
  {
    name: "Osteoporosis",
    image: "/Osteoporosis.png"
  },
  {
    name: "Joint Deformities",
    image: "/Joint%20Deformities.png"
  },
  {
    name: "Paediatric Orthopaedic Conditions",
    image: "/Paediatric%20Orthopaedic%20Conditions.png"
  },
  {
    name: "Bone & Soft Tissue Tumours",
    image: "/Bone%20&%20Soft%20Tissue%20Tumours.png"
  },
  {
    name: "Foot & Ankle Disorders",
    image: "/Foot%20&%20Ankle%20Disorders.png"
  },
  {
    name: "Hand & Wrist Conditions",
    image: "/Hand%20&%20Wrist%20Conditions.png"
  }
];

export function ConditionsSection() {
  return (
    <section id="conditions" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0B3446] sm:text-4xl mb-4">
            Comprehensive Care for All Orthopedic Conditions
          </h2>
          <p className="text-lg text-[#64748B] max-w-3xl mx-auto">
            From diagnosis to recovery, we provide complete orthopedic care with advanced surgical techniques and personalized treatment plans
          </p>
        </div>

        <div className="grid gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
      </div>
    </section>
  );
}