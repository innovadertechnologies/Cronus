import { WhatsappIcon } from "@/app/components/social-icons";
import { WHATSAPP_HREF } from "../data";

// Fixed WhatsApp button, bottom-right. On phones and tablets it sits above
// the quick-action bar so the two never overlap.
export function WhatsappButton() {
  return (
    <a
      id="homepage-sticky-whatsapp-btn"
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1FA855] text-white shadow-[0_8px_24px_rgba(11,52,70,0.25)] transition-colors hover:bg-[#178A45] active:scale-[0.97] sm:right-6 lg:bottom-6"
    >
      <WhatsappIcon className="h-7 w-7" />
    </a>
  );
}
