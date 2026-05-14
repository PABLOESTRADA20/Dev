"use client"

import React from "react"
import { Bell } from "lucide-react"
import { NotificationRow } from "./NotificationRow"
import { useNotifications } from "@/hooks/useNotifications"

export default function NotificationsPage() {
  const { notifications, unreadCount, markRead, markAllRead } = useNotifications()

  return (
    <div style={{ padding: "24px", maxWidth: 680, margin: "0 auto" }}>

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 28,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 9,
              background: "var(--accent-bg)",
              border: "1px solid var(--accent-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Bell size={16} style={{ color: "var(--accent)" }} strokeWidth={1.8} />
          </div>
          <div>
            <h1
              style={{
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: "-0.5px",
                color: "var(--text-h)",
                margin: 0,
              }}
            >
              Notificaciones
            </h1>
            {unreadCount > 0 && (
              <p style={{ fontSize: 11, color: "var(--text)", margin: "2px 0 0" }}>
                {unreadCount} sin leer
              </p>
            )}
          </div>
        </div>

        {unreadCount > 0 && (
          <button
            onClick={markAllRead}
            style={{
              background: "none",
              border: "1px solid var(--accent-border)",
              borderRadius: 7,
              padding: "6px 14px",
              fontSize: 11,
              fontWeight: 700,
              color: "var(--accent)",
              cursor: "pointer",
              transition: "background .15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-bg)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
          >
            Marcar todo como leído
          </button>
        )}
      </div>

      {/* Filter tabs */}
      <div
        style={{
          display: "flex",
          gap: 4,
          marginBottom: 20,
          borderBottom: "1px solid var(--border)",
          paddingBottom: 0,
        }}
      >
        {["Todas", "Sin leer", "Menciones"].map((tab) => (
          <button
            key={tab}
            style={{
              background: "none",
              border: "none",
              borderBottom: tab === "Todas" ? "2px solid var(--accent)" : "2px solid transparent",
              padding: "8px 16px",
              fontSize: 12,
              fontWeight: tab === "Todas" ? 700 : 500,
              color: tab === "Todas" ? "var(--accent)" : "var(--text)",
              cursor: "pointer",
              transition: "color .15s",
              marginBottom: -1,
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Notification list */}
      {notifications.length > 0 ? (
        <div
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border)",
            borderRadius: 14,
            overflow: "hidden",
          }}
        >
          {/* Unread section */}
          {notifications.some((n) => !n.read) && (
            <>
              <div
                style={{
                  padding: "10px 24px",
                  fontSize: 10,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  color: "var(--text)",
                  opacity: 0.5,
                  background: "var(--bg-hover)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                Nuevas
              </div>
              {notifications
                .filter((n) => !n.read)
                .map((n) => (
                  <NotificationRow
                    key={n.id}
                    notification={n}
                    onRead={() => markRead(n.id)}
                  />
                ))}
            </>
          )}

          {/* Read section */}
          {notifications.some((n) => n.read) && (
            <>
              <div
                style={{
                  padding: "10px 24px",
                  fontSize: 10,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  color: "var(--text)",
                  opacity: 0.5,
                  background: "var(--bg-hover)",
                  borderBottom: "1px solid var(--border)",
                  borderTop: notifications.some((n) => !n.read)
                    ? "1px solid var(--border)"
                    : "none",
                }}
              >
                Anteriores
              </div>
              {notifications
                .filter((n) => n.read)
                .map((n) => (
                  <NotificationRow
                    key={n.id}
                    notification={n}
                    onRead={() => markRead(n.id)}
                  />
                ))}
            </>
          )}
        </div>
      ) : (
        /* Empty state */
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px 24px",
            color: "var(--text)",
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 14,
              background: "var(--bg-surface)",
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <Bell size={24} style={{ opacity: 0.2 }} strokeWidth={1.5} />
          </div>
          <p style={{ fontSize: 14, fontWeight: 700, color: "var(--text-h)", margin: "0 0 6px" }}>
            Todo al día
          </p>
          <p style={{ fontSize: 12, color: "var(--text)", margin: 0, opacity: 0.6 }}>
            No tienes notificaciones pendientes
          </p>
        </div>
      )}
    </div>
  )
}