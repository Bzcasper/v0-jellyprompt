"use client"

import { useState } from "react"
import { populateSampleData } from "@/app/actions/populate-sample-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, FileText } from "lucide-react"

export default function SampleDataPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; error?: string } | null>(null)

  const handlePopulate = async () => {
    setIsLoading(true)
    try {
      const result = await populateSampleData()
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
              <FileText className="h-5 w-5" />
              Sample Data
            </CardTitle>
            <CardDescription>Populate the database with sample prompts and categories for testing.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              This will add sample prompts across various categories to help you test the application. The sample data
              includes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground mb-4">
              <li>7 categories (General, Creative Writing, Business, Programming, Academic, Marketing, Legal)</li>
              <li>21 sample prompts with realistic templates</li>
              <li>Various parameter types and configurations</li>
              <li>Featured prompts for testing the homepage</li>
            </ul>

            {result && (
              <Alert variant={result.success ? "default" : "destructive"} className="mb-4">
                {result.success ? (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    <AlertTitle>Success</AlertTitle>
                    <AlertDescription>Sample data has been added successfully.</AlertDescription>
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
            <Button onClick={handlePopulate} disabled={isLoading} className="w-full">
              {isLoading ? "Adding Sample Data..." : "Add Sample Data"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
