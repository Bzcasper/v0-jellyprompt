"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { BrandCard } from "@/components/ui/brand-card"
import { Badge } from "@/components/ui/badge"
import { PromptParameterForm } from "@/components/prompt-parameter-form"
import { ContentOutput } from "@/components/content-output"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Heart, Share2, Calendar, User } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import type { PromptParameter } from "@/types/prompt"

// This would normally come from the database
const samplePrompt = {
  id: "1",
  title: "Blog Post Outline Generator",
  description:
    "Create a detailed outline for a blog post on any topic with sections, subsections, and key points to cover.",
  template:
    "Create a detailed outline for a blog post titled '{{title}}' about {{topic}}. Include an introduction, at least {{sections}} main sections with subheadings, and a conclusion. For each section, provide 3-5 bullet points of key information to cover.",
  category_id: "1",
  user_id: "1",
  parameters: [
    { name: "title", type: "text", description: "Blog post title", required: true },
    { name: "topic", type: "text", description: "Main topic of the blog post", required: true },
    {
      name: "sections",
      type: "select",
      description: "Number of main sections",
      required: true,
      options: ["3", "4", "5", "6"],
    },
  ] as PromptParameter[],
  is_featured: true,
  created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(), // 7 days ago
  updated_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
  category: {
    id: "1",
    name: "Content Writing",
    slug: "content-writing",
    description: "Create blog posts, articles, and other written content",
    icon: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  user: {
    id: "1",
    email: "user@example.com",
    name: "John Doe",
  },
}

export default function PromptDetailPage() {
  const params = useParams()
  const [generatedContent, setGeneratedContent] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const handleSubmit = async (values: Record<string, any>) => {
    setIsGenerating(true)

    try {
      // This would normally call an API endpoint
      // For demo purposes, we'll simulate a delay and return a sample response
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Replace placeholders in the template with the values
      let content = samplePrompt.template

      Object.entries(values).forEach(([key, value]) => {
        content = content.replace(new RegExp(`{{${key}}}`, "g"), String(value))
      })

      // Generate a sample blog post outline
      const sampleOutline = `# Blog Post Outline: ${values.title}

## Introduction
- Hook the reader with a compelling statistic or question about ${values.topic}
- Briefly introduce the importance of ${values.topic} in today's context
- State the purpose of the blog post
- Provide a brief overview of what the reader will learn

${Array.from({ length: Number(values.sections) })
  .map(
    (_, i) => `
## Section ${i + 1}: ${["Understanding", "Exploring", "Benefits of", "How to Implement", "Best Practices for", "Future of"][i % 6]} ${values.topic}
- Key point about ${values.topic} related to this section
- Statistical evidence or expert quote supporting this point
- Practical example or case study
- Actionable takeaway for the reader
`,
  )
  .join("")}

## Conclusion
- Recap the main points discussed
- Emphasize the importance of ${values.topic} once more
- Provide a final thought or call to action
- Encourage reader engagement through comments or sharing
`

      setGeneratedContent(sampleOutline)
    } catch (error) {
      console.error("Error generating content:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/browse">Browse</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/browse?category=${samplePrompt.category.slug}`}>
              {samplePrompt.category.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>{samplePrompt.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <BrandCard className="sticky top-24">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <Badge variant="outline" className="mb-2 bg-jelly-blue/10 text-jelly-blue border-jelly-blue/20">
                  {samplePrompt.category.name}
                </Badge>

                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="text-gray-400 hover:text-jelly-pink transition-colors"
                  aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                >
                  <Heart className={`h-5 w-5 ${isFavorite ? "fill-jelly-pink text-jelly-pink" : ""}`} />
                </button>
              </div>

              <h1 className="text-2xl font-bold mb-3">{samplePrompt.title}</h1>
              <p className="text-gray-600 mb-6">{samplePrompt.description}</p>

              <div className="space-y-3 text-sm text-gray-500">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>Created by {samplePrompt.user.name}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{formatDistanceToNow(new Date(samplePrompt.created_at), { addSuffix: true })}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-medium mb-2">Share this prompt</h3>
                <button className="flex items-center text-sm text-jelly-blue hover:text-jelly-blue-dark">
                  <Share2 className="h-4 w-4 mr-1" />
                  Copy link
                </button>
              </div>
            </div>
          </BrandCard>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <BrandCard>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Customize Parameters</h2>
              <PromptParameterForm
                parameters={samplePrompt.parameters}
                onSubmit={handleSubmit}
                isGenerating={isGenerating}
              />
            </div>
          </BrandCard>

          <ContentOutput content={generatedContent} isLoading={isGenerating} />
        </div>
      </div>
    </div>
  )
}
