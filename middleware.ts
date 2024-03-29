import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { MiddlewareRequest } from '@netlify/next';

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const middlewareRequest = new MiddlewareRequest(request)
  const cookie = request.cookies.get("customer_group");
  const isBGroup = cookie.value === "other" || searchParams.get("group") === "other";
  const otherUrl = new URL("/other", request.url);
  const pathnameMatch = pathname === '/';
  console.log({
    url: request.url,
    pathname: pathname.toString(),
    searchParams: searchParams.toString(),
    cookie,
    isBGroup,
    pathnameMatch,
    locale: request.nextUrl.locale.toString(),
    defaultLocale: request.nextUrl.defaultLocale?.toString(),
    domainLocale: request.nextUrl.domainLocale?.toString(),
    
  });

  if (isBGroup && pathnameMatch) {
    console.log("rewrite");
    //return NextResponse.rewrite(otherUrl);
    return middlewareRequest.rewrite(otherUrl);
  } else if (pathname === "/other") {
    console.log("404");
    //return NextResponse.rewrite(new URL("/404", request.url));
  }
  console.log("else");

  return NextResponse.next();
}

export const config = {
  matcher: [],
};