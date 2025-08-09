import { AnalyticsOverview } from "@/components/dashboard/analytics-overview"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { BrandCard } from "@/components/ui/brand-card"
import { BrandButton } from "@/components/ui/brand-button"
import Link from "next/link"
import { BarChart3, TrendingUp } from "lucide-react"

// Sample data
const recentActivities = [
  {
    id: "1",
    type: "generation" as const,
    title: "Blog Post Outline Generator",
    category: "Content Writing",
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
  },
  {
    id: "2",
    type: "favorite" as const,
    title: "Product Description Generator",
    category: "Marketing",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
  },
  {
    id: "3",
    type: "prompt_creation" as const,
    title: "SEO Meta Description Generator",
    category: "Marketing",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
  },
  {
    id: "4",
    type: "generation" as const,
    title: "Email Newsletter Template",
    category: "Marketing",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <BrandButton variant="outline-blue" size="sm" asChild>
          <Link href="/browse">Browse Prompts</Link>
        </BrandButton>
      </div>

      <AnalyticsOverview />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentActivity activities={recentActivities} />
        </div>

        <div>
          <BrandCard>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Usage Trends</h3>
                <TrendingUp className="h-5 w-5 text-jelly-blue" />
              </div>

              <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                <BarChart3 className="h-12 w-12 mb-4 opacity-20" />
                <p className="text-center">Usage statistics will appear here as you use more prompts.</p>
              </div>
            </div>
          </BrandCard>
        </div>
      </div>
    </div>
  )
}
