"use client"

import React, { useState } from "react"
import { Terminal, AtSign, Lock, Eye, EyeOff, GitBranch } from "lucide-react"
import { useNav } from "@/context/NavContext"

export default function Login() {
  const { setActivePage } = useNav()
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ email: "", password: "" })
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setActivePage("Feed")
    }, 1200)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg relative overflow-hidden p-6">
      {/* Decoración de fondo */}
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[rgba(196,154,255,0.08)] rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[30%] h-[30%] bg-[rgba(255,148,168,0.04)] rounded-full blur-[80px] pointer-events-none" />

      <div className="w-full max-w-[420px] relative z-10">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-[60px] h-[60px] rounded-[14px] bg-bg-surface border border-border flex items-center justify-center mb-4">
            <Terminal size={28} className="text-accent" strokeWidth={1.8} />
          </div>
          <h1 className="text-[26px] font-black tracking-tight text-accent m-0">Devsanctum</h1>
          <p className="text-[13px] text-text mt-2">Welcome back</p>
        </div>

        {/* Card */}
        <div className="bg-[rgba(19,19,19,0.8)] border border-border rounded-[18px] p-8">
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-5">
              <label className="block text-[10px] font-extrabold uppercase tracking-[1.5px] text-text mb-2">
                Username or Email
              </label>
              <div className="relative">
                <AtSign size={16} className="absolute left-[14px] top-1/2 -translate-y-1/2 text-text pointer-events-none" strokeWidth={1.8} />
                <input
                  type="text"
                  placeholder="dev@sanctum.sh"
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  className="w-full h-[46px] pl-[42px] pr-[14px] bg-black border border-border rounded-[9px] text-[13px] text-text-h outline-none box-border transition-colors duration-150 focus:border-accent-border"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-7">
              <div className="flex justify-between items-center mb-2">
                <label className="text-[10px] font-extrabold uppercase tracking-[1.5px] text-text">
                  Password
                </label>
                <button type="button" className="text-[10px] font-bold text-accent bg-transparent border-none cursor-pointer uppercase tracking-[1px]">
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock size={16} className="absolute left-[14px] top-1/2 -translate-y-1/2 text-text pointer-events-none" strokeWidth={1.8} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                  className="w-full h-[46px] pl-[42px] pr-[46px] bg-black border border-border rounded-[9px] text-[13px] text-text-h outline-none box-border transition-colors duration-150 focus:border-accent-border"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-[14px] top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-text flex"
                >
                  {showPassword ? <EyeOff size={15} strokeWidth={1.8} /> : <Eye size={15} strokeWidth={1.8} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full h-[46px] rounded-[9px] border-none bg-accent text-[#1a0033] text-[13px] font-extrabold tracking-[0.5px] transition-opacity duration-150 ${loading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}`}
            >
              {loading ? "Entrando..." : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-text">Or continue with</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Social login */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Google", icon: (
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              )},
              { label: "GitHub", icon: <GitBranch size={18} strokeWidth={1.8} className="text-text-h" /> },
            ].map(({ label, icon }) => (
              <button
                key={label}
                type="button"
                className="flex items-center justify-center gap-2 h-[42px] bg-bg-surface border border-border rounded-[9px] cursor-pointer text-[12px] font-semibold text-text-h transition-colors duration-150 hover:border-accent-border"
              >
                {icon} {label}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-[13px] text-text mt-6">
          Don't have an account?{" "}
          <button
            type="button"
            className="bg-transparent border-none cursor-pointer text-accent font-bold text-[13px]"
            onClick={() => setActivePage("Feed")}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  )
}