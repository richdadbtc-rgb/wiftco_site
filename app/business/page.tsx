'use client';
import React from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import CTABand from '@/components/CTABand';
import { SC } from '@/lib/tokens';
import { IcoQR, IcoChat, IcoTransfer, IcoShield, IcoHistory, IcoBot } from '@/components/icons';
import Link from 'next/link';
import { useResponsive } from '@/lib/useResponsive';

const MERCHANT_PROPS = [
  { ico: IcoQR, t: 'A SwiftID is your storefront', s: 'Share @kiosko.lekki on a flyer or IG bio. Customers tap and pay — no card details.' },
  { ico: IcoChat, t: 'Pay where conversations happen', s: 'Drop a payment bubble into any chat. Tap → pay → receipt, in seconds.' },
  { ico: IcoTransfer, t: 'T+0 settlement', s: 'Sweep balances to your bank on demand, or schedule daily payouts. No waiting.' },
  { ico: IcoShield, t: 'KYC, AML, PCI — handled', s: 'We do CBN reporting, AML monitoring, and dispute resolution. You serve customers.' },
  { ico: IcoHistory, t: 'Real-time dashboards', s: 'Volume, refunds, top customers. Filter by SwiftID, channel, or amount.' },
  { ico: IcoBot, t: 'AI assistant for ops', s: '"Show refunds this week." "Top 10 customers by spend." SwiftBot answers.' },
];

const API_ENDPOINTS = ['Transfers', 'Checkout & invoices', 'Wallets', 'Bill payments', 'eSIM provisioning', 'Webhooks & events'];

const BUSINESSES = ['Kiosko', 'BoltFood', 'Lekkimart', 'Naijapay', 'Aje', 'Trove'];

export default function BusinessPage() {
  const { isMobile } = useResponsive();

  return (
    <div style={{ fontFamily: SC.font, color: SC.ink }}>
      <Nav />

      {/* Dark hero */}
      <div style={{ background: SC.ink, color: '#fff', padding: isMobile ? '60px 0 72px' : '80px 0 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 40, right: -50, opacity: 0.06, color: '#fff' }}>
          <svg width="320" height="320" viewBox="0 0 24 24"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z" fill="currentColor" /></svg>
        </div>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 40 : 60, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 12px', background: 'rgba(94,23,235,0.20)', border: `1px solid ${SC.primary}`, borderRadius: 999, fontSize: 12.5, color: '#fff', marginBottom: 24 }}>
                <span style={{ width: 6, height: 6, borderRadius: 3, background: SC.success, boxShadow: '0 0 8px #10B981', display: 'inline-block' }} />
                For Nigerian merchants &amp; developers
              </div>
              <h1 style={{ margin: 0, fontSize: isMobile ? 40 : 60, fontWeight: 800, letterSpacing: isMobile ? -1.4 : -2.2, lineHeight: 1.02 }}>
                Take ₦ where your customers{' '}
                <em style={{ fontStyle: 'italic', color: SC.primaryLight, fontFamily: 'Georgia, serif', fontWeight: 500 }}>already chat</em>.
              </h1>
              <p style={{ marginTop: 24, fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.55, maxWidth: 520 }}>
                Merchant SwiftIDs, pay-by-message checkout, a clean REST API, and T+0 settlement to any Nigerian bank.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
                <Link href="/download" style={{ padding: '16px 30px', background: '#fff', color: SC.primary, borderRadius: 14, fontSize: 15.5, fontWeight: 600, textDecoration: 'none', boxShadow: '0 10px 24px rgba(0,0,0,0.10)' }}>
                  Open a merchant account
                </Link>
                <button style={{ padding: '16px 30px', background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.25)', borderRadius: 14, fontSize: 15.5, fontWeight: 600, cursor: 'pointer' }}>
                  Read API docs →
                </button>
              </div>
              <div style={{ display: 'flex', gap: 32, marginTop: 36, flexWrap: 'wrap' }}>
                {[['T+0','Settlement'], ['99.99%','API uptime'], ['<400ms','Median latency']].map(([v, l], i) => (
                  <div key={i}>
                    <div style={{ fontSize: 24, fontWeight: 800 }}>{v}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Code panel — below on mobile */}
            <div style={{ background: '#0F0F1F', borderRadius: 18, padding: 24, fontFamily: 'ui-monospace, monospace', fontSize: isMobile ? 12 : 13, lineHeight: 1.7, border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                {['#FF5F56','#FFBD2E','#27C93F'].map((c, i) => <div key={i} style={{ width: 11, height: 11, borderRadius: 6, background: c }} />)}
                <span style={{ marginLeft: 12, fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>kiosko/server.ts</span>
                <span style={{ marginLeft: 'auto', padding: '3px 9px', borderRadius: 999, background: 'rgba(16,185,129,0.15)', color: SC.success, fontSize: 10.5, fontWeight: 600 }}>● live</span>
              </div>
              <div style={{ color: 'rgba(255,255,255,0.95)' }}>
                <div><span style={{ color: '#7E8C9F' }}>{`// Request payment in a customer chat`}</span></div>
                <div><span style={{ color: '#C792EA' }}>const</span> <span style={{ color: '#82AAFF' }}>invoice</span> = <span style={{ color: '#C792EA' }}>await</span> <span style={{ color: '#82AAFF' }}>swift</span>.checkout.<span style={{ color: '#F78C6C' }}>create</span>{'({'}</div>
                <div style={{ paddingLeft: 18 }}>amount: <span style={{ color: '#C3E88D' }}>2_500_000</span>,</div>
                <div style={{ paddingLeft: 18 }}>currency: <span style={{ color: '#C3E88D' }}>&apos;NGN&apos;</span>,</div>
                <div style={{ paddingLeft: 18 }}>customer: <span style={{ color: '#C3E88D' }}>&apos;@chidi.ok&apos;</span>,</div>
                <div style={{ paddingLeft: 18 }}>memo: <span style={{ color: '#C3E88D' }}>&apos;Friday jollof 🍛&apos;</span>,</div>
                <div>{'}'});</div>
                <div style={{ marginTop: 14, color: '#7E8C9F' }}>{`// → arrives as a tappable chat bubble`}</div>
                <div style={{ marginTop: 12 }}><span style={{ color: '#FF6B7A' }}>swift</span>.on(<span style={{ color: '#C3E88D' }}>&apos;invoice.paid&apos;</span>, <span style={{ color: '#82AAFF' }}>e</span> {'=>'} {'{'}</div>
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
            <h2 style={{ margin: 0, fontSize: isMobile ? 32 : 44, fontWeight: 800, letterSpacing: -1.4, lineHeight: 1.05 }}>From kioskos to enterprises.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 20 }}>
            {MERCHANT_PROPS.map((f, i) => (
              <div key={i} style={{ padding: 24, background: '#FAFAFB', borderRadius: 18, border: `1px solid ${SC.hairline}` }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(94,23,235,0.10)', color: SC.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <f.ico size={22} />
                </div>
                <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 6, letterSpacing: -0.3 }}>{f.t}</div>
                <div style={{ fontSize: 13.5, color: SC.muted, lineHeight: 1.55 }}>{f.s}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Business logos */}
      <div style={{ padding: '60px 0', background: '#FAFAFB', borderTop: `1px solid ${SC.hairline}`, borderBottom: `1px solid ${SC.hairline}` }}>
        <Container>
          <div style={{ textAlign: 'center', fontSize: 11.5, fontWeight: 700, color: SC.muted, letterSpacing: 2, marginBottom: 22 }}>TRUSTED BY 4,200+ NIGERIAN BUSINESSES</div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(6, 1fr)', gap: 24, alignItems: 'center' }}>
            {BUSINESSES.map((b, i) => (
              <div key={i} style={{ textAlign: 'center', fontSize: isMobile ? 16 : 22, fontWeight: 800, color: SC.faint, letterSpacing: -0.6, fontFamily: i % 2 ? 'Georgia, serif' : SC.font, fontStyle: i === 3 ? 'italic' : 'normal' }}>{b}</div>
            ))}
          </div>
        </Container>
      </div>

      {/* API reference */}
      <div style={{ padding: '88px 0', background: '#fff' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.4fr', gap: isMobile ? 40 : 60 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2, marginBottom: 14 }}>API REFERENCE</div>
              <h2 style={{ margin: 0, fontSize: isMobile ? 28 : 40, fontWeight: 800, letterSpacing: -1.2, lineHeight: 1.05 }}>One REST API for everything.</h2>
              <p style={{ marginTop: 16, fontSize: 15.5, color: SC.muted, lineHeight: 1.55 }}>
                Transfers, invoices, bills, eSIM provisioning, webhooks. Idempotent by default. Versioned forever. Sandbox is free.
              </p>
              <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {API_ENDPOINTS.map((g, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: '#FAFAFB', borderRadius: 10, border: `1px solid ${SC.hairline}`, fontSize: 13.5, fontWeight: 600, cursor: 'pointer' }}>
                    <span>{g}</span>
                    <span style={{ color: SC.primary }}>→</span>
                  </div>
                ))}
              </div>
            </div>

            {/* JSON response */}
            <div style={{ background: '#0F0F1F', borderRadius: 16, overflow: 'hidden', fontFamily: 'ui-monospace, monospace', fontSize: 12.5 }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: 16 }}>
                <span style={{ color: SC.success, fontWeight: 700 }}>POST</span>
                <span style={{ color: '#fff' }}>/v1/transfers</span>
                <span style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.4)' }}>200 OK · 412ms</span>
              </div>
              <div style={{ padding: 20, color: '#A6ACCD', lineHeight: 1.7 }}>
                <div>{'{'}</div>
                <div style={{ paddingLeft: 18 }}><span style={{ color: '#FFCB6B' }}>&quot;id&quot;</span>: <span style={{ color: '#C3E88D' }}>&quot;txn_3HJ82kf&quot;</span>,</div>
                <div style={{ paddingLeft: 18 }}><span style={{ color: '#FFCB6B' }}>&quot;amount&quot;</span>: <span style={{ color: '#F78C6C' }}>2500000</span>,</div>
                <div style={{ paddingLeft: 18 }}><span style={{ color: '#FFCB6B' }}>&quot;currency&quot;</span>: <span style={{ color: '#C3E88D' }}>&quot;NGN&quot;</span>,</div>
                <div style={{ paddingLeft: 18 }}><span style={{ color: '#FFCB6B' }}>&quot;status&quot;</span>: <span style={{ color: '#C3E88D' }}>&quot;succeeded&quot;</span>,</div>
                <div style={{ paddingLeft: 18 }}><span style={{ color: '#FFCB6B' }}>&quot;to&quot;</span>: <span style={{ color: '#C3E88D' }}>&quot;@chidi.ok&quot;</span>,</div>
                <div style={{ paddingLeft: 18 }}><span style={{ color: '#FFCB6B' }}>&quot;settled_at&quot;</span>: <span style={{ color: '#C3E88D' }}>&quot;2026-05-27T09:14:22Z&quot;</span>,</div>
                <div style={{ paddingLeft: 18 }}><span style={{ color: '#FFCB6B' }}>&quot;fee&quot;</span>: <span style={{ color: '#F78C6C' }}>0</span></div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <CTABand title="Start accepting ₦ today." sub="Sandbox is free. Production approvals in under 48 hours." />
      <Footer />
    </div>
  );
}
