"use client"

import React, { useState } from "react"
import { Heart, MessageSquare, Share2, MoreHorizontal, Repeat2, Plus } from "lucide-react"

const POSTS = [
  {
    id: 1,
    initials: "JD",
    name: "James Dalton",
    handle: "@jdalton_dev",
    time: "2h ago",
    text: "Optimizing the hydration loop for the new reactive engine. Reduced TTI by 40% using a custom worker-thread scheduler. Check out the core implementation:",
    code: `async function hydrate(root: Node) {\n  // Offload expensive diffing to Worker\n  const patch = await worker.computeDiff(root);\n\n  requestIdleCallback(() => {\n    applyPatch(root, patch);\n  });\n}`,
    likes: 1200, comments: 84, shares: 12,
    liked: false,
    avatarColor: "#c49aff", avatarBg: "rgba(196,154,255,.15)",
  },
  {
    id: 2,
    initials: "ER",
    name: "Elena Rivera",
    handle: "@elena_codes",
    time: "5h ago",
    text: "Just finished the hardware-accelerated UI for the new terminal emulator. Tonal layering and luminescent pulses feel so much better than standard borders.",
    tags: ["Design System", "Rust"],
    likes: 452, comments: 29, shares: 8,
    liked: true,
    avatarColor: "#ff94a8", avatarBg: "rgba(255,148,168,.15)",
  },
  {
    id: 3,
    initials: "SK",
    name: "Soren K.",
    handle: "@soren_kernel",
    time: "8h ago",
    text: "",
    milestone: { quote: "Shipped v2.0 of the decentralized storage layer. 0% downtime during migration.", stat: "142k", statLabel: "requests/s", statCaption: "Peak Throughput" },
    likes: 891, comments: 114, shares: 0,
    liked: false,
    avatarColor: "#60a5fa", avatarBg: "rgba(96,165,250,.12)",
  },
]

export default function Feed() {
  const [likes, setLikes] = useState<Record<number, { count: number; liked: boolean }>>(
    Object.fromEntries(POSTS.map((p) => [p.id, { count: p.likes, liked: p.liked }]))
  )

  function toggleLike(id: number) {
    setLikes((prev) => ({
      ...prev,
      [id]: { count: prev[id].liked ? prev[id].count - 1 : prev[id].count + 1, liked: !prev[id].liked },
    }))
  }

  function fmt(n: number) {
    return n >= 1000 ? (n / 1000).toFixed(1) + "k" : String(n)
  }

  return (
    <div className="relative">
      {/* Live pulse */}
      <div className="flex items-center gap-2 px-6 pt-4">
        <div className="w-2 h-2 rounded-full bg-tertiary shrink-0" />
        <span className="text-[10px] font-bold uppercase tracking-[1px] text-text">
          Live activity from your cluster
        </span>
      </div>

      {/* Posts */}
      <div className="px-6 py-5 flex flex-col gap-8">
        {POSTS.map((post) => (
          <article
            key={post.id}
            className={post.milestone
              ? "bg-bg-surface border border-border rounded-2xl p-6"
              : "border-b border-border pb-8 bg-transparent"
            }
          >
            <div className="flex gap-4">
              {/* Avatar */}
              <div
                className="w-11 h-11 rounded-[10px] flex items-center justify-center text-[13px] font-bold shrink-0"
                style={{ background: post.avatarBg, color: post.avatarColor }}
              >
                {post.initials}
              </div>

              <div className="flex-1 min-w-0">
                {/* Header */}
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="text-[15px] font-bold text-text-h">{post.name}</div>
                    <div className="text-[12px] text-text mt-0.5">{post.handle} · {post.time}</div>
                  </div>
                  <button className="bg-transparent border-none cursor-pointer text-text p-1">
                    <MoreHorizontal size={16} strokeWidth={1.8} />
                  </button>
                </div>

                {/* Text */}
                {post.text && (
                  <p className="text-[14px] text-text leading-[1.7] mb-3">{post.text}</p>
                )}

                {/* Code block */}
                {post.code && (
                  <div className="rounded-[10px] overflow-hidden border border-border mb-3.5">
                    <div className="bg-bg-hover px-3.5 py-2 flex justify-between items-center">
                      <span className="text-[10px] font-mono text-text uppercase tracking-[1px]">scheduler.ts</span>
                    </div>
                    <pre className="m-0 p-4 bg-black text-[12px] font-mono text-accent overflow-x-auto leading-[1.6]">
                      <code>{post.code}</code>
                    </pre>
                  </div>
                )}

                {/* Tags */}
                {post.tags && (
                  <div className="flex gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span key={tag} className="bg-accent-bg text-accent border border-accent-border text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-[0.5px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Milestone */}
                {post.milestone && (
                  <div className="grid gap-3 mb-3.5">
                    <div className="bg-bg-hover border border-border rounded-[10px] p-4">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-[1px] block mb-2">Milestone</span>
                      <p className="text-[13px] text-text-h italic leading-[1.5] m-0">"{post.milestone.quote}"</p>
                    </div>
                    <div className="bg-bg-hover border border-border rounded-[10px] p-4 flex flex-col justify-center">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[28px] font-black text-text-h tracking-tight">{post.milestone.stat}</span>
                        <span className="text-[11px] text-text">{post.milestone.statLabel}</span>
                      </div>
                      <span className="text-[10px] font-bold text-text uppercase tracking-[1px] mt-1">{post.milestone.statCaption}</span>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-6">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className={`flex items-center gap-1.5 bg-transparent border-none cursor-pointer text-[12px] font-bold transition-colors duration-150 p-0 ${likes[post.id].liked ? "text-tertiary" : "text-text"}`}
                  >
                    <Heart size={16} strokeWidth={1.8} fill={likes[post.id].liked ? "currentColor" : "none"} />
                    {fmt(likes[post.id].count)}
                  </button>
                  <button className="flex items-center gap-1.5 bg-transparent border-none cursor-pointer text-[12px] font-bold text-text p-0">
                    <MessageSquare size={16} strokeWidth={1.8} />
                    {post.comments}
                  </button>
                  {post.shares > 0 && (
                    <button className="flex items-center gap-1.5 bg-transparent border-none cursor-pointer text-[12px] font-bold text-text p-0">
                      <Repeat2 size={16} strokeWidth={1.8} />
                      {post.shares}
                    </button>
                  )}
                  <button className="flex items-center gap-1.5 bg-transparent border-none cursor-pointer text-[12px] font-bold text-text p-0">
                    <Share2 size={16} strokeWidth={1.8} />
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* FAB */}
      <button className="fixed right-6 bottom-6 w-[52px] h-[52px] rounded-[12px] bg-accent border-none cursor-pointer flex items-center justify-center z-50">
        <Plus size={20} className="text-[#1a0033]" strokeWidth={2.5} />
      </button>
    </div>
  )
}