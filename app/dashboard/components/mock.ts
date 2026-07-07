import type { Repository, CommitDay, PullRequest, Issue, Activity, Notification, Kpi } from "./types"

export const repositories: Repository[] = [
  { id: "1", name: "frontend-app", owner: "abhipatel", language: "TypeScript", stars: 124, forks: 34, healthScore: 92, lastCommit: "2m ago" },
  { id: "2", name: "api-service", owner: "abhipatel", language: "Go", stars: 67, forks: 12, healthScore: 78, lastCommit: "15m ago" },
  { id: "3", name: "docs-site", owner: "abhipatel", language: "MDX", stars: 23, forks: 8, healthScore: 95, lastCommit: "1h ago" },
  { id: "4", name: "mobile-app", owner: "abhipatel", language: "Swift", stars: 89, forks: 21, healthScore: 71, lastCommit: "3h ago" },
  { id: "5", name: "cli-tool", owner: "abhipatel", language: "Rust", stars: 256, forks: 43, healthScore: 88, lastCommit: "5h ago" },
]

export const kpis: Kpi[] = [
  { label: "Total Repositories", value: "12", change: "+2", positive: true },
  { label: "Open Pull Requests", value: "8", change: "+3", positive: true },
  { label: "Active Contributors", value: "14", change: "+5", positive: true },
  { label: "Open Issues", value: "23", change: "-4", positive: false },
]

export function generateCommitActivity(days: number): CommitDay[] {
  return Array.from({ length: days }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - (days - 1 - i))
    const dateStr = d.toISOString().split("T")[0]
    const count = Math.floor(Math.random() * 18) + 1
    return { date: dateStr, count }
  })
}

export const pullRequests: PullRequest[] = [
  { id: 42, title: "Fix authentication flow", repo: "api-service", author: "alice", status: "open", createdAt: "2h ago" },
  { id: 41, title: "Add dark mode support", repo: "frontend-app", author: "bob", status: "merged", createdAt: "5h ago" },
  { id: 40, title: "Update API documentation", repo: "docs-site", author: "charlie", status: "open", createdAt: "1d ago" },
  { id: 39, title: "Refactor database queries", repo: "api-service", author: "alice", status: "merged", createdAt: "2d ago" },
  { id: 38, title: "Fix responsive layout", repo: "frontend-app", author: "bob", status: "closed", createdAt: "3d ago" },
]

export const issues: Issue[] = [
  { id: 7, title: "Memory leak in WebSocket connection", repo: "api-service", author: "alice", status: "open", priority: "high", createdAt: "3h ago" },
  { id: 6, title: "Button styles broken on Safari", repo: "frontend-app", author: "bob", status: "open", priority: "medium", createdAt: "1d ago" },
  { id: 5, title: "Add rate limiting to API", repo: "api-service", author: "charlie", status: "open", priority: "high", createdAt: "2d ago" },
  { id: 4, title: "Typo in landing page hero", repo: "docs-site", author: "alice", status: "closed", priority: "low", createdAt: "3d ago" },
  { id: 3, title: "Crash on empty state", repo: "mobile-app", author: "bob", status: "open", priority: "critical", createdAt: "4d ago" },
]

export const activities: Activity[] = [
  { id: "a1", type: "push", repo: "frontend-app", message: "Pushed 3 commits to main", time: "2m ago" },
  { id: "a2", type: "pr", repo: "api-service", message: "Opened PR #42", time: "15m ago" },
  { id: "a3", type: "issue", repo: "docs-site", message: "Closed issue #18", time: "1h ago" },
  { id: "a4", type: "review", repo: "mobile-app", message: "Reviewed PR #7", time: "3h ago" },
  { id: "a5", type: "push", repo: "cli-tool", message: "Pushed 1 commit to feature-branch", time: "5h ago" },
  { id: "a6", type: "pr", repo: "frontend-app", message: "Merged PR #39", time: "8h ago" },
]

export const notifications: Notification[] = [
  { id: "n1", message: "PR #42 opened in api-service", repo: "api-service", read: false, time: "2m ago" },
  { id: "n2", message: "Issue #7 assigned to you", repo: "api-service", read: false, time: "1h ago" },
  { id: "n3", message: "Deploy succeeded for frontend-app", repo: "frontend-app", read: false, time: "3h ago" },
  { id: "n4", message: "New contributor joined cli-tool", repo: "cli-tool", read: true, time: "5h ago" },
  { id: "n5", message: "Build failed on main in docs-site", repo: "docs-site", read: true, time: "1d ago" },
]

export function simulateDelay(ms = 800): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
