"use client"

import React from "react"
import { Terminal, Compass, Users, Bookmark, MessageCircle } from "lucide-react"
import { useNav,  } from "@/context/NavContext"

const NAV_SECTIONS: { label: string; items: { name: string; Icon: React.ElementType; badge: number | null }[] }[] = [
  {
    label: "Navegación",
    items: [
      { name: "Feed", Icon: Terminal, badge: null },
      { name: "Explorar", Icon: Compass, badge: null },
    ],
  },
  {
    label: "Comunidad",
    items: [
      { name: "Comunidades", Icon: Users, badge: 3 },
      { name: "Guardados", Icon: Bookmark, badge: null },
      { name: "Chat", Icon: MessageCircle, badge: 5 },
    ],
  },
]
export default function Navbar() {
  const { activePage, setActivePage } = useNav()
  return (
    <nav className="fixed top-0 left-0 w-[220px] min-h-screen bg-[#131313] border-r border-[#2e303a] p-6 py-8 flex flex-col">
      <div className="text-[20px] font-black text-[#c49aff] tracking-tight mb-8 px-1">Devsanctum</div>
      <ul className="flex flex-col flex-1 gap-2">
        {NAV_SECTIONS.map((section) => (
          <li key={section.label}>
            <div className="text-[10px] font-bold text-[#6b6375] uppercase tracking-[0.8px] mb-2 mt-4 px-2 opacity-50">{section.label}</div>
            <ul className="flex flex-col gap-1">
              {section.items.map(({ name, Icon, badge }) => (
                <li key={name}>
                  <button
                    className={`w-full flex items-center gap-[10px] text-[13px] text-[#6b6375] p-[8px_12px] rounded-lg border border-transparent transition-all duration-150 cursor-pointer bg-none text-left ${activePage === name
                        ? "bg-[rgba(196,154,255,0.12)] text-[#c49aff] border-[rgba(196,154,255,0.3)]"
                        : "hover:bg-[rgba(196,154,255,0.12)] hover:text-[#c49aff]"
                      }`}
                    onClick={() => setActivePage(name as any)}
                  >
                    <Icon size={16} strokeWidth={1.8} className="w-4 h-4 opacity-70" />
                    {name}
                    {badge !== null && (
                      <span className="ml-auto bg-[#c49aff] text-[#1a0033] text-[10px] font-bold px-[1px_7px] rounded-full min-w-[18px] text-center">
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
        className="w-full bg-[#c49aff] text-[#1a0033] text-[13px] font-bold py-[10px] rounded-lg mt-4 cursor-pointer transition-opacity duration-150 hover:opacity-85 border-none"
        onClick={() => setActivePage("Login")}
      >
        Iniciar sesión
      </button>
    </nav>
  )
}