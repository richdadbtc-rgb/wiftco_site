// SwiftCom — Frame 4: Dashboard + Feed

// ── 11. Dashboard ──────────────────────────────────────────
function ScreenDashboard() {
  const quickActions = [
    { ico: Ico.airtime, label: 'Airtime' },
    { ico: Ico.data,    label: 'Data' },
    { ico: Ico.electric,label: 'Electric' },
    { ico: Ico.tv,      label: 'Cable TV' },
    { ico: Ico.sim,     label: 'eSIM' },
    { ico: Ico.bot,     label: 'AI Bot' },
    { ico: Ico.phone,   label: 'Calls' },
    { ico: Ico.history, label: 'History' },
  ];
  return (
    <Phone statusDark>
      {/* purple curved header */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 280,
        background: SC.purpleGradDiag,
        borderRadius: '0 0 28px 28px',
      }}>
        <svg style={{ position: 'absolute', top: 70, right: -30, opacity: 0.12 }} width="220" height="220" viewBox="0 0 24 24"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z" fill="#fff"/></svg>
      </div>

      <div style={{ position: 'relative', padding: '64px 20px 0' }}>
        {/* top row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0 18px' }}>
          <Avatar name="Chidi Okonkwo" size={42} ring={SC.success}/>
          <div style={{ flex: 1, color: '#fff' }}>
            <div style={{ fontSize: 13, opacity: 0.75 }}>Good morning 👋</div>
            <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: -0.3 }}>Chidi Okonkwo</div>
          </div>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', color: '#fff' }}>
            {Ico.bell(20)}
            <div style={{ position: 'absolute', top: 8, right: 9, width: 8, height: 8, borderRadius: 4, background: SC.warning, border: '2px solid #5E17EB' }}/>
          </div>
        </div>

        {/* glassmorphism wallet card */}
        <div style={{
          position: 'relative', borderRadius: 20, overflow: 'hidden', marginBottom: 18,
          background: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.18)',
          padding: 18, color: '#fff',
          boxShadow: '0 16px 32px rgba(0,0,0,0.18)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: 11.5, opacity: 0.7, letterSpacing: 1, fontWeight: 600 }}>WALLET BALANCE</div>
              <div style={{ fontSize: 32, fontWeight: 700, marginTop: 4, letterSpacing: -0.8 }}>{ngn(425820.50)}</div>
              <div style={{ marginTop: 4, fontSize: 12, opacity: 0.7 }}>SwiftID: <span style={{ fontWeight: 600, color: '#fff', opacity: 1 }}>@chidi.ok</span></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 9px', borderRadius: 999, background: 'rgba(255,255,255,0.15)', fontSize: 11, fontWeight: 600 }}>{Ico.eye(13)} Hide</div>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
            {[
              { ico: Ico.send, label: 'Send' },
              { ico: Ico.receive, label: 'Receive' },
              { ico: Ico.topup, label: 'Top Up' },
              { ico: Ico.more, label: 'More' },
            ].map((b, i) => (
              <div key={i} style={{ flex: 1, padding: '10px 6px 8px', borderRadius: 12, background: 'rgba(255,255,255,0.16)', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', marginBottom: 4 }}>{b.ico(18)}</div>
                <div style={{ fontSize: 11, fontWeight: 600 }}>{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* quick actions grid */}
      <div style={{ padding: '0 20px 12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: SC.ink }}>Quick actions</div>
          <span style={{ fontSize: 12, color: SC.primary, fontWeight: 600 }}>See all</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, background: '#fff', padding: 14, borderRadius: 16, boxShadow: SC.shadowSoft }}>
          {quickActions.map((a, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '8px 0' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(94,23,235,0.08)', color: SC.primary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{a.ico(20)}</div>
              <span style={{ fontSize: 10.5, color: SC.ink, fontWeight: 500 }}>{a.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* feed preview */}
      <div style={{ padding: '6px 20px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: SC.ink }}>Feed</div>
          <span style={{ fontSize: 12, color: SC.primary, fontWeight: 600 }}>Open Feed</span>
        </div>
        <div style={{ background: '#fff', borderRadius: 14, padding: 12, marginBottom: 8, boxShadow: SC.shadowSoft }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
            <Avatar name="Amaka Eze" size={32}/>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: SC.ink }}>Amaka Eze</div>
              <div style={{ fontSize: 10.5, color: SC.faint }}>Lagos · 12m ago</div>
            </div>
          </div>
          <div style={{ fontSize: 12.5, color: SC.ink, lineHeight: 1.45 }}>Just sent my rent in 3 seconds. Oga SwiftCom, you don pass!! ⚡</div>
          <div style={{ display: 'flex', gap: 16, marginTop: 10, fontSize: 11, color: SC.muted }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>{Ico.heart(13)} 124</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>{Ico.comment(13)} 18</span>
          </div>
        </div>
      </div>

      <BottomNav active="home"/>
    </Phone>
  );
}

// ── 12. Feed ───────────────────────────────────────────────
function ScreenFeed() {
  return (
    <Phone>
      {/* white top bar */}
      <div style={{ position: 'absolute', top: 54, left: 0, right: 0, padding: '12px 20px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 10 }}>
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: SC.ink, letterSpacing: -0.4 }}>Feed</h1>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: SC.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: SC.ink }}>{Ico.search(18)}</div>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: SC.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>{Ico.edit(18)}</div>
        </div>
      </div>

      {/* stories row */}
      <div style={{ position: 'absolute', top: 122, left: 0, right: 0, padding: '12px 20px', background: '#fff', borderBottom: `1px solid ${SC.hairline}`, zIndex: 9 }}>
        <div style={{ display: 'flex', gap: 14, overflowX: 'auto' }}>
          {[
            { name: 'You', you: true },
            { name: 'Tunde' }, { name: 'Amaka' }, { name: 'Funmi' }, { name: 'Bola' }, { name: 'Ibrahim' },
          ].map((u, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, minWidth: 56 }}>
              <div style={{ position: 'relative' }}>
                <Avatar name={u.name} size={56} ring={u.you ? undefined : SC.primary}/>
                {u.you && <div style={{ position: 'absolute', bottom: -2, right: -2, width: 22, height: 22, borderRadius: 11, background: SC.primary, color: '#fff', border: '2.5px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ico.plus(12)}</div>}
              </div>
              <span style={{ fontSize: 11, color: SC.ink, fontWeight: 500 }}>{u.you ? 'Your Story' : u.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* feed posts */}
      <div style={{ position: 'absolute', top: 230, bottom: 90, left: 0, right: 0, overflow: 'auto', padding: '12px 16px 16px' }}>
        {/* post 1 - text + image */}
        <FeedPost
          name="Amaka Eze" handle="@amaka_e" loc="Lagos" time="12m"
          text="Just sent my rent in 3 seconds. Oga SwiftCom, you don pass!! ⚡ Anyone else loving the new payment vibes? #FintechNaija"
          image
          likes={124} comments={18} shares={4}
          reactions={['😂','🔥','❤️']}/>

        <FeedPost
          name="Tunde Adeleke" handle="@tundeA" loc="Abuja" time="1h"
          text="My eSIM activated before my old SIM even left the kiosk. We're not the same generation, abeg."
          likes={89} comments={12} shares={2}/>
      </div>

      <BottomNav active="feed"/>

      {/* FAB */}
      <div style={{
        position: 'absolute', bottom: 100, right: 20,
        width: 56, height: 56, borderRadius: 28,
        background: SC.primary, color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 12px 24px rgba(94,23,235,0.45)',
        zIndex: 51,
      }}>{Ico.plus(24)}</div>
    </Phone>
  );
}

function FeedPost({ name, handle, loc, time, text, image, likes, comments, shares, reactions }) {
  return (
    <div style={{ background: '#fff', borderRadius: 14, padding: 14, marginBottom: 12, boxShadow: SC.shadowSoft }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <Avatar name={name} size={40}/>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13.5, fontWeight: 600, color: SC.ink }}>{name}</div>
          <div style={{ fontSize: 11, color: SC.faint }}>{loc} · {time} ago</div>
        </div>
        <div style={{ color: SC.faint }}>{Ico.more(18)}</div>
      </div>
      <div style={{ fontSize: 13.5, color: SC.ink, lineHeight: 1.5, marginBottom: image ? 10 : 8, textWrap: 'pretty' }}>{text}</div>
      {image && (
        <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', height: 180, background: 'linear-gradient(135deg, #F3EEFE 0%, #C7B9F3 100%)', marginBottom: 10 }}>
          <div style={{ position: 'absolute', inset: 0, padding: 18, color: SC.primary, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, opacity: 0.5 }}>[ post image · 1080×720 ]</div>
              <div style={{ fontSize: 10, padding: '4px 8px', borderRadius: 999, background: 'rgba(0,0,0,0.3)', color: '#fff' }}>📷</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 44, height: 44, borderRadius: 22, background: 'rgba(94,23,235,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: SC.primary, fontWeight: 800 }}>₦</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: SC.ink }}>Receipt · ₦485,000</div>
                <div style={{ fontSize: 11, color: SC.muted }}>Rent paid to Mrs Adeyemi</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* reactions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        {reactions && (
          <div style={{ display: 'flex' }}>
            {reactions.map((e, i) => <div key={i} style={{ width: 22, height: 22, borderRadius: 11, background: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, marginLeft: i ? -6 : 0, border: '2px solid #fff' }}>{e}</div>)}
          </div>
        )}
      </div>
      {/* action bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, paddingTop: 10, borderTop: `1px solid ${SC.hairline}` }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, color: SC.muted, fontWeight: 500 }}>{Ico.heart(16)} {likes}</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, color: SC.muted, fontWeight: 500 }}>{Ico.comment(16)} {comments}</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, color: SC.muted, fontWeight: 500 }}>{Ico.share(16)} {shares}</span>
        <span style={{ marginLeft: 'auto', fontSize: 11, color: SC.faint }}>Tap & hold to react</span>
      </div>
    </div>
  );
}

Object.assign(window, { ScreenDashboard, ScreenFeed });
