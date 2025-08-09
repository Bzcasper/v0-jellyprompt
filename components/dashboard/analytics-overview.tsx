import { AnalyticsCard } from "@/components/dashboard/analytics-card"
import { Sparkles, Bookmark, FileText, Zap } from "lucide-react"

export function AnalyticsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <AnalyticsCard
        title="Total Prompts Used"
        value="124"
        icon={<Sparkles className="h-5 w-5" />}
        change={{
          value: 12,
          type: "increase",
          text: "from last month",
        }}
      />

      <AnalyticsCard
        title="Favorite Prompts"
        value="18"
        icon={<Bookmark className="h-5 w-5" />}
        change={{
          value: 5,
          type: "increase",
          text: "from last month",
        }}
      />

      <AnalyticsCard
        title="Content Generated"
        value="56"
        icon={<FileText className="h-5 w-5" />}
        change={{
          value: 8,
          type: "increase",
          text: "from last month",
        }}
      />

      <AnalyticsCard
        title="API Credits Used"
        value="2,450"
        icon={<Zap className="h-5 w-5" />}
        change={{
          value: 3,
          type: "decrease",
          text: "from last month",
        }}
      />
    </div>
  )
}
