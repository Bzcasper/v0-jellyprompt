export interface PromptTemplateParameter {
  name: string
  type: "text" | "textarea" | "select" | "number" | "boolean"
  description: string
  required: boolean
  options?: string[]
  default?: string | number | boolean
}

export interface PromptTemplate {
  id: string
  title: string
  description: string
  template: string
  category: {
    id: string
    name: string
    slug: string
  }
  parameters: PromptTemplateParameter[]
  is_featured: boolean
  created_by: {
    id: string
    name: string
  }
  created_at: string
  updated_at: string
  tags?: string[]
  example_output?: string
  usage_count?: number
  average_rating?: number
}

export interface PromptCategory {
  id: string
  name: string
  slug: string
  description: string
  icon?: string
  prompt_count?: number
}

export interface GeneratedContent {
  id: string
  prompt_id: string
  prompt_title: string
  parameters_used: Record<string, any>
  content: string
  format: "markdown" | "text" | "html"
  created_at: string
  word_count?: number
  character_count?: number
}

export interface UserFavorite {
  id: string
  prompt_id: string
  created_at: string
  prompt: PromptTemplate
}

export interface UserSettings {
  default_format: "markdown" | "text" | "html"
  theme: "light" | "dark" | "system"
  default_temperature: number
  default_max_tokens: number
}
