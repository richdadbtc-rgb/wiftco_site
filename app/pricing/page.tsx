'use client';
import React, { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import CTABand from '@/components/CTABand';
import PageHeader from '@/components/PageHeader';
import { SC } from '@/lib/tokens';
import { IcoCheck, IcoChevD, IcoChevR } from '@/components/icons';
import { useResponsive } from '@/lib/useResponsive';

const TIERS = [
  {
    name: 'Personal', tag: 'Free', price: '₦0', priceSuffix: '', annualPrice: '₦0',
    sub: 'forever', desc: 'Everything an individual needs. No card, no commitment.',
    cta: 'Get early access', ctaHref: '/download', featured: false,
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
    name: 'Plus', tag: 'Best for power users', price: '₦1,500', priceSuffix: '', annualPrice: '₦1,200',
    sub: '/ month', desc: 'Higher limits, free bill payments, and an unlimited SwiftBot.',
    cta: 'Start 14-day free trial', ctaHref: '/download', featured: true,
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
    name: 'Business', tag: 'For merchants', price: 'From ₦5,000', priceSuffix: '', annualPrice: 'From ₦4,000',
    sub: '/ month', desc: 'SwiftID payments, in-chat checkout, APIs, team accounts.',
    cta: 'Talk to sales', ctaHref: '/business', featured: false,
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

const FEE_ROWS = [
  ['', 'PERSONAL', 'PLUS', 'BUSINESS'],
  ['Wallet → Wallet (any SwiftID)', '₦0', '₦0', '₦0'],
  ['Send to Nigerian bank', '₦25 flat', '₦0', '₦20 / txn'],
  ['Airtime & data top-up', '₦0', '₦0', '₦0'],
  ['Electricity / cable / water', '1% (max ₦100)', '₦0', '0.5% (max ₦200)'],
  ['eSIM plans', 'Plan price', 'Plan price · 2% back', 'Plan price · 5% back'],
  ['SwiftBot AI actions', '100 / mo free', 'Unlimited', 'Unlimited'],
  ['ATM withdrawal (₦ card)', '₦35', '₦0 (3/mo)', '₦20 + 1%'],
];

const FAQS = [
  ['Are there any hidden fees?', 'No. The fee table above is the entire fee table. We make money on float and merchant fees, not on tricks.'],
  ['What does "₦0 wallet → wallet" mean?', 'Sending naira between any two Wiftco accounts is genuinely free. Forever. We earn when money leaves the network, not when it moves inside it.'],
  ['Is Wiftco regulated?', 'Yes — licensed by the Central Bank of Nigeria as a Payment Service Provider, with NDIC deposit insurance up to ₦500,000 per wallet.'],
  ['Can I switch plans later?', 'Any time. Upgrades are prorated. Downgrades take effect at your next billing cycle.'],
  ['How does the merchant tier work?', 'You get a merchant SwiftID (e.g. @kiosko.lekki), in-chat checkout links, an API, and T+0 settlement. Volume-based pricing kicks in past 5,000 transactions/month.'],
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { isMobile } = useResponsive();

  return (
    <div style={{ fontFamily: SC.font, color: SC.ink }}>
      <Nav />
      <PageHeader
        eyebrow="PRICING"
        title="Pricing that respects your kobo."
        subtitle="Free for individuals, transparent for businesses. No hidden fees, no FX surprises. ₦ first, always."
      />

      <Container style={{ paddingTop: 40 }}>
        {/* Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
          <div style={{ display: 'inline-flex', padding: 4, background: SC.bg, borderRadius: 12 }}>
            <button
              onClick={() => setAnnual(false)}
              style={{
                padding: '8px 18px', borderRadius: 8, fontSize: 13.5, fontWeight: 600, cursor: 'pointer', border: 'none',
                background: !annual ? '#fff' : 'transparent',
                color: !annual ? SC.ink : SC.muted,
                boxShadow: !annual ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
              }}>Monthly</button>
            <button
              onClick={() => setAnnual(true)}
              style={{
                padding: '8px 18px', borderRadius: 8, fontSize: 13.5, fontWeight: 600, cursor: 'pointer', border: 'none',
                background: annual ? '#fff' : 'transparent',
                color: annual ? SC.ink : SC.muted,
                boxShadow: annual ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
              }}>
              Annual <span style={{ color: SC.success, marginLeft: 4 }}>save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 20, paddingBottom: 80 }}>
          {TIERS.map((tier, i) => (
            <div key={i} style={{
              background: tier.featured ? SC.purpleGradDiag : '#fff',
              color: tier.featured ? '#fff' : SC.ink,
              border: tier.featured ? 'none' : `1.5px solid ${SC.hairline}`,
              borderRadius: 24, padding: 32,
              position: 'relative',
              boxShadow: tier.featured ? '0 20px 60px rgba(94,23,235,0.30)' : 'none',
              marginTop: tier.featured && !isMobile ? -8 : 0,
            }}>
              {tier.featured && (
                <div style={{
                  position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                  padding: '5px 14px', background: '#fff', color: SC.primary,
                  borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: 1,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)', whiteSpace: 'nowrap',
                }}>MOST POPULAR</div>
              )}
              <div style={{ fontSize: 14, fontWeight: 700 }}>{tier.name}</div>
              <div style={{ fontSize: 12, color: tier.featured ? 'rgba(255,255,255,0.7)' : SC.muted, marginTop: 2 }}>{tier.tag}</div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 24 }}>
                <span style={{ fontSize: 48, fontWeight: 800, letterSpacing: -2 }}>{annual ? tier.annualPrice : tier.price}</span>
                <span style={{ fontSize: 14, color: tier.featured ? 'rgba(255,255,255,0.7)' : SC.muted }}>{tier.sub}</span>
              </div>
              <p style={{ marginTop: 10, fontSize: 14, color: tier.featured ? 'rgba(255,255,255,0.8)' : SC.muted, lineHeight: 1.5, minHeight: 60 }}>{tier.desc}</p>

              <a href={tier.ctaHref} style={{
                display: 'block', width: '100%', marginTop: 8, marginBottom: 24,
                padding: '12px 22px', borderRadius: 12, fontSize: 14, fontWeight: 600,
                textAlign: 'center', textDecoration: 'none', cursor: 'pointer',
                background: tier.featured ? '#fff' : tier.name === 'Business' ? SC.ink : 'transparent',
                color: tier.featured ? SC.primary : tier.name === 'Business' ? '#fff' : SC.ink,
                border: tier.featured || tier.name === 'Business' ? 'none' : `1.5px solid ${SC.hairline}`,
                boxShadow: tier.featured ? '0 10px 24px rgba(0,0,0,0.10)' : tier.name === 'Business' ? '0 10px 24px rgba(26,26,46,0.25)' : 'none',
                boxSizing: 'border-box',
              } as React.CSSProperties}>{tier.cta}</a>

              <div style={{ paddingTop: 24, borderTop: `1px solid ${tier.featured ? 'rgba(255,255,255,0.15)' : SC.hairline}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {tier.features.map((f, fi) => (
                  <div key={fi} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13.5 }}>
                    <span style={{ color: tier.featured ? '#fff' : SC.success, flexShrink: 0, marginTop: 2 }}><IcoCheck size={14} /></span>
                    <span style={{ color: tier.featured ? '#fff' : SC.ink, lineHeight: 1.45 }}>{f}</span>
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
          <p style={{ marginTop: 0, fontSize: 14.5, color: SC.muted, marginBottom: 32 }}>What you&apos;ll pay, by action. No surprises.</p>
          <div style={{ overflowX: isMobile ? 'auto' : 'visible' }}>
            <div style={{ background: '#fff', borderRadius: 14, border: `1px solid ${SC.hairline}`, overflow: 'hidden', minWidth: isMobile ? 560 : 'auto' }}>
              {FEE_ROWS.map((row, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 16,
                  padding: '14px 24px',
                  borderBottom: i < FEE_ROWS.length - 1 ? `1px solid ${SC.hairline}` : 'none',
                  background: i === 0 ? SC.bg : '#fff',
                }}>
                  {row.map((cell, ci) => (
                    <div key={ci} style={{
                      fontSize: i === 0 ? 11 : 13.5,
                      color: i === 0 ? SC.muted : SC.ink,
                      fontWeight: i === 0 ? 700 : ci === 0 ? 500 : 400,
                      letterSpacing: i === 0 ? 1 : 0,
                      fontVariantNumeric: 'tabular-nums',
                    }}>{cell}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* FAQ */}
      <div style={{ padding: '80px 0', background: '#fff' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.5fr', gap: isMobile ? 32 : 60 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2 }}>FAQ</div>
              <h2 style={{ margin: '12px 0 18px', fontSize: 40, fontWeight: 800, letterSpacing: -1.4, lineHeight: 1.1 }}>Pricing, plainly.</h2>
              <p style={{ fontSize: 15, color: SC.muted, lineHeight: 1.55 }}>
                Couldn&apos;t find your answer?{' '}
                <span style={{ color: SC.primary, fontWeight: 600, cursor: 'pointer' }}>Ping us →</span>
              </p>
            </div>
            <div>
              {FAQS.map(([q, a], i) => (
                <div
                  key={i}
                  style={{ padding: '20px 0', borderBottom: `1px solid ${SC.hairline}`, cursor: 'pointer' }}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 20 }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: SC.ink }}>{q}</div>
                    <div style={{ color: SC.faint, flexShrink: 0 }}>
                      {openFaq === i ? <IcoChevD size={18} /> : <IcoChevR size={18} />}
                    </div>
                  </div>
                  {openFaq === i && (
                    <div style={{ fontSize: 14, color: SC.muted, lineHeight: 1.55, marginTop: 12 }}>{a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <CTABand />
      <Footer />
    </div>
  );
}
