"use client"

import React, { useState } from "react"
import {
  Terminal, Compass, Users, Bookmark, MessageCircle,
  User, Settings, Bell, ChevronLeft, ChevronRight,
  Zap, Hash, GitBranch, Sparkles,
} from "lucide-react"
import { useNav } from "@/context/NavContext"
import type { Page } from "@/types"

const NAV_SECTIONS: {
  label: string
  items: { name: Page; Icon: React.ElementType; badge?: number; color?: string }[]
}[] = [
  {
    label: "Navegación",
    items: [
      { name: "Feed",     Icon: Hash,    color: "text-accent" },
      { name: "Explorar", Icon: Compass, color: "text-tertiary" },
    ],
  },
  {
    label: "Comunidad",
    items: [
      { name: "Comunidades", Icon: Users,         badge: 3 },
      { name: "Guardados",   Icon: Bookmark },
      { name: "Chat",        Icon: MessageCircle, badge: 5 },
    ],
  },
  {
    label: "Cuenta",
    items: [
      { name: "Perfil",          Icon: User     },
      { name: "Notificaciones",  Icon: Bell,    badge: 4 },
      { name: "Configuración",   Icon: Settings },
    ],
  },
]

export default function Navbar() {
  const { activePage, setActivePage } = useNav()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <>
      <nav
        className="fixed top-0 left-0 min-h-screen bg-bg-surface border-r border-border flex flex-col z-40 transition-all duration-300"
        style={{ width: collapsed ? "64px" : "220px" }}
      >
        {/* Logo */}
        <div className={`flex items-center gap-2.5 px-4 py-5 border-b border-border ${collapsed ? "justify-center" : ""}`}>
          <div className="w-8 h-8 rounded-[8px] bg-accent-bg border border-accent-border flex items-center justify-center shrink-0 animate-glow">
            <Terminal size={15} className="text-accent" strokeWidth={2} />
          </div>
          {!collapsed && (
            <span className="text-[15px] font-black text-accent tracking-tight">Devsanctum</span>
          )}
        </div>

        {/* Nav items */}
        <ul className="flex flex-col flex-1 gap-0.5 list-none m-0 px-2 py-4 overflow-y-auto">
          {NAV_SECTIONS.map((section) => (
            <li key={section.label}>
              {!collapsed && (
                <div className="text-[9px] font-bold text-text uppercase tracking-[1.2px] mb-1.5 mt-4 px-2 opacity-40 first:mt-0">
                  {section.label}
                </div>
              )}
              {collapsed && <div className="h-3" />}
              <ul className="flex flex-col gap-0.5 list-none m-0 p-0">
                {section.items.map(({ name, Icon, badge, color }) => {
                  const isActive = activePage === name
                  return (
                    <li key={name}>
                      <button
                        onClick={() => setActivePage(name)}
                        title={collapsed ? name : undefined}
                        className={`w-full flex items-center gap-2.5 text-[13px] rounded-lg border transition-all duration-150 cursor-pointer text-left
                          ${collapsed ? "justify-center px-0 py-2.5" : "px-3 py-2"}
                          ${isActive
                            ? "bg-accent-bg text-accent border-accent-border"
                            : `text-text border-transparent hover:bg-accent-bg hover:text-accent ${color || ""}`
                          }`}
                      >
                        <Icon size={15} strokeWidth={1.8} className="opacity-80 shrink-0" />
                        {!collapsed && (
                          <>
                            <span className="flex-1">{name}</span>
                            {badge != null && (
                              <span className="ml-auto bg-accent text-[#1a0033] text-[10px] font-bold px-1.5 rounded-full min-w-[18px] text-center leading-5">
                                {badge}
                              </span>
                            )}
                          </>
                        )}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </li>
          ))}
        </ul>

        {/* Bottom: user + collapse toggle */}
        <div className={`px-2 py-3 border-t border-border flex flex-col gap-2 ${collapsed ? "items-center" : ""}`}>
          {!collapsed && (
            <button
              className="w-full flex items-center gap-2.5 bg-accent text-[#1a0033] text-[12px] font-bold py-2.5 rounded-lg cursor-pointer transition-opacity duration-150 hover:opacity-85 border-none px-3"
              onClick={() => setActivePage("Login")}
            >
              <Sparkles size={14} strokeWidth={2} />
              Iniciar sesión
            </button>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="flex items-center justify-center w-full py-2 rounded-lg bg-transparent border border-border text-text cursor-pointer hover:bg-bg-hover hover:text-text-h transition-all duration-150"
          >
            {collapsed
              ? <ChevronRight size={14} strokeWidth={2} />
              : <ChevronLeft size={14} strokeWidth={2} />
            }
          </button>
        </div>
      </nav>

      {/* Spacer so content shifts */}
      <div
        className="shrink-0 transition-all duration-300"
        style={{ width: collapsed ? "64px" : "220px" }}
      />
    </>
  )
}