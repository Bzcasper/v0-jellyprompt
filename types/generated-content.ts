import type { Database } from "./database"
import type { Prompt } from "./prompt"

export type GeneratedContent = Database["public"]["Tables"]["generated_content"]["Row"]
export type GeneratedContentInsert = Database["public"]["Tables"]["generated_content"]["Insert"]
export type GeneratedContentUpdate = Database["public"]["Tables"]["generated_content"]["Update"]

export type GeneratedContentWithPrompt = GeneratedContent & {
  prompt: Prompt | null
}
