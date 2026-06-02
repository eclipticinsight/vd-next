'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { API } from '@/utils/api';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data:any) => {

  try {

    setLoading(true);
    setError('');

    const result = await API.post(
      '/auth/login',
      {
        email: data.email.trim(),
        password: data.password
      }
    );

    const loginData = result.data;

    if(!loginData?.success){

      throw new Error(
        loginData?.message ||
        "Login failed"
      );

    }

    localStorage.setItem(
      "token",
      loginData.token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(
        loginData.user
      )
    );

    localStorage.setItem(
      "isLoggedIn",
      "true"
    );

    console.log(
      "TOKEN:",
      loginData.token
    );

    console.log(
      "USER:",
      loginData.user
    );

    if(
      loginData.user.role === "admin"
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

    console.log(
      "LOGIN ERROR:",
      err
    );

    setError(
      err?.message ||
      "Login failed"
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>

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
              src="https://cdn3d.iconscout.com/3d/premium/thumb/man-working-on-laptop-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--office-employee-work-from-home-pack-people-illustrations-4337853.png"
              alt="Illustration"
              className="w-full h-auto"
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