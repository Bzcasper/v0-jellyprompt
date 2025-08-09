"use client"

import type React from "react"

import { BrandCard } from "@/components/ui/brand-card"
import { BrandButton } from "@/components/ui/brand-button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import type { Prompt } from "@/types/prompt"
import type { Category } from "@/types/category"

interface PromptCardProps {
  prompt: Prompt & { category?: Category | null }
  isFavorite?: boolean
  onFavoriteToggle?: (promptId: string) => void
  className?: string
}

export function PromptCard({ prompt, isFavorite = false, onFavoriteToggle, className }: PromptCardProps) {
  const [isHovering, setIsHovering] = useState(false)

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (onFavoriteToggle) {
      onFavoriteToggle(prompt.id)
    }
  }

  return (
    <Link href={`/prompts/${prompt.id}`}>
      <BrandCard
        className={cn(
          "h-full transition-all duration-200 hover:shadow-md",
          isHovering ? "border-jelly-blue" : "",
          className,
        )}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="p-6 flex flex-col h-full">
          {" "}
          {/* Golden ratio padding */}
          <div className="flex justify-between items-start mb-3">
            <div>
              {prompt.category && (
                <Badge variant="outline" className="mb-2 bg-jelly-blue/10 text-jelly-blue-dark border-jelly-blue/20">
                  {prompt.category.name}
                </Badge>
              )}
              {prompt.is_featured && <Badge className="ml-2 mb-2 bg-jelly-pink text-jelly-pink-dark">Featured</Badge>}
            </div>
            {onFavoriteToggle && (
              <button
                onClick={handleFavoriteClick}
                className="text-gray-400 hover:text-jelly-pink transition-colors"
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                <Heart className={cn("h-5 w-5", isFavorite ? "fill-jelly-pink text-jelly-pink" : "")} />
              </button>
            )}
          </div>
          <h3 className="text-lg font-medium mb-2">{prompt.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{prompt.description}</p>
          <div className="flex justify-between items-center mt-auto pt-4 border-t">
            <div className="text-xs text-gray-500">{JSON.parse(prompt.parameters as string).length} parameters</div>
            <BrandButton variant="blue" size="sm">
              Use Prompt
            </BrandButton>
          </div>
        </div>
      </BrandCard>
    </Link>
  )
}
