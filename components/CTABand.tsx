'use client';
import React, { useState } from 'react';
import { SC } from '@/lib/tokens';
import { IcoShield } from '@/components/icons';
import Container from '@/components/Container';
import WBtn from '@/components/WBtn';

interface CTABandProps {
  title?: string;
  sub?: string;
}

export default function CTABand({
  title = 'Get early access',
  sub = 'Be first in line when Wiftco opens to the public.',
}: CTABandProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email.includes('@')) setSubmitted(true);
  };

  return (
    <div style={{
      padding: '88px 0',
      background: SC.purpleGradDiag,
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: -100, right: -80, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
      <div style={{ position: 'absolute', bottom: -40, left: -20, opacity: 0.08, color: '#fff' }}>
        <svg width="240" height="240" viewBox="0 0 24 24"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z" fill="currentColor" /></svg>
      </div>
      <Container>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, position: 'relative' }}>
          <div style={{ maxWidth: 560 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: 2, marginBottom: 12 }}>EARLY ACCESS</div>
            <h2 style={{ margin: 0, fontSize: 44, fontWeight: 800, letterSpacing: -1.4, lineHeight: 1.05 }}>{title}</h2>
            <p style={{ marginTop: 12, fontSize: 16, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>{sub}</p>
          </div>
          <div style={{ width: 460 }}>
            {submitted ? (
              <div style={{
                padding: '20px 24px', borderRadius: 14,
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.25)',
                textAlign: 'center', fontSize: 16, fontWeight: 600,
              }}>
                ⚡ You're on the list! We'll notify you soon.
              </div>
            ) : (
              <div style={{ display: 'flex', gap: 8, padding: 6, background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 14, backdropFilter: 'blur(20px)' }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                  style={{
                    flex: 1, padding: '12px 16px', fontSize: 14,
                    color: '#fff', background: 'transparent', border: 'none', outline: 'none',
                    fontFamily: SC.font,
                  } as React.CSSProperties}
                />
                <WBtn variant="light" size="md" onClick={handleSubmit}>Notify me ⚡</WBtn>
              </div>
            )}
            <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.6)', marginTop: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                <IcoShield size={12} /> No spam · No card
              </span>
              <span style={{ width: 3, height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.4)', display: 'inline-block' }} />
              <span>62,400+ on the list</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
