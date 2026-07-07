export interface Repository {
  id: string
  name: string
  owner: string
  language: string
  stars: number
  forks: number
  healthScore: number
  lastCommit: string
}

export interface CommitDay {
  date: string
  count: number
}

export interface PullRequest {
  id: number
  title: string
  repo: string
  author: string
  status: "open" | "merged" | "closed"
  createdAt: string
}

export interface Issue {
  id: number
  title: string
  repo: string
  author: string
  status: "open" | "closed"
  priority: "low" | "medium" | "high" | "critical"
  createdAt: string
}

export interface Activity {
  id: string
  type: "push" | "pr" | "issue" | "review"
  repo: string
  message: string
  time: string
}

export interface Notification {
  id: string
  message: string
  repo: string
  read: boolean
  time: string
}

export interface Kpi {
  label: string
  value: string
  change: string
  positive: boolean
}

export type TimeRange = "7d" | "30d" | "90d"
