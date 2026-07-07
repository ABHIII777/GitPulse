"use client"

import { useEffect, useState } from "react"
import type { Notification } from "./types"
import { notifications as defaultNotifications, simulateDelay } from "./mock"
import { ListSkeleton } from "./Skeleton"
import { EmptyState } from "./EmptyState"

interface RecentNotificationsProps {
  notifications?: Notification[]
}

export function RecentNotifications({ notifications }: RecentNotificationsProps) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Notification[]>([])

  useEffect(() => {
    simulateDelay(600).then(() => {
      setData(notifications ?? defaultNotifications)
      setLoading(false)
    })
  }, [notifications])

  if (loading) {
    return <ListSkeleton rows={5} />
  }

  if (data.length === 0) {
    return (
      <EmptyState
        title="All caught up"
        description="No new notifications."
        icon="✅"
      />
    )
  }

  return (
    <div className="border border-white/10 rounded-lg">
      <div className="px-4 py-3 border-b border-white/10">
        <h3 className="text-sm font-medium">Recent Notifications</h3>
      </div>
      <div className="divide-y divide-white/5">
        {data.map((n) => (
          <div
            key={n.id}
            className={`px-4 py-3 flex items-start gap-3 ${!n.read ? "bg-white/[0.02]" : ""}`}
          >
            <div
              className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                n.read ? "bg-white/10" : "bg-blue-400"
              }`}
            />
            <div className="flex-1 min-w-0">
              <p className={`text-sm ${n.read ? "text-white/60" : "text-white/90 font-medium"}`}>
                {n.message}
              </p>
              <p className="text-xs text-white/30 mt-0.5">{n.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
