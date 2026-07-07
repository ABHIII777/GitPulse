"use client"

import { useEffect, useState } from "react"
import { generateCommitActivity, simulateDelay } from "./mock"
import type { CommitDay } from "./types"
import { HeatmapSkeleton } from "./Skeleton"
import { EmptyState } from "./EmptyState"

function getIntensity(count: number, max: number): string {
  const ratio = count / max
  if (ratio === 0) return "bg-white/[0.02]"
  if (ratio <= 0.25) return "bg-green-500/20"
  if (ratio <= 0.5) return "bg-green-500/40"
  if (ratio <= 0.75) return "bg-green-500/60"
  return "bg-green-500/80"
}

interface ContributionHeatmapProps {
  weeks?: number
}

export function ContributionHeatmap({ weeks = 12 }: ContributionHeatmapProps) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<CommitDay[]>([])

  useEffect(() => {
    simulateDelay(900).then(() => {
      setData(generateCommitActivity(weeks * 7))
      setLoading(false)
    })
  }, [weeks])

  if (loading) {
    return <HeatmapSkeleton />
  }

  if (data.length === 0) {
    return (
      <EmptyState
        title="No contribution data"
        description="Commits will appear here once you start pushing code."
      />
    )
  }

  const maxCount = Math.max(...data.map((d) => d.count), 1)
  const days = data
  const weeksArray: CommitDay[][] = []
  for (let i = 0; i < days.length; i += 7) {
    weeksArray.push(days.slice(i, i + 7))
  }

  return (
    <div className="border border-white/10 rounded-lg p-4">
      <h3 className="text-sm font-medium mb-4">Contribution Heatmap</h3>
      <div className="overflow-x-auto">
        <div className="flex gap-1 min-w-fit">
          {weeksArray.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-1">
              {week.map((day) => (
                <div
                  key={day.date}
                  className={`w-3 h-3 rounded-sm ${getIntensity(day.count, maxCount)}`}
                  title={`${day.count} commits on ${day.date}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-1 mt-3 justify-end">
        <span className="text-xs text-white/30">Less</span>
        <div className="w-3 h-3 rounded-sm bg-white/[0.02]" />
        <div className="w-3 h-3 rounded-sm bg-green-500/20" />
        <div className="w-3 h-3 rounded-sm bg-green-500/40" />
        <div className="w-3 h-3 rounded-sm bg-green-500/60" />
        <div className="w-3 h-3 rounded-sm bg-green-500/80" />
        <span className="text-xs text-white/30">More</span>
      </div>
    </div>
  )
}
