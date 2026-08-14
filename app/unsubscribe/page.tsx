'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import { SC } from '@/lib/tokens';

export default function UnsubscribePage() {
  const [message, setMessage] = useState('Updating your email preference…');

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get('token');
    if (!token) { setMessage('This unsubscribe link is invalid.'); return; }
    fetch('/api/unsubscribe', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token }),
    }).then(async response => {
      const result = await response.json().catch(() => ({}));
      setMessage(result.message || (response.ok ? 'You have been unsubscribed.' : 'Unable to unsubscribe.'));
    }).catch(() => setMessage('Unable to unsubscribe right now. Please contact support@wiftco.com.'));
  }, []);

  return <div style={{ fontFamily: SC.font, color: SC.ink }}><Nav /><main style={{ minHeight: '62vh', display: 'grid', placeItems: 'center', padding: '80px 20px' }}><Container><div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center', padding: 38, border: `1px solid ${SC.hairline}`, borderRadius: 22, boxShadow: SC.shadowSoft }}><div style={{ fontSize: 36 }}>⚡</div><h1 style={{ fontSize: 30 }}>Email preferences</h1><p style={{ color: SC.muted, lineHeight: 1.65 }}>{message}</p><Link href="/" style={{ color: SC.primary, fontWeight: 700 }}>Return to Wiftco</Link></div></Container></main><Footer /></div>;
}
