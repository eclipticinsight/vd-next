"use client";

import { useEffect, useState } from "react";
import { API } from "@/utils/api";

// Define the User type
interface User {
  _id: string;
  name?: string;
  email: string;
  role: "admin" | "user" | string;
  status?: string;
}

export default function AdminUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await API.get("/user/all-users");
      const data = response.data;

      if (Array.isArray(data)) {
        setUsers(data);
      } else if (Array.isArray(data.users)) {
        setUsers(data.users);
      } else {
        setUsers([]);
      }
    } catch (err: any) {
      console.error("Error fetching users:", err);
      setError(err?.message || err || "Failed to fetch users");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="text-white">
        <div className="flex justify-center items-center h-64">
          <div className="text-white">Loading users...</div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 overflow-y-auto p-8 text-white">
      <div>
        {/* PAGE HEADER */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold">Users Management</h1>
          <p className="text-white/60 mt-2">Manage all registered users</p>
        </div>

        {/* ERROR MESSAGE */}
        {error && (
          <div className="mb-4 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400">
            Error: {error}
          </div>
        )}

        {/* USERS TABLE */}
        <div className="bg-[#091548] rounded-2xl overflow-hidden border border-white/10">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#0d1b5c]">
                <tr>
                  <th className="p-5 text-left">Name</th>
                  <th className="p-5 text-left">Email</th>
                  <th className="p-5 text-left">Role</th>
                  <th className="p-5 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-white/60">
                      No users found
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr
                      key={user._id}
                      className="border-b border-white/10 hover:bg-white/5 transition"
                    >
                      {/* NAME */}
                      <td className="p-5 font-medium">{user.name || "N/A"}</td>

                      {/* EMAIL */}
                      <td className="p-5">{user.email}</td>

                      {/* ROLE */}
                      <td className="p-5">
                        <span
                          className={`px-4 py-2 rounded-lg text-sm ${
                            user.role === "admin" ? "bg-purple-600" : "bg-blue-600"
                          }`}
                        >
                          {user.role || "user"}
                        </span>
                      </td>

                      {/* STATUS */}
                      <td className="p-5">
                        <span className="bg-green-600 px-4 py-2 rounded-lg text-sm">Active</span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}