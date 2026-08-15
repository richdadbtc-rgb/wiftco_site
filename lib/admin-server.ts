import { NextRequest, NextResponse } from 'next/server';

export const ACCESS_COOKIE = 'wiftco_admin_access';
export const REFRESH_COOKIE = 'wiftco_admin_refresh';
const apiUrl = (process.env.WIFTCO_API_URL || 'https://api.wiftco.com').replace(/\/$/, '');

type Tokens = { access_token: string; refresh_token: string };

export const backendFetch = (path: string, init?: RequestInit) =>
  fetch(`${apiUrl}${path}`, { ...init, cache: 'no-store' });

export function setAuthCookies(response: NextResponse, tokens: Tokens) {
  const secure = process.env.NODE_ENV === 'production' && process.env.ADMIN_COOKIE_SECURE !== 'false';
  const common = { httpOnly: true, secure, sameSite: 'strict' as const, path: '/' };
  response.cookies.set(ACCESS_COOKIE, tokens.access_token, { ...common, maxAge: 60 * 30 });
  response.cookies.set(REFRESH_COOKIE, tokens.refresh_token, { ...common, maxAge: 60 * 60 * 24 * 30 });
}

export function clearAuthCookies(response: NextResponse) {
  response.cookies.set(ACCESS_COOKIE, '', { path: '/', maxAge: 0 });
  response.cookies.set(REFRESH_COOKIE, '', { path: '/', maxAge: 0 });
}

export async function refreshAccess(request: NextRequest) {
  const refresh = request.cookies.get(REFRESH_COOKIE)?.value;
  if (!refresh) return null;
  const response = await backendFetch('/api/auth/refresh', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refresh_token: refresh }),
  });
  if (!response.ok) return null;
  return (await response.json()) as Tokens;
}

export async function staffRequest(path: string, token: string, init?: RequestInit) {
  const headers = new Headers(init?.headers);
  headers.set('Authorization', `Bearer ${token}`);
  if (init?.body && !headers.has('Content-Type')) headers.set('Content-Type', 'application/json');
  return backendFetch(path, { ...init, headers });
}
