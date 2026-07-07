export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid grid-cols-2 gap-0.5">
        <div className="w-2 h-2 bg-white/80" />
        <div className="w-2 h-2 bg-white/40" />
        <div className="w-2 h-2 bg-white/40" />
        <div className="w-2 h-2 bg-white/80" />
      </div>
      <span className="text-lg font-semibold tracking-tight">GitPulse</span>
    </div>
  )
}
