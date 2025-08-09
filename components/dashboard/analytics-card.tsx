import type React from "react"
import { BrandCard } from "@/components/ui/brand-card"
import { cn } from "@/lib/utils"
import { ArrowUp, ArrowDown, Minus } from "lucide-react"

interface AnalyticsCardProps {
  title: string
  value: string | number
  icon: React.ReactNode
  change?: {
    value: number
    type: "increase" | "decrease" | "neutral"
    text: string
  }
  className?: string
}

export function AnalyticsCard({ title, value, icon, change, className }: AnalyticsCardProps) {
  return (
    <BrandCard className={cn("overflow-hidden", className)}>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
          </div>
          <div className="p-2 rounded-full bg-jelly-blue/10 text-jelly-blue">{icon}</div>
        </div>

        {change && (
          <div className="mt-4 flex items-center">
            {change.type === "increase" ? (
              <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
            ) : change.type === "decrease" ? (
              <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
            ) : (
              <Minus className="h-4 w-4 text-gray-500 mr-1" />
            )}
            <span
              className={cn(
                "text-sm",
                change.type === "increase"
                  ? "text-green-500"
                  : change.type === "decrease"
                    ? "text-red-500"
                    : "text-gray-500",
              )}
            >
              {change.value}% {change.text}
            </span>
          </div>
        )}
      </div>
    </BrandCard>
  )
}
