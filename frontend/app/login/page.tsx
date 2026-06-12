'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { API } from '@/utils/api';

// Helper to convert PEM public key to ArrayBuffer
function pemToArrayBuffer(pem: string) {
  const b64Lines = pem
    .replace(/-----BEGIN PUBLIC KEY-----/, "")
    .replace(/-----END PUBLIC KEY-----/, "")
    .replace(/\s+/g, "");
  const binaryDerString = window.atob(b64Lines);
  const binaryLen = binaryDerString.length;
  const bytes = new Uint8Array(binaryLen);
  for (let i = 0; i < binaryLen; i++) {
    bytes[i] = binaryDerString.charCodeAt(i);
  }
  return bytes.buffer;
}

// Encrypt plaintext using RSA-OAEP with SHA-256
async function encryptRSA(pemPublicKey: string, plaintext: string) {
  const derBuffer = pemToArrayBuffer(pemPublicKey);
  const key = await window.crypto.subtle.importKey(
    "spki",
    derBuffer,
    {
      name: "RSA-OAEP",
      hash: "SHA-256",
    },
    true,
    ["encrypt"]
  );
  
  const enc = new TextEncoder();
  const encryptedBuffer = await window.crypto.subtle.encrypt(
    {
      name: "RSA-OAEP"
    },
    key,
    enc.encode(plaintext)
  );
  
  // Convert encrypted Buffer to base64
  const bytes = new Uint8Array(encryptedBuffer);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | React.ReactNode>('');
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data:any) => {

  try {

    setLoading(true);
    setError('');

    // Fetch public key for encryption
    const publicKeyResult = await API.get('/auth/public-key');
    const { publicKey } = publicKeyResult.data;
    if (!publicKey) {
      throw new Error("Failed to retrieve public key for secure login");
    }

    // Encrypt credentials JSON payload
    const plaintext = JSON.stringify({
      email: data.email.trim(),
      password: data.password
    });
    const encryptedData = await encryptRSA(publicKey, plaintext);

    const result = await API.post(
      '/auth/login',
      {
        encryptedData
      }
    );

    const loginData = result.data;

    if(!loginData?.success){

      throw new Error(
        loginData?.message ||
        "Login failed"
      );

    }

    // Fetch user profile since token/user details are hidden from the login response
    const profileResult = await API.get('/user/profile');
    const user = profileResult.data;

    if (!user) {
      throw new Error("Failed to fetch user profile");
    }

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    localStorage.setItem(
      "isLoggedIn",
      "true"
    );

   
    if(
      user.role === "admin"
    ){

      router.push(
        "/dashboard/admin"
      );

    }else{

      router.push(
        "/dashboard/user"
      );

    }

  } catch(err:any){
    const serverMessage = err?.message;
    const isUnverified = err?.unverified;
    const unverifiedEmail = err?.email;

    if (isUnverified && unverifiedEmail) {
      setError(
        <span>
          {serverMessage}{" "}
          <Link 
            href={`/verify-email?email=${encodeURIComponent(unverifiedEmail)}`}
            className="text-indigo-600 hover:text-indigo-700 font-semibold underline ml-1"
          >
            Verify Email Now
          </Link>
        </span>
      );
    } else {
      setError(
        serverMessage ||
        "Login failed"
      );
    }
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
            Welcome Back
          </h2>

          <p className="text-gray-500 mb-6">
            Login to continue
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>

              <input
  type="email"
  autoComplete="username"
  {...register('email',{
    required:'Email is required'
  })}
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
/>

              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {String(errors.email.message)}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-indigo-600 hover:text-indigo-700 hover:underline font-medium transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              <input
  type="password"
  autoComplete="current-password"
  {...register('password',{
    required:'Password is required'
  })}
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
/>

              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {String(errors.password.message)}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              {loading ? 'Logging in...' : 'Login →'}
            </button>

          </form>

          <p className="text-sm text-center text-gray-600 mt-6">
            Don't have an account?{' '}
            <Link
              href="/signup"
              className="text-indigo-600 font-medium"
            >
              Sign Up
            </Link>
          </p>

        </div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 items-center justify-center">

        <div className="text-white text-center px-10">

          <div className="relative w-80 h-80 mx-auto mb-6">
            <img
              src="/images/login-illustration.png"
              alt="Illustration"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          <h2 className="text-2xl font-semibold mb-2">
            Welcome Back
          </h2>

          <p className="opacity-80 text-lg">
            Access your account securely
          </p>

        </div>
      </div>

    </div>
  );
}