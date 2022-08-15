import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname, searchParams } = request.nextUrl;
    console.log(pathname, searchParams, request.cookies.get('group'))
    const isBGroup = request.cookies.get('group') === 'B' || searchParams.get('group') === 'B';
    if (isBGroup && pathname === '/') {
	console.log('rewrite')
        return NextResponse.rewrite(new URL('/other', request.url));
    } else if (pathname === '/other') {
	console.log('redirect');
        return NextResponse.redirect(new URL('/', request.url));
    }
    console.log('else')
    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/other'],
};