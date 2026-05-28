// SwiftCom website — Home page (2 hero variants)
// Each page is a tall artboard rendered inside DesignCanvas.
// Reuses ScreenDashboard, ScreenChat, ScreenWallet, ScreenAIBot for mockups.

// Phone frame mini — used for mockups inline on the marketing site
function PhoneMockup({ children, scale = 0.62, tilt = 0, shadow = true, style = {} }) {
  return (
    <div style={{
      width: 390 * scale, height: 844 * scale,
      transform: `rotate(${tilt}deg)`,
      position: 'relative',
      filter: shadow ? 'drop-shadow(0 30px 60px rgba(58,12,170,0.30)) drop-shadow(0 10px 24px rgba(0,0,0,0.18))' : 'none',
      ...style,
    }}>
      <div style={{
        width: 390, height: 844,
        transform: `scale(${scale})`, transformOrigin: 'top left',
        borderRadius: 56 / scale * scale, overflow: 'hidden',
        background: '#000',
        padding: 8,
      }}>
        <div style={{ width: '100%', height: '100%', borderRadius: 48, overflow: 'hidden', background: '#000' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

// ── HOME · Variant A (classic centered hero with floating phones) ──
function HomeV1() {
  return (
    <div style={{ width: 1440, background: '#fff', fontFamily: WEB.font, color: SC.ink }}>
      <SiteNav active="Home"/>

      {/* HERO */}
      <div style={{ position: 'relative', padding: '88px 0 100px', overflow: 'hidden', background: 'linear-gradient(180deg, #FAFAFB 0%, #F3EEFE 100%)' }}>
        {/* decorative shapes */}
        <div style={{ position: 'absolute', top: -120, right: -120, width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(94,23,235,0.10) 0%, transparent 70%)' }}/>
        <div style={{ position: 'absolute', bottom: -60, left: -80, width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(94,23,235,0.08) 0%, transparent 70%)' }}/>

        <Container style={{ position: 'relative' }}>
          {/* pill announcement */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '6px 6px 6px 14px', background: '#fff', border: `1px solid ${SC.hairline}`, borderRadius: 999, fontSize: 12.5, color: SC.muted, marginBottom: 32, boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
            <span>✨ Now in private beta · 62,400+ on the waitlist</span>
            <span style={{ padding: '3px 10px', background: SC.primary, color: '#fff', borderRadius: 999, fontSize: 11, fontWeight: 600 }}>Join now →</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 60, alignItems: 'center' }}>
            <div>
              <h1 style={{ margin: 0, fontSize: 88, fontWeight: 800, letterSpacing: -3.5, lineHeight: 0.96, textWrap: 'balance' }}>
                Chat. Send. <span style={{ color: SC.primary, position: 'relative' }}>Connect.<svg style={{ position: 'absolute', bottom: -8, left: 0, right: 0, width: '100%' }} viewBox="0 0 320 14" preserveAspectRatio="none"><path d="M2 10 Q 80 2 160 8 T 318 4" stroke={SC.primary} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4"/></svg></span>
                <br/>All in one tap.
              </h1>
              <p style={{ marginTop: 28, fontSize: 19, color: SC.muted, lineHeight: 1.55, maxWidth: 520, textWrap: 'pretty' }}>
                Messages, voice calls, an AI assistant, a digital wallet, bill payments, and eSIM —
                everything Nigerian life runs on, in one app. Built for Lagos speed.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 36 }}>
                <WBtn variant="primary" size="lg">Get early access ⚡</WBtn>
                <WBtn variant="outline" size="lg">Watch demo
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </WBtn>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 28, marginTop: 36 }}>
                {[
                  ['{Ico.shield}', 'Bank-grade security'],
                  ['{Ico.check}',  'NDIC insured'],
                  ['{Ico.bolt}',   '3-second transfers'],
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: SC.success }}>{Ico.check(16)}</span>
                    <span style={{ fontSize: 13, color: SC.ink, fontWeight: 500 }}>{row[1]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating phones cluster */}
            <div style={{ position: 'relative', height: 640, display: 'flex', justifyContent: 'center' }}>
              {/* main */}
              <div style={{ position: 'absolute', left: 110, top: 20, zIndex: 3 }}>
                <PhoneMockup scale={0.62}><ScreenDashboard/></PhoneMockup>
              </div>
              {/* secondary, tilted left */}
              <div style={{ position: 'absolute', left: -10, top: 110, zIndex: 2 }}>
                <PhoneMockup scale={0.5} tilt={-8}><ScreenChat/></PhoneMockup>
              </div>
              {/* tertiary, tilted right */}
              <div style={{ position: 'absolute', right: -20, top: 220, zIndex: 2 }}>
                <PhoneMockup scale={0.5} tilt={8}><ScreenWallet/></PhoneMockup>
              </div>

              {/* floating receipt callout */}
              <div style={{ position: 'absolute', left: 20, top: 0, padding: '10px 14px', borderRadius: 14, background: '#fff', boxShadow: '0 12px 30px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', gap: 10, zIndex: 4 }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(16,185,129,0.15)', color: SC.success, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>₦</div>
                <div>
                  <div style={{ fontSize: 11, color: SC.muted }}>Sent in 2.4s</div>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>₦25,000 → Tunde</div>
                </div>
              </div>
              {/* AI callout */}
              <div style={{ position: 'absolute', right: 30, top: 90, padding: '10px 14px', borderRadius: 14, background: SC.ink, color: '#fff', boxShadow: '0 12px 30px rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', gap: 10, zIndex: 4 }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: SC.purpleGradDiag, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>{Ico.bot(18)}</div>
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>SwiftBot</div>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>"Renew your eSIM?"</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <PressStrip/>
      <StatsStrip items={[
        { value: '62,400+', label: 'On the waitlist' },
        { value: '₦4.2B',   label: 'Processed in beta' },
        { value: '2.4s',    label: 'Avg transfer time' },
        { value: '99.99%',  label: 'Uptime, last 90 days' },
      ]}/>

      {/* FEATURE GRID */}
      <div style={{ padding: '100px 0', background: '#fff' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2, marginBottom: 14 }}>WHY SWIFTCOM</div>
            <h2 style={{ margin: 0, fontSize: 52, fontWeight: 800, letterSpacing: -1.8, lineHeight: 1.05 }}>Four super-powers, one app.</h2>
            <p style={{ margin: '16px auto 0', fontSize: 17, color: SC.muted, maxWidth: 580, lineHeight: 1.55 }}>
              Stop juggling four apps and a USSD code. SwiftCom collapses chat, money, AI, and connectivity into a single thumb-friendly experience.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            <FeatureCard
              tint={SC.primary}
              eyebrow="MESSAGING"
              title="Chat & call, anywhere"
              body="Crystal-clear voice and video on patchy networks. Reactions, replies, receipts — the WhatsApp habits you know."
              metric="2.4s"
              metricLabel="P50 message delivery"
              mockup={<PhoneMockup scale={0.42}><ScreenChat/></PhoneMockup>}
            />
            <FeatureCard
              tint={SC.success}
              eyebrow="WALLET"
              title="₦ at the speed of thought"
              body="Send to any SwiftID, bank, or phone number in under 3 seconds. Receipts arrive as chat bubbles."
              metric="₦0"
              metricLabel="Wallet-to-wallet transfer fees"
              mockup={<PhoneMockup scale={0.42}><ScreenWallet/></PhoneMockup>}
            />
            <FeatureCard
              tint={SC.warning}
              eyebrow="eSIM"
              title="Data plans in 8 seconds"
              body="No kiosk, no physical SIM. Switch networks, top up data, or buy a roaming plan from your home screen."
              metric="8s"
              metricLabel="Activation, network → online"
              mockup={<PhoneMockup scale={0.42}><ScreenESIM/></PhoneMockup>}
            />
            <FeatureCard
              tint="#0EA5E9"
              eyebrow="SWIFTBOT AI"
              title="An assistant that pays bills"
              body="Ask. It moves money, renews plans, finds receipts, and explains spending — in your own words."
              metric="40+"
              metricLabel="Account actions, conversationally"
              mockup={<PhoneMockup scale={0.42}><ScreenAIBot/></PhoneMockup>}
            />
          </div>
        </Container>
      </div>

      {/* QUOTE / SOCIAL PROOF */}
      <div style={{ padding: '100px 0', background: '#FAFAFB', borderTop: `1px solid ${SC.hairline}`, borderBottom: `1px solid ${SC.hairline}` }}>
        <Container w={920}>
          <div style={{ fontSize: 60, color: SC.primary, lineHeight: 1, marginBottom: 16 }}>"</div>
          <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: -0.8, lineHeight: 1.3, color: SC.ink, textWrap: 'balance' }}>
            I sent my landlord rent and the receipt arrived before her "good evening." SwiftCom is just… faster than the rest of Lagos.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 32 }}>
            <Avatar name="Amaka Eze" size={48}/>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Amaka Eze</div>
              <div style={{ fontSize: 13, color: SC.muted }}>Product designer, Lagos · beta user since March</div>
            </div>
          </div>
        </Container>
      </div>

      {/* MERCHANT CTA */}
      <div style={{ padding: '88px 0', background: '#fff' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2, marginBottom: 14 }}>FOR BUSINESSES</div>
              <h2 style={{ margin: 0, fontSize: 44, fontWeight: 800, letterSpacing: -1.4, lineHeight: 1.05 }}>Accept ₦ where your customers already chat.</h2>
              <p style={{ marginTop: 16, fontSize: 16, color: SC.muted, lineHeight: 1.6, maxWidth: 520 }}>
                Merchant accounts, SwiftIDs, in-chat checkout, and APIs that play nice with Paystack, Flutterwave and your existing stack.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
                <WBtn variant="primaryDark" size="md">Open a merchant account</WBtn>
                <WBtn variant="ghost" size="md">Browse API docs →</WBtn>
              </div>
            </div>
            <div style={{
              background: SC.ink, color: '#fff', borderRadius: 20, padding: 28,
              fontFamily: 'ui-monospace, "SF Mono", monospace', fontSize: 13, lineHeight: 1.6,
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16 }}>
                {['#FF5F56','#FFBD2E','#27C93F'].map((c, i) => <div key={i} style={{ width: 12, height: 12, borderRadius: 6, background: c }}/>)}
                <span style={{ marginLeft: 12, fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>POST /v1/transfers</span>
              </div>
              <div><span style={{ color: '#C792EA' }}>const</span> <span style={{ color: '#82AAFF' }}>txn</span> = <span style={{ color: '#C792EA' }}>await</span> <span style={{ color: '#82AAFF' }}>swift</span>.transfers.<span style={{ color: '#F78C6C' }}>create</span>({'{'}</div>
              <div style={{ paddingLeft: 16 }}>amount: <span style={{ color: '#C3E88D' }}>250000</span>,</div>
              <div style={{ paddingLeft: 16 }}>currency: <span style={{ color: '#C3E88D' }}>'NGN'</span>,</div>
              <div style={{ paddingLeft: 16 }}>to: <span style={{ color: '#C3E88D' }}>'@chidi.ok'</span>,</div>
              <div style={{ paddingLeft: 16 }}>memo: <span style={{ color: '#C3E88D' }}>'Invoice #4821'</span>,</div>
              <div>{'}'});</div>
              <div style={{ marginTop: 12, color: '#10B981' }}>// → succeeded in 2.41s</div>
              <div style={{ position: 'absolute', top: 18, right: 18, padding: '4px 10px', borderRadius: 999, background: 'rgba(16,185,129,0.15)', color: SC.success, fontSize: 11, fontWeight: 600 }}>● live</div>
            </div>
          </div>
        </Container>
      </div>

      <CTABand/>
      <SiteFooter/>
    </div>
  );
}

function FeatureCard({ tint, eyebrow, title, body, metric, metricLabel, mockup }) {
  return (
    <div style={{
      background: '#fff', border: `1px solid ${SC.hairline}`, borderRadius: 24,
      padding: 32, display: 'flex', flexDirection: 'column', minHeight: 460,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ fontSize: 11.5, fontWeight: 700, color: tint, letterSpacing: 2 }}>{eyebrow}</div>
      <h3 style={{ margin: '12px 0 8px', fontSize: 28, fontWeight: 700, letterSpacing: -0.8, lineHeight: 1.15 }}>{title}</h3>
      <p style={{ margin: 0, fontSize: 14.5, color: SC.muted, lineHeight: 1.55, maxWidth: 380 }}>{body}</p>

      <div style={{ marginTop: 24, paddingTop: 24, borderTop: `1px solid ${SC.hairline}`, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div style={{ fontSize: 36, fontWeight: 800, color: tint, letterSpacing: -1.2, lineHeight: 1 }}>{metric}</div>
          <div style={{ fontSize: 12, color: SC.muted, marginTop: 4 }}>{metricLabel}</div>
        </div>
        <div style={{ fontSize: 13, color: tint, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 4 }}>Learn more →</div>
      </div>

      {mockup && (
        <div style={{ position: 'absolute', bottom: -90, right: -30, opacity: 0.95, pointerEvents: 'none' }}>
          {mockup}
        </div>
      )}
    </div>
  );
}

// ── HOME · Variant B (editorial, dark hero, big type) ──
function HomeV2() {
  return (
    <div style={{ width: 1440, background: '#fff', fontFamily: WEB.font, color: SC.ink }}>
      {/* Dark hero */}
      <div style={{ background: SC.purpleDeepGrad, color: '#fff', position: 'relative', overflow: 'hidden' }}>
        {/* big watermark bolt */}
        <svg style={{ position: 'absolute', top: -60, right: -80, opacity: 0.10 }} width="500" height="500" viewBox="0 0 24 24"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z" fill="#fff"/></svg>
        <div style={{ position: 'absolute', bottom: -180, left: -120, width: 460, height: 460, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }}/>

        <SiteNav active="Home" dark/>

        <Container style={{ padding: '120px 56px 80px', position: 'relative' }}>
          {/* eyebrow */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '6px 14px', background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 999, fontSize: 12.5, color: 'rgba(255,255,255,0.85)', marginBottom: 40, backdropFilter: 'blur(20px)' }}>
            ⚡ The Nigerian super-app · private beta
          </div>

          <h1 style={{ margin: 0, fontSize: 144, fontWeight: 800, letterSpacing: -6, lineHeight: 0.9, maxWidth: 1100 }}>
            One app for <em style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 500 }}>everything</em><br/>
            Lagos runs on.
          </h1>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 48, gap: 60 }}>
            <p style={{ margin: 0, fontSize: 19, color: 'rgba(255,255,255,0.75)', maxWidth: 520, lineHeight: 1.55, textWrap: 'pretty' }}>
              Chat, money, AI, eSIM — collapsed into one beautiful experience.
              Built in Lagos, for the way Nigerians actually live.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <WBtn variant="light" size="lg">Get early access</WBtn>
              <WBtn variant="outlineDark" size="lg">Watch the 90-sec demo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </WBtn>
            </div>
          </div>
        </Container>

        {/* phone showcase strip */}
        <div style={{ marginTop: 60, padding: '0 0 80px', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 28, padding: '0 56px' }}>
            <PhoneMockup scale={0.5} tilt={-4}><ScreenDashboard/></PhoneMockup>
            <PhoneMockup scale={0.5} tilt={2}><ScreenChat/></PhoneMockup>
            <PhoneMockup scale={0.5} tilt={-2}><ScreenAIBot/></PhoneMockup>
            <PhoneMockup scale={0.5} tilt={4}><ScreenESIM/></PhoneMockup>
          </div>
        </div>

        {/* bottom stats bar */}
        <div style={{ padding: '32px 0', borderTop: '1px solid rgba(255,255,255,0.12)', background: 'rgba(0,0,0,0.15)' }}>
          <Container>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
              {[
                ['62,400+', 'On the waitlist'],
                ['₦4.2B', 'Processed in beta'],
                ['2.4s', 'Avg transfer time'],
                ['99.99%', 'Uptime, last 90 days'],
              ].map(([v, l], i) => (
                <div key={i}>
                  <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1, color: '#fff' }}>{v}</div>
                  <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>

      <PressStrip/>

      {/* ALTERNATING FEATURE SECTIONS */}
      <FeatureRow
        side="right"
        eyebrow="01 · MESSAGING"
        title="Chat that doesn't blink on a 3G day."
        body="Voice notes that resume mid-elevator, calls that survive the BRT tunnel, group chats that handle the family WhatsApp. We didn't reinvent messaging — we made it work."
        bullets={['Crystal-clear voice & video calls','End-to-end encryption','Receipts arrive as chat bubbles']}
        screen={<ScreenChat/>}
      />
      <FeatureRow
        side="left"
        eyebrow="02 · WALLET"
        title="₦ moves at the speed of a thought."
        body="Send to any SwiftID, phone number, or Nigerian bank account in under three seconds. ₦0 wallet-to-wallet fees, and your transaction history reads like a story instead of a spreadsheet."
        bullets={['Free wallet-to-wallet, anywhere','Bank transfers in <10 seconds','CBN-licensed · NDIC-insured']}
        screen={<ScreenWallet/>}
        bg="#FAFAFB"
      />
      <FeatureRow
        side="right"
        eyebrow="03 · ESIM"
        title="Data plans on tap. Skip the kiosk."
        body="Buy a 25GB plan, switch networks, or grab a roaming pack from your home screen. Activation in eight seconds — no physical SIM, no IMEI ritual."
        bullets={['Multi-network in one tap','Roaming for 80+ countries','Plans starting from ₦1,500']}
        screen={<ScreenESIM/>}
      />
      <FeatureRow
        side="left"
        eyebrow="04 · SWIFTBOT AI"
        title="An assistant that actually does things."
        body="Tell SwiftBot what you want in plain English (or pidgin, it's bilingual). It moves money, pays bills, renews your eSIM, finds receipts, and explains your spending — without you ever opening a menu."
        bullets={['40+ account actions, conversationally','Bilingual: English & Pidgin','Always available · always private']}
        screen={<ScreenAIBot/>}
        bg="#FAFAFB"
      />

      {/* TESTIMONIAL TRIPLE */}
      <div style={{ padding: '100px 0', background: '#fff', borderTop: `1px solid ${SC.hairline}` }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2, marginBottom: 14 }}>WHAT BETA USERS SAY</div>
            <h2 style={{ margin: 0, fontSize: 44, fontWeight: 800, letterSpacing: -1.4 }}>Built with Lagos, for Lagos.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { quote: 'My eSIM activated before my old SIM even left the kiosk. We\'re not the same generation, abeg.', name: 'Tunde Adeleke', role: 'Frontend engineer · Abuja' },
              { quote: 'SwiftBot found a receipt from 4 months ago in 2 seconds. My accountant cried.', name: 'Funmi Olanrewaju', role: 'SME owner · Lagos' },
              { quote: 'Sent rent in 3 seconds. The receipt landed before my landlord finished typing "good evening."', name: 'Amaka Eze', role: 'Product designer · Lagos' },
            ].map((t, i) => (
              <div key={i} style={{ background: '#FAFAFB', border: `1px solid ${SC.hairline}`, borderRadius: 18, padding: 24 }}>
                <div style={{ fontSize: 32, color: SC.primary, lineHeight: 1, marginBottom: 4 }}>"</div>
                <p style={{ margin: 0, fontSize: 16, color: SC.ink, lineHeight: 1.5, textWrap: 'pretty' }}>{t.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 20 }}>
                  <Avatar name={t.name} size={40}/>
                  <div>
                    <div style={{ fontSize: 13.5, fontWeight: 700 }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: SC.muted }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <CTABand title="The future of Naira is one tap away." sub="Join 62,400+ Nigerians waiting to switch."/>
      <SiteFooter/>
    </div>
  );
}

function FeatureRow({ side, eyebrow, title, body, bullets, screen, bg = '#fff' }) {
  const reverse = side === 'left';
  return (
    <div style={{ padding: '100px 0', background: bg }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', direction: reverse ? 'rtl' : 'ltr' }}>
          <div style={{ direction: 'ltr' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2, marginBottom: 16 }}>{eyebrow}</div>
            <h2 style={{ margin: 0, fontSize: 48, fontWeight: 800, letterSpacing: -1.6, lineHeight: 1.05, textWrap: 'balance' }}>{title}</h2>
            <p style={{ marginTop: 18, fontSize: 17, color: SC.muted, lineHeight: 1.6, textWrap: 'pretty', maxWidth: 500 }}>{body}</p>
            <ul style={{ margin: '28px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {bullets.map((b, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15, color: SC.ink, fontWeight: 500 }}>
                  <span style={{ width: 22, height: 22, borderRadius: 11, background: 'rgba(94,23,235,0.10)', color: SC.primary, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>{Ico.check(14)}</span>
                  {b}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 32 }}>
              <WBtn variant="ghost" size="md" style={{ paddingLeft: 0 }}>Explore feature →</WBtn>
            </div>
          </div>
          <div style={{ direction: 'ltr', display: 'flex', justifyContent: 'center', position: 'relative' }}>
            {/* purple radial behind phone */}
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, rgba(94,23,235,0.12) 0%, transparent 60%)' }}/>
            <PhoneMockup scale={0.7}>{screen}</PhoneMockup>
          </div>
        </div>
      </Container>
    </div>
  );
}

Object.assign(window, { HomeV1, HomeV2, PhoneMockup });
