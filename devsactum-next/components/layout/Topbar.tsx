"use client"

import React, { useState, useRef, useEffect } from "react"
import { Search, Bell, X, Command, Hash, User, MessageCircle, Settings } from "lucide-react"
import { useNav } from "@/context/NavContext"
import type { Page } from "@/types"

const SEARCH_SUGGESTIONS: { icon: React.ElementType; label: string; type: string; page?: Page }[] = [
  { icon: Hash,          label: "Feed principal",         type: "Página",    page: "Feed" },
  { icon: User,          label: "Alex Volkov",            type: "Perfil" },
  { icon: MessageCircle, label: "Chat con Alex Rivet",    type: "Chat",      page: "Chat" },
  { icon: Settings,      label: "Configuración",          type: "Página",    page: "Configuración" },
]

export default function Topbar() {
  const { setActivePage } = useNav()
  const [query, setQuery]           = useState("")
  const [focused, setFocused]       = useState(false)
  const [cmdOpen, setCmdOpen]       = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // Global ⌘K shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        inputRef.current?.focus()
        setFocused(true)
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  const filtered = SEARCH_SUGGESTIONS.filter(s =>
    !query || s.label.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <header className="flex items-center justify-between px-5 h-14 bg-bg-surface border-b border-border sticky top-0 z-30 glass">
      <div className="text-[14px] font-black text-text-h tracking-tight hidden sm:block opacity-0 select-none">
        DS
      </div>

      {/* Search */}
      <div className="relative flex-1 max-w-[480px] mx-auto">
        <div
          className={`flex items-center gap-2 border rounded-lg px-3 py-2 transition-all duration-200 ${
            focused
              ? "bg-bg border-accent-border shadow-[0_0_0_3px_rgba(196,154,255,0.1)]"
              : "bg-bg border-border"
          }`}
        >
          <Search size={13} className="text-text opacity-50 shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 150)}
            placeholder="Buscar en Devsanctum..."
            className="bg-transparent border-none outline-none text-[12px] text-text-h w-full placeholder:text-text placeholder:opacity-40"
          />
          {query ? (
            <button onClick={() => setQuery("")} className="bg-transparent border-none cursor-pointer text-text shrink-0">
              <X size={12} strokeWidth={2} />
            </button>
          ) : (
            <div className="flex items-center gap-0.5 shrink-0 opacity-30">
              <Command size={10} className="text-text" />
              <span className="text-[10px] text-text font-mono">K</span>
            </div>
          )}
        </div>

        {/* Search dropdown */}
        {focused && (
          <div className="absolute top-full mt-2 w-full bg-bg-surface border border-border rounded-[12px] shadow-2xl py-1.5 z-50 animate-fade-in">
            {filtered.length > 0 ? (
              <>
                <div className="px-3 py-1.5 text-[9px] font-bold uppercase tracking-[1.5px] text-text opacity-40">
                  {query ? "Resultados" : "Sugerencias"}
                </div>
                {filtered.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => { s.page && setActivePage(s.page); setFocused(false); setQuery("") }}
                    className="w-full flex items-center gap-2.5 px-3 py-2.5 text-left cursor-pointer bg-transparent border-none hover:bg-bg-hover transition-colors duration-100"
                  >
                    <div className="w-7 h-7 rounded-[6px] bg-accent-bg flex items-center justify-center shrink-0">
                      <s.icon size={13} className="text-accent" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="text-[12px] font-semibold text-text-h">{s.label}</div>
                      <div className="text-[10px] text-text opacity-60">{s.type}</div>
                    </div>
                  </button>
                ))}
              </>
            ) : (
              <div className="px-3 py-5 text-center text-[12px] text-text opacity-50">
                Sin resultados para &quot;{query}&quot;
              </div>
            )}
          </div>
        )}
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={() => setActivePage("Notificaciones")}
          className="relative w-8 h-8 rounded-lg bg-transparent border-none cursor-pointer flex items-center justify-center text-text hover:bg-bg-hover hover:text-text-h transition-colors duration-150"
        >
          <Bell size={15} strokeWidth={1.8} />
          <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-tertiary" />
        </button>
        <button
          onClick={() => setActivePage("Perfil")}
          className="w-8 h-8 rounded-full bg-accent-bg border border-accent-border flex items-center justify-center text-[11px] font-bold text-accent cursor-pointer hover:bg-accent hover:text-[#1a0033] transition-colors duration-150"
        >
          AV
        </button>
      </div>
    </header>
  )
}