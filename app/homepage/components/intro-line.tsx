// One line of real introductory text directly under the hero images. It
// carries the page's H1, since the hero itself is images only.
export function IntroLine() {
  return (
    <section aria-labelledby="homepage-title" className="border-b border-[#0B3446]/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-8 sm:py-5">
        <h1
          id="homepage-title"
          className="flex flex-col items-center gap-1 text-center text-[13px] leading-snug text-[#46575F] sm:text-base xl:flex-row xl:justify-center xl:gap-3 xl:whitespace-nowrap lg:text-lg"
        >
          <span className="flex items-center gap-2 font-semibold text-[#0B3446]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#D9443F]" aria-hidden="true" />
            Cronus Multispeciality Hospital, Chhatarpur
          </span>
          <span className="hidden h-4 w-px bg-[#0B3446]/20 xl:block" aria-hidden="true" />
          <span>40+ specialities, 24x7 emergency, ICU and in-house diagnostics under one roof</span>
        </h1>
      </div>
    </section>
  );
}
