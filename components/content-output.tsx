"use client"

import { useState } from "react"
import { BrandCard } from "@/components/ui/brand-card"
import { BrandButton } from "@/components/ui/brand-button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Download, Check, Code, FileText, FileCode } from "lucide-react"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"

interface ContentOutputProps {
  content: string
  isLoading?: boolean
}

export function ContentOutput({ content, isLoading = false }: ContentOutputProps) {
  const [format, setFormat] = useState<"markdown" | "text" | "html">("markdown")
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const handleDownload = () => {
    const element = document.createElement("a")
    let fileExtension = ".txt"

    if (format === "markdown") fileExtension = ".md"
    if (format === "html") fileExtension = ".html"

    const file = new Blob([content], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = `jellyprompt-content${fileExtension}`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-64">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2.5"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-2.5"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6 mb-2.5"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-2.5"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      )
    }

    if (!content) {
      return (
        <div className="flex flex-col items-center justify-center h-64 text-gray-500">
          <FileText className="h-12 w-12 mb-4 opacity-20" />
          <p>No content generated yet. Fill in the parameters and click Generate.</p>
        </div>
      )
    }

    if (format === "markdown") {
      return (
        <div className="prose prose-blue max-w-none dark:prose-invert">
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "")
                return !inline && match ? (
                  <SyntaxHighlighter style={tomorrow} language={match[1]} PreTag="div" {...props}>
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      )
    }

    if (format === "html") {
      return (
        <div className="bg-gray-50 p-4 rounded-md overflow-auto">
          <SyntaxHighlighter language="html" style={tomorrow}>
            {content}
          </SyntaxHighlighter>
        </div>
      )
    }

    // Plain text
    return (
      <div className="whitespace-pre-wrap font-mono text-sm bg-gray-50 p-4 rounded-md overflow-auto">{content}</div>
    )
  }

  return (
    <BrandCard variant="blue" className="overflow-hidden">
      <div className="p-4 border-b flex justify-between items-center">
        <Tabs defaultValue="markdown" value={format} onValueChange={(v) => setFormat(v as any)}>
          <TabsList>
            <TabsTrigger value="markdown" className="flex items-center gap-1">
              <FileCode className="h-4 w-4" />
              <span>Markdown</span>
            </TabsTrigger>
            <TabsTrigger value="text" className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              <span>Text</span>
            </TabsTrigger>
            <TabsTrigger value="html" className="flex items-center gap-1">
              <Code className="h-4 w-4" />
              <span>HTML</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex gap-2">
          <BrandButton variant="outline-blue" size="sm" onClick={handleCopy} disabled={!content || isLoading}>
            {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
            {copied ? "Copied" : "Copy"}
          </BrandButton>
          <BrandButton variant="outline-pink" size="sm" onClick={handleDownload} disabled={!content || isLoading}>
            <Download className="h-4 w-4 mr-1" />
            Download
          </BrandButton>
        </div>
      </div>

      <div className="p-6 max-h-[600px] overflow-auto">{renderContent()}</div>

      {content && !isLoading && (
        <div className="p-4 border-t text-sm text-gray-500 flex justify-between">
          <div>Word count: {content.split(/\s+/).filter(Boolean).length}</div>
          <div>Character count: {content.length}</div>
        </div>
      )}
    </BrandCard>
  )
}
