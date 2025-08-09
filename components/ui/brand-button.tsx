import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"
import { forwardRef } from "react"

interface BrandButtonProps extends ButtonProps {
  variant?: "blue" | "pink" | "outline-blue" | "outline-pink" | "ghost"
}

export const BrandButton = forwardRef<HTMLButtonElement, BrandButtonProps>(
  ({ className, variant = "blue", ...props }, ref) => {
    const variantClasses = {
      blue: "bg-jelly-blue hover:bg-jelly-blue-dark text-jelly-blue-dark",
      pink: "bg-jelly-pink hover:bg-jelly-pink-dark text-jelly-pink-dark",
      "outline-blue": "border-2 border-jelly-blue text-jelly-blue hover:bg-jelly-blue/10",
      "outline-pink": "border-2 border-jelly-pink text-jelly-pink hover:bg-jelly-pink/10",
      ghost: "hover:bg-gray-100 text-gray-800",
    }

    // Golden ratio applied to padding (10:16)
    return (
      <Button
        ref={ref}
        className={cn(
          "font-medium rounded-lg transition-colors px-4 py-2.5", // Golden ratio applied to padding
          variantClasses[variant],
          className,
        )}
        {...props}
      />
    )
  },
)

BrandButton.displayName = "BrandButton"
