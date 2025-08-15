"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState, useCallback } from "react"
import type { User } from "@supabase/supabase-js"
import type { UserProfile } from "@/types/user-profile"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"

type SupabaseAuthContextType = {
  user: User | null
  profile: UserProfile | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  refreshProfile: () => Promise<void>
}

const SupabaseAuthContext = createContext<SupabaseAuthContextType>({
  user: null,
  profile: null,
  isLoading: true,
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {},
  refreshProfile: async () => {},
})

export const useSupabaseAuth = () => useContext(SupabaseAuthContext)

export const SupabaseAuthProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  const refreshProfile = useCallback(async () => {
    if (!user) {
      setProfile(null)
      return
    }

    try {
      const { data, error } = await supabase.from("user_profiles").select("*").eq("id", user.id).single()

      if (error) throw error
      setProfile(data)
    } catch (error) {
      console.error("Error fetching user profile:", error)
    }
  }, [supabase, user])

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      setUser(session?.user || null)
      setIsLoading(false)
    }

    getUser()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
      setIsLoading(false)
      router.refresh()
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [router, supabase.auth])

  useEffect(() => {
    if (user) {
      refreshProfile()
    }
  }, [user, refreshProfile])

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      throw error
    }

    router.push("/dashboard")
  }

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      throw error
    }

    router.push("/auth/verify")
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  const value = {
    user,
    profile,
    isLoading,
    signIn,
    signUp,
    signOut,
    refreshProfile,
  }

  return <SupabaseAuthContext.Provider value={value}>{children}</SupabaseAuthContext.Provider>
}
