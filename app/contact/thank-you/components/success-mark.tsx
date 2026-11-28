export function SuccessMark() {
  return (
    <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_rgba(11,52,70,0.10)] ring-1 ring-[#0B3446]/10 sm:h-[72px] sm:w-[72px]">
      <svg viewBox="0 0 72 72" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
        <circle
          cx="36"
          cy="36"
          r="34"
          fill="none"
          stroke="#0E7C86"
          strokeWidth="3"
          pathLength={1}
          strokeDasharray="1"
          strokeDashoffset="1"
          className="animate-[draw-stroke_0.7s_cubic-bezier(0.65,0,0.35,1)_0.15s_forwards] motion-reduce:animate-none motion-reduce:[stroke-dashoffset:0]"
        />
      </svg>
      <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true">
        <path
          d="M5 12.5l4.5 4.5L19 7.5"
          fill="none"
          stroke="#0B6A73"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          strokeDasharray="1"
          strokeDashoffset="1"
          className="animate-[draw-stroke_0.4s_ease-out_0.75s_forwards] motion-reduce:animate-none motion-reduce:[stroke-dashoffset:0]"
        />
      </svg>
    </span>
  );
}
