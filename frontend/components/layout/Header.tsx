"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronRight, ShoppingCart } from "lucide-react";

import { MENU_DATA, ROUTES } from "../../utils/constants";

// Types
interface User {
  name?: string;
  email?: string;
  role?: string;
}

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const router = useRouter();
  const pathname = usePathname();

  /* 🛒 CART COUNT */
  useEffect(() => {

    const updateCartCount = () => {
      try {
        const cart =
          JSON.parse(
            localStorage.getItem("cart") || "[]"
          );

        setCartCount(cart.length);
      } catch (err) {
        console.error("Error updating cart count:", err);
        setCartCount(0);
      }
    };

    updateCartCount();

    window.addEventListener(
      "cartUpdated",
      updateCartCount
    );

    return () => {
      window.removeEventListener(
        "cartUpdated",
        updateCartCount
      );
    };

  }, []);

  /* 🔐 USER LOAD */
  useEffect(() => {
    const loadUser = () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser && storedUser !== "undefined") {
          setUser(JSON.parse(storedUser));
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      }
    };

    loadUser();
    window.addEventListener("storage", loadUser);

    return () => window.removeEventListener("storage", loadUser);
  }, [pathname]);

  /* 🔴 LOGOUT */
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("storage"));
    router.push("/login");
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <>
      <header className="sticky top-0 left-0 w-full h-20 lg:h-16 z-[9999] bg-[#0B1F3A] backdrop-blur-md">
        <div
          className={`h-full px-6 flex items-center justify-between ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
        >
          {/* LOGO */}
          <Link
            href="/"
            className="inline-flex items-center cursor-pointer"
          >
            <Image
              src="/VD-Logo-e1737873827576.png"
              alt="Visionary Dynamics"
              width={240}
              height={112}
              loading="eager"
            />
          </Link>

          {/* MENU */}
          <nav className="hidden lg:flex items-center gap-8 whitespace-nowrap text-white">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <MenuWithSub menu="Who We Are" data={MENU_DATA["Who We Are"]} />
            <MenuWithSub menu="What We Do" data={MENU_DATA["What We Do"]} />
            <MenuWithSub menu="How We Do" data={MENU_DATA["How We Do"]} />
            <MenuWithSub menu="Pricing" data={MENU_DATA["Pricing"]} />
            <Link href="/contact" className="hover:text-cyan-400 transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-3">
            {/* CART */}
            <Link
              href="/cart"
              className="relative px-4 py-2 rounded-full bg-[#F5F5F0] text-slate-900 hover:bg-[#e5e5e0] transition-colors"
            >
              Cart 🛒
              {cartCount > 0 && pathname !== "/cart" && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {!user ? (
              <Link
                href="/login"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-[#10B981] to-[#84CC16] text-white hover:opacity-90 transition-opacity"
              >
                Login
              </Link>
            ) : (
              <UserDropdown user={user} handleLogout={handleLogout} />
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden text-purple-400 text-4xl leading-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 bg-[#0B1F3A] text-white z-[9999]">
            <div className="flex flex-col h-screen">
              {/* TOP HEADER */}
              <div className="flex items-center justify-between px-5 h-20 border-b border-white/10 flex-shrink-0">
                <Image
                  src="/VD-Logo-e1737873827576.png"
                  alt="Visionary Dynamics mobile navigation logo"
                  width={180}
                  height={80}
                  loading="eager"
                  priority
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-purple-400 text-4xl leading-none"
                  aria-label="Close menu"
                >
                  ✖
                </button>
              </div>

              {/* MENU BODY */}
              <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col bg-[#0B1F3A]">
                {/* 🔹 HOME */}
                <Link
                  href="/"
                  className="block text-lg font-semibold py-2 hover:text-cyan-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                {/* 🔹 SAME MENU */}
                <MenuWithSub menu="Who We Are" data={MENU_DATA["Who We Are"]} isMobile onClose={() => setIsOpen(false)} />
                <MenuWithSub menu="What We Do" data={MENU_DATA["What We Do"]} isMobile onClose={() => setIsOpen(false)} />
                <MenuWithSub menu="How We Do" data={MENU_DATA["How We Do"]} isMobile onClose={() => setIsOpen(false)} />
                <MenuWithSub menu="Pricing" data={MENU_DATA["Pricing"]} isMobile onClose={() => setIsOpen(false)} />
                <Link
                  href="/contact"
                  className="block text-lg font-semibold py-2 hover:text-cyan-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>

                <div className="mt-auto pt-6 space-y-3">
                  {/* 🔹 CART BUTTON */}
                  <Link
                    href="/cart"
                    className="flex items-center justify-center gap-2 bg-purple-600 px-4 py-3 rounded-lg w-full text-lg font-semibold hover:bg-purple-700 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <ShoppingCart size={18} />
                    Cart
                  </Link>

                  {/* 🔹 LOGIN / USER */}
                  {!user ? (
                    <Link
                      href="/login"
                      className="block w-full mt-3 bg-sky-500 px-4 py-2 rounded text-center hover:bg-sky-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Link>
                  ) : (
                    <>
                      <Link
                        href={
                          user?.role === "admin"
                            ? "/dashboard/admin"
                            : "/dashboard/user"
                        }
                        className="block mt-3 bg-green-500 px-4 py-3 rounded-lg text-center text-lg font-semibold hover:bg-green-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full mt-2 bg-red-500 px-4 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors"
                      >
                        Logout
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Login Modal would need to be implemented separately for Next.js */}
      {showLogin && (
        <div className="fixed inset-0 z-[10000] bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Login Modal</h2>
            <p className="text-gray-600">Login functionality would be implemented here</p>
            <button
              onClick={() => setShowLogin(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

/* ================= USER DROPDOWN ================= */
const UserDropdown = ({ user, handleLogout }: { user: User; handleLogout: () => void }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="px-5 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
      >
        ☰ Menu
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-lg overflow-hidden z-50">
          <Link
            href={
              user?.role === "admin"
                ? "/dashboard/admin"
                : "/dashboard/user"
            }
            className="block px-4 py-3 hover:bg-green-100 text-green-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            📊 Dashboard
          </Link>
          <button
            onClick={() => {
              handleLogout();
              setOpen(false);
            }}
            className="w-full text-left px-4 py-3 hover:bg-red-100 text-red-600 transition-colors"
          >
            🚪 Logout
          </button>
        </div>
      )}
    </div>
  );
};

/* ================= MENU ================= */
const MenuWithSub = ({
  menu,
  data = {},
  isMobile = false,
  onClose
}: {
  menu: string;
  data: Record<string, string[]>;
  isMobile?: boolean;
  onClose?: () => void;
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick = (item: string) => {
    const path = ROUTES[item];
    if (path) {
      router.push(path);
      setOpen(false);
      if (onClose) onClose();
    }
  };

  // CLOSE ON OUTSIDE CLICK (desktop only)
  useEffect(() => {
    if (isMobile) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  return (
    <div ref={menuRef} className="relative w-full py-1">
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-2 hover:text-cyan-400 transition-colors"
      >
        {menu} <ChevronDown size={18} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>

      {/* DROPDOWN */}
      <div
        className={`${open ? "block" : "hidden"
          } ${!isMobile ? "lg:absolute lg:top-full lg:left-0" : ""} w-full lg:min-w-[240px] bg-[#0f172a] z-[999] rounded-lg`}
      >
        {Object.keys(data).map((item) => (
          <div key={item} className="relative group/item">
            <div className="px-4 py-2 flex justify-between items-center hover:bg-sky-500/20">
              {/* PAGE OPEN */}
              <span
                className="flex-1 cursor-pointer hover:text-cyan-400 transition-colors"
                onClick={() => handleClick(item)}
              >
                {item}
              </span>

              {/* SUBMENU OPEN */}
              {data[item] && data[item].length > 0 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveSub(activeSub === item ? null : item);
                  }}
                  className="hover:text-cyan-400"
                >
                  <ChevronRight
                    size={14}
                    className={`transition-transform duration-300 ${activeSub === item ? "rotate-90" : ""
                      }`}
                  />
                </button>
              )}
            </div>

            {data[item] && data[item].length > 0 && (
              <>
                {/* MOBILE SUBMENU */}
                <div
                  className={`
                    ${activeSub === item ? "block" : "hidden"}
                    ${!isMobile ? "lg:hidden" : ""}
                    w-full
                    bg-[#0f172a]
                    rounded-lg
                    border-l border-white/10
                  `}
                >
                  {data[item].map((sub) => (
                    <div
                      key={sub}
                      className="px-4 py-2 cursor-pointer hover:bg-sky-500/20 hover:text-cyan-400 transition-colors"
                      onClick={() => handleClick(sub)}
                    >
                      {sub}
                    </div>
                  ))}
                </div>

                {/* DESKTOP SUBMENU */}
                {!isMobile && (
                  <div
                    className="
                      hidden lg:block
                      absolute left-full top-0
                      min-w-[240px]
                      bg-[#0f172a]
                      rounded-lg
                      opacity-0 invisible
                      group-hover/item:visible
                      group-hover/item:opacity-100
                      transition-all
                      duration-200
                    "
                  >
                    {data[item].map((sub) => (
                      <div
                        key={sub}
                        className="px-4 py-2 cursor-pointer hover:bg-sky-500/20 hover:text-cyan-400 transition-colors"
                        onClick={() => handleClick(sub)}
                      >
                        {sub}
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;