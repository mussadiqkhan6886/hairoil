// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  
  // Set this to false once payment is complete
  const payPending = true;

  // Redirect unpaid clients to /payment (except if they are already there)
  if (payPending && !pathname.startsWith("/payment") && !pathname.startsWith("/admin-dashboard")) {
    return NextResponse.redirect(new URL("/payment", req.url));
  }

  // ADMIN protected routes (via custom cookie)
  if (
    pathname.startsWith("/admin-dashboard") &&
    !pathname.startsWith("/admin-dashboard/login")
  ) {
    const token = req.cookies.get("adminToken")?.value;
    if (!token) {
      return NextResponse.redirect(
        new URL("/admin-dashboard/login", req.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/:path*", // Apply to all routes
  ],
};
