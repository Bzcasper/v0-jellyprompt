"use client"

import { Logo } from "@/components/logo"
import { BrandButton } from "@/components/ui/brand-button"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { useSupabaseAuth } from "@/components/providers/supabase-auth-provider"

export function BrandHeader() {
  const { user, signOut } = useSupabaseAuth()

  return (
    <header className="w-full border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo size="md" href="/dashboard" />

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-jelly-blue-dark transition-colors">
            Home
          </Link>
          <Link href="/browse" className="text-sm font-medium hover:text-jelly-blue-dark transition-colors">
            Browse Prompts
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-jelly-blue-dark transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />

          {user ? (
            <div className="flex items-center space-x-4">
              <BrandButton variant="outline-blue" size="sm" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </BrandButton>
              <BrandButton variant="ghost" size="sm" onClick={() => signOut()}>
                Sign Out
              </BrandButton>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <BrandButton variant="outline-blue" size="sm" asChild>
                <Link href="/login">Sign In</Link>
              </BrandButton>
              <BrandButton variant="pink" size="sm" asChild>
                <Link href="/register">Sign Up</Link>
              </BrandButton>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
