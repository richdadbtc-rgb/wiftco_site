import { NextRequest, NextResponse } from 'next/server';

const API_BASE = (process.env.WIFTCO_API_URL || 'https://api.wiftco.com').replace(/\/$/, '');

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body.email !== 'string') {
    return NextResponse.json({ message: 'Enter a valid email address.' }, { status: 400 });
  }
  try {
    const response = await fetch(`${API_BASE}/api/marketing/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      cache: 'no-store',
    });
    const result = await response.json().catch(() => ({}));
    return NextResponse.json(
      { message: result.message || result.detail || 'Unable to subscribe.' },
      { status: response.status },
    );
  } catch {
    return NextResponse.json(
      { message: 'Subscriptions are temporarily unavailable. Please try again shortly.' },
      { status: 503 },
    );
  }
}
