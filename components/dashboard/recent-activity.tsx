import { BrandCard } from "@/components/ui/brand-card"
import { BrandButton } from "@/components/ui/brand-button"
import { Badge } from "@/components/ui/badge"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"

interface ActivityItem {
  id: string
  type: "generation" | "favorite" | "prompt_creation"
  title: string
  category: string
  timestamp: Date
}

interface RecentActivityProps {
  activities: ActivityItem[]
}

export function RecentActivity({ activities }: RecentActivityProps) {
  const getActivityIcon = (type: ActivityItem["type"]) => {
    switch (type) {
      case "generation":
        return "🔄"
      case "favorite":
        return "⭐"
      case "prompt_creation":
        return "✏️"
      default:
        return "📝"
    }
  }

  const getActivityText = (activity: ActivityItem) => {
    switch (activity.type) {
      case "generation":
        return `Generated content using "${activity.title}"`
      case "favorite":
        return `Added "${activity.title}" to favorites`
      case "prompt_creation":
        return `Created a new prompt: "${activity.title}"`
      default:
        return `Interacted with "${activity.title}"`
    }
  }

  return (
    <BrandCard>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Recent Activity</h3>
          <BrandButton variant="outline-blue" size="sm" asChild>
            <Link href="/dashboard/activity">View All</Link>
          </BrandButton>
        </div>

        <div className="space-y-4">
          {activities.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No recent activity</p>
          ) : (
            activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 pb-4 border-b last:border-0">
                <div className="text-2xl">{getActivityIcon(activity.type)}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{getActivityText(activity)}</p>
                  <div className="flex items-center mt-1">
                    <Badge variant="outline" className="mr-2 bg-jelly-blue/10 text-jelly-blue border-jelly-blue/20">
                      {activity.category}
                    </Badge>
                    <span className="text-xs text-gray-500">
                      {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </BrandCard>
  )
}
