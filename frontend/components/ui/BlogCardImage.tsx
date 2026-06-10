"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

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

  const match = imageSrc.match(/\/uploads\/(.+)$/);
  if (match) {
    const filename = match[1];
    
    // Check if we are running frontend on localhost
    if (typeof window !== "undefined" && window.location.hostname === "localhost") {
      return `http://localhost:5000/uploads/${filename}`;
    }
    
    // On production, use raw GitHub URL as a permanent, reliable CDN host for committed uploads
    return `https://raw.githubusercontent.com/VishalRana2025/vd-next/main/uploads/${filename}`;
  }
  
  return imageSrc;
};

export default function BlogCardImage({
  src,
  alt,
  fill = true,
  className,
  sizes,
  category,
  priority = false,
}: BlogCardImageProps) {
  const fallback = getFallbackImage(category);
  const resolvedSrc = getImageUrl(src);
  const [imgSrc, setImgSrc] = useState(resolvedSrc || fallback);

  useEffect(() => {
    setImgSrc(getImageUrl(src) || fallback);
  }, [src, fallback]);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      priority={priority}
      onError={() => {
        if (imgSrc !== fallback) {
          setImgSrc(fallback);
        }
      }}
    />
  );
}
