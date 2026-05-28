// SwiftCom — Frame 3: KYC (Method, NIN Input, Success)

// ── 8. KYC Method Selection ────────────────────────────────
function ScreenKYCMethod() {
  return (
    <Phone>
      <div style={{ position: 'absolute', top: 54, left: 0, right: 0, padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: '#fff', border: `1px solid ${SC.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ico.back(20)}</div>
        <div style={{ flex: 1 }}>
          {/* step indicator */}
          <div style={{ display: 'flex', gap: 4, marginBottom: 4 }}>
            <div style={{ flex: 1, height: 4, borderRadius: 2, background: SC.primary }}/>
            <div style={{ flex: 1, height: 4, borderRadius: 2, background: SC.hairline }}/>
          </div>
          <div style={{ fontSize: 11, color: SC.muted, fontWeight: 600 }}>Step 1 of 2</div>
        </div>
      </div>

      <div style={{ position: 'absolute', top: 132, left: 0, right: 0, padding: '0 24px' }}>
        <h1 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: SC.ink, letterSpacing: -0.5 }}>Verify your identity</h1>
        <p style={{ margin: '8px 0 28px', fontSize: 14, color: SC.muted, textWrap: 'pretty' }}>Choose a method to unlock your wallet, bills, and eSIM features.</p>

        {/* NIN — selected */}
        <div style={{
          background: 'rgba(94,23,235,0.06)', border: `2px solid ${SC.primary}`,
          borderRadius: 16, padding: 18, marginBottom: 14, position: 'relative',
        }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: SC.primary, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {Ico.user(24)}
            </div>
            <div style={{ flex: 1, paddingTop: 2 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: SC.ink, marginBottom: 4 }}>National ID (NIN)</div>
              <div style={{ fontSize: 13, color: SC.muted, lineHeight: 1.45 }}>11-digit number from your NIMC slip or card. Fastest method.</div>
              <div style={{ marginTop: 8 }}><Pill color={SC.success}>● Recommended</Pill></div>
            </div>
            <div style={{ width: 22, height: 22, borderRadius: 11, border: `2px solid ${SC.primary}`, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
              <div style={{ width: 12, height: 12, borderRadius: 6, background: SC.primary }}/>
            </div>
          </div>
        </div>

        {/* BVN — unselected */}
        <div style={{
          background: '#fff', border: `1.5px solid ${SC.hairline}`,
          borderRadius: 16, padding: 18, marginBottom: 24, position: 'relative',
        }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(94,23,235,0.10)', color: SC.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {Ico.wallet(24)}
            </div>
            <div style={{ flex: 1, paddingTop: 2 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: SC.ink, marginBottom: 4 }}>Bank Verification (BVN)</div>
              <div style={{ fontSize: 13, color: SC.muted, lineHeight: 1.45 }}>Dial *565*0# from your registered bank line to retrieve.</div>
            </div>
            <div style={{ width: 22, height: 22, borderRadius: 11, border: `2px solid ${SC.hairline}`, background: '#fff', flexShrink: 0, marginTop: 2 }}/>
          </div>
        </div>

        {/* security notice */}
        <div style={{
          background: 'rgba(16,185,129,0.08)', borderRadius: 12, padding: '12px 14px',
          display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 24,
        }}>
          <div style={{ color: SC.success, flexShrink: 0, marginTop: 1 }}>{Ico.shield(20)}</div>
          <div style={{ fontSize: 12.5, color: '#065F46', lineHeight: 1.5 }}>
            Your data is encrypted end-to-end and never shared. Verification typically takes under 30 seconds.
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 36, left: 24, right: 24 }}>
        <button style={{
          width: '100%', background: SC.primary, color: '#fff', border: 'none',
          padding: '16px', borderRadius: 14, fontSize: 16, fontWeight: 600,
          boxShadow: '0 10px 24px rgba(94,23,235,0.35)', fontFamily: SC.font,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>Continue {Ico.chevR(18)}</button>
      </div>
    </Phone>
  );
}

// ── 9. NIN / BVN Input ─────────────────────────────────────
function ScreenKYCInput() {
  // 11-digit NIN displayed as letter-spaced groups
  const value = '8 5 4 2 1 9 0 7 6 3 2';
  return (
    <Phone>
      <div style={{ position: 'absolute', top: 54, left: 0, right: 0, padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: '#fff', border: `1px solid ${SC.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ico.back(20)}</div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', gap: 4, marginBottom: 4 }}>
            <div style={{ flex: 1, height: 4, borderRadius: 2, background: SC.primary }}/>
            <div style={{ flex: 1, height: 4, borderRadius: 2, background: SC.primary }}/>
          </div>
          <div style={{ fontSize: 11, color: SC.muted, fontWeight: 600 }}>Step 2 of 2</div>
        </div>
      </div>

      <div style={{ position: 'absolute', top: 132, left: 0, right: 0, padding: '0 24px' }}>
        <h1 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: SC.ink, letterSpacing: -0.5 }}>Enter your NIN</h1>
        <p style={{ margin: '8px 0 32px', fontSize: 14, color: SC.muted }}>11-digit National Identification Number.</p>

        {/* big numeric input */}
        <div style={{
          background: '#fff', border: `2px solid ${SC.primary}`,
          borderRadius: 16, padding: '22px 18px',
          boxShadow: '0 0 0 4px rgba(94,23,235,0.10)',
          marginBottom: 16,
        }}>
          <div style={{ fontSize: 11, color: SC.muted, fontWeight: 600, letterSpacing: 1, marginBottom: 8 }}>NIN</div>
          <div style={{ fontSize: 24, fontWeight: 700, color: SC.ink, letterSpacing: 4, fontVariantNumeric: 'tabular-nums' }}>{value}<span style={{ color: SC.primary }}>|</span></div>
          <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ color: SC.success }}>{Ico.check(14)}</div>
            <span style={{ fontSize: 12, color: SC.success, fontWeight: 600 }}>11 of 11 digits</span>
          </div>
        </div>

        {/* collapsible helper */}
        <div style={{ background: '#fff', border: `1px solid ${SC.hairline}`, borderRadius: 12, overflow: 'hidden' }}>
          <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(94,23,235,0.10)', color: SC.primary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>?</div>
            <div style={{ flex: 1, fontSize: 13.5, fontWeight: 600, color: SC.ink }}>Where do I find my NIN?</div>
            <div style={{ color: SC.muted }}>{Ico.chevD(18)}</div>
          </div>
          <div style={{ padding: '0 16px 16px 54px', fontSize: 12.5, color: SC.muted, lineHeight: 1.55 }}>
            Dial <span style={{ color: SC.primary, fontWeight: 600 }}>*346#</span> on the phone line linked to your NIN, or check the back of your NIMC slip.
          </div>
        </div>

        {/* secure note */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 24, fontSize: 12, color: SC.muted }}>
          {Ico.lock(14)}
          <span>Encrypted &amp; verified directly with NIMC. We never store your full NIN.</span>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 36, left: 24, right: 24 }}>
        <button style={{
          width: '100%', background: SC.primary, color: '#fff', border: 'none',
          padding: '16px', borderRadius: 14, fontSize: 16, fontWeight: 600,
          boxShadow: '0 10px 24px rgba(94,23,235,0.35)', fontFamily: SC.font,
        }}>Verify NIN</button>
      </div>
    </Phone>
  );
}

// ── 10. KYC Success ────────────────────────────────────────
function ScreenKYCSuccess() {
  return (
    <Phone>
      {/* confetti dots */}
      {[
        ['#5E17EB', 60, 130], ['#10B981', 320, 160], ['#F59E0B', 80, 240],
        ['#5E17EB', 290, 280], ['#EC4899', 50, 380], ['#10B981', 330, 420],
        ['#F59E0B', 30, 480], ['#5E17EB', 340, 500],
      ].map(([c, l, t], i) => (
        <div key={i} style={{ position: 'absolute', left: l, top: t, width: 7, height: 7, borderRadius: 2, background: c, opacity: 0.6, transform: `rotate(${i*30}deg)` }}/>
      ))}

      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 32px 0' }}>
        {/* success ring */}
        <div style={{ position: 'relative', marginBottom: 32 }}>
          <div style={{ position: 'absolute', inset: -22, borderRadius: '50%', background: 'rgba(16,185,129,0.08)' }}/>
          <div style={{ position: 'absolute', inset: -10, borderRadius: '50%', background: 'rgba(16,185,129,0.16)' }}/>
          <div style={{ position: 'relative', width: 96, height: 96, borderRadius: 48, background: SC.success, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 16px 32px rgba(16,185,129,0.45)' }}>
            {Ico.check(48)}
          </div>
        </div>

        <h1 style={{ margin: 0, fontSize: 28, fontWeight: 800, color: SC.ink, letterSpacing: -0.6 }}>Identity verified!</h1>
        <p style={{ margin: '12px 0 28px', fontSize: 14.5, color: SC.muted, textAlign: 'center', textWrap: 'pretty', lineHeight: 1.5 }}>
          Welcome to the full SwiftCom experience, <span style={{ color: SC.ink, fontWeight: 600 }}>Chidi</span>.<br/>
          Your features are now unlocked.
        </p>

        {/* unlocked feature pills */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', marginBottom: 20 }}>
          {[
            { ico: Ico.wallet, label: 'Wallet & Transfers', sub: 'Send & receive ₦' },
            { ico: Ico.airtime, label: 'Bills & Airtime', sub: 'Pay any biller' },
            { ico: Ico.sim,    label: 'eSIM Plans', sub: 'Buy data instantly' },
          ].map((f, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '14px 16px', background: '#fff',
              border: `1px solid ${SC.hairline}`, borderRadius: 14,
            }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(94,23,235,0.10)', color: SC.primary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{f.ico(20)}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14.5, fontWeight: 600, color: SC.ink }}>{f.label}</div>
                <div style={{ fontSize: 12, color: SC.muted, marginTop: 1 }}>{f.sub}</div>
              </div>
              <div style={{ width: 24, height: 24, borderRadius: 12, background: 'rgba(16,185,129,0.12)', color: SC.success, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ico.check(14)}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 36, left: 24, right: 24 }}>
        <button style={{
          width: '100%', background: SC.primary, color: '#fff', border: 'none',
          padding: '16px', borderRadius: 14, fontSize: 16, fontWeight: 600,
          boxShadow: '0 10px 24px rgba(94,23,235,0.35)', fontFamily: SC.font,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>Go to Dashboard {Ico.chevR(18)}</button>
      </div>
    </Phone>
  );
}

Object.assign(window, { ScreenKYCMethod, ScreenKYCInput, ScreenKYCSuccess });
