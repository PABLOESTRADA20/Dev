// components/layout/Sidebar.tsx
"use client";

import { Home, Users, Compass, MessageSquare, Bell, User, Settings, Plus } from "lucide-react";
import Link from "next/link";
import { useNav } from "@/context/NavContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const navItems = [
  { icon: Home, label: "Feed", id: "Feed" },
  { icon: Compass, label: "Explorar", id: "Explore" },
  { icon: Users, label: "Comunidades", id: "Communities" },
  { icon: MessageSquare, label: "Mensajes", id: "Chat" },
  { icon: Bell, label: "Notificaciones", id: "Notifications" },
  { icon: User, label: "Perfil", id: "Profile" },
];

export default function Sidebar() {
  const { activePage, setActivePage } = useNav();

  return (
    <div className="fixed left-0 top-0 h-screen w-64 border-r border-border bg-surface flex flex-col z-50">
      <div className="p-6 flex items-center gap-3 border-b border-border">
        <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
          <span className="text-white font-bold text-xl">D</span>
        </div>
        <div>
          <h1 className="font-semibold text-2xl tracking-tighter">devsanctum</h1>
          <p className="text-xs text-text-muted -mt-1">para devs</p>
        </div>
      </div>

      <div className="p-4">
        <Button className="w-full justify-start gap-3 mb-6" size="lg">
          <Plus className="w-5 h-5" />
          Nuevo Proyecto
        </Button>
      </div>

      <nav className="flex-1 px-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl mb-1 transition-all text-left ${isActive
                ? "bg-accent text-white"
                : "hover:bg-surface-2 text-text-muted hover:text-text"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border mt-auto">
        <Button variant="ghost" className="w-full justify-start gap-3">
          <Settings className="w-5 h-5" />
          Configuración
        </Button>
      </div>
    </div>
  );
}