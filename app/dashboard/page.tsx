import { Suspense } from "react"
import DashboardSidebar from "./components/DashboardSidebar"
import RepositorySelector from "./components/RepositorySelector"
import { KpiCards } from "./components/KpiCards"
import { HealthScore } from "./components/HealthScore"
import { CommitActivity } from "./components/CommitActivity"
import { ContributionHeatmap } from "./components/ContributionHeatmap"
import { ActiveRepositories } from "./components/ActiveRepositories"
import { RecentPullRequests } from "./components/RecentPullRequests"
import { RecentIssues } from "./components/RecentIssues"
import { AiSummary } from "./components/AiSummary"
import { ActivityTimeline } from "./components/ActivityTimeline"
import { RecentNotifications } from "./components/RecentNotifications"
import { QuickActions } from "./components/QuickActions"
import { CardSkeleton, ListSkeleton, HeatmapSkeleton, ChartSkeleton } from "./components/Skeleton"

function SectionFallback({ children }: { children: React.ReactNode }) {
  return <div className="animate-pulse">{children}</div>
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h1 className="text-lg font-semibold">Overview</h1>
          <div className="flex items-center gap-4">
            <RepositorySelector />
            <button className="px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-white/90 transition-colors">
              New repository
            </button>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto space-y-6">
          <Suspense fallback={<SectionFallback><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{Array.from({ length: 4 }, (_, i) => <CardSkeleton key={i} />)}</div></SectionFallback>}>
            <KpiCards />
          </Suspense>

          <Suspense fallback={<SectionFallback><AiSummarySkeleton /></SectionFallback>}>
            <AiSummary />
          </Suspense>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Suspense fallback={<SectionFallback><CardSkeleton /></SectionFallback>}>
              <HealthScore />
            </Suspense>
            <Suspense fallback={<SectionFallback><ChartSkeleton /></SectionFallback>}>
              <CommitActivity />
            </Suspense>
          </div>

          <Suspense fallback={<SectionFallback><HeatmapSkeleton /></SectionFallback>}>
            <ContributionHeatmap />
          </Suspense>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Suspense fallback={<SectionFallback><ListSkeleton rows={5} /></SectionFallback>}>
              <ActiveRepositories />
            </Suspense>
            <Suspense fallback={<SectionFallback><ListSkeleton rows={5} /></SectionFallback>}>
              <RecentPullRequests />
            </Suspense>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Suspense fallback={<SectionFallback><ListSkeleton rows={5} /></SectionFallback>}>
              <RecentIssues />
            </Suspense>
            <Suspense fallback={<SectionFallback><ListSkeleton rows={6} /></SectionFallback>}>
              <ActivityTimeline />
            </Suspense>
          </div>

          <Suspense fallback={<SectionFallback><ListSkeleton rows={5} /></SectionFallback>}>
            <RecentNotifications />
          </Suspense>

          <QuickActions />
        </main>
      </div>
    </div>
  )
}

function AiSummarySkeleton() {
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
