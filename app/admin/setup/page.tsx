"use client"

import { useState } from "react"
import { setupDatabase } from "@/app/actions/setup-database"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Database } from "lucide-react"

export default function SetupPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; error?: string } | null>(null)

  const handleSetup = async () => {
    setIsLoading(true)
    try {
      const result = await setupDatabase()
      setResult(result)
    } catch (error) {
      setResult({ success: false, error: String(error) })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container py-10">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Database Setup
            </CardTitle>
            <CardDescription>Set up the database schema for the LLM Prompt Hub application.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              This will create all necessary tables, indexes, and triggers for the application to function properly.
            </p>

            {result && (
              <Alert variant={result.success ? "default" : "destructive"} className="mb-4">
                {result.success ? (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    <AlertTitle>Success</AlertTitle>
                    <AlertDescription>Database schema has been set up successfully.</AlertDescription>
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{result.error || "An unknown error occurred."}</AlertDescription>
                  </>
                )}
              </Alert>
            )}
          </CardContent>
          <CardFooter>
            <Button onClick={handleSetup} disabled={isLoading} className="w-full">
              {isLoading ? "Setting up..." : "Set Up Database"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
