"use client";

import { useEffect, useState } from "react";
import { API } from "@/utils/api";

// Define the User type
interface User {
  _id: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  role: "admin" | "user" | string;
  status?: string;
  blocked?: boolean;
}

export default function AdminUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingRoleUserId, setEditingRoleUserId] = useState<string | null>(null);

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

  const deleteUser = async (id: string) => {
    try {
      await API.delete(`/user/${id}`);
      fetchUsers();
    } catch (err: any) {
      console.error(err);
      alert(err?.message || "Failed to delete user");
    }
  };

  const blockUser = async (id: string) => {
    try {
      await API.put(`/user/block/${id}`, {});
      fetchUsers();
    } catch (err: any) {
      console.error(err);
      alert(err?.message || "Failed to block/unblock user");
    }
  };

  const handleRoleChange = async (id: string, newRole: string) => {
    try {
      await API.put(`/user/admin-update/${id}`, { role: newRole });
      setEditingRoleUserId(null);
      fetchUsers();
    } catch (err: any) {
      console.error(err);
      alert(err?.message || "Failed to update role");
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
                  <th className="p-5 text-left">Actions</th>
                </tr>
              </thead>

              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-white/60">
                      No users found
                    </td>
                  </tr>
                ) : (
                  users.map((user) => {
                    const displayName = user.firstName || user.lastName
                      ? `${user.firstName || ""} ${user.lastName || ""}`.trim()
                      : user.name || "N/A";

                    return (
                      <tr
                        key={user._id}
                        className="border-b border-white/10 hover:bg-white/5 transition"
                      >
                        {/* NAME */}
                        <td className="p-5 font-medium">{displayName}</td>

                        {/* EMAIL */}
                        <td className="p-5">{user.email}</td>

                        {/* ROLE */}
                        <td className="p-5">
                          {editingRoleUserId === user._id ? (
                            <select
                              value={user.role || "user"}
                              onChange={(e) => handleRoleChange(user._id, e.target.value)}
                              onBlur={() => setEditingRoleUserId(null)}
                              className="bg-[#091026] border border-white/20 text-white rounded px-2 py-1 outline-none focus:border-purple-500 font-medium"
                              autoFocus
                            >
                              <option value="user">user</option>
                              <option value="admin">admin</option>
                            </select>
                          ) : (
                            <span
                              onClick={() => setEditingRoleUserId(user._id)}
                              className={`px-4 py-2 rounded-lg text-sm cursor-pointer hover:opacity-80 transition font-medium ${
                                user.role === "admin" ? "bg-purple-600" : "bg-blue-600"
                              }`}
                              title="Click to edit role"
                            >
                              {user.role || "user"}
                            </span>
                          )}
                        </td>

                        {/* STATUS */}
                        <td className="p-5">
                          <span
                            className={`px-4 py-2 rounded-lg text-sm ${
                              user.blocked
                                ? "bg-red-500/20 text-red-400 border border-red-500/30"
                                : "bg-green-600"
                            }`}
                          >
                            {user.blocked ? "Blocked" : "Active"}
                          </span>
                        </td>

                        {/* ACTIONS */}
                        <td className="p-5">
                          <div className="flex gap-3">
                            <button
                              onClick={() => blockUser(user._id)}
                              className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg text-sm transition-all"
                            >
                              {user.blocked ? "Unblock" : "Block"}
                            </button>
                            <button
                              onClick={() => {
                                if (window.confirm("Delete this user?")) {
                                  deleteUser(user._id);
                                }
                              }}
                              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm transition-all"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}