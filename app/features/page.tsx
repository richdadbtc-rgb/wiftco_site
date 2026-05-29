'use client';
import React from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import CTABand from '@/components/CTABand';
import PageHeader from '@/components/PageHeader';
import PhoneMockup from '@/components/PhoneMockup';
import { SC } from '@/lib/tokens';
import { IcoChat, IcoPhone, IcoMic, IcoShield, IcoSend, IcoAirtime, IcoElectric, IcoTv, IcoSim, IcoGlobe, IcoBell, IcoBolt, IcoBot, IcoHistory, IcoLock } from '@/components/icons';
import { useResponsive } from '@/lib/useResponsive';

const FEATURE_SECTIONS = [
  {
    n: '01', eyebrow: 'CHAT & CALLS', screen: 'chat' as const,
    title: 'A messaging app that respects your data plan.',
    body: 'Built ground-up for Nigerian network conditions. Voice notes resume mid-elevator. Calls survive the BRT tunnel. Group chats handle the family WhatsApp — 247 unreads and all.',
    kpis: [{ v: '2.4s', l: 'P50 message delivery' }, { v: '0.8MB', l: 'Hour of voice call' }, { v: 'E2EE', l: 'Default encryption' }],
    features: [
      { ico: IcoChat, t: 'Threads, replies, reactions', s: 'The WhatsApp habits you know.' },
      { ico: IcoPhone, t: 'HD voice + video calls', s: 'Resilient to packet loss.' },
      { ico: IcoMic, t: 'Voice notes that resume', s: 'Cellular drops? No drama.' },
      { ico: IcoShield, t: 'E2EE by default', s: "Even we can't read them." },
    ],
    bg: '#fff',
  },
  {
    n: '02', eyebrow: 'WALLET', screen: 'wallet' as const,
    title: '₦ moves at the speed of a thought.',
    body: 'Send to any SwiftID, phone number, or Nigerian bank in under 3 seconds. ₦0 wallet-to-wallet fees. Receipts arrive as chat bubbles, not PDFs.',
    kpis: [{ v: '₦0', l: 'Wallet → wallet fees' }, { v: '<3s', l: 'Bank transfer time' }, { v: 'CBN', l: 'Licensed · NDIC insured' }],
    features: [
      { ico: IcoSend, t: 'Send to SwiftID or bank', s: 'One field. Smart routing.' },
      { ico: IcoAirtime, t: 'Airtime + data', s: 'All networks, instant.' },
      { ico: IcoElectric, t: 'Electricity tokens', s: 'Auto-deliver to your meter.' },
      { ico: IcoTv, t: 'TV, water, school fees', s: '70+ Nigerian billers.' },
    ],
    bg: '#FAFAFB',
  },
  {
    n: '03', eyebrow: 'ESIM', screen: 'esim' as const,
    title: 'Plans on tap. Skip the kiosk.',
    body: 'Activation in 8 seconds — no physical SIM, no IMEI ritual. Buy data, switch networks, or grab a roaming plan for that trip to Dubai, all from your home screen.',
    kpis: [{ v: '8s', l: 'Activation time' }, { v: '4', l: 'Networks supported' }, { v: '80+', l: 'Roaming countries' }],
    features: [
      { ico: IcoSim, t: 'Multi-network in one tap', s: 'MTN, Glo, 9mobile, Airtel.' },
      { ico: IcoGlobe, t: 'Roaming for 80+ countries', s: 'Pay in ₦ wherever you go.' },
      { ico: IcoBell, t: 'Low-data alerts', s: 'Auto-renew if you let it.' },
      { ico: IcoBolt, t: 'Plans from ₦1,500', s: 'Up to 50GB · 30 days.' },
    ],
    bg: '#fff',
  },
  {
    n: '04', eyebrow: 'SWIFTBOT AI', screen: 'aibot' as const,
    title: 'An assistant that actually does things.',
    body: 'Ask in English or Pidgin. SwiftBot moves money, renews plans, finds receipts, and explains your spending — without you ever opening a menu.',
    kpis: [{ v: '40+', l: 'Account actions' }, { v: '2', l: 'Languages (EN + Pidgin)' }, { v: '100%', l: 'On-device for private actions' }],
    features: [
      { ico: IcoBot, t: 'Conversational money', s: '"Send ₦5k to Tunde now."' },
      { ico: IcoHistory, t: 'Receipt forensics', s: '"What did I spend on Uber last month?"' },
      { ico: IcoSim, t: 'Auto eSIM renewal', s: '"Don\'t let me run out again."' },
      { ico: IcoLock, t: 'Private by design', s: 'Confirms before it moves ₦.' },
    ],
    bg: '#FAFAFB',
  },
];

function DividerBolt() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 5, height: 0 }}>
      <div style={{
        width: 48, height: 48, borderRadius: 14,
        background: '#fff', border: `1px solid ${SC.hairline}`,
        marginTop: -24,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: SC.primary,
      }}>
        <IcoBolt size={22} />
      </div>
    </div>
  );
}

export default function FeaturesPage() {
  const { isMobile } = useResponsive();

  return (
    <div style={{ fontFamily: SC.font, color: SC.ink }}>
      <Nav />
      <PageHeader
        eyebrow="FEATURES"
        title="Everything Nigerian life runs on. In one tap."
        subtitle="A guided tour through the four pillars of Wiftco. Each is a complete product on its own — together they collapse half your home screen."
      />

      {/* Anchor nav — hidden on mobile */}
      {!isMobile && (
        <div style={{ position: 'sticky', top: 0, background: '#fff', borderBottom: `1px solid ${SC.hairline}`, padding: '14px 0', zIndex: 10 }}>
          <Container>
            <div style={{ display: 'flex', gap: 32, fontSize: 14, fontWeight: 500, color: SC.muted }}>
              <span style={{ color: SC.primary, fontWeight: 700, position: 'relative' }}>Chat &amp; Calls
                <span style={{ position: 'absolute', bottom: -16, left: 0, right: 0, height: 2, background: SC.primary, display: 'block' }} />
              </span>
              <span>Wallet</span>
              <span>eSIM</span>
              <span>SwiftBot AI</span>
              <span style={{ marginLeft: 'auto', color: SC.faint }}>↓ Scroll to explore</span>
            </div>
          </Container>
        </div>
      )}

      {FEATURE_SECTIONS.map((sec, idx) => (
        <div key={sec.n}>
          <div style={{ padding: isMobile ? '56px 0' : '88px 0', background: sec.bg }}>
            <Container>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.1fr 1fr', gap: isMobile ? 40 : 64, alignItems: 'center' }}>
                {/* On mobile: phone goes above the copy */}
                {isMobile && (
                  <div style={{ position: 'relative', height: 340, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ position: 'absolute', inset: '10% 10%', background: 'radial-gradient(circle, rgba(94,23,235,0.18) 0%, transparent 60%)' }} />
                    <div style={{ position: 'relative', zIndex: 2 }}>
                      <PhoneMockup screen={sec.screen} scale={0.5} />
                    </div>
                  </div>
                )}

                {/* Copy */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 16 }}>
                    <span style={{ fontSize: 64, fontWeight: 800, color: SC.primary, lineHeight: 1, letterSpacing: -2, opacity: 0.18 }}>{sec.n}</span>
                    <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2 }}>{sec.eyebrow}</div>
                  </div>
                  <h2 style={{ margin: 0, fontSize: isMobile ? 32 : 52, fontWeight: 800, letterSpacing: -1.8, lineHeight: 1.05 }}>{sec.title}</h2>
                  <p style={{ marginTop: 20, fontSize: 17, color: SC.muted, lineHeight: 1.6, maxWidth: 520 }}>{sec.body}</p>

                  {/* KPIs */}
                  <div style={{ display: 'flex', gap: isMobile ? 20 : 36, margin: '32px 0' }}>
                    {sec.kpis.map((k, i) => (
                      <div key={i}>
                        <div style={{ fontSize: isMobile ? 24 : 32, fontWeight: 800, color: SC.ink, letterSpacing: -0.8 }}>{k.v}</div>
                        <div style={{ fontSize: 12, color: SC.muted, marginTop: 2 }}>{k.l}</div>
                      </div>
                    ))}
                  </div>

                  {/* Feature mini-cards */}
                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 14 }}>
                    {sec.features.map((f, i) => (
                      <div key={i} style={{
                        display: 'flex', gap: 12, padding: 14,
                        background: sec.bg === '#fff' ? '#FAFAFB' : '#fff',
                        borderRadius: 12, border: `1px solid ${SC.hairline}`,
                      }}>
                        <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(94,23,235,0.10)', color: SC.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <f.ico size={18} />
                        </div>
                        <div>
                          <div style={{ fontSize: 13.5, fontWeight: 700, color: SC.ink }}>{f.t}</div>
                          <div style={{ fontSize: 12, color: SC.muted, marginTop: 2 }}>{f.s}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phone — desktop only */}
                {!isMobile && (
                  <div style={{ position: 'relative', height: 580, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ position: 'absolute', inset: '10% 10%', background: 'radial-gradient(circle, rgba(94,23,235,0.18) 0%, transparent 60%)' }} />
                    <div style={{ position: 'relative', zIndex: 2 }}>
                      <PhoneMockup screen={sec.screen} scale={0.66} />
                    </div>
                  </div>
                )}
              </div>
            </Container>
          </div>
          {idx < FEATURE_SECTIONS.length - 1 && <DividerBolt />}
        </div>
      ))}

      <CTABand />
      <Footer />
    </div>
  );
}
