import { BrandHero } from "@/components/brand-hero"
import { BrandCard } from "@/components/ui/brand-card"
import { BrandButton } from "@/components/ui/brand-button"
import Link from "next/link"
import { Sparkles, Zap, Users, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      <BrandHero
        title="Unlock the Power of AI Prompts"
        subtitle="Create, share, and use powerful prompts for large language models. Enhance your AI interactions with our curated collection."
        primaryCta={{ text: "Browse Prompts", href: "/browse" }}
        secondaryCta={{ text: "Create Account", href: "/register" }}
      />

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why JellyPrompt?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform makes it easy to find, create, and share effective prompts for any use case.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-golden gap-8">
            <div className="lg:col-span-1">
              <BrandCard variant="blue" className="text-center h-full">
                <div className="flex flex-col items-center p-6">
                  <div className="w-[6.18rem] h-[6.18rem] rounded-full bg-jelly-blue/20 flex items-center justify-center mb-4">
                    <Sparkles className="h-10 w-10 text-jelly-blue-dark" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Curated Collection</h3>
                  <p className="text-gray-600">
                    Access hundreds of tested and optimized prompts for various use cases.
                  </p>
                </div>
              </BrandCard>
            </div>
            <div className="lg:col-span-1.618">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                <BrandCard variant="pink" className="text-center">
                  <div className="flex flex-col items-center p-6">
                    <div className="w-[3.82rem] h-[3.82rem] rounded-full bg-jelly-pink/20 flex items-center justify-center mb-4">
                      <Zap className="h-6 w-6 text-jelly-pink-dark" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Instant Results</h3>
                    <p className="text-gray-600">
                      Generate content directly on our platform with your favorite AI models.
                    </p>
                  </div>
                </BrandCard>

                <BrandCard variant="blue" className="text-center">
                  <div className="flex flex-col items-center p-6">
                    <div className="w-[3.82rem] h-[3.82rem] rounded-full bg-jelly-blue/20 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-jelly-blue-dark" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Community Driven</h3>
                    <p className="text-gray-600">Share your prompts and learn from others in our growing community.</p>
                  </div>
                </BrandCard>

                <BrandCard variant="pink" className="text-center md:col-span-2">
                  <div className="flex flex-col items-center p-6">
                    <div className="w-[3.82rem] h-[3.82rem] rounded-full bg-jelly-pink/20 flex items-center justify-center mb-4">
                      <Star className="h-6 w-6 text-jelly-pink-dark" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Save Favorites</h3>
                    <p className="text-gray-600">Bookmark your favorite prompts for quick access anytime.</p>
                  </div>
                </BrandCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-jelly-blue/10 to-jelly-pink/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of users who are already creating amazing content with JellyPrompt.
          </p>
          <BrandButton variant="blue" size="lg" asChild className="px-6 py-3">
            <Link href="/register">Create Free Account</Link>
          </BrandButton>
        </div>
      </section>
    </div>
  )
}
