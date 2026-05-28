// SwiftCom — Frame 1: Splash + Onboarding (4 screens)

// ── 1. Splash ──────────────────────────────────────────────
function ScreenSplash() {
  return (
    <Phone bg={SC.purpleDeepGrad} statusDark hideHome>
      {/* floating translucent circles for depth */}
      <div style={{ position: 'absolute', top: 80, left: -60, width: 220, height: 220, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }}/>
      <div style={{ position: 'absolute', top: 580, right: -80, width: 260, height: 260, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }}/>
      <div style={{ position: 'absolute', top: 320, right: 30, width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }}/>
      <div style={{ position: 'absolute', top: 480, left: 40, width: 50, height: 50, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }}/>

      {/* logo + wordmark */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          width: 116, height: 116, borderRadius: 28,
          background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.85) 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 60px rgba(255,255,255,0.5), 0 20px 50px rgba(0,0,0,0.3)',
          marginBottom: 28,
        }}>
          <svg width="62" height="62" viewBox="0 0 24 24"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z" fill={SC.primary}/></svg>
        </div>
        <div style={{ fontSize: 48, fontWeight: 800, color: '#fff', letterSpacing: -1.2, lineHeight: 1 }}>SwiftCom</div>
        <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', marginTop: 12, letterSpacing: 0.3 }}>Connecting people...</div>
      </div>

      {/* loading bar */}
      <div style={{ position: 'absolute', bottom: 80, left: 60, right: 60 }}>
        <div style={{ height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.15)', overflow: 'hidden' }}>
          <div style={{ width: '62%', height: '100%', borderRadius: 2, background: '#fff', boxShadow: '0 0 12px rgba(255,255,255,0.5)' }}/>
        </div>
        <div style={{ marginTop: 12, textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.5)', letterSpacing: 0.5 }}>Loading secure session</div>
      </div>
    </Phone>
  );
}

// Onboarding shared hero illustration — geometric, brand-tinted
function OnboardingHero({ scene }) {
  // three styled scenes — minimal SVG composition, no faces
  if (scene === 'chat') {
    return (
      <div style={{ width: '100%', height: 340, position: 'relative', background: 'linear-gradient(180deg, #F3EEFE 0%, #E9DEFB 100%)', borderRadius: 24, overflow: 'hidden' }}>
        {/* big bubble */}
        <div style={{ position: 'absolute', top: 60, left: 30, width: 180, padding: '18px 18px 14px', borderRadius: '22px 22px 22px 6px', background: '#fff', boxShadow: '0 10px 24px rgba(94,23,235,0.18)' }}>
          <div style={{ width: 100, height: 8, borderRadius: 4, background: '#E5DCFA', marginBottom: 8 }}/>
          <div style={{ width: 130, height: 8, borderRadius: 4, background: '#E5DCFA' }}/>
        </div>
        {/* purple reply bubble */}
        <div style={{ position: 'absolute', top: 180, right: 30, width: 160, padding: '16px 16px 14px', borderRadius: '22px 22px 6px 22px', background: SC.primary, color: '#fff', boxShadow: '0 14px 30px rgba(94,23,235,0.4)' }}>
          <div style={{ width: 120, height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.5)', marginBottom: 8 }}/>
          <div style={{ width: 80, height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.5)' }}/>
        </div>
        {/* small avatar dots */}
        <div style={{ position: 'absolute', bottom: 36, left: 30, display: 'flex', gap: -8 }}>
          {['#5E17EB','#10B981','#F59E0B'].map((c,i) => (
            <div key={i} style={{ width: 36, height: 36, borderRadius: 18, background: c, border: '3px solid #fff', marginLeft: i ? -10 : 0 }}/>
          ))}
        </div>
        <div style={{ position: 'absolute', bottom: 50, right: 36, padding: '6px 12px', borderRadius: 999, background: '#fff', fontSize: 11, fontWeight: 600, color: SC.primary, boxShadow: SC.shadowSoft }}>● Online</div>
      </div>
    );
  }
  if (scene === 'wallet') {
    return (
      <div style={{ width: '100%', height: 340, position: 'relative', background: 'linear-gradient(180deg, #E6F7EF 0%, #C7EEDC 100%)', borderRadius: 24, overflow: 'hidden' }}>
        {/* wallet card */}
        <div style={{ position: 'absolute', top: 60, left: 40, right: 40, height: 120, borderRadius: 18, background: SC.purpleGradDiag, padding: 18, color: '#fff', boxShadow: '0 18px 36px rgba(58,12,170,0.3)' }}>
          <div style={{ fontSize: 11, opacity: 0.8, letterSpacing: 1 }}>BALANCE</div>
          <div style={{ fontSize: 28, fontWeight: 700, marginTop: 4 }}>₦425,800</div>
          <div style={{ marginTop: 18, display: 'flex', gap: 6 }}>
            {[1,2,3,4].map(i => <div key={i} style={{ width: 24, height: 2.5, borderRadius: 2, background: 'rgba(255,255,255,0.5)' }}/>)}
          </div>
        </div>
        {/* upward graph */}
        <svg style={{ position: 'absolute', bottom: 30, left: 40, right: 40 }} viewBox="0 0 240 100" width="240" height="100">
          <path d="M0,80 L40,70 L80,72 L120,50 L160,42 L200,28 L240,12" stroke={SC.success} strokeWidth="3" fill="none" strokeLinecap="round"/>
          <path d="M0,80 L40,70 L80,72 L120,50 L160,42 L200,28 L240,12 L240,100 L0,100 Z" fill="rgba(16,185,129,0.18)"/>
          <circle cx="200" cy="28" r="6" fill={SC.success}/>
          <circle cx="200" cy="28" r="11" fill="none" stroke={SC.success} strokeOpacity="0.3" strokeWidth="2"/>
        </svg>
        {/* coin tokens */}
        <div style={{ position: 'absolute', top: 200, left: 28, width: 44, height: 44, borderRadius: 22, background: 'linear-gradient(135deg, #F59E0B, #D97706)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, boxShadow: '0 8px 18px rgba(245,158,11,0.4)' }}>₦</div>
        <div style={{ position: 'absolute', top: 230, right: 30, width: 36, height: 36, borderRadius: 18, background: 'linear-gradient(135deg, #FCD34D, #F59E0B)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 14, boxShadow: '0 6px 14px rgba(245,158,11,0.4)' }}>₦</div>
      </div>
    );
  }
  // esim scene
  return (
    <div style={{ width: '100%', height: 340, position: 'relative', background: 'linear-gradient(180deg, #FEF4D9 0%, #FCE3A9 100%)', borderRadius: 24, overflow: 'hidden' }}>
      {/* signal rings */}
      {[1,2,3].map(i => (
        <div key={i} style={{
          position: 'absolute', top: 170 - i*30, left: '50%', transform: 'translateX(-50%)',
          width: 240 + i*60, height: 240 + i*60, borderRadius: '50%',
          border: `2px solid rgba(245,158,11,${0.35 - i*0.08})`,
        }}/>
      ))}
      {/* SIM card */}
      <div style={{ position: 'absolute', top: 90, left: '50%', transform: 'translateX(-50%) rotate(-8deg)', width: 170, height: 110, borderRadius: 14, background: SC.purpleGradDiag, padding: 14, color: '#fff', boxShadow: '0 18px 36px rgba(58,12,170,0.35)' }}>
        <div style={{ width: 30, height: 22, borderRadius: 4, background: 'linear-gradient(135deg, #FCD34D, #F59E0B)', marginBottom: 8 }}/>
        <div style={{ fontSize: 9, opacity: 0.7, letterSpacing: 1 }}>SwiftCom eSIM</div>
        <div style={{ fontSize: 14, fontWeight: 700, marginTop: 2, letterSpacing: 0.5 }}>·· 7842</div>
        <svg style={{ position: 'absolute', bottom: 10, right: 12 }} width="22" height="22" viewBox="0 0 24 24"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z" fill="#fff"/></svg>
      </div>
      {/* country pin */}
      <div style={{ position: 'absolute', bottom: 50, left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: 8, padding: '8px 14px', background: '#fff', borderRadius: 999, boxShadow: '0 8px 18px rgba(0,0,0,0.08)' }}>
        {Ico.flag(16)}<span style={{ fontSize: 12, fontWeight: 600 }}>Nigeria · 25GB</span>
      </div>
    </div>
  );
}

function ProgressDots({ active = 0, total = 3 }) {
  return (
    <div style={{ display: 'flex', gap: 6, justifyContent: 'center' }}>
      {Array.from({length: total}).map((_, i) => (
        <div key={i} style={{
          width: i === active ? 24 : 8, height: 8, borderRadius: 4,
          background: i === active ? SC.primary : '#D5D7DC',
          transition: 'width .25s',
        }}/>
      ))}
    </div>
  );
}

function OnboardingSlide({ scene, page, title, body, lastSlide = false }) {
  return (
    <Phone>
      <div style={{ position: 'absolute', top: 54, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', padding: '20px 24px 36px' }}>
        {/* skip */}
        {!lastSlide && (
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <span style={{ color: SC.muted, fontSize: 14, fontWeight: 600, padding: '8px 4px' }}>Skip</span>
          </div>
        )}
        {lastSlide && <div style={{ height: 38 }}/>}

        {/* hero */}
        <div style={{ marginTop: 12 }}>
          <OnboardingHero scene={scene}/>
        </div>

        {/* copy */}
        <div style={{ marginTop: 32, flex: 1 }}>
          <ProgressDots active={page} total={3}/>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: SC.ink, marginTop: 24, marginBottom: 10, letterSpacing: -0.6, textWrap: 'pretty' }}>{title}</h1>
          <p style={{ fontSize: 14.5, color: SC.muted, lineHeight: 1.5, margin: 0, textWrap: 'pretty' }}>{body}</p>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {!lastSlide ? (
            <>
              <div style={{ flex: 1 }}>
                <div style={{ color: SC.muted, fontSize: 13, fontWeight: 500 }}>Sign in?</div>
              </div>
              <button style={{
                background: SC.primary, color: '#fff', border: 'none',
                padding: '14px 28px', borderRadius: 14, fontSize: 15, fontWeight: 600,
                display: 'inline-flex', alignItems: 'center', gap: 8,
                boxShadow: '0 8px 20px rgba(94,23,235,0.35)',
                fontFamily: SC.font,
              }}>Next {Ico.chevR(16)}</button>
            </>
          ) : (
            <button style={{
              flex: 1, background: SC.primary, color: '#fff', border: 'none',
              padding: '16px 28px', borderRadius: 14, fontSize: 16, fontWeight: 600,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              boxShadow: '0 10px 24px rgba(94,23,235,0.4)',
              fontFamily: SC.font,
            }}>Get Started {Ico.chevR(18)}</button>
          )}
        </div>
      </div>
    </Phone>
  );
}

const ScreenOnboard1 = () => (
  <OnboardingSlide scene="chat" page={0}
    title="Chat & call, anywhere in Nigeria"
    body="Send messages, make crystal-clear voice and video calls — even on patchy networks. Your conversations, always with you."/>
);
const ScreenOnboard2 = () => (
  <OnboardingSlide scene="wallet" page={1}
    title="Your money, your control"
    body="Send naira instantly, pay bills, top up airtime. Bank-grade security with the speed Lagos demands."/>
);
const ScreenOnboard3 = () => (
  <OnboardingSlide scene="esim" page={2} lastSlide
    title="Stay connected with eSIM"
    body="Buy data plans in seconds — no physical SIM, no trips to the kiosk. Travel and switch networks on the fly."/>
);

Object.assign(window, { ScreenSplash, ScreenOnboard1, ScreenOnboard2, ScreenOnboard3 });
