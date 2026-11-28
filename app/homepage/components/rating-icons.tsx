export function GoogleIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

const STAR_TILE = `url("data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>',
)}")`;

export function Stars({ rating, className = "h-4" }: { rating: number; className?: string }) {
  const rounded = Math.round(rating * 2) / 2;
  const whole = Math.floor(rounded);
  const pct = ((whole * 26 + (rounded > whole ? 12 : 0)) / 128) * 100;
  return (
    <span
      aria-hidden="true"
      className={`inline-block aspect-[128/24] shrink-0 ${className}`}
      style={{
        background: `linear-gradient(90deg, #FBBC05 ${pct}%, rgb(251 188 5 / 0.35) ${pct}%)`,
        maskImage: STAR_TILE,
        maskSize: "auto 100%",
        maskRepeat: "repeat-x",
        WebkitMaskImage: STAR_TILE,
        WebkitMaskSize: "auto 100%",
        WebkitMaskRepeat: "repeat-x",
      }}
    />
  );
}

export function PractoMark({ className = "h-5 w-5 text-xs" }: { className?: string }) {
  return (
    <span
      className={`flex items-center justify-center rounded-md bg-[#14BEF0] font-semibold text-white ${className}`}
      aria-hidden="true"
    >
      P
    </span>
  );
}
