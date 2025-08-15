import { BrandButton } from "@/components/ui/brand-button"
import Link from "next/link"

interface BrandHeroProps {
  title: string
  subtitle: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
}

export function BrandHero({ title, subtitle, primaryCta, secondaryCta }: BrandHeroProps) {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 hidden md:block">
        <div className="h-[16.18rem] w-[16.18rem] rounded-full bg-jelly-blue/20 animate-float" />
      </div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 hidden md:block">
        <div
          className="h-[10rem] w-[10rem] rounded-full bg-jelly-pink/20 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">{title}</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10">{subtitle}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <BrandButton variant="blue" size="lg" asChild className="px-6 py-3">
              <Link href={primaryCta.href}>{primaryCta.text}</Link>
            </BrandButton>
            {secondaryCta && (
              <BrandButton variant="outline-pink" size="lg" asChild className="px-6 py-3">
                <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
              </BrandButton>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
