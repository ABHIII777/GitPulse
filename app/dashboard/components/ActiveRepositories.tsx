"use client"

import { useEffect, useState } from "react"
import type { Repository } from "./types"
import { repositories as defaultRepos, simulateDelay } from "./mock"
import { ListSkeleton } from "./Skeleton"
import { EmptyState } from "./EmptyState"

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-400",
  Go: "bg-cyan-400",
  MDX: "bg-purple-400",
  Swift: "bg-orange-400",
  Rust: "bg-orange-600",
}

interface ActiveRepositoriesProps {
  repositories?: Repository[]
}

export function ActiveRepositories({ repositories }: ActiveRepositoriesProps) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Repository[]>([])

  useEffect(() => {
    simulateDelay(650).then(() => {
      setData(repositories ?? defaultRepos)
      setLoading(false)
    })
  }, [repositories])

  if (loading) {
    return <ListSkeleton rows={5} />
  }

  if (data.length === 0) {
    return (
      <EmptyState
        title="No repositories yet"
        description="Create your first repository to get started."
        action={{ label: "New repository" }}
      />
    )
  }

  return (
    <div className="border border-white/10 rounded-lg">
      <div className="px-4 py-3 border-b border-white/10">
        <h3 className="text-sm font-medium">Active Repositories</h3>
      </div>
      <div className="divide-y divide-white/5">
        {data.map((repo) => (
          <div key={repo.id} className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className={`w-2 h-2 rounded-full shrink-0 ${languageColors[repo.language] || "bg-white/20"}`} />
              <div className="min-w-0">
                <p className="text-sm font-medium truncate">{repo.name}</p>
                <p className="text-xs text-white/40">{repo.language}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-white/40 shrink-0">
              <span>⭐ {repo.stars}</span>
              <span>⑂ {repo.forks}</span>
              <span className="text-white/30">{repo.lastCommit}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
