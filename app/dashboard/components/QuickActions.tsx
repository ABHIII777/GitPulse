"use client"

const actions = [
  { label: "New Repository", icon: "+", description: "Create a new repo" },
  { label: "New Pull Request", icon: "◐", description: "Open a PR" },
  { label: "New Issue", icon: "○", description: "Report a bug or feature" },
  { label: "Invite Member", icon: "👥", description: "Add a team member" },
]

export function QuickActions() {
  return (
    <div className="border border-white/10 rounded-lg p-4">
      <h3 className="text-sm font-medium mb-3">Quick Actions</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {actions.map((action) => (
          <button
            key={action.label}
            className="flex flex-col items-center gap-1.5 px-3 py-4 border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
          >
            <span className="text-lg">{action.icon}</span>
            <span className="text-sm font-medium">{action.label}</span>
            <span className="text-[10px] text-white/40">{action.description}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
