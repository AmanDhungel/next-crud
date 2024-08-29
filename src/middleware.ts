import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const response = NextResponse.next();
    
    // Get the 'fname' cookie
    const cookie = request.cookies.get('fname');
    
    // Log the cookie value if it exists
    if (cookie) {
        console.log("Cookie value:", cookie.value);
    }

    // Redirect to /login if the cookie value is 'aman'
    if (cookie?.value !== 'aman') {
        return NextResponse.redirect('http://localhost:3000/login');
    }

    return response;
}

export const config = {
    matcher: [
        /*
         Match all routes except `/login` 
         and any nested routes under `/login`.
        */
        '/((?!login).*)',
    ],
};
