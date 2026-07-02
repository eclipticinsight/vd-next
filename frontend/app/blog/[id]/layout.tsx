import type { Metadata } from "next";

const getApiUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:5000/api";
  }
  return process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
};

const API_URL = getApiUrl();
const SITE_URL = "https://www.visionarydynamicsas.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  try {
    const res = await fetch(`${API_URL}/blogs/slug/${id}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return {
        title: "Blog Post Not Found",
        description: "The requested blog post could not be found.",
      };
    }

    const blog = await res.json();
    const title = blog.title || "Blog Post";
    const description =
      blog.excerpt?.replace(/<[^>]*>/g, "").trim().slice(0, 160) ||
      `Read "${title}" on the Visionary Dynamics blog.`;

    return {
      title,
      description,
      alternates: {
        canonical: `${SITE_URL}/blog/${id}`,
      },
      openGraph: {
        title,
        description,
        url: `${SITE_URL}/blog/${id}`,
        type: "article",
        images: blog.image
          ? [{ url: blog.image, alt: blog.imageAlt || title }]
          : [{ url: "/VD-Logo-e1737873827576.png", alt: title }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: blog.image ? [blog.image] : ["/VD-Logo-e1737873827576.png"],
      },
    };
  } catch {
    return {
      title: "Blog Post",
      description: "Read the latest insights from Visionary Dynamics.",
    };
  }
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
