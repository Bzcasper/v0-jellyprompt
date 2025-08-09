import { PromptCard } from "@/components/prompt-card"
import { Input } from "@/components/ui/input"
import { BrandButton } from "@/components/ui/brand-button"
import { Search } from "lucide-react"

// This would normally come from the database
const samplePrompts = [
  {
    id: "1",
    title: "Blog Post Outline Generator",
    description:
      "Create a detailed outline for a blog post on any topic with sections, subsections, and key points to cover.",
    template:
      "Create a detailed outline for a blog post titled '{{title}}' about {{topic}}. Include an introduction, at least {{sections}} main sections with subheadings, and a conclusion. For each section, provide 3-5 bullet points of key information to cover.",
    category_id: "1",
    user_id: "1",
    parameters: JSON.stringify([
      { name: "title", type: "text", description: "Blog post title", required: true },
      { name: "topic", type: "text", description: "Main topic of the blog post", required: true },
      {
        name: "sections",
        type: "select",
        description: "Number of main sections",
        required: true,
        options: ["3", "4", "5", "6"],
      },
    ]),
    is_featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    category: {
      id: "1",
      name: "Content Writing",
      slug: "content-writing",
      description: "Create blog posts, articles, and other written content",
      icon: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  },
  {
    id: "2",
    title: "Product Description Generator",
    description:
      "Generate compelling product descriptions for e-commerce listings that highlight features and benefits.",
    template:
      "Write a compelling product description for {{product_name}}, which is a {{product_type}}. The key features to highlight are {{features}}. The target audience is {{audience}}.",
    category_id: "2",
    user_id: "1",
    parameters: JSON.stringify([
      { name: "product_name", type: "text", description: "Name of the product", required: true },
      { name: "product_type", type: "text", description: "Type of product", required: true },
      { name: "features", type: "textarea", description: "Key features to highlight", required: true },
      { name: "audience", type: "text", description: "Target audience", required: true },
    ]),
    is_featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    category: {
      id: "2",
      name: "Marketing",
      slug: "marketing",
      description: "Generate marketing materials and strategies",
      icon: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  },
  {
    id: "3",
    title: "Code Explainer",
    description:
      "Get a clear explanation of any code snippet with breakdown of how it works and suggestions for improvements.",
    template:
      "Explain the following {{language}} code in detail:\n\n```{{language}}\n{{code}}\n```\n\nBreak down how it works, what each part does, and suggest any improvements.",
    category_id: "3",
    user_id: "1",
    parameters: JSON.stringify([
      {
        name: "language",
        type: "select",
        description: "Programming language",
        required: true,
        options: ["javascript", "python", "java", "c#", "ruby", "go", "rust", "php", "typescript"],
      },
      { name: "code", type: "textarea", description: "Code to explain", required: true },
    ]),
    is_featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    category: {
      id: "3",
      name: "Programming",
      slug: "programming",
      description: "Prompts for coding and software development",
      icon: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  },
  {
    id: "4",
    title: "Email Newsletter Template",
    description: "Create structured email newsletter content with compelling subject lines and calls-to-action.",
    template:
      "Create a {{tone}} email newsletter for {{business_type}} focused on {{topic}}. Include a compelling subject line, introduction, main content sections, and call-to-action.",
    category_id: "2",
    user_id: "1",
    parameters: JSON.stringify([
      { name: "business_type", type: "text", description: "Type of business", required: true },
      { name: "topic", type: "text", description: "Newsletter topic", required: true },
      {
        name: "tone",
        type: "select",
        description: "Newsletter tone",
        required: true,
        options: ["professional", "conversational", "exciting", "informative"],
      },
    ]),
    is_featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    category: {
      id: "2",
      name: "Marketing",
      slug: "marketing",
      description: "Generate marketing materials and strategies",
      icon: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  },
]

export default function BrowsePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl font-bold mb-4">Browse Prompts</h1>
        <p className="text-gray-600 mb-6">
          Discover and use prompts created by the community. Filter by category or search for specific prompts.
        </p>

        <div className="flex gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input type="text" placeholder="Search prompts..." className="pl-10" />
          </div>
          <BrandButton variant="blue">Search</BrandButton>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <BrandButton variant="outline-blue" size="sm">
            All Categories
          </BrandButton>
          <BrandButton variant="outline-pink" size="sm">
            Content Writing
          </BrandButton>
          <BrandButton variant="ghost" size="sm">
            Marketing
          </BrandButton>
          <BrandButton variant="ghost" size="sm">
            Programming
          </BrandButton>
          <BrandButton variant="ghost" size="sm">
            Business
          </BrandButton>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {samplePrompts.map((prompt) => (
          <PromptCard
            key={prompt.id}
            prompt={prompt}
            isFavorite={prompt.id === "1"}
            onFavoriteToggle={(id) => console.log("Toggle favorite:", id)}
          />
        ))}
      </div>
    </div>
  )
}
