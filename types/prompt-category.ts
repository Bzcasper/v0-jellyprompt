import type { Database } from "./database"

export type PromptCategory = Database["public"]["Tables"]["prompt_categories"]["Row"]
export type PromptCategoryInsert = Database["public"]["Tables"]["prompt_categories"]["Insert"]
export type PromptCategoryUpdate = Database["public"]["Tables"]["prompt_categories"]["Update"]
