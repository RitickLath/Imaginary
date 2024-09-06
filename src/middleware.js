import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in",
  "/sign-up",
  "/home",
]);

export default clerkMiddleware((auth, req) => {
  const { userId } = auth();
  const currentUrl = new URL(req.url);
  const isHomePage = currentUrl.pathname === "/home";
  const isLogin = currentUrl.pathname === "/sign-in";
  const isSignup = currentUrl.pathname === "/sign-up";

  // if logged in and trying to access login or signup part redirect to home
  if (userId && isPublicRoute(req) && (isLogin || isSignup)) {
    return NextResponse.redirect(new URL("/home", req.url));
  }
  if (!userId) {
    if (!isPublicRoute(req)) {
      return NextResponse.redirect(new URL("/sign-up", req.url));
    }
  }

  return NextResponse.next();
});

// default from clerk
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
