"use client"

 
import React from "react"
import {
  Terminal, Compass, Users, Bookmark, MessageCircle,
  User, Settings,
} from "lucide-react"
import { useNav } from "@/context/NavContext"
 
const NAV_SECTIONS: {
  label: string
  items: { name: string; Icon: React.ElementType; badge: number | null }[]
}[] = [
  {
    label: "Navegación",
    items: [
      { name: "Feed",       Icon: Terminal,       badge: null },
      { name: "Explorar",   Icon: Compass,        badge: null },
    ],
  },
  {
    label: "Comunidad",
    items: [
      { name: "Comunidades", Icon: Users,         badge: 3    },
      { name: "Guardados",   Icon: Bookmark,      badge: null },
      { name: "Chat",        Icon: MessageCircle, badge: 5    },
    ],
  },
  {
    label: "Cuenta",
    items: [
      { name: "Perfil",        Icon: User,     badge: null },
      { name: "Configuración", Icon: Settings, badge: null },
    ],
  },
]
 
export default function Navbar() {
  const { activePage, setActivePage } = useNav()
 
  return (
    <nav className="fixed top-0 left-0 w-[220px] min-h-screen bg-bg-surface border-r border-border px-4 py-8 flex flex-col z-40">
      <div className="text-[20px] font-black text-accent tracking-tight mb-8 px-2">
        Devsanctum
      </div>
 
      <ul className="flex flex-col flex-1 gap-0.5 list-none m-0 p-0">
        {NAV_SECTIONS.map((section) => (
          <li key={section.label}>
            <div className="text-[10px] font-bold text-text uppercase tracking-[0.8px] mb-1.5 mt-5 px-2 opacity-50">
              {section.label}
            </div>
            <ul className="flex flex-col gap-0.5 list-none m-0 p-0">
              {section.items.map(({ name, Icon, badge }) => (
                <li key={name}>
                  <button
                    onClick={() => setActivePage(name as any)}
                    className={`w-full flex items-center gap-2.5 text-[13px] px-3 py-2 rounded-lg border transition-all duration-150 cursor-pointer text-left ${
                      activePage === name
                        ? "bg-accent-bg text-accent border-accent-border"
                        : "text-text border-transparent hover:bg-accent-bg hover:text-accent"
                    }`}
                  >
                    <Icon size={15} strokeWidth={1.8} className="opacity-75 shrink-0" />
                    {name}
                    {badge !== null && (
                      <span className="ml-auto bg-accent text-[#1a0033] text-[10px] font-bold px-1.5 py-0 rounded-full min-w-[18px] text-center leading-5">
                        {badge}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
 
      <button
        className="w-full bg-accent text-[#1a0033] text-[13px] font-bold py-[10px] rounded-lg mt-4 cursor-pointer transition-opacity duration-150 hover:opacity-85 border-none"
        onClick={() => setActivePage("Login")}
      >
        Iniciar sesión
      </button>
    </nav>
  )
}
 