"use client"

import React from "react"
import { NotificationIcon } from "./NotificationIcon"
import type { Notification } from "@/types"

const ACTION_LABEL: Record<Notification["type"], string> = {
  like:    "le dio like a tu post",
  comment: "comentó tu post",
  follow:  "comenzó a seguirte",
  mention: "te mencionó en un post",
  share:   "compartió tu post",
}

interface Props {
  notification: Notification
  onRead: () => void
}

export function NotificationRow({ notification: n, onRead }: Props) {
  return (
    <div
      onClick={onRead}
      style={{
        display: "flex",
        gap: 14,
        padding: "14px 24px",
        borderBottom: "1px solid var(--border)",
        cursor: "pointer",
        background: n.read ? "transparent" : "rgba(196,154,255,.03)",
        transition: "background .15s",
        position: "relative",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-hover)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = n.read ? "transparent" : "rgba(196,154,255,.03)")}
    >
      {/* Unread indicator */}
      {!n.read && (
        <div
          style={{
            position: "absolute",
            left: 8,
            top: "50%",
            transform: "translateY(-50%)",
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "var(--accent)",
            flexShrink: 0,
          }}
        />
      )}

      {/* Type icon */}
      <NotificationIcon type={n.type} size={14} />

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Actor avatar + text */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: n.actor.avatarGradient,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
              fontWeight: 700,
              color: "#fff",
              flexShrink: 0,
            }}
          >
            {n.actor.initials}
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontSize: 13, color: "var(--text)", margin: "0 0 4px", lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700, color: "var(--text-h)" }}>
                {n.actor.name}
              </span>{" "}
              {ACTION_LABEL[n.type]}
            </p>

            {n.postPreview && (
              <p
                style={{
                  fontSize: 11,
                  color: "var(--text)",
                  margin: "0 0 4px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  paddingLeft: 8,
                  borderLeft: "2px solid var(--border)",
                  opacity: 0.7,
                }}
              >
                {n.postPreview}
              </p>
            )}

            <span style={{ fontSize: 10, color: "var(--text)", opacity: 0.5 }}>
              {n.createdAt}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}