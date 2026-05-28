// SwiftCom website — Tablet (834w) + Mobile (390w) of Home page

// ── TABLET (834 wide) ──────────────────────────────────────
function HomeTablet() {
  return (
    <div style={{ width: 834, background: '#fff', fontFamily: WEB.font, color: SC.ink }}>
      {/* Compact nav */}
      <div style={{ height: 64, padding: '0 32px', borderBottom: `1px solid ${SC.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff' }}>
        <SiteLogo/>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <span style={{ fontSize: 13, color: SC.muted, fontWeight: 500 }}>Features</span>
          <span style={{ fontSize: 13, color: SC.muted, fontWeight: 500 }}>Pricing</span>
          <span style={{ fontSize: 13, color: SC.muted, fontWeight: 500 }}>Business</span>
          <span style={{ fontSize: 13, color: SC.muted, fontWeight: 500 }}>Sign in</span>
          <WBtn variant="primary" size="sm">Get access</WBtn>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: '64px 32px 72px', background: 'linear-gradient(180deg, #FAFAFB 0%, #F3EEFE 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(94,23,235,0.10), transparent 70%)' }}/>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 5px 5px 12px', background: '#fff', border: `1px solid ${SC.hairline}`, borderRadius: 999, fontSize: 12, color: SC.muted, marginBottom: 24, boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
          <span>✨ 62,400+ on the waitlist</span>
          <span style={{ padding: '2px 8px', background: SC.primary, color: '#fff', borderRadius: 999, fontSize: 10.5, fontWeight: 600 }}>Join →</span>
        </div>

        <h1 style={{ margin: 0, fontSize: 64, fontWeight: 800, letterSpacing: -2.4, lineHeight: 1, textWrap: 'balance', maxWidth: 600 }}>
          Chat. Send. <span style={{ color: SC.primary }}>Connect.</span> All in one tap.
        </h1>
        <p style={{ marginTop: 18, fontSize: 16.5, color: SC.muted, lineHeight: 1.55, maxWidth: 520, textWrap: 'pretty' }}>
          Messages, voice calls, AI assistant, wallet, bills, eSIM — everything Nigerian life runs on, in one app.
        </p>

        <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
          <WBtn variant="primary" size="lg">Get early access ⚡</WBtn>
          <WBtn variant="outline" size="lg">Watch demo</WBtn>
        </div>

        {/* phones row */}
        <div style={{ marginTop: 56, display: 'flex', gap: 20, justifyContent: 'center', position: 'relative' }}>
          <PhoneMockup scale={0.46} tilt={-4}><ScreenChat/></PhoneMockup>
          <PhoneMockup scale={0.46}><ScreenDashboard/></PhoneMockup>
          <PhoneMockup scale={0.46} tilt={4}><ScreenWallet/></PhoneMockup>
        </div>
      </div>

      {/* Stats */}
      <div style={{ padding: '32px', background: SC.ink, color: '#fff', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
        {[['62,400+','Waitlist'],['₦4.2B','Beta volume'],['2.4s','Avg transfer'],['99.99%','Uptime']].map(([v, l], i) => (
          <div key={i}>
            <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: -0.6 }}>{v}</div>
            <div style={{ fontSize: 12, opacity: 0.6, marginTop: 2 }}>{l}</div>
          </div>
        ))}
      </div>

      {/* Features 2x2 */}
      <div style={{ padding: '64px 32px', background: '#fff' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2, marginBottom: 12 }}>WHY SWIFTCOM</div>
          <h2 style={{ margin: 0, fontSize: 36, fontWeight: 800, letterSpacing: -1.2 }}>Four super-powers, one app.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[
            { tint: SC.primary, eb: 'MESSAGING', t: 'Chat & call anywhere', m: '2.4s' },
            { tint: SC.success, eb: 'WALLET',    t: '₦ at the speed of thought', m: '₦0' },
            { tint: SC.warning, eb: 'eSIM',      t: 'Data plans in 8 seconds', m: '8s' },
            { tint: '#0EA5E9',  eb: 'AI',        t: 'An assistant that does things', m: '40+' },
          ].map((c, i) => (
            <div key={i} style={{ padding: 24, background: '#FAFAFB', borderRadius: 18, border: `1px solid ${SC.hairline}` }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: c.tint, letterSpacing: 2 }}>{c.eb}</div>
              <h3 style={{ margin: '10px 0 16px', fontSize: 22, fontWeight: 700, letterSpacing: -0.5 }}>{c.t}</h3>
              <div style={{ fontSize: 36, fontWeight: 800, color: c.tint, letterSpacing: -1, lineHeight: 1 }}>{c.m}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '60px 32px', background: SC.purpleGradDiag, color: '#fff', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: 36, fontWeight: 800, letterSpacing: -1.2 }}>Get early access.</h2>
        <p style={{ marginTop: 10, fontSize: 15, color: 'rgba(255,255,255,0.8)' }}>Be first in line.</p>
        <div style={{ maxWidth: 460, margin: '24px auto 0', display: 'flex', gap: 8, padding: 6, background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 14 }}>
          <div style={{ flex: 1, padding: '11px 14px', fontSize: 14, color: 'rgba(255,255,255,0.55)' }}>you@email.com</div>
          <WBtn variant="light" size="md">Notify me</WBtn>
        </div>
      </div>

      {/* compact footer */}
      <div style={{ background: SC.ink, color: '#fff', padding: '40px 32px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 32 }}>
          <div>
            <SiteLogo on="dark"/>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', marginTop: 14, lineHeight: 1.55 }}>The Nigerian super-app. Built in Lagos. ⚡</div>
          </div>
          {[
            ['Product', ['Chat','Wallet','eSIM','SwiftBot']],
            ['Company', ['About','Careers','Press','Blog']],
            ['Legal',   ['Privacy','Terms','CBN','AML']],
          ].map((c, i) => (
            <div key={i}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, marginBottom: 12 }}>{c[0].toUpperCase()}</div>
              {c[1].map(it => <div key={it} style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.7)', padding: '4px 0' }}>{it}</div>)}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.10)', fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>
          © 2026 SwiftCom · Lagos, Nigeria · CBN licensed
        </div>
      </div>
    </div>
  );
}

// ── MOBILE (390 wide) ──────────────────────────────────────
function HomeMobile() {
  return (
    <div style={{ width: 390, background: '#fff', fontFamily: WEB.font, color: SC.ink }}>
      {/* Mobile nav */}
      <div style={{ height: 60, padding: '0 20px', borderBottom: `1px solid ${SC.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: '#fff', zIndex: 5 }}>
        <SiteLogo/>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <WBtn variant="primary" size="sm" style={{ padding: '7px 14px', fontSize: 12.5 }}>Get access</WBtn>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: SC.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: SC.ink }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: '40px 20px 36px', background: 'linear-gradient(180deg, #FAFAFB 0%, #F3EEFE 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -60, right: -80, width: 220, height: 220, borderRadius: '50%', background: 'radial-gradient(circle, rgba(94,23,235,0.10), transparent 70%)' }}/>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 4px 4px 10px', background: '#fff', border: `1px solid ${SC.hairline}`, borderRadius: 999, fontSize: 11, color: SC.muted, marginBottom: 22, boxShadow: '0 4px 14px rgba(0,0,0,0.04)', position: 'relative' }}>
          <span>✨ 62,400+ waiting</span>
          <span style={{ padding: '2px 8px', background: SC.primary, color: '#fff', borderRadius: 999, fontSize: 10, fontWeight: 600 }}>Join</span>
        </div>

        <h1 style={{ margin: 0, fontSize: 44, fontWeight: 800, letterSpacing: -1.8, lineHeight: 1.02, position: 'relative', textWrap: 'balance' }}>
          Chat. Send. <span style={{ color: SC.primary }}>Connect.</span><br/>All in one tap.
        </h1>
        <p style={{ marginTop: 14, fontSize: 14.5, color: SC.muted, lineHeight: 1.55, textWrap: 'pretty' }}>
          The Nigerian super-app for chat, money, AI, and eSIM. Built for Lagos speed.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 22 }}>
          <WBtn variant="primary" size="lg" style={{ width: '100%' }}>Get early access ⚡</WBtn>
          <WBtn variant="outline" size="md" style={{ width: '100%' }}>Watch 90-sec demo</WBtn>
        </div>

        {/* phone */}
        <div style={{ marginTop: 36, display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <PhoneMockup scale={0.55}><ScreenDashboard/></PhoneMockup>
        </div>
      </div>

      {/* stats */}
      <div style={{ padding: '24px 20px', background: SC.ink, color: '#fff', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        {[['62.4K+','Waitlist'],['₦4.2B','Beta vol.'],['2.4s','Transfer'],['99.99%','Uptime']].map(([v, l], i) => (
          <div key={i}>
            <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.5 }}>{v}</div>
            <div style={{ fontSize: 11, opacity: 0.65 }}>{l}</div>
          </div>
        ))}
      </div>

      {/* features stacked */}
      <div style={{ padding: '48px 20px', background: '#fff' }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: SC.primary, letterSpacing: 2 }}>WHY SWIFTCOM</div>
        <h2 style={{ margin: '8px 0 24px', fontSize: 30, fontWeight: 800, letterSpacing: -1, lineHeight: 1.1 }}>Four super-powers, one app.</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { tint: SC.primary, eb: 'MESSAGING', t: 'Chat & call, anywhere', s: 'Voice notes that resume mid-elevator.', m: '2.4s' },
            { tint: SC.success, eb: 'WALLET',    t: '₦ at the speed of thought', s: 'Send to any SwiftID in <3 seconds.',  m: '₦0' },
            { tint: SC.warning, eb: 'eSIM',      t: 'Data plans in 8 seconds', s: 'No kiosk, no physical SIM.', m: '8s' },
            { tint: '#0EA5E9',  eb: 'SWIFTBOT',  t: 'An assistant that does things', s: 'Move money in plain English.', m: '40+' },
          ].map((c, i) => (
            <div key={i} style={{ padding: 18, background: '#FAFAFB', borderRadius: 14, border: `1px solid ${SC.hairline}`, position: 'relative' }}>
              <div style={{ fontSize: 10.5, fontWeight: 700, color: c.tint, letterSpacing: 1.5 }}>{c.eb}</div>
              <h3 style={{ margin: '6px 0 4px', fontSize: 18, fontWeight: 700, letterSpacing: -0.3 }}>{c.t}</h3>
              <div style={{ fontSize: 12.5, color: SC.muted, marginBottom: 12 }}>{c.s}</div>
              <div style={{ fontSize: 26, fontWeight: 800, color: c.tint, letterSpacing: -0.8, lineHeight: 1 }}>{c.m}</div>
              <div style={{ position: 'absolute', top: 18, right: 18, color: c.tint }}>{Ico.chevR(16)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '40px 20px', background: SC.purpleGradDiag, color: '#fff', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: 26, fontWeight: 800, letterSpacing: -0.8 }}>Get on the list.</h2>
        <p style={{ marginTop: 8, fontSize: 13.5, color: 'rgba(255,255,255,0.8)' }}>Be first in line when we open.</p>
        <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ padding: '12px 14px', background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 12, fontSize: 14, color: 'rgba(255,255,255,0.55)', textAlign: 'left' }}>you@email.com</div>
          <WBtn variant="light" size="md" style={{ width: '100%' }}>Notify me ⚡</WBtn>
        </div>
      </div>

      {/* mobile footer */}
      <div style={{ background: SC.ink, color: '#fff', padding: '32px 20px 28px' }}>
        <SiteLogo on="dark"/>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', marginTop: 12, lineHeight: 1.6 }}>The Nigerian super-app. Built in Lagos. ⚡</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 24, fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
          {['Product','Company','Business','Legal','Help','Press','Careers'].map((l, i) => <span key={i}>{l}</span>)}
        </div>
        <div style={{ marginTop: 24, paddingTop: 18, borderTop: '1px solid rgba(255,255,255,0.10)', fontSize: 10.5, color: 'rgba(255,255,255,0.5)' }}>
          © 2026 SwiftCom · Lagos, Nigeria · CBN licensed
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { HomeTablet, HomeMobile });
