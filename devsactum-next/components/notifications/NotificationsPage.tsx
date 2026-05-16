"use client"

import React from "react"
import { Bell } from "lucide-react"
import { NotificationRow } from "./NotificationRow"
import { useNotifications } from "@/hooks/useNotifications"

export default function NotificationsPage() {
  const { notifications, unreadCount, markRead, markAllRead } = useNotifications()

  return (
    <div className="px-6 py-6 max-w-[680px] mx-auto">

      {/* Header */}
      <div className="flex items-center justify-between mb-7">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-[9px] bg-accent-bg border border-accent-border flex items-center justify-center">
            <Bell size={16} className="text-accent" strokeWidth={1.8} />
          </div>
          <div>
            <h1 className="text-[22px] font-black tracking-[-0.5px] text-text-h m-0">Notificaciones</h1>
            {unreadCount > 0 && (
              <p className="text-[11px] text-text m-0 mt-0.5">{unreadCount} sin leer</p>
            )}
          </div>
        </div>

        {unreadCount > 0 && (
          <button
            onClick={markAllRead}
            className="bg-transparent border border-accent-border rounded-[7px] px-3.5 py-1.5 text-[11px] font-bold text-accent cursor-pointer transition-colors duration-150 hover:bg-accent-bg"
          >
            Marcar todo como leído
          </button>
        )}
      </div>

      {/* Filter tabs */}
      <div className="flex gap-1 mb-5 border-b border-border">
        {["Todas", "Sin leer", "Menciones"].map((tab) => (
          <button
            key={tab}
            className={`bg-transparent border-none border-b-2 px-4 py-2 text-[12px] cursor-pointer transition-colors duration-150 -mb-px ${
              tab === "Todas"
                ? "border-accent text-accent font-bold"
                : "border-transparent text-text font-medium hover:text-text-h"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Notification list */}
      {notifications.length > 0 ? (
        <div className="bg-bg-surface border border-border rounded-[14px] overflow-hidden">
          {/* Unread section */}
          {notifications.some((n) => !n.read) && (
            <>
              <div className="px-6 py-2.5 text-[10px] font-extrabold uppercase tracking-[1.5px] text-text opacity-50 bg-bg-hover border-b border-border">
                Nuevas
              </div>
              {notifications.filter((n) => !n.read).map((n) => (
                <NotificationRow key={n.id} notification={n} onRead={() => markRead(n.id)} />
              ))}
            </>
          )}

          {/* Read section */}
          {notifications.some((n) => n.read) && (
            <>
              <div className={`px-6 py-2.5 text-[10px] font-extrabold uppercase tracking-[1.5px] text-text opacity-50 bg-bg-hover border-b border-border ${notifications.some((n) => !n.read) ? "border-t border-border" : ""}`}>
                Anteriores
              </div>
              {notifications.filter((n) => n.read).map((n) => (
                <NotificationRow key={n.id} notification={n} onRead={() => markRead(n.id)} />
              ))}
            </>
          )}
        </div>
      ) : (
        /* Empty state */
        <div className="flex flex-col items-center justify-center py-20 px-6 text-text">
          <div className="w-[60px] h-[60px] rounded-[14px] bg-bg-surface border border-border flex items-center justify-center mb-4">
            <Bell size={24} className="opacity-20" strokeWidth={1.5} />
          </div>
          <p className="text-[14px] font-bold text-text-h m-0 mb-1.5">Todo al día</p>
          <p className="text-[12px] text-text m-0 opacity-60">No tienes notificaciones pendientes</p>
        </div>
      )}
    </div>
  )
}