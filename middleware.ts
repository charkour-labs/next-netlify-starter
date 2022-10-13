import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const cookie = request.cookies.get("customer_group");
  const isBGroup = cookie === "other" || searchParams.get("group") === "other";
  const otherUrl = new URL("/other", request.url);
  console.log({
    url: request.url,
    pathname: pathname.toString(),
    searchParams: searchParams.toString(),
    cookie,
    isBGroup,
    pathnameMatch: ["/", "/en-US"].includes(pathname.toString()),
    locale: request.nextUrl.locale.toString(),
    defaultLocale: request.nextUrl.defaultLocale?.toString(),
    domainLocale: request.nextUrl.domainLocale?.toString(),
    otherUrl: otherUrl.toString(),
    rewrite: NextResponse.rewrite.toString(),
  });

  if (isBGroup && ["/", "/en-US"].includes(pathname.toString())) {
    console.log("rewrite");
    return NextResponse.rewrite(otherUrl);
  } else if (pathname === "/other") {
    console.log("404");
    return NextResponse.rewrite(new URL("/404", request.url));
  }
  console.log("else");

  return NextResponse.next();
}