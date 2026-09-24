import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Landing pages live at /hernia, /gallbladder-surgery and /maternity;
  // the bare domain goes to the main hospital website.
  async redirects() {
    return [{ source: "/", destination: "https://cronushospitals.com", permanent: false }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
