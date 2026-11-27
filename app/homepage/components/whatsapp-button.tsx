import { WhatsappIcon } from "@/app/components/social-icons";
import { WHATSAPP_HREF } from "../data";

// Fixed WhatsApp button, bottom-right, from 1376px only: there the side
// gutter beside the content column is wide enough that it never covers
// content. Below that, WhatsApp is a cell in the quick-action bar.
export function WhatsappButton() {
  return (
    <a
      id="homepage-sticky-whatsapp-btn"
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#1FA855] text-white shadow-[0_8px_24px_rgba(11,52,70,0.25)] transition-colors hover:bg-[#178A45] active:scale-[0.97] min-[1376px]:flex"
    >
      <WhatsappIcon className="h-7 w-7" />
    </a>
  );
}
