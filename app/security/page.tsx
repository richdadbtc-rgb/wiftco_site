import React from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import CTABand from '@/components/CTABand';
import PageHeader from '@/components/PageHeader';
import Pill from '@/components/Pill';
import { SC } from '@/lib/tokens';
import { IcoShield, IcoLock, IcoBot, IcoCheck } from '@/components/icons';
import Link from 'next/link';

const PILLARS = [
  { ico: IcoShield, title: 'CBN-licensed PSP', body: 'Operating under the Payment Service Provider license from the Central Bank of Nigeria.' },
  { ico: IcoLock, title: 'NDIC insured', body: 'Wallet balances are insured up to ₦500,000 per account via the NDIC.' },
  { ico: IcoBot, title: 'E2EE messaging', body: 'Signal-protocol encryption for chats. Not even Wiftco can read them.' },
  { ico: IcoCheck, title: 'SOC 2 + ISO 27001', body: 'Type II SOC 2 and ISO 27001 certified. Audit reports available on request.' },
];

const PROTECTIONS = [
  { t: 'PIN + biometrics', s: 'Every money action requires a 6-digit PIN, Face ID, or fingerprint — your choice.' },
  { t: 'Device-bound sessions', s: "New device? You'll re-verify with NIN + a one-time code. Every time." },
  { t: 'Smart fraud detection', s: 'Behavioural ML flags anomalous transfers in <50ms. You confirm before they go through.' },
  { t: 'Spend limits', s: 'Daily, monthly, and per-recipient caps. Locked behind biometrics to raise.' },
  { t: '24/7 monitoring', s: 'Our SOC team watches the platform around the clock. Lagos and Nairobi shifts.' },
];

const CERTS = [
  ['CBN', 'Payment Service Provider', 'License #PSP/0823'],
  ['NDIC', 'Deposit insurance', '₦500K per wallet'],
  ['SOC 2', 'Type II — security, availability', 'Renewed Jan 2026'],
  ['ISO 27001', 'Information security mgmt', 'Cert #IS-NG-2024-3198'],
  ['PCI DSS', 'Level 1 — card data', 'Annual audit, passed'],
  ['NDPR', 'Nigerian Data Protection Reg.', 'Compliant since v1'],
];

export default function SecurityPage() {
  return (
    <div style={{ fontFamily: SC.font, color: SC.ink }}>
      <Nav />
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
            {PILLARS.map((p, i) => (
              <div key={i} style={{ padding: 28, background: '#FAFAFB', borderRadius: 18, border: `1px solid ${SC.hairline}` }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: SC.primary, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <p.ico size={24} />
                </div>
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
            {/* Protections */}
            <div>
              <h2 style={{ margin: 0, fontSize: 32, fontWeight: 800, letterSpacing: -1, marginBottom: 24 }}>How we protect your account</h2>
              {PROTECTIONS.map((row, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, padding: '16px 0', borderTop: i ? `1px solid ${SC.hairline}` : 'none' }}>
                  <div style={{ width: 28, height: 28, borderRadius: 14, background: SC.success, color: '#fff', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                    <IcoCheck size={14} />
                  </div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{row.t}</div>
                    <div style={{ fontSize: 13.5, color: SC.muted, lineHeight: 1.55 }}>{row.s}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Compliance */}
            <div>
              <h2 style={{ margin: 0, fontSize: 32, fontWeight: 800, letterSpacing: -1, marginBottom: 24 }}>Compliance &amp; certifications</h2>
              <div style={{ background: '#fff', borderRadius: 18, padding: 28, border: `1px solid ${SC.hairline}`, boxShadow: SC.shadowSoft }}>
                {CERTS.map((row, i) => (
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
                Need audit reports?{' '}
                <Link href="/help" style={{ color: SC.primary, fontWeight: 600, textDecoration: 'none' }}>security@wiftco.ng →</Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bug bounty */}
      <div style={{ padding: '60px 0', background: '#fff' }}>
        <Container>
          <div style={{ background: SC.ink, color: '#fff', borderRadius: 20, padding: '40px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -20, right: -20, opacity: 0.08 }}>
              <svg width="200" height="200" viewBox="0 0 24 24"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z" fill="#fff" /></svg>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: SC.primaryLight, letterSpacing: 2, marginBottom: 10 }}>BUG BOUNTY</div>
              <h3 style={{ margin: 0, fontSize: 32, fontWeight: 800, letterSpacing: -1, lineHeight: 1.1 }}>Find a vulnerability. Get paid up to ₦5,000,000.</h3>
              <p style={{ marginTop: 12, fontSize: 14.5, color: 'rgba(255,255,255,0.7)', maxWidth: 540, lineHeight: 1.5 }}>
                Responsible disclosure earns Naira rewards, public credit, and an invite to our SOC dinner in Lagos.
              </p>
            </div>
            <button style={{ padding: '16px 30px', background: '#fff', color: SC.primary, borderRadius: 14, fontSize: 15.5, fontWeight: 600, cursor: 'pointer', border: 'none', boxShadow: '0 10px 24px rgba(0,0,0,0.10)', whiteSpace: 'nowrap' }}>
              View the program →
            </button>
          </div>
        </Container>
      </div>

      <CTABand />
      <Footer />
    </div>
  );
}
