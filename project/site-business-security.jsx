// SwiftCom website — Business / API + Security & Trust

// ── BUSINESS / API ─────────────────────────────────────────
function BusinessPage() {
  return (
    <div style={{ width: 1440, background: '#fff', fontFamily: WEB.font, color: SC.ink }}>
      <SiteNav active="Business"/>

      {/* HERO — dark, split */}
      <div style={{ background: SC.ink, color: '#fff', padding: '80px 0 100px', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', top: 40, right: -50, opacity: 0.06 }} width="320" height="320" viewBox="0 0 24 24"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z" fill="#fff"/></svg>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 12px', background: 'rgba(94,23,235,0.20)', border: `1px solid ${SC.primary}`, borderRadius: 999, fontSize: 12.5, color: '#fff', marginBottom: 24 }}>
                <span style={{ width: 6, height: 6, borderRadius: 3, background: SC.success, boxShadow: '0 0 8px #10B981' }}/>
                For Nigerian merchants & developers
              </div>
              <h1 style={{ margin: 0, fontSize: 60, fontWeight: 800, letterSpacing: -2.2, lineHeight: 1.02 }}>
                Take ₦ where your customers <em style={{ fontStyle: 'italic', color: SC.primaryLight, fontFamily: 'Georgia, serif', fontWeight: 500 }}>already chat</em>.
              </h1>
              <p style={{ marginTop: 24, fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.55, maxWidth: 520, textWrap: 'pretty' }}>
                Merchant SwiftIDs, pay-by-message checkout, a clean REST API, and T+0 settlement to any Nigerian bank.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
                <WBtn variant="light" size="lg">Open a merchant account</WBtn>
                <WBtn variant="outlineDark" size="lg">Read API docs →</WBtn>
              </div>
              <div style={{ display: 'flex', gap: 32, marginTop: 36 }}>
                {[['T+0','Settlement'], ['99.99%','API uptime'], ['<400ms','Median latency']].map(([v, l], i) => (
                  <div key={i}>
                    <div style={{ fontSize: 24, fontWeight: 800 }}>{v}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Code panel */}
            <div style={{
              background: '#0F0F1F', borderRadius: 18, padding: 24,
              fontFamily: 'ui-monospace, monospace', fontSize: 13, lineHeight: 1.7,
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                {['#FF5F56','#FFBD2E','#27C93F'].map((c, i) => <div key={i} style={{ width: 11, height: 11, borderRadius: 6, background: c }}/>)}
                <span style={{ marginLeft: 12, fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>kiosko/server.ts</span>
                <span style={{ marginLeft: 'auto', padding: '3px 9px', borderRadius: 999, background: 'rgba(16,185,129,0.15)', color: SC.success, fontSize: 10.5, fontWeight: 600 }}>● live</span>
              </div>
              <div style={{ color: 'rgba(255,255,255,0.95)' }}>
                <div><span style={{ color: '#7E8C9F' }}>{'// Request payment in a customer chat'}</span></div>
                <div><span style={{ color: '#C792EA' }}>const</span> <span style={{ color: '#82AAFF' }}>invoice</span> = <span style={{ color: '#C792EA' }}>await</span> <span style={{ color: '#82AAFF' }}>swift</span>.checkout.<span style={{ color: '#F78C6C' }}>create</span>({'{'}</div>
                <div style={{ paddingLeft: 18 }}>amount: <span style={{ color: '#C3E88D' }}>2_500_000</span>,</div>
                <div style={{ paddingLeft: 18 }}>currency: <span style={{ color: '#C3E88D' }}>'NGN'</span>,</div>
                <div style={{ paddingLeft: 18 }}>customer: <span style={{ color: '#C3E88D' }}>'@chidi.ok'</span>,</div>
                <div style={{ paddingLeft: 18 }}>memo: <span style={{ color: '#C3E88D' }}>'Friday jollof 🍛'</span>,</div>
                <div>{'}'});</div>
                <div style={{ marginTop: 14, color: '#7E8C9F' }}>{'// → arrives as a tappable chat bubble'}</div>
                <div style={{ marginTop: 12 }}><span style={{ color: '#FF6B7A' }}>swift</span>.on(<span style={{ color: '#C3E88D' }}>'invoice.paid'</span>, <span style={{ color: '#82AAFF' }}>e</span> {'=>'} {'{'}</div>
                <div style={{ paddingLeft: 18 }}>shipFood(e.customer);</div>
                <div>{'}'});</div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Merchant value props */}
      <div style={{ padding: '88px 0', background: '#fff' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2, marginBottom: 14 }}>FOR MERCHANTS</div>
            <h2 style={{ margin: 0, fontSize: 44, fontWeight: 800, letterSpacing: -1.4, lineHeight: 1.05 }}>From kioskos to enterprises.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { ico: Ico.qr, t: 'A SwiftID is your storefront', s: 'Share @kiosko.lekki on a flyer or IG bio. Customers tap and pay — no card details.' },
              { ico: Ico.chat, t: 'Pay where conversations happen', s: 'Drop a payment bubble into any chat. Tap → pay → receipt, in seconds.' },
              { ico: Ico.transfer, t: 'T+0 settlement', s: 'Sweep balances to your bank on demand, or schedule daily payouts. No waiting.' },
              { ico: Ico.shield, t: 'KYC, AML, PCI — handled', s: 'We do CBN reporting, AML monitoring, and dispute resolution. You serve customers.' },
              { ico: Ico.history, t: 'Real-time dashboards', s: 'Volume, refunds, top customers. Filter by SwiftID, channel, or amount.' },
              { ico: Ico.bot, t: 'AI assistant for ops', s: '"Show refunds this week." "Top 10 customers by spend." SwiftBot answers.' },
            ].map((f, i) => (
              <div key={i} style={{ padding: 24, background: '#FAFAFB', borderRadius: 18, border: `1px solid ${SC.hairline}` }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(94,23,235,0.10)', color: SC.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>{f.ico(22)}</div>
                <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 6, letterSpacing: -0.3 }}>{f.t}</div>
                <div style={{ fontSize: 13.5, color: SC.muted, lineHeight: 1.55, textWrap: 'pretty' }}>{f.s}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Customer logos */}
      <div style={{ padding: '60px 0', background: '#FAFAFB', borderTop: `1px solid ${SC.hairline}`, borderBottom: `1px solid ${SC.hairline}` }}>
        <Container>
          <div style={{ textAlign: 'center', fontSize: 11.5, fontWeight: 700, color: SC.muted, letterSpacing: 2, marginBottom: 22 }}>TRUSTED BY 4,200+ NIGERIAN BUSINESSES</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 24, alignItems: 'center' }}>
            {['Kiosko', 'BoltFood', 'Lekkimart', 'Naijapay', 'Aje', 'Trove'].map((b, i) => (
              <div key={i} style={{
                textAlign: 'center', fontSize: 22, fontWeight: 800,
                color: SC.faint, letterSpacing: -0.6,
                fontFamily: i % 2 ? 'Georgia, serif' : WEB.font,
                fontStyle: i === 3 ? 'italic' : 'normal',
              }}>{b}</div>
            ))}
          </div>
        </Container>
      </div>

      {/* API reference preview */}
      <div style={{ padding: '88px 0', background: '#fff' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 60 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2, marginBottom: 14 }}>API REFERENCE</div>
              <h2 style={{ margin: 0, fontSize: 40, fontWeight: 800, letterSpacing: -1.2, lineHeight: 1.05 }}>One REST API for everything.</h2>
              <p style={{ marginTop: 16, fontSize: 15.5, color: SC.muted, lineHeight: 1.55, textWrap: 'pretty' }}>
                Transfers, invoices, bills, eSIM provisioning, webhooks. Idempotent by default. Versioned forever. Sandbox is free.
              </p>
              <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Transfers','Checkout & invoices','Wallets','Bill payments','eSIM provisioning','Webhooks & events'].map((g, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: '#FAFAFB', borderRadius: 10, border: `1px solid ${SC.hairline}`, fontSize: 13.5, fontWeight: 600 }}>
                    <span>{g}</span>
                    <span style={{ color: SC.primary }}>→</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#0F0F1F', borderRadius: 16, overflow: 'hidden', fontFamily: 'ui-monospace, monospace', fontSize: 12.5 }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: 16 }}>
                <span style={{ color: SC.success, fontWeight: 700 }}>POST</span>
                <span style={{ color: '#fff' }}>/v1/transfers</span>
                <span style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.4)' }}>200 OK · 412ms</span>
              </div>
              <div style={{ padding: 20, color: '#A6ACCD', lineHeight: 1.7 }}>
                <div>{'{'}</div>
                <div style={{ paddingLeft: 18 }}><span style={{ color: '#FFCB6B' }}>"id"</span>: <span style={{ color: '#C3E88D' }}>"txn_3HJ82kf"</span>,</div>
                <div style={{ paddingLeft: 18 }}><span style={{ color: '#FFCB6B' }}>"amount"</span>: <span style={{ color: '#F78C6C' }}>2500000</span>,</div>
                <div style={{ paddingLeft: 18 }}><span style={{ color: '#FFCB6B' }}>"currency"</span>: <span style={{ color: '#C3E88D' }}>"NGN"</span>,</div>
                <div style={{ paddingLeft: 18 }}><span style={{ color: '#FFCB6B' }}>"status"</span>: <span style={{ color: '#C3E88D' }}>"succeeded"</span>,</div>
                <div style={{ paddingLeft: 18 }}><span style={{ color: '#FFCB6B' }}>"to"</span>: <span style={{ color: '#C3E88D' }}>"@chidi.ok"</span>,</div>
                <div style={{ paddingLeft: 18 }}><span style={{ color: '#FFCB6B' }}>"settled_at"</span>: <span style={{ color: '#C3E88D' }}>"2026-05-27T09:14:22Z"</span>,</div>
                <div style={{ paddingLeft: 18 }}><span style={{ color: '#FFCB6B' }}>"fee"</span>: <span style={{ color: '#F78C6C' }}>0</span></div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <CTABand title="Start accepting ₦ today." sub="Sandbox is free. Production approvals in under 48 hours."/>
      <SiteFooter/>
    </div>
  );
}

// ── SECURITY & TRUST ───────────────────────────────────────
function SecurityPage() {
  return (
    <div style={{ width: 1440, background: '#fff', fontFamily: WEB.font, color: SC.ink }}>
      <SiteNav active="Security"/>
      <PageHeader
        dark
        eyebrow="SECURITY & TRUST"
        title="Your ₦ is protected by more than a password."
        subtitle="CBN-licensed. NDIC-insured. End-to-end encrypted. Independently audited. Built by Nigerians who've worked at banks and fintechs you've heard of."
      />

      {/* Pillars */}
      <div style={{ padding: '80px 0', background: '#fff' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {[
              { ico: Ico.shield, title: 'CBN-licensed PSP', body: 'Operating under the Payment Service Provider license from the Central Bank of Nigeria.' },
              { ico: Ico.lock, title: 'NDIC insured', body: 'Wallet balances are insured up to ₦500,000 per account via the NDIC.' },
              { ico: Ico.bot, title: 'E2EE messaging', body: 'Signal-protocol encryption for chats. Not even SwiftCom can read them.' },
              { ico: Ico.check, title: 'SOC 2 + ISO 27001', body: 'Type II SOC 2 and ISO 27001 certified. Audit reports available on request.' },
            ].map((p, i) => (
              <div key={i} style={{ padding: 28, background: '#FAFAFB', borderRadius: 18, border: `1px solid ${SC.hairline}` }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: SC.primary, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>{p.ico(24)}</div>
                <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 6, letterSpacing: -0.3 }}>{p.title}</div>
                <div style={{ fontSize: 13, color: SC.muted, lineHeight: 1.55 }}>{p.body}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Detail sections */}
      <div style={{ padding: '60px 0', background: '#FAFAFB', borderTop: `1px solid ${SC.hairline}`, borderBottom: `1px solid ${SC.hairline}` }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
            {/* How we protect */}
            <div>
              <h2 style={{ margin: 0, fontSize: 32, fontWeight: 800, letterSpacing: -1, marginBottom: 24 }}>How we protect your account</h2>
              {[
                { t: 'PIN + biometrics', s: 'Every money action requires a 6-digit PIN, Face ID, or fingerprint — your choice.' },
                { t: 'Device-bound sessions', s: 'New device? You\'ll re-verify with NIN + a one-time code. Every time.' },
                { t: 'Smart fraud detection', s: 'Behavioural ML flags anomalous transfers in <50ms. You confirm before they go through.' },
                { t: 'Spend limits', s: 'Daily, monthly, and per-recipient caps. Locked behind biometrics to raise.' },
                { t: '24/7 monitoring', s: 'Our SOC team watches the platform around the clock. Lagos and Nairobi shifts.' },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, padding: '16px 0', borderTop: i ? `1px solid ${SC.hairline}` : 'none' }}>
                  <div style={{ width: 28, height: 28, borderRadius: 14, background: SC.success, color: '#fff', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>{Ico.check(14)}</div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{row.t}</div>
                    <div style={{ fontSize: 13.5, color: SC.muted, lineHeight: 1.55, textWrap: 'pretty' }}>{row.s}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Compliance card */}
            <div>
              <h2 style={{ margin: 0, fontSize: 32, fontWeight: 800, letterSpacing: -1, marginBottom: 24 }}>Compliance & certifications</h2>
              <div style={{ background: '#fff', borderRadius: 18, padding: 28, border: `1px solid ${SC.hairline}`, boxShadow: SC.shadowSoft }}>
                {[
                  ['CBN', 'Payment Service Provider', 'License #PSP/0823'],
                  ['NDIC', 'Deposit insurance', '₦500K per wallet'],
                  ['SOC 2', 'Type II — security, availability', 'Renewed Jan 2026'],
                  ['ISO 27001', 'Information security mgmt', 'Cert #IS-NG-2024-3198'],
                  ['PCI DSS', 'Level 1 — card data', 'Annual audit, passed'],
                  ['NDPR', 'Nigerian Data Protection Reg.', 'Compliant since v1'],
                ].map((row, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '90px 1fr auto', gap: 16, padding: '14px 0', borderTop: i ? `1px solid ${SC.hairline}` : 'none', alignItems: 'center' }}>
                    <div style={{ fontSize: 13, fontWeight: 800, color: SC.primary, letterSpacing: 0.5 }}>{row[0]}</div>
                    <div>
                      <div style={{ fontSize: 13.5, fontWeight: 600 }}>{row[1]}</div>
                      <div style={{ fontSize: 11.5, color: SC.muted, marginTop: 1 }}>{row[2]}</div>
                    </div>
                    <Pill color={SC.success}>● Active</Pill>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 16, fontSize: 12.5, color: SC.muted, textAlign: 'center' }}>
                Need audit reports? <span style={{ color: SC.primary, fontWeight: 600 }}>security@swiftcom.ng →</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bug bounty band */}
      <div style={{ padding: '60px 0', background: '#fff' }}>
        <Container>
          <div style={{ background: SC.ink, color: '#fff', borderRadius: 20, padding: '40px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, position: 'relative', overflow: 'hidden' }}>
            <svg style={{ position: 'absolute', top: -20, right: -20, opacity: 0.08 }} width="200" height="200" viewBox="0 0 24 24"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z" fill="#fff"/></svg>
            <div style={{ position: 'relative' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: SC.primaryLight, letterSpacing: 2, marginBottom: 10 }}>BUG BOUNTY</div>
              <h3 style={{ margin: 0, fontSize: 32, fontWeight: 800, letterSpacing: -1, lineHeight: 1.1 }}>Find a vulnerability. Get paid up to ₦5,000,000.</h3>
              <p style={{ marginTop: 12, fontSize: 14.5, color: 'rgba(255,255,255,0.7)', maxWidth: 540, lineHeight: 1.5 }}>Responsible disclosure earns Naira rewards, public credit, and an invite to our SOC dinner in Lagos.</p>
            </div>
            <WBtn variant="light" size="lg">View the program →</WBtn>
          </div>
        </Container>
      </div>

      <CTABand/>
      <SiteFooter/>
    </div>
  );
}

Object.assign(window, { BusinessPage, SecurityPage });
