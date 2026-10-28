import Image from "next/image";

const treatmentCategories = [
  {
    title: "Kidney Stone Treatments",
    treatments: ["PCNL Surgery", "URS (Ureteroscopy)", "RIRS (Laser Surgery)", "ESWL (Shock Wave Treatment)"],
    image: "/kidney_stone.png",
    index: 1,
  },
  {
    title: "Prostate & Bladder Surgeries",
    treatments: ["TURP / HoLEP", "Bladder Stone Removal", "TURBT", "Cystoscopy"],
    image: "/prostate_surgery.png",
    index: 2,
  },
  {
    title: "Kidney & Urinary Tract Surgeries",
    treatments: ["Nephrectomy", "Pyeloplasty", "Urethroplasty", "DVIU"],
    image: "/Kidney and Urinary Surgery Infographic.png",
    index: 3,
  },
  {
    title: "Male Urology Surgeries",
    treatments: ["Hydrocele Surgery", "Varicocele Repair", "Circumcision", "Vasectomy"],
    image: "/urology_banner.png",
    index: 4,
  },
];

export function SurgeriesTreatments() {
  return (
    <section id="treatments" className="bg-gradient-to-b from-[#F3F9FD] to-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0B2A4A] sm:text-4xl">
            Urology Surgeries & Treatments
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#0E7C86]" aria-hidden />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {treatmentCategories.map(({ title, treatments, image, index }) => (
            <div
              key={title}
              className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-[0_8px_24px_-20px_rgba(11,52,70,0.45)] transition-all hover:shadow-[0_12px_32px_-20px_rgba(11,52,70,0.6)]"
            >
              {/* Background Image - Full opacity, no overlay */}
              <div className="absolute inset-0">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Content - Only covering bottom portion */}
              <div className="relative z-10 flex min-h-[320px] flex-col justify-end p-6">
                <div className="rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm">
                  {/* Number badge */}
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0E7C86] text-lg font-bold text-white shadow-md">
                    {index}
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#0B2A4A]">{title}</h3>
                  <ul className="mt-4 space-y-2">
                    {treatments.map((treatment) => (
                      <li key={treatment} className="flex items-start gap-2 text-sm text-[#64748B]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0E7C86]" />
                        {treatment}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xl font-semibold text-[#0B2A4A]">
            Book Your Urologist Consultation Today!
          </p>
        </div>
      </div>
    </section>
  );
}
