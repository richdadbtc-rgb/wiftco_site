// SwiftCom — Frame 8: AI Bot + Profile

// ── 19. SwiftBot AI Chat ───────────────────────────────────
function ScreenAIBot() {
  return (
    <Phone>
      {/* purple gradient header */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '54px 16px 16px', background: SC.purpleGradDiag, color: '#fff', borderRadius: '0 0 24px 24px' }}>
        <div style={{ height: 6 }}/>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 12, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>{Ico.back(20)}</div>
          <div style={{ width: 44, height: 44, borderRadius: 22, background: 'linear-gradient(135deg, #fff, rgba(255,255,255,0.85))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: SC.primary, boxShadow: '0 4px 10px rgba(0,0,0,0.15)' }}>{Ico.bot(24)}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>SwiftBot AI <span style={{ background: 'rgba(255,255,255,0.18)', fontSize: 9, fontWeight: 700, padding: '1px 5px', borderRadius: 999, letterSpacing: 0.5 }}>BETA</span></div>
            <div style={{ fontSize: 11, opacity: 0.75, marginTop: 1, display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 6, height: 6, borderRadius: 3, background: SC.success, boxShadow: '0 0 8px #10B981', display: 'inline-block' }}/>
              Always available
            </div>
          </div>
          <div style={{ width: 36, height: 36, borderRadius: 12, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>{Ico.more(18)}</div>
        </div>
      </div>

      {/* chat area */}
      <div style={{ position: 'absolute', top: 156, bottom: 76, left: 0, right: 0, overflow: 'auto', padding: '16px 14px', background: SC.bg }}>
        {/* welcome */}
        <div style={{ textAlign: 'center', marginBottom: 12 }}>
          <span style={{ display: 'inline-block', padding: '4px 12px', borderRadius: 999, background: 'rgba(0,0,0,0.06)', fontSize: 10.5, color: SC.muted, fontWeight: 600 }}>TODAY</span>
        </div>

        {/* bot greeting */}
        <BotBubble text={<>Hey Chidi 👋 I'm <b>SwiftBot</b>. I can move money, pay bills, manage your eSIM, and explain anything in your account. What can I do for you?</>}/>

        {/* onboarding cards */}
        <div style={{ display: 'flex', gap: 8, marginLeft: 44, marginBottom: 12, overflow: 'auto' }}>
          {[
            { ico: Ico.wallet, t: 'Check balance', s: '₦ in seconds' },
            { ico: Ico.airtime, t: 'Buy airtime',  s: 'For me or others' },
            { ico: Ico.sim,    t: 'Renew eSIM',   s: 'Auto-pick best plan' },
          ].map((c, i) => (
            <div key={i} style={{ flex: '0 0 auto', width: 132, background: '#fff', borderRadius: 14, padding: 12, boxShadow: SC.shadowSoft }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(94,23,235,0.10)', color: SC.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>{c.ico(18)}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: SC.ink }}>{c.t}</div>
              <div style={{ fontSize: 10.5, color: SC.muted, marginTop: 2 }}>{c.s}</div>
            </div>
          ))}
        </div>

        <UserBubble text="Check my balance" time="09:14"/>

        <BotBubble text={<>Your SwiftCom wallet has <b>{ngn(425820.50)}</b> available. You've spent <b>₦517,000</b> this month — about 14% lower than April. Want a breakdown?</>}/>

        {/* quick reply chips */}
        <div style={{ display: 'flex', gap: 6, marginLeft: 44, marginBottom: 14, flexWrap: 'wrap' }}>
          {['Show breakdown','Send to Tunde','Pay DStv','Buy eSIM'].map((q, i) => (
            <span key={i} style={{
              padding: '7px 12px', background: '#fff', color: SC.primary,
              border: `1px solid rgba(94,23,235,0.25)`, borderRadius: 999,
              fontSize: 11.5, fontWeight: 600,
            }}>{q}</span>
          ))}
        </div>

        <UserBubble text="Buy eSIM" time="09:15"/>

        {/* typing */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 6 }}>
          <div style={{ width: 32, height: 32, borderRadius: 16, background: SC.purpleGradDiag, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{Ico.bot(18)}</div>
          <div style={{ padding: '12px 14px', borderRadius: '18px 18px 18px 4px', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', gap: 4 }}>
              {[0,1,2].map(i => <div key={i} style={{ width: 6, height: 6, borderRadius: 3, background: SC.primary, opacity: 0.4 + i*0.2 }}/>)}
            </div>
          </div>
        </div>
      </div>

      {/* input */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px 12px 22px', background: '#fff', borderTop: `1px solid ${SC.hairline}`, display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 38, height: 38, borderRadius: 19, background: SC.bg, color: SC.muted, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ico.attach(20)}</div>
        <div style={{ flex: 1, height: 42, borderRadius: 21, background: SC.bg, padding: '0 16px', display: 'flex', alignItems: 'center' }}>
          <span style={{ flex: 1, fontSize: 13.5, color: SC.faint }}>Ask SwiftBot anything…</span>
          <span style={{ color: SC.muted }}>{Ico.mic(18)}</span>
        </div>
        <div style={{ width: 42, height: 42, borderRadius: 21, background: SC.primary, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 14px rgba(94,23,235,0.4)' }}>{Ico.paperplane(18)}</div>
      </div>
    </Phone>
  );
}

function BotBubble({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 10 }}>
      <div style={{ width: 32, height: 32, borderRadius: 16, background: SC.purpleGradDiag, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 3px 8px rgba(94,23,235,0.3)' }}>{Ico.bot(18)}</div>
      <div style={{
        maxWidth: 270,
        background: 'linear-gradient(135deg, rgba(94,23,235,0.10), rgba(94,23,235,0.04))',
        border: '1px solid rgba(94,23,235,0.15)',
        color: SC.ink,
        padding: '10px 14px',
        borderRadius: '18px 18px 18px 4px',
        fontSize: 13.5, lineHeight: 1.45,
      }}>{text}</div>
    </div>
  );
}

function UserBubble({ text, time }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
      <div style={{
        maxWidth: 240,
        background: '#fff', color: SC.ink,
        padding: '10px 14px', borderRadius: '18px 18px 4px 18px',
        fontSize: 13.5, lineHeight: 1.4,
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
      }}>
        {text}
        <div style={{ fontSize: 9.5, textAlign: 'right', marginTop: 4, color: SC.faint }}>{time}</div>
      </div>
    </div>
  );
}

// ── 20. Profile ─────────────────────────────────────────────
function ScreenProfile() {
  const section = (items) => (
    <div style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', marginBottom: 12, boxShadow: SC.shadowSoft }}>
      {items.map((it, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: 14,
          padding: '14px 16px',
          borderBottom: i < items.length - 1 ? `1px solid ${SC.hairline}` : 'none',
          color: it.danger ? SC.danger : SC.ink,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 11,
            background: it.danger ? 'rgba(239,68,68,0.10)' : 'rgba(94,23,235,0.10)',
            color: it.danger ? SC.danger : SC.primary,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{it.ico(18)}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>{it.label}</div>
            {it.sub && <div style={{ fontSize: 11.5, color: SC.muted, marginTop: 1, fontWeight: 400 }}>{it.sub}</div>}
          </div>
          {it.right ? it.right : !it.danger && <div style={{ color: SC.faint }}>{Ico.chevR(18)}</div>}
        </div>
      ))}
    </div>
  );

  return (
    <Phone statusDark>
      {/* purple header */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 260, background: SC.purpleGradDiag, borderRadius: '0 0 28px 28px' }}>
        <svg style={{ position: 'absolute', top: 60, right: -30, opacity: 0.10 }} width="220" height="220" viewBox="0 0 24 24"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z" fill="#fff"/></svg>
      </div>

      <div style={{ position: 'relative', padding: '64px 20px 0', color: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ico.back(20)}</div>
          <h1 style={{ flex: 1, margin: 0, fontSize: 20, fontWeight: 700, letterSpacing: -0.3 }}>Profile</h1>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ico.edit(18)}</div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 20 }}>
          <div style={{ position: 'relative' }}>
            <Avatar name="Chidi Okonkwo" size={80}/>
            <div style={{
              position: 'absolute', bottom: 0, right: -2,
              width: 26, height: 26, borderRadius: 13, background: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: SC.primary,
              boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            }}>{Ico.edit(14)}</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: -0.3 }}>Chidi Okonkwo</div>
            <div style={{ fontSize: 13, opacity: 0.8, marginTop: 2 }}>@chidi.ok · +234 803 412 5589</div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, marginTop: 8, padding: '4px 10px', borderRadius: 999, background: 'rgba(16,185,129,0.25)', border: '1px solid rgba(16,185,129,0.45)', fontSize: 11, fontWeight: 600 }}>
              <span style={{ color: '#fff' }}>{Ico.check(11)}</span> KYC Verified
            </div>
          </div>
        </div>
      </div>

      {/* settings */}
      <div style={{ position: 'absolute', top: 268, bottom: 76, left: 0, right: 0, overflow: 'auto', padding: '0 16px 16px' }}>
        {section([
          { ico: Ico.user,    label: 'Personal Details',    sub: 'Name, email, phone, address' },
          { ico: Ico.wallet,  label: 'Wallet & Payments',   sub: 'Cards, banks, SwiftID' },
          { ico: Ico.sim,     label: 'My eSIM',             sub: '1 active plan · 320MB left' },
          { ico: Ico.shield,  label: 'KYC Verification',    right: <Pill color={SC.success}>● Verified</Pill> },
        ])}
        {section([
          { ico: Ico.lock,    label: 'Security',            sub: 'PIN, biometrics, devices' },
          { ico: Ico.bell,    label: 'Notification Settings' },
          { ico: Ico.globe,   label: 'Language',            sub: 'English (Nigeria)' },
          { ico: Ico.bot,     label: 'Contact Us',          sub: 'SwiftBot · WhatsApp · email' },
        ])}
        {section([
          { ico: Ico.signout, label: 'Sign Out',            danger: true },
        ])}
        <div style={{ textAlign: 'center', fontSize: 11, color: SC.faint, padding: 8 }}>
          SwiftCom v1.4.2 · Made in Lagos ⚡
        </div>
      </div>

      <BottomNav active="user"/>
    </Phone>
  );
}

Object.assign(window, { ScreenAIBot, ScreenProfile });
