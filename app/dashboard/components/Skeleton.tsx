export function CardSkeleton() {
  return (
    <div className="border border-white/10 rounded-lg p-4 animate-pulse">
      <div className="h-3 w-24 bg-white/10 rounded mb-3" />
      <div className="h-7 w-16 bg-white/10 rounded" />
    </div>
  )
}

export function ChartSkeleton() {
  return (
    <div className="border border-white/10 rounded-lg p-4 animate-pulse">
      <div className="h-3 w-32 bg-white/10 rounded mb-4" />
      <div className="flex items-end gap-1 h-32">
        {Array.from({ length: 20 }, (_, i) => (
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

export function ListSkeleton({ rows = 4 }: { rows?: number }) {
  return (
    <div className="border border-white/10 rounded-lg p-4 animate-pulse space-y-3">
      <div className="h-3 w-32 bg-white/10 rounded mb-4" />
      {Array.from({ length: rows }, (_, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-white/10" />
          <div className="flex-1 h-3 bg-white/10 rounded" />
          <div className="h-3 w-12 bg-white/10 rounded" />
        </div>
      ))}
    </div>
  )
}

export function HeatmapSkeleton() {
  return (
    <div className="border border-white/10 rounded-lg p-4 animate-pulse">
      <div className="h-3 w-40 bg-white/10 rounded mb-4" />
      <div className="flex gap-1">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="flex-1 aspect-square bg-white/10 rounded-sm"
          />
        ))}
      </div>
    </div>
  )
}
