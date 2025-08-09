export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          icon: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          icon?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          icon?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      prompts: {
        Row: {
          id: string
          title: string
          description: string | null
          template: string
          category_id: string | null
          user_id: string
          parameters: Json
          is_featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          template: string
          category_id?: string | null
          user_id: string
          parameters?: Json
          is_featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          template?: string
          category_id?: string | null
          user_id?: string
          parameters?: Json
          is_featured?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      user_favorites: {
        Row: {
          id: string
          user_id: string
          prompt_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          prompt_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          prompt_id?: string
          created_at?: string
        }
      }
      generated_content: {
        Row: {
          id: string
          user_id: string
          prompt_id: string | null
          parameters_used: Json
          generated_content: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          prompt_id?: string | null
          parameters_used?: Json
          generated_content: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          prompt_id?: string | null
          parameters_used?: Json
          generated_content?: string
          created_at?: string
        }
      }
      user_settings: {
        Row: {
          user_id: string
          default_format: string
          theme: string
          default_temperature: number
          default_max_tokens: number
          created_at: string
          updated_at: string
        }
        Insert: {
          user_id: string
          default_format?: string
          theme?: string
          default_temperature?: number
          default_max_tokens?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          user_id?: string
          default_format?: string
          theme?: string
          default_temperature?: number
          default_max_tokens?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
