import { NextRequest, NextResponse } from 'next/server';

const API_BASE = (process.env.WIFTCO_API_URL || 'https://api.wiftco.com').replace(/\/$/, '');

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body?.token) return NextResponse.json({ message: 'Invalid link.' }, { status: 400 });
  try {
    const response = await fetch(`${API_BASE}/api/marketing/unsubscribe?token=${encodeURIComponent(body.token)}`, { cache: 'no-store' });
    const result = await response.json().catch(() => ({}));
    return NextResponse.json({ message: result.message || result.detail }, { status: response.status });
  } catch {
    return NextResponse.json({ message: 'Unable to unsubscribe right now.' }, { status: 503 });
  }
}
