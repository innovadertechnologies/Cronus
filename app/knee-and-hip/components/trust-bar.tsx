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
    label: "Years Experience",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Cashless Treatment*",
  },
];

export function TrustBar() {
  return (
    <section className="bg-gradient-to-r from-teal-50 to-blue-50 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Single Row for All Screen Sizes */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center relative">
              {index < stats.length - 1 && (
                <div className="absolute right-0 top-1/2 h-12 w-px bg-slate-300 -translate-y-1/2 hidden sm:block" />
              )}
              <div className="mx-auto mb-2 sm:mb-3 flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-white shadow-sm">
                <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-teal-600" />
              </div>
              <div className="text-sm sm:text-xl md:text-2xl font-bold text-slate-800 mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-sm text-slate-600 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}