// SwiftCom — Design tokens, Phone frame, Status bar, Bottom nav, Icons
// All screens are 390x844 (iPhone 14 Pro). Outfit primary font.

const SC = {
  // brand
  primary: '#5E17EB',
  primaryDark: '#3A0CAA',
  primaryLight: '#7B3CF0',
  success: '#10B981',
  danger:  '#EF4444',
  warning: '#F59E0B',

  // surface
  bg:      '#F3F4F6',
  card:    '#FFFFFF',
  ink:     '#1A1A2E',
  muted:   '#6B7280',
  faint:   '#9CA3AF',
  hairline:'#E5E7EB',

  // radius / shadow
  rCard: 14,
  rInput: 12,
  rPill: 999,
  shadow: '0 4px 16px rgba(0,0,0,0.08)',
  shadowSoft: '0 2px 8px rgba(0,0,0,0.04)',

  // type
  font: 'Outfit, Inter, "SF Pro Display", -apple-system, system-ui, sans-serif',

  // gradients
  purpleGrad: 'linear-gradient(180deg, #5E17EB 0%, #3A0CAA 100%)',
  purpleGradDiag: 'linear-gradient(135deg, #5E17EB 0%, #3A0CAA 100%)',
  purpleDeepGrad: 'radial-gradient(circle at 50% 35%, #5E17EB 0%, #2A0985 55%, #120736 100%)',
};

// ─────────────────────────────────────────────────────────────
// Icon set (Heroicons-style rounded, monochrome, stroke-based)
// All use width/height via `s` prop, color via currentColor.
// ─────────────────────────────────────────────────────────────
const Ico = {
  bolt: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z"/></svg>,
  send: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg>,
  receive: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 7L7 17M15 17H7v-8"/></svg>,
  plus: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>,
  more: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="18" cy="12" r="1.8"/></svg>,
  bell: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 1112 0c0 7 3 7 3 9H3c0-2 3-2 3-9zM10 21a2 2 0 004 0"/></svg>,
  eye: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>,
  eyeOff: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3l18 18M10.5 10.7a2 2 0 002.9 2.7M9.4 5.3A11 11 0 0112 5c6.5 0 10 7 10 7a16 16 0 01-3.4 4.3M6 6c-2.6 2-4 6-4 6s3.5 7 10 7c1.7 0 3.3-.5 4.6-1.2"/></svg>,
  check: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6"/></svg>,
  chevR: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>,
  chevL: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6"/></svg>,
  chevD: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>,
  search: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>,
  phone: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/></svg>,
  video: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3z"/></svg>,
  mic: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/></svg>,
  micOff: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3l18 18M9 9v2a3 3 0 005 2.2M15 12V6a3 3 0 00-5.7-1.3M5 11a7 7 0 001 3.5m3 3.2A7 7 0 0019 11M12 18v3"/></svg>,
  speaker: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H3v6h3l5 4V5zM15 9a3 3 0 010 6M18 6a7 7 0 010 12"/></svg>,
  keypad: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="6" r="1.5"/><circle cx="12" cy="6" r="1.5"/><circle cx="18" cy="6" r="1.5"/><circle cx="6" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="18" cy="12" r="1.5"/><circle cx="6" cy="18" r="1.5"/><circle cx="12" cy="18" r="1.5"/><circle cx="18" cy="18" r="1.5"/></svg>,
  end: (s=24) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M12 9c-3 0-5.7 1-7.7 2.7l-1.7-2A14 14 0 0112 7c3.6 0 7 1.3 9.7 3.7l-1.7 2C18 10 15 9 12 9zM6 16l-1.5-1.5a2 2 0 010-3l1.5-1.5a2 2 0 013 0L10 11a2 2 0 010 3l-1 1a2 2 0 01-3 0z" transform="rotate(135 12 12)"/></svg>,
  home: (s=22, fill=false) => fill
    ? <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M3 12l9-8 9 8v9a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1z"/></svg>
    : <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12l9-8 9 8v9a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1z"/></svg>,
  chat: (s=22, fill=false) => fill
    ? <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16a2 2 0 012 2v10a2 2 0 01-2 2h-9l-5 4v-4H4a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>
    : <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16a2 2 0 012 2v10a2 2 0 01-2 2h-9l-5 4v-4H4a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>,
  feed: (s=22, fill=false) => fill
    ? <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="13" width="11" height="7" rx="2"/><rect x="16" y="13" width="5" height="7" rx="2"/></svg>
    : <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="13" width="11" height="7" rx="2"/><rect x="16" y="13" width="5" height="7" rx="2"/></svg>,
  alert: (s=22, fill=false) => fill
    ? <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M6 8a6 6 0 1112 0c0 7 3 7 3 9H3c0-2 3-2 3-9zM10 21a2 2 0 004 0"/></svg>
    : <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 1112 0c0 7 3 7 3 9H3c0-2 3-2 3-9zM10 21a2 2 0 004 0"/></svg>,
  user: (s=22, fill=false) => fill
    ? <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0z"/></svg>
    : <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg>,

  // bill / category icons
  airtime: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/></svg>,
  data: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>,
  electric: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z"/></svg>,
  tv: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="13" rx="2"/><path d="M8 21h8M12 18v3"/></svg>,
  water: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="M12 2.5C9 6.5 5 11 5 15a7 7 0 0014 0c0-4-4-8.5-7-12.5z"/></svg>,
  grid: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>,
  history: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 109-9 9 9 0 00-7 3.3"/><path d="M3 3v5h5M12 7v5l3 2"/></svg>,
  transfer: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 4l-4 4 4 4M3 8h14M17 20l4-4-4-4M21 16H7"/></svg>,
  wallet: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-2"/><path d="M22 9h-5a3 3 0 100 6h5z"/></svg>,
  sim: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 2h7l4 4v14a2 2 0 01-2 2H6a2 2 0 01-2-2V7z"/><rect x="8" y="12" width="8" height="6" rx="1"/><path d="M10 12v6M14 12v6M8 15h8"/></svg>,
  bot: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="7" width="16" height="13" rx="3"/><circle cx="9" cy="13" r="1.2" fill="currentColor"/><circle cx="15" cy="13" r="1.2" fill="currentColor"/><path d="M12 2v5M9 17h6"/></svg>,
  lock: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>,
  globe: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>,
  edit: (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h4l10-10-4-4L4 16zM14 6l4 4"/></svg>,
  attach: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11l-9 9a5 5 0 11-7-7l9-9a3 3 0 014 4l-9 9a1 1 0 11-1.4-1.4L15 8"/></svg>,
  smiley: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 14a5 5 0 008 0M9 9h.01M15 9h.01"/></svg>,
  paperplane: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M3 11l18-8-8 18-2-8z"/></svg>,
  heart: (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21S3 14 3 8a5 5 0 019-3 5 5 0 019 3c0 6-9 13-9 13z"/></svg>,
  comment: (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 01-12 7l-5 1 1-5A8 8 0 1121 12z"/></svg>,
  share: (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 11l8-4M8 13l8 4"/></svg>,
  shield: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z"/></svg>,
  signout: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 17l5-5-5-5M21 12H9M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h4"/></svg>,
  back: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>,
  copy: (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2"/></svg>,
  qr: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M21 14v3M14 21h3M21 18v3"/></svg>,
  topup: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/><circle cx="12" cy="12" r="9"/></svg>,
  flag: (s=14) => <svg width={s} height={s} viewBox="0 0 24 16"><rect width="24" height="5.33" fill="#008753"/><rect y="5.33" width="24" height="5.33" fill="#fff"/><rect y="10.67" width="24" height="5.33" fill="#008753"/></svg>,
};

// ─────────────────────────────────────────────────────────────
// Phone frame — 390x844 (iPhone 14 Pro). Subtle bezel + dynamic island.
// Children get the full 390x844 — status bar is rendered ON TOP of content
// so screens with colored headers extend behind it.
// ─────────────────────────────────────────────────────────────
function Phone({ children, bg = SC.bg, statusDark = false, hideStatus = false, hideHome = false }) {
  return (
    <div style={{
      width: 390, height: 844,
      position: 'relative', overflow: 'hidden',
      background: bg,
      fontFamily: SC.font,
      color: SC.ink,
      WebkitFontSmoothing: 'antialiased',
    }}>
      {children}
      {!hideStatus && <StatusBar dark={statusDark} />}
      {!hideHome && <HomeIndicator dark={statusDark} />}
    </div>
  );
}

function StatusBar({ dark = false }) {
  const c = dark ? '#fff' : '#1A1A2E';
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, height: 54,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 32px', zIndex: 100, pointerEvents: 'none',
    }}>
      <span style={{ fontSize: 16, fontWeight: 600, color: c, fontFamily: '-apple-system, SF Pro, system-ui', letterSpacing: -0.2 }}>9:41</span>
      {/* dynamic island */}
      <div style={{ position: 'absolute', left: '50%', top: 11, transform: 'translateX(-50%)', width: 120, height: 35, borderRadius: 22, background: '#000' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {/* signal */}
        <svg width="18" height="11" viewBox="0 0 18 11">
          <rect x="0" y="7" width="3" height="4" rx="0.6" fill={c}/>
          <rect x="5" y="4.5" width="3" height="6.5" rx="0.6" fill={c}/>
          <rect x="10" y="2" width="3" height="9" rx="0.6" fill={c}/>
          <rect x="15" y="0" width="3" height="11" rx="0.6" fill={c}/>
        </svg>
        {/* wifi */}
        <svg width="16" height="11" viewBox="0 0 16 11" fill={c}>
          <path d="M8 2.5c2 0 4 0.8 5.5 2L15 3a10 10 0 00-14 0L2.5 4.5C4 3.3 6 2.5 8 2.5z"/>
          <path d="M8 5.8c1.2 0 2.4 0.5 3.2 1.3L12.5 5.7a6.5 6.5 0 00-9 0L4.8 7.1A4.6 4.6 0 018 5.8z"/>
          <circle cx="8" cy="9.5" r="1.3"/>
        </svg>
        {/* battery */}
        <svg width="26" height="12" viewBox="0 0 26 12">
          <rect x="0.5" y="0.5" width="22" height="11" rx="3" stroke={c} strokeOpacity="0.4" fill="none"/>
          <rect x="2" y="2" width="19" height="8" rx="1.5" fill={c}/>
          <path d="M24 4v4c0.7-0.2 1.3-1 1.3-2s-0.6-1.8-1.3-2z" fill={c} fillOpacity="0.4"/>
        </svg>
      </div>
    </div>
  );
}

function HomeIndicator({ dark = false }) {
  return (
    <div style={{
      position: 'absolute', bottom: 8, left: 0, right: 0,
      display: 'flex', justifyContent: 'center', zIndex: 100, pointerEvents: 'none',
    }}>
      <div style={{ width: 134, height: 5, borderRadius: 3, background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.3)' }}/>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Bottom navigation — 5 tabs
// ─────────────────────────────────────────────────────────────
function BottomNav({ active = 'home' }) {
  const tabs = [
    { id: 'home',  label: 'Home',     ico: Ico.home },
    { id: 'chat',  label: 'Messages', ico: Ico.chat },
    { id: 'feed',  label: 'Feed',     ico: Ico.feed },
    { id: 'alert', label: 'Alerts',   ico: Ico.alert, badge: 3 },
    { id: 'user',  label: 'Profile',  ico: Ico.user },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      background: '#fff',
      borderTop: `1px solid ${SC.hairline}`,
      padding: '8px 8px 28px',
      display: 'flex', justifyContent: 'space-around', alignItems: 'center',
      zIndex: 50,
    }}>
      {tabs.map(t => {
        const on = t.id === active;
        return (
          <div key={t.id} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            color: on ? SC.primary : SC.faint, position: 'relative',
            padding: '6px 14px', borderRadius: 12,
            background: on ? 'rgba(94,23,235,0.08)' : 'transparent',
          }}>
            <div style={{ position: 'relative' }}>
              {t.ico(22, on)}
              {t.badge && <div style={{
                position: 'absolute', top: -4, right: -8,
                minWidth: 16, height: 16, borderRadius: 8, padding: '0 4px',
                background: SC.danger, color: '#fff', fontSize: 10, fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{t.badge}</div>}
            </div>
            <span style={{ fontSize: 10.5, fontWeight: on ? 600 : 500 }}>{t.label}</span>
          </div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Avatar — initials block in a palette of brand-adjacent colors
// ─────────────────────────────────────────────────────────────
const AVATAR_PALETTE = [
  ['#5E17EB', '#3A0CAA'], ['#10B981', '#047857'], ['#F59E0B', '#B45309'],
  ['#EF4444', '#B91C1C'], ['#0EA5E9', '#0369A1'], ['#EC4899', '#9D174D'],
  ['#8B5CF6', '#5B21B6'], ['#14B8A6', '#0F766E'],
];
function avatarColors(seed = '') {
  let h = 0; for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) | 0;
  return AVATAR_PALETTE[Math.abs(h) % AVATAR_PALETTE.length];
}
function Avatar({ name = '?', size = 40, online = false, ring, style = {} }) {
  const [a, b] = avatarColors(name);
  const initials = name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const fs = Math.round(size * 0.38);
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0, ...style }}>
      <div style={{
        width: size, height: size, borderRadius: size / 2,
        background: `linear-gradient(135deg, ${a}, ${b})`,
        color: '#fff', fontWeight: 700, fontSize: fs,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: ring ? `0 0 0 2.5px #fff, 0 0 0 4.5px ${ring}` : 'none',
        letterSpacing: -0.2,
      }}>{initials}</div>
      {online && <div style={{
        position: 'absolute', bottom: 0, right: 0,
        width: Math.max(10, size * 0.28), height: Math.max(10, size * 0.28),
        borderRadius: '50%', background: SC.success,
        border: '2px solid #fff',
      }}/>}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────
const ngn = (n) => '₦' + n.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const ngnPlain = (n) => '₦' + n.toLocaleString('en-NG');

function Pill({ children, color = SC.primary, bg, style = {} }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '4px 10px', borderRadius: 999,
      background: bg || (color === SC.success ? 'rgba(16,185,129,0.12)'
                  : color === SC.warning ? 'rgba(245,158,11,0.12)'
                  : color === SC.danger ? 'rgba(239,68,68,0.12)'
                  : 'rgba(94,23,235,0.10)'),
      color, fontSize: 11, fontWeight: 600, letterSpacing: 0.1,
      ...style,
    }}>{children}</span>
  );
}

// Status bar slot label — used by labels above each screen in the canvas
function ScreenLabel({ flow, n, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
      <span style={{ fontSize: 11, fontWeight: 700, color: SC.primary, letterSpacing: 0.8 }}>FLOW {flow} · {String(n).padStart(2,'0')}</span>
      <span style={{ fontSize: 13, color: '#1a1a2e', fontWeight: 500 }}>{title}</span>
    </div>
  );
}

Object.assign(window, { SC, Ico, Phone, StatusBar, HomeIndicator, BottomNav, Avatar, Pill, ngn, ngnPlain, ScreenLabel });
