import { NextRequest, NextResponse } from 'next/server';
import { backendFetch, setAuthCookies, staffRequest } from '../../../../../lib/admin-server';

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  if (!body.identifier || !body.password) {
    return NextResponse.json({ detail: 'Email and password are required.' }, { status: 400 });
  }
  const login = await backendFetch('/api/auth/login', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ identifier: body.identifier, password: body.password }),
  });
  const payload = await login.json().catch(() => ({ detail: 'Login failed.' }));
  if (!login.ok) return NextResponse.json(payload, { status: login.status });

  const session = await staffRequest('/api/admin/session', payload.access_token);
  if (!session.ok) {
    return NextResponse.json({ detail: 'This account does not have administrator access.' }, { status: 403 });
  }
  const response = NextResponse.json(await session.json());
  setAuthCookies(response, payload);
  return response;
}
