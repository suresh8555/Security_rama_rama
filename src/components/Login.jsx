import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaArrowLeft } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      {/* Back to Home */}
      <div
        className="absolute top-6 left-6 flex items-center gap-3 cursor-pointer z-20 hover:scale-105 transition"
        onClick={() => navigate("/")}
      >
        <FaArrowLeft className="text-white text-xl" />
        <p className="text-white text-sm sm:text-base">Back to Home</p>
      </div>

      {/* Logo Top */}
      <div className="absolute top-20 text-center z-20 transition-all duration-500 animate-fadeDown">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="logo"
          className="w-16 mx-auto drop-shadow-xl"
        />
        <h3 className="text-white font-bold mt-2 text-lg">
          Rama & Rama
        </h3>
      </div>

      {/* Card */}
      <div className="w-full max-w-md z-20 bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/30 animate-fadeUp">
        <h2 className="text-3xl font-bold text-center text-white drop-shadow-lg">
          Welcome Back
        </h2>
        <p className="text-gray-200 text-center text-sm mb-8">
          Log in to access your dashboard
        </p>

        <form className="space-y-5" onSubmit={handleLogin}>
          {/* Email */}
          <div>
            <label className="text-sm text-gray-200">Email Address</label>
            <div className="flex items-center bg-white/80 rounded-lg px-3 py-3">
              <FaEnvelope className="text-gray-600 mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none bg-transparent text-black"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-200">Password</label>
            <div className="flex items-center bg-white/80 rounded-lg px-3 py-3">
              <FaLock className="text-gray-600 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full outline-none bg-transparent text-black"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer text-blue-700 font-semibold ml-1 text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          {/* Options */}
          <div className="flex justify-between text-gray-200 text-xs sm:text-sm">
            <label className="flex gap-2 items-center">
              <input type="checkbox" className="accent-blue-500" /> Remember me
            </label>
            <Link className="hover:underline">Forgot password?</Link>
          </div>

          {/* Login Button */}
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:shadow-blue-500/50 hover:scale-[1.02] transition">
            Log In
          </button>

          {/* Signup */}
          <p className="text-center text-gray-200 text-xs sm:text-sm">
            Don’t have an account?
            <Link to="/signup" className="text-blue-300 hover:underline ml-1">
              Sign Up
            </Link>
          </p>
        </form>

        {/* Demo Credentials */}
        <div className="bg-white/15 rounded-lg p-3 mt-6 text-xs sm:text-sm text-gray-200 border border-white/20">
          <p className="font-semibold">Demo Credentials:</p>
          <p>employee@ramarama.com / employee@123</p>
        </div>

        <p className="text-center text-gray-200 text-xs mt-4">
          Need help?{" "}
          <span className="underline cursor-pointer">Contact Support</span>
        </p>
      </div>
    </div>
  );
}








