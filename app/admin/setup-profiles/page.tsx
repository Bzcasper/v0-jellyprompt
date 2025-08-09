"use client"

import { useState } from "react"
import { setupUserProfiles } from "@/app/actions/setup-user-profiles"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, UserCircle } from "lucide-react"

export default function SetupProfilesPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; error?: string } | null>(null)

  const handleSetup = async () => {
    setIsLoading(true)
    try {
      const result = await setupUserProfiles()
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
              <UserCircle className="h-5 w-5 text-jelly-blue-dark" />
              User Profiles Setup
            </CardTitle>
            <CardDescription>Set up the user profiles system for JellyPrompt.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              This will create the user_profiles table, triggers, and storage buckets needed for the profile system.
            </p>

            {result && (
              <Alert variant={result.success ? "default" : "destructive"} className="mb-4">
                {result.success ? (
                  <>
                    <CheckCircle className="h-4 w-4 text-jelly-blue-dark" />
                    <AlertTitle>Success</AlertTitle>
                    <AlertDescription>User profiles system has been set up successfully.</AlertDescription>
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
            <Button
              onClick={handleSetup}
              disabled={isLoading}
              className="w-full bg-jelly-blue text-jelly-blue-dark hover:bg-jelly-blue-dark hover:text-white"
            >
              {isLoading ? "Setting up..." : "Set Up User Profiles"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
