"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";


// Define the Blog type
interface Blog {
  _id: string;
  title: string;
  content: string;
  image?: string;
  imageAlt?: string;
  excerpt?: string;
  slug: string;
  category?: string;
  createdAt: string;
  author?: {
    name: string;
    email: string;
  };
  tags?: string[];
}

interface User {
  role: string;
  name?: string;
  email?: string;
}

export default function BlogDetails() {
  const params = useParams();
  const router = useRouter();
  const slug = params.id as string;
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  // Get user from localStorage (client-side only)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user:", error);
      }
    }
  }, []);

  const isAdmin = user && user.role === "admin";

  // FETCH BLOG
  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      setLoading(true);
      setError(null);

      try {
        const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
        const response = await fetch(`${API_URL}/blogs/slug/${slug}`, {
          headers: {
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        });
        
        if (!response.ok) {
          if (response.status === 404) {
            setError("not-found");
          } else {
            setError("error");
          }
          return;
        }

        const data = await response.json();
        setBlog(data);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("error");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  // DELETE BLOG
  const handleDelete = async () => {
    if (!window.confirm("Delete this blog?")) return;

    if (!blog) return;

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_URL}/blogs/${blog._id}`, {
        method: "DELETE",
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      router.push("/blog");
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  // Helper function to strip HTML tags
  const stripHtml = (html: string) => {
    if (!html) return "";
    return html.replace(/<[^>]*>?/gm, "").replace(/&nbsp;/g, " ").trim();
  };

  // LOADING STATE
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B1F3A] flex items-center justify-center text-white text-xl">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          Loading...
        </div>
      </div>
    );
  }

  // NOT FOUND STATE
  if (error === "not-found") {
    return (
      <div className="min-h-screen bg-[#0B1F3A] flex items-center justify-center text-white text-xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog not found ❌</h1>
          <Link href="/blog" className="text-[#f4a522] hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // ERROR STATE
  if (error === "error" || !blog) {
    return (
      <div className="min-h-screen bg-[#0B1F3A] flex items-center justify-center text-white text-xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Something went wrong ⚠️</h1>
          <Link href="/blog" className="text-[#f4a522] hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#faf8f4] text-[#1a1a2e] overflow-hidden">
      {/* HEADER */}

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1f3a] via-[#162d50] to-[#0b1f3a] text-white">
        {/* GLOW EFFECTS */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-400/20 blur-[120px] rounded-full"></div>

        <div className="relative w-full px-6 pt-32 pb-24">
          {/* CATEGORY */}
          {blog.category && (
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2 mb-8">
              <span className="w-2 h-2 bg-[#f4a522] rounded-full"></span>
              <span className="text-sm tracking-wide text-white/90 uppercase">
                {blog.category}
              </span>
            </div>
          )}

          {/* TITLE */}
          <h1 className="text-5xl md:text-7xl leading-tight font-black max-w-5xl">
            {blog.title}
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 text-lg md:text-xl text-white/75 leading-relaxed max-w-3xl">
            {blog.excerpt
              ? stripHtml(blog.excerpt)
              : "Explore the latest enterprise insights, cybersecurity trends, AI innovations, and digital transformation strategies."}
          </p>

          {/* ADMIN BUTTONS */}
          {isAdmin && (
            <div className="flex gap-3 mt-10 flex-wrap">
              <button
                onClick={handleDelete}
                className="bg-red-500 px-5 py-2 rounded-xl hover:bg-red-600 transition"
              >
                Delete
              </button>
              <button
                onClick={() => router.push(`/admin/blogs/edit/${blog._id}`)}
                className="bg-green-500 px-5 py-2 rounded-xl hover:bg-green-600 transition"
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </section>
      
      <div className="h-20 md:h-28"></div>

      {/* FEATURE IMAGE */}
      {blog.image && (
        <section className="relative z-20 max-w-5xl mx-auto px-4 md:px-6 -mt-10 md:-mt-16">
          <div className="rounded-[32px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.18)] border border-black/5 bg-white">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src={blog.image}
                alt={blog.imageAlt || blog.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* MAIN CONTENT */}
      <main className="max-w-5xl mx-auto px-8 py-28">
        {/* DIVIDER */}
        <div className="w-24 h-1 bg-gradient-to-r from-[#f4a522] to-[#1a73e8] rounded-full mb-14"></div>

        {/* BLOG CONTENT */}
<article
  className="
    max-w-none

    [&_h1]:text-5xl
    [&_h1]:font-black
    [&_h1]:mb-10
    [&_h1]:text-[#0b1f3a]

    [&_h2]:text-4xl
    [&_h2]:font-black
    [&_h2]:mt-20
    [&_h2]:mb-10
    [&_h2]:pl-5
    [&_h2]:border-l-4
    [&_h2]:border-[#f4a522]
    [&_h2]:text-[#0b1f3a]

    [&_h3]:text-2xl
    [&_h3]:font-bold
    [&_h3]:mt-12
    [&_h3]:mb-6
    [&_h3]:text-[#162d50]

    [&_p]:text-[20px]
    [&_p]:leading-[2.2]
    [&_p]:text-[#4a5568]
    [&_p]:mb-8

    [&_strong]:font-bold
    [&_strong]:text-[#0b1f3a]

    [&_ul]:list-disc
    [&_ul]:pl-8
    [&_ul]:mb-8

    [&_ol]:list-decimal
    [&_ol]:pl-8
    [&_ol]:mb-8

    [&_li]:text-[19px]
    [&_li]:leading-9
    [&_li]:mb-3
    [&_li]:text-[#4a5568]

    [&_blockquote]:border-l-4
    [&_blockquote]:border-[#f4a522]
    [&_blockquote]:bg-[#fff8ea]
    [&_blockquote]:rounded-xl
    [&_blockquote]:p-6
    [&_blockquote]:italic
    [&_blockquote]:my-10

    [&_table]:w-full
    [&_table]:border-collapse
    [&_table]:my-12

    [&_th]:border
    [&_th]:bg-[#f8fafc]
    [&_th]:px-5
    [&_th]:py-4
    [&_th]:text-left

    [&_td]:border
    [&_td]:px-5
    [&_td]:py-4
  "
>
  <div
    dangerouslySetInnerHTML={{
      __html: blog.content || "<p>No content available</p>",
    }}
  />
</article>
        {/* CTA SECTION */}
        <section className="relative overflow-hidden mt-28 rounded-[32px] bg-gradient-to-br from-[#0b1f3a] to-[#162d50] text-white p-10 md:p-16 shadow-2xl">
          {/* GLOW */}
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-amber-400/20 blur-[120px] rounded-full"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black leading-tight max-w-3xl">
              Secure Your Business with Enterprise-Grade Digital Solutions
            </h2>

            <p className="mt-6 text-white/75 text-lg leading-9 max-w-2xl">
              We help organizations modernize infrastructure, strengthen cybersecurity,
              optimize AI adoption, and accelerate digital transformation strategies.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href="https://api.visionarydynamicsas.com/widget/booking/W8AoTbUqrhyFWuU8A7Sw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#f4a522] to-[#ffbf47] text-[#0b1f3a] font-bold text-lg shadow-2xl hover:scale-105 transition duration-300">
                  Book Consultation
                </button>
              </a>

              <Link href="/accounting">
                <button className="px-8 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl text-white font-semibold hover:bg-white/20 transition">
                  Explore Services
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
    </div>
  );
}