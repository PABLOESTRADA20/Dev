const IconSearch = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
)

export default function Topbar() {
  return (
    <header className="flex items-center justify-between px-6 h-14 bg-bg-surface border-b border-border sticky top-0 z-30">
      <div className="text-[15px] font-black text-text-h tracking-tight">Devsanctum</div>
      <div className="flex items-center gap-2 bg-bg border border-border rounded-lg px-3 py-2 text-[12px] text-text opacity-60 cursor-text w-64">
        <IconSearch />
        <span>Explorar el contenido</span>
      </div>
    </header>
  )
}