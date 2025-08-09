import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactNode } from "react"

interface BrandCardProps {
  className?: string
  title?: string | ReactNode
  description?: string | ReactNode
  children?: ReactNode
  footer?: ReactNode
  variant?: "default" | "blue" | "pink"
}

export function BrandCard({ className, title, description, children, footer, variant = "default" }: BrandCardProps) {
  const variantClasses = {
    default: "bg-white",
    blue: "bg-gradient-to-br from-white to-jelly-blue/10 border-jelly-blue/20",
    pink: "bg-gradient-to-br from-white to-jelly-pink/10 border-jelly-pink/20",
  }

  // Golden ratio applied to border-radius and shadow
  return (
    <Card
      className={cn(
        "overflow-hidden border shadow-sm rounded-[0.618rem]", // Golden ratio applied to border radius
        variantClasses[variant],
        className,
      )}
    >
      {(title || description) && (
        <CardHeader className="p-6">
          {" "}
          {/* Golden ratio padding */}
          {title && (typeof title === "string" ? <CardTitle>{title}</CardTitle> : title)}
          {description &&
            (typeof description === "string" ? <CardDescription>{description}</CardDescription> : description)}
        </CardHeader>
      )}
      {children && (
        <CardContent
          className={cn(
            !title && !description && "pt-6", // Golden ratio padding
            "px-6 pb-6", // Golden ratio padding
          )}
        >
          {children}
        </CardContent>
      )}
      {footer && <CardFooter className="p-6">{footer}</CardFooter>} {/* Golden ratio padding */}
    </Card>
  )
}
