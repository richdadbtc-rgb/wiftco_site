// SwiftCom — Frame 6: Wallet + Pay Bills

// ── 16. Wallet ─────────────────────────────────────────────
function ScreenWallet() {
  const tx = [
    { type: 'in',  title: 'Tunde Adeleke',     sub: 'Today · 10:22',  amt: 25000, kind: 'Transfer', tag: 'Received' },
    { type: 'out', title: 'MTN Airtime',       sub: 'Today · 08:14',  amt: -2000, kind: 'Airtime' },
    { type: 'out', title: 'Mrs A. Adeyemi',    sub: 'Yesterday',       amt: -485000, kind: 'Rent payment' },
    { type: 'in',  title: 'Salary · ChisCorp', sub: 'Wed · 09:01',     amt: 280000, kind: 'Inflow' },
    { type: 'out', title: 'Ikeja Electric',    sub: 'Tue',             amt: -15500, kind: 'Token bought' },
    { type: 'out', title: 'eSIM · 25GB Plan',  sub: 'Mon',             amt: -7500, kind: 'eSIM Plan' },
  ];
  return (
    <Phone statusDark>
      {/* purple header */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 360, background: SC.purpleGradDiag, borderRadius: '0 0 28px 28px' }}>
        <svg style={{ position: 'absolute', top: 90, right: -40, opacity: 0.10 }} width="240" height="240" viewBox="0 0 24 24"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z" fill="#fff"/></svg>
      </div>

      <div style={{ position: 'relative', padding: '60px 20px 0', color: '#fff' }}>
        {/* top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 0 18px' }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ico.back(20)}</div>
          <h1 style={{ flex: 1, margin: 0, fontSize: 20, fontWeight: 700, letterSpacing: -0.3 }}>Wallet</h1>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ico.more(20)}</div>
        </div>

        {/* balance card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06))',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.22)',
          borderRadius: 20, padding: 18,
          boxShadow: '0 12px 28px rgba(0,0,0,0.18)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 11.5, opacity: 0.75, letterSpacing: 1, fontWeight: 600 }}>AVAILABLE BALANCE</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, padding: '4px 8px', borderRadius: 999, background: 'rgba(255,255,255,0.15)' }}>{Ico.eye(13)} Show</div>
          </div>
          <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: -0.8, marginTop: 8 }}>{ngn(425820.50)}</div>
          <div style={{ fontSize: 12, opacity: 0.75, marginTop: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
            <span>SwiftID</span>
            <span style={{ fontWeight: 700, color: '#fff', opacity: 1 }}>@chidi.ok</span>
            <span style={{ color: 'rgba(255,255,255,0.6)' }}>{Ico.copy(13)}</span>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
            <button style={{ flex: 1, background: '#fff', color: SC.primary, border: 'none', borderRadius: 12, padding: '10px', fontSize: 13, fontWeight: 700, fontFamily: SC.font, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>{Ico.send(16)} Send</button>
            <button style={{ flex: 1, background: 'rgba(255,255,255,0.18)', color: '#fff', border: '1px solid rgba(255,255,255,0.22)', borderRadius: 12, padding: '10px', fontSize: 13, fontWeight: 700, fontFamily: SC.font, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>{Ico.receive(16)} Receive</button>
          </div>
        </div>
      </div>

      {/* quick transfer */}
      <div style={{ position: 'relative', padding: '20px 0 12px' }}>
        <div style={{ padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: SC.ink }}>Quick transfer</span>
          <span style={{ fontSize: 11, color: SC.primary, fontWeight: 600 }}>View all</span>
        </div>
        <div style={{ padding: '0 20px', display: 'flex', gap: 12, overflowX: 'auto' }}>
          {[
            { name: 'New', plus: true },
            { name: 'Amaka' }, { name: 'Tunde' }, { name: 'Funmi' }, { name: 'Ibrahim' }, { name: 'Bola' },
          ].map((u, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, minWidth: 52 }}>
              {u.plus ? (
                <div style={{ width: 48, height: 48, borderRadius: 24, border: `2px dashed ${SC.primary}`, color: SC.primary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ico.plus(22)}</div>
              ) : <Avatar name={u.name} size={48} online={i % 2 === 0}/>}
              <span style={{ fontSize: 11, color: SC.ink, fontWeight: 500 }}>{u.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* tx list */}
      <div style={{ position: 'absolute', top: 480, bottom: 0, left: 0, right: 0, background: '#fff', borderRadius: '24px 24px 0 0', boxShadow: '0 -8px 24px rgba(0,0,0,0.04)', padding: '16px 0 20px' }}>
        <div style={{ padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: SC.ink }}>Transactions</span>
          <span style={{ fontSize: 11, color: SC.primary, fontWeight: 600 }}>Export</span>
        </div>
        {/* filter chips */}
        <div style={{ padding: '0 20px 12px', display: 'flex', gap: 6 }}>
          {['All','Sent','Received','Bills'].map((f, i) => (
            <span key={i} style={{
              padding: '6px 12px', borderRadius: 999,
              background: i === 0 ? SC.primary : '#F3F4F6',
              color: i === 0 ? '#fff' : SC.muted,
              fontSize: 11.5, fontWeight: 600,
            }}>{f}</span>
          ))}
        </div>

        <div style={{ height: 250, overflow: 'auto' }}>
          {tx.map((t, i) => <TxRow key={i} {...t}/>)}
        </div>
      </div>
    </Phone>
  );
}

function TxRow({ type, title, sub, amt, kind }) {
  const cred = type === 'in';
  const color = cred ? SC.success : SC.danger;
  const bg = cred ? 'rgba(16,185,129,0.10)' : 'rgba(94,23,235,0.08)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 20px', borderBottom: `1px solid ${SC.hairline}` }}>
      <div style={{ width: 38, height: 38, borderRadius: 12, background: bg, color: cred ? SC.success : SC.primary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {cred ? Ico.receive(18) : Ico.send(18)}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13.5, fontWeight: 600, color: SC.ink, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</div>
        <div style={{ fontSize: 11, color: SC.muted, marginTop: 1 }}>{kind} · {sub}</div>
      </div>
      <div style={{ fontSize: 13.5, fontWeight: 700, color, fontVariantNumeric: 'tabular-nums' }}>
        {cred ? '+ ' : '- '}{ngn(Math.abs(amt))}
      </div>
    </div>
  );
}

// ── 17. Pay Bills ──────────────────────────────────────────
function ScreenBills() {
  const cats = [
    { ico: Ico.airtime, label: 'Airtime', tint: '#5E17EB' },
    { ico: Ico.data,    label: 'Data',    tint: '#0EA5E9' },
    { ico: Ico.electric,label: 'Electric',tint: '#F59E0B' },
    { ico: Ico.tv,      label: 'Cable TV',tint: '#EF4444' },
    { ico: Ico.water,   label: 'Water',   tint: '#10B981' },
    { ico: Ico.grid,    label: 'Others',  tint: '#6B7280' },
  ];
  const recents = [
    { ico: Ico.airtime, label: 'MTN · 0803 412 5589', amt: 2000, when: '2 days ago', tint: '#F59E0B' },
    { ico: Ico.electric,label: 'Ikeja Disco · 0123 4567', amt: 15500, when: '5 days ago', tint: '#F59E0B' },
    { ico: Ico.tv,      label: 'DStv · IUC 1102 3344', amt: 13900, when: '12 days ago', tint: '#EF4444' },
  ];
  return (
    <Phone statusDark>
      {/* purple header */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 220, background: SC.purpleGradDiag, borderRadius: '0 0 28px 28px' }}/>

      <div style={{ position: 'relative', padding: '60px 20px 0', color: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 0 14px' }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ico.back(20)}</div>
          <h1 style={{ flex: 1, margin: 0, fontSize: 20, fontWeight: 700 }}>Pay Bills</h1>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ico.search(20)}</div>
        </div>
        <div style={{ padding: '10px 16px', borderRadius: 14, background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10.5, opacity: 0.7, letterSpacing: 1, fontWeight: 600 }}>AVAILABLE BALANCE</div>
            <div style={{ fontSize: 22, fontWeight: 700, marginTop: 2 }}>{ngn(425820.50)}</div>
          </div>
          <div style={{ padding: '6px 12px', borderRadius: 999, background: 'rgba(255,255,255,0.15)', fontSize: 11, fontWeight: 600 }}>+ Top Up</div>
        </div>
      </div>

      {/* category grid */}
      <div style={{ position: 'relative', padding: '20px 20px 8px' }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: SC.ink, marginBottom: 12 }}>Categories</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          {cats.map((c, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: 14, padding: '14px 8px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
              boxShadow: SC.shadowSoft,
              border: i === 2 ? `2px solid ${SC.primary}` : '1.5px solid transparent',
            }}>
              <div style={{ width: 44, height: 44, borderRadius: 14, background: `${c.tint}1A`, color: c.tint, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{c.ico(22)}</div>
              <span style={{ fontSize: 12, fontWeight: 600, color: SC.ink }}>{c.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Electricity form (selected category context) */}
      <div style={{ position: 'absolute', top: 530, bottom: 8, left: 0, right: 0, padding: '0 20px', overflow: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4, marginBottom: 10 }}>
          <span style={{ fontSize: 13.5, fontWeight: 700, color: SC.ink, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span style={{ display: 'inline-block', width: 16, height: 16, borderRadius: 8, background: 'rgba(245,158,11,0.18)', color: SC.warning, fontSize: 11, fontWeight: 800, lineHeight: '16px', textAlign: 'center' }}>⚡</span>
            Recents
          </span>
          <span style={{ fontSize: 11, color: SC.primary, fontWeight: 600 }}>See all</span>
        </div>
        {recents.map((r, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 12px', background: '#fff', borderRadius: 12, marginBottom: 8, boxShadow: SC.shadowSoft }}>
            <div style={{ width: 36, height: 36, borderRadius: 11, background: `${r.tint}1A`, color: r.tint, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{r.ico(18)}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: SC.ink, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.label}</div>
              <div style={{ fontSize: 11, color: SC.muted, marginTop: 1 }}>{r.when} · Tap to repeat</div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: SC.ink, fontVariantNumeric: 'tabular-nums' }}>{ngnPlain(r.amt)}</div>
          </div>
        ))}
      </div>
    </Phone>
  );
}

Object.assign(window, { ScreenWallet, ScreenBills });
