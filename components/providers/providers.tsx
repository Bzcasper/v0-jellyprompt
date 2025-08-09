"use client"

import type React from "react"

import { ThemeProvider } from "./theme-provider"
import { SupabaseAuthProvider } from "./supabase-auth-provider"
import { Toaster } from "@/components/ui/toaster"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="prompt-hub-theme">
      <SupabaseAuthProvider>
        {children}
        <Toaster />
      </SupabaseAuthProvider>
    </ThemeProvider>
  )
}
