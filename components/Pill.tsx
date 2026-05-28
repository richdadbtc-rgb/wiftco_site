import React from 'react';
import { SC } from '@/lib/tokens';

interface PillProps {
  children: React.ReactNode;
  color?: string;
  bg?: string;
  style?: React.CSSProperties;
}

export default function Pill({ children, color = SC.primary, bg, style = {} }: PillProps) {
  const defaultBg = color === SC.success ? 'rgba(16,185,129,0.12)'
    : color === SC.warning ? 'rgba(245,158,11,0.12)'
    : color === SC.danger ? 'rgba(239,68,68,0.12)'
    : 'rgba(94,23,235,0.10)';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '4px 10px', borderRadius: 999,
      background: bg || defaultBg,
      color, fontSize: 11, fontWeight: 600, letterSpacing: 0.1,
      ...style,
    }}>{children}</span>
  );
}
