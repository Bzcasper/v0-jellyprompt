import { createClient } from "@/lib/supabase/server"

export async function checkSampleDataExists() {
  const supabase = createClient()

  // Check if we have any prompts
  const { count, error } = await supabase.from("prompts").select("*", { count: "exact", head: true })

  if (error) {
    console.error("Error checking sample data:", error)
    return false
  }

  return count !== null && count > 0
}
