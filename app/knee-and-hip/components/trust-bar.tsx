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
    <section className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Mobile: 2x2 Grid */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 text-center h-24 flex flex-col justify-center">
              <div className="mb-1 flex justify-center">
                <stat.icon className="h-5 w-5 text-teal-600" />
              </div>
              <div className="text-xl font-bold text-[#0B3446] leading-tight">
                {stat.value}
              </div>
              <div className="text-xs text-[#64748B] leading-tight mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Single Row with Dividers */}
        <div className="hidden md:grid md:grid-cols-4 md:gap-8 md:divide-x md:divide-gray-200">
          {stats.map((stat, index) => (
            <div key={index} className="text-center md:first:pl-0 md:[&:not(:first-child)]:pl-8">
              <div className="mb-3 flex justify-center">
                <stat.icon className="h-8 w-8 text-teal-600" />
              </div>
              <div className="text-3xl font-bold text-[#0B3446] mb-1">
                {stat.value}
              </div>
              <div className="text-base text-[#64748B]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}