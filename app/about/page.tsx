import React from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import CTABand from '@/components/CTABand';
import PageHeader from '@/components/PageHeader';
import StatsStrip from '@/components/StatsStrip';
import Avatar from '@/components/Avatar';
import { SC, WEB } from '@/lib/tokens';

const TEAM = [
  { name: 'Chinedu Okwu', role: 'CEO · ex-Paystack' },
  { name: 'Sade Bakare', role: 'CTO · ex-Flutterwave' },
  { name: 'Tunde Adeleke', role: 'Head of Eng · ex-Andela' },
  { name: 'Amaka Eze', role: 'Head of Design · ex-Cowrywise' },
  { name: 'Ibrahim Musa', role: 'Head of Ops · ex-Kuda' },
  { name: 'Funmi Olanrewaju', role: 'Head of Risk · ex-CBN' },
];

const TIMELINE = [
  { date: 'Mar 2024', event: 'Founded', desc: 'Three co-founders meet at a Yaba co-working space.' },
  { date: 'Sep 2024', event: 'Pre-seed', desc: '₦1.2B from Future Africa, Y Combinator, and angels.' },
  { date: 'Feb 2025', event: 'CBN PSP license', desc: 'Cleared the regulatory bar.' },
  { date: 'Aug 2025', event: 'Beta launch', desc: '8,000 waitlisted users get access.' },
  { date: 'Mar 2026', event: '₦4.2B moved', desc: 'In the first 6 beta months.' },
  { date: 'Q3 2026', event: 'Public launch', desc: 'Coming soon to an App Store near you.', upcoming: true },
];

const INVESTORS = ['Future Africa', 'Y Combinator', 'Ventures Platform', 'LoftyInc', 'Tekedia', 'Angels'];

export default function AboutPage() {
  return (
    <div style={{ fontFamily: SC.font, color: SC.ink }}>
      <Nav />
      <PageHeader
        eyebrow="ABOUT"
        title="We're building the operating system for Nigerian life."
        subtitle="A team of 38, based in Lagos and Abuja. Backed by Future Africa, Y Combinator, and the people who built the apps you already use."
      />

      {/* Story */}
      <div style={{ padding: '80px 0', background: '#fff' }}>
        <Container w={920}>
          <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2, marginBottom: 16 }}>OUR STORY</div>
          <p style={{ fontSize: 22, lineHeight: 1.55, color: SC.ink, fontWeight: 500 }}>
            In 2024 our CEO needed to send rent, top up his sister&apos;s airtime, pay DStv, and renew a SIM —
            all between two meetings. He used <em>five apps</em>, a USSD code, and lost ₦650 in transfer fees.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: SC.muted, marginTop: 24 }}>
            SwiftCom is what comes out of refusing to accept that as normal. We believe Nigerians deserve a single app
            that handles communication and money with the same speed and grace — built by people who actually live here.
            Not a wallet bolted onto a messenger. Not a chat plug-in on a banking app. One product. One vision. ₦ first.
          </p>
        </Container>
      </div>

      <StatsStrip items={[
        { value: '38', label: 'People on the team' },
        { value: '2', label: 'Offices · Lagos & Abuja' },
        { value: '₦1.2B', label: 'Pre-seed raised' },
        { value: '6', label: 'Investors backing us' },
      ]} />

      {/* Team */}
      <div style={{ padding: '88px 0', background: '#fff' }}>
        <Container>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2, marginBottom: 14 }}>LEADERSHIP</div>
            <h2 style={{ margin: 0, fontSize: 44, fontWeight: 800, letterSpacing: -1.4 }}>The team behind the bolt.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {TEAM.map((p, i) => (
              <div key={i} style={{ background: '#FAFAFB', borderRadius: 18, padding: 24, border: `1px solid ${SC.hairline}`, textAlign: 'center' }}>
                <Avatar name={p.name} size={88} style={{ margin: '0 auto 16px' }} />
                <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: -0.3 }}>{p.name}</div>
                <div style={{ fontSize: 13, color: SC.muted, marginTop: 4 }}>{p.role}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Timeline */}
      <div style={{ padding: '88px 0', background: '#FAFAFB', borderTop: `1px solid ${SC.hairline}` }}>
        <Container>
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2, marginBottom: 14 }}>TIMELINE</div>
            <h2 style={{ margin: 0, fontSize: 40, fontWeight: 800, letterSpacing: -1.2 }}>How we got here.</h2>
          </div>
          <div style={{ position: 'relative', paddingLeft: 32 }}>
            <div style={{ position: 'absolute', left: 10, top: 8, bottom: 8, width: 2, background: SC.hairline }} />
            {TIMELINE.map((t, i) => (
              <div key={i} style={{ position: 'relative', display: 'grid', gridTemplateColumns: '140px 1fr', gap: 36, padding: '16px 0', alignItems: 'baseline' }}>
                <div style={{
                  position: 'absolute', left: -32 + 4, top: 18,
                  width: 14, height: 14, borderRadius: 7,
                  background: t.upcoming ? '#fff' : SC.primary,
                  border: t.upcoming ? `2px solid ${SC.primary}` : 'none',
                  zIndex: 2,
                }} />
                <div style={{ fontSize: 13, fontWeight: 700, color: SC.primary, letterSpacing: 0.5 }}>{t.date}</div>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 700 }}>{t.event}</div>
                  <div style={{ fontSize: 14, color: SC.muted, marginTop: 4 }}>{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Investors */}
      <div style={{ padding: '60px 0', background: '#fff' }}>
        <Container>
          <div style={{ textAlign: 'center', fontSize: 11.5, fontWeight: 700, color: SC.muted, letterSpacing: 2, marginBottom: 22 }}>BACKED BY</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 24, alignItems: 'center' }}>
            {INVESTORS.map((b, i) => (
              <div key={i} style={{ textAlign: 'center', fontSize: 18, fontWeight: 700, color: SC.faint, letterSpacing: -0.3, fontFamily: i % 2 ? 'Georgia, serif' : WEB.font }}>{b}</div>
            ))}
          </div>
        </Container>
      </div>

      <CTABand />
      <Footer />
    </div>
  );
}
