"use client"
import { useRouter } from "next/navigation"

export default function Hero() {
  const router = useRouter()

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs text-white/50 border border-white/10 rounded-full">
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
        Open source · Free to use
      </div>

      <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
        GitPulse
      </h1>

      <p className="text-lg text-white/50 mb-10 max-w-lg mx-auto leading-relaxed">
        The open source developer dashboard. Track your repositories, monitor activity, and collaborate with your team in real time.
      </p>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => router.push("/signup")}
          className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors"
        >
          Get started
        </button>
        <button
          onClick={() => router.push("/dashboard")}
          className="px-6 py-3 border border-white/20 text-white/80 font-medium rounded-lg hover:bg-white/5 transition-colors"
        >
          View dashboard
        </button>
      </div>
    </div>
  )
}
