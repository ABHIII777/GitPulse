"use client"

import { useEffect, useState } from "react"
import type { Activity } from "./types"
import { activities as defaultActivities, simulateDelay } from "./mock"
import { ListSkeleton } from "./Skeleton"
import { EmptyState } from "./EmptyState"

const typeConfig = {
  push: { dot: "bg-blue-400", icon: "↑" },
  pr: { dot: "bg-green-400", icon: "◐" },
  issue: { dot: "bg-orange-400", icon: "○" },
  review: { dot: "bg-purple-400", icon: "✓" },
}

interface ActivityTimelineProps {
  activities?: Activity[]
}

export function ActivityTimeline({ activities }: ActivityTimelineProps) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Activity[]>([])

  useEffect(() => {
    simulateDelay(850).then(() => {
      setData(activities ?? defaultActivities)
      setLoading(false)
    })
  }, [activities])

  if (loading) {
    return <ListSkeleton rows={6} />
  }

  if (data.length === 0) {
    return (
      <EmptyState
        title="No recent activity"
        description="Activity from your repositories will show up here."
      />
    )
  }

  return (
    <div className="border border-white/10 rounded-lg">
      <div className="px-4 py-3 border-b border-white/10">
        <h3 className="text-sm font-medium">Activity Timeline</h3>
      </div>
      <div className="px-4 py-3">
        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />
          <div className="space-y-4">
            {data.map((activity) => {
              const cfg = typeConfig[activity.type]
              return (
                <div key={activity.id} className="flex items-start gap-3 relative">
                  <div className={`w-[15px] h-[15px] rounded-full ${cfg.dot} flex items-center justify-center shrink-0 mt-0.5 relative z-10`}>
                    <span className="text-[8px] text-black font-bold">{cfg.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white/80">{activity.message}</p>
                    <p className="text-xs text-white/40 mt-0.5">{activity.repo}</p>
                  </div>
                  <span className="text-xs text-white/30 shrink-0">{activity.time}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
