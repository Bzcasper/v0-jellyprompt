"use server"

import { createClient } from "@/lib/supabase/server"
import fs from "fs"
import path from "path"

export async function setupUserProfiles() {
  try {
    const supabase = createClient()

    // Read the SQL file
    const sqlFilePath = path.join(process.cwd(), "lib", "database", "user-profiles.sql")
    const sqlContent = fs.readFileSync(sqlFilePath, "utf8")

    // Execute the SQL
    const { error } = await supabase.rpc("exec_sql", { sql: sqlContent })

    if (error) {
      console.error("Error executing SQL:", error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    console.error("Error setting up user profiles:", error)
    return { success: false, error: String(error) }
  }
}
