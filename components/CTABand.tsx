'use client';
import React from 'react';
import { SC } from '@/lib/tokens';
import Container from '@/components/Container';
import LaunchSignup from '@/components/LaunchSignup';
import { useResponsive } from '@/lib/useResponsive';

interface CTABandProps {
  title?: string;
  sub?: string;
}

export default function CTABand({
  title = 'Get early access',
  sub = 'Be first in line when Wiftco opens to the public.',
}: CTABandProps) {
  const { isMobile } = useResponsive();

  return (
    <div style={{
      padding: isMobile ? '60px 0' : '88px 0',
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
        <div style={{ display: 'flex', alignItems: isMobile ? 'stretch' : 'center', justifyContent: 'space-between', gap: 40, position: 'relative', flexDirection: isMobile ? 'column' : 'row' }}>
          <div style={{ maxWidth: isMobile ? '100%' : 560 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: 2, marginBottom: 12 }}>EARLY ACCESS</div>
            <h2 style={{ margin: 0, fontSize: isMobile ? 32 : 44, fontWeight: 800, letterSpacing: -1.4, lineHeight: 1.05 }}>{title}</h2>
            <p style={{ marginTop: 12, fontSize: 16, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>{sub}</p>
          </div>
          <div style={{ width: isMobile ? '100%' : 460 }}>
            <LaunchSignup source="cta" stacked={isMobile} />
          </div>
        </div>
      </Container>
    </div>
  );
}
