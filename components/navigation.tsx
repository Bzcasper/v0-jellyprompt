"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useSupabaseAuth } from "@/components/providers/supabase-auth-provider"
import { Sparkles, BookOpen, Home, LayoutDashboard, LogIn } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()
  const { user, signOut, isLoading } = useSupabaseAuth()

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
      icon: Home,
    },
    {
      href: "/browse",
      label: "Browse Prompts",
      active: pathname === "/browse",
      icon: BookOpen,
    },
  ]

  const authRoutes = user
    ? [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname === "/dashboard",
          icon: LayoutDashboard,
        },
      ]
    : [
        {
          href: "/login",
          label: "Login",
          active: pathname === "/login",
          icon: LogIn,
        },
      ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-emerald-500" />
            <span className="font-bold">LLM Prompt Hub</span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center space-x-1 md:space-x-2">
          {routes.map((route) => (
            <Button key={route.href} asChild variant={route.active ? "secondary" : "ghost"} size="sm">
              <Link href={route.href} className="flex items-center gap-1">
                <route.icon className="h-4 w-4" />
                <span className="hidden md:inline">{route.label}</span>
              </Link>
            </Button>
          ))}
        </nav>
        <div className="flex items-center space-x-1 md:space-x-2">
          {!isLoading &&
            authRoutes.map((route) => (
              <Button key={route.href} asChild variant={route.active ? "secondary" : "ghost"} size="sm">
                <Link href={route.href} className="flex items-center gap-1">
                  <route.icon className="h-4 w-4" />
                  <span className="hidden md:inline">{route.label}</span>
                </Link>
              </Button>
            ))}
          {user && (
            <Button variant="ghost" size="sm" onClick={() => signOut()} className="flex items-center gap-1">
              <span className="hidden md:inline">Logout</span>
            </Button>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
