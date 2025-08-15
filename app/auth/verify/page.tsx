import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function VerifyPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="mx-auto flex items-center justify-center rounded-full bg-emerald-100 p-2 dark:bg-emerald-900">
            <CheckCircle className="h-6 w-6 text-emerald-500" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Check your email</h1>
          <p className="text-sm text-muted-foreground">
            We&apos;ve sent you a verification link. Please check your email to verify your account.
          </p>
        </div>
        <Button asChild>
          <Link href="/login">Return to Login</Link>
        </Button>
      </div>
    </div>
  )
}
