"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { API } from "@/utils/api"; // Adjust this import path as needed


interface Blog {
  _id: string;
  title: string;
  image: string;
  excerpt?: string;
  content?: string;
  slug: string;
}

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const router = useRouter();

  const fetchBlogs = async () => {
    try {
      const res = await API.get("/blogs");

      if (Array.isArray(res.data)) {
        setBlogs(res.data);
      } else if (Array.isArray(res.data.blogs)) {
        setBlogs(res.data.blogs);
      } else {
        setBlogs([]);
      }
    } catch (err) {
      console.error(err);
      setBlogs([]);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // DELETE BLOG
  const deleteBlog = async (id: string) => {
    const confirmDelete = window.confirm("Delete this blog?");
    if (!confirmDelete) return;

    try {
      await API.delete(`/blogs/${id}`);
      fetchBlogs();
    } catch (err) {
      console.error(err);
    }
  };

  return (
      <div className="text-white">
        {/* PAGE HEADER */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold">Blog Management</h1>
            <p className="text-white/60 mt-2">Manage all published blogs</p>
          </div>

          <button
            onClick={() =>
  router.push(
    "/admin/blogs/create"
  )
}
            className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 rounded-xl font-semibold"
          >
            + Create Blog
          </button>
        </div>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-[#091548] rounded-2xl overflow-hidden border border-white/10"
            >
              {/* IMAGE */}
              <img
                src={blog.image}
                alt={blog.title}
                className="h-52 w-full object-cover"
              />

              {/* CONTENT */}
              <div className="p-5">
                <h2 className="text-2xl font-bold mb-3 line-clamp-2">
                  {blog.title}
                </h2>

                {/* FIX HTML CONTENT */}
                <div
                  className="text-white/60 mb-5 line-clamp-3"
                  dangerouslySetInnerHTML={{
                    __html: blog.excerpt || blog.content || "",
                  }}
                />

                {/* ACTION BUTTONS */}
                <div className="flex gap-3 flex-wrap">
                  <button
                    onClick={() => router.push(`/blog/${blog.slug}`)}
                    className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg"
                  >
                    View
                  </button>

                  <button
                    onClick={() =>
  router.push(
    `/admin/blogs/edit/${blog._id}`
  )
}
                    className="bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded-lg"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteBlog(blog._id)}
                    className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}