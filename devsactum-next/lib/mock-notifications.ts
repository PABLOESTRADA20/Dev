import type { Notification } from "@/types"

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: "n1",
    type: "like",
    actor: { id: "u1", name: "Sarah Chen", initials: "SC", avatarGradient: "linear-gradient(135deg,#c49aff,#7c6fe0)" },
    postPreview: "Optimizing the hydration loop for the new reactive engine...",
    read: false,
    createdAt: "Hace 5 min",
  },
  {
    id: "n2",
    type: "comment",
    actor: { id: "u2", name: "Alex Rivet", initials: "AR", avatarGradient: "linear-gradient(135deg,#ff94a8,#f43f5e)" },
    postPreview: "Why We Migrated Our Edge Runtime to Rust...",
    read: false,
    createdAt: "Hace 18 min",
  },
  {
    id: "n3",
    type: "follow",
    actor: { id: "u3", name: "Dev Guru", initials: "DG", avatarGradient: "linear-gradient(135deg,#60a5fa,#2563eb)" },
    read: false,
    createdAt: "Hace 34 min",
  },
  {
    id: "n4",
    type: "mention",
    actor: { id: "u4", name: "oxide_dev", initials: "OD", avatarGradient: "linear-gradient(135deg,#4ade80,#16a34a)" },
    postPreview: "Análisis profundo de la gestión de memoria en v1.75...",
    read: false,
    createdAt: "Hace 1h",
  },
  {
    id: "n5",
    type: "share",
    actor: { id: "u5", name: "frontend_queen", initials: "FQ", avatarGradient: "linear-gradient(135deg,#f59e0b,#d97706)" },
    postPreview: "The Future of Decentralized Infrastructure...",
    read: true,
    createdAt: "Hace 3h",
  },
  {
    id: "n6",
    type: "like",
    actor: { id: "u6", name: "Soren K.", initials: "SK", avatarGradient: "linear-gradient(135deg,#c49aff,#7c6fe0)" },
    postPreview: "Layer 7 smart proxy with built-in eBPF observability...",
    read: true,
    createdAt: "Hace 5h",
  },
  {
    id: "n7",
    type: "comment",
    actor: { id: "u7", name: "María R.", initials: "MR", avatarGradient: "linear-gradient(135deg,#ff94a8,#f43f5e)" },
    postPreview: "Core engine for vector similarity search using HNSW...",
    read: true,
    createdAt: "Ayer",
  },
]