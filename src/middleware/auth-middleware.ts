import { NextResponse, type NextRequest } from "next/server";

export function authMiddleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isLoggedIn = req.cookies.get("ailc-auth-token");

  // Protect dashboard routes
  if (!isLoggedIn && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/auth/v2/login", req.url));
  }

  // Redirect logged-in users away from login page
  if (isLoggedIn && (pathname === "/auth/v2/login" || pathname === "/auth/v1/login")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}
