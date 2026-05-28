// SwiftCom website — Company (About + Press + Careers)

// ── ABOUT ──────────────────────────────────────────────────
function AboutPage() {
  const team = [
    { name: 'Chinedu Okwu',     role: 'CEO · ex-Paystack',     n: 'Chinedu Okwu' },
    { name: 'Sade Bakare',      role: 'CTO · ex-Flutterwave',  n: 'Sade Bakare' },
    { name: 'Tunde Adeleke',    role: 'Head of Eng · ex-Andela', n: 'Tunde Adeleke' },
    { name: 'Amaka Eze',        role: 'Head of Design · ex-Cowrywise', n: 'Amaka Eze' },
    { name: 'Ibrahim Musa',     role: 'Head of Ops · ex-Kuda',  n: 'Ibrahim Musa' },
    { name: 'Funmi Olanrewaju', role: 'Head of Risk · ex-CBN',  n: 'Funmi Olanrewaju' },
  ];
  const timeline = [
    ['Mar 2024', 'Founded', 'Three co-founders meet at a Yaba co-working space.'],
    ['Sep 2024', 'Pre-seed', '₦1.2B from Future Africa, Y Combinator, and angels.'],
    ['Feb 2025', 'CBN PSP license', 'Cleared the regulatory bar.'],
    ['Aug 2025', 'Beta launch',  '8,000 waitlisted users get access.'],
    ['Mar 2026', '₦4.2B moved',  'In the first 6 beta months.'],
    ['Q3 2026',  'Public launch', 'Coming soon to an App Store near you.'],
  ];
  return (
    <div style={{ width: 1440, background: '#fff', fontFamily: WEB.font, color: SC.ink }}>
      <SiteNav active="Company"/>
      <PageHeader
        eyebrow="ABOUT"
        title="We're building the operating system for Nigerian life."
        subtitle="A team of 38, based in Lagos and Abuja. Backed by Future Africa, Y Combinator, and the people who built the apps you already use."
      />

      {/* Story */}
      <div style={{ padding: '80px 0', background: '#fff' }}>
        <Container w={920}>
          <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2, marginBottom: 16 }}>OUR STORY</div>
          <p style={{ fontSize: 22, lineHeight: 1.55, color: SC.ink, fontWeight: 500, textWrap: 'pretty' }}>
            In 2024 our CEO needed to send rent, top up his sister's airtime, pay DStv, and renew a SIM —
            all between two meetings. He used <em>five apps</em>, a USSD code, and lost ₦650 in transfer fees.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: SC.muted, marginTop: 24, textWrap: 'pretty' }}>
            SwiftCom is what comes out of refusing to accept that as normal. We believe Nigerians deserve a single app
            that handles communication and money with the same speed and grace — built by people who actually live here.
            Not a wallet bolted onto a messenger. Not a chat plug-in on a banking app. One product. One vision. ₦ first.
          </p>
        </Container>
      </div>

      <StatsStrip items={[
        { value: '38',     label: 'People on the team' },
        { value: '2',      label: 'Offices · Lagos & Abuja' },
        { value: '₦1.2B',  label: 'Pre-seed raised' },
        { value: '6',      label: 'Investors backing us' },
      ]}/>

      {/* Team */}
      <div style={{ padding: '88px 0', background: '#fff' }}>
        <Container>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2, marginBottom: 14 }}>LEADERSHIP</div>
            <h2 style={{ margin: 0, fontSize: 44, fontWeight: 800, letterSpacing: -1.4 }}>The team behind the bolt.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {team.map((p, i) => (
              <div key={i} style={{ background: '#FAFAFB', borderRadius: 18, padding: 24, border: `1px solid ${SC.hairline}`, textAlign: 'center' }}>
                <Avatar name={p.n} size={88} style={{ margin: '0 auto 16px' }}/>
                <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: -0.3 }}>{p.name}</div>
                <div style={{ fontSize: 13, color: SC.muted, marginTop: 4 }}>{p.role}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Timeline */}
      <div style={{ padding: '88px 0', background: '#FAFAFB', borderTop: `1px solid ${SC.hairline}` }}>
        <Container>
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2, marginBottom: 14 }}>TIMELINE</div>
            <h2 style={{ margin: 0, fontSize: 40, fontWeight: 800, letterSpacing: -1.2 }}>How we got here.</h2>
          </div>
          <div style={{ position: 'relative', paddingLeft: 32 }}>
            <div style={{ position: 'absolute', left: 10, top: 8, bottom: 8, width: 2, background: SC.hairline }}/>
            {timeline.map((t, i) => (
              <div key={i} style={{ position: 'relative', display: 'grid', gridTemplateColumns: '140px 1fr', gap: 36, padding: '16px 0', alignItems: 'baseline' }}>
                <div style={{ position: 'absolute', left: -32 + 4, top: 18, width: 14, height: 14, borderRadius: 7, background: i < 5 ? SC.primary : '#fff', border: i < 5 ? 'none' : `2px solid ${SC.primary}`, zIndex: 2 }}/>
                <div style={{ fontSize: 13, fontWeight: 700, color: SC.primary, letterSpacing: 0.5 }}>{t[0]}</div>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 700 }}>{t[1]}</div>
                  <div style={{ fontSize: 14, color: SC.muted, marginTop: 4 }}>{t[2]}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Investors */}
      <div style={{ padding: '60px 0', background: '#fff' }}>
        <Container>
          <div style={{ textAlign: 'center', fontSize: 11.5, fontWeight: 700, color: SC.muted, letterSpacing: 2, marginBottom: 22 }}>BACKED BY</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 24, alignItems: 'center' }}>
            {['Future Africa','Y Combinator','Ventures Platform','LoftyInc','Tekedia','Angels'].map((b, i) => (
              <div key={i} style={{
                textAlign: 'center', fontSize: 18, fontWeight: 700,
                color: SC.faint, letterSpacing: -0.3,
                fontFamily: i % 2 ? 'Georgia, serif' : WEB.font,
              }}>{b}</div>
            ))}
          </div>
        </Container>
      </div>

      <CTABand/>
      <SiteFooter/>
    </div>
  );
}

// ── PRESS ──────────────────────────────────────────────────
function PressPage() {
  const items = [
    { src: 'TechCabal',     date: '22 May 2026', title: 'SwiftCom: the Lagos team trying to collapse five apps into one' },
    { src: 'TechCrunch',    date: '08 May 2026', title: 'African super-apps are heating up, and SwiftCom is the latest contender' },
    { src: 'Rest of World', date: '14 Apr 2026', title: 'Inside the bet that Nigerians will trade three apps for one super-app' },
    { src: 'Stears',        date: '02 Apr 2026', title: 'How SwiftCom is rethinking ₦ in chats' },
    { src: 'BusinessDay',   date: '18 Mar 2026', title: 'SwiftCom completes CBN licensing, eyes public launch in Q3' },
    { src: 'Sifted',        date: '04 Feb 2026', title: 'The African super-app race: SwiftCom\'s case for collapsing categories' },
  ];
  return (
    <div style={{ width: 1440, background: '#fff', fontFamily: WEB.font, color: SC.ink }}>
      <SiteNav active="Company"/>
      <PageHeader
        eyebrow="PRESS"
        title="What people are saying."
        subtitle="Coverage, press kits, and a place to find us. Media inquiries: press@swiftcom.ng"
      />

      {/* Featured quote */}
      <div style={{ padding: '60px 0', background: '#fff' }}>
        <Container>
          <div style={{ background: SC.purpleGradDiag, color: '#fff', borderRadius: 24, padding: '48px 56px', position: 'relative', overflow: 'hidden' }}>
            <svg style={{ position: 'absolute', top: -20, right: 20, opacity: 0.10 }} width="200" height="200" viewBox="0 0 24 24"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z" fill="#fff"/></svg>
            <div style={{ position: 'relative', maxWidth: 820 }}>
              <div style={{ fontSize: 60, lineHeight: 1, marginBottom: 16, opacity: 0.5 }}>"</div>
              <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: -0.6, lineHeight: 1.3, textWrap: 'balance' }}>
                The most ambitious consumer fintech bet in West Africa since OPay's launch — and arguably the most thoughtfully designed.
              </div>
              <div style={{ marginTop: 24, fontSize: 14, fontWeight: 600, letterSpacing: 1 }}>— TECHCABAL · MAY 2026</div>
            </div>
          </div>
        </Container>
      </div>

      {/* Articles list */}
      <div style={{ padding: '40px 0 80px', background: '#fff' }}>
        <Container>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 24 }}>
            <h2 style={{ margin: 0, fontSize: 28, fontWeight: 800, letterSpacing: -0.8 }}>In the news</h2>
            <div style={{ display: 'flex', gap: 8 }}>
              {['All','Funding','Product','Regulation'].map((c, i) => (
                <span key={i} style={{ padding: '6px 12px', borderRadius: 999, background: i === 0 ? SC.primary : '#FAFAFB', color: i === 0 ? '#fff' : SC.muted, fontSize: 12, fontWeight: 600, border: i === 0 ? 'none' : `1px solid ${SC.hairline}` }}>{c}</span>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {items.map((it, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px 110px 1fr auto', gap: 24, padding: '20px 24px', background: '#FAFAFB', borderRadius: 14, border: `1px solid ${SC.hairline}`, alignItems: 'center' }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: SC.ink, letterSpacing: -0.3, fontStyle: i % 2 ? 'italic' : 'normal', fontFamily: i % 2 ? 'Georgia, serif' : WEB.font }}>{it.src}</div>
                <div style={{ fontSize: 12.5, color: SC.muted }}>{it.date}</div>
                <div style={{ fontSize: 15.5, fontWeight: 600, color: SC.ink, textWrap: 'balance' }}>{it.title}</div>
                <div style={{ color: SC.primary, fontSize: 13, fontWeight: 600 }}>Read →</div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Press kit */}
      <div style={{ padding: '60px 0', background: '#FAFAFB', borderTop: `1px solid ${SC.hairline}` }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <div style={{ background: '#fff', borderRadius: 18, padding: 32, border: `1px solid ${SC.hairline}` }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2 }}>PRESS KIT</div>
              <h3 style={{ margin: '10px 0 8px', fontSize: 24, fontWeight: 800, letterSpacing: -0.6 }}>Logos, screenshots, brand colors</h3>
              <p style={{ margin: 0, fontSize: 14, color: SC.muted, lineHeight: 1.55 }}>Everything a designer or editor needs. ZIP, 42MB.</p>
              <div style={{ marginTop: 20 }}><WBtn variant="primary" size="md">Download press kit ↓</WBtn></div>
            </div>
            <div style={{ background: '#fff', borderRadius: 18, padding: 32, border: `1px solid ${SC.hairline}` }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2 }}>CONTACTS</div>
              <h3 style={{ margin: '10px 0 12px', fontSize: 24, fontWeight: 800, letterSpacing: -0.6 }}>For journalists</h3>
              <div style={{ fontSize: 13.5, color: SC.muted, lineHeight: 1.7 }}>
                <div><b style={{ color: SC.ink }}>Media:</b> press@swiftcom.ng</div>
                <div><b style={{ color: SC.ink }}>Partnerships:</b> partners@swiftcom.ng</div>
                <div><b style={{ color: SC.ink }}>Investor relations:</b> ir@swiftcom.ng</div>
                <div style={{ marginTop: 10 }}><b style={{ color: SC.ink }}>Office:</b> 11 Bourdillon Rd, Ikoyi, Lagos</div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <SiteFooter/>
    </div>
  );
}

// ── CAREERS ────────────────────────────────────────────────
function CareersPage() {
  const roles = [
    { team: 'Engineering', title: 'Senior iOS Engineer', loc: 'Lagos · Hybrid', tags: ['Swift','SwiftUI','5+ yrs'] },
    { team: 'Engineering', title: 'Backend Engineer · Payments', loc: 'Remote · NG', tags: ['Go','Kafka','Postgres'] },
    { team: 'Engineering', title: 'Mobile Engineer · Android', loc: 'Lagos · Hybrid', tags: ['Kotlin','Compose','3+ yrs'] },
    { team: 'Design',      title: 'Senior Product Designer', loc: 'Lagos · On-site', tags: ['Mobile','Fintech','Figma'] },
    { team: 'Design',      title: 'Brand Designer', loc: 'Lagos · Hybrid', tags: ['Motion','Type','Web'] },
    { team: 'Operations',  title: 'Compliance Analyst', loc: 'Abuja · On-site', tags: ['CBN','AML','3+ yrs'] },
    { team: 'Operations',  title: 'Customer Success Lead', loc: 'Lagos · On-site', tags: ['Fintech','Team mgmt'] },
    { team: 'Growth',      title: 'Growth Marketer', loc: 'Remote · NG', tags: ['Performance','Lagos'] },
  ];
  return (
    <div style={{ width: 1440, background: '#fff', fontFamily: WEB.font, color: SC.ink }}>
      <SiteNav active="Company"/>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(180deg, #FAFAFB 0%, #F3EEFE 100%)', padding: '88px 0 72px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(94,23,235,0.10), transparent 70%)' }}/>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 60, alignItems: 'center', position: 'relative' }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2 }}>CAREERS</div>
              <h1 style={{ margin: '14px 0 18px', fontSize: 72, fontWeight: 800, letterSpacing: -2.6, lineHeight: 1.02, textWrap: 'balance' }}>
                Build the tools <em style={{ fontStyle: 'italic', color: SC.primary, fontFamily: 'Georgia, serif', fontWeight: 500 }}>40 million Nigerians</em> will use every day.
              </h1>
              <p style={{ fontSize: 17, color: SC.muted, lineHeight: 1.55, maxWidth: 540, textWrap: 'pretty' }}>
                We're hiring across Lagos, Abuja, and remote-NG. Pay top of market. Equity for everyone. Real autonomy. Real shipping.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
                <WBtn variant="primary" size="lg">See open roles ↓</WBtn>
                <WBtn variant="outline" size="lg">Life at SwiftCom</WBtn>
              </div>
            </div>
            <div>
              {/* Values card stack */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  ['📍 Lagos-first', 'We hire globally — but build for Nigerians, with Nigerians.'],
                  ['💸 Top-of-market', 'Salaries benchmarked to SF mid-level + meaningful equity.'],
                  ['🚀 Ship fast', 'Two-week cycles, no meeting marathons, real ownership.'],
                  ['🏥 Premium HMO', 'For you, your partner, and up to 4 dependants.'],
                ].map((v, i) => (
                  <div key={i} style={{ padding: 18, background: '#fff', borderRadius: 14, border: `1px solid ${SC.hairline}`, boxShadow: SC.shadowSoft }}>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>{v[0]}</div>
                    <div style={{ fontSize: 12.5, color: SC.muted, marginTop: 4 }}>{v[1]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Roles */}
      <div style={{ padding: '72px 0', background: '#fff' }}>
        <Container>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 28 }}>
            <h2 style={{ margin: 0, fontSize: 36, fontWeight: 800, letterSpacing: -1 }}>Open roles <span style={{ color: SC.muted, fontWeight: 500 }}>· {roles.length}</span></h2>
            <div style={{ display: 'flex', gap: 8 }}>
              {['All','Engineering','Design','Operations','Growth'].map((t, i) => (
                <span key={i} style={{ padding: '6px 12px', borderRadius: 999, background: i === 0 ? SC.primary : '#FAFAFB', color: i === 0 ? '#fff' : SC.muted, fontSize: 12, fontWeight: 600, border: i === 0 ? 'none' : `1px solid ${SC.hairline}` }}>{t}</span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {roles.map((r, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '110px 1fr 1fr auto auto',
                gap: 24, padding: '20px 24px', background: '#FAFAFB',
                borderRadius: 14, border: `1px solid ${SC.hairline}`,
                alignItems: 'center',
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: SC.primary, letterSpacing: 1 }}>{r.team.toUpperCase()}</div>
                <div style={{ fontSize: 15, fontWeight: 700 }}>{r.title}</div>
                <div style={{ fontSize: 13, color: SC.muted }}>{r.loc}</div>
                <div style={{ display: 'flex', gap: 6 }}>
                  {r.tags.map(t => <span key={t} style={{ padding: '4px 10px', borderRadius: 999, background: '#fff', border: `1px solid ${SC.hairline}`, fontSize: 11, fontWeight: 600, color: SC.muted }}>{t}</span>)}
                </div>
                <div style={{ color: SC.primary, fontSize: 13, fontWeight: 700 }}>Apply →</div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <CTABand title="Don't see your role?" sub="Send us what you'd build. We hire for slope, not specifics."/>
      <SiteFooter/>
    </div>
  );
}

Object.assign(window, { AboutPage, PressPage, CareersPage });
