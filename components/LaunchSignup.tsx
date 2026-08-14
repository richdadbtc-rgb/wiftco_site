'use client';

import React, { FormEvent, useState } from 'react';
import Link from 'next/link';
import { SC } from '@/lib/tokens';
import WBtn from '@/components/WBtn';

interface LaunchSignupProps {
  source: string;
  stacked?: boolean;
}

export default function LaunchSignup({ source, stacked = false }: LaunchSignupProps) {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  async function submit(event?: FormEvent) {
    event?.preventDefault();
    if (!consent) {
      setError('Please agree to receive Wiftco launch and product updates.');
      setStatus('error');
      return;
    }
    setStatus('loading');
    setError('');
    try {
      const response = await fetch('/api/launch-updates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, consent, source, company }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || 'Please check your email and try again.');
      setStatus('success');
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Unable to subscribe right now.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div role="status" style={{ padding: '20px 24px', borderRadius: 14, background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', textAlign: 'center', fontSize: 16, fontWeight: 600 }}>
        ⚡ You&apos;re on the list! We&apos;ll notify you about Wiftco updates and launch.
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate>
      <div style={{ display: 'flex', flexDirection: stacked ? 'column' : 'row', gap: 8, padding: 6, background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 14, backdropFilter: 'blur(20px)' }}>
        <label htmlFor={`launch-email-${source}`} style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>Email address</label>
        <input id={`launch-email-${source}`} type="email" required autoComplete="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="you@email.com" style={{ flex: 1, minWidth: 0, padding: '12px 16px', fontSize: 14, color: '#fff', background: 'transparent', border: 'none', outline: 'none', fontFamily: SC.font } as React.CSSProperties} />
        <input type="text" name="company" value={company} onChange={event => setCompany(event.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-10000px' }} />
        <WBtn type="submit" variant="light" size="md" disabled={status === 'loading'} style={stacked ? { width: '100%' } : {}}>
          {status === 'loading' ? 'Joining…' : 'Notify me ⚡'}
        </WBtn>
      </div>
      <label style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginTop: 12, fontSize: 11.5, lineHeight: 1.45, color: 'rgba(255,255,255,0.72)', cursor: 'pointer' }}>
        <input type="checkbox" checked={consent} onChange={event => setConsent(event.target.checked)} style={{ marginTop: 2, accentColor: '#18e66b' }} />
        <span>I agree to receive Wiftco launch and product-update emails. I can unsubscribe anytime. See the <Link href="/privacy" style={{ color: '#fff', fontWeight: 700 }}>Privacy Policy</Link>.</span>
      </label>
      {status === 'error' && <div role="alert" style={{ marginTop: 9, fontSize: 12, color: '#ffd6df' }}>{error}</div>}
    </form>
  );
}
