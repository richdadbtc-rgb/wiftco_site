import React from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import WBtn from '@/components/WBtn';
import { SC, WEB } from '@/lib/tokens';

const ARTICLES = [
  { src: 'TechCabal', date: '22 May 2026', title: 'SwiftCom: the Lagos team trying to collapse five apps into one' },
  { src: 'TechCrunch', date: '08 May 2026', title: 'African super-apps are heating up, and SwiftCom is the latest contender' },
  { src: 'Rest of World', date: '14 Apr 2026', title: 'Inside the bet that Nigerians will trade three apps for one super-app' },
  { src: 'Stears', date: '02 Apr 2026', title: 'How SwiftCom is rethinking ₦ in chats' },
  { src: 'BusinessDay', date: '18 Mar 2026', title: 'SwiftCom completes CBN licensing, eyes public launch in Q3' },
  { src: 'Sifted', date: '04 Feb 2026', title: "The African super-app race: SwiftCom's case for collapsing categories" },
];

const FILTERS = ['All', 'Funding', 'Product', 'Regulation'];

export default function PressPage() {
  return (
    <div style={{ fontFamily: SC.font, color: SC.ink }}>
      <Nav />
      <PageHeader
        eyebrow="PRESS"
        title="What people are saying."
        subtitle="Coverage, press kits, and a place to find us. Media inquiries: press@swiftcom.ng"
      />

      {/* Featured quote */}
      <div style={{ padding: '60px 0', background: '#fff' }}>
        <Container>
          <div style={{ background: SC.purpleGradDiag, color: '#fff', borderRadius: 24, padding: '48px 56px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -20, right: 20, opacity: 0.10 }}>
              <svg width="200" height="200" viewBox="0 0 24 24"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z" fill="#fff" /></svg>
            </div>
            <div style={{ position: 'relative', maxWidth: 820 }}>
              <div style={{ fontSize: 60, lineHeight: 1, marginBottom: 16, opacity: 0.5 }}>&quot;</div>
              <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: -0.6, lineHeight: 1.3 }}>
                The most ambitious consumer fintech bet in West Africa since OPay&apos;s launch — and arguably the most thoughtfully designed.
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
              {FILTERS.map((c, i) => (
                <span key={i} style={{
                  padding: '6px 12px', borderRadius: 999, cursor: 'pointer',
                  background: i === 0 ? SC.primary : '#FAFAFB',
                  color: i === 0 ? '#fff' : SC.muted,
                  fontSize: 12, fontWeight: 600,
                  border: i === 0 ? 'none' : `1px solid ${SC.hairline}`,
                }}>{c}</span>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {ARTICLES.map((it, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '160px 110px 1fr auto', gap: 24,
                padding: '20px 24px', background: '#FAFAFB',
                borderRadius: 14, border: `1px solid ${SC.hairline}`, alignItems: 'center',
              }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: SC.ink, letterSpacing: -0.3, fontStyle: i % 2 ? 'italic' : 'normal', fontFamily: i % 2 ? 'Georgia, serif' : WEB.font }}>{it.src}</div>
                <div style={{ fontSize: 12.5, color: SC.muted }}>{it.date}</div>
                <div style={{ fontSize: 15.5, fontWeight: 600, color: SC.ink }}>{it.title}</div>
                <div style={{ color: SC.primary, fontSize: 13, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>Read →</div>
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
              <div style={{ marginTop: 20 }}>
                <WBtn variant="primary" size="md">Download press kit ↓</WBtn>
              </div>
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

      <Footer />
    </div>
  );
}
