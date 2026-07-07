"use client"

import { useEffect, useState } from "react"
import type { Kpi } from "./types"
import { kpis as defaultKpis, simulateDelay } from "./mock"
import { CardSkeleton } from "./Skeleton"

function KpiCard({ kpi }: { kpi: Kpi }) {
  return (
    <div className="border border-white/10 rounded-lg p-4">
      <p className="text-xs text-white/40 mb-1">{kpi.label}</p>
      <div className="flex items-baseline gap-2">
        <p className="text-2xl font-bold">{kpi.value}</p>
        <span
          className={`text-xs font-medium ${
            kpi.positive ? "text-green-400" : "text-red-400"
          }`}
        >
          {kpi.change}
        </span>
      </div>
    </div>
  )
}

interface KpiCardsProps {
  kpis?: Kpi[]
}

export function KpiCards({ kpis }: KpiCardsProps) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Kpi[]>([])

  useEffect(() => {
    simulateDelay().then(() => {
      setData(kpis ?? defaultKpis)
      setLoading(false)
    })
  }, [kpis])

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }, (_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (data.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((kpi) => (
        <KpiCard key={kpi.label} kpi={kpi} />
      ))}
    </div>
  )
}
