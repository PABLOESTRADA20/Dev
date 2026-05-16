"use client"

import React from "react"
import { Terminal, Layers } from "lucide-react"

export default function ExplorePage() {
  return (
    <main className="px-6 py-6 max-w-[720px] mx-auto flex flex-col gap-8">
      {/* Hero Section */}
      <section>
        <h2 className="text-[48px] font-black text-text-h leading-[1.1] tracking-[-2px] mb-4">
          Find your <br /><span className="text-accent italic">collective.</span>
        </h2>
        <p className="text-text text-[16px] max-w-[450px] leading-[1.6]">
          Connect with developers building the future. Join specialized hubs of expertise, from systems programming to high-end UI engineering.
        </p>
      </section>

      {/* Filtros */}
      <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
        {["All Communities", "Rust", "Web3", "Backend", "UI/UX"].map((f, i) => (
          <button
            key={f}
            className={`shrink-0 px-5 py-2 rounded-full text-[12px] font-bold cursor-pointer border transition-all duration-150 ${
              i === 0
                ? "bg-accent text-[#1a0033] border-accent"
                : "bg-bg-surface text-text border-border hover:border-accent-border"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Trending Section */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-tertiary" />
            <h3 className="text-[18px] font-extrabold text-text-h m-0">Trending</h3>
          </div>
          <span className="text-[11px] font-extrabold text-accent uppercase tracking-[1px] cursor-pointer">View All</span>
        </div>

        <div className="flex flex-col gap-4">
          {/* Featured card */}
          <div className="bg-bg-surface border border-border rounded-2xl overflow-hidden">
            <div className="bg-bg-hover px-6 py-4 flex items-center gap-2">
              <span className="bg-accent-bg text-accent border border-accent-border text-[9px] font-extrabold uppercase tracking-[1.5px] px-2.5 py-1 rounded-full">
                Fastest Growing
              </span>
            </div>
            <div className="p-6">
              <h4 className="text-[28px] font-black tracking-[-1px] text-text-h mb-2">Web3 Builders</h4>
              <p className="text-[13px] text-text leading-[1.7] mb-5 max-w-[400px]">
                Engineering the decentralized future with Ethereum, Solana, and Rust-based smart contracts.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-[13px] font-bold text-text-h">
                  <span className="text-accent">12.4k</span> Members
                </div>
                <button className="bg-accent text-[#1a0033] border-none rounded-[10px] px-6 py-2 text-[12px] font-extrabold cursor-pointer hover:opacity-85 transition-opacity duration-150">
                  Join Collective
                </button>
              </div>
            </div>
          </div>

          {/* Regular card */}
          <div className="bg-bg-surface border border-border rounded-2xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-[8px] bg-bg-hover flex items-center justify-center shrink-0">
              <span className="text-[16px] font-bold text-accent">R</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[14px] font-bold text-text-h">Rustaceans</span>
                <span className="w-2 h-2 rounded-full bg-online" />
              </div>
              <p className="text-[12px] text-text m-0">8.1k members • 242 online</p>
            </div>
            <button className="bg-transparent text-accent border border-accent rounded-[9px] px-4 py-2 text-[12px] font-bold cursor-pointer hover:bg-accent-bg transition-colors duration-150">
              View
            </button>
          </div>
        </div>
      </section>

      {/* Mis Grupos */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[18px] font-extrabold text-text-h m-0">My Groups</h3>
          <span className="text-[11px] font-extrabold text-accent uppercase tracking-[1px] cursor-pointer">Manage</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { Icon: Terminal, label: "Go Microservices", meta: "4.2k mems", color: "text-accent" },
            { Icon: Layers,   label: "Typescript Pro",   meta: "21k mems",  color: "text-tertiary" },
          ].map(({ Icon, label, meta, color }) => (
            <div key={label} className="bg-bg-surface border border-border rounded-2xl p-5 flex flex-col gap-3 cursor-pointer hover:border-accent-border transition-colors duration-150">
              <div className={`w-10 h-10 rounded-[8px] bg-bg-hover flex items-center justify-center ${color}`}>
                <Icon size={18} strokeWidth={1.8} />
              </div>
              <div>
                <div className="text-[14px] font-bold text-text-h mb-1">{label}</div>
                <div className="text-[11px] text-text">{meta}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-bg-surface border border-border rounded-2xl p-8 text-center">
        <h5 className="text-text-h text-[24px] font-black mb-2 m-0">Build Together.</h5>
        <p className="text-text text-[14px] mb-6">Upgrade to Sanctum Pro for private collectives.</p>
        <button className="bg-accent text-[#1a0033] border-none rounded-[10px] px-8 py-3 text-[12px] font-extrabold uppercase tracking-[1px] cursor-pointer hover:opacity-85 transition-opacity duration-150">
          Go Premium
        </button>
      </section>
    </main>
  )
}