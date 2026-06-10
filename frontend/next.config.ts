import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  distDir: "../.next",

  // ── Production API URL baked in at build time ──────────────────────
  // This ensures the live site never falls back to localhost:5000.
  // Override with NEXT_PUBLIC_API_URL env var in CI if needed.
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL ||
      "https://visionarydynamicsas-axbyczf9cnb8e4a8.eastus-01.azurewebsites.net/api",
  },
  // Fix: tell Turbopack this folder is the frontend workspace root
  // (avoids confusion with the root-level backend package-lock.json)
  turbopack: {
    root: path.resolve(__dirname, ".."),
  },
  images: {
    unoptimized: true,  // Required for standalone builds + fixes /_next/image proxy timeouts
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "visionarydynamicsas.com",
      },
      {
        protocol: "https",
        hostname: "www.visionarydynamicsas.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;