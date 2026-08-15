import { NextRequest, NextResponse } from 'next/server';
import { ACCESS_COOKIE, clearAuthCookies, refreshAccess, setAuthCookies, staffRequest } from '../../../../../lib/admin-server';

export async function GET(request: NextRequest) {
  let token = request.cookies.get(ACCESS_COOKIE)?.value;
  let refreshed = null;
  let result = token ? await staffRequest('/api/admin/session', token) : null;
  if (!result || result.status === 401) {
    refreshed = await refreshAccess(request);
    if (refreshed) {
      token = refreshed.access_token;
      result = await staffRequest('/api/admin/session', token);
    }
  }
  if (!result?.ok) {
    const response = NextResponse.json({ detail: 'Session expired.' }, { status: 401 });
    clearAuthCookies(response);
    return response;
  }
  const response = NextResponse.json(await result.json());
  if (refreshed) setAuthCookies(response, refreshed);
  return response;
}
