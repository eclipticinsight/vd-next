"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";


// Dynamically import TinyMCE to avoid SSR issues
const Editor = dynamic(
  () =>
    import("@tinymce/tinymce-react").then(
      (mod) => mod.Editor
    ),
  { ssr: false }
);

interface BlogForm {
  title: string;
  metaTitle: string;
  metaDescription: string;
  content: string;
  excerpt: string;
  category: string;
  image: string;
  imageAlt: string;
}

export default function CreateBlog() {
  const router = useRouter();

  const [form, setForm] = useState<BlogForm>({
    title: "",
    metaTitle: "",
    metaDescription: "",
    content: "",
    excerpt: "",
    category: "",
    image: "",
    imageAlt: "",
  });

  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  // =========================
  // IMAGE UPLOAD
  // =========================
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);

      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch("/api/blogs/upload", {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      setForm((prev) => ({
        ...prev,
        image: data.imageUrl,
      }));
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  // =========================
  // SUBMIT BLOG
  // =========================
  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    const isLoggedIn =
      localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
      return alert("Login required");
    }

    try {

      setLoading(true);

      const response =
        await fetch("/api/blogs", {

          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          credentials: "include",
          body: JSON.stringify(form),
        });

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || data.msg || "Create failed"
        );
      }

      alert("Blog created");

      router.push("/blog");

    } catch (error: any) {

      console.error(error);

      alert(`Create failed: ${error.message || "Unknown error"}`);

    } finally {

      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#0B1F3A] text-white flex justify-center items-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl w-full max-w-5xl space-y-5"
      >
        <h2 className="text-3xl font-bold text-center">Create Blog</h2>

        {/* TITLE */}
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          className="w-full p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-sky-500 transition"
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
        />

        {/* META TITLE */}
        <input
          type="text"
          placeholder="Meta Title"
          value={form.metaTitle}
          className="w-full p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-sky-500 transition"
          onChange={(e) =>
            setForm({
              ...form,
              metaTitle: e.target.value,
            })
          }
        />

        {/* META DESCRIPTION */}
        <textarea
          placeholder="Meta Description"
          value={form.metaDescription}
          className="w-full p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-sky-500 transition h-24"
          onChange={(e) =>
            setForm({
              ...form,
              metaDescription: e.target.value,
            })
          }
        />

        {/* EXCERPT */}
        <textarea
          placeholder="Short Description (Excerpt)"
          value={form.excerpt}
          className="w-full p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-sky-500 transition h-24"
          onChange={(e) =>
            setForm({
              ...form,
              excerpt: e.target.value,
            })
          }
        />

        {/* IMAGE UPLOAD */}
        <div className="space-y-2">
          <label className="block text-sm text-white/70">Featured Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="w-full p-3 rounded bg-white/10 border border-white/20 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-500 file:text-white hover:file:bg-sky-600"
          />
        </div>

        {uploading && (
          <p className="text-yellow-300 flex items-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Uploading image...
          </p>
        )}

        {/* IMAGE PREVIEW */}
        {form.image && (
          <div className="relative w-full h-64 rounded-xl overflow-hidden bg-white/5">
            <Image
              src={form.image}
              alt={form.imageAlt || "Preview"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        {/* IMAGE ALT */}
        <input
          type="text"
          placeholder="Image Alt Text (for SEO)"
          value={form.imageAlt}
          className="w-full p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-sky-500 transition"
          onChange={(e) =>
            setForm({
              ...form,
              imageAlt: e.target.value,
            })
          }
        />

        {/* CATEGORY */}
        <select
          value={form.category}
          onChange={(e) =>
            setForm({
              ...form,
              category: e.target.value,
            })
          }
          className="w-full p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-sky-500 transition text-white"
        >
          <option value="" className="bg-[#0B1F3A]">Select Category</option>
          <option value="Technology" className="bg-[#0B1F3A]">Technology</option>
          <option value="Business" className="bg-[#0B1F3A]">Business</option>
          <option value="Finance" className="bg-[#0B1F3A]">Finance</option>
          <option value="Marketing" className="bg-[#0B1F3A]">Marketing</option>
          <option value="Cybersecurity" className="bg-[#0B1F3A]">Cybersecurity</option>
          <option value="AI" className="bg-[#0B1F3A]">Artificial Intelligence</option>
        </select>

        <div className="bg-white rounded-xl overflow-hidden">
          <Editor
            tinymceScriptSrc="/tinymce/tinymce.min.js"
            licenseKey="gpl"
            value={form.content}
            onEditorChange={(content) =>
              setForm({
                ...form,
                content,
              })
            }
            init={{
              height: 500,
              menubar: true,
              plugins: "advlist autolink lists link image table code fullscreen preview",
              toolbar: "undo redo | blocks | bold italic underline | alignleft aligncenter alignright | bullist numlist | image link table | code preview",
            }}
          />
        </div>

        {/* CHARACTER COUNT */}
        <div className="text-right text-sm text-white/50">
          Content length: {form.content.length} characters
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={loading || uploading}
          className="w-full bg-gradient-to-r from-sky-500 to-blue-600 py-3 rounded-xl font-semibold hover:from-sky-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Publishing...
            </span>
          ) : (
            "Publish Blog 🚀"
          )}
        </button>
      </form>
    </div>
  );
}