import React from 'react';
import { SC } from '@/lib/tokens';

interface PhoneMockupProps {
  screen?: 'dashboard' | 'chat' | 'wallet' | 'esim' | 'aibot';
  scale?: number;
  tilt?: number;
  style?: React.CSSProperties;
}

const screenColors: Record<string, { top: string; accent: string; label: string }> = {
  dashboard: { top: SC.purpleGradDiag, accent: SC.primary, label: 'Dashboard' },
  chat: { top: SC.purpleGradDiag, accent: SC.primary, label: 'Messages' },
  wallet: { top: SC.purpleGradDiag, accent: SC.success, label: 'Wallet' },
  esim: { top: 'linear-gradient(135deg, #F59E0B 0%, #B45309 100%)', accent: SC.warning, label: 'eSIM' },
  aibot: { top: SC.purpleDeepGrad, accent: SC.primaryLight, label: 'Ben' },
};

export default function PhoneMockup({ screen = 'dashboard', scale = 0.62, tilt = 0, style = {} }: PhoneMockupProps) {
  const cfg = screenColors[screen];
  const W = 390 * scale;
  const H = 844 * scale;
  return (
    <div style={{
      width: W, height: H,
      transform: `rotate(${tilt}deg)`,
      position: 'relative',
      filter: 'drop-shadow(0 30px 60px rgba(58,12,170,0.30)) drop-shadow(0 10px 24px rgba(0,0,0,0.18))',
      borderRadius: 56 * scale,
      overflow: 'hidden',
      background: '#1A1A2E',
      flexShrink: 0,
      ...style,
    }}>
      {/* phone frame */}
      <div style={{
        position: 'absolute', inset: 0,
        borderRadius: 56 * scale,
        border: `${3 * scale}px solid rgba(255,255,255,0.12)`,
        zIndex: 10, pointerEvents: 'none',
      }} />
      {/* screen content */}
      <div style={{ position: 'absolute', inset: 0, background: SC.bg, display: 'flex', flexDirection: 'column' }}>
        {/* header */}
        <div style={{ height: H * 0.3, background: cfg.top, position: 'relative', padding: `${16 * scale}px` }}>
          {/* dynamic island */}
          <div style={{ width: 90 * scale, height: 26 * scale, borderRadius: 13 * scale, background: '#000', margin: `0 auto ${8 * scale}px` }} />
          <div style={{ marginTop: 8 * scale, color: '#fff', fontSize: 13 * scale, fontWeight: 700, opacity: 0.9 }}>{cfg.label}</div>
          {/* balance/info card */}
          <div style={{
            position: 'absolute', bottom: -20 * scale, left: 12 * scale, right: 12 * scale,
            background: 'rgba(255,255,255,0.15)', borderRadius: 14 * scale, padding: 12 * scale,
            backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.25)',
          }}>
            <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 9 * scale }}>Balance</div>
            <div style={{ color: '#fff', fontSize: 16 * scale, fontWeight: 800, marginTop: 2 * scale }}>₦ 42,500.00</div>
          </div>
        </div>
        {/* body */}
        <div style={{ flex: 1, padding: `${28 * scale}px ${12 * scale}px ${12 * scale}px`, display: 'flex', flexDirection: 'column', gap: 8 * scale }}>
          {/* action pills */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 6 * scale }}>
            {['Send','Receive','Top Up','More'].map((a) => (
              <div key={a} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 * scale }}>
                <div style={{ width: 32 * scale, height: 32 * scale, borderRadius: 10 * scale, background: 'rgba(94,23,235,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 12 * scale, height: 12 * scale, borderRadius: 3 * scale, background: cfg.accent, opacity: 0.6 }} />
                </div>
                <div style={{ fontSize: 7.5 * scale, color: SC.muted, fontWeight: 500 }}>{a}</div>
              </div>
            ))}
          </div>
          {/* skeleton rows */}
          {[1,2,3].map(i => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 * scale, padding: `${8 * scale}px 0`, borderBottom: `1px solid ${SC.hairline}` }}>
              <div style={{ width: 28 * scale, height: 28 * scale, borderRadius: 8 * scale, background: SC.bg }} />
              <div style={{ flex: 1 }}>
                <div style={{ height: 7 * scale, borderRadius: 4, background: SC.bg, marginBottom: 4 * scale, width: '60%' }} />
                <div style={{ height: 6 * scale, borderRadius: 4, background: SC.bg, width: '40%' }} />
              </div>
              <div style={{ height: 7 * scale, borderRadius: 4, background: i === 1 ? 'rgba(16,185,129,0.2)' : SC.bg, width: 30 * scale }} />
            </div>
          ))}
        </div>
        {/* bottom nav */}
        <div style={{ height: 44 * scale, borderTop: `1px solid ${SC.hairline}`, display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: `0 ${8 * scale}px`, background: '#fff' }}>
          {['Home','Chat','Feed','Alerts','Profile'].map((t, i) => (
            <div key={t} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 * scale }}>
              <div style={{ width: 14 * scale, height: 14 * scale, borderRadius: 4 * scale, background: i === 0 ? SC.primary : SC.hairline }} />
              <div style={{ fontSize: 5.5 * scale, color: i === 0 ? SC.primary : SC.faint, fontWeight: i === 0 ? 600 : 400 }}>{t}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
