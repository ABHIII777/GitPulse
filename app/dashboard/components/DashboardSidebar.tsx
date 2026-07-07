"use client"

import { useRouter } from "next/navigation"

const navItems = [
  { label: "Overview", active: true },
  { label: "Repositories", active: false },
  { label: "Activity", active: false },
  { label: "Team", active: false },
  { label: "Settings", active: false },
]

export default function DashboardSidebar() {
  const router = useRouter()

  return (
    <aside className="w-56 border-r border-white/10 flex flex-col shrink-0">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
        <button onClick={() => router.push("/")} className="flex items-center gap-3">
          <div className="grid grid-cols-2 gap-0.5">
            <div className="w-2 h-2 bg-white/80" />
            <div className="w-2 h-2 bg-white/40" />
            <div className="w-2 h-2 bg-white/40" />
            <div className="w-2 h-2 bg-white/80" />
          </div>
          <span className="text-base font-semibold tracking-tight">GitPulse</span>
        </button>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
              item.active
                ? "bg-white/10 text-white font-medium"
                : "text-white/50 hover:text-white hover:bg-white/5"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="px-5 py-4 border-t border-white/10">
        <div className="flex items-center gap-3 text-sm">
          <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs">
            U
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">User</p>
            <p className="text-xs text-white/40 truncate">user@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
