import type { Database } from "./database"
import type { Prompt } from "./prompt"

export type UserFavorite = Database["public"]["Tables"]["user_favorites"]["Row"]
export type UserFavoriteInsert = Database["public"]["Tables"]["user_favorites"]["Insert"]
export type UserFavoriteUpdate = Database["public"]["Tables"]["user_favorites"]["Update"]

export type UserFavoriteWithPrompt = UserFavorite & {
  prompt: Prompt
}
