"use client";

import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { label: "Dashboard", path: "/dashboard/admin" },
  { label: "Users", path: "/dashboard/admin/user" },
  { label: "Subscriptions", path: "/dashboard/admin/subscriptions" },
  { label: "Payments", path: "/dashboard/admin/payments" },
  { label: "Offers", path: "/dashboard/admin/offers" },
  { label: "Blogs", path: "/dashboard/admin/blogs" },
  { label: "Support", path: "/dashboard/admin/support" },
];

export default function AdminSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
    router.push("/");
  };

  return (
    <aside className="w-72 bg-[#0B1739] border-r border-gray-800 flex flex-col justify-between">
      <div>
        <div className="h-20 flex items-center px-6 border-b border-gray-800">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <button
                key={item.label}
                onClick={() => router.push(item.path)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                  isActive ? "bg-purple-600/25 text-white" : "hover:bg-purple-600/20"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-gray-800">
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 rounded-xl py-3 font-semibold transition-all"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
