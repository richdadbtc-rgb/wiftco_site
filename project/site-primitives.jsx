// SwiftCom website — shared primitives (Nav, Footer, Section, Button, Container)
// Desktop default width: 1440. All pages declare their own height.

const WEB = {
  maxW: 1200,    // content max width inside 1440
  navH: 72,
  font: 'Outfit, Inter, "SF Pro Display", -apple-system, system-ui, sans-serif',
};

// ── Logo ───────────────────────────────────────────────────
function SiteLogo({ on = 'light' }) {
  const tint = on === 'dark' ? '#fff' : SC.ink;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ width: 34, height: 34, borderRadius: 10, background: SC.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 16px rgba(94,23,235,0.35)' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z"/></svg>
      </div>
      <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.6, color: tint }}>SwiftCom</span>
    </div>
  );
}

// ── Buttons ────────────────────────────────────────────────
function WBtn({ variant='primary', size='md', children, style = {} }) {
  const sizes = {
    sm: { padding: '8px 16px',  fontSize: 13, radius: 10 },
    md: { padding: '12px 22px', fontSize: 14, radius: 12 },
    lg: { padding: '16px 30px', fontSize: 15.5, radius: 14 },
  }[size];
  const variants = {
    primary: { background: SC.primary, color: '#fff', boxShadow: '0 10px 24px rgba(94,23,235,0.30)' },
    primaryDark: { background: SC.ink, color: '#fff', boxShadow: '0 10px 24px rgba(26,26,46,0.25)' },
    outline: { background: 'transparent', color: SC.ink, border: `1.5px solid ${SC.hairline}` },
    outlineDark: { background: 'transparent', color: '#fff', border: `1.5px solid rgba(255,255,255,0.25)` },
    ghost:   { background: 'transparent', color: SC.ink },
    ghostDark:{ background: 'transparent', color: '#fff' },
    light:   { background: '#fff', color: SC.primary, boxShadow: '0 10px 24px rgba(0,0,0,0.10)' },
  }[variant];
  return (
    <button style={{
      ...variants, ...sizes, border: variants.border || 'none',
      borderRadius: sizes.radius, fontWeight: 600, fontFamily: WEB.font,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      cursor: 'pointer', letterSpacing: -0.1,
      ...style,
    }}>{children}</button>
  );
}

// ── Top nav ────────────────────────────────────────────────
function SiteNav({ active, dark = false, variant = 'standard' }) {
  const items = ['Features', 'Pricing', 'Business', 'Security', 'Company', 'Help'];
  const ink   = dark ? '#fff' : SC.ink;
  const muted = dark ? 'rgba(255,255,255,0.7)' : SC.muted;
  const bg    = dark ? 'transparent' : '#fff';
  return (
    <div style={{
      height: WEB.navH, padding: '0 56px', background: bg,
      borderBottom: dark ? 'none' : `1px solid ${SC.hairline}`,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      position: 'relative', zIndex: 5,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 44 }}>
        <SiteLogo on={dark ? 'dark' : 'light'}/>
        <div style={{ display: 'flex', gap: 28 }}>
          {items.map(i => {
            const on = active === i;
            return (
              <span key={i} style={{
                fontSize: 14, color: on ? ink : muted,
                fontWeight: on ? 600 : 500, position: 'relative',
              }}>
                {i}
                {i === 'Features' && (
                  <svg style={{ marginLeft: 4, verticalAlign: 'middle' }} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                )}
                {on && <div style={{ position: 'absolute', bottom: -22, left: 0, right: 0, height: 2, background: SC.primary, borderRadius: 2 }}/>}
              </span>
            );
          })}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontSize: 13.5, color: muted, fontWeight: 500 }}>Sign in</span>
        <WBtn variant={dark ? 'light' : 'primary'} size="sm">Get early access</WBtn>
      </div>
    </div>
  );
}

// ── Container ──────────────────────────────────────────────
function Container({ children, style = {}, w }) {
  return (
    <div style={{
      maxWidth: w || WEB.maxW, margin: '0 auto', padding: '0 56px', ...style,
    }}>{children}</div>
  );
}

// ── Footer ─────────────────────────────────────────────────
function SiteFooter() {
  const cols = [
    { title: 'Product', items: ['Chat & calls', 'Wallet', 'Pay bills', 'eSIM', 'SwiftBot AI', 'Download'] },
    { title: 'Company', items: ['About', 'Careers', 'Press', 'Blog', 'Contact'] },
    { title: 'Business', items: ['For merchants', 'API & docs', 'Partnerships', 'Status'] },
    { title: 'Legal',   items: ['Privacy', 'Terms', 'CBN disclosures', 'AML policy'] },
  ];
  return (
    <div style={{ background: SC.ink, color: '#fff', padding: '72px 56px 36px' }}>
      <div style={{ maxWidth: WEB.maxW, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', gap: 40, marginBottom: 56 }}>
          <div>
            <SiteLogo on="dark"/>
            <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.65)', marginTop: 18, lineHeight: 1.6, maxWidth: 280, textWrap: 'pretty' }}>
              The all-in-one Nigerian super-app for chat, money, and connectivity. Built in Lagos. ⚡
            </div>
            {/* socials */}
            <div style={{ display: 'flex', gap: 8, marginTop: 22 }}>
              {['𝕏', 'IG', 'in', 'TT'].map((s, i) => (
                <div key={i} style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600, color: '#fff' }}>{s}</div>
              ))}
            </div>
          </div>
          {cols.map(c => (
            <div key={c.title}>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: '#fff', letterSpacing: 1.5, marginBottom: 16 }}>{c.title.toUpperCase()}</div>
              {c.items.map(it => (
                <div key={it} style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.7)', padding: '6px 0', fontWeight: 500 }}>{it}</div>
              ))}
            </div>
          ))}
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.10)',
          fontSize: 12, color: 'rgba(255,255,255,0.5)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span>© 2026 SwiftCom Technologies Ltd · RC 2104587</span>
            <span style={{ width: 4, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.3)' }}/>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>{Ico.flag(12)} Lagos, Nigeria</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span>Licensed by CBN · NDIC insured</span>
            <span style={{ padding: '4px 10px', borderRadius: 999, background: 'rgba(16,185,129,0.15)', color: SC.success, fontSize: 11, fontWeight: 600, border: '1px solid rgba(16,185,129,0.3)' }}>● All systems normal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Page header (small hero used by non-Home pages) ─────────
function PageHeader({ eyebrow, title, subtitle, dark = false }) {
  return (
    <div style={{
      padding: '64px 0 56px',
      background: dark ? SC.purpleGradDiag : '#FAFAFB',
      color: dark ? '#fff' : SC.ink,
      borderBottom: dark ? 'none' : `1px solid ${SC.hairline}`,
      position: 'relative', overflow: 'hidden',
    }}>
      {dark && <svg style={{ position: 'absolute', top: -30, right: -40, opacity: 0.08 }} width="340" height="340" viewBox="0 0 24 24"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z" fill="#fff"/></svg>}
      <Container>
        <div style={{ fontSize: 12, fontWeight: 700, color: dark ? 'rgba(255,255,255,0.7)' : SC.primary, letterSpacing: 2 }}>{eyebrow}</div>
        <h1 style={{ margin: '12px 0 14px', fontSize: 56, fontWeight: 800, letterSpacing: -2, lineHeight: 1.05, maxWidth: 820, textWrap: 'pretty' }}>{title}</h1>
        {subtitle && <p style={{ margin: 0, fontSize: 18, color: dark ? 'rgba(255,255,255,0.8)' : SC.muted, maxWidth: 660, lineHeight: 1.5, textWrap: 'pretty' }}>{subtitle}</p>}
      </Container>
    </div>
  );
}

// ── Stats strip ────────────────────────────────────────────
function StatsStrip({ items, dark = false }) {
  return (
    <div style={{ background: dark ? SC.ink : '#FAFAFB', padding: '36px 0', borderTop: dark ? 'none' : `1px solid ${SC.hairline}`, borderBottom: dark ? 'none' : `1px solid ${SC.hairline}` }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: 24 }}>
          {items.map((it, i) => (
            <div key={i} style={{ paddingLeft: i ? 24 : 0, borderLeft: i ? `1px solid ${dark ? 'rgba(255,255,255,0.15)' : SC.hairline}` : 'none' }}>
              <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1, color: dark ? '#fff' : SC.ink }}>{it.value}</div>
              <div style={{ fontSize: 13, color: dark ? 'rgba(255,255,255,0.7)' : SC.muted, marginTop: 4, fontWeight: 500 }}>{it.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

// ── Press logo strip ───────────────────────────────────────
function PressStrip() {
  const press = ['TechCabal', 'TechCrunch', 'Stears', 'BusinessDay', 'Rest of World', 'Sifted'];
  return (
    <div style={{ padding: '40px 0', background: '#fff', borderBottom: `1px solid ${SC.hairline}` }}>
      <Container>
        <div style={{ textAlign: 'center', fontSize: 11.5, fontWeight: 700, color: SC.muted, letterSpacing: 2, marginBottom: 22 }}>AS COVERED IN</div>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${press.length}, 1fr)`, alignItems: 'center', gap: 16 }}>
          {press.map((p, i) => (
            <div key={i} style={{
              textAlign: 'center', fontSize: 18, fontWeight: 700,
              color: SC.faint, letterSpacing: -0.5,
              fontFamily: i % 2 ? 'Georgia, serif' : WEB.font,
              fontStyle: i === 2 ? 'italic' : 'normal',
            }}>{p}</div>
          ))}
        </div>
      </Container>
    </div>
  );
}

// ── CTA band (used near the bottom of most pages) ──────────
function CTABand({ title = 'Get early access', sub = 'Be first in line when SwiftCom opens to the public.', emailBlur = 'you@email.com' }) {
  return (
    <div style={{ padding: '88px 0', background: SC.purpleGradDiag, color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -100, right: -80, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }}/>
      <svg style={{ position: 'absolute', bottom: -40, left: -20, opacity: 0.08 }} width="240" height="240" viewBox="0 0 24 24"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z" fill="#fff"/></svg>
      <Container>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, position: 'relative' }}>
          <div style={{ maxWidth: 560 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: 2, marginBottom: 12 }}>EARLY ACCESS</div>
            <h2 style={{ margin: 0, fontSize: 44, fontWeight: 800, letterSpacing: -1.4, lineHeight: 1.05 }}>{title}</h2>
            <p style={{ marginTop: 12, fontSize: 16, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5, textWrap: 'pretty' }}>{sub}</p>
          </div>
          <div style={{ width: 460 }}>
            <div style={{ display: 'flex', gap: 8, padding: 6, background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 14, backdropFilter: 'blur(20px)' }}>
              <div style={{ flex: 1, padding: '12px 16px', fontSize: 14, color: 'rgba(255,255,255,0.55)' }}>{emailBlur}</div>
              <WBtn variant="light" size="md">Notify me ⚡</WBtn>
            </div>
            <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.6)', marginTop: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span>{Ico.shield(12)} No spam · No card</span>
              <span style={{ width: 3, height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.4)' }}/>
              <span>62,400+ on the list</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

// Tiny helpers
const oklch = (l, c, h) => `oklch(${l} ${c} ${h})`;

Object.assign(window, { WEB, SiteLogo, WBtn, SiteNav, Container, SiteFooter, PageHeader, StatsStrip, PressStrip, CTABand });
