"use client"

import { useEffect, useState } from "react"
import type { Issue } from "./types"
import { issues as defaultIssues, simulateDelay } from "./mock"
import { ListSkeleton } from "./Skeleton"
import { EmptyState } from "./EmptyState"

const priorityColors: Record<string, string> = {
  critical: "text-red-400 bg-red-400/10 border-red-400/20",
  high: "text-orange-400 bg-orange-400/10 border-orange-400/20",
  medium: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  low: "text-white/40 bg-white/5 border-white/10",
}

interface RecentIssuesProps {
  issues?: Issue[]
}

export function RecentIssues({ issues }: RecentIssuesProps) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Issue[]>([])

  useEffect(() => {
    simulateDelay(800).then(() => {
      setData(issues ?? defaultIssues)
      setLoading(false)
    })
  }, [issues])

  if (loading) {
    return <ListSkeleton rows={5} />
  }

  if (data.length === 0) {
    return (
      <EmptyState
        title="No open issues"
        description="Issues from your repositories will appear here."
      />
    )
  }

  return (
    <div className="border border-white/10 rounded-lg">
      <div className="px-4 py-3 border-b border-white/10">
        <h3 className="text-sm font-medium">Recent Issues</h3>
      </div>
      <div className="divide-y divide-white/5">
        {data.map((issue) => (
          <div key={issue.id} className="px-4 py-3">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${priorityColors[issue.priority] || priorityColors.low}`}
                  >
                    {issue.priority}
                  </span>
                  <p className="text-sm font-medium truncate">{issue.title}</p>
                </div>
                <p className="text-xs text-white/40 mt-0.5">
                  #{issue.id} in {issue.repo} by {issue.author}
                </p>
              </div>
              <span className="text-xs text-white/30 shrink-0">{issue.createdAt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
