import { createClient } from "@/lib/supabase/server"
import fs from "fs"
import path from "path"

export async function setupDatabase() {
  try {
    const supabase = createClient()

    // Read the SQL file
    const sqlFilePath = path.join(process.cwd(), "lib", "database", "schema.sql")
    const sqlContent = fs.readFileSync(sqlFilePath, "utf8")

    // Split the SQL into statements
    const statements = sqlContent
      .split(";")
      .map((statement) => statement.trim())
      .filter((statement) => statement.length > 0)

    // Execute each statement
    for (const statement of statements) {
      const { error } = await supabase.rpc("exec_sql", { sql: statement + ";" })
      if (error) {
        console.error(`Error executing SQL: ${statement}`, error)
        throw error
      }
    }

    return { success: true }
  } catch (error) {
    console.error("Error setting up database:", error)
    return { success: false, error: String(error) }
  }
}
