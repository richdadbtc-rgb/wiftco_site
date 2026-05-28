// SwiftCom — Frame 9: Component Library sheet
// Single tall artboard showing all components, organized into sections.

function ComponentLibrary() {
  const Section = ({ title, sub, children, dark }) => (
    <div style={{ marginBottom: 28 }}>
      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: SC.primary, letterSpacing: 1.5 }}>{title}</div>
        {sub && <div style={{ fontSize: 11.5, color: SC.muted, marginTop: 2 }}>{sub}</div>}
      </div>
      <div style={{
        background: dark ? SC.ink : '#fff', borderRadius: 16, padding: 18,
        border: `1px solid ${SC.hairline}`,
      }}>{children}</div>
    </div>
  );

  const Label = ({ children }) => <div style={{ fontSize: 10.5, color: SC.faint, fontWeight: 600, marginBottom: 8, letterSpacing: 0.4 }}>{children}</div>;
  const Row = ({ children, gap = 12 }) => <div style={{ display: 'flex', gap, alignItems: 'center', flexWrap: 'wrap' }}>{children}</div>;

  // shared button styles
  const Btn = ({ variant='primary', children, dis }) => {
    const styles = {
      primary: { background: dis ? '#D5D7DC' : SC.primary, color: '#fff', boxShadow: dis ? 'none' : '0 6px 16px rgba(94,23,235,0.3)' },
      outline: { background: '#fff', color: SC.primary, border: `1.5px solid ${SC.primary}` },
      danger:  { background: SC.danger, color: '#fff', boxShadow: '0 6px 16px rgba(239,68,68,0.3)' },
      ghost:   { background: 'transparent', color: SC.primary },
    }[variant];
    return <button style={{
      ...styles, border: styles.border || 'none', padding: '10px 18px',
      borderRadius: 12, fontSize: 13, fontWeight: 600, fontFamily: SC.font,
      display: 'inline-flex', alignItems: 'center', gap: 6,
    }}>{children}</button>;
  };

  // input
  const Inp = ({ state }) => {
    const cfg = {
      default: { border: SC.hairline, shadow: 'none', label: 'Default', error: null },
      focus:   { border: SC.primary, shadow: '0 0 0 4px rgba(94,23,235,0.12)', label: 'Focused' },
      error:   { border: SC.danger,  shadow: '0 0 0 4px rgba(239,68,68,0.10)', label: 'Error', error: 'NIN must be 11 digits' },
      success: { border: SC.success, shadow: '0 0 0 4px rgba(16,185,129,0.10)', label: 'Success' },
    }[state];
    return (
      <div style={{ flex: 1, minWidth: 130 }}>
        <Label>{cfg.label.toUpperCase()}</Label>
        <div style={{
          height: 44, padding: '0 12px', borderRadius: 10,
          background: '#fff', border: `1.5px solid ${cfg.border}`,
          boxShadow: cfg.shadow,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span style={{ fontSize: 13, color: state === 'default' ? SC.faint : SC.ink, fontWeight: 500 }}>
            {state === 'default' ? 'placeholder' : state === 'error' ? '8421907' : '85421907632'}
          </span>
          {state === 'success' && <span style={{ color: SC.success }}>{Ico.check(14)}</span>}
        </div>
        {cfg.error && <div style={{ fontSize: 10.5, color: SC.danger, marginTop: 4, fontWeight: 500 }}>{cfg.error}</div>}
      </div>
    );
  };

  // colors palette
  const swatches = [
    ['Primary', SC.primary, '#5E17EB'],
    ['Primary Dark', SC.primaryDark, '#3A0CAA'],
    ['Success', SC.success, '#10B981'],
    ['Danger',  SC.danger,  '#EF4444'],
    ['Warning', SC.warning, '#F59E0B'],
    ['Ink',     SC.ink,     '#1A1A2E'],
    ['Muted',   SC.muted,   '#6B7280'],
    ['BG',      SC.bg,      '#F3F4F6'],
  ];

  return (
    <div style={{ width: 880, padding: 36, fontFamily: SC.font, color: SC.ink, background: '#FAFAFB' }}>
      {/* HEADER */}
      <div style={{ marginBottom: 28, display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 56, height: 56, borderRadius: 14, background: SC.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 10px 20px rgba(94,23,235,0.3)' }}>{Ico.bolt(32)}</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: SC.primary, letterSpacing: 2 }}>FRAME 9</div>
          <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: -0.6 }}>SwiftCom · Component Library</div>
          <div style={{ fontSize: 13, color: SC.muted, marginTop: 2 }}>Atoms & primitives used across all 20 screens · Outfit · radii 12 / 14 / 999</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        {/* LEFT COLUMN */}
        <div>
          {/* COLOR PALETTE */}
          <Section title="01 · COLOR" sub="Purple-forward, with WCAG-safe accents for money flow and alerts.">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
              {swatches.map(([n, c, hex]) => (
                <div key={n}>
                  <div style={{ height: 60, borderRadius: 10, background: c, border: c === '#F3F4F6' ? `1px solid ${SC.hairline}` : 'none' }}/>
                  <div style={{ fontSize: 11, fontWeight: 700, color: SC.ink, marginTop: 6 }}>{n}</div>
                  <div style={{ fontSize: 10.5, color: SC.faint, fontFamily: 'ui-monospace, monospace' }}>{hex}</div>
                </div>
              ))}
            </div>
          </Section>

          {/* BUTTONS */}
          <Section title="02 · BUTTONS" sub="44dp min height, 12pt radius. Press scale 0.97.">
            <Label>STATES</Label>
            <Row><Btn>Send Money</Btn><Btn variant="outline">Cancel</Btn><Btn variant="danger">Sign Out</Btn><Btn dis>Disabled</Btn></Row>
            <div style={{ height: 16 }}/>
            <Label>WITH ICON</Label>
            <Row>
              <Btn>{Ico.plus(16)} Add Plan</Btn>
              <Btn variant="outline">{Ico.send(16)} Send</Btn>
            </Row>
          </Section>

          {/* INPUTS */}
          <Section title="03 · INPUTS" sub="44dp height, 12pt radius, 4px focus halo.">
            <Row gap={10}><Inp state="default"/><Inp state="focus"/></Row>
            <div style={{ height: 12 }}/>
            <Row gap={10}><Inp state="error"/><Inp state="success"/></Row>
          </Section>

          {/* AVATARS */}
          <Section title="04 · AVATARS" sub="Initials on a brand-keyed gradient. Online dot is 28% of size, success green.">
            <Row gap={18}>
              <div style={{ textAlign: 'center' }}>
                <Avatar name="Chidi Okonkwo" size={32}/>
                <div style={{ fontSize: 10.5, color: SC.faint, marginTop: 6 }}>32</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Avatar name="Amaka Eze" size={40} online/>
                <div style={{ fontSize: 10.5, color: SC.faint, marginTop: 6 }}>40 · online</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Avatar name="Tunde Adeleke" size={48}/>
                <div style={{ fontSize: 10.5, color: SC.faint, marginTop: 6 }}>48</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Avatar name="Funmi Olanrewaju" size={64} online ring={SC.primary}/>
                <div style={{ fontSize: 10.5, color: SC.faint, marginTop: 6 }}>64 · story</div>
              </div>
            </Row>
          </Section>

          {/* BADGES */}
          <Section title="05 · BADGES & PILLS">
            <Row>
              <Pill color={SC.success}>✓ KYC Verified</Pill>
              <Pill color={SC.warning}>⚠ KYC Pending</Pill>
              <Pill color={SC.success}>● Active</Pill>
              <Pill color={SC.muted} bg="#F3F4F6">Inactive</Pill>
              <Pill color={SC.primary}>+12%</Pill>
              <Pill color={SC.danger}>-3 fees</Pill>
            </Row>
          </Section>

          {/* OTP */}
          <Section title="06 · OTP INPUT">
            <Row gap={8}>
              {[
                { d: '7', state: 'filled' },
                { d: '2', state: 'filled' },
                { d: '4', state: 'filled' },
                { d: '',  state: 'focus' },
                { d: '',  state: 'default' },
                { d: '',  state: 'error' },
              ].map((c, i) => {
                const border = c.state === 'focus' ? SC.primary : c.state === 'filled' ? SC.primary : c.state === 'error' ? SC.danger : SC.hairline;
                const shadow = c.state === 'focus' ? '0 0 0 4px rgba(94,23,235,0.12)' : c.state === 'error' ? '0 0 0 4px rgba(239,68,68,0.10)' : 'none';
                return (
                  <div key={i} style={{
                    width: 42, height: 50, borderRadius: 10,
                    background: '#fff', border: `2px solid ${border}`, boxShadow: shadow,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 20, fontWeight: 700,
                  }}>{c.d}{c.state === 'focus' && <span style={{ color: SC.primary, marginLeft: -2 }}>|</span>}</div>
                );
              })}
            </Row>
          </Section>

          {/* TOASTS */}
          <Section title="07 · TOASTS">
            {[
              { c: SC.success, ico: '✓', t: 'Money sent', b: '₦25,000 to Tunde Adeleke.' },
              { c: SC.danger,  ico: '!', t: 'Transfer failed', b: 'Insufficient balance. Top up?' },
              { c: SC.primary, ico: 'i', t: 'eSIM activated', b: 'You\'re online · 25GB ready.' },
            ].map((t, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '12px 14px', background: SC.ink, color: '#fff',
                borderRadius: 14, marginBottom: 8,
                boxShadow: '0 10px 22px rgba(26,26,46,0.3)',
              }}>
                <div style={{ width: 28, height: 28, borderRadius: 14, background: t.c, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14 }}>{t.ico}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>{t.t}</div>
                  <div style={{ fontSize: 11, opacity: 0.7, marginTop: 1 }}>{t.b}</div>
                </div>
                <span style={{ opacity: 0.5, fontSize: 16 }}>×</span>
              </div>
            ))}
          </Section>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          {/* CHAT BUBBLES */}
          <Section title="08 · CHAT BUBBLES">
            <div style={{ background: SC.bg, borderRadius: 12, padding: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 6 }}>
                <div style={{ maxWidth: 240, background: '#fff', color: SC.ink, padding: '8px 12px', borderRadius: '16px 16px 16px 4px', fontSize: 13, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>Hey, did the rent payment go through? <span style={{ fontSize: 9, color: SC.faint, marginLeft: 4 }}>09:14</span></div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ maxWidth: 240, background: SC.primary, color: '#fff', padding: '8px 12px', borderRadius: '16px 16px 4px 16px', fontSize: 13, boxShadow: '0 2px 6px rgba(94,23,235,0.25)' }}>Yes! Just sent ✓✓ <span style={{ fontSize: 9, opacity: 0.85, marginLeft: 4 }}>09:15</span></div>
              </div>
            </div>
          </Section>

          {/* TRANSACTION ROW */}
          <Section title="09 · TX ROW">
            <TxRow type="in" title="Tunde Adeleke" sub="Today · 10:22" amt={25000} kind="Transfer"/>
            <TxRow type="out" title="Mrs A. Adeyemi" sub="Yesterday" amt={-485000} kind="Rent payment"/>
          </Section>

          {/* WALLET CARD MINI */}
          <Section title="10 · WALLET CARD" sub="Glassmorphism on purple.">
            <div style={{ background: SC.purpleGradDiag, borderRadius: 16, padding: 16, position: 'relative', overflow: 'hidden' }}>
              <svg style={{ position: 'absolute', top: 0, right: -10, opacity: 0.12 }} width="120" height="120" viewBox="0 0 24 24"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z" fill="#fff"/></svg>
              <div style={{ position: 'relative', color: '#fff' }}>
                <div style={{ fontSize: 10, opacity: 0.7, letterSpacing: 1 }}>WALLET BALANCE</div>
                <div style={{ fontSize: 24, fontWeight: 700, marginTop: 2 }}>{ngn(425820.50)}</div>
                <div style={{ fontSize: 11, opacity: 0.7, marginTop: 2 }}>@chidi.ok</div>
              </div>
            </div>
          </Section>

          {/* eSIM PLAN CARD */}
          <Section title="11 · eSIM PLAN CARD">
            <div style={{ background: SC.purpleGradDiag, borderRadius: 14, padding: 14, color: '#fff', position: 'relative', overflow: 'hidden' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>SwiftBoost 25GB</div>
                  <div style={{ fontSize: 11, opacity: 0.7 }}>Expires in 4 days</div>
                </div>
                <div style={{ padding: '3px 8px', borderRadius: 999, background: 'rgba(16,185,129,0.25)', fontSize: 10, fontWeight: 600 }}>● Active</div>
              </div>
              <div style={{ marginTop: 10, height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.18)', overflow: 'hidden' }}>
                <div style={{ width: '1.3%', height: '100%', background: SC.warning }}/>
              </div>
              <div style={{ marginTop: 6, fontSize: 11, opacity: 0.8 }}>320MB of 25GB remaining</div>
            </div>
          </Section>

          {/* BOTTOM NAV */}
          <Section title="12 · BOTTOM NAV" sub="5 tabs, active gets purple tinted bg.">
            <div style={{ position: 'relative', height: 76, background: '#fff', borderRadius: 14, border: `1px solid ${SC.hairline}` }}>
              <div style={{ position: 'absolute', inset: 0 }}>
                <div style={{ position: 'relative', height: '100%' }}>
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '8px 8px 12px', display: 'flex', justifyContent: 'space-around', alignItems: 'center',
                  }}>
                    {[
                      { id: 'home',  label: 'Home',     ico: Ico.home, active: true },
                      { id: 'chat',  label: 'Messages', ico: Ico.chat },
                      { id: 'feed',  label: 'Feed',     ico: Ico.feed },
                      { id: 'alert', label: 'Alerts',   ico: Ico.alert, badge: 3 },
                      { id: 'user',  label: 'Profile',  ico: Ico.user },
                    ].map(t => (
                      <div key={t.id} style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
                        color: t.active ? SC.primary : SC.faint, position: 'relative',
                        padding: '6px 12px', borderRadius: 10,
                        background: t.active ? 'rgba(94,23,235,0.08)' : 'transparent',
                      }}>
                        <div style={{ position: 'relative' }}>
                          {t.ico(20, t.active)}
                          {t.badge && <div style={{ position: 'absolute', top: -4, right: -8, minWidth: 14, height: 14, borderRadius: 7, padding: '0 3px', background: SC.danger, color: '#fff', fontSize: 9, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{t.badge}</div>}
                        </div>
                        <span style={{ fontSize: 9.5, fontWeight: t.active ? 600 : 500 }}>{t.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* NOTIFICATIONS */}
          <Section title="13 · NOTIFICATION ITEM">
            <div style={{ display: 'flex', gap: 12, padding: 12, background: 'rgba(94,23,235,0.04)', border: `1px solid rgba(94,23,235,0.15)`, borderRadius: 12, marginBottom: 8 }}>
              <div style={{ width: 36, height: 36, borderRadius: 11, background: 'rgba(16,185,129,0.15)', color: SC.success, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>₦</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 700 }}>Money received</span>
                  <span style={{ width: 6, height: 6, borderRadius: 3, background: SC.primary }}/>
                </div>
                <div style={{ fontSize: 11.5, color: SC.muted, marginTop: 2 }}>Tunde sent you ₦25,000.00 · 2m</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12, padding: 12, background: '#fff', border: `1px solid ${SC.hairline}`, borderRadius: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 11, background: 'rgba(107,114,128,0.15)', color: SC.muted, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ico.shield(18)}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>New sign-in</div>
                <div style={{ fontSize: 11.5, color: SC.muted, marginTop: 2 }}>iPhone 14 Pro · Lagos · Yesterday</div>
              </div>
            </div>
          </Section>

          {/* EMPTY STATES */}
          <Section title="14 · EMPTY STATES">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {[
                { ico: Ico.chat, t: 'No messages', s: 'Start a chat to see it here.' },
                { ico: Ico.wallet, t: 'No transactions', s: 'Your first ₦ will land here.' },
              ].map((e, i) => (
                <div key={i} style={{ textAlign: 'center', padding: 18, background: SC.bg, borderRadius: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 22, background: '#fff', color: SC.muted, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>{e.ico(20)}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: SC.ink }}>{e.t}</div>
                  <div style={{ fontSize: 11, color: SC.muted, marginTop: 2 }}>{e.s}</div>
                </div>
              ))}
            </div>
          </Section>

          {/* SKELETONS */}
          <Section title="15 · LOADING SKELETONS">
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
              <div style={{ width: 40, height: 40, borderRadius: 20, background: 'linear-gradient(90deg, #EEE, #F8F8F8, #EEE)', backgroundSize: '200% 100%' }}/>
              <div style={{ flex: 1 }}>
                <div style={{ height: 10, borderRadius: 5, background: 'linear-gradient(90deg, #EEE, #F8F8F8, #EEE)', marginBottom: 6, width: '70%' }}/>
                <div style={{ height: 8, borderRadius: 4, background: 'linear-gradient(90deg, #EEE, #F8F8F8, #EEE)', width: '50%' }}/>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <div style={{ width: 40, height: 40, borderRadius: 20, background: 'linear-gradient(90deg, #EEE, #F8F8F8, #EEE)' }}/>
              <div style={{ flex: 1 }}>
                <div style={{ height: 10, borderRadius: 5, background: 'linear-gradient(90deg, #EEE, #F8F8F8, #EEE)', marginBottom: 6, width: '60%' }}/>
                <div style={{ height: 8, borderRadius: 4, background: 'linear-gradient(90deg, #EEE, #F8F8F8, #EEE)', width: '40%' }}/>
              </div>
            </div>
          </Section>

          {/* TYPOGRAPHY */}
          <Section title="16 · TYPOGRAPHY" sub="Outfit. Tight letter spacing on large titles for fintech feel.">
            <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: -0.8 }}>Display · 32/800</div>
            <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: -0.4 }}>Heading · 24/700</div>
            <div style={{ fontSize: 17, fontWeight: 600 }}>Title · 17/600</div>
            <div style={{ fontSize: 14, color: SC.ink }}>Body · 14/400</div>
            <div style={{ fontSize: 12, color: SC.muted }}>Caption · 12/muted</div>
            <div style={{ fontSize: 11, color: SC.faint, fontWeight: 700, letterSpacing: 1 }}>OVERLINE · 11/700</div>
          </Section>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ComponentLibrary });
