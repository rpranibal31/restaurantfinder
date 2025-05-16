// middleware.js
export const config = {
  matcher: '/:path*'  // corre en todas las rutas
};

export function middleware(req) {
  const auth = req.headers.get('authorization') || '';
  if (!auth.startsWith('Basic ')) {
    return new Response('Auth required', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Protected"' }
    });
  }
  const [user, pass] = atob(auth.split(' ')[1]).split(':');
  if (
    user !== process.env.BASIC_AUTH_USER ||
    pass !== process.env.BASIC_AUTH_PASSWORD
  ) {
    return new Response('Auth required', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Protected"' }
    });
  }
  return Response.next();
}
