"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { API } from "@/utils/api"; // Adjust this import path as needed

import dynamic from "next/dynamic";

const Editor = dynamic(
  () =>
    import("@tinymce/tinymce-react").then(
      (mod) => mod.Editor
    ),
  { ssr: false }
);

export default function EditBlog() {
  const { id } = useParams();
  const router = useRouter();

  let user = null;
  if (typeof window !== "undefined") {
    user = JSON.parse(
      localStorage.getItem("user") || "null"
    );
  }

  const isAdmin = user && user.role === "admin";
  const [loadingData, setLoadingData] = useState(true);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    metaTitle: "",
    metaDescription: "",
    content: "",
    category: "",
    image: "",
    imageAlt: "",
  });

  // =========================
  // PROTECT PAGE
  // =========================
  useEffect(() => {
    if (!isAdmin) {
      router.push("/blog");
    }
  }, [isAdmin, router]);

  // =========================
  // FETCH BLOG
  // =========================
  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        const res = await API.get(`/blogs/${id}`);
        const data = res.data.blog || res.data;

        setForm({
          title: data.title || "",
          content: data.content || "",
          category: data.category || "",
          image: data.image || "",
          metaTitle: data.metaTitle || data.title || "",
          metaDescription: data.metaDescription || "",
          imageAlt: data.imageAlt || data.title || "",
        });
      } catch (err) {
        console.error("ERROR:", err);
        alert("❌ Failed to load blog");
      } finally {
        setLoadingData(false);
      }
    };

    fetchBlog();
  }, [id]);

  // =========================
  // UPDATE BLOG
  // =========================
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      await API.put(`/blogs/${id}`, form);
      alert("✅ Blog Updated!");
      router.push("/blog");
    } catch (err) {
      console.error(err);
      alert("❌ Update failed");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // LOADING
  // =========================
  if (loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B1F3A] text-white text-xl">
        Loading blog data...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1F3A] text-white flex justify-center items-center px-4 py-10">
      <form
        onSubmit={handleUpdate}
        className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl w-full max-w-5xl space-y-5"
      >
        <h2 className="text-3xl font-bold text-center">
          Edit Blog
        </h2>

        {/* TITLE */}
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          className="w-full p-3 rounded bg-white/10 border border-white/20"
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
          placeholder="Meta Title (SEO)"
          value={form.metaTitle}
          className="w-full p-3 rounded bg-white/10 border border-white/20"
          onChange={(e) =>
            setForm({
              ...form,
              metaTitle: e.target.value,
            })
          }
        />

        {/* META DESCRIPTION */}
        <textarea
          placeholder="Meta Description (SEO)"
          value={form.metaDescription}
          className="w-full p-3 rounded bg-white/10 border border-white/20 h-24"
          onChange={(e) =>
            setForm({
              ...form,
              metaDescription: e.target.value,
            })
          }
        />

        {/* IMAGE URL */}
        <input
          type="text"
          placeholder="Image URL"
          value={form.image}
          className="w-full p-3 rounded bg-white/10 border border-white/20"
          onChange={(e) =>
            setForm({
              ...form,
              image: e.target.value,
            })
          }
        />

        {/* IMAGE PREVIEW */}
        {form.image && (
          <img
            src={form.image}
            alt="preview"
            className="w-full h-64 object-cover rounded-xl"
          />
        )}

        {/* IMAGE ALT */}
        <input
          type="text"
          placeholder="Image Alt Text"
          value={form.imageAlt}
          className="w-full p-3 rounded bg-white/10 border border-white/20"
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
          className="w-full p-3 rounded bg-slate-800 border border-white/20 text-white"
        >
          <option value="">Select Category</option>
          <option value="Technology">Technology</option>
          <option value="Business">Business</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
        </select>

       {/* EDITOR */}
<div className="bg-white rounded-xl overflow-hidden">

  <Editor
    tinymceScriptSrc="https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.8.2/tinymce.min.js"

    value={form.content}

    onEditorChange={(content)=>
      setForm({
        ...form,
        content,
      })
    }

    init={{
      height:500,
      menubar:true,

      plugins:
        "advlist autolink lists link image table code fullscreen preview",

      toolbar:
        "undo redo | blocks | bold italic underline | " +
        "alignleft aligncenter alignright | " +
        "bullist numlist | image link table | code preview",
    }}
  />

</div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-sky-500 py-3 rounded-xl font-semibold hover:bg-sky-600 disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update Blog 🚀"}
        </button>
      </form>
    </div>
  );
}