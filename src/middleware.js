import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in",
  "/sign-up",
  "/",
  "/ai-image-enhancer",
  "/bg-removal",
  "/generative-fill",
  "/generative-restore",
  "/generative-replace",
  "/round-corner",
  "/sharpen",
]);

export default clerkMiddleware((auth, req) => {
  const { userId } = auth(); // Access userId from auth object
  const currentUrl = req.url; // Get current request URL

  // If the user is logged in and accessing a public route, redirect to the home page
  if (userId && isPublicRoute(req)) {
    return NextResponse.redirect(new URL("/home", currentUrl));
  }

  // If the user is not logged in and accessing a protected route, redirect to the sign-up page
  if (!userId && !isPublicRoute(req)) {
    return NextResponse.redirect(new URL("/sign-up", currentUrl));
  }

  // If the user is logged in and accessing a protected route, allow access

  return NextResponse.next(); // Continue to the protected route
});

// Default Clerk config
export const config = {
  matcher: [
    // Match all routes except for static assets and Next.js internals
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always apply to API routes
    "/(api|trpc)(.*)",
  ],
};
