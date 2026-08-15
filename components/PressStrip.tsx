'use client';
import React from 'react';
import { SC, WEB } from '@/lib/tokens';
import Container from '@/components/Container';
import { useResponsive } from '@/lib/useResponsive';

const OUTLETS = ['Private Development', 'Secure Architecture', 'Provider-Independent', 'Built in Nigeria'];

export default function PressStrip() {
  const { isMobile } = useResponsive();

  return (
    <div style={{ padding: '40px 0', background: '#fff', borderBottom: `1px solid ${SC.hairline}` }}>
      <Container>
        <div style={{
          textAlign: 'center', fontSize: 11.5, fontWeight: 700,
          color: SC.muted, letterSpacing: 2, marginBottom: 22,
        }}>
          PRODUCT FOUNDATION
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : `repeat(${OUTLETS.length}, 1fr)`, alignItems: 'center', gap: isMobile ? 12 : 16 }}>
          {OUTLETS.map((name, i) => (
            <div key={i} style={{
              textAlign: 'center', fontSize: isMobile ? 13 : 18, fontWeight: 700,
              color: SC.faint, letterSpacing: -0.5,
              fontFamily: i % 2 ? 'Georgia, serif' : WEB.font,
              fontStyle: i === 2 ? 'italic' : 'normal',
            }}>
              {name}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
