'use client';

import { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { API } from "@/utils/api";

function VerifyEmailForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const initialEmail = searchParams.get("email") || "";
  const [email, setEmail] = useState(initialEmail);
  const [code, setCode] = useState("");
  
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);

  // Sync email search parameter if loaded later
  useEffect(() => {
    if (initialEmail && !email) {
      setEmail(initialEmail);
    }
  }, [initialEmail]);

  // Countdown timer for resend button
  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setTimeout(() => {
        setResendCountdown(resendCountdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCountdown]);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !code) return;

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const res = await API.post("/auth/verify-email", { email, code });
      
      setSuccess(res.data.message || "Email verified successfully! Redirecting to login...");
      
      setTimeout(() => {
        router.push("/login?registered=true");
      }, 3000);
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
        err?.message ||
        "Verification failed. Please check the code and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!email) {
      setError("Please enter your email address to resend the code.");
      return;
    }

    try {
      setResendLoading(true);
      setError("");
      setSuccess("");

      const res = await API.post("/auth/resend-verification", { email });
      setSuccess(res.data.message || "Verification code resent successfully!");
      setResendCountdown(60); // 1 minute cooldown
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
        err?.message ||
        "Failed to resend verification code."
      );
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Verify Email</h2>
      <p className="text-gray-500 mb-6">Enter the 6-digit code sent to your email to activate your account</p>

      {success && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-700 text-sm">{success}</p>
        </div>
      )}

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleVerify} className="space-y-4">
        {/* Email Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-gray-700 text-sm"
          />
        </div>

        {/* Verification Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Verification Code
          </label>
          <input
            type="text"
            maxLength={6}
            value={code}
            placeholder="Enter code"
            required
            onChange={(e) => setCode(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-center font-mono tracking-widest text-lg text-gray-700"
          />
        </div>

        <button
          type="submit"
          disabled={loading || !email || code.length < 6}
          className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {loading ? "Verifying..." : "Verify & Activate →"}
        </button>
      </form>

      <div className="mt-6 flex flex-col items-center gap-2">
        <button
          type="button"
          onClick={handleResend}
          disabled={resendLoading || resendCountdown > 0 || !email}
          className="text-sm text-indigo-600 hover:text-indigo-700 font-medium disabled:opacity-50"
        >
          {resendLoading 
            ? "Resending..." 
            : resendCountdown > 0 
              ? `Resend Code in ${resendCountdown}s` 
              : "Resend Code"
          }
        </button>

        <p className="text-sm text-gray-600 mt-2">
          Want to register with another email?{" "}
          <Link href="/signup" className="text-indigo-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-4 sm:px-8 py-12">
        <Suspense fallback={
          <div className="text-center py-6">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto mb-4"></div>
            <p className="text-gray-500">Loading verification form...</p>
          </div>
        }>
          <VerifyEmailForm />
        </Suspense>
      </div>

      {/* Right Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 items-center justify-center">
        <div className="text-white text-center px-10">
          <div className="relative w-80 h-80 mx-auto mb-6">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/email-verification-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--e-mail-verify-code-security-pack-illustrations-4715128.png"
              alt="Email Verification Illustration"
              className="w-full h-auto"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Activate Your Account</h2>
          <p className="opacity-80 text-lg">Verify your email address to start managing your services</p>
        </div>
      </div>
    </div>
  );
}
