'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { API } from "@/utils/api";

type Step = "request" | "verify" | "reset" | "success";

export default function ForgotPasswordPage() {
  const router = useRouter();

  const [step, setStep] = useState<Step>("request");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Step 1: Request Reset Code
  const handleRequestCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      setLoading(true);
      setError("");
      
      await API.post("/auth/forgot-password", { email });
      
      setSuccess("Reset code has been sent to your email address.");
      setStep("verify");
    } catch (err: any) {
      setError(
        err?.response?.data?.message || 
        err?.message || 
        "Failed to request password reset code."
      );
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify Reset Code
  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code) return;

    try {
      setLoading(true);
      setError("");
      
      await API.post("/auth/verify-reset-code", { email, code });
      
      setSuccess("Verification successful! Please choose a new password.");
      setStep("reset");
    } catch (err: any) {
      setError(
        err?.response?.data?.message || 
        err?.message || 
        "Invalid or expired verification code."
      );
    } finally {
      setLoading(false);
    }
  };

  // Step 3: Reset Password
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) return;

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      
      await API.post("/auth/reset-password", { 
        email, 
        code, 
        newPassword 
      });
      
      setSuccess("Your password has been successfully reset! Redirecting to login...");
      setStep("success");
      
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } catch (err: any) {
      setError(
        err?.response?.data?.message || 
        err?.message || 
        "Failed to reset password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-4 sm:px-8 py-12">
        <div className="w-full max-w-md">
          
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Reset Password
          </h2>
          <p className="text-gray-500 mb-6">
            Follow the steps to secure your account
          </p>

          {/* Success Banner */}
          {success && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-700 text-sm">{success}</p>
            </div>
          )}

          {/* Error Banner */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* Step 1: Request Code Form */}
          {step === "request" && (
            <form onSubmit={handleRequestCode} className="space-y-4">
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading || !email}
                className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
              >
                {loading ? "Requesting..." : "Send Reset Code →"}
              </button>
            </form>
          )}

          {/* Step 2: Verify Code Form */}
          {step === "verify" && (
            <div className="space-y-6">


              <form onSubmit={handleVerifyCode} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    6-Digit Verification Code
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    value={code}
                    placeholder="Enter verification code"
                    required
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-center font-mono tracking-widest text-lg"
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setStep("request");
                      setError("");
                      setSuccess("");
                    }}
                    className="w-1/3 border border-gray-300 text-gray-700 py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading || code.length < 6}
                    className="w-2/3 bg-indigo-600 text-white py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
                  >
                    {loading ? "Verifying..." : "Verify Code →"}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Step 3: Set New Password Form */}
          {step === "reset" && (
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  value={newPassword}
                  placeholder="Enter new password"
                  required
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  placeholder="Confirm new password"
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading || !newPassword || !confirmPassword}
                className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                {loading ? "Updating..." : "Reset Password"}
              </button>
            </form>
          )}

          {/* Step 4: Success Message */}
          {step === "success" && (
            <div className="text-center py-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Password Updated!</h3>
              <p className="text-gray-500">Your password has been changed. You will be redirected to the login page shortly.</p>
            </div>
          )}

          {step !== "success" && (
            <p className="text-sm text-center text-gray-600 mt-6">
              Remember your password?{" "}
              <Link href="/login" className="text-indigo-600 font-medium hover:underline">
                Login
              </Link>
            </p>
          )}

        </div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 items-center justify-center">
        <div className="text-white text-center px-10">
          <div className="relative w-80 h-80 mx-auto mb-6">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/key-and-lock-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--password-security-safety-pack-illustrations-4715124.png"
              alt="Password Recovery Illustration"
              className="w-full h-auto"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-2">
            Secure Account
          </h2>
          <p className="opacity-80 text-lg">
            Recreate or update your account password quickly
          </p>
        </div>
      </div>

    </div>
  );
}
