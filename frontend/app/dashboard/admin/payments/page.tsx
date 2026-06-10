"use client";

import { useEffect, useState } from "react";
import { API } from "@/utils/api";

interface Payment {
  _id: string;
  amount: number;
  status: string;
  paymentId?: string;
  createdAt: string;
  userId?: string;
  offerId?: string;
  method?: string;
}

export default function AdminPayments() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalPayments: 0,
    averageAmount: 0,
  });

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await API.get("/payment/all");
      const data = response.data;

      if (Array.isArray(data)) {
        setPayments(data);
        calculateStats(data);
      } else if (data && Array.isArray(data.payments)) {
        setPayments(data.payments);
        calculateStats(data.payments);
      } else {
        setPayments([]);
        setStats({ totalRevenue: 0, totalPayments: 0, averageAmount: 0 });
      }
    } catch (err: any) {
      console.error("Error fetching payments:", err);
      setError(err?.message || err || "Failed to fetch payments");
      setPayments([]);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (paymentsData: Payment[]) => {
    const totalRevenue = paymentsData.reduce((sum, payment) => sum + (payment.amount || 0), 0);
    const totalPayments = paymentsData.length;
    const averageAmount = totalPayments > 0 ? totalRevenue / totalPayments : 0;

    setStats({
      totalRevenue,
      totalPayments,
      averageAmount,
    });
  };

  const getStatusColor = (status: string) => {
    const statusLower = (status || "").toLowerCase();
    switch (statusLower) {
      case "paid":
      case "success":
      case "completed":
        return "bg-green-600";
      case "pending":
        return "bg-yellow-600";
      case "failed":
      case "declined":
        return "bg-red-600";
      case "refunded":
        return "bg-purple-600";
      default:
        return "bg-gray-600";
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return "Invalid date";
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  if (loading) {
    return (
      <main className="flex-1 flex justify-center items-center h-64 p-8 text-white">
        <div className="text-white">Loading payments...</div>
      </main>
    );
  }

  return (
    <main className="flex-1 overflow-y-auto p-8 text-white">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Payments</h1>
        <p className="text-white/60 mt-2">Monitor all platform transactions</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400">
          Error: {error}
        </div>
      )}

      {payments.length > 0 && (
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#091548] p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all">
            <p className="text-white/50 mb-2">Total Revenue</p>
            <h3 className="text-3xl font-bold text-green-400">
              {formatCurrency(stats.totalRevenue)}
            </h3>
          </div>

          <div className="bg-[#091548] p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all">
            <p className="text-white/50 mb-2">Total Payments</p>
            <h3 className="text-3xl font-bold text-purple-400">
              {stats.totalPayments}
            </h3>
          </div>

          <div className="bg-[#091548] p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all">
            <p className="text-white/50 mb-2">Average Payment</p>
            <h3 className="text-3xl font-bold text-blue-400">
              {formatCurrency(stats.averageAmount)}
            </h3>
          </div>
        </div>
      )}

      <div className="mb-6 flex gap-3 flex-wrap">
        <button
          onClick={() => fetchPayments()}
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition text-sm"
        >
          Refresh
        </button>
      </div>

      <div className="grid gap-5">
        {payments.length === 0 ? (
          <div className="bg-[#091548] p-12 rounded-2xl border border-white/10 text-center">
            <p className="text-white/60">No payments found</p>
            <p className="text-white/40 text-sm mt-2">
              When users make payments, they will appear here
            </p>
          </div>
        ) : (
          payments.map((payment) => (
            <div
              key={payment._id}
              className="bg-[#091548] p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all"
            >
              <div className="grid md:grid-cols-4 gap-5">
                <div>
                  <p className="text-white/50 mb-2 text-sm uppercase tracking-wide">
                    Amount
                  </p>
                  <h2 className="text-2xl font-bold text-green-400">
                    {formatCurrency(payment.amount || 0)}
                  </h2>
                </div>

                <div>
                  <p className="text-white/50 mb-2 text-sm uppercase tracking-wide">
                    Status
                  </p>
                  <span
                    className={`${getStatusColor(payment.status)} px-4 py-2 rounded-lg text-sm inline-block`}
                  >
                    {payment.status || "Paid"}
                  </span>
                </div>

                <div>
                  <p className="text-white/50 mb-2 text-sm uppercase tracking-wide">
                    Payment ID
                  </p>
                  <p className="break-all font-mono text-sm">
                    {payment.paymentId || payment._id}
                  </p>
                </div>

                <div>
                  <p className="text-white/50 mb-2 text-sm uppercase tracking-wide">
                    Date
                  </p>
                  <p>{formatDate(payment.createdAt)}</p>
                </div>
              </div>

              {(payment.userId || payment.offerId || payment.method) && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    {payment.userId && (
                      <div>
                        <span className="text-white/40">User ID: </span>
                        <span className="font-mono text-xs">{payment.userId}</span>
                      </div>
                    )}
                    {payment.offerId && (
                      <div>
                        <span className="text-white/40">Offer ID: </span>
                        <span className="font-mono text-xs">{payment.offerId}</span>
                      </div>
                    )}
                    {payment.method && (
                      <div>
                        <span className="text-white/40">Payment Method: </span>
                        <span>{payment.method}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </main>
  );
}
