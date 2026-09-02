const items = [
  "Trusted Surgical Care",
  "16,000+ Surgeries",
  "Advanced Laparoscopy",
  "Insurance & Cashless Facility",
];

export function AnnouncementBar() {
  return (
    <div className="overflow-hidden bg-[#005F70] text-white">
      {/* Desktop / tablet: static, centered */}
      <div className="mx-auto hidden max-w-7xl items-center justify-center gap-2 px-6 py-2 text-xs font-medium tracking-wide sm:flex">
        {items.map((item, index) => (
          <span key={item} className="flex items-center gap-2">
            <span className="text-slate-100/90">{item}</span>
            {index < items.length - 1 && <span className="text-white/30">|</span>}
          </span>
        ))}
      </div>

      {/* Mobile: marquee ticker */}
      <div className="sm:hidden">
        <div className="flex w-max animate-marquee whitespace-nowrap py-2 text-xs font-medium tracking-wide">
          {[...items, ...items].map((item, index) => (
            <span key={index} className="flex items-center gap-2 px-3">
              <span className="text-slate-100/90">{item}</span>
              <span className="text-white/30">|</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
