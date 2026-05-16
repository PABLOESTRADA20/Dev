const TRENDS = [
  { category: "Diseño · Popular", name: "#sistemaDiseño",  count: "84 posts"       },
  { category: "Dev · Activo",     name: "#typescript",     count: "230 posts"      },
  { category: "Evento · Hoy",     name: "Sprint Review",   count: "18 asistentes"  },
]

const MEMBERS = [
  { name: "Juan Pérez",   role: "Developer", status: "online",  initials: "JP", bg: "#3b82f6" },
  { name: "María García", role: "Designer",  status: "away",    initials: "MG", bg: "#8b5cf6" },
  { name: "Carlos López", role: "PM",        status: "offline", initials: "CL", bg: "#ec4899" },
]

const STATUS_COLOR: Record<string, string> = {
  online:  "#3ba55d",
  away:    "#f59e0b",
  offline: "#6b7280",
}

export default function RightPanel() {
  return (
    <aside className="w-[260px] shrink-0 border-l border-border bg-bg-surface overflow-y-auto flex flex-col">

      {/* Tendencias */}
      <div className="px-5 pt-5">
        <div className="text-[11px] font-extrabold uppercase tracking-[1.5px] text-text opacity-60 mb-3">
          Tendencias
        </div>
        {TRENDS.map((t) => (
          <div
            key={t.name}
            className="py-3 border-b border-border cursor-pointer hover:opacity-80 transition-opacity duration-150 last:border-0"
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.5px] text-text opacity-60 mb-0.5">
              {t.category}
            </div>
            <div className="text-[13px] font-bold text-text-h mb-0.5">{t.name}</div>
            <div className="text-[11px] text-text opacity-60">{t.count}</div>
          </div>
        ))}
      </div>

      <div className="h-px bg-border mx-5 my-3" />

      {/* Miembros online */}
      <div className="px-5 pb-5">
        <div className="text-[11px] font-extrabold uppercase tracking-[1.5px] text-text opacity-60 mb-3">
          En línea
        </div>
        {MEMBERS.map((m) => (
          <div
            key={m.name}
            className="flex items-center gap-3 py-2.5 border-b border-border last:border-0"
          >
            {/* Avatar */}
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold text-white shrink-0"
              style={{ background: m.bg }}
            >
              {m.initials}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="text-[12px] font-bold text-text-h leading-tight">{m.name}</div>
              <div className="text-[10px] text-text opacity-60">{m.role}</div>
            </div>

            {/* Status dot */}
            <div
              className="w-2 h-2 rounded-full shrink-0"
              style={{ background: STATUS_COLOR[m.status] }}
            />
          </div>
        ))}
      </div>
    </aside>
  )
}