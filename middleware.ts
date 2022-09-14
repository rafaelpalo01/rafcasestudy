import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  function middleware(req: NextRequest) {
    // return NextResponse
    return NextResponse.rewrite(new URL("/ce101", req.url));
  },
  {
    callbacks: {
      authorized({ token }) {
        return token?.role === "admin";
      },
    },
  }
);

export const config = { matcher: ["/ce101", "/admin"] };