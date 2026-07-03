"use client";

import React, { useState, useEffect } from "react";

interface BlogCardImageProps {
  src?: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  category?: string;
  priority?: boolean;
}

const getFallbackImage = (category?: string) => {
  const cat = category?.toLowerCase();
  if (cat?.includes("tech")) {
    return "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80";
  }
  if (cat?.includes("finance") || cat?.includes("account")) {
    return "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80";
  }
  if (cat?.includes("market")) {
    return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80";
  }
  if (cat?.includes("business") || cat?.includes("strateg") || cat?.includes("operat")) {
    return "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80";
  }
  return "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80";
};

const getImageUrl = (imageSrc?: string) => {
  if (!imageSrc) return "";

  let url = imageSrc;

  // If it's a localhost URL, strip the origin part so we can resolve it dynamically
  if (url.includes("localhost:5000") || url.includes("127.0.0.1:5000")) {
    url = url.replace(/^http:\/\/(localhost|127\.0\.0\.1):5000/, "");
  }

  // Already an absolute external URL — use directly
  if (url.startsWith("http")) {
    return url;
  }

  const match = url.match(/\/uploads\/(.+)$/);
  if (match) {
    const filename = match[1];
    if (typeof window !== "undefined" && window.location.hostname === "localhost") {
      return `http://localhost:5000/uploads/${filename}`;
    }
    return `https://visionarydynamicsas.com/uploads/${filename}`;
  }

  return url;
};

export default function BlogCardImage({
  src,
  alt,
  fill = true,
  className,
  category,
  priority = false,
}: BlogCardImageProps) {
  const fallback = getFallbackImage(category);
  const resolvedSrc = getImageUrl(src);
  const [imgSrc, setImgSrc] = useState(resolvedSrc || fallback);

  useEffect(() => {
    setImgSrc(getImageUrl(src) || fallback);
  }, [src, fallback]);

  // Use plain <img> — works with any URL (localhost, production, external)
  // without needing next.config.ts remotePatterns configuration
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={`${className ?? ""} ${fill ? "absolute inset-0 w-full h-full object-cover" : ""}`}
      loading={priority ? "eager" : "lazy"}
      onError={() => {
        if (imgSrc !== fallback) {
          setImgSrc(fallback);
        }
      }}
    />
  );
}
