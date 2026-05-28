// SwiftCom website — Features, Pricing, Business, Security

// ── FEATURES (long deep-dive page) ─────────────────────────
function FeaturesPage() {
  return (
    <div style={{ width: 1440, background: '#fff', fontFamily: WEB.font, color: SC.ink }}>
      <SiteNav active="Features"/>
      <PageHeader
        eyebrow="FEATURES"
        title="Everything Nigerian life runs on. In one tap."
        subtitle="A guided tour through the four pillars of SwiftCom. Each is a complete product on its own — together they collapse half your home screen."
      />

      {/* Anchor nav */}
      <div style={{ position: 'sticky', top: 0, background: '#fff', borderBottom: `1px solid ${SC.hairline}`, padding: '14px 0', zIndex: 10 }}>
        <Container>
          <div style={{ display: 'flex', gap: 32, fontSize: 14, fontWeight: 500, color: SC.muted }}>
            <span style={{ color: SC.primary, fontWeight: 700, position: 'relative' }}>Chat & Calls
              <span style={{ position: 'absolute', bottom: -16, left: 0, right: 0, height: 2, background: SC.primary }}/>
            </span>
            <span>Wallet</span>
            <span>eSIM</span>
            <span>SwiftBot AI</span>
            <span style={{ marginLeft: 'auto', color: SC.faint }}>↓ Scroll to explore</span>
          </div>
        </Container>
      </div>

      {/* CHAT SECTION */}
      <FeatureDeepDive
        n="01"
        eyebrow="CHAT & CALLS"
        title="A messaging app that respects your data plan."
        body="Built ground-up for Nigerian network conditions. Voice notes resume mid-elevator. Calls survive the BRT tunnel. Group chats handle the family WhatsApp — 247 unreads and all."
        kpis={[
          { v: '2.4s', l: 'P50 message delivery' },
          { v: '0.8MB', l: 'Hour of voice call' },
          { v: 'E2EE', l: 'Default encryption' },
        ]}
        screen={<ScreenChat/>}
        secondaryScreen={<ScreenVoiceCall/>}
        features={[
          { ico: Ico.chat,  t: 'Threads, replies, reactions', s: 'The WhatsApp habits you know.' },
          { ico: Ico.phone, t: 'HD voice + video calls', s: 'Resilient to packet loss.' },
          { ico: Ico.mic,   t: 'Voice notes that resume', s: 'Cellular drops? No drama.' },
          { ico: Ico.shield,t: 'E2EE by default', s: 'Even we can\'t read them.' },
        ]}
      />

      <DividerBolt/>

      <FeatureDeepDive
        n="02"
        bg="#FAFAFB"
        eyebrow="WALLET"
        title="₦ moves at the speed of a thought."
        body="Send to any SwiftID, phone number, or Nigerian bank in under 3 seconds. ₦0 wallet-to-wallet fees. Receipts arrive as chat bubbles, not PDFs."
        kpis={[
          { v: '₦0',  l: 'Wallet → wallet fees' },
          { v: '<3s', l: 'Bank transfer time' },
          { v: 'CBN', l: 'Licensed · NDIC insured' },
        ]}
        screen={<ScreenWallet/>}
        secondaryScreen={<ScreenBills/>}
        features={[
          { ico: Ico.send,     t: 'Send to SwiftID or bank', s: 'One field. Smart routing.' },
          { ico: Ico.airtime,  t: 'Airtime + data', s: 'All networks, instant.' },
          { ico: Ico.electric, t: 'Electricity tokens', s: 'Auto-deliver to your meter.' },
          { ico: Ico.tv,       t: 'TV, water, school fees', s: '70+ Nigerian billers.' },
        ]}
      />

      <DividerBolt/>

      <FeatureDeepDive
        n="03"
        eyebrow="ESIM"
        title="Plans on tap. Skip the kiosk."
        body="Activation in 8 seconds — no physical SIM, no IMEI ritual. Buy data, switch networks, or grab a roaming plan for that trip to Dubai, all from your home screen."
        kpis={[
          { v: '8s',  l: 'Activation time' },
          { v: '4',   l: 'Networks supported' },
          { v: '80+', l: 'Roaming countries' },
        ]}
        screen={<ScreenESIM/>}
        features={[
          { ico: Ico.sim,    t: 'Multi-network in one tap', s: 'MTN, Glo, 9mobile, Airtel.' },
          { ico: Ico.globe,  t: 'Roaming for 80+ countries', s: 'Pay in ₦ wherever you go.' },
          { ico: Ico.bell,   t: 'Low-data alerts', s: 'Auto-renew if you let it.' },
          { ico: Ico.bolt,   t: 'Plans from ₦1,500', s: 'Up to 50GB · 30 days.' },
        ]}
      />

      <DividerBolt/>

      <FeatureDeepDive
        n="04"
        bg="#FAFAFB"
        eyebrow="SWIFTBOT AI"
        title="An assistant that actually does things."
        body="Ask in English or Pidgin. SwiftBot moves money, renews plans, finds receipts, and explains your spending — without you ever opening a menu."
        kpis={[
          { v: '40+', l: 'Account actions' },
          { v: '2',   l: 'Languages (EN + Pidgin)' },
          { v: '100%', l: 'On-device for private actions' },
        ]}
        screen={<ScreenAIBot/>}
        features={[
          { ico: Ico.bot,    t: 'Conversational money', s: '"Send ₦5k to Tunde now."' },
          { ico: Ico.history,t: 'Receipt forensics', s: '"What did I spend on Uber last month?"' },
          { ico: Ico.sim,    t: 'Auto eSIM renewal', s: '"Don\'t let me run out again."' },
          { ico: Ico.lock,   t: 'Private by design', s: 'Confirms before it moves ₦.' },
        ]}
      />

      <CTABand/>
      <SiteFooter/>
    </div>
  );
}

function DividerBolt() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '0', background: '#fff' }}>
      <div style={{ width: 48, height: 48, borderRadius: 14, background: '#fff', border: `1px solid ${SC.hairline}`, marginTop: -24, marginBottom: -24, display: 'flex', alignItems: 'center', justifyContent: 'center', color: SC.primary, zIndex: 5 }}>{Ico.bolt(22)}</div>
    </div>
  );
}

function FeatureDeepDive({ n, eyebrow, title, body, kpis, features, screen, secondaryScreen, bg = '#fff' }) {
  return (
    <div style={{ padding: '88px 0', background: bg }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'center' }}>
          {/* LEFT — copy */}
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 16 }}>
              <span style={{ fontSize: 64, fontWeight: 800, color: SC.primary, lineHeight: 1, letterSpacing: -2, opacity: 0.18 }}>{n}</span>
              <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2 }}>{eyebrow}</div>
            </div>
            <h2 style={{ margin: 0, fontSize: 52, fontWeight: 800, letterSpacing: -1.8, lineHeight: 1.05, textWrap: 'balance' }}>{title}</h2>
            <p style={{ marginTop: 20, fontSize: 17, color: SC.muted, lineHeight: 1.6, maxWidth: 520, textWrap: 'pretty' }}>{body}</p>

            {/* KPIs */}
            <div style={{ display: 'flex', gap: 36, margin: '32px 0' }}>
              {kpis.map((k, i) => (
                <div key={i}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: SC.ink, letterSpacing: -0.8 }}>{k.v}</div>
                  <div style={{ fontSize: 12, color: SC.muted, marginTop: 2 }}>{k.l}</div>
                </div>
              ))}
            </div>

            {/* features grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {features.map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: 14, background: bg === '#fff' ? '#FAFAFB' : '#fff', borderRadius: 12, border: `1px solid ${SC.hairline}` }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(94,23,235,0.10)', color: SC.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{f.ico(18)}</div>
                  <div>
                    <div style={{ fontSize: 13.5, fontWeight: 700, color: SC.ink }}>{f.t}</div>
                    <div style={{ fontSize: 12, color: SC.muted, marginTop: 2 }}>{f.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — phones */}
          <div style={{ position: 'relative', height: 640, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'absolute', inset: '10% 10%', background: 'radial-gradient(circle, rgba(94,23,235,0.18) 0%, transparent 60%)' }}/>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <PhoneMockup scale={0.66}>{screen}</PhoneMockup>
            </div>
            {secondaryScreen && (
              <div style={{ position: 'absolute', right: 0, top: 60, zIndex: 1 }}>
                <PhoneMockup scale={0.48} tilt={8}>{secondaryScreen}</PhoneMockup>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

// ── PRICING ────────────────────────────────────────────────
function PricingPage() {
  const tiers = [
    {
      name: 'Personal',
      tag: 'Free',
      price: '₦0',
      sub: 'forever',
      desc: 'Everything an individual needs. No card, no commitment.',
      cta: 'Get early access',
      ctaVariant: 'outline',
      features: [
        'Unlimited chats, voice & video calls',
        'Wallet · ₦0 send to any SwiftID',
        'Bill payments (1% capped at ₦100)',
        'Buy eSIM plans · all networks',
        'SwiftBot AI · 100 actions/month',
        'Social feed & stories',
      ],
    },
    {
      name: 'Plus',
      tag: 'Best for power users',
      price: '₦1,500',
      sub: '/ month',
      desc: 'Higher limits, free bill payments, and an unlimited SwiftBot.',
      cta: 'Start 14-day free trial',
      ctaVariant: 'primary',
      featured: true,
      features: [
        'Everything in Personal',
        '₦0 bill payments — no caps',
        'Unlimited SwiftBot AI actions',
        '₦10M daily transfer limit',
        '2% cashback on eSIM plans',
        'Priority customer support',
        'Virtual ₦ card · USD optional',
      ],
    },
    {
      name: 'Business',
      tag: 'For merchants',
      price: 'From ₦5,000',
      sub: '/ month',
      desc: 'SwiftID payments, in-chat checkout, APIs, team accounts.',
      cta: 'Talk to sales',
      ctaVariant: 'primaryDark',
      features: [
        'Merchant SwiftID + branded link',
        'In-chat checkout · pay-by-message',
        'API + webhooks · 99.99% SLA',
        'Sub-accounts & team roles',
        'Settlement T+0 to any Nigerian bank',
        'Invoicing, reports, exports',
        'Dedicated account manager',
      ],
    },
  ];
  return (
    <div style={{ width: 1440, background: '#fff', fontFamily: WEB.font, color: SC.ink }}>
      <SiteNav active="Pricing"/>
      <PageHeader
        eyebrow="PRICING"
        title="Pricing that respects your kobo."
        subtitle="Free for individuals, transparent for businesses. No hidden fees, no FX surprises. ₦ first, always."
      />

      {/* Pricing toggle */}
      <Container style={{ paddingTop: 40 }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
          <div style={{ display: 'inline-flex', padding: 4, background: SC.bg, borderRadius: 12 }}>
            <span style={{ padding: '8px 18px', borderRadius: 8, background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', fontSize: 13.5, fontWeight: 600 }}>Monthly</span>
            <span style={{ padding: '8px 18px', borderRadius: 8, color: SC.muted, fontSize: 13.5, fontWeight: 600 }}>Annual <span style={{ color: SC.success, marginLeft: 4 }}>save 20%</span></span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, paddingBottom: 80 }}>
          {tiers.map((t, i) => (
            <div key={i} style={{
              background: t.featured ? SC.purpleGradDiag : '#fff',
              color: t.featured ? '#fff' : SC.ink,
              border: t.featured ? 'none' : `1.5px solid ${SC.hairline}`,
              borderRadius: 24, padding: 32,
              position: 'relative',
              boxShadow: t.featured ? '0 20px 60px rgba(94,23,235,0.30)' : 'none',
            }}>
              {t.featured && (
                <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', padding: '5px 14px', background: '#fff', color: SC.primary, borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: 1, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>MOST POPULAR</div>
              )}
              <div style={{ fontSize: 14, fontWeight: 700, color: t.featured ? '#fff' : SC.ink }}>{t.name}</div>
              <div style={{ fontSize: 12, color: t.featured ? 'rgba(255,255,255,0.7)' : SC.muted, marginTop: 2 }}>{t.tag}</div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 24 }}>
                <span style={{ fontSize: 48, fontWeight: 800, letterSpacing: -2 }}>{t.price}</span>
                <span style={{ fontSize: 14, color: t.featured ? 'rgba(255,255,255,0.7)' : SC.muted }}>{t.sub}</span>
              </div>
              <p style={{ marginTop: 10, fontSize: 14, color: t.featured ? 'rgba(255,255,255,0.8)' : SC.muted, lineHeight: 1.5, minHeight: 60 }}>{t.desc}</p>

              <WBtn variant={t.ctaVariant} size="md" style={{ width: '100%', marginTop: 8, marginBottom: 24 }}>{t.cta}</WBtn>

              <div style={{ paddingTop: 24, borderTop: `1px solid ${t.featured ? 'rgba(255,255,255,0.15)' : SC.hairline}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {t.features.map((f, fi) => (
                  <div key={fi} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13.5 }}>
                    <span style={{ color: t.featured ? '#fff' : SC.success, flexShrink: 0, marginTop: 2 }}>{Ico.check(14)}</span>
                    <span style={{ color: t.featured ? '#fff' : SC.ink, lineHeight: 1.45 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Fee table */}
      <div style={{ padding: '60px 0', background: '#FAFAFB', borderTop: `1px solid ${SC.hairline}`, borderBottom: `1px solid ${SC.hairline}` }}>
        <Container>
          <h2 style={{ margin: 0, fontSize: 32, fontWeight: 800, letterSpacing: -1, marginBottom: 8 }}>The full fee table</h2>
          <p style={{ marginTop: 0, fontSize: 14.5, color: SC.muted, marginBottom: 32 }}>What you'll pay, by action. No surprises.</p>
          <div style={{ background: '#fff', borderRadius: 14, border: `1px solid ${SC.hairline}`, overflow: 'hidden' }}>
            {[
              ['Wallet → Wallet (any SwiftID)', '₦0', '₦0', '₦0'],
              ['Send to Nigerian bank', '₦25 flat', '₦0', '₦20 / txn'],
              ['Airtime & data top-up', '₦0', '₦0', '₦0'],
              ['Electricity / cable / water', '1% (max ₦100)', '₦0', '0.5% (max ₦200)'],
              ['eSIM plans', 'Plan price', 'Plan price · 2% back', 'Plan price · 5% back'],
              ['SwiftBot AI actions', '100 / mo free', 'Unlimited', 'Unlimited'],
              ['ATM withdrawal (₦ card)', '₦35', '₦0 (3/mo)', '₦20 + 1%'],
            ].map((row, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 16,
                padding: '14px 24px',
                borderBottom: i < 6 ? `1px solid ${SC.hairline}` : 'none',
                background: i === 0 ? SC.bg : '#fff',
              }}>
                <div style={{ fontSize: 13.5, fontWeight: i === 0 ? 700 : 500, color: SC.ink }}>
                  {i === 0 ? <span style={{ fontSize: 11, letterSpacing: 1, color: SC.muted }}>ACTION</span> : row[0]}
                </div>
                {[1,2,3].map(c => (
                  <div key={c} style={{ fontSize: 13.5, color: SC.ink, fontVariantNumeric: 'tabular-nums' }}>
                    {i === 0 ? <span style={{ fontSize: 11, letterSpacing: 1, color: SC.muted, fontWeight: 700 }}>{['PERSONAL','PLUS','BUSINESS'][c-1]}</span> : row[c]}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* FAQ */}
      <div style={{ padding: '80px 0', background: '#fff' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 60 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2 }}>FAQ</div>
              <h2 style={{ margin: '12px 0 18px', fontSize: 40, fontWeight: 800, letterSpacing: -1.4, lineHeight: 1.1 }}>Pricing, plainly.</h2>
              <p style={{ fontSize: 15, color: SC.muted, lineHeight: 1.55 }}>Couldn't find your answer? <span style={{ color: SC.primary, fontWeight: 600 }}>Ping us →</span></p>
            </div>
            <div>
              {[
                ['Are there any hidden fees?', 'No. The fee table above is the entire fee table. We make money on float and merchant fees, not on tricks.'],
                ['What does "₦0 wallet → wallet" mean?', 'Sending naira between any two SwiftCom accounts is genuinely free. Forever. We earn when money leaves the network, not when it moves inside it.'],
                ['Is SwiftCom regulated?', 'Yes — licensed by the Central Bank of Nigeria as a Payment Service Provider, with NDIC deposit insurance up to ₦500,000 per wallet.'],
                ['Can I switch plans later?', 'Any time. Upgrades are prorated. Downgrades take effect at your next billing cycle.'],
                ['How does the merchant tier work?', 'You get a merchant SwiftID (e.g. @kiosko.lekki), in-chat checkout links, an API, and T+0 settlement. Volume-based pricing kicks in past 5,000 transactions/month.'],
              ].map(([q, a], i) => (
                <div key={i} style={{ padding: '20px 0', borderBottom: `1px solid ${SC.hairline}`, display: 'grid', gridTemplateColumns: '1fr auto', gap: 20 }}>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: SC.ink, marginBottom: i === 0 ? 8 : 0 }}>{q}</div>
                    {i === 0 && <div style={{ fontSize: 14, color: SC.muted, lineHeight: 1.55, textWrap: 'pretty' }}>{a}</div>}
                  </div>
                  <div style={{ color: SC.faint }}>{i === 0 ? Ico.chevD(18) : Ico.chevR(18)}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <CTABand/>
      <SiteFooter/>
    </div>
  );
}

Object.assign(window, { FeaturesPage, PricingPage });
