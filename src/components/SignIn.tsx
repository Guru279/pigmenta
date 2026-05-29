"use client";
// "use client" needed because: useState, useSearchParams (reads URL in browser)

// CHANGE: was `import { useSearchParams, Link } from "react-router-dom"`
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const SignIn = () => {
  // CHANGE: useSearchParams() from next/navigation works the same way,
  //   but the component must be wrapped in <Suspense> in the page file (already done).
  const searchParams = useSearchParams();
  const role = searchParams.get("role") === "collector" ? "Collector" : "Artist";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up authentication (NextAuth.js goes here)
    console.log("Sign in as", role, { email, password });
  };

  const otherRole = role === "Artist" ? "collector" : "artist";

  return (
    <div className="min-h-dvh bg-[#F6F4F1] flex items-start sm:items-center justify-center px-4 py-10 overflow-y-auto">
      <div className="w-full max-w-md">

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl px-5 sm:px-8 py-10">

          {/* Role badge */}
          <div className="flex justify-center mb-6">
            <span className="px-4 py-1 rounded-full bg-gray-900 text-white text-xs font-medium tracking-wide">
              {role}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-bold text-gray-900 text-center leading-tight">
            Welcome back
          </h1>
          <p className="text-sm text-gray-500 text-center mt-1 mb-8">
            Sign in to your {role.toLowerCase()} account
          </p>

          {/* Google button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-xl py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition mb-5"
          >
            <svg className="w-5 h-5" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.14 0 5.95 1.08 8.17 2.85l6.1-6.1C34.36 3.1 29.48 1 24 1 14.82 1 7.07 6.47 3.64 14.22l7.1 5.52C12.5 13.72 17.77 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.52 24.5c0-1.64-.15-3.22-.42-4.75H24v9h12.7c-.55 2.96-2.2 5.47-4.68 7.16l7.18 5.58C43.27 37.3 46.52 31.36 46.52 24.5z"/>
              <path fill="#FBBC05" d="M10.74 28.26A14.6 14.6 0 0 1 9.5 24c0-1.49.26-2.93.72-4.27l-7.1-5.52A23.94 23.94 0 0 0 0 24c0 3.88.93 7.55 2.58 10.8l8.16-6.54z"/>
              <path fill="#34A853" d="M24 47c5.48 0 10.08-1.82 13.44-4.94l-7.18-5.58C28.44 37.85 26.3 38.5 24 38.5c-6.23 0-11.5-4.22-13.26-9.92l-8.16 6.54C6.1 42.6 14.45 47 24 47z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 pr-16"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-700 transition"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <div className="flex justify-end mt-1">
                <button type="button" className="text-xs text-gray-400 hover:text-gray-700 transition">
                  Forgot password?
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white rounded-xl py-3 text-sm font-medium hover:bg-gray-700 transition mt-1"
            >
              Sign In
            </button>
          </form>

          {/* Sign up link */}
          <p className="text-xs text-gray-400 text-center mt-6">
            Don&apos;t have an account?{" "}
            {/* CHANGE: was `<Link to="...">` → `<Link href="...">` */}
            <Link href={`/signin?role=${role.toLowerCase()}`} className="text-gray-700 font-medium hover:underline">
              Create one
            </Link>
          </p>
        </div>

        {/* Switch role */}
        <p className="text-xs text-gray-400 text-center mt-4">
          Joining as a {otherRole} instead?{" "}
          <Link href={`/signin?role=${otherRole}`} className="text-gray-700 font-medium hover:underline">
            Switch
          </Link>
        </p>

      </div>
    </div>
  );
};

export default SignIn;
