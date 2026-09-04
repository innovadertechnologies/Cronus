export function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7c-.27-.04-1.2-.12-2.3-.12-2.27 0-3.82 1.38-3.82 3.92V10H8v3.1h2.58V21h2.92Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.5C4.1 3.5 3.25 4.36 3.25 5.44 3.25 6.5 4.08 7.38 5.22 7.38H5.25C6.42 7.38 7.25 6.5 7.25 5.44 7.23 4.36 6.42 3.5 5.25 3.5ZM20.75 13.63C20.75 10.32 18.99 8.78 16.65 8.78 14.77 8.78 13.92 9.81 13.45 10.53V8.5H10.06C10.11 9.55 10.06 20.5 10.06 20.5H13.45V13.9C13.45 13.55 13.47 13.2 13.57 12.95 13.85 12.25 14.49 11.53 15.56 11.53 16.96 11.53 17.36 12.6 17.36 14.16V20.5H20.75V13.63Z" />
    </svg>
  );
}
