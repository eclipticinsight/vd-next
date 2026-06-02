"use client";

import { useState, useEffect } from "react";

// Define the Subscription type
interface Subscription {
  id: number;
  user: string;
  email: string;
  plan: string;
  amount: string;
  status: "Active" | "Expired" | "Pending" | "Cancelled";
  date: string;
}

// Define stats type
interface Stats {
  totalSubscribers: number;
  activePlans: number;
  revenue: number;
}

export default function AdminSubscriptions() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [stats, setStats] = useState<Stats>({
    totalSubscribers: 0,
    activePlans: 0,
    revenue: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  // Mock data - replace with API call
  const mockSubscriptions: Subscription[] = [
    {
      id: 1,
      user: "John Doe",
      email: "john@example.com",
      plan: "Starter Plan",
      amount: "$99",
      status: "Active",
      date: "12 May 2026",
    },
    {
      id: 2,
      user: "Sarah Smith",
      email: "sarah@example.com",
      plan: "Business Plan",
      amount: "$299",
      status: "Active",
      date: "10 May 2026",
    },
    {
      id: 3,
      user: "Michael Brown",
      email: "michael@example.com",
      plan: "Enterprise Plan",
      amount: "$999",
      status: "Active",
      date: "08 May 2026",
    },
    {
      id: 4,
      user: "Emma Wilson",
      email: "emma@example.com",
      plan: "Starter Plan",
      amount: "$99",
      status: "Expired",
      date: "01 May 2026",
    },
  ];

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  const fetchSubscriptions = async () => {
    try {
      setLoading(true);
      setError(null);

      // Replace with actual API call
      // const response = await fetch("/api/subscriptions");
      // if (!response.ok) throw new Error("Failed to fetch subscriptions");
      // const data = await response.json();

      // Using mock data for now
      const data = mockSubscriptions;
      
      setSubscriptions(data);
      calculateStats(data);
    } catch (err) {
      console.error("Error fetching subscriptions:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch subscriptions");
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (data: Subscription[]) => {
    const activePlans = data.filter(sub => sub.status === "Active").length;
    const totalRevenue = data.reduce((total, sub) => {
      const amount = parseFloat(sub.amount.replace("$", ""));
      return total + amount;
    }, 0);

    setStats({
      totalSubscribers: data.length,
      activePlans: activePlans,
      revenue: totalRevenue,
    });
  };

  const handleExport = () => {
    // Export subscriptions as CSV
    const headers = ["User", "Email", "Plan", "Amount", "Status", "Date"];
    const csvData = subscriptions.map(sub => [
      sub.user,
      sub.email,
      sub.plan,
      sub.amount,
      sub.status,
      sub.date,
    ]);

    const csvContent = [
      headers.join(","),
      ...csvData.map(row => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `subscriptions_${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleManage = (subscription: Subscription) => {
    // Implement manage functionality
    console.log("Manage subscription:", subscription);
    // You can open a modal or navigate to edit page
    alert(`Managing subscription for ${subscription.user}`);
  };

  const handleView = (subscription: Subscription) => {
    // Implement view functionality
    console.log("View subscription:", subscription);
    alert(`Viewing details for ${subscription.user}`);
  };

  const getFilteredSubscriptions = () => {
    if (filter === "all") return subscriptions;
    return subscriptions.filter(sub => 
      sub.status.toLowerCase() === filter.toLowerCase()
    );
  };

  if (loading) {
    return (
      <main className="flex-1 flex items-center justify-center p-8 text-white">
        <div className="text-white">Loading subscriptions...</div>
      </main>
    );
  }

  return (
    <main className="flex-1 overflow-y-auto p-8 text-white">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Subscriptions</h1>
          <p className="text-white/60 mt-2">Manage all active subscriptions</p>
        </div>

        {/* ERROR MESSAGE */}
        {error && (
          <div className="mb-4 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400">
            Error: {error}
          </div>
        )}

        {/* STATS CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#091548] border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
            <p className="text-white/60 mb-2">Total Subscribers</p>
            <h2 className="text-4xl font-bold">{stats.totalSubscribers}</h2>
          </div>

          <div className="bg-[#091548] border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
            <p className="text-white/60 mb-2">Active Plans</p>
            <h2 className="text-4xl font-bold text-green-400">{stats.activePlans}</h2>
          </div>

          <div className="bg-[#091548] border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
            <p className="text-white/60 mb-2">Revenue</p>
            <h2 className="text-4xl font-bold text-purple-400">
              ${stats.revenue.toLocaleString()}
            </h2>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-[#091548] border border-white/10 rounded-2xl overflow-hidden">
          {/* TABLE HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5 border-b border-white/10">
            <h2 className="text-2xl font-semibold">Active Subscriptions</h2>
            
            <div className="flex gap-3">
              {/* Filter Dropdown */}
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-[#020b2d] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="expired">Expired</option>
                <option value="pending">Pending</option>
                <option value="cancelled">Cancelled</option>
              </select>

              <button
                onClick={handleExport}
                className="bg-purple-600 hover:bg-purple-700 transition px-5 py-2 rounded-xl"
              >
                Export
              </button>
            </div>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead className="bg-[#020b2d]">
                <tr className="text-left text-white/60">
                  <th className="px-6 py-4 font-medium">User</th>
                  <th className="px-6 py-4 font-medium">Email</th>
                  <th className="px-6 py-4 font-medium">Plan</th>
                  <th className="px-6 py-4 font-medium">Amount</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Actions</th>
                </tr>
              </thead>

              <tbody>
                {getFilteredSubscriptions().length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-white/60">
                      No subscriptions found
                    </td>
                  </tr>
                ) : (
                  getFilteredSubscriptions().map((sub) => (
                    <tr
                      key={sub.id}
                      className="border-b border-white/10 hover:bg-white/5 transition"
                    >
                      <td className="px-6 py-5 font-semibold">{sub.user}</td>
                      <td className="px-6 py-5 text-white/70">{sub.email}</td>
                      <td className="px-6 py-5">{sub.plan}</td>
                      <td className="px-6 py-5 font-semibold">{sub.amount}</td>
                      <td className="px-6 py-5">
                        <span
                          className={`px-4 py-2 rounded-full text-sm font-medium ${
                            sub.status === "Active"
                              ? "bg-green-500/20 text-green-400"
                              : sub.status === "Expired"
                              ? "bg-red-500/20 text-red-400"
                              : sub.status === "Pending"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-gray-500/20 text-gray-400"
                          }`}
                        >
                          {sub.status}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-white/70">{sub.date}</td>
                      <td className="px-6 py-5">
                        <div className="flex gap-3">
                          <button
                            onClick={() => handleManage(sub)}
                            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition"
                          >
                            Manage
                          </button>
                          <button
                            onClick={() => handleView(sub)}
                            className="bg-[#020b2d] border border-white/10 hover:bg-white/10 px-4 py-2 rounded-lg transition"
                          >
                            View
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
    </main>
  );
}