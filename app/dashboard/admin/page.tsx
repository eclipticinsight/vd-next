"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
const [users, setUsers] = useState<any[]>([]);
const [payments, setPayments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Get API URL from environment variable or fallback to local backend
  const API_URL =
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:5000/api";

  const fetchDashboardData = async () => {
    try {
      const token =
localStorage.getItem("token");
      
      // ✅ USERS
      const usersRes = await axios.get(
        `${API_URL}/user/all-users`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUsers(usersRes.data);

      // ✅ PAYMENTS
      const paymentsRes = await axios.get(
        `${API_URL}/payment/all`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPayments(paymentsRes.data);
    } catch (error: any) {
      console.error(error);
      if (error.response?.status === 401) {
        logout();
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check if user is admin
    const checkAdminAuth = () => {

  if (typeof window !== "undefined") {

    const user =
      localStorage.getItem("user");

    const isLoggedIn =
      localStorage.getItem("isLoggedIn");

    if (
      isLoggedIn !== "true" ||
      !user
    ) {
      router.push("/login");
      return false;
    }

    try {

      const userData =
        JSON.parse(user);

      if (
        userData.role !== "admin"
      ) {
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
      fetchDashboardData();
    }
  }, []);

  const getToken = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
    return null;
  };

  const deleteUser = async (id: string) => {
    try {
      const token = getToken();
      await axios.delete(
        `${API_URL}/user/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchDashboardData();
    } catch (error) {
      console.error(error);
      alert("Failed to delete user");
    }
  };

  const blockUser = async (id: string) => {
    try {
      const token = getToken();
      await axios.put(
        `${API_URL}/user/block/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchDashboardData();
    } catch (error) {
      console.error(error);
      alert("Failed to block/unblock user");
    }
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
    router.push("/");
  };

  const filteredUsers = users.filter((user: any) =>
    `${user.firstName} ${user.lastName} ${user.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-[#081028] flex items-center justify-center text-white text-3xl">
        <div className="animate-spin rounded-full h-14 w-14 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* NAVBAR */}
      <header className="h-20 bg-[#0B1739] border-b border-gray-800 flex items-center justify-between px-8">
            <div>
              <h2 className="text-3xl font-bold">Dashboard</h2>
              <p className="text-gray-400 text-sm mt-1">Welcome back, Admin</p>
            </div>

            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-[#101C44] border border-gray-700 rounded-xl px-4 h-11 outline-none focus:border-purple-500"
              />

              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-lg font-bold">
                AD
              </div>
            </div>
          </header>

          {/* PAGE CONTENT */}
          <main className="flex-1 overflow-y-auto p-8">
            {/* ANALYTICS */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              <div className="bg-[#101C44] border border-gray-800 rounded-2xl p-6">
                <p className="text-gray-400 text-sm">Total Users</p>
                <h3 className="text-4xl font-bold mt-4">{users.length}</h3>
              </div>

              <div className="bg-[#101C44] border border-gray-800 rounded-2xl p-6">
                <p className="text-gray-400 text-sm">Revenue</p>
                <h3 className="text-4xl font-bold mt-4">
                  ${payments.reduce(
  (acc: number, item: any) =>
    acc + (item.amount || 0),
  0
)}
                </h3>
              </div>

              <div className="bg-[#101C44] border border-gray-800 rounded-2xl p-6">
                <p className="text-gray-400 text-sm">Payments</p>
                <h3 className="text-4xl font-bold mt-4">{payments.length}</h3>
              </div>

              <div className="bg-[#101C44] border border-gray-800 rounded-2xl p-6">
                <p className="text-gray-400 text-sm">Blocked Users</p>
                <h3 className="text-4xl font-bold mt-4">
                  {users.filter((u: any) => u.blocked).length}
                </h3>
              </div>
            </div>

            {/* DASHBOARD GRID */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
              {/* REVENUE CHART */}
              <div className="xl:col-span-2 bg-[#101C44] border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Revenue Analytics</h3>
                  <select className="bg-[#081028] border border-gray-700 rounded-lg px-4 py-2">
                    <option>Monthly</option>
                    <option>Yearly</option>
                  </select>
                </div>

                <div className="h-[320px] flex items-end gap-4">
                  {[40, 60, 45, 80, 55, 90, 70].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-xl"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* QUICK ACTIONS */}
              <div className="bg-[#101C44] border border-gray-800 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <button
                    onClick={() => router.push("/dashboard/admin/user")}
                    className="w-full bg-[#081028] border border-gray-700 hover:border-purple-500 rounded-xl py-4 transition-all"
                  >
                    Add User
                  </button>

                  <button
                    onClick={() => router.push("/dashboard/admin/blogs")}
                    className="w-full bg-[#081028] border border-gray-700 hover:border-purple-500 rounded-xl py-4 transition-all"
                  >
                    Create Blog
                  </button>

                  <button
                    onClick={() => router.push("/dashboard/admin/offers")}
                    className="w-full bg-[#081028] border border-gray-700 hover:border-purple-500 rounded-xl py-4 transition-all"
                  >
                    Create Offer
                  </button>

                  <button
                    onClick={() => router.push("/dashboard/admin/payments")}
                    className="w-full bg-[#081028] border border-gray-700 hover:border-purple-500 rounded-xl py-4 transition-all"
                  >
                    Manage Payments
                  </button>
                </div>
              </div>
            </div>

            {/* USERS TABLE */}
            <div className="bg-[#101C44] border border-gray-800 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-gray-800 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Users Management</h3>
                  <p className="text-gray-400 mt-1">Manage all platform users</p>
                </div>

                <button
                  onClick={() => router.push("/dashboard/admin/user")}
                  className="bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-xl font-semibold transition-all"
                >
                  Add User
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-[#0B1739] text-gray-400">
                    <tr>
                      <th className="px-6 py-4">User</th>
                      <th className="px-6 py-4">Role</th>
                      <th className="px-6 py-4">Company</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredUsers.length === 0 && (
                      <tr>
                        <td colSpan={5} className="text-center py-10 text-gray-400">
                          No users found
                        </td>
                      </tr>
                    )}
{filteredUsers.map((user: any) => (
  <tr
    key={user._id}
    className="border-t border-gray-800 hover:bg-[#0B1739]/50 transition-all"
  >
    {/* USER */}
    <td className="px-6 py-5">
      <div className="flex items-center gap-4">

        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center font-bold">
          {`${user.firstName || ""} ${user.lastName || ""}`
            .trim()
            .split(" ")
            .map((n: string) => n[0])
            .join("")}
        </div>

        <div>
          <p className="font-semibold">
            {user.firstName} {user.lastName}
          </p>

          <p className="text-gray-400 text-sm">
            {user.email}
          </p>
        </div>

      </div>
    </td>

    {/* ROLE */}
    <td className="px-6 py-5">
      <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
        {user.role || "user"}
      </span>
    </td>

    {/* COMPANY */}
    <td className="px-6 py-5 text-gray-300">
      {user.companyName || "N/A"}
    </td>

    {/* STATUS */}
    <td className="px-6 py-5">
      <span
        className={`px-3 py-1 rounded-full text-sm ${
          user.blocked
            ? "bg-red-500/20 text-red-400"
            : "bg-green-500/20 text-green-400"
        }`}
      >
        {user.blocked ? "Blocked" : "Active"}
      </span>
    </td>

    {/* ACTIONS */}
    <td className="px-6 py-5">
      <div className="flex gap-3">

        <button
          onClick={() => router.push(`/dashboard/admin/user/${user._id}`)}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm"
        >
          Edit
        </button>

        <button
          onClick={() => blockUser(user._id)}
          className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg text-sm"
        >
          {user.blocked ? "Unblock" : "Block"}
        </button>

        <button
          onClick={() => {
            if (window.confirm("Delete this user?")) {
              deleteUser(user._id);
            }
          }}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm"
        >
          Delete
        </button>

      </div>
    </td>

  </tr>
))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
  );
}