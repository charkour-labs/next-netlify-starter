import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname, searchParams } = request.nextUrl;
    const isBGroup = request.cookies.get('group') === 'B' || searchParams.get('group') === 'B';
    if (isBGroup && pathname === '/') {
        return NextResponse.rewrite(new URL('/other', request.url));
    } else if (pathname === '/other') {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/other'],
};