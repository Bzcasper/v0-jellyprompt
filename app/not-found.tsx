import Link from "next/link"
import { BrandButton } from "@/components/ui/brand-button"

export default function NotFound() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="text-xl">Page Not Found</p>
          <p className="text-sm text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        </div>
        <BrandButton variant="blue" asChild>
          <Link href="/">Return to Home</Link>
        </BrandButton>
      </div>
    </div>
  )
}
