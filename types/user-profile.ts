export type UserProfile = {
  id: string
  username: string | null
  full_name: string | null
  avatar_url: string | null
  bio: string | null
  website: string | null
  email: string
  created_at: string
  updated_at: string
}

export type UserProfileUpdate = {
  username?: string
  full_name?: string
  avatar_url?: string
  bio?: string
  website?: string
}
