import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Detect whether Supabase env vars are available.
const hasSupabaseEnv =
  Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) && Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export async function middleware(req: NextRequest) {
  // Always create an initial NextResponse.
  const res = NextResponse.next()

  // If envs are missing, skip Supabase and allow the request through.
  // This avoids runtime errors in preview environments without envs.
  if (!hasSupabaseEnv) {
    return res
  }

  // Explicitly pass env vars so the client doesn't try to auto-detect.
  const supabase = createMiddlewareClient(
    { req, res },
    {
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    },
  )

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const { pathname } = req.nextUrl

  const isProtected =
    pathname.startsWith("/dashboard") || pathname.startsWith("/prompts/new") || pathname.startsWith("/admin")

  const isAuthPage = pathname.startsWith("/login") || pathname.startsWith("/register")

  // Redirect unauthenticated users from protected routes to /login
  if (isProtected && !session) {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = "/login"
    // Keep track of where we came from (optional)
    redirectUrl.searchParams.set("redirectedFrom", pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // Redirect authenticated users away from auth pages to /dashboard
  if (isAuthPage && session) {
    const dashboardUrl = req.nextUrl.clone()
    dashboardUrl.pathname = "/dashboard"
    return NextResponse.redirect(dashboardUrl)
  }

  return res
}

export const config = {
  matcher: ["/dashboard/:path*", "/prompts/new/:path*", "/admin/:path*", "/login", "/register"],
}
