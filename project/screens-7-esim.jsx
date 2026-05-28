// SwiftCom — Frame 7: eSIM + Notifications

// ── 18. eSIM ───────────────────────────────────────────────
function ScreenESIM() {
  return (
    <Phone>
      {/* header */}
      <div style={{ position: 'absolute', top: 54, left: 0, right: 0, padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: '#fff', border: `1px solid ${SC.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ico.back(20)}</div>
          <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, letterSpacing: -0.4 }}>My eSIM</h1>
        </div>
        <div style={{ padding: '8px 14px', background: SC.primary, color: '#fff', borderRadius: 999, fontSize: 12, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 4 }}>{Ico.plus(14)} Add plan</div>
      </div>

      {/* low-data banner */}
      <div style={{ position: 'absolute', top: 110, left: 20, right: 20, padding: '10px 12px', background: 'rgba(245,158,11,0.10)', border: `1px solid rgba(245,158,11,0.3)`, borderRadius: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 28, height: 28, borderRadius: 14, background: 'rgba(245,158,11,0.20)', color: SC.warning, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>⚠</div>
        <div style={{ flex: 1, fontSize: 12, color: '#92400E', fontWeight: 500 }}>
          You have <span style={{ fontWeight: 700 }}>320MB left</span> · Top up to avoid interruptions
        </div>
        <span style={{ color: SC.warning, fontSize: 11, fontWeight: 700 }}>BUY</span>
      </div>

      {/* active plan card */}
      <div style={{ position: 'absolute', top: 170, left: 20, right: 20 }}>
        <div style={{
          position: 'relative', borderRadius: 18, padding: 18,
          background: SC.purpleGradDiag, color: '#fff',
          boxShadow: '0 18px 36px rgba(58,12,170,0.35)', overflow: 'hidden',
        }}>
          {/* big bolt watermark */}
          <svg style={{ position: 'absolute', top: -10, right: -20, opacity: 0.12 }} width="180" height="180" viewBox="0 0 24 24"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z" fill="#fff"/></svg>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: 10.5, opacity: 0.75, letterSpacing: 1, fontWeight: 600 }}>ACTIVE PLAN</div>
              <div style={{ fontSize: 18, fontWeight: 700, marginTop: 4 }}>SwiftBoost 25GB · Monthly</div>
              <div style={{ fontSize: 11, opacity: 0.8, marginTop: 4 }}>ICCID · 8923 •• •••• •• 7842 {Ico.copy(11)}</div>
            </div>
            <div style={{ padding: '4px 10px', borderRadius: 999, background: 'rgba(16,185,129,0.25)', border: '1px solid rgba(16,185,129,0.45)', display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11, fontWeight: 600 }}>
              <span style={{ width: 6, height: 6, borderRadius: 3, background: SC.success, boxShadow: '0 0 8px #10B981' }}/>
              Active
            </div>
          </div>

          {/* progress */}
          <div style={{ marginTop: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 6 }}>
              <span style={{ opacity: 0.85 }}>320MB remaining</span>
              <span style={{ fontWeight: 600 }}>1.3% of 25GB</span>
            </div>
            <div style={{ height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.15)', overflow: 'hidden' }}>
              <div style={{ width: '1.3%', height: '100%', background: SC.warning, borderRadius: 4 }}/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, fontSize: 11 }}>
              <div style={{ opacity: 0.7 }}>Expires <span style={{ color: '#fff', opacity: 1, fontWeight: 600 }}>26 May 2026</span> · in 4 days</div>
              <div style={{ opacity: 0.7 }}>📍 Lagos, NG</div>
            </div>
          </div>
        </div>
      </div>

      {/* available plans */}
      <div style={{ position: 'absolute', top: 410, left: 0, right: 0, bottom: 0, padding: '0 20px', overflow: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: SC.ink }}>Available plans</span>
          <span style={{ fontSize: 11, color: SC.primary, fontWeight: 600 }}>Filter</span>
        </div>
        {[
          { name: 'SwiftLite',  data: '5GB',   dur: '7 days',  price: 1500, badge: null,        recommended: false },
          { name: 'SwiftBoost', data: '25GB',  dur: '30 days', price: 7500, badge: 'POPULAR',   recommended: true },
          { name: 'SwiftMax',   data: '50GB',  dur: '30 days', price: 13500, badge: 'BEST VALUE', recommended: false },
          { name: 'SwiftRoam',  data: '10GB',  dur: '14 days', price: 5500, badge: 'TRAVEL',    recommended: false },
        ].map((p, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: 12, background: '#fff', borderRadius: 14,
            marginBottom: 8, boxShadow: SC.shadowSoft,
            border: p.recommended ? `1.5px solid ${SC.primary}` : '1.5px solid transparent',
            position: 'relative',
          }}>
            {p.badge && <div style={{ position: 'absolute', top: -7, left: 12, padding: '2px 8px', background: p.recommended ? SC.primary : SC.warning, color: '#fff', borderRadius: 999, fontSize: 9, fontWeight: 700, letterSpacing: 0.5 }}>{p.badge}</div>}
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(94,23,235,0.10)', color: SC.primary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ico.sim(22)}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: SC.ink }}>{p.name} · {p.data}</div>
              <div style={{ fontSize: 11, color: SC.muted, marginTop: 1 }}>{p.dur} validity · 4G/5G</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: SC.ink, fontVariantNumeric: 'tabular-nums' }}>{ngnPlain(p.price)}</div>
              <div style={{ marginTop: 4, padding: '4px 10px', background: SC.primary, color: '#fff', borderRadius: 999, fontSize: 11, fontWeight: 600, display: 'inline-block' }}>Buy</div>
            </div>
          </div>
        ))}
      </div>
    </Phone>
  );
}

// ── (extra) Notifications ──────────────────────────────────
function ScreenNotifications() {
  const groups = [
    {
      label: 'NEW',
      items: [
        { ico: '₦', tint: SC.success, title: 'Money received', body: 'Tunde Adeleke sent you ₦25,000.00', time: '2m', unread: true },
        { ico: '⚡', tint: SC.warning, title: 'Low data', body: 'SwiftBoost has 320MB left. Top up to stay connected.', time: '1h', unread: true },
        { ico: Ico.bot, tint: SC.primary, title: 'SwiftBot', body: 'I can renew your eSIM plan automatically — should I?', time: '3h', unread: true, isIcon: true },
      ],
    },
    {
      label: 'YESTERDAY',
      items: [
        { ico: '✓', tint: SC.success, title: 'Rent paid', body: 'Receipt ₦485,000.00 delivered to Mrs A. Adeyemi.', time: 'Yesterday' },
        { ico: Ico.shield, tint: SC.primary, title: 'New sign-in', body: 'iPhone 14 Pro from Lagos · 22 May', time: 'Yesterday', isIcon: true },
        { ico: Ico.tv, tint: SC.danger, title: 'DStv subscription due', body: 'Compact bouquet renews in 2 days — ₦13,900.', time: 'Yesterday', isIcon: true },
      ],
    },
  ];
  return (
    <Phone>
      {/* header */}
      <div style={{ position: 'absolute', top: 54, left: 0, right: 0, padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: '#fff', border: `1px solid ${SC.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ico.back(20)}</div>
          <div>
            <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, letterSpacing: -0.4 }}>Alerts</h1>
            <div style={{ fontSize: 11, color: SC.muted, marginTop: 1 }}>3 new this morning</div>
          </div>
        </div>
        <span style={{ fontSize: 12, color: SC.primary, fontWeight: 600 }}>Mark all read</span>
      </div>

      {/* filter tabs */}
      <div style={{ position: 'absolute', top: 120, left: 0, right: 0, padding: '0 20px' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {['All', 'Money', 'Chats', 'System'].map((t, i) => (
            <span key={i} style={{
              padding: '6px 14px', borderRadius: 999,
              background: i === 0 ? SC.primary : '#fff',
              color: i === 0 ? '#fff' : SC.muted,
              fontSize: 12, fontWeight: 600,
              border: i === 0 ? 'none' : `1px solid ${SC.hairline}`,
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* groups */}
      <div style={{ position: 'absolute', top: 168, bottom: 90, left: 0, right: 0, overflow: 'auto', padding: '4px 16px 16px' }}>
        {groups.map((g, gi) => (
          <div key={gi} style={{ marginTop: 12 }}>
            <div style={{ padding: '4px 4px 8px', fontSize: 10.5, fontWeight: 700, color: SC.faint, letterSpacing: 1.2 }}>{g.label}</div>
            {g.items.map((n, i) => (
              <div key={i} style={{
                display: 'flex', gap: 12, padding: 12,
                background: n.unread ? 'rgba(94,23,235,0.04)' : '#fff',
                borderRadius: 14, marginBottom: 8,
                border: `1px solid ${n.unread ? 'rgba(94,23,235,0.15)' : SC.hairline}`,
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                  background: `${n.tint}1A`, color: n.tint,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: 18,
                }}>{n.isIcon ? n.ico(20) : n.ico}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                    <span style={{ fontSize: 13.5, fontWeight: 700, color: SC.ink }}>{n.title}</span>
                    {n.unread && <span style={{ width: 6, height: 6, borderRadius: 3, background: SC.primary, display: 'inline-block' }}/>}
                  </div>
                  <div style={{ fontSize: 12, color: SC.muted, marginTop: 3, lineHeight: 1.4 }}>{n.body}</div>
                  <div style={{ fontSize: 10.5, color: SC.faint, marginTop: 6 }}>{n.time}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <BottomNav active="alert"/>
    </Phone>
  );
}

Object.assign(window, { ScreenESIM, ScreenNotifications });
