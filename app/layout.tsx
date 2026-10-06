import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Dancing_Script } from "next/font/google";
import { Analytics } from "@/app/components/analytics";
import { SITE_URL } from "@/app/lib/seo";
import { CLINIC_NAME } from "@/app/lib/site-config";
import Script from "next/script";
import "./globals.css";

const GTM_ID = "GTM-KW3X37ZM";

// Variable font: one file covers every weight instead of one file per weight.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

// Only used for one line far down the maternity page, so it isn't preloaded.
const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: false,
});

// Defaults for every page; each landing page sets its own title,
// description, canonical URL and social preview on top of these.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: CLINIC_NAME,
  description:
    "Cronus Multispeciality Hospital, Chhatarpur, New Delhi – expert surgical, orthopaedic, spine and maternity care in Delhi-NCR.",
  applicationName: CLINIC_NAME,
  authors: [{ name: CLINIC_NAME, url: "https://cronushospitals.com" }],
  publisher: CLINIC_NAME,
  formatDetection: { email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#005F70",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${jakarta.variable} ${dancingScript.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC] font-sans text-[#1B2936] antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Meta Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1360053332870076&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {children}

        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');

              fbq('init', '1360053332870076');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* GTM, GA4 and Google Ads tags – loaded after first paint, see analytics.tsx */}
        <Analytics />
      </body>
    </html>
  );
}
