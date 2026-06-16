import type { NextConfig } from "next";
const nextConfig = {
  images: {
    // No remotePatterns needed for public/ folder images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    qualities: [75, 82, 85, 88, 92],
  },
};
export default nextConfig;
