'use client';
import React, { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import WBtn from '@/components/WBtn';
import { SC } from '@/lib/tokens';
import { IcoSearch, IcoWallet, IcoChat, IcoSim, IcoShield, IcoAirtime, IcoBot, IcoChevR } from '@/components/icons';
import { useResponsive } from '@/lib/useResponsive';

const CATEGORIES = [
  { ico: IcoWallet, title: 'Wallet & transfers', count: 24, color: SC.primary },
  { ico: IcoChat, title: 'Chat & calls', count: 18, color: '#0EA5E9' },
  { ico: IcoSim, title: 'eSIM', count: 16, color: SC.warning },
  { ico: IcoShield, title: 'Security & KYC', count: 22, color: SC.success },
  { ico: IcoAirtime, title: 'Bill payments', count: 14, color: '#EC4899' },
  { ico: IcoBot, title: 'SwiftBot AI', count: 11, color: SC.primary },
];

const POPULAR = [
  'How do I send money to a bank account?',
  'My transfer is pending — what now?',
  'How do I find my NIN?',
  'Why was my account flagged?',
  'How do I activate my eSIM?',
  'What happens if I lose my phone?',
  'Can I get a refund on a bill payment?',
  'How do I change my SwiftID?',
];

export default function HelpPage() {
  const [query, setQuery] = useState('');
  const { isMobile } = useResponsive();

  return (
    <div style={{ fontFamily: SC.font, color: SC.ink }}>
      <Nav />

      {/* Hero with search */}
      <div style={{ padding: isMobile ? '56px 0 40px' : '80px 0 60px', background: 'linear-gradient(180deg, #FAFAFB 0%, #F3EEFE 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <Container>
          <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2 }}>HELP CENTER</div>
          <h1 style={{ margin: '14px 0 14px', fontSize: isMobile ? 36 : 56, fontWeight: 800, letterSpacing: isMobile ? -1.2 : -2 }}>How can we help?</h1>
          <p style={{ fontSize: 17, color: SC.muted, marginBottom: 32, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
            Search 400+ articles, or chat with SwiftBot — it answers most questions in under 5 seconds.
          </p>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            {isMobile ? (
              // Stacked input + button on mobile
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', padding: 8, background: '#fff', border: `1px solid ${SC.hairline}`, borderRadius: 16, boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
                  <div style={{ padding: '10px 14px', color: SC.faint }}>
                    <IcoSearch size={20} />
                  </div>
                  <input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search articles..."
                    style={{ flex: 1, fontSize: 15.5, color: SC.ink, border: 'none', outline: 'none', background: 'transparent', fontFamily: SC.font }}
                  />
                </div>
                <WBtn variant="primary" size="md" style={{ width: '100%' }}>Ask SwiftBot ⚡</WBtn>
              </div>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', padding: 8, background: '#fff', border: `1px solid ${SC.hairline}`, borderRadius: 16, boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
                <div style={{ padding: '10px 14px', color: SC.faint }}>
                  <IcoSearch size={20} />
                </div>
                <input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Try &quot;how to send money&quot; or &quot;my eSIM isn't activating&quot;"
                  style={{ flex: 1, fontSize: 15.5, color: SC.ink, border: 'none', outline: 'none', background: 'transparent', fontFamily: SC.font }}
                />
                <WBtn variant="primary" size="md">Ask SwiftBot ⚡</WBtn>
              </div>
            )}
            <div style={{ fontSize: 12.5, color: SC.muted, marginTop: 12 }}>
              Common:{' '}
              {['send money', 'NIN verification', 'refund', 'eSIM'].map((t, i) => (
                <span key={i}>
                  <span style={{ color: SC.primary, fontWeight: 600, cursor: 'pointer' }}>{t}</span>
                  {i < 3 ? ' · ' : ''}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Categories */}
      <div style={{ padding: '60px 0', background: '#fff' }}>
        <Container>
          <h2 style={{ margin: '0 0 24px', fontSize: 24, fontWeight: 800, letterSpacing: -0.6 }}>Browse by topic</h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: 16 }}>
            {CATEGORIES.map((c, i) => (
              <div key={i} style={{ padding: isMobile ? 16 : 24, background: '#FAFAFB', borderRadius: 16, border: `1px solid ${SC.hairline}`, display: 'flex', gap: 16, alignItems: 'center', cursor: 'pointer' }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `${c.color}1A`, color: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <c.ico size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: isMobile ? 14 : 16, fontWeight: 700 }}>{c.title}</div>
                  <div style={{ fontSize: 12.5, color: SC.muted, marginTop: 2 }}>{c.count} articles</div>
                </div>
                {!isMobile && <div style={{ color: SC.faint }}><IcoChevR size={18} /></div>}
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Popular + Contact */}
      <div style={{ padding: '40px 0 80px', background: '#fff' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.4fr 1fr', gap: isMobile ? 32 : 40 }}>
            {/* Popular */}
            <div>
              <h2 style={{ margin: '0 0 16px', fontSize: 24, fontWeight: 800, letterSpacing: -0.6 }}>Popular questions</h2>
              <div style={{ background: '#FAFAFB', borderRadius: 14, border: `1px solid ${SC.hairline}`, overflow: 'hidden' }}>
                {POPULAR.map((q, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 20px', borderTop: i ? `1px solid ${SC.hairline}` : 'none', cursor: 'pointer' }}>
                    <div style={{ width: 28, height: 28, borderRadius: 14, background: 'rgba(94,23,235,0.10)', color: SC.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 14, fontWeight: 700 }}>?</div>
                    <div style={{ flex: 1, fontSize: 14, fontWeight: 500 }}>{q}</div>
                    <div style={{ color: SC.faint }}><IcoChevR size={16} /></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact card */}
            <div style={{ background: SC.purpleGradDiag, color: '#fff', borderRadius: 18, padding: 28, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -10, right: -10, opacity: 0.10 }}>
                <svg width="160" height="160" viewBox="0 0 24 24"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z" fill="#fff" /></svg>
              </div>
              <div style={{ position: 'relative' }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <IcoBot size={24} />
                </div>
                <h3 style={{ margin: 0, fontSize: 22, fontWeight: 800, letterSpacing: -0.5 }}>Still stuck?</h3>
                <p style={{ marginTop: 8, fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.55 }}>
                  SwiftBot answers most questions instantly. Human agents are 24/7 in English &amp; Pidgin.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 20 }}>
                  <WBtn variant="light" size="md" style={{ width: '100%' }}>Chat with SwiftBot</WBtn>
                  <button style={{ width: '100%', padding: '12px 22px', background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.25)', borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
                    Talk to a human →
                  </button>
                </div>
                <div style={{ marginTop: 18, fontSize: 12, color: 'rgba(255,255,255,0.65)' }}>
                  Avg response · <b style={{ color: '#fff' }}>32 seconds</b> · 24/7
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
