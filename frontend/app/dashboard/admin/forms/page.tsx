"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { API } from "@/utils/api";
import {
  Trash2,
  Mail,
  Phone,
  Building,
  Search,
  Calendar,
  User,
  Calculator,
  Users,
  Headphones,
  FileText,
  AlertCircle
} from "lucide-react";

interface FormSubmission {
  _id: string;
  type: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
  company?: string;
}

export default function AdminForms() {
  const router = useRouter();
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<"finance" | "rpo" | "va">("finance");

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      // Fetch submissions through cookie-propagating helper
      const res = await API.get("/form");
      setSubmissions(res.data || []);
    } catch (error: any) {
      console.error("Error fetching submissions:", error);
      if (error?.status === 401) {
        router.push("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Auth Check
    const checkAdminAuth = () => {
      if (typeof window !== "undefined") {
        const user = localStorage.getItem("user");
        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (isLoggedIn !== "true" || !user) {
          router.push("/login");
          return false;
        }

        try {
          const userData = JSON.parse(user);
          if (userData.role !== "admin") {
            router.push("/");
            return false;
          }
        } catch {
          router.push("/login");
          return false;
        }
      }
      return true;
    };

    if (checkAdminAuth()) {
      fetchSubmissions();
    }
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this submission?")) {
      return;
    }

    try {
      await API.delete(`/form/${id}`);
      setSubmissions((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting submission:", error);
      alert("Failed to delete submission");
    }
  };

  // Classify submissions into Finance, RPO, and VA
  const classifySubmission = (type: string) => {
    const t = type.toLowerCase();
    if (t === "tax" || t.includes("rpo") || t.includes("recruit")) {
      return "rpo";
    }
    if (t === "all" || t.includes("va") || t.includes("virtual") || t.includes("assist")) {
      return "va";
    }
    return "finance"; // Default: bookkeeping, financial-reporting, payroll, Accounting
  };

  const getFriendlyType = (type: string) => {
    switch (type) {
      case "bookkeeping":
        return "Bookkeeping";
      case "financial-reporting":
        return "Financial Reporting";
      case "payroll":
        return "Payroll Processing";
      case "tax":
        return "Recruitment Process Outsourcing (RPO)";
      case "all":
        return "Virtual Assistance (VA)";
      default:
        return type || "Accounting & Compliance";
    }
  };

  // Filter submissions by search input
  const filteredSubmissions = submissions.filter((item) => {
    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.phone.toLowerCase().includes(search.toLowerCase()) ||
      (item.company || "").toLowerCase().includes(search.toLowerCase()) ||
      item.message.toLowerCase().includes(search.toLowerCase());
    
    return matchSearch && classifySubmission(item.type) === activeTab;
  });

  // Count active submissions for badges
  const financeCount = submissions.filter((item) => classifySubmission(item.type) === "finance").length;
  const rpoCount = submissions.filter((item) => classifySubmission(item.type) === "rpo").length;
  const vaCount = submissions.filter((item) => classifySubmission(item.type) === "va").length;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#081028] flex items-center justify-center text-white text-3xl">
        <div className="animate-spin rounded-full h-14 w-14 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="flex-grow flex flex-col overflow-hidden bg-[#081028] text-white">
      {/* NAVBAR */}
      <header className="h-20 bg-[#0B1739] border-b border-gray-800 flex items-center justify-between px-8 flex-shrink-0">
        <div>
          <h2 className="text-3xl font-bold">Inquiries</h2>
          <p className="text-gray-400 text-sm mt-1">Manage process consulting submissions</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search submissions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-[#101C44] border border-gray-700 rounded-xl pl-10 pr-4 h-11 w-64 outline-none focus:border-purple-500 text-white"
            />
          </div>
        </div>
      </header>

      {/* DASHBOARD CONTENT */}
      <main className="flex-grow overflow-y-auto p-8">
        {/* TABS SELECTOR */}
        <div className="flex border-b border-gray-800 gap-6 mb-8 flex-wrap">
          {/* Tab 1: Finance & Accounting */}
          <button
            onClick={() => setActiveTab("finance")}
            className={`pb-4 px-2 text-lg font-semibold relative transition-all flex items-center gap-2 ${
              activeTab === "finance" ? "text-emerald-400" : "text-gray-400 hover:text-white"
            }`}
          >
            <Calculator className="h-5 w-5" />
            <span>Finance & Accounting</span>
            <span
              className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                activeTab === "finance" ? "bg-emerald-500/20 text-emerald-400" : "bg-gray-800 text-gray-400"
              }`}
            >
              {financeCount}
            </span>
            {activeTab === "finance" && (
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-emerald-400 rounded-t-full" />
            )}
          </button>

          {/* Tab 2: RPO */}
          <button
            onClick={() => setActiveTab("rpo")}
            className={`pb-4 px-2 text-lg font-semibold relative transition-all flex items-center gap-2 ${
              activeTab === "rpo" ? "text-blue-400" : "text-gray-400 hover:text-white"
            }`}
          >
            <Users className="h-5 w-5" />
            <span>RPO Inquiries</span>
            <span
              className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                activeTab === "rpo" ? "bg-blue-500/20 text-blue-400" : "bg-gray-800 text-gray-400"
              }`}
            >
              {rpoCount}
            </span>
            {activeTab === "rpo" && (
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-400 rounded-t-full" />
            )}
          </button>

          {/* Tab 3: VA */}
          <button
            onClick={() => setActiveTab("va")}
            className={`pb-4 px-2 text-lg font-semibold relative transition-all flex items-center gap-2 ${
              activeTab === "va" ? "text-purple-400" : "text-gray-400 hover:text-white"
            }`}
          >
            <Headphones className="h-5 w-5" />
            <span>Virtual Assistance</span>
            <span
              className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                activeTab === "va" ? "bg-purple-500/20 text-purple-400" : "bg-gray-800 text-gray-400"
              }`}
            >
              {vaCount}
            </span>
            {activeTab === "va" && (
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-purple-400 rounded-t-full" />
            )}
          </button>
        </div>

        {/* INQUIRIES LIST / GRID */}
        {filteredSubmissions.length === 0 ? (
          <div className="bg-[#101C44] border border-gray-800 rounded-2xl p-12 text-center text-gray-400">
            <FileText className="h-16 w-16 mx-auto mb-4 text-gray-600" />
            <h3 className="text-xl font-bold mb-2">No submissions found</h3>
            <p className="text-sm text-gray-500">
              {submissions.length === 0
                ? "No contact forms have been submitted yet."
                : "No submissions match your search query."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {filteredSubmissions.map((sub) => (
              <div
                key={sub._id}
                className="bg-[#101C44] border border-gray-800 hover:border-gray-700 rounded-2xl p-6 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full uppercase ${
                        activeTab === "finance"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : activeTab === "rpo"
                          ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          : "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                      }`}
                    >
                      {getFriendlyType(sub.type)}
                    </span>
                    
                    <button
                      onClick={() => handleDelete(sub._id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1.5 rounded-lg hover:bg-red-500/10"
                      title="Delete Submission"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Submitter Name */}
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <User className="h-5 w-5 text-gray-400" />
                    {sub.name}
                  </h3>

                  {/* Details block */}
                  <div className="space-y-3.5 mb-6 text-sm text-gray-300">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      <a
                        href={`mailto:${sub.email}`}
                        className="hover:text-purple-400 transition-colors underline break-all"
                      >
                        {sub.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      <a href={`tel:${sub.phone}`} className="hover:text-purple-400 transition-colors">
                        {sub.phone || "No phone provided"}
                      </a>
                    </div>

                    {sub.company && (
                      <div className="flex items-center gap-3">
                        <Building className="h-4 w-4 text-gray-400 flex-shrink-0" />
                        <span>{sub.company}</span>
                      </div>
                    )}

                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      <span>{formatDate(sub.createdAt)}</span>
                    </div>
                  </div>

                  {/* Inquiry Message */}
                  <div className="bg-[#081028]/80 rounded-xl p-4 border border-gray-800">
                    <p className="text-gray-400 text-xs font-semibold uppercase mb-1 tracking-wider">Inquiry Message</p>
                    <p className="text-white text-[14.5px] leading-relaxed whitespace-pre-wrap font-medium">
                      {sub.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
