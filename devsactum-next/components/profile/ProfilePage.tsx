"use client"

import React, { useState } from "react"
import { ExternalLink, Terminal, Shield, Database, MessageSquare, Heart, UserPlus, Mail, Star, GitFork } from "lucide-react"
import { useNav } from "@/context/NavContext"

const REPOS = [
  { name: "lumina-engine",  desc: "High-performance async runtime for WebAssembly modules in edge environments.", lang: "Rust",  langColor: "#f97316", stars: "12.4k", forks: "892",  Icon: Terminal, wide: false },
  { name: "guardian-proxy", desc: "Layer 7 smart proxy with built-in eBPF observability and TLS termination.",   lang: "Go",    langColor: "#60a5fa", stars: "4.2k",  forks: "215",  Icon: Shield,   wide: false },
  { name: "vector-db-core", desc: "Core engine for vector similarity search using HNSW indexing and SIMD acceleration.", lang: "C++", langColor: "#f87171", stars: "28.1k", forks: "1.4k", Icon: Database, wide: true  },
]

const POSTS = [
  { title: "Why We Migrated Our Edge Runtime to Rust: A Deep Dive into Memory Safety", date: "Oct 24, 2023", text: "After three years of managing a complex C++ codebase for our edge nodes, the technical debt of manual memory management reached a breaking point.", comments: 42, likes: "1.2k", active: true },
  { title: "The Future of Decentralized Infrastructure and the Death of Monoliths",   date: "Sep 12, 2023", text: "Distributed systems are often harder than they need to be. By leveraging modern networking protocols like QUIC, we can rethink how services discover and talk to each other.", comments: 18, likes: "843", active: false },
]

const SKILLS = [
  { label: "Distributed Logic",  pct: 98 },
  { label: "Kernel Programming", pct: 92 },
  { label: "Cloud Native Ops",   pct: 85 },
]

const HEATMAP = [0, 20, 40, 0, 60, 10, 100, 0, 0, 30, 50, 20, 0, 10, 40, 80, 20, 0, 10, 20, 100]

const card: React.CSSProperties = { background: "var(--bg-surface)", border: "1px solid var(--border)", borderRadius: 14, padding: 20 }

export default function ProfilePage() {
  const { setActivePage } = useNav()
  const [following, setFollowing] = useState(false)

  return (
    <div style={{ padding: "24px", maxWidth: 1100, margin: "0 auto" }}>

      {/* Hero banner */}
      <header style={{ ...card, padding: 0, overflow: "hidden", marginBottom: 24, position: "relative", minHeight: 320 }}>
        {/* Banner fondo */}
        <div style={{ height: 180, background: "linear-gradient(135deg, #1a0a3a, #2a0060, #0a1a4a)", position: "relative" }}>
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .3 }} viewBox="0 0 800 180" fill="none">
            <path d="M0 90 Q200 20 400 90 Q600 160 800 90" stroke="#c49aff" strokeWidth="1" opacity=".6"/>
            <path d="M0 120 Q300 50 600 120 Q700 140 800 100" stroke="#7c6fe0" strokeWidth=".6" opacity=".4"/>
            <circle cx="400" cy="90" r="4" fill="#c49aff" opacity=".8"/>
            <circle cx="200" cy="50" r="2" fill="#c49aff" opacity=".5"/>
            <circle cx="600" cy="130" r="3" fill="#ff94a8" opacity=".5"/>
          </svg>
        </div>

        {/* Avatar + info */}
        <div style={{ padding: "0 28px 28px", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 20, marginTop: -56 }}>
            <div style={{ width: 100, height: 100, borderRadius: 14, background: "var(--accent-bg)", border: "3px solid var(--bg-surface)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, fontWeight: 900, color: "var(--accent)", flexShrink: 0 }}>
              AV
            </div>
            <div style={{ paddingBottom: 4 }}>
              <h1 style={{ fontSize: 28, fontWeight: 900, letterSpacing: "-1px", color: "var(--text-h)", margin: "0 0 4px" }}>Alex Volkov</h1>
              <p style={{ fontSize: 12, color: "var(--accent)", fontWeight: 700, margin: 0 }}>Principal Distributed Systems Architect</p>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", gap: 8, paddingBottom: 4 }}>
              <button
                onClick={() => setFollowing(!following)}
                style={{ display: "flex", alignItems: "center", gap: 6, background: following ? "transparent" : "var(--accent)", color: following ? "var(--accent)" : "#1a0033", border: "1px solid var(--accent)", borderRadius: 8, padding: "8px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}
              >
                <UserPlus size={13} strokeWidth={2} /> {following ? "Siguiendo" : "Follow"}
              </button>
              <button
                onClick={() => setActivePage("Chat")}
                style={{ display: "flex", alignItems: "center", gap: 6, background: "var(--bg-hover)", color: "var(--text-h)", border: "1px solid var(--border)", borderRadius: 8, padding: "8px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}
              >
                <Mail size={13} strokeWidth={2} /> Message
              </button>
            </div>
          </div>

          <p style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.7, maxWidth: 600, margin: "14px 0" }}>
            Building resilient infrastructure at global scale. Contributor to various open-source kernel modules and low-latency networking protocols. Minimalist by design, architect by trade.
          </p>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["Rust", "Go", "Kubernetes", "Wasm", "eBPF"].map((tag) => (
              <span key={tag} style={{ background: "var(--accent-bg)", color: "var(--accent)", border: "1px solid var(--accent-border)", fontSize: 10, fontWeight: 800, padding: "3px 10px", borderRadius: 99, textTransform: "uppercase", letterSpacing: 1 }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Grid principal */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 20 }}>

        {/* Columna izquierda */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

          {/* Repositorios */}
          <section style={card}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <h2 style={{ fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.5, color: "var(--text-h)", margin: 0 }}>Top Repositories</h2>
              <button style={{ display: "flex", alignItems: "center", gap: 4, background: "none", border: "none", color: "var(--accent)", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
                View GitHub <ExternalLink size={11} strokeWidth={2} />
              </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {REPOS.map((r) => (
                <div
                  key={r.name}
                  style={{ background: "var(--bg-hover)", border: "1px solid var(--border)", borderRadius: 10, padding: 16, gridColumn: r.wide ? "span 2" : "span 1", cursor: "pointer", transition: "border-color .15s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent-border)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                    <r.Icon size={22} style={{ color: "var(--accent)" }} strokeWidth={1.6} />
                    <span style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: "var(--text)" }}>Public</span>
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text-h)", marginBottom: 6 }}>{r.name}</div>
                  <div style={{ fontSize: 11, color: "var(--text)", lineHeight: 1.6, marginBottom: 12 }}>{r.desc}</div>
                  <div style={{ display: "flex", gap: 14, fontSize: 11, fontFamily: "monospace", color: "var(--text)" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: r.langColor, flexShrink: 0 }} /> {r.lang}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 3 }}><Star size={11} strokeWidth={1.8} /> {r.stars}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: 3 }}><GitFork size={11} strokeWidth={1.8} /> {r.forks}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Insights */}
          <section style={card}>
            <h2 style={{ fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.5, color: "var(--text-h)", margin: "0 0 20px" }}>Recent Insights</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {POSTS.map((p, i) => (
                <article key={p.title} style={{ display: "flex", gap: 16, padding: "20px 0", borderBottom: i < POSTS.length - 1 ? "1px solid var(--border)" : "none", position: "relative", paddingLeft: 28 }}>
                  {/* Timeline dot */}
                  <div style={{ position: "absolute", left: 0, top: 24, width: 12, height: 12, borderRadius: "50%", background: p.active ? "var(--accent)" : "var(--border)", border: `2px solid ${p.active ? "var(--accent)" : "var(--border)"}`, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: p.active ? "var(--accent)" : "var(--text)", marginBottom: 8 }}>{p.date}</div>
                    <h3 style={{ fontSize: 16, fontWeight: 800, color: "var(--text-h)", lineHeight: 1.35, margin: "0 0 8px", cursor: "pointer" }}>{p.title}</h3>
                    <p style={{ fontSize: 12, color: "var(--text)", lineHeight: 1.65, margin: "0 0 12px" }}>{p.text}</p>
                    <div style={{ display: "flex", gap: 16 }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 700, color: "var(--text)" }}><MessageSquare size={13} strokeWidth={1.8} /> {p.comments}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 700, color: "var(--text)" }}><Heart size={13} strokeWidth={1.8} /> {p.likes}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* Columna derecha — sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

          {/* Stats seguidores */}
          <div style={card}>
            <div style={{ display: "flex", justifyContent: "space-around", marginBottom: 16 }}>
              {[["4.8k", "Followers"], ["124", "Following"], ["1.4k", "Posts"]].map(([val, lbl]) => (
                <div key={lbl} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 20, fontWeight: 900, color: "var(--text-h)", letterSpacing: "-0.5px" }}>{val}</div>
                  <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: "var(--text)", marginTop: 2 }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust score */}
          <div style={{ ...card, textAlign: "center" }}>
            <div style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.5, color: "var(--text)", marginBottom: 16 }}>Network Reputation</div>
            <div style={{ position: "relative", width: 110, height: 110, margin: "0 auto 12px" }}>
              <svg width="110" height="110" viewBox="0 0 110 110">
                <circle cx="55" cy="55" r="46" fill="none" stroke="var(--bg-hover)" strokeWidth="8"/>
                <circle cx="55" cy="55" r="46" fill="none" stroke="var(--accent)" strokeWidth="8"
                  strokeDasharray="289" strokeDashoffset="29"
                  strokeLinecap="round" transform="rotate(-90 55 55)"/>
              </svg>
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 26, fontWeight: 900, color: "var(--text-h)" }}>99</span>
                <span style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: "var(--accent)" }}>Trust</span>
              </div>
            </div>
            <p style={{ fontSize: 11, color: "var(--text)", lineHeight: 1.6, margin: 0 }}>Ranked in the top 0.1% of systems architects globally.</p>
          </div>

          {/* Heatmap de actividad */}
          <div style={card}>
            <div style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.5, color: "var(--text)", marginBottom: 12 }}>Global Activity</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3 }}>
              {HEATMAP.map((v, i) => (
                <div key={i} style={{ aspectRatio: "1", borderRadius: 3, background: v === 0 ? "var(--bg-hover)" : `rgba(196,154,255,${v / 100})` }} />
              ))}
            </div>
            <p style={{ fontSize: 10, color: "var(--text)", fontFamily: "monospace", marginTop: 10 }}>1,402 contributions in the last year</p>
          </div>

          {/* Stack proficiency */}
          <div style={card}>
            <div style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.5, color: "var(--text)", marginBottom: 14 }}>Stack Proficiency</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {SKILLS.map((s) => (
                <div key={s.label}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, fontFamily: "monospace", color: "var(--text)", textTransform: "uppercase", marginBottom: 4 }}>
                    <span>{s.label}</span><span>{s.pct}%</span>
                  </div>
                  <div style={{ height: 4, background: "var(--bg-hover)", borderRadius: 99, overflow: "hidden" }}>
                    <div style={{ width: `${s.pct}%`, height: "100%", background: "var(--accent)", borderRadius: 99 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Activity pulse */}
      <div style={{ position: "fixed", bottom: 24, right: 24, display: "flex", alignItems: "center", gap: 8, background: "var(--bg-surface)", border: "1px solid var(--accent-border)", borderRadius: 99, padding: "6px 14px", zIndex: 50 }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--tertiary)", flexShrink: 0 }} />
        <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, color: "var(--text-h)" }}>Node Status: Active</span>
      </div>
    </div>
  )
}