import { createClient } from "@/lib/supabase/server"
import type { PromptCategory, PromptCategoryInsert } from "@/types/prompt-category"
import type { Prompt, PromptInsert, PromptWithCategory } from "@/types/prompt"
import type { UserFavoriteInsert, UserFavoriteWithPrompt } from "@/types/user-favorite"
import type { GeneratedContent, GeneratedContentInsert, GeneratedContentWithPrompt } from "@/types/generated-content"
import type { UserSettings, UserSettingsUpdate } from "@/types/user-settings"

// Prompt Categories
export async function getPromptCategories(): Promise<PromptCategory[]> {
  const supabase = createClient()
  const { data, error } = await supabase.from("prompt_categories").select("*").order("name")

  if (error) throw error
  return data || []
}

export async function getPromptCategoryBySlug(slug: string): Promise<PromptCategory | null> {
  const supabase = createClient()
  const { data, error } = await supabase.from("prompt_categories").select("*").eq("slug", slug).single()

  if (error && error.code !== "PGRST116") throw error
  return data
}

export async function createPromptCategory(category: PromptCategoryInsert): Promise<PromptCategory> {
  const supabase = createClient()
  const { data, error } = await supabase.from("prompt_categories").insert(category).select().single()

  if (error) throw error
  return data
}

// Prompts
export async function getPrompts(limit = 50, categoryId?: string): Promise<PromptWithCategory[]> {
  const supabase = createClient()
  let query = supabase
    .from("prompts")
    .select(`
      *,
      category:prompt_categories(*)
    `)
    .order("created_at", { ascending: false })
    .limit(limit)

  if (categoryId) {
    query = query.eq("category_id", categoryId)
  }

  const { data, error } = await query

  if (error) throw error
  return data || []
}

export async function getPromptById(id: string): Promise<PromptWithCategory | null> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from("prompts")
    .select(`
      *,
      category:prompt_categories(*)
    `)
    .eq("id", id)
    .single()

  if (error && error.code !== "PGRST116") throw error
  return data
}

export async function createPrompt(prompt: PromptInsert): Promise<Prompt> {
  const supabase = createClient()
  const { data, error } = await supabase.from("prompts").insert(prompt).select().single()

  if (error) throw error
  return data
}

export async function updatePrompt(id: string, updates: Partial<Prompt>): Promise<Prompt> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from("prompts")
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deletePrompt(id: string): Promise<void> {
  const supabase = createClient()
  const { error } = await supabase.from("prompts").delete().eq("id", id)

  if (error) throw error
}

// User Favorites
export async function getUserFavorites(userId: string): Promise<UserFavoriteWithPrompt[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from("user_favorites")
    .select(`
      *,
      prompt:prompts(*)
    `)
    .eq("user_id", userId)
    .order("created_at", { ascending: false })

  if (error) throw error
  return data || []
}

export async function toggleFavorite(favorite: UserFavoriteInsert): Promise<{ added: boolean }> {
  const supabase = createClient()

  // Check if already favorited
  const { data: existingFavorite } = await supabase
    .from("user_favorites")
    .select("id")
    .eq("user_id", favorite.user_id)
    .eq("prompt_id", favorite.prompt_id)
    .single()

  if (existingFavorite) {
    // Remove favorite
    const { error } = await supabase.from("user_favorites").delete().eq("id", existingFavorite.id)

    if (error) throw error
    return { added: false }
  } else {
    // Add favorite
    const { error } = await supabase.from("user_favorites").insert(favorite)

    if (error) throw error
    return { added: true }
  }
}

// Generated Content
export async function saveGeneratedContent(content: GeneratedContentInsert): Promise<GeneratedContent> {
  const supabase = createClient()
  const { data, error } = await supabase.from("generated_content").insert(content).select().single()

  if (error) throw error
  return data
}

export async function getUserGeneratedContent(userId: string, limit = 20): Promise<GeneratedContentWithPrompt[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from("generated_content")
    .select(`
      *,
      prompt:prompts(*)
    `)
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(limit)

  if (error) throw error
  return data || []
}

// User Settings
export async function getUserSettings(userId: string): Promise<UserSettings | null> {
  const supabase = createClient()
  const { data, error } = await supabase.from("user_settings").select("*").eq("user_id", userId).single()

  if (error && error.code !== "PGRST116") throw error
  return data
}

export async function updateUserSettings(userId: string, settings: UserSettingsUpdate): Promise<UserSettings> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from("user_settings")
    .update({ ...settings, updated_at: new Date().toISOString() })
    .eq("user_id", userId)
    .select()
    .single()

  if (error) throw error
  return data
}
