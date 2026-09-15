import { CLINIC_ADDRESS } from "@/app/lib/site-config";

export function FooterMap({ className = "" }: { className?: string }) {
  const query = encodeURIComponent(CLINIC_ADDRESS);

  return (
    <div className={`overflow-hidden rounded-xl border border-slate-200 ${className}`}>
      <iframe
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full"
        title="Cronus Multispeciality Hospital location"
      />
    </div>
  );
}
