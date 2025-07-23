import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Ignore TypeScript build errors (e.g., unused types, missing types)
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
