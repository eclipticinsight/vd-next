"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, ChangeEvent } from "react";
import axios from "axios";
import {
  Phone,
  CheckCircle,
  Clock,
  XCircle,
  Copy,
} from "lucide-react";

axios.defaults.withCredentials = true;

const UserPanel = () => {
  const router = useRouter();
  const [activePage, setActivePage] = useState("profile");
  const [user, setUser] = useState<any>(null);
  const [offers, setOffers] = useState<any[]>([]);
  const [payments, setPayments] = useState<any[]>([]);
  const [profileLoading, setProfileLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

  const [editForm, setEditForm] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    mobile: "",
    address: "",
    dob: "",
    state: "",
    country: "",
    postalCode: "",
    companyName: "",
    industry: "",
    designation: "",
    website: "",
  });
  const [editingCard, setEditingCard] = useState<string | null>(null);

  const safeUser = user || {};
  const userName = safeUser.firstName || safeUser.name || "User";
  const avatarLetter = userName
    .split(" ")
    .map((piece: string) => piece.charAt(0).toUpperCase())
    .join("")
    .slice(0, 2);

  const getToken = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
    return null;
  };

  const loadLocalUser = () => {
    if (typeof window !== "undefined") {
      try {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
      } catch {
        return null;
      }
    }
    return null;
  };

  useEffect(() => {
    const storedUser = loadLocalUser();
    if (storedUser) {
      setUser(storedUser);
    }

    const fetchProfile = async () => {
      try {
        const token = getToken();
        if (!token) {
          setProfileLoading(false);
          return;
        }

        const { data } = await axios.get(`${API}/user/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);

        if (typeof window !== "undefined") {
          localStorage.setItem("user", JSON.stringify(data));
        }
      } catch (error) {
        const err = error as any;
        console.log("Profile fetch error", err);
        if (err.response?.status === 401) {
          handleLogout();
        }
      } finally {
        setProfileLoading(false);
      }
    };

    const fetchOffers = async () => {
      try {
        const res = await axios.get(`${API}/offers`);
        setOffers(Array.isArray(res.data) ? res.data : res.data.offers || []);
      } catch (error) {
        const err = error as any;
        console.log("Error fetching offers", err);
        setOffers([]);
      }
    };

    fetchOffers();
    fetchProfile();
  }, []);

  useEffect(() => {
    if (!user) return;
    setEditForm({
      firstName: user.firstName || user.name || "",
      lastName: user.lastName || "",
      gender: user.gender || "",
      email: user.email || "",
      mobile: user.mobile || "",
      address: user.address || "",
      dob: user.dob ? user.dob.split("T")[0] : "",
      state: user.state || "",
      country: user.country || "",
      postalCode: user.postalCode || "",
      companyName: user.companyName || "",
      industry: user.industry || "",
      designation: user.designation || "",
      website: user.website || "",
    });

    if (user.role === "admin") {
      router.push("/dashboard/admin");
      return;
    }

    if (user._id) {
      const fetchPayments = async () => {
        try {
          const res = await axios.get(`${API}/payment/history/${user._id}`);
          setPayments(Array.isArray(res.data) ? res.data : res.data.payments || []);
        } catch (error) {
          const err = error as any;
          console.log("Error fetching payments", err);
          setPayments([]);
        }
      };
      fetchPayments();
    }
  }, [user, router]);

  const handleEditChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = async () => {
    try {
      const formattedDob = editForm.dob && !Number.isNaN(Date.parse(editForm.dob))
        ? new Date(editForm.dob).toISOString().split("T")[0]
        : "";

      const formData = new FormData();
      Object.entries({ ...editForm, dob: formattedDob }).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value.toString());
        }
      });

      const { data } = await axios.put(`${API}/user/update-profile`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setUser(data);
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(data));
      }
      setIsEditing(false);
      alert("✅ Profile updated successfully!");
    } catch (error) {
      const err = error as any;
      console.log("PROFILE UPDATE ERROR:", err.response?.data || err);
      alert("❌ Failed to update profile");
    }
  };

  useEffect(() => {
    const token = getToken();
    if (!token && !profileLoading) {
      router.push("/login");
    }
  }, [router, profileLoading]);

  if (profileLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="animate-spin rounded-full h-14 w-14 border-b-2 border-violet-500"></div>
      </div>
    );
  }

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedIn");
    }
    router.push("/login");
  };

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    alert(`✅ Code ${code} copied to clipboard!`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-400 bg-green-500/10";
      case "pending":
        return "text-yellow-400 bg-yellow-500/10";
      case "failed":
        return "text-red-400 bg-red-500/10";
      default:
        return "text-gray-400 bg-gray-500/10";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4" />;
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "failed":
        return <XCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const safePayments = Array.isArray(payments) ? payments : [];
  const safeOffers = Array.isArray(offers) ? offers : [];
  const totalSpent = safePayments.reduce((sum: number, p: any) => sum + (p.status === "completed" ? p.amount : 0), 0);
  const activeOffers = safeOffers.filter((o) => o.status === "active").length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex min-h-screen flex-col">
        <div className="flex flex-1 overflow-hidden">
          <aside className="hidden w-80 shrink-0 flex-col border-r border-slate-800 bg-slate-950/95 p-6 xl:flex">
            <div className="mb-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.8)]">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500 mb-2">User Portal</p>
              <h2 className="text-xl font-semibold text-white">Member Dashboard</h2>
            </div>
            <div className="mb-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-5 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-violet-600 text-3xl font-bold text-white shadow-lg shadow-violet-500/20">
                {avatarLetter}
              </div>
              <p className="text-lg font-semibold text-white">{userName}</p>
              <p className="text-sm text-slate-500">Member</p>
            </div>
            <nav className="mb-6 space-y-2">
              {[
                { key: "profile", label: "My Profile" },
                { key: "offers", label: "Offers" },
                { key: "support", label: "Help & Support" },
                { key: "payments", label: "Payment History" },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActivePage(item.key)}
                  className={`flex w-full items-center justify-between rounded-3xl px-4 py-4 text-left text-sm font-medium transition ${
                    activePage === item.key
                      ? "bg-violet-600 text-white shadow-lg shadow-violet-500/20"
                      : "bg-slate-900 text-slate-300 hover:bg-slate-900/80"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-slate-400">›</span>
                </button>
              ))}
            </nav>
            <button
              onClick={handleLogout}
              className="mt-auto w-full rounded-3xl border border-red-500/20 bg-red-600/10 px-4 py-4 text-left text-sm font-semibold text-red-300 hover:bg-red-600/20"
            >
              Logout
            </button>
          </aside>

          <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8 xl:px-10">
            <div className="mb-8 flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">My Profile</p>
                <h1 className="mt-2 text-3xl font-semibold text-white">Manage your personal information</h1>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="rounded-3xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-500"
              >
                {isEditing ? "Cancel" : "Edit Profile"}
              </button>
            </div>

            <section className="mb-8 overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 p-6 shadow-2xl shadow-pink-500/20">
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="space-y-4">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-white/10 text-4xl font-bold text-white shadow-lg shadow-white/10">
                      {avatarLetter}
                    </div>
                    <div>
                      <p className="uppercase tracking-[0.2em] text-sm text-purple-100/90">Welcome back</p>
                      <h2 className="text-4xl font-semibold">{userName}</h2>
                      <p className="text-sm text-purple-100/80">{safeUser.email || "No email available"}</p>
                    </div>
                  </div>

                 
                </div>

                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-slate-100 shadow-xl shadow-black/20">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-200">Profile Status</p>
                  <p className="mt-3 text-3xl font-semibold">{safeUser.role ? safeUser.role.replace(/\b\w/g, (l: string) => l.toUpperCase()) : "Member"}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-200">
                    Your account is active and ready to use. Update your profile details, manage payments, and view offers from this dashboard.
                  </p>
                </div>
              </div>
            </section>

            {activePage === "profile" && (
              <div className="space-y-6">
                <div className="grid gap-6 xl:grid-cols-2">
                  {[
                    {
                      title: "Primary Details",
                      items: [
                        { name: "firstName", label: "First Name", value: safeUser.firstName || "-" },
                        { name: "lastName", label: "Last Name", value: safeUser.lastName || "-" },
                        { name: "gender", label: "Gender", value: safeUser.gender || "-" },
                        { name: "dob", label: "DOB", value: safeUser.dob ? new Date(safeUser.dob).toLocaleDateString() : "-" },
                      ],
                    },
                    {
                      title: "Contact Details",
                      items: [
                        { name: "email", label: "Work Email", value: safeUser.email || "-" },
                        { name: "mobile", label: "Mobile", value: safeUser.mobile || "-" },
                        { name: "address", label: "Address", value: safeUser.address || "-" },
                      ],
                    },
                    {
                      title: "Company Details",
                      items: [
                        { name: "companyName", label: "Company Name", value: safeUser.companyName || "-" },
                        { name: "designation", label: "Designation", value: safeUser.designation || "-" },
                        { name: "industry", label: "Industry", value: safeUser.industry || "-" },
                        { name: "website", label: "Website", value: safeUser.website || "-" },
                      ],
                    },
                    {
                      title: "Address Details",
                      items: [
                        { name: "state", label: "State", value: safeUser.state || "-" },
                        { name: "country", label: "Country", value: safeUser.country || "-" },
                        { name: "postalCode", label: "Postal Code", value: safeUser.postalCode || "-" },
                      ],
                    },
                  ].map((card) => (
                    <div key={card.title} className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-lg shadow-black/10">
                      <div className="mb-5 flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">{card.title}</h3>
<button
onClick={()=>{
setEditingCard(card.title);
setIsEditing(true);
}}
className="
text-sm
font-semibold
text-violet-400
hover:text-violet-300
"
>
Edit
</button>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        {card.items.map((item) => (
                          <div key={item.label}>
                            <p className="text-sm text-slate-400">{item.label}</p>
                            <p className="mt-2 text-base text-white">
  {item.value}
</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>


              </div>
            )}

            {isEditing && (

<div className="
fixed inset-0 z-50
flex items-center justify-center
bg-black/70
backdrop-blur-md
p-6
">

<div className="
relative
w-full
max-w-6xl
rounded-[2rem]
border border-slate-800
bg-slate-900
p-8
shadow-2xl
">

<button
onClick={()=>{
setIsEditing(false);
setEditingCard(null);
}}
className="
absolute right-6 top-6
text-3xl
text-slate-400
hover:text-white
"
>
×
</button>

<h2 className="
mb-8
text-3xl
font-semibold
text-white
">
Edit Profile
</h2>

<div className="
grid gap-6
md:grid-cols-2
">

{[
{name:"firstName",label:"First Name"},
{name:"lastName",label:"Last Name"},
{name:"email",label:"Email"},
{name:"mobile",label:"Mobile"},
{name:"gender",label:"Gender"},
{name:"dob",label:"DOB",type:"date"},
{name:"address",label:"Address"},
{name:"state",label:"State"},
{name:"country",label:"Country"},
{name:"postalCode",label:"Postal Code"},
{name:"designation",label:"Designation"},
{name:"companyName",label:"Company Name"},
{name:"industry",label:"Industry"},
{name:"website",label:"Website"},
].map((field)=>(

<div key={field.name}>

<label className="
mb-2 block
text-sm
text-slate-400
">
{field.label}
</label>

<input
name={field.name}
type={field.type || "text"}
value={(editForm as any)[field.name]}
onChange={handleEditChange}
className="
w-full
rounded-3xl
border border-slate-800
bg-slate-950
px-4 py-3
text-white
outline-none
focus:border-violet-500
"
/>

</div>

))}

</div>

<div className="
mt-10
flex justify-end
gap-4
">

<button
onClick={()=>{
setIsEditing(false);
setEditingCard(null);
}}
className="
rounded-3xl
border border-slate-700
px-6 py-3
text-slate-300
"
>
Cancel
</button>

<button
onClick={handleSaveProfile}
className="
rounded-3xl
bg-violet-600
px-6 py-3
font-semibold
text-white
hover:bg-violet-500
"
>
Save Changes
</button>

</div>

</div>

</div>

)}


            {activePage === "offers" && (
                
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
                    <p className="text-sm text-slate-400">Active Offers</p>
                    <p className="mt-3 text-3xl font-semibold text-white">{activeOffers}</p>
                  </div>
                  <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
                    <p className="text-sm text-slate-400">Total Spent</p>
                    <p className="mt-3 text-3xl font-semibold text-white">${totalSpent.toFixed(2)}</p>
                  </div>
                  <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
                    <p className="text-sm text-slate-400">Total Offers</p>
                    <p className="mt-3 text-3xl font-semibold text-white">{safeOffers.length}</p>
                  </div>
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                  {safeOffers.map((offer) => (
                    <div key={offer._id || offer.id} className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white">{offer.title}</h3>
                          <p className="mt-2 text-sm text-slate-400">{offer.description}</p>
                        </div>
                        <span className="rounded-3xl bg-purple-600/10 px-3 py-1 text-sm font-semibold text-purple-200">{offer.discount}</span>
                      </div>
                      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Expires</p>
                          <p className="text-sm text-slate-300">{offer.validUntil ? new Date(offer.validUntil).toLocaleDateString() : "N/A"}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="rounded-2xl bg-slate-800 px-3 py-2 text-sm text-purple-300">{offer.code}</div>
                          <button onClick={() => copyToClipboard(offer.code)} className="rounded-2xl bg-violet-600 px-3 py-2 text-white hover:bg-violet-500">
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activePage === "payments" && (
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
                    <p className="text-sm text-slate-400">Payment Count</p>
                    <p className="mt-3 text-3xl font-semibold text-white">{safePayments.length}</p>
                  </div>
                  <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
                    <p className="text-sm text-slate-400">Completed</p>
                    <p className="mt-3 text-3xl font-semibold text-white">{safePayments.filter((p) => p.status === "completed").length}</p>
                  </div>
                  <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
                    <p className="text-sm text-slate-400">Total Spent</p>
                    <p className="mt-3 text-3xl font-semibold text-white">${totalSpent.toFixed(2)}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {safePayments.length === 0 ? (
                    <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900/80 p-10 text-center text-slate-500">
                      No payments yet.
                    </div>
                  ) : (
                    safePayments.map((payment) => (
                      <div key={payment._id || payment.id} className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                          <div>
                            <p className="text-sm text-slate-400">{payment.description || "Payment"}</p>
                            <p className="mt-2 text-xl font-semibold text-white">${payment.amount?.toFixed?.(2) ?? payment.amount}</p>
                          </div>
                          <div className="flex flex-col gap-2 sm:items-end">
                            <span className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold ${getStatusColor(payment.status)}`}>
                              {getStatusIcon(payment.status)} {payment.status || "unknown"}
                            </span>
                            <p className="text-sm text-slate-500">{payment.date ? new Date(payment.date).toLocaleDateString() : "No date"}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {activePage === "support" && (
              <div className="space-y-6">
                <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8">
                  <h2 className="text-2xl font-semibold text-white">Help & Support</h2>
                  <p className="mt-3 text-slate-400">Need help with your account? Reach out and we’ll get back to you as soon as possible.</p>
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
                    <h3 className="text-lg font-semibold text-white">Email Support</h3>
                    <p className="mt-2 text-slate-400">For account help, billing, or general questions.</p>
                    <a href="mailto:connect@visionarydynamicsas.com" className="mt-4 inline-flex text-violet-300 hover:text-violet-200">
                      connect@visionarydynamicsas.com
                    </a>
                  </div>
                  <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
                    <h3 className="text-lg font-semibold text-white">Phone Support</h3>
                    <p className="mt-2 text-slate-400">Available Monday to Friday.</p>
                    <a href="tel:+17275649476" className="mt-4 inline-flex text-violet-300 hover:text-violet-200">
                      +1 (727) 564-9476
                    </a>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;