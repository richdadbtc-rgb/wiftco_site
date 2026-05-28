import React from 'react';

const PALETTE: [string, string][] = [
  ['#5E17EB', '#3A0CAA'], ['#10B981', '#047857'], ['#F59E0B', '#B45309'],
  ['#EF4444', '#B91C1C'], ['#0EA5E9', '#0369A1'], ['#EC4899', '#9D174D'],
  ['#8B5CF6', '#5B21B6'], ['#14B8A6', '#0F766E'],
];

function avatarColors(seed: string): [string, string] {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) | 0;
  return PALETTE[Math.abs(h) % PALETTE.length];
}

interface AvatarProps {
  name?: string;
  size?: number;
  style?: React.CSSProperties;
}

export default function Avatar({ name = '?', size = 40, style = {} }: AvatarProps) {
  const [a, b] = avatarColors(name);
  const initials = name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const fs = Math.round(size * 0.38);
  return (
    <div style={{
      width: size, height: size, borderRadius: size / 2,
      background: `linear-gradient(135deg, ${a}, ${b})`,
      color: '#fff', fontWeight: 700, fontSize: fs,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      letterSpacing: -0.2, flexShrink: 0,
      ...style,
    }}>{initials}</div>
  );
}
