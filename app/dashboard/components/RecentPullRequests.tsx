"use client"

import { useEffect, useState } from "react"
import type { PullRequest } from "./types"
import { pullRequests as defaultPRs, simulateDelay } from "./mock"
import { ListSkeleton } from "./Skeleton"
import { EmptyState } from "./EmptyState"

const statusConfig = {
  open: { dot: "bg-green-400", label: "Open" },
  merged: { dot: "bg-purple-400", label: "Merged" },
  closed: { dot: "bg-red-400", label: "Closed" },
}

interface RecentPullRequestsProps {
  pullRequests?: PullRequest[]
}

export function RecentPullRequests({ pullRequests }: RecentPullRequestsProps) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<PullRequest[]>([])

  useEffect(() => {
    simulateDelay(750).then(() => {
      setData(pullRequests ?? defaultPRs)
      setLoading(false)
    })
  }, [pullRequests])

  if (loading) {
    return <ListSkeleton rows={5} />
  }

  if (data.length === 0) {
    return (
      <EmptyState
        title="No pull requests"
        description="Pull requests from your repositories will show up here."
      />
    )
  }

  return (
    <div className="border border-white/10 rounded-lg">
      <div className="px-4 py-3 border-b border-white/10">
        <h3 className="text-sm font-medium">Recent Pull Requests</h3>
      </div>
      <div className="divide-y divide-white/5">
        {data.map((pr) => {
          const cfg = statusConfig[pr.status]
          return (
            <div key={pr.id} className="px-4 py-3">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${cfg.dot}`} />
                    <p className="text-sm font-medium truncate">{pr.title}</p>
                  </div>
                  <p className="text-xs text-white/40 mt-0.5 ml-4">
                    #{pr.id} in {pr.repo} by {pr.author}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className={`text-xs font-medium ${cfg.dot.replace("bg-", "text-")}`}>
                    {cfg.label}
                  </span>
                  <span className="text-xs text-white/30">{pr.createdAt}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
