"use client"

import { useEffect, useState } from "react"
import { simulateDelay } from "./mock"

const summaries = [
  "frontend-app is healthy — 3 PRs merged in the last 24h. Consider reviewing the 2 open issues tagged 'bug'.",
  "api-service has 1 critical security alert. Dependency updates are 2 weeks behind.",
  "Overall, your repos have a 92% CI pass rate. Great momentum this week!",
]

export function AiSummary() {
  const [loading, setLoading] = useState(true)
  const [summary, setSummary] = useState("")

  useEffect(() => {
    simulateDelay(1000).then(() => {
      setSummary(summaries.join(" "))
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <div className="border border-white/10 rounded-lg p-4 animate-pulse">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 rounded-full bg-white/10" />
          <div className="h-3 w-24 bg-white/10 rounded" />
        </div>
        <div className="space-y-2">
          <div className="h-3 bg-white/10 rounded w-full" />
          <div className="h-3 bg-white/10 rounded w-5/6" />
          <div className="h-3 bg-white/10 rounded w-4/6" />
        </div>
      </div>
    )
  }

  if (!summary) {
    return null
  }

  return (
    <div className="border border-white/10 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">✨</span>
        <h3 className="text-sm font-medium">AI Summary</h3>
      </div>
      <p className="text-sm text-white/70 leading-relaxed">{summary}</p>
    </div>
  )
}
