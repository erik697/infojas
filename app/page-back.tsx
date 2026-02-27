"use client";

import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 p-4">
      
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2 animate-fadeIn">
        
        {/* LEFT SIDE - IMAGE */}
        <div className="hidden md:flex relative items-center justify-center bg-slate-800">
          
          <img
            src="https://images.unsplash.com/photo-1581090700227-4c4f50c5b3f0"
            alt="Military Training"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />

          <div className="relative z-10 text-white text-center px-8">
            <h2 className="text-3xl font-bold mb-4">
              Sistem Data Kesegaran Jasmani
            </h2>
            <p className="text-slate-200">
              Monitoring performa prajurit secara terintegrasi dan profesional.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Selamat Datang
            </h1>
            <p className="text-gray-500">
              Silakan login untuk melanjutkan
            </p>
          </div>

          <form className="space-y-5">

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                placeholder="Masukkan username"
                className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-slate-800 focus:outline-none transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>

              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan password"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-slate-800 focus:outline-none pr-12 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-[1.02]"
            >
              Login
            </button>

          </form>

          <p className="text-center text-sm text-gray-400 mt-8">
            © 2026 Sistem Monitoring Kesjas
          </p>

        </div>
      </div>

      {/* Simple Fade Animation */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </div>
  );
}