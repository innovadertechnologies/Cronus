// Heading and one paragraph directly under the hero images. It carries the
// page's H1, since the hero itself is images only. No buttons here.
export function IntroLine() {
  return (
    <section aria-labelledby="homepage-title" className="border-b border-[#0B3446]/10 bg-white">
      <div className="mx-auto max-w-4xl px-4 py-6 text-center sm:px-8 sm:py-8">
        <h1
          id="homepage-title"
          className="text-2xl font-semibold leading-tight text-[#0B3446] sm:text-[2rem] sm:tracking-[-0.02em]"
        >
          Your Partner in Better Health and Wellbeing
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed text-[#46575F] sm:text-[17px]">
          At Cronus Multispeciality Hospital Chhatarpur, we bring experienced specialists, advanced medical facilities,
          and compassionate care.
        </p>
      </div>
    </section>
  );
}
