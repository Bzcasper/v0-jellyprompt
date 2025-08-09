import type { Database } from "./database"

export type UserSettings = Database["public"]["Tables"]["user_settings"]["Row"]
export type UserSettingsInsert = Database["public"]["Tables"]["user_settings"]["Insert"]
export type UserSettingsUpdate = Database["public"]["Tables"]["user_settings"]["Update"]
