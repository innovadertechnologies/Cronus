import { Star, Users, Calendar, Shield } from "lucide-react";

const stats = [
  {
    icon: Star,
    value: "4.2★",
    label: "Patient Rating",
  },
  {
    icon: Users,
    value: "1,000+",
    label: "Successful Surgeries",
  },
  {
    icon: Calendar,
    value: "30+",
    label: "Years Orthopedic Experience",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Cashless Treatment*",
  },
];

export function TrustBar() {
  return (
    <section className="bg-white py-4 lg:py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Single Row Layout for All Screen Sizes */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-8 md:divide-x md:divide-gray-200">
          {stats.map((stat, index) => (
            <div key={index} className="text-center md:first:pl-0 md:[&:not(:first-child)]:pl-4 lg:[&:not(:first-child)]:pl-8">
              <div className="mb-1 sm:mb-2 md:mb-3 flex justify-center">
                <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-teal-600" />
              </div>
              <div className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold text-[#0B3446] mb-0.5 sm:mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-[#64748B] leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}