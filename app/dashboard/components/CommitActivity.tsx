"use client"

import { useEffect, useState } from "react"
import { generateCommitActivity, simulateDelay } from "./mock"
import type { CommitDay } from "./types"

interface CommitActivityProps {
  days?: number
}

export function CommitActivity({ days = 30 }: CommitActivityProps) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<CommitDay[]>([])

  useEffect(() => {
    simulateDelay(700).then(() => {
      setData(generateCommitActivity(days))
      setLoading(false)
    })
  }, [days])

  if (loading) {
    return (
      <div className="border border-white/10 rounded-lg p-4 animate-pulse">
        <div className="h-3 w-32 bg-white/10 rounded mb-4" />
        <div className="flex items-end gap-1 h-32">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className="flex-1 bg-white/10 rounded-t"
              style={{ height: `${(Math.random() * 60 + 20)}%` }}
            />
          ))}
        </div>
      </div>
    )
  }

  if (data.length === 0) {
    return null
  }

  const maxCount = Math.max(...data.map((d) => d.count))

  return (
    <div className="border border-white/10 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium">Commit Activity</h3>
        <span className="text-xs text-white/40">Last {days} days</span>
      </div>
      <div className="flex items-end gap-[3px] h-32">
        {data.map((day) => {
          const height = (day.count / maxCount) * 100
          return (
            <div
              key={day.date}
              className="flex-1 relative group"
            >
              <div
                className="w-full bg-white/20 hover:bg-white/40 rounded-t transition-colors"
                style={{ height: `${height}%` }}
              />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-white/10 backdrop-blur text-xs text-white px-2 py-1 rounded whitespace-nowrap z-10">
                {day.count} commits on {day.date}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
