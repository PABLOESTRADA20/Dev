"use client"

import React from "react"
import { Terminal, Compass, Users, Bookmark, MessageCircle, UserCircle, Bell } from "lucide-react"
import { useNav } from "@/context/NavContext"
import { useNotifications } from "@/hooks/useNotifications"
import type { Page } from "@/types"

const NAV_SECTIONS: {
  label: string
  items: { name: Page; Icon: React.ElementType; badgeKey?: "chat" | "notifications" }[]
}[] = [
  {
    label: "Navegación",
    items: [
      { name: "Feed",            Icon: Terminal   },
      { name: "Explorar",        Icon: Compass    },
      { name: "Perfil",          Icon: UserCircle },
      { name: "Notificaciones",  Icon: Bell,       badgeKey: "notifications" },
    ],
  },
  {
    label: "Comunidad",
    items: [
      { name: "Comunidades", Icon: Users,         badgeKey: "chat" },
      { name: "Guardados",   Icon: Bookmark       },
      { name: "Chat",        Icon: MessageCircle, badgeKey: "chat" },
    ],
  },
]

// Static badge counts for chat / communities (can be wired to real state later)
const STATIC_BADGES: Partial<Record<string, number>> = {
  Comunidades: 3,
  Chat: 5,
}

export default function Navbar() {
  const { activePage, setActivePage } = useNav()
  const { unreadCount } = useNotifications()

  function getBadge(name: Page): number | null {
    if (name === "Notificaciones") return unreadCount > 0 ? unreadCount : null
    return STATIC_BADGES[name] ?? null
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">Devsanctum</div>

      <ul className="navbar-links">
        {NAV_SECTIONS.map((section) => (
          <li key={section.label}>
            <div className="navbar-section">{section.label}</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "2px" }}>
              {section.items.map(({ name, Icon }) => {
                const badge = getBadge(name)
                return (
                  <li key={name}>
                    <button
                      className={`navbar-link ${activePage === name ? "active" : ""}`}
                      onClick={() => setActivePage(name)}
                    >
                      <Icon size={16} strokeWidth={1.8} className="link-icon" />
                      {name}
                      {badge !== null && (
                        <span className="navbar-badge">{badge}</span>
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>
          </li>
        ))}
      </ul>

      <button className="navbar-cta" onClick={() => setActivePage("Login")}>
        Iniciar sesión
      </button>
    </nav>
  )
}