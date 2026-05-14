"use client"

import React from "react"
import { Heart, MessageCircle, UserPlus, AtSign, Repeat2 } from "lucide-react"
import type { NotificationType } from "@/types"

interface Props {
  type: NotificationType
  size?: number
}

const CONFIG: Record<
  NotificationType,
  { Icon: React.ElementType; color: string; bg: string }
> = {
  like:    { Icon: Heart,          color: "#f472b6", bg: "rgba(244,114,182,.12)" },
  comment: { Icon: MessageCircle,  color: "#60a5fa", bg: "rgba(96,165,250,.12)"  },
  follow:  { Icon: UserPlus,       color: "var(--accent)", bg: "var(--accent-bg)" },
  mention: { Icon: AtSign,         color: "#fbbf24", bg: "rgba(251,191,36,.12)"  },
  share:   { Icon: Repeat2,        color: "#4ade80", bg: "rgba(74,222,128,.12)"  },
}

export function NotificationIcon({ type, size = 14 }: Props) {
  const { Icon, color, bg } = CONFIG[type]

  return (
    <div
      style={{
        width: size * 2.4,
        height: size * 2.4,
        borderRadius: "50%",
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <Icon size={size} style={{ color }} strokeWidth={1.8} />
    </div>
  )
}