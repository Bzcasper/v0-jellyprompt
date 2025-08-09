import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  textClassName?: string
  href?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className, textClassName, href = "/", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
  }

  const LogoContent = (
    <div className={cn("flex items-center", className)}>
      <span className={cn("jelly-font text-jelly-blue-dark", sizeClasses[size], textClassName)}>
        JELLY<span className="prompt-font text-jelly-pink-dark tracking-wide">PROMPT</span>
      </span>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="hover:opacity-90 transition-opacity">
        {LogoContent}
      </Link>
    )
  }

  return LogoContent
}
