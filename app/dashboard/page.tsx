"use client"
import { useRouter } from "next/navigation"

const navItems = [
  { label: "Overview", active: true },
  { label: "Repositories", active: false },
  { label: "Activity", active: false },
  { label: "Team", active: false },
  { label: "Settings", active: false },
]

export default function DashboardPage() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white">
      <aside className="w-56 border-r border-white/10 flex flex-col">
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

      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h1 className="text-lg font-semibold">Overview</h1>
          <button className="px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-white/90 transition-colors">
            New repository
          </button>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { label: "Total Repositories", value: "12" },
              { label: "Open Pull Requests", value: "4" },
              { label: "Active Contributors", value: "8" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border border-white/10 rounded-lg p-4"
              >
                <p className="text-xs text-white/40 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="border border-white/10 rounded-lg">
            <div className="px-4 py-3 border-b border-white/10">
              <h2 className="text-sm font-medium">Recent Activity</h2>
            </div>
            <div className="divide-y divide-white/5">
              {[
                { repo: "frontend-app", action: "Pushed 3 commits", time: "2m ago" },
                { repo: "api-service", action: "Opened PR #42", time: "15m ago" },
                { repo: "docs-site", action: "Merged PR #18", time: "1h ago" },
                { repo: "mobile-app", action: "Created issue #7", time: "3h ago" },
              ].map((event, i) => (
                <div key={i} className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div>
                      <span className="text-sm font-medium">{event.repo}</span>
                      <span className="text-sm text-white/50 ml-2">{event.action}</span>
                    </div>
                  </div>
                  <span className="text-xs text-white/30">{event.time}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
