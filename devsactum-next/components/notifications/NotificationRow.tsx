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
      className={`flex gap-3.5 px-6 py-3.5 border-b border-border cursor-pointer transition-colors duration-150 relative hover:bg-bg-hover ${
        n.read ? "bg-transparent" : "bg-[rgba(196,154,255,0.03)]"
      }`}
    >
      {/* Unread indicator */}
      {!n.read && (
        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
      )}

      {/* Type icon */}
      <NotificationIcon type={n.type} size={14} />

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-2.5">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold text-white shrink-0"
            style={{ background: n.actor.avatarGradient }}
          >
            {n.actor.initials}
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-[13px] text-text m-0 mb-1 leading-[1.5]">
              <span className="font-bold text-text-h">{n.actor.name}</span>{" "}
              {ACTION_LABEL[n.type]}
            </p>

            {n.postPreview && (
              <p className="text-[11px] text-text m-0 mb-1 overflow-hidden text-ellipsis whitespace-nowrap pl-2 border-l-2 border-border opacity-70">
                {n.postPreview}
              </p>
            )}

            <span className="text-[10px] text-text opacity-50">{n.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  )
}