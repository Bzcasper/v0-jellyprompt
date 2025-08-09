import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers/providers"
import { BrandHeader } from "@/components/brand-header"
import { BrandFooter } from "@/components/brand-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JellyPrompt - LLM Prompt Hub",
  description: "Create, share, and use powerful prompts for large language models",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <BrandHeader />
            <main className="flex-1">{children}</main>
            <BrandFooter />
          </div>
        </Providers>
      </body>
    </html>
  )
}
