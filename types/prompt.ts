import type { Database } from "./database"
import type { Category } from "./category"

export type Prompt = Database["public"]["Tables"]["prompts"]["Row"]
export type PromptInsert = Database["public"]["Tables"]["prompts"]["Insert"]
export type PromptUpdate = Database["public"]["Tables"]["prompts"]["Update"]

export type PromptWithCategory = Prompt & {
  category: Category | null
}

export type PromptParameter = {
  name: string
  type: "text" | "textarea" | "select" | "number" | "boolean"
  description: string
  required: boolean
  options?: string[]
  default?: string | number | boolean
}
