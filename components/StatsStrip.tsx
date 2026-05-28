import React from 'react';
import { SC } from '@/lib/tokens';
import Container from '@/components/Container';

interface StatItem {
  value: string;
  label: string;
}

interface StatsStripProps {
  items: StatItem[];
  dark?: boolean;
}

export default function StatsStrip({ items, dark = false }: StatsStripProps) {
  return (
    <div style={{
      background: dark ? SC.ink : '#FAFAFB',
      padding: '36px 0',
      borderTop: dark ? 'none' : `1px solid ${SC.hairline}`,
      borderBottom: dark ? 'none' : `1px solid ${SC.hairline}`,
    }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: 24 }}>
          {items.map((item, i) => (
            <div key={i} style={{
              paddingLeft: i ? 24 : 0,
              borderLeft: i ? `1px solid ${dark ? 'rgba(255,255,255,0.15)' : SC.hairline}` : 'none',
            }}>
              <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1, color: dark ? '#fff' : SC.ink }}>
                {item.value}
              </div>
              <div style={{ fontSize: 13, color: dark ? 'rgba(255,255,255,0.7)' : SC.muted, marginTop: 4, fontWeight: 500 }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
