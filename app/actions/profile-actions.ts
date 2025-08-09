"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import type { UserProfileUpdate } from "@/types/user-profile"

export async function getUserProfile(userId: string) {
  const supabase = createClient()

  const { data, error } = await supabase.from("user_profiles").select("*").eq("id", userId).single()

  if (error) {
    console.error("Error fetching user profile:", error)
    return null
  }

  return data
}

export async function updateUserProfile(userId: string, profile: UserProfileUpdate) {
  try {
    const supabase = createClient()

    // Check if profile exists
    const { data: existingProfile } = await supabase.from("user_profiles").select("id").eq("id", userId).single()

    if (existingProfile) {
      // Update existing profile
      const { error } = await supabase
        .from("user_profiles")
        .update({
          ...profile,
          updated_at: new Date().toISOString(),
        })
        .eq("id", userId)

      if (error) throw error
    } else {
      // Create new profile
      const { error } = await supabase.from("user_profiles").insert({
        id: userId,
        ...profile,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })

      if (error) throw error
    }

    revalidatePath("/dashboard/profile")
    revalidatePath("/dashboard")

    return { success: true }
  } catch (error) {
    console.error("Error updating user profile:", error)
    return { success: false, error: String(error) }
  }
}

export async function uploadProfileImage(userId: string, file: File) {
  try {
    const supabase = createClient()

    // Generate a unique file name
    const fileExt = file.name.split(".").pop()
    const fileName = `${userId}-${Date.now()}.${fileExt}`

    // Upload the file to Supabase Storage
    const { error: uploadError, data } = await supabase.storage.from("profile-images").upload(fileName, file)

    if (uploadError) throw uploadError

    // Get the public URL
    const {
      data: { publicUrl },
    } = supabase.storage.from("profile-images").getPublicUrl(fileName)

    // Update the user profile with the new avatar URL
    await updateUserProfile(userId, { avatar_url: publicUrl })

    return { success: true, url: publicUrl }
  } catch (error) {
    console.error("Error uploading profile image:", error)
    return { success: false, error: String(error) }
  }
}
