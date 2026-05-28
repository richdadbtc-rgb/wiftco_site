// SwiftCom — Frame 2: Auth (Sign Up, OTP, Sign In)

// Purple gradient header shared by auth screens
function AuthHeader({ title, subtitle, emoji }) {
  return (
    <div style={{
      position: 'relative', height: 240, padding: '80px 24px 28px',
      background: SC.purpleGradDiag, color: '#fff',
      borderRadius: '0 0 32px 32px', overflow: 'hidden',
    }}>
      {/* decorative bolts */}
      <svg style={{ position: 'absolute', top: 30, right: 18, opacity: 0.10 }} width="180" height="180" viewBox="0 0 24 24"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z" fill="#fff"/></svg>
      <div style={{ position: 'absolute', top: 100, left: -40, width: 140, height: 140, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }}/>

      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 26 }}>
        <div style={{ width: 36, height: 36, borderRadius: 12, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>{Ico.back(20)}</div>
      </div>
      <div style={{ position: 'relative' }}>
        <h1 style={{ margin: 0, fontSize: 28, fontWeight: 700, letterSpacing: -0.6 }}>{title} {emoji}</h1>
        <p style={{ margin: '8px 0 0', fontSize: 14, color: 'rgba(255,255,255,0.75)', maxWidth: 280, textWrap: 'pretty' }}>{subtitle}</p>
      </div>
    </div>
  );
}

function Field({ label, type='text', value, placeholder, right, error, focused }) {
  const border = error ? SC.danger : focused ? SC.primary : SC.hairline;
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ fontSize: 12.5, fontWeight: 600, color: SC.ink, display: 'block', marginBottom: 6, letterSpacing: 0.1 }}>{label}</label>
      <div style={{
        display: 'flex', alignItems: 'center', height: 52, padding: '0 14px',
        background: '#fff', borderRadius: SC.rInput,
        border: `1.5px solid ${border}`,
        boxShadow: focused ? '0 0 0 4px rgba(94,23,235,0.10)' : 'none',
      }}>
        <input readOnly value={value || ''} placeholder={placeholder} type={type==='password' ? 'text' : type}
          style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: 15, fontFamily: SC.font, color: SC.ink, fontWeight: type==='password' ? 700 : 500, letterSpacing: type==='password' ? 4 : 0 }}/>
        {right}
      </div>
      {error && <div style={{ fontSize: 12, color: SC.danger, marginTop: 6, fontWeight: 500 }}>{error}</div>}
    </div>
  );
}

// ── 5. Sign Up ──────────────────────────────────────────────
function ScreenSignUp() {
  return (
    <Phone statusDark>
      <AuthHeader title="Create Account" subtitle="Welcome to SwiftCom. Let's get you set up in under 2 minutes."/>
      <div style={{ padding: '20px 24px 0' }}>
        <Field label="Full Name" value="Chidi Okonkwo" placeholder="Your full name"/>
        <Field label="Email Address" value="chidi.okonkwo@gmail.com" placeholder="you@email.com" type="email"/>
        <Field label="Password" value="••••••••••" placeholder="Min. 8 characters" type="password" focused
          right={<span style={{ color: SC.muted, padding: 4 }}>{Ico.eye(18)}</span>}/>

        {/* strength */}
        <div style={{ marginTop: -8, marginBottom: 16 }}>
          <div style={{ display: 'flex', gap: 4, marginBottom: 6 }}>
            <div style={{ flex: 1, height: 3, borderRadius: 2, background: SC.success }}/>
            <div style={{ flex: 1, height: 3, borderRadius: 2, background: SC.success }}/>
            <div style={{ flex: 1, height: 3, borderRadius: 2, background: SC.success }}/>
            <div style={{ flex: 1, height: 3, borderRadius: 2, background: SC.hairline }}/>
          </div>
          <div style={{ fontSize: 11.5, color: SC.success, fontWeight: 600 }}>Strong password</div>
        </div>

        <Field label="Confirm Password" value="••••••••••" type="password"
          right={<span style={{ color: SC.success, padding: 4 }}>{Ico.check(18)}</span>}/>

        {/* terms */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, margin: '8px 0 18px' }}>
          <div style={{ width: 20, height: 20, borderRadius: 6, background: SC.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1, color: '#fff' }}>{Ico.check(14)}</div>
          <div style={{ fontSize: 12.5, color: SC.muted, lineHeight: 1.5 }}>
            I agree to SwiftCom's <span style={{ color: SC.primary, fontWeight: 600 }}>Terms of Service</span> and <span style={{ color: SC.primary, fontWeight: 600 }}>Privacy Policy</span>
          </div>
        </div>

        <button style={{
          width: '100%', background: SC.primary, color: '#fff', border: 'none',
          padding: '16px', borderRadius: 14, fontSize: 16, fontWeight: 600,
          boxShadow: '0 10px 24px rgba(94,23,235,0.35)', fontFamily: SC.font,
        }}>Create Account</button>

        <div style={{ textAlign: 'center', fontSize: 13.5, color: SC.muted, marginTop: 18 }}>
          Already have an account? <span style={{ color: SC.primary, fontWeight: 600 }}>Sign In</span>
        </div>
      </div>
    </Phone>
  );
}

// ── 6. OTP ──────────────────────────────────────────────────
function ScreenOTP() {
  const digits = ['7','2','4','','',''];
  return (
    <Phone>
      <div style={{ position: 'absolute', top: 54, left: 0, right: 0, padding: '12px 24px' }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: '#fff', border: `1px solid ${SC.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: SC.ink }}>{Ico.back(20)}</div>
      </div>

      <div style={{ position: 'absolute', top: 140, left: 0, right: 0, padding: '0 24px' }}>
        {/* envelope illustration */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
          <div style={{ position: 'relative', width: 132, height: 132, borderRadius: '50%', background: 'rgba(94,23,235,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', inset: 14, borderRadius: '50%', background: 'rgba(94,23,235,0.10)' }}/>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke={SC.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'relative' }}>
              <rect x="2" y="5" width="20" height="14" rx="2.5"/>
              <path d="M2 7l10 7 10-7"/>
            </svg>
            <div style={{ position: 'absolute', top: 18, right: 14, width: 22, height: 22, borderRadius: 11, background: SC.success, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ico.check(13)}</div>
          </div>
        </div>

        <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: SC.ink, textAlign: 'center', letterSpacing: -0.4 }}>Verify your email</h1>
        <p style={{ margin: '8px 0 32px', fontSize: 14, color: SC.muted, textAlign: 'center', textWrap: 'pretty' }}>
          We sent a 6-digit code to<br/>
          <span style={{ color: SC.ink, fontWeight: 600 }}>c••••@gmail.com</span>
        </p>

        {/* OTP boxes */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 28 }}>
          {digits.map((d, i) => {
            const active = i === 3;
            const filled = !!d;
            return (
              <div key={i} style={{
                width: 48, height: 56, borderRadius: 12,
                background: '#fff',
                border: `2px solid ${active ? SC.primary : filled ? SC.primary : SC.hairline}`,
                boxShadow: active ? '0 0 0 4px rgba(94,23,235,0.12)' : 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22, fontWeight: 700, color: SC.ink,
                position: 'relative',
              }}>
                {d}
                {active && <div style={{ position: 'absolute', bottom: 12, width: 2, height: 22, background: SC.primary, animation: 'none' }}/>}
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', fontSize: 13, color: SC.muted, marginBottom: 8 }}>
          Resend code in <span style={{ color: SC.primary, fontWeight: 600 }}>0:42</span>
        </div>
        <div style={{ textAlign: 'center', fontSize: 14, color: SC.faint }}>
          Didn't get it? <span style={{ color: SC.primary, fontWeight: 600 }}>Resend Code</span>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 36, left: 24, right: 24 }}>
        <button style={{
          width: '100%', background: SC.primary, color: '#fff', border: 'none',
          padding: '16px', borderRadius: 14, fontSize: 16, fontWeight: 600,
          boxShadow: '0 10px 24px rgba(94,23,235,0.35)', fontFamily: SC.font,
        }}>Verify Email</button>
      </div>
    </Phone>
  );
}

// ── 7. Sign In ──────────────────────────────────────────────
function ScreenSignIn() {
  return (
    <Phone statusDark>
      <AuthHeader title="Welcome back" emoji="👋" subtitle="Sign in to pick up where you left off."/>
      <div style={{ padding: '24px 24px 0' }}>
        <Field label="Email Address" value="chidi.okonkwo@gmail.com" type="email"/>
        <Field label="Password" value="••••••••••" type="password"
          right={<span style={{ color: SC.muted, padding: 4 }}>{Ico.eyeOff(18)}</span>}/>

        <div style={{ textAlign: 'right', marginTop: -4, marginBottom: 22 }}>
          <span style={{ color: SC.primary, fontWeight: 600, fontSize: 13 }}>Forgot Password?</span>
        </div>

        <button style={{
          width: '100%', background: SC.primary, color: '#fff', border: 'none',
          padding: '16px', borderRadius: 14, fontSize: 16, fontWeight: 600,
          boxShadow: '0 10px 24px rgba(94,23,235,0.35)', fontFamily: SC.font,
        }}>Sign In</button>

        {/* divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '24px 0' }}>
          <div style={{ flex: 1, height: 1, background: SC.hairline }}/>
          <span style={{ fontSize: 12, color: SC.faint, fontWeight: 500 }}>or continue with</span>
          <div style={{ flex: 1, height: 1, background: SC.hairline }}/>
        </div>

        {/* google */}
        <button style={{
          width: '100%', background: '#fff', color: SC.ink, border: `1.5px solid ${SC.hairline}`,
          padding: '14px', borderRadius: 14, fontSize: 15, fontWeight: 600, fontFamily: SC.font,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path d="M22 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.6c-.2 1.3-1 2.4-2 3.1v2.6h3.3c1.9-1.8 3-4.4 3-7.5z" fill="#4285F4"/>
            <path d="M12 22c2.7 0 5-.9 6.7-2.4l-3.3-2.6c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3v2.6A10 10 0 0012 22z" fill="#34A853"/>
            <path d="M6.4 13.9c-.2-.6-.3-1.2-.3-1.9s.1-1.3.3-1.9V7.5H3a10 10 0 000 9z" fill="#FBBC05"/>
            <path d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.9C16.9 2.9 14.7 2 12 2 8 2 4.5 4.3 3 7.5l3.4 2.6c.8-2.4 3-4.2 5.6-4.2z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        <div style={{ position: 'absolute', bottom: 36, left: 24, right: 24, textAlign: 'center', fontSize: 13.5, color: SC.muted }}>
          Don't have an account? <span style={{ color: SC.primary, fontWeight: 600 }}>Sign Up</span>
        </div>
      </div>
    </Phone>
  );
}

Object.assign(window, { ScreenSignUp, ScreenOTP, ScreenSignIn });
