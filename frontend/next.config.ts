import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  // Fix: tell Turbopack this folder is the frontend workspace root
  // (avoids confusion with the root-level backend package-lock.json)
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
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
    ],
  },
};

export default nextConfig;