import { NextRequest, NextResponse } from 'next/server';
import { ACCESS_COOKIE, clearAuthCookies, refreshAccess, setAuthCookies, staffRequest } from '../../../../../lib/admin-server';

const allowed = new Set(['overview', 'users', 'kyc', 'roles', 'wallets', 'transactions', 'esims', 'content', 'support', 'marketing', 'partnerships', 'audit']);
const telecom = new Set(['system-health', 'metrics', 'calls', 'fraud-alerts', 'providers', 'numbers', 'assignments', 'cdrs', 'rates', 'webhook-events']);

function target(parts: string[], search: string) {
  if (parts[0] === 'telecom' && telecom.has(parts[1])) return `/api/telecom/admin/${parts.slice(1).join('/')}${search}`;
  if (allowed.has(parts[0])) return `/api/admin/${parts.join('/')}${search}`;
  return null;
}

async function handle(request: NextRequest, context: { params: { path: string[] } }) {
  const path = target(context.params.path, request.nextUrl.search);
  if (!path) return NextResponse.json({ detail: 'Admin resource not allowed.' }, { status: 404 });
  const body = ['GET', 'HEAD'].includes(request.method) ? undefined : await request.text();
  const init = { method: request.method, body, headers: body ? { 'Content-Type': request.headers.get('content-type') || 'application/json' } : undefined };
  let token = request.cookies.get(ACCESS_COOKIE)?.value;
  let refreshed = null;
  let result = token ? await staffRequest(path, token, init) : null;
  if (!result || result.status === 401) {
    refreshed = await refreshAccess(request);
    if (refreshed) result = await staffRequest(path, refreshed.access_token, init);
  }
  if (!result) return NextResponse.json({ detail: 'Session expired.' }, { status: 401 });
  const response = new NextResponse(await result.arrayBuffer(), {
    status: result.status,
    headers: { 'Content-Type': result.headers.get('content-type') || 'application/json' },
  });
  if (refreshed) setAuthCookies(response, refreshed);
  if (result.status === 401) clearAuthCookies(response);
  return response;
}

export const GET = handle;
export const POST = handle;
export const PATCH = handle;
