import { Logo } from "@/components/logo"
import Link from "next/link"

export function BrandFooter() {
  return (
    <footer className="w-full border-t bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-sm text-gray-500">Create, share, and use powerful prompts for large language models.</p>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/browse" className="text-sm text-gray-500 hover:text-jelly-blue transition-colors">
                  Browse Prompts
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-sm text-gray-500 hover:text-jelly-blue transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/featured" className="text-sm text-gray-500 hover:text-jelly-blue transition-colors">
                  Featured
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-sm text-gray-500 hover:text-jelly-blue transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-sm text-gray-500 hover:text-jelly-blue transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-500 hover:text-jelly-blue transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-500 hover:text-jelly-blue transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-500 hover:text-jelly-blue transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-500 hover:text-jelly-blue transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} JellyPrompt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
