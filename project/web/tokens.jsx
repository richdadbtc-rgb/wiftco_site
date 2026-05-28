// SwiftCom Website — design system primitives
// Reuses SC tokens from tokens.jsx; adds web-specific helpers.
// All web pages render inside a fixed 1440-wide frame artboard.

const W_FRAME = 1440;

// ─────────────────────────────────────────────────────────────
// Tweaks-driven CSS-var palette (set on :root by tweaks panel).
// Pages read these via CSS so the entire site can recolor live.
// ─────────────────────────────────────────────────────────────
const WEB_DEFAULTS = {
  palette: 'electric',   // 'electric' | 'midnight' | 'lavender'
  density: 'airy',       // 'airy' | 'compact'
  font:    'outfit',     // 'outfit' | 'inter' | 'space'
};

const WEB_PALETTES = {
  electric: { primary: '#5E17EB', primaryDark: '#3A0CAA', primarySoft: '#F3EEFE', accent: '#10B981', heroBg: '#0E0529', heroFrom: '#5E17EB', heroTo: '#2A0985' },
  midnight: { primary: '#1A1A2E', primaryDark: '#0B0B18', primarySoft: '#E9E9EE', accent: '#5E17EB', heroBg: '#08081A', heroFrom: '#1A1A2E', heroTo: '#000005' },
  lavender: { primary: '#7B3CF0', primaryDark: '#5E17EB', primarySoft: '#F6F1FF', accent: '#10B981', heroBg: '#F6F1FF', heroFrom: '#A685F2', heroTo: '#5E17EB' },
};

function applyWebTweaks(t) {
  const root = document.documentElement;
  const p = WEB_PALETTES[t.palette] || WEB_PALETTES.electric;
  root.style.setProperty('--web-primary',      p.primary);
  root.style.setProperty('--web-primary-dark', p.primaryDark);
  root.style.setProperty('--web-primary-soft', p.primarySoft);
  root.style.setProperty('--web-accent',       p.accent);
  root.style.setProperty('--web-hero-bg',      p.heroBg);
  root.style.setProperty('--web-hero-from',    p.heroFrom);
  root.style.setProperty('--web-hero-to',      p.heroTo);
  // density: section vertical padding
  const dense = t.density === 'compact';
  root.style.setProperty('--web-py',           dense ? '64px'  : '110px');
  root.style.setProperty('--web-py-lg',        dense ? '80px'  : '140px');
  root.style.setProperty('--web-block-gap',    dense ? '48px'  : '72px');
  // font
  const f = { outfit: 'Outfit', inter: 'Inter', space: '"Space Grotesk"' }[t.font] || 'Outfit';
  root.style.setProperty('--web-font',         `${f}, Inter, system-ui, sans-serif`);
}

// run on first import with defaults so initial paint isn't broken
if (typeof document !== 'undefined') applyWebTweaks(WEB_DEFAULTS);

// inject one-time css for web utility classes
if (typeof document !== 'undefined' && !document.getElementById('web-styles')) {
  const s = document.createElement('style');
  s.id = 'web-styles';
  s.textContent = `
    .web-root { font-family: var(--web-font); color: #1A1A2E; background: #fff; }
    .web-root * { box-sizing: border-box; }
    .web-container { width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 56px; }
    .web-btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 24px; border-radius: 999px; font-family: inherit; font-weight: 600; font-size: 15px; border: none; cursor: pointer; transition: transform .12s, box-shadow .12s; line-height: 1; }
    .web-btn-primary { background: var(--web-primary); color: #fff; box-shadow: 0 12px 28px rgba(94,23,235,0.35); }
    .web-btn-primary:hover { transform: translateY(-1px); box-shadow: 0 16px 34px rgba(94,23,235,0.45); }
    .web-btn-ghost   { background: rgba(255,255,255,0.10); color: #fff; border: 1px solid rgba(255,255,255,0.18); }
    .web-btn-outline { background: #fff; color: var(--web-primary); border: 1.5px solid var(--web-primary); }
    .web-btn-lg      { padding: 16px 28px; font-size: 16px; }
    .web-link { color: var(--web-primary); font-weight: 600; text-decoration: none; }
    .web-eyebrow { display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; border-radius: 999px; background: rgba(94,23,235,0.10); color: var(--web-primary); font-size: 12px; font-weight: 700; letter-spacing: 0.5px; }
    .web-eyebrow.on-dark { background: rgba(255,255,255,0.12); color: #fff; border: 1px solid rgba(255,255,255,0.20); }
    .web-h1 { font-size: 84px; line-height: 0.98; font-weight: 800; letter-spacing: -2.5px; margin: 0; }
    .web-h1-md { font-size: 64px; line-height: 1.04; font-weight: 800; letter-spacing: -1.8px; margin: 0; }
    .web-h2 { font-size: 56px; line-height: 1.05; font-weight: 800; letter-spacing: -1.4px; margin: 0; text-wrap: balance; }
    .web-h3 { font-size: 28px; line-height: 1.2; font-weight: 700; letter-spacing: -0.5px; margin: 0; }
    .web-lede { font-size: 20px; line-height: 1.5; color: #6B7280; margin: 0; text-wrap: pretty; }
    .web-card { background: #fff; border-radius: 24px; border: 1px solid #E5E7EB; box-shadow: 0 4px 24px rgba(0,0,0,0.04); }
    .web-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .web-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .web-section { padding: var(--web-py) 0; }
    .web-section-lg { padding: var(--web-py-lg) 0; }
    .web-block-gap { display: flex; flex-direction: column; gap: var(--web-block-gap); }
  `;
  document.head.appendChild(s);
}

// ─────────────────────────────────────────────────────────────
// Logo
// ─────────────────────────────────────────────────────────────
function WebLogo({ light = false, size = 36 }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <div style={{
        width: size, height: size, borderRadius: 10,
        background: light ? '#fff' : 'var(--web-primary)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: light ? 'none' : '0 6px 14px rgba(94,23,235,0.35)',
      }}>
        <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 24 24" fill={light ? '#5E17EB' : '#fff'}><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z"/></svg>
      </div>
      <span style={{ fontSize: size * 0.55, fontWeight: 800, letterSpacing: -0.6, color: light ? '#fff' : '#1A1A2E' }}>SwiftCom</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Top nav — sticky-feel, blurred. Two variants: light (over white)
// and on-dark (over hero bg).
// ─────────────────────────────────────────────────────────────
function WebNav({ light = false, active }) {
  const links = ['Features', 'Pricing', 'Business', 'Security', 'Company', 'Help'];
  const c = light ? 'rgba(255,255,255,0.85)' : '#374151';
  const cActive = light ? '#fff' : '#1A1A2E';
  return (
    <div style={{
      position: 'relative', zIndex: 5,
      padding: '20px 0',
      borderBottom: light ? '1px solid rgba(255,255,255,0.08)' : '1px solid #F3F4F6',
    }}>
      <div className="web-container" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        <WebLogo light={light}/>
        <nav style={{ flex: 1, display: 'flex', gap: 28, marginLeft: 24 }}>
          {links.map(l => (
            <a key={l} href="#" style={{
              fontSize: 14.5, fontWeight: 500, textDecoration: 'none',
              color: l.toLowerCase() === (active || '').toLowerCase() ? cActive : c,
              position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 4,
            }}>
              {l}
              {(l === 'Business' || l === 'Help') && <span style={{ fontSize: 8 }}>▾</span>}
            </a>
          ))}
        </nav>
        <a href="#" style={{ fontSize: 14.5, fontWeight: 600, color: c, textDecoration: 'none' }}>Sign in</a>
        <button className="web-btn web-btn-primary" style={{ padding: '11px 20px', fontSize: 14 }}>Get early access</button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────────
function WebFooter({ minimal = false }) {
  const cols = [
    { title: 'Product',  items: ['Features', 'Pricing', 'eSIM', 'AI Bot', 'Wallet', 'What\'s new'] },
    { title: 'Business', items: ['For merchants', 'API & SDKs', 'Acceptance', 'Payouts', 'Status'] },
    { title: 'Company',  items: ['About', 'Careers', 'Press', 'Brand', 'Contact'] },
    { title: 'Resources',items: ['Help center', 'Security', 'Blog', 'System status', 'Community'] },
    { title: 'Legal',    items: ['Terms', 'Privacy', 'CBN disclosures', 'NDPR', 'Cookies'] },
  ];
  return (
    <div style={{ background: '#0E0529', color: '#fff', paddingTop: 88, paddingBottom: 40, position: 'relative', overflow: 'hidden' }}>
      <svg style={{ position: 'absolute', top: -60, right: -60, opacity: 0.06 }} width="360" height="360" viewBox="0 0 24 24"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z" fill="#fff"/></svg>
      <div className="web-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr repeat(5, 1fr)', gap: 32 }}>
          <div>
            <WebLogo light/>
            <p style={{ marginTop: 18, color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.55, maxWidth: 280 }}>
              The super-app for Nigerian life. Chat, send money, pay bills, buy data — built in Lagos, made for everyone.
            </p>
            <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 8 }}>
              <Pill color="#10B981" style={{ background: 'rgba(16,185,129,0.18)' }}>● All systems normal</Pill>
            </div>
          </div>
          {cols.map(c => (
            <div key={c.title}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#fff', letterSpacing: 1.5, opacity: 0.85, marginBottom: 14 }}>{c.title.toUpperCase()}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {c.items.map(it => <a key={it} href="#" style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>{it}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 60, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.45)' }}>
            © 2026 SwiftCom Africa Ltd · RC 1782449 · Licensed by the Central Bank of Nigeria · Made in Lagos with ⚡
          </div>
          <div style={{ display: 'flex', gap: 18, color: 'rgba(255,255,255,0.5)' }}>
            <span style={{ fontSize: 13 }}>🇳🇬 English</span>
            <span style={{ fontSize: 13 }}>X · Instagram · LinkedIn · YouTube</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Phone-in-frame helper — renders one of our app screens at a
// given CSS scale inside a sleek device chrome.
// ─────────────────────────────────────────────────────────────
function DeviceFrame({ scale = 0.55, children, tilt = 0, shadow = true, style = {} }) {
  const w = 390 * scale, h = 844 * scale;
  return (
    <div style={{
      width: w, height: h,
      borderRadius: 46 * scale,
      background: '#0a0612',
      padding: 6 * scale,
      transform: tilt ? `rotate(${tilt}deg)` : undefined,
      boxShadow: shadow ? '0 40px 80px rgba(14,5,41,0.4), 0 12px 28px rgba(14,5,41,0.25), 0 0 0 1.5px rgba(255,255,255,0.06)' : undefined,
      ...style,
    }}>
      <div style={{
        width: '100%', height: '100%',
        borderRadius: 40 * scale,
        overflow: 'hidden', position: 'relative',
        background: '#fff',
      }}>
        <div style={{ width: 390, height: 844, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

// Logo strip — fake press / partner logos as monospaced labels
function LogoStrip({ items, on = 'light' }) {
  const c = on === 'dark' ? 'rgba(255,255,255,0.55)' : '#9CA3AF';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 48, flexWrap: 'wrap', justifyContent: 'center' }}>
      {items.map((l, i) => (
        <div key={i} style={{ fontFamily: '"Space Grotesk", Outfit, sans-serif', fontSize: 22, fontWeight: 700, color: c, letterSpacing: -0.4, opacity: 0.85 }}>{l}</div>
      ))}
    </div>
  );
}

// Section header reused by inner pages
function SectionHeader({ eyebrow, title, lede, dark, center, maxW = 740 }) {
  return (
    <div style={{ textAlign: center ? 'center' : 'left', maxWidth: maxW, marginLeft: center ? 'auto' : 0, marginRight: center ? 'auto' : 0 }}>
      {eyebrow && <div className={dark ? 'web-eyebrow on-dark' : 'web-eyebrow'} style={{ marginBottom: 18 }}>{eyebrow}</div>}
      <h2 className="web-h2" style={{ color: dark ? '#fff' : '#1A1A2E' }}>{title}</h2>
      {lede && <p className="web-lede" style={{ marginTop: 18, color: dark ? 'rgba(255,255,255,0.7)' : '#6B7280' }}>{lede}</p>}
    </div>
  );
}

// A frame artboard wrapper that renders a full page in 1440 width.
function WebPage({ children, bg = '#fff' }) {
  return (
    <div className="web-root" style={{ width: W_FRAME, background: bg, overflow: 'hidden', position: 'relative' }}>
      {children}
    </div>
  );
}

Object.assign(window, {
  W_FRAME, WEB_DEFAULTS, WEB_PALETTES, applyWebTweaks,
  WebLogo, WebNav, WebFooter, DeviceFrame, LogoStrip, SectionHeader, WebPage,
});
