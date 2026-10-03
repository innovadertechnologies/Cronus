import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Landing pages live at /hernia, /gallbladder-surgery, /knee-and-hip,
  // /maternity and /spine;
  // the bare domain goes to the main hospital website.
  async redirects() {
    return [
      // One URL per page for Google: www.* permanently redirects to the bare domain.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.cronusmultispecialityhospital.in" }],
        destination: "https://cronusmultispecialityhospital.in/:path*",
        permanent: true,
      },
      { source: "/", destination: "https://cronushospitals.com", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        // Images in /public rarely change; let browsers and the CDN keep them.
        source: "/:all*(png|jpg|jpeg|webp|avif|svg|ico)",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
    ];
  },
  images: {
    // AVIF is ~20-30% smaller than WebP; browsers without it get WebP.
    formats: ["image/avif", "image/webp"],
    // Cache optimised images for a year instead of re-optimising every minute.
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    // Inline the (small) Tailwind stylesheet into the HTML so first paint
    // doesn't wait on a separate render-blocking CSS request.
    inlineCss: true,
  },
};

export default nextConfig;
