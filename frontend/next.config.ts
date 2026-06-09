import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  distDir: "../.next",
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
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;