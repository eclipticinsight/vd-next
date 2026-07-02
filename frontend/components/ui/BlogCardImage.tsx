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

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&auto=format&fit=crop&q=80"
];

const hashString = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
};

const getFallbackImage = (seed: string, category?: string) => {
  const textToHash = seed || category || "blog";
  const hash = hashString(textToHash);
  const index = hash % FALLBACK_IMAGES.length;
  return FALLBACK_IMAGES[index];
};

const getImageUrl = (imageSrc?: string) => {
  if (!imageSrc) return "";

  const match = imageSrc.match(/\/uploads\/(.+)$/);
  if (match) {
    const filename = match[1];

    // Check if we are running frontend on localhost
    if (typeof window !== "undefined" && window.location.hostname === "localhost") {
      return `http://localhost:5000/uploads/${filename}`;
    }

    // On production, use the live server URL
    return `https://visionarydynamicsas.com/uploads/${filename}`;
  }

  // If it's already an absolute URL, return it directly
  if (imageSrc.startsWith("http")) {
    return imageSrc;
  }
  
  return imageSrc;
};

export default function BlogCardImage({
  src,
  alt,
  fill = true,
  className,
  category,
  priority = false,
}: BlogCardImageProps) {
  const fallback = getFallbackImage(src || alt, category);
  const resolvedSrc = getImageUrl(src);
  const [imgSrc, setImgSrc] = useState(resolvedSrc || fallback);

  useEffect(() => {
    setImgSrc(getImageUrl(src) || fallback);
  }, [src, fallback]);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={`${className} ${fill ? "absolute inset-0 w-full h-full object-cover" : ""}`}
      loading={priority ? "eager" : "lazy"}
      onError={() => {
        if (imgSrc !== fallback) {
          setImgSrc(fallback);
        }
      }}
    />
  );
}
