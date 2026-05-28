import React from 'react';
import { SC, WEB } from '@/lib/tokens';

type Variant = 'primary' | 'primaryDark' | 'outline' | 'outlineDark' | 'ghost' | 'ghostDark' | 'light';
type Size = 'sm' | 'md' | 'lg';

interface WBtnProps {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function WBtn({ variant = 'primary', size = 'md', children, style = {}, onClick, type = 'button', disabled }: WBtnProps) {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: 13, borderRadius: 10 },
    md: { padding: '12px 22px', fontSize: 14, borderRadius: 12 },
    lg: { padding: '16px 30px', fontSize: 15.5, borderRadius: 14 },
  }[size];

  const variants: Record<Variant, React.CSSProperties> = {
    primary: { background: SC.primary, color: '#fff', boxShadow: '0 10px 24px rgba(94,23,235,0.30)', border: 'none' },
    primaryDark: { background: SC.ink, color: '#fff', boxShadow: '0 10px 24px rgba(26,26,46,0.25)', border: 'none' },
    outline: { background: 'transparent', color: SC.ink, border: `1.5px solid ${SC.hairline}` },
    outlineDark: { background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.25)' },
    ghost: { background: 'transparent', color: SC.ink, border: 'none' },
    ghostDark: { background: 'transparent', color: '#fff', border: 'none' },
    light: { background: '#fff', color: SC.primary, boxShadow: '0 10px 24px rgba(0,0,0,0.10)', border: 'none' },
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{
        ...variants[variant],
        ...sizes,
        fontWeight: 600,
        fontFamily: WEB.font,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        cursor: disabled ? 'not-allowed' : 'pointer',
        letterSpacing: -0.1,
        opacity: disabled ? 0.6 : 1,
        transition: 'opacity 0.15s, transform 0.1s',
        ...style,
      }}
    >
      {children}
    </button>
  );
}
