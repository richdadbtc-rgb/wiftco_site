// SwiftCom — Frame 5: Messaging (Messages list, 1:1 Chat, Voice Call)

// ── 13. Messages List ──────────────────────────────────────
function ScreenMessages() {
  const convos = [
    { name: 'SwiftBot AI', preview: 'Your eSIM plan expires tomorrow. Want me to renew?', time: '09:42', unread: 1, bot: true, pinned: true },
    { name: 'Amaka Eze',   preview: 'Wait — you sent the receipt already? 😭', time: '09:30', unread: 2, online: true, pinned: true },
    { name: 'Family Group · 8',preview: 'Mama: Bring jollof on Sunday o', time: '08:51', unread: 5, group: true },
    { name: 'Tunde Adeleke', preview: 'Bro the new feed update is fireee', time: 'Yesterday', online: true },
    { name: 'Funmi Olanrewaju', preview: 'Voice message · 0:48', time: 'Yesterday', voice: true },
    { name: 'Ibrahim Musa', preview: 'I sent ₦5,000 for the data — confirm abeg', time: 'Wed', unread: 1 },
    { name: 'Office HQ · 14', preview: 'Bola: standup in 10', time: 'Tue', group: true },
    { name: 'Mrs Adeyemi (Rent)', preview: 'Receipt received — God bless you.', time: 'Mon' },
  ];
  return (
    <Phone>
      {/* header */}
      <div style={{ position: 'absolute', top: 54, left: 0, right: 0, padding: '12px 20px 8px', background: '#fff', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: SC.ink, letterSpacing: -0.4 }}>Messages</h1>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 36, height: 36, borderRadius: 12, background: SC.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: SC.ink }}>{Ico.qr(18)}</div>
            <div style={{ width: 36, height: 36, borderRadius: 12, background: SC.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>{Ico.edit(18)}</div>
          </div>
        </div>
        {/* search */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '11px 14px', background: SC.bg, borderRadius: 12 }}>
          <div style={{ color: SC.faint }}>{Ico.search(16)}</div>
          <span style={{ fontSize: 13.5, color: SC.faint }}>Search chats, contacts, payments</span>
        </div>
        {/* filter tabs */}
        <div style={{ display: 'flex', gap: 18, marginTop: 12, fontSize: 12.5, fontWeight: 600 }}>
          <span style={{ color: SC.primary, position: 'relative', paddingBottom: 6 }}>All <span style={{ background: 'rgba(94,23,235,0.10)', color: SC.primary, padding: '1px 6px', borderRadius: 999, fontSize: 10, marginLeft: 2 }}>24</span>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: SC.primary, borderRadius: 2 }}/>
          </span>
          <span style={{ color: SC.muted }}>Unread</span>
          <span style={{ color: SC.muted }}>Groups</span>
          <span style={{ color: SC.muted }}>Calls</span>
        </div>
      </div>

      {/* convos */}
      <div style={{ position: 'absolute', top: 218, bottom: 90, left: 0, right: 0, overflow: 'auto', background: '#fff' }}>
        {/* pinned label */}
        <div style={{ padding: '8px 20px 4px', fontSize: 11, fontWeight: 700, color: SC.faint, letterSpacing: 1 }}>📌 PINNED</div>
        {convos.filter(c => c.pinned).map((c, i) => <ConvoRow key={i} {...c}/>) }
        <div style={{ padding: '12px 20px 4px', fontSize: 11, fontWeight: 700, color: SC.faint, letterSpacing: 1 }}>ALL CHATS</div>
        {convos.filter(c => !c.pinned).map((c, i) => <ConvoRow key={i} {...c}/>) }
      </div>

      <BottomNav active="chat"/>
    </Phone>
  );
}

function ConvoRow({ name, preview, time, unread, online, bot, group, voice }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 20px', borderBottom: `1px solid ${SC.hairline}` }}>
      {/* avatar */}
      {bot ? (
        <div style={{ width: 48, height: 48, borderRadius: 24, background: SC.purpleGradDiag, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', position: 'relative', flexShrink: 0, boxShadow: '0 4px 10px rgba(94,23,235,0.3)' }}>
          {Ico.bot(24)}
          <div style={{ position: 'absolute', bottom: -2, right: -2, padding: '2px 5px', borderRadius: 999, background: SC.success, color: '#fff', fontSize: 8, fontWeight: 700, border: '2px solid #fff' }}>AI</div>
        </div>
      ) : (
        <Avatar name={name} size={48} online={online}/>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
          <span style={{ fontSize: 14.5, fontWeight: 600, color: SC.ink, letterSpacing: -0.2 }}>{name}</span>
          {bot && <span style={{ background: 'rgba(94,23,235,0.10)', color: SC.primary, fontSize: 9, fontWeight: 700, padding: '1px 5px', borderRadius: 999, letterSpacing: 0.5 }}>BOT</span>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 3, fontSize: 12.5, color: unread ? SC.ink : SC.muted, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
          {voice && <span style={{ color: SC.primary }}>{Ico.mic(13)}</span>}
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: unread ? 500 : 400 }}>{preview}</span>
        </div>
      </div>
      <div style={{ textAlign: 'right', flexShrink: 0 }}>
        <div style={{ fontSize: 10.5, color: unread ? SC.primary : SC.faint, fontWeight: unread ? 600 : 500 }}>{time}</div>
        {unread && <div style={{ marginTop: 4, minWidth: 18, height: 18, padding: '0 5px', borderRadius: 9, background: SC.primary, color: '#fff', fontSize: 10.5, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{unread}</div>}
      </div>
    </div>
  );
}

// ── 14. Chat 1-on-1 ────────────────────────────────────────
function ScreenChat() {
  return (
    <Phone>
      {/* header */}
      <div style={{ position: 'absolute', top: 54, left: 0, right: 0, padding: '8px 12px 12px', background: '#fff', display: 'flex', alignItems: 'center', gap: 10, zIndex: 10, boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}>
        <div style={{ color: SC.ink, padding: 6 }}>{Ico.back(22)}</div>
        <Avatar name="Amaka Eze" size={38} online/>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14.5, fontWeight: 700, color: SC.ink }}>Amaka Eze</div>
          <div style={{ fontSize: 11, color: SC.success, display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ width: 6, height: 6, borderRadius: 3, background: SC.success, display: 'inline-block' }}/>online
          </div>
        </div>
        <div style={{ width: 36, height: 36, borderRadius: 18, background: SC.bg, color: SC.primary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ico.video(18)}</div>
        <div style={{ width: 36, height: 36, borderRadius: 18, background: SC.bg, color: SC.primary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ico.phone(18)}</div>
      </div>

      {/* messages */}
      <div style={{ position: 'absolute', top: 116, bottom: 80, left: 0, right: 0, overflow: 'auto', padding: '16px 14px', background: SC.bg }}>
        {/* date pill */}
        <div style={{ textAlign: 'center', marginBottom: 12 }}>
          <span style={{ display: 'inline-block', padding: '3px 12px', borderRadius: 999, background: 'rgba(0,0,0,0.06)', fontSize: 10.5, color: SC.muted, fontWeight: 600 }}>TODAY</span>
        </div>

        <Bubble side="in" text="Hey, did the rent payment go through?" time="09:14"/>
        <Bubble side="out" text="Yes! Just sent it. Receipt attached 👇" time="09:15" read/>
        {/* receipt bubble */}
        <Bubble side="out" time="09:15" read receipt/>

        <Bubble side="in" text="Wait — you sent the receipt already? 😭" time="09:30"/>
        <Bubble side="in" text="SwiftCom is too fast abeg. I was still looking for my OPay code 💀" time="09:30"/>
        <Bubble side="out" text="Try the eSIM next. Activated in 8 seconds, no joke." time="09:31" read/>
        <Bubble side="in" text="Sending you my Swift ID — top me up?" time="09:33"/>
        <Bubble side="in" tag="@amaka_e" text="Just kidding 😂 thanks for handling rent!" time="09:33" reply/>
      </div>

      {/* input bar */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#fff', padding: '10px 12px 22px', borderTop: `1px solid ${SC.hairline}`, display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 38, height: 38, borderRadius: 19, background: SC.bg, color: SC.muted, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ico.attach(20)}</div>
        <div style={{ flex: 1, height: 42, borderRadius: 21, background: SC.bg, padding: '0 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ flex: 1, fontSize: 14, color: SC.faint }}>Message Amaka…</span>
          <span style={{ color: SC.muted }}>{Ico.smiley(20)}</span>
        </div>
        <div style={{ width: 42, height: 42, borderRadius: 21, background: SC.primary, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 14px rgba(94,23,235,0.4)' }}>{Ico.paperplane(18)}</div>
      </div>
    </Phone>
  );
}

function Bubble({ side='in', text, time, read, receipt, tag, reply }) {
  const out = side === 'out';
  const tickColor = read ? SC.primary : SC.faint;
  if (receipt) {
    return (
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 8 }}>
        <div style={{ maxWidth: 240, padding: 10, borderRadius: 16, background: SC.primary, color: '#fff', boxShadow: '0 2px 6px rgba(94,23,235,0.25)' }}>
          <div style={{ background: 'rgba(255,255,255,0.18)', borderRadius: 10, padding: 12, marginBottom: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <div style={{ width: 28, height: 28, borderRadius: 14, background: '#fff', color: SC.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>₦</div>
              <div>
                <div style={{ fontSize: 10, opacity: 0.7, letterSpacing: 0.5 }}>RECEIPT</div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{ngn(485000)}</div>
              </div>
            </div>
            <div style={{ fontSize: 11, opacity: 0.85 }}>To Mrs A. Adeyemi · Successful</div>
          </div>
          <div style={{ fontSize: 10, textAlign: 'right', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 4, opacity: 0.85 }}>
            09:15 <span style={{ color: '#fff' }}>✓✓</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', justifyContent: out ? 'flex-end' : 'flex-start', marginBottom: 6 }}>
      <div style={{
        maxWidth: 270,
        background: out ? SC.primary : '#fff',
        color: out ? '#fff' : SC.ink,
        padding: '8px 12px',
        borderRadius: out ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
        fontSize: 13.5, lineHeight: 1.4,
        boxShadow: out ? '0 2px 6px rgba(94,23,235,0.25)' : '0 1px 3px rgba(0,0,0,0.06)',
      }}>
        {reply && (
          <div style={{ background: 'rgba(94,23,235,0.10)', borderLeft: `3px solid ${SC.primary}`, padding: '4px 8px', borderRadius: 4, marginBottom: 6, fontSize: 11, color: SC.primary }}>
            <div style={{ fontWeight: 600 }}>{tag}</div>
            <div style={{ color: SC.muted }}>Sending you my Swift ID — top me up?</div>
          </div>
        )}
        <div>{text}</div>
        <div style={{ fontSize: 9.5, textAlign: 'right', marginTop: 3, opacity: out ? 0.85 : 0.5, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 3 }}>
          {time}
          {out && <span style={{ color: tickColor === SC.primary ? '#fff' : 'rgba(255,255,255,0.6)' }}>✓✓</span>}
        </div>
      </div>
    </div>
  );
}

// ── 15. Voice Call ─────────────────────────────────────────
function ScreenVoiceCall() {
  return (
    <Phone bg={SC.purpleDeepGrad} statusDark hideHome>
      {/* pulse rings */}
      {[260, 200, 140].map((sz, i) => (
        <div key={i} style={{
          position: 'absolute', top: 260 - sz/2 + 40, left: '50%', marginLeft: -sz/2,
          width: sz, height: sz, borderRadius: '50%',
          border: `${i===2 ? 2 : 1}px solid rgba(255,255,255,${0.3 - i*0.07})`,
          background: i === 2 ? 'rgba(255,255,255,0.08)' : 'transparent',
        }}/>
      ))}

      {/* top label */}
      <div style={{ position: 'absolute', top: 74, left: 0, right: 0, textAlign: 'center', color: '#fff' }}>
        <div style={{ fontSize: 12, opacity: 0.65, letterSpacing: 1.5, fontWeight: 600 }}>SWIFTCOM · VOICE CALL</div>
        <div style={{ fontSize: 12, opacity: 0.45, marginTop: 4, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: 3, background: SC.success, display: 'inline-block', boxShadow: '0 0 8px #10B981' }}/>
          end-to-end encrypted
        </div>
      </div>

      {/* avatar + name */}
      <div style={{ position: 'absolute', top: 200, left: 0, right: 0, textAlign: 'center' }}>
        <div style={{ display: 'inline-block', position: 'relative' }}>
          <div style={{
            width: 144, height: 144, borderRadius: 72,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.08))',
            backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
            border: '2px solid rgba(255,255,255,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontSize: 52, fontWeight: 700, letterSpacing: -1,
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          }}>AE</div>
        </div>
        <div style={{ marginTop: 26, fontSize: 28, fontWeight: 700, color: '#fff', letterSpacing: -0.4 }}>Amaka Eze</div>
        <div style={{ marginTop: 4, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>+234 803 412 5589</div>
        <div style={{ marginTop: 18, display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 999, background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.15)' }}>
          <span style={{ width: 6, height: 6, borderRadius: 3, background: SC.success, display: 'inline-block', animation: 'pulse 2s infinite' }}/>
          <span style={{ fontSize: 13, fontWeight: 600, color: '#fff', fontVariantNumeric: 'tabular-nums' }}>04:32</span>
        </div>
      </div>

      {/* controls */}
      <div style={{ position: 'absolute', bottom: 90, left: 0, right: 0, padding: '0 40px', display: 'flex', justifyContent: 'space-between' }}>
        {[
          { ico: Ico.mic, label: 'Mute' },
          { ico: Ico.speaker, label: 'Speaker', active: true },
          { ico: Ico.keypad, label: 'Keypad' },
        ].map((c, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: 64, height: 64, borderRadius: 32,
              background: c.active ? '#fff' : 'rgba(255,255,255,0.12)',
              color: c.active ? SC.primary : '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.18)',
              backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
            }}>{c.ico(26)}</div>
            <span style={{ fontSize: 11, color: '#fff', opacity: 0.8, fontWeight: 500 }}>{c.label}</span>
          </div>
        ))}
      </div>

      {/* end call */}
      <div style={{ position: 'absolute', bottom: 24, left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
        <div style={{
          width: 68, height: 68, borderRadius: 34,
          background: SC.danger, color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 16px 32px rgba(239,68,68,0.5)',
          transform: 'rotate(135deg)',
        }}><svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/></svg></div>
      </div>
    </Phone>
  );
}

Object.assign(window, { ScreenMessages, ScreenChat, ScreenVoiceCall });
