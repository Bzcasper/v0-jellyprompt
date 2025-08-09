import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import type { PromptParameter } from "@/lib/templates/template-structure"

interface GenerationOptions {
  temperature?: number
  maxTokens?: number
}

export async function generateContent(
  template: string,
  parameters: Record<string, any>,
  options: GenerationOptions = {},
): Promise<string> {
  try {
    // Process the template by replacing parameter placeholders
    let processedTemplate = template

    Object.entries(parameters).forEach(([key, value]) => {
      const placeholder = new RegExp(`{{${key}}}`, "g")
      processedTemplate = processedTemplate.replace(placeholder, String(value))
    })

    // Set up generation options
    const temperature = options.temperature ?? 0.7
    // Use server-side environment variable if available, otherwise use default
    const maxTokens = options.maxTokens ?? (process.env.MAX_TOKENS ? Number.parseInt(process.env.MAX_TOKENS) : 2000)

    // Generate content using the AI SDK
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: processedTemplate,
      temperature,
      maxTokens,
    })

    return text
  } catch (error) {
    console.error("Error generating content:", error)
    throw new Error("Failed to generate content. Please try again.")
  }
}

export async function validateParameters(
  parameters: PromptParameter[],
  values: Record<string, any>,
): Promise<{ valid: boolean; errors: Record<string, string> }> {
  const errors: Record<string, string> = {}

  parameters.forEach((param) => {
    // Check required parameters
    if (param.required && (!values[param.name] || values[param.name] === "")) {
      errors[param.name] = `${param.name} is required`
      return
    }

    // Type-specific validation
    switch (param.type) {
      case "select":
        if (values[param.name] && param.options && !param.options.includes(values[param.name])) {
          errors[param.name] = `${param.name} must be one of the allowed options`
        }
        break
      case "number":
        if (values[param.name] && isNaN(Number(values[param.name]))) {
          errors[param.name] = `${param.name} must be a number`
        }
        break
      // Add more type-specific validation as needed
    }
  })

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}

export function formatContent(content: string, format: "markdown" | "text" | "html"): string {
  switch (format) {
    case "markdown":
      return content // Already in markdown format
    case "text":
      // Strip markdown formatting
      return content
        .replace(/#{1,6}\s?/g, "") // Remove headings
        .replace(/\*\*(.*?)\*\*/g, "$1") // Remove bold
        .replace(/\*(.*?)\*/g, "$1") // Remove italic
        .replace(/\[(.*?)\]$$(.*?)$$/g, "$1 ($2)") // Convert links
        .replace(/```.*?```/gs, (match) => match.replace(/```.*?\n/s, "").replace(/```/s, "")) // Clean code blocks
    case "html":
      // Convert markdown to HTML (simplified version)
      return content
        .replace(/#{6}\s?(.*?)\n/g, "<h6>$1</h6>")
        .replace(/#{5}\s?(.*?)\n/g, "<h5>$1</h5>")
        .replace(/#{4}\s?(.*?)\n/g, "<h4>$1</h4>")
        .replace(/#{3}\s?(.*?)\n/g, "<h3>$1</h3>")
        .replace(/#{2}\s?(.*?)\n/g, "<h2>$1</h2>")
        .replace(/#{1}\s?(.*?)\n/g, "<h1>$1</h1>")
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em>$1</em>")
        .replace(/\[(.*?)\]$$(.*?)$$/g, '<a href="$2">$1</a>')
        .replace(/```(.*?)```/gs, "<pre><code>$1</code></pre>")
        .replace(/\n\n/g, "<br><br>")
    default:
      return content
  }
}
