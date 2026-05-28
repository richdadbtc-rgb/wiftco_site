// SwiftCom website — Help center, Blog, Download

// ── HELP ───────────────────────────────────────────────────
function HelpPage() {
  const cats = [
    { ico: Ico.wallet, title: 'Wallet & transfers',  count: 24, color: SC.primary },
    { ico: Ico.chat,   title: 'Chat & calls',        count: 18, color: '#0EA5E9' },
    { ico: Ico.sim,    title: 'eSIM',                count: 16, color: SC.warning },
    { ico: Ico.shield, title: 'Security & KYC',      count: 22, color: SC.success },
    { ico: Ico.airtime,title: 'Bill payments',       count: 14, color: '#EC4899' },
    { ico: Ico.bot,    title: 'SwiftBot AI',         count: 11, color: SC.primary },
  ];
  const popular = [
    'How do I send money to a bank account?',
    'My transfer is pending — what now?',
    'How do I find my NIN?',
    'Why was my account flagged?',
    'How do I activate my eSIM?',
    'What happens if I lose my phone?',
    'Can I get a refund on a bill payment?',
    'How do I change my SwiftID?',
  ];
  return (
    <div style={{ width: 1440, background: '#fff', fontFamily: WEB.font, color: SC.ink }}>
      <SiteNav active="Help"/>

      {/* Hero with search */}
      <div style={{ padding: '80px 0 60px', background: 'linear-gradient(180deg, #FAFAFB 0%, #F3EEFE 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <Container>
          <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2 }}>HELP CENTER</div>
          <h1 style={{ margin: '14px 0 14px', fontSize: 56, fontWeight: 800, letterSpacing: -2 }}>How can we help?</h1>
          <p style={{ fontSize: 17, color: SC.muted, marginBottom: 32, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>Search 400+ articles, or chat with SwiftBot — it answers most questions in under 5 seconds.</p>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', padding: 8, background: '#fff', border: `1px solid ${SC.hairline}`, borderRadius: 16, boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
              <div style={{ padding: '10px 14px', color: SC.faint }}>{Ico.search(20)}</div>
              <div style={{ flex: 1, fontSize: 15.5, color: SC.faint, textAlign: 'left' }}>Try "how to send money" or "my eSIM isn't activating"</div>
              <WBtn variant="primary" size="md">Ask SwiftBot ⚡</WBtn>
            </div>
            <div style={{ fontSize: 12.5, color: SC.muted, marginTop: 12 }}>
              Common: <span style={{ color: SC.primary, fontWeight: 600 }}>send money</span> · <span style={{ color: SC.primary, fontWeight: 600 }}>NIN verification</span> · <span style={{ color: SC.primary, fontWeight: 600 }}>refund</span> · <span style={{ color: SC.primary, fontWeight: 600 }}>eSIM</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Categories */}
      <div style={{ padding: '60px 0', background: '#fff' }}>
        <Container>
          <h2 style={{ margin: '0 0 24px', fontSize: 24, fontWeight: 800, letterSpacing: -0.6 }}>Browse by topic</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {cats.map((c, i) => (
              <div key={i} style={{ padding: 24, background: '#FAFAFB', borderRadius: 16, border: `1px solid ${SC.hairline}`, display: 'flex', gap: 16, alignItems: 'center' }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `${c.color}1A`, color: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{c.ico(24)}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 16, fontWeight: 700 }}>{c.title}</div>
                  <div style={{ fontSize: 12.5, color: SC.muted, marginTop: 2 }}>{c.count} articles</div>
                </div>
                <div style={{ color: SC.faint }}>{Ico.chevR(18)}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Popular + Contact */}
      <div style={{ padding: '40px 0 80px', background: '#fff' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40 }}>
            {/* Popular */}
            <div>
              <h2 style={{ margin: '0 0 16px', fontSize: 24, fontWeight: 800, letterSpacing: -0.6 }}>Popular questions</h2>
              <div style={{ background: '#FAFAFB', borderRadius: 14, border: `1px solid ${SC.hairline}`, overflow: 'hidden' }}>
                {popular.map((q, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 20px', borderTop: i ? `1px solid ${SC.hairline}` : 'none' }}>
                    <div style={{ width: 28, height: 28, borderRadius: 14, background: 'rgba(94,23,235,0.10)', color: SC.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>?</div>
                    <div style={{ flex: 1, fontSize: 14, fontWeight: 500 }}>{q}</div>
                    <div style={{ color: SC.faint }}>{Ico.chevR(16)}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact card */}
            <div style={{ background: SC.purpleGradDiag, color: '#fff', borderRadius: 18, padding: 28, position: 'relative', overflow: 'hidden' }}>
              <svg style={{ position: 'absolute', top: -10, right: -10, opacity: 0.10 }} width="160" height="160" viewBox="0 0 24 24"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z" fill="#fff"/></svg>
              <div style={{ position: 'relative' }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>{Ico.bot(24)}</div>
                <h3 style={{ margin: 0, fontSize: 22, fontWeight: 800, letterSpacing: -0.5 }}>Still stuck?</h3>
                <p style={{ marginTop: 8, fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.55 }}>SwiftBot answers most questions instantly. Human agents are 24/7 in English & Pidgin.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 20 }}>
                  <WBtn variant="light" size="md" style={{ width: '100%' }}>Chat with SwiftBot</WBtn>
                  <WBtn variant="outlineDark" size="md" style={{ width: '100%' }}>Talk to a human →</WBtn>
                </div>
                <div style={{ marginTop: 18, fontSize: 12, color: 'rgba(255,255,255,0.65)' }}>
                  Avg response · <b style={{ color: '#fff' }}>32 seconds</b> · 24/7
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <SiteFooter/>
    </div>
  );
}

// ── BLOG ───────────────────────────────────────────────────
function BlogPage() {
  const featured = {
    cat: 'PRODUCT',
    title: 'Why we built SwiftBot — and why an AI should never move your money without asking.',
    excerpt: 'The internal arguments that shaped our assistant\'s first principle: confirm before commit. A look at how we made an AI feel safe with ₦.',
    author: 'Amaka Eze', role: 'Head of Design', date: '24 May 2026', read: '8 min read',
  };
  const posts = [
    { cat: 'ENGINEERING', title: 'How we keep transfers under 3 seconds on 3G',  author: 'Tunde Adeleke', date: '22 May 2026', read: '12 min' },
    { cat: 'DESIGN',      title: 'Designing for thumbs, in a country that prefers thumbs', author: 'Amaka Eze', date: '18 May 2026', read: '6 min' },
    { cat: 'COMPANY',     title: 'Closing our pre-seed: ₦1.2B and what we\'re doing with it', author: 'Chinedu Okwu', date: '12 May 2026', read: '5 min' },
    { cat: 'REGULATION',  title: 'What our CBN license means for our users',     author: 'Funmi Olanrewaju', date: '03 May 2026', read: '4 min' },
    { cat: 'PRODUCT',     title: 'The case against custom keypads in fintech',   author: 'Amaka Eze', date: '28 Apr 2026', read: '7 min' },
    { cat: 'ENGINEERING', title: 'Postgres + Kafka: the boring stack behind SwiftCom payments', author: 'Sade Bakare', date: '20 Apr 2026', read: '14 min' },
  ];
  return (
    <div style={{ width: 1440, background: '#fff', fontFamily: WEB.font, color: SC.ink }}>
      <SiteNav/>
      <PageHeader
        eyebrow="BLOG"
        title="Notes from the engineering room."
        subtitle="What we're building, what we learned, and why we made the calls we made."
      />

      {/* Featured */}
      <div style={{ padding: '60px 0 32px', background: '#fff' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40, background: SC.purpleGradDiag, color: '#fff', borderRadius: 24, padding: 40, position: 'relative', overflow: 'hidden' }}>
            <svg style={{ position: 'absolute', bottom: -40, right: -40, opacity: 0.10 }} width="320" height="320" viewBox="0 0 24 24"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z" fill="#fff"/></svg>
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'inline-block', padding: '4px 10px', background: 'rgba(255,255,255,0.18)', borderRadius: 999, fontSize: 10.5, fontWeight: 700, letterSpacing: 1.2, marginBottom: 18 }}>FEATURED · {featured.cat}</div>
              <h2 style={{ margin: 0, fontSize: 36, fontWeight: 800, letterSpacing: -1.2, lineHeight: 1.1, textWrap: 'balance' }}>{featured.title}</h2>
              <p style={{ marginTop: 16, fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.55, maxWidth: 480, textWrap: 'pretty' }}>{featured.excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 28 }}>
                <Avatar name={featured.author} size={40}/>
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 700 }}>{featured.author}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>{featured.role} · {featured.date} · {featured.read}</div>
                </div>
              </div>
              <div style={{ marginTop: 24 }}>
                <WBtn variant="light" size="md">Read article →</WBtn>
              </div>
            </div>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', inset: '-10%', background: 'radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)' }}/>
              <PhoneMockup scale={0.5}><ScreenAIBot/></PhoneMockup>
            </div>
          </div>
        </Container>
      </div>

      {/* Filter tabs */}
      <div style={{ padding: '0 0 40px', background: '#fff' }}>
        <Container>
          <div style={{ display: 'flex', gap: 8, borderBottom: `1px solid ${SC.hairline}`, paddingBottom: 12 }}>
            {['All','Engineering','Product','Design','Company','Regulation'].map((t, i) => (
              <span key={i} style={{ padding: '8px 14px', borderRadius: 999, background: i === 0 ? SC.primary : 'transparent', color: i === 0 ? '#fff' : SC.muted, fontSize: 13, fontWeight: 600 }}>{t}</span>
            ))}
          </div>
        </Container>
      </div>

      {/* Posts grid */}
      <div style={{ padding: '0 0 80px', background: '#fff' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {posts.map((p, i) => (
              <article key={i} style={{ background: '#FAFAFB', borderRadius: 16, padding: 24, border: `1px solid ${SC.hairline}` }}>
                {/* image placeholder */}
                <div style={{ height: 140, borderRadius: 12, background: ['linear-gradient(135deg, #F3EEFE, #C7B9F3)','linear-gradient(135deg, #E6F7EF, #C7EEDC)','linear-gradient(135deg, #FEF4D9, #FCE3A9)','linear-gradient(135deg, #DBEAFE, #BFDBFE)','linear-gradient(135deg, #FCE7F3, #FBCFE8)','linear-gradient(135deg, #F3F4F6, #E5E7EB)'][i], marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', color: SC.muted, fontFamily: 'ui-monospace, monospace', fontSize: 11 }}>
                  [ hero image · 1200×800 ]
                </div>
                <div style={{ fontSize: 10.5, fontWeight: 700, color: SC.primary, letterSpacing: 1.2 }}>{p.cat}</div>
                <h3 style={{ margin: '8px 0 12px', fontSize: 18, fontWeight: 700, letterSpacing: -0.4, lineHeight: 1.25, textWrap: 'balance' }}>{p.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 16 }}>
                  <Avatar name={p.author} size={28}/>
                  <div style={{ fontSize: 12, color: SC.muted }}>
                    <b style={{ color: SC.ink }}>{p.author}</b> · {p.date} · {p.read}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </div>

      <SiteFooter/>
    </div>
  );
}

// ── DOWNLOAD ───────────────────────────────────────────────
function DownloadPage() {
  return (
    <div style={{ width: 1440, background: '#fff', fontFamily: WEB.font, color: SC.ink }}>
      <SiteNav/>

      <div style={{ background: SC.purpleDeepGrad, color: '#fff', padding: '80px 0 100px', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', top: -60, right: -60, opacity: 0.08 }} width="400" height="400" viewBox="0 0 24 24"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z" fill="#fff"/></svg>
        <div style={{ position: 'absolute', bottom: -150, left: -100, width: 400, height: 400, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }}/>

        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 12px', background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 999, fontSize: 12.5, marginBottom: 24 }}>
                <span style={{ width: 6, height: 6, borderRadius: 3, background: SC.success, boxShadow: '0 0 8px #10B981' }}/>
                Private beta · invite-only
              </div>
              <h1 style={{ margin: 0, fontSize: 76, fontWeight: 800, letterSpacing: -2.8, lineHeight: 1 }}>
                Get on the<br/>list.
              </h1>
              <p style={{ marginTop: 24, fontSize: 18, color: 'rgba(255,255,255,0.75)', maxWidth: 480, lineHeight: 1.55, textWrap: 'pretty' }}>
                Drop your email and we'll text you the moment your invite is ready. App Store and Play Store, ready to go.
              </p>

              {/* email capture */}
              <div style={{ marginTop: 36, display: 'flex', gap: 8, padding: 6, background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 16, maxWidth: 460 }}>
                <div style={{ flex: 1, padding: '14px 18px', fontSize: 15, color: 'rgba(255,255,255,0.5)' }}>you@email.com</div>
                <WBtn variant="light" size="md">Notify me ⚡</WBtn>
              </div>

              {/* app store badges */}
              <div style={{ marginTop: 32 }}>
                <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.55)', fontWeight: 600, letterSpacing: 2, marginBottom: 14 }}>OR, IF YOU HAVE AN INVITE</div>
                <div style={{ display: 'flex', gap: 12 }}>
                  {[
                    ['App Store',     'Download on the'],
                    ['Google Play',   'GET IT ON'],
                  ].map((b, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 22px', background: '#000', borderRadius: 14, border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer' }}>
                      <div style={{ fontSize: 24 }}>{i === 0 ? '' : '▶'}</div>
                      <div>
                        <div style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.7)', letterSpacing: 0.5 }}>{b[1]}</div>
                        <div style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginTop: 1 }}>{b[0]}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 28, marginTop: 36, fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>
                {[
                  ['62,400+', 'on the list'],
                  ['4.8★',    'beta rating'],
                  ['iOS 15+', 'Android 10+'],
                ].map(([v, l], i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                    <span style={{ fontSize: 22, fontWeight: 800, color: '#fff' }}>{v}</span>
                    <span>{l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone showcase */}
            <div style={{ position: 'relative', height: 720, display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', inset: '5% 5%', background: 'radial-gradient(circle, rgba(255,255,255,0.15), transparent 60%)' }}/>
              <div style={{ position: 'absolute', left: 30, top: 30, zIndex: 1 }}>
                <PhoneMockup scale={0.62} tilt={-5}><ScreenChat/></PhoneMockup>
              </div>
              <div style={{ position: 'absolute', right: 30, top: 70, zIndex: 2 }}>
                <PhoneMockup scale={0.62} tilt={5}><ScreenDashboard/></PhoneMockup>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Compatibility band */}
      <div style={{ padding: '48px 0', background: '#fff', borderBottom: `1px solid ${SC.hairline}` }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2, marginBottom: 8 }}>SUPPORTED ON</div>
              <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.6 }}>iPhone, Android &<br/>Watch (soon).</div>
            </div>
            {[
              ['iOS 15+', '99% of devices'],
              ['Android 10+', 'Lite mode on 8+'],
              ['Watch OS', 'Coming Q3 2026'],
            ].map(([v, l], i) => (
              <div key={i} style={{ padding: 20, background: '#FAFAFB', borderRadius: 14, border: `1px solid ${SC.hairline}` }}>
                <div style={{ fontSize: 18, fontWeight: 700 }}>{v}</div>
                <div style={{ fontSize: 13, color: SC.muted, marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <SiteFooter/>
    </div>
  );
}

Object.assign(window, { HelpPage, BlogPage, DownloadPage });
