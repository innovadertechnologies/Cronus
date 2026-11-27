import { WhatsappIcon } from "@/app/components/social-icons";
import { WHATSAPP_HREF } from "../data";

// Fixed WhatsApp button, bottom-right, from 1024px (with the side dock). The
// section containers keep 80px clear at both edges there (globals.css), and
// the button stays inside that gutter: 16px in on laptops, 24px from 1376px.
// Below 1024px, WhatsApp is a cell in the quick-action bar.
export function WhatsappButton() {
  return (
    <a
      id="homepage-sticky-whatsapp-btn"
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 z-40 min-[1376px]:bottom-6 min-[1376px]:right-6 hidden h-14 w-14 items-center justify-center rounded-full bg-[#1FA855] text-white shadow-[0_8px_24px_rgba(11,52,70,0.25)] transition-colors hover:bg-[#178A45] active:scale-[0.97] lg:flex"
    >
      <WhatsappIcon className="h-7 w-7" />
    </a>
  );
}
