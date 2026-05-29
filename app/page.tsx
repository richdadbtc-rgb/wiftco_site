'use client';

import React from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import WBtn from '@/components/WBtn';
import Avatar from '@/components/Avatar';
import CTABand from '@/components/CTABand';
import PressStrip from '@/components/PressStrip';
import StatsStrip from '@/components/StatsStrip';
import PhoneMockup from '@/components/PhoneMockup';
import { SC } from '@/lib/tokens';
import { IcoCheck, IcoBolt, IcoPlay } from '@/components/icons';
import Link from 'next/link';
import { useResponsive } from '@/lib/useResponsive';

const FEATURES = [
  {
    tint: SC.primary, eyebrow: 'MESSAGING', screen: 'chat' as const,
    title: 'Chat & call, anywhere',
    body: 'Crystal-clear voice and video on patchy networks. Reactions, replies, receipts — the WhatsApp habits you know.',
    metric: '2.4s', metricLabel: 'P50 message delivery',
  },
  {
    tint: SC.success, eyebrow: 'WALLET', screen: 'wallet' as const,
    title: '₦ at the speed of thought',
    body: 'Send to any SwiftID, bank, or phone number in under 3 seconds. Receipts arrive as chat bubbles.',
    metric: '₦0', metricLabel: 'Wallet-to-wallet transfer fees',
  },
  {
    tint: SC.warning, eyebrow: 'ESIM', screen: 'esim' as const,
    title: 'Data plans in 8 seconds',
    body: 'No kiosk, no physical SIM. Switch networks, top up data, or buy a roaming plan from your home screen.',
    metric: '8s', metricLabel: 'Activation, network → online',
  },
  {
    tint: '#0EA5E9', eyebrow: 'SWIFTBOT AI', screen: 'aibot' as const,
    title: 'An assistant that pays bills',
    body: 'Ask. It moves money, renews plans, finds receipts, and explains spending — in your own words.',
    metric: '40+', metricLabel: 'Account actions, conversationally',
  },
];

const TRUST_BADGES = [
  'Bank-grade security',
  'NDIC insured',
  '3-second transfers',
];

export default function HomePage() {
  const { isMobile } = useResponsive();

  return (
    <div style={{ fontFamily: SC.font, color: SC.ink }}>
      <Nav />

      {/* HERO */}
      <div style={{
        position: 'relative', padding: isMobile ? '60px 0 80px' : '88px 0 100px',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #FAFAFB 0%, #F3EEFE 100%)',
      }}>
        <div style={{ position: 'absolute', top: -120, right: -120, width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(94,23,235,0.10) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -80, width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(94,23,235,0.08) 0%, transparent 70%)' }} />

        <Container style={{ position: 'relative' }}>
          {/* Pill badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '6px 6px 6px 14px', background: '#fff', border: `1px solid ${SC.hairline}`, borderRadius: 999, fontSize: isMobile ? 11 : 12.5, color: SC.muted, marginBottom: 32, boxShadow: '0 4px 14px rgba(0,0,0,0.04)' }}>
            <span>✨ Now in private beta · 62,400+ on the waitlist</span>
            <Link href="/download" style={{ padding: '3px 10px', background: SC.primary, color: '#fff', borderRadius: 999, fontSize: 11, fontWeight: 600, textDecoration: 'none' }}>Join now →</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.05fr 1fr', gap: isMobile ? 40 : 60, alignItems: isMobile ? 'center' : 'center' }}>
            {/* Copy */}
            <div>
              <h1 style={{ margin: 0, fontSize: isMobile ? 48 : 88, fontWeight: 800, letterSpacing: isMobile ? -2 : -3.5, lineHeight: isMobile ? 1.1 : 0.96, textAlign: isMobile ? 'center' : 'left' }}>
                Chat. Send.{' '}
                <span style={{ color: SC.primary, position: 'relative', display: 'inline-block' }}>
                  Connect.
                  <svg style={{ position: 'absolute', bottom: -8, left: 0, width: '100%' }} viewBox="0 0 320 14" preserveAspectRatio="none">
                    <path d="M2 10 Q 80 2 160 8 T 318 4" stroke={SC.primary} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4" />
                  </svg>
                </span>
                <br />All in one tap.
              </h1>
              <p style={{ marginTop: isMobile ? 20 : 28, fontSize: isMobile ? 16 : 19, color: SC.muted, lineHeight: 1.55, maxWidth: isMobile ? '100%' : 520, textAlign: isMobile ? 'center' : 'left' }}>
                Messages, voice calls, an AI assistant, a digital wallet, bill payments, and eSIM —
                everything Nigerian life runs on, in one app. Built for Lagos speed.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 36, flexDirection: isMobile ? 'column' : 'row', width: isMobile ? '100%' : 'auto' }}>
                <Link href="/download" style={{
                  padding: '16px 30px', background: SC.primary, color: '#fff',
                  borderRadius: 14, fontSize: 15.5, fontWeight: 600, textDecoration: 'none',
                  boxShadow: '0 10px 24px rgba(94,23,235,0.30)',
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  width: isMobile ? '100%' : 'auto', justifyContent: 'center',
                }}>Get early access ⚡</Link>
                <button style={{
                  padding: '16px 30px', background: 'transparent', color: SC.ink,
                  border: `1.5px solid ${SC.hairline}`, borderRadius: 14, fontSize: 15.5, fontWeight: 600, cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  width: isMobile ? '100%' : 'auto', justifyContent: 'center',
                }}>
                  Watch demo <IcoPlay size={14} />
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 16 : 28, marginTop: 36, flexDirection: isMobile ? 'column' : 'row', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                {TRUST_BADGES.map((badge, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: SC.success }}><IcoCheck size={16} /></span>
                    <span style={{ fontSize: 13, color: SC.ink, fontWeight: 500 }}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone cluster */}
            <div style={{ position: 'relative', height: isMobile ? 400 : 640, display: 'flex', justifyContent: 'center', marginTop: isMobile ? 40 : 0 }}>
              {/* Main phone */}
              <div style={{ position: 'absolute', left: isMobile ? '50%' : 110, top: isMobile ? 20 : 20, transform: isMobile ? 'translateX(-50%)' : 'none', zIndex: 3 }}>
                <PhoneMockup screen="dashboard" scale={isMobile ? 0.45 : 0.62} />
              </div>
              {/* Left phone - hide on mobile */}
              {!isMobile && (
                <div style={{ position: 'absolute', left: -10, top: 110, zIndex: 2 }}>
                  <PhoneMockup screen="chat" scale={0.5} tilt={-8} />
                </div>
              )}
              {/* Right phone - hide on mobile */}
              {!isMobile && (
                <div style={{ position: 'absolute', right: -20, top: 220, zIndex: 2 }}>
                  <PhoneMockup screen="wallet" scale={0.5} tilt={8} />
                </div>
              )}

              {/* Transfer callout - hide on mobile */}
              {!isMobile && (
                <div style={{ position: 'absolute', left: 20, top: 0, padding: '10px 14px', borderRadius: 14, background: '#fff', boxShadow: '0 12px 30px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', gap: 10, zIndex: 4 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(16,185,129,0.15)', color: SC.success, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>₦</div>
                  <div>
                    <div style={{ fontSize: 11, color: SC.muted }}>Sent in 2.4s</div>
                    <div style={{ fontSize: 13, fontWeight: 700 }}>₦25,000 → Tunde</div>
                  </div>
                </div>
              )}

              {/* AI callout - hide on mobile */}
              {!isMobile && (
                <div style={{ position: 'absolute', right: 30, top: 90, padding: '10px 14px', borderRadius: 14, background: SC.ink, color: '#fff', boxShadow: '0 12px 30px rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', gap: 10, zIndex: 4 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 10, background: SC.purpleGradDiag, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IcoBolt size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>SwiftBot</div>
                    <div style={{ fontSize: 13, fontWeight: 700 }}>&quot;Renew your eSIM?&quot;</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>

      <PressStrip />
      <StatsStrip items={[
        { value: '62,400+', label: 'On the waitlist' },
        { value: '₦4.2B', label: 'Processed in beta' },
        { value: '2.4s', label: 'Avg transfer time' },
        { value: '99.99%', label: 'Uptime, last 90 days' },
      ]} />

      {/* FEATURE GRID */}
      <div style={{ padding: isMobile ? '60px 0' : '100px 0', background: '#fff' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? 40 : 64 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2, marginBottom: 14 }}>WHY WIFTCO</div>
            <h2 style={{ margin: 0, fontSize: isMobile ? 32 : 52, fontWeight: 800, letterSpacing: isMobile ? -1 : -1.8, lineHeight: 1.05 }}>Four super-powers, one app.</h2>
            <p style={{ margin: '16px auto 0', fontSize: isMobile ? 15 : 17, color: SC.muted, maxWidth: isMobile ? '100%' : 580, lineHeight: 1.55 }}>
              Stop juggling four apps and a USSD code. Wiftco collapses chat, money, AI, and connectivity into a single thumb-friendly experience.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 20 }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{
                background: '#fff', border: `1px solid ${SC.hairline}`, borderRadius: 24,
                padding: isMobile ? 24 : 32, display: 'flex', flexDirection: 'column', minHeight: isMobile ? 280 : 340,
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ fontSize: 11.5, fontWeight: 700, color: f.tint, letterSpacing: 2 }}>{f.eyebrow}</div>
                <h3 style={{ margin: '12px 0 8px', fontSize: isMobile ? 22 : 28, fontWeight: 700, letterSpacing: -0.8, lineHeight: 1.15 }}>{f.title}</h3>
                <p style={{ margin: 0, fontSize: isMobile ? 13.5 : 14.5, color: SC.muted, lineHeight: 1.55, maxWidth: isMobile ? '100%' : 360 }}>{f.body}</p>

                <div style={{ marginTop: 24, paddingTop: 24, borderTop: `1px solid ${SC.hairline}`, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div>
                    <div style={{ fontSize: isMobile ? 28 : 36, fontWeight: 800, color: f.tint, letterSpacing: -1.2, lineHeight: 1 }}>{f.metric}</div>
                    <div style={{ fontSize: 12, color: SC.muted, marginTop: 4 }}>{f.metricLabel}</div>
                  </div>
                  <Link href="/features" style={{ fontSize: 13, color: f.tint, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 4, textDecoration: 'none' }}>Learn more →</Link>
                </div>

                <div style={{ position: 'absolute', bottom: -80, right: -20, opacity: 0.9, pointerEvents: 'none' }}>
                  <PhoneMockup screen={f.screen} scale={isMobile ? 0.3 : 0.38} />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* PULL QUOTE */}
      <div style={{ padding: isMobile ? '60px 0' : '100px 0', background: '#FAFAFB', borderTop: `1px solid ${SC.hairline}`, borderBottom: `1px solid ${SC.hairline}` }}>
        <Container w={isMobile ? undefined : 920}>
          <div style={{ fontSize: isMobile ? 40 : 60, color: SC.primary, lineHeight: 1, marginBottom: 16 }}>&quot;</div>
          <div style={{ fontSize: isMobile ? 22 : 32, fontWeight: 600, letterSpacing: -0.8, lineHeight: 1.3, color: SC.ink }}>
            I sent my landlord rent and the receipt arrived before her &quot;good evening.&quot; Wiftco is just… faster than the rest of Lagos.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 32, flexDirection: isMobile ? 'column' : 'row', textAlign: isMobile ? 'center' : 'left' }}>
            <Avatar name="Amaka Eze" size={isMobile ? 40 : 48} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Amaka Eze</div>
              <div style={{ fontSize: 13, color: SC.muted }}>Product designer, Lagos · beta user since March</div>
            </div>
          </div>
        </Container>
      </div>

      {/* MERCHANT CTA */}
      <div style={{ padding: isMobile ? '60px 0' : '88px 0', background: '#fff' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 40 : 60, alignItems: isMobile ? 'center' : 'center' }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2, marginBottom: 14, textAlign: isMobile ? 'center' : 'left' }}>FOR BUSINESSES</div>
              <h2 style={{ margin: 0, fontSize: isMobile ? 32 : 44, fontWeight: 800, letterSpacing: isMobile ? -1 : -1.4, lineHeight: 1.05, textAlign: isMobile ? 'center' : 'left' }}>
                Accept ₦ where your customers already chat.
              </h2>
              <p style={{ marginTop: 16, fontSize: isMobile ? 15 : 16, color: SC.muted, lineHeight: 1.6, maxWidth: isMobile ? '100%' : 520, textAlign: isMobile ? 'center' : 'left' }}>
                Merchant accounts, SwiftIDs, in-chat checkout, and APIs that play nice with Paystack, Flutterwave and your existing stack.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 28, flexDirection: isMobile ? 'column' : 'row', width: isMobile ? '100%' : 'auto' }}>
                <Link href="/business" style={{ padding: '12px 22px', background: SC.ink, color: '#fff', borderRadius: 12, fontSize: 14, fontWeight: 600, textDecoration: 'none', boxShadow: '0 10px 24px rgba(26,26,46,0.25)', width: isMobile ? '100%' : 'auto', textAlign: 'center', display: 'block' }}>
                  Open a merchant account
                </Link>
                <Link href="/business" style={{ padding: '12px 22px', background: 'transparent', color: SC.ink, borderRadius: 12, fontSize: 14, fontWeight: 600, textDecoration: 'none', width: isMobile ? '100%' : 'auto', textAlign: 'center', display: 'block' }}>
                  Browse API docs →
                </Link>
              </div>
            </div>

            {/* Code panel */}
            <div style={{
              background: SC.ink, color: '#fff', borderRadius: 20, padding: isMobile ? 20 : 28,
              fontFamily: 'ui-monospace, "SF Mono", monospace', fontSize: isMobile ? 11 : 13, lineHeight: 1.6,
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16 }}>
                {['#FF5F56','#FFBD2E','#27C93F'].map((c, i) => (
                  <div key={i} style={{ width: 12, height: 12, borderRadius: 6, background: c }} />
                ))}
                <span style={{ marginLeft: 12, fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>POST /v1/transfers</span>
              </div>
              <div><span style={{ color: '#C792EA' }}>const</span> <span style={{ color: '#82AAFF' }}>txn</span> = <span style={{ color: '#C792EA' }}>await</span> <span style={{ color: '#82AAFF' }}>swift</span>.transfers.<span style={{ color: '#F78C6C' }}>create</span>{'({'}</div>
              <div style={{ paddingLeft: 16 }}>amount: <span style={{ color: '#C3E88D' }}>250000</span>,</div>
              <div style={{ paddingLeft: 16 }}>currency: <span style={{ color: '#C3E88D' }}>&apos;NGN&apos;</span>,</div>
              <div style={{ paddingLeft: 16 }}>to: <span style={{ color: '#C3E88D' }}>&apos;@chidi.ok&apos;</span>,</div>
              <div style={{ paddingLeft: 16 }}>memo: <span style={{ color: '#C3E88D' }}>&apos;Invoice #4821&apos;</span>,</div>
              <div>{'}'});</div>
              <div style={{ marginTop: 12, color: '#10B981' }}>{'// → succeeded in 2.41s'}</div>
              <div style={{ position: 'absolute', top: 18, right: 18, padding: '4px 10px', borderRadius: 999, background: 'rgba(16,185,129,0.15)', color: SC.success, fontSize: 11, fontWeight: 600 }}>● live</div>
            </div>
          </div>
        </Container>
      </div>

      <CTABand />
      <Footer />
    </div>
  );
}
