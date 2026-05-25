"use client"

import React from "react"
import { Heart, MessageSquare, UserPlus, AtSign, Share2 } from "lucide-react"
import type { Notification } from "@/types"

const TYPE_CONFIG = {
  like:     { Icon: Heart,         color: "text-tertiary",  label: "dio like a tu post" },
  comment:  { Icon: MessageSquare, color: "text-accent",    label: "comentó tu post" },
  follow:   { Icon: UserPlus,      color: "text-online",    label: "empezó a seguirte" },
  mention:  { Icon: AtSign,        color: "text-[#60a5fa]", label: "te mencionó" },
  share:    { Icon: Share2,        color: "text-[#f59e0b]", label: "compartió tu post" },
}

interface NotificationRowProps {
  notification: Notification
  onRead: () => void
}

export function NotificationRow({ notification, onRead }: NotificationRowProps) {
  const config = TYPE_CONFIG[notification.type]
  const Icon = config.Icon

  return (
    <div
      onClick={onRead}
      className={`flex items-start gap-4 px-5 py-4 border-b border-border cursor-pointer transition-all duration-150 hover:bg-bg-hover ${
        !notification.read ? "bg-accent-bg/30" : ""
      }`}
    >
      {/* Avatar + type icon */}
      <div className="relative shrink-0">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold"
          style={{ background: notification.actor.avatarGradient }}
        >
          {notification.actor.initials}
        </div>
        <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-bg-surface border border-border flex items-center justify-center ${config.color}`}>
          <Icon size={10} strokeWidth={2.5} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="text-[13px] text-text-h m-0 leading-[1.5]">
          <span className="font-bold">{notification.actor.name}</span>
          {" "}<span className="text-text opacity-80">{config.label}</span>
        </p>
        {notification.postPreview && (
          <p className="text-[11px] text-text opacity-60 m-0 mt-1 truncate max-w-[340px]">
            &ldquo;{notification.postPreview}&rdquo;
          </p>
        )}
        <p className="text-[10px] text-text opacity-40 m-0 mt-1">{notification.createdAt}</p>
      </div>

      {/* Unread dot */}
      {!notification.read && (
        <div className="w-2 h-2 rounded-full bg-accent shrink-0 mt-1.5 animate-pulse-slow" />
      )}
    </div>
  )
}