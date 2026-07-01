import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = "https://www.visionarydynamicsas.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/dashboard/",
          "/admin/",
          "/login",
          "/signup",
          "/cart",
          "/api/",
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
    // LLMs.txt — machine-readable site summary for AI assistants
    // Available at: ${siteUrl}/llms.txt
  };
}
