import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Best Hernia Treatment in Delhi-NCR | Cronus Multispeciality Hospital",
  description:
    "Get expert hernia evaluation and advanced laparoscopic treatment at Cronus Multispeciality Hospital in Delhi-NCR. Book a consultation today.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#005F70",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#F8FAFC] font-sans text-[#1B2936] antialiased">
        {children}
      </body>
    </html>
  );
}
