"use client"

import { useEffect, useState } from "react"
import { repositories, simulateDelay } from "./mock"
import type { Repository } from "./types"

function HealthRing({ score }: { score: number }) {
  const radius = 36
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference
  const color =
    score >= 90 ? "#22c55e" : score >= 75 ? "#eab308" : score >= 60 ? "#f97316" : "#ef4444"

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="96" height="96" className="-rotate-90">
        <circle cx="48" cy="48" r={radius} fill="none" stroke="white" strokeWidth="6" opacity={0.1} />
        <circle
          cx="48"
          cy="48"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000"
        />
      </svg>
      <span className="absolute text-2xl font-bold" style={{ color }}>{score}</span>
    </div>
  )
}

function MetricRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-white/50">{label}</span>
      <span className="text-white font-medium">{value}</span>
    </div>
  )
}

interface HealthScoreProps {
  repository?: Repository
}

export function HealthScore({ repository }: HealthScoreProps) {
  const [loading, setLoading] = useState(true)
  const [repo, setRepo] = useState<Repository | null>(null)

  useEffect(() => {
    simulateDelay(600).then(() => {
      setRepo(repository ?? repositories[0])
      setLoading(false)
    })
  }, [repository])

  if (loading) {
    return (
      <div className="border border-white/10 rounded-lg p-4 animate-pulse">
        <div className="h-3 w-36 bg-white/10 rounded mb-6" />
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-white/10" />
        </div>
        <div className="space-y-2">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="h-4 bg-white/10 rounded" />
          ))}
        </div>
      </div>
    )
  }

  if (!repo) {
    return null
  }

  const metrics = [
    { label: "Code Coverage", value: "87%" },
    { label: "CI Pass Rate", value: "94%" },
    { label: "Dependency Health", value: "3 outdated" },
    { label: "Security Alerts", value: "0 critical" },
  ]

  return (
    <div className="border border-white/10 rounded-lg p-4">
      <h3 className="text-sm font-medium mb-4">Repository Health Score</h3>
      <div className="relative flex justify-center items-center mb-6">
        <HealthRing score={repo.healthScore} />
        <span className="text-xs text-white/40 text-center mt-20">
          {repo.name}
        </span>
      </div>
      <div className="space-y-2">
        {metrics.map((m) => (
          <MetricRow key={m.label} label={m.label} value={m.value} />
        ))}
      </div>
    </div>
  )
}
