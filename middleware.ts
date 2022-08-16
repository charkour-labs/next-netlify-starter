import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname, searchParams } = request.nextUrl;
    const cookie = request.cookies.get('customer_group');
    console.log({ pathname: pathname.toString(), searchParams: searchParams.toString(), cookie })
    const isBGroup = cookie === 'other' || searchParams.get('group') === 'other';
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