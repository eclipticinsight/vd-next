"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { 
  Search, 
  Plus, 
  ArrowRight, 
  Calendar, 
  Clock, 
  User,
  TrendingUp,
  FileText,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Define the Blog type
interface Blog {
  _id: string;
  title: string;
  image?: string;
  excerpt?: string;
  content?: string;
  slug: string;
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

export default function BlogContent() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [featuredBlog, setFeaturedBlog] = useState<Blog | null>(null);
  const [user, setUser] = useState<User | null>(null);
  
  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

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

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const url = category 
        ? `${API_URL}/blogs?page=${page}&category=${category}`
        : `${API_URL}/blogs?page=${page}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }
      
      const data = await response.json();
      const blogsData = data.blogs || [];
      setBlogs(blogsData);
      setTotalPages(data.totalPages || 1);
      
      // Set first blog as featured if available and on first page
      if (page === 1 && blogsData.length > 0 && !featuredBlog && !category) {
        setFeaturedBlog(blogsData[0]);
      }
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [page, category]);

  const filteredBlogs = Array.isArray(blogs)
    ? blogs.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  // Get blogs excluding featured for the grid
  const gridBlogs = featuredBlog && page === 1 && !category && !search
    ? filteredBlogs.filter(blog => blog._id !== featuredBlog._id)
    : filteredBlogs;

  const stripHtml = (html?: string) => {
    if (!html) return "";
    return html.replace(/<[^>]*>?/gm, " ").replace(/&nbsp;/g, " ").trim();
  };

  const getReadTime = (content?: string) => {
    if (!content) return "5 min read";
    const text = stripHtml(content);
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${Math.max(3, minutes)} min read`;
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const clearSearch = () => {
    setSearch("");
    setPage(1);
  };

  return (
    <>
      {/* SEO Metadata */}
      <title>Visionary Dynamics Blog | Insights & Business Trends</title>
      <meta
        name="description"
        content="Stay informed with the Visionary Dynamics blog featuring expert articles on business growth, technology, and digital transformation."
      />
      
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9]">

        {/* Hero Section - Modern Gradient */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl"></div>
          
          <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-[#3b82f6]/20 backdrop-blur-sm px-4 py-2 rounded-full border border-[#3b82f6]/30 mb-6">
                <TrendingUp className="h-4 w-4 text-[#3b82f6]" />
                <span className="text-xs font-semibold tracking-wider text-[#3b82f6] uppercase">Insights & Strategy</span>
              </div>
              <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
                The <span className="text-[#f59e0b]">Process Design</span> Principles That Scale Firms
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
                Expert insights on workflow automation, tax return optimization, and CAS growth strategies for modern CPA firms.
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filter Bar */}
        <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="font-semibold text-slate-700">{filteredBlogs.length}</span>
                <span>articles</span>
                {search && <span className="text-[#3b82f6]">· filtered by "{search}"</span>}
              </div>
              
              <div className="flex gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:w-80">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search by title, topic, or author..."
                    value={search}
                    onChange={handleSearch}
                    className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent bg-slate-50 text-sm"
                  />
                </div>
                
                {user && user.role === "admin" && (
                  <Link
                    href="/admin/blogs/create"
                    className="bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white px-5 py-2.5 rounded-xl hover:from-[#2563eb] hover:to-[#1d4ed8] transition-all duration-300 flex items-center gap-2 text-sm font-medium shadow-md hover:shadow-lg"
                  >
                    <Plus className="h-4 w-4" />
                    Write Article
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-grow py-12">
          {loading ? (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-slate-200 h-48 rounded-xl mb-4"></div>
                    <div className="h-4 bg-slate-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-slate-200 rounded w-1/2 mb-2"></div>
                    <div className="h-3 bg-slate-100 rounded w-full"></div>
                  </div>
                ))}
              </div>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
              <div className="bg-white rounded-2xl p-12 shadow-sm border border-slate-100">
                <FileText className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-700 mb-2">No articles found</h3>
                <p className="text-slate-500 mb-6">We couldn't find any articles matching your search.</p>
                {search && (
                  <button
                    onClick={clearSearch}
                    className="text-[#3b82f6] hover:text-[#2563eb] font-medium"
                  >
                    Clear search
                  </button>
                )}
                {user && user.role === "admin" && !search && (
                  <Link
                    href="/admin/blogs/create"
                    className="inline-flex items-center gap-2 bg-[#3b82f6] text-white px-6 py-3 rounded-xl hover:bg-[#2563eb] transition"
                  >
                    <Plus className="h-4 w-4" />
                    Create your first article
                  </Link>
                )}
              </div>
            </div>
          ) : (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Featured Article - Hero Style (only on page 1) */}
              {featuredBlog && page === 1 && !search && !category && (
                <div className="mb-12 group">
                  <Link href={`/blog/${featuredBlog.slug}`} className="block">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 shadow-xl hover:shadow-2xl transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="p-6 md:p-8 lg:p-10 order-2 md:order-1">
                          <div className="inline-flex items-center gap-2 bg-[#f59e0b]/20 px-3 py-1 rounded-full mb-4">
                            <span className="text-xs font-semibold text-[#f59e0b] uppercase tracking-wider">Featured</span>
                          </div>
                          <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                            {featuredBlog.title}
                          </h2>
                          <p className="text-slate-300 text-sm md:text-base mb-4 line-clamp-2">
                            {stripHtml(featuredBlog.excerpt || featuredBlog.content || "").slice(0, 160)}...
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              {new Date(featuredBlog.createdAt).toDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              {getReadTime(featuredBlog.content)}
                            </span>
                            <span className="flex items-center gap-1 text-[#f59e0b] group-hover:translate-x-1 transition-transform duration-300">
                              Read full article <ArrowRight className="h-3.5 w-3.5" />
                            </span>
                          </div>
                        </div>
                        <div className="h-48 md:h-auto order-1 md:order-2 relative">
                          {featuredBlog.image ? (
                            <Image
                              src={featuredBlog.image}
                              alt={featuredBlog.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-[#1e293b] to-[#0f172a] flex items-center justify-center">
                              <FileText className="h-16 w-16 text-slate-600" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Article Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {gridBlogs.map((blog, index) => (
                  <Link href={`/blog/${blog.slug}`} key={blog._id} className="group">
                    <article className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-slate-200 h-full flex flex-col">
                      {/* Image Container */}
                      <div className="relative overflow-hidden aspect-[16/9] bg-gradient-to-br from-slate-100 to-slate-200">
                        {blog.image ? (
                          <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <FileText className="h-12 w-12 text-slate-300" />
                          </div>
                        )}
                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                          <span className="text-[10px] font-semibold bg-white/90 backdrop-blur-sm text-slate-700 px-2.5 py-1 rounded-full shadow-sm">
                            {index % 2 === 0 ? "Strategy" : "Operations"}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-5 flex flex-col flex-grow">
                        <h3 className="font-semibold text-lg text-slate-800 mb-2 line-clamp-2 group-hover:text-[#3b82f6] transition-colors">
                          {blog.title}
                        </h3>
                        <p className="text-slate-500 text-sm line-clamp-3 mb-4 flex-grow">
                          {stripHtml(blog.excerpt || blog.content || "").slice(0, 120)}...
                        </p>
                        
                        {/* Metadata */}
                        <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-100">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {getReadTime(blog.content)}
                            </span>
                          </div>
                          <span className="text-[#3b82f6] group-hover:translate-x-1 transition-transform duration-300">
                            <ArrowRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12 gap-2 flex-wrap">
                  <button
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className={`px-4 py-2 rounded-xl flex items-center gap-1 transition-all ${
                      page === 1
                        ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                        : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                    }`}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </button>
                  
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (page <= 3) {
                      pageNum = i + 1;
                    } else if (page >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = page - 2 + i;
                    }
                    
                    return (
                      <button
                        key={i}
                        onClick={() => setPage(pageNum)}
                        className={`w-10 h-10 rounded-xl font-medium transition-all ${
                          page === pageNum
                            ? "bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white shadow-md"
                            : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  
                  <button
                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className={`px-4 py-2 rounded-xl flex items-center gap-1 transition-all ${
                      page === totalPages
                        ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                        : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                    }`}
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          )}
        </main>

        {/* Newsletter CTA Section */}
        <section className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] py-12 mt-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-white mb-3">
              Get weekly insights from firm operations experts
            </h2>
            <p className="text-slate-300 mb-6">
              Join 10,000+ accounting professionals who receive our newsletter on workflow automation and practice growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your work email"
                className="flex-1 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
              />
              <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-6 py-3 rounded-xl font-medium transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}