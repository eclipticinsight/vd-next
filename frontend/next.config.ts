import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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