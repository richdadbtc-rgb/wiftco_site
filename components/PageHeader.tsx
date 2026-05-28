import React from 'react';
import { SC } from '@/lib/tokens';
import { IcoBolt } from '@/components/icons';
import Container from '@/components/Container';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export default function PageHeader({ eyebrow, title, subtitle, dark = false }: PageHeaderProps) {
  return (
    <div style={{
      padding: '64px 0 56px',
      background: dark ? SC.purpleGradDiag : '#FAFAFB',
      color: dark ? '#fff' : SC.ink,
      borderBottom: dark ? 'none' : `1px solid ${SC.hairline}`,
      position: 'relative', overflow: 'hidden',
    }}>
      {dark && (
        <div style={{ position: 'absolute', top: -30, right: -40, opacity: 0.08, color: '#fff' }}>
          <IcoBolt size={340} />
        </div>
      )}
      <Container>
        <div style={{ fontSize: 12, fontWeight: 700, color: dark ? 'rgba(255,255,255,0.7)' : SC.primary, letterSpacing: 2 }}>
          {eyebrow}
        </div>
        <h1 style={{
          margin: '12px 0 14px', fontSize: 56, fontWeight: 800,
          letterSpacing: -2, lineHeight: 1.05, maxWidth: 820,
        }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{
            margin: 0, fontSize: 18,
            color: dark ? 'rgba(255,255,255,0.8)' : SC.muted,
            maxWidth: 660, lineHeight: 1.5,
          }}>
            {subtitle}
          </p>
        )}
      </Container>
    </div>
  );
}
