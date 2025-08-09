"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"
import {
  LayoutDashboard,
  Sparkles,
  Bookmark,
  History,
  Settings,
  PlusCircle,
  ChevronLeft,
  ChevronRight,
  LogOut,
  UserCircle,
} from "lucide-react"
import { useSupabaseAuth } from "@/components/providers/supabase-auth-provider"

interface SidebarLink {
  href: string
  label: string
  icon: React.ElementType
}

export function DashboardSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const { signOut } = useSupabaseAuth()

  const links: SidebarLink[] = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: "/dashboard/prompts",
      label: "My Prompts",
      icon: Sparkles,
    },
    {
      href: "/dashboard/favorites",
      label: "Favorites",
      icon: Bookmark,
    },
    {
      href: "/dashboard/history",
      label: "History",
      icon: History,
    },
    {
      href: "/dashboard/settings",
      label: "Settings",
      icon: Settings,
    },
    {
      href: "/dashboard/profile",
      label: "Profile",
      icon: UserCircle,
    },
  ]

  return (
    <div
      className={cn(
        "h-screen fixed left-0 top-0 z-30 flex flex-col border-r bg-white transition-all duration-300",
        collapsed ? "w-[3.82rem]" : "w-[14.472rem]", // Golden ratio (61.8:38.2 split)
      )}
    >
      <div className="h-16 flex items-center px-4 border-b">
        {collapsed ? (
          <div className="mx-auto">
            <Logo size="sm" href="/dashboard" />
          </div>
        ) : (
          <Logo href="/dashboard" />
        )}
      </div>

      <div className="flex-1 overflow-auto py-6 px-3">
        <div className="space-y-1">
          {links.map((link) => {
            const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`)

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-gradient-to-r from-jelly-blue to-jelly-pink text-white"
                    : "text-gray-500 hover:text-jelly-blue hover:bg-jelly-blue/10",
                )}
              >
                <link.icon className={cn("h-5 w-5", collapsed ? "mx-auto" : "")} />
                {!collapsed && <span>{link.label}</span>}
              </Link>
            )
          })}
        </div>
      </div>

      <div className="p-3 mt-auto">
        <Link
          href="/dashboard/prompts/new"
          className={cn(
            "flex items-center gap-3 rounded-lg bg-gradient-to-r from-jelly-blue to-jelly-pink text-white px-3 py-2 text-sm font-medium transition-colors hover:from-jelly-blue-dark hover:to-jelly-pink-dark",
          )}
        >
          <PlusCircle className={cn("h-5 w-5", collapsed ? "mx-auto" : "")} />
          {!collapsed && <span>Create Prompt</span>}
        </Link>

        <button
          onClick={() => signOut()}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-red-500 hover:bg-red-50 w-full mt-2 transition-colors",
          )}
        >
          <LogOut className={cn("h-5 w-5", collapsed ? "mx-auto" : "")} />
          {!collapsed && <span>Sign Out</span>}
        </button>
      </div>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 bg-white border rounded-full p-1 text-gray-400 hover:text-jelly-blue"
      >
        {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </button>
    </div>
  )
}
