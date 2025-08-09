import type React from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // The sidebar width is 14.472rem (based on golden ratio)
  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="flex-1 ml-[14.472rem]">
        {" "}
        {/* Match the expanded sidebar width */}
        <main className="p-8">{children}</main>
      </div>
    </div>
  )
}
