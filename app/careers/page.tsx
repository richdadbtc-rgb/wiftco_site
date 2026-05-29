import React from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import CTABand from '@/components/CTABand';
import { SC } from '@/lib/tokens';
import Link from 'next/link';

const ROLES = [
  { team: 'Engineering', title: 'Senior iOS Engineer', loc: 'Lagos · Hybrid', tags: ['Swift', 'SwiftUI', '5+ yrs'] },
  { team: 'Engineering', title: 'Backend Engineer · Payments', loc: 'Remote · NG', tags: ['Go', 'Kafka', 'Postgres'] },
  { team: 'Engineering', title: 'Mobile Engineer · Android', loc: 'Lagos · Hybrid', tags: ['Kotlin', 'Compose', '3+ yrs'] },
  { team: 'Design', title: 'Senior Product Designer', loc: 'Lagos · On-site', tags: ['Mobile', 'Fintech', 'Figma'] },
  { team: 'Design', title: 'Brand Designer', loc: 'Lagos · Hybrid', tags: ['Motion', 'Type', 'Web'] },
  { team: 'Operations', title: 'Compliance Analyst', loc: 'Abuja · On-site', tags: ['CBN', 'AML', '3+ yrs'] },
  { team: 'Operations', title: 'Customer Success Lead', loc: 'Lagos · On-site', tags: ['Fintech', 'Team mgmt'] },
  { team: 'Growth', title: 'Growth Marketer', loc: 'Remote · NG', tags: ['Performance', 'Lagos'] },
];

const VALUES = [
  { emoji: '📍', title: 'Lagos-first', desc: 'We hire globally — but build for Nigerians, with Nigerians.' },
  { emoji: '💸', title: 'Top-of-market', desc: 'Salaries benchmarked to SF mid-level + meaningful equity.' },
  { emoji: '🚀', title: 'Ship fast', desc: 'Two-week cycles, no meeting marathons, real ownership.' },
  { emoji: '🏥', title: 'Premium HMO', desc: 'For you, your partner, and up to 4 dependants.' },
];

const FILTERS = ['All', 'Engineering', 'Design', 'Operations', 'Growth'];

export default function CareersPage() {
  return (
    <div style={{ fontFamily: SC.font, color: SC.ink }}>
      <Nav />

      {/* Hero */}
      <div style={{ background: 'linear-gradient(180deg, #FAFAFB 0%, #F3EEFE 100%)', padding: '88px 0 72px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(94,23,235,0.10), transparent 70%)' }} />
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 60, alignItems: 'center', position: 'relative' }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2 }}>CAREERS</div>
              <h1 style={{ margin: '14px 0 18px', fontSize: 72, fontWeight: 800, letterSpacing: -2.6, lineHeight: 1.02 }}>
                Build the tools{' '}
                <em style={{ fontStyle: 'italic', color: SC.primary, fontFamily: 'Georgia, serif', fontWeight: 500 }}>40 million Nigerians</em>{' '}
                will use every day.
              </h1>
              <p style={{ fontSize: 17, color: SC.muted, lineHeight: 1.55, maxWidth: 540 }}>
                We&apos;re hiring across Lagos, Abuja, and remote-NG. Pay top of market. Equity for everyone. Real autonomy. Real shipping.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
                <a href="#roles" style={{ padding: '16px 30px', background: SC.primary, color: '#fff', borderRadius: 14, fontSize: 15.5, fontWeight: 600, textDecoration: 'none', boxShadow: '0 10px 24px rgba(94,23,235,0.30)' }}>
                  See open roles ↓
                </a>
                <button style={{ padding: '16px 30px', background: 'transparent', color: SC.ink, border: `1.5px solid ${SC.hairline}`, borderRadius: 14, fontSize: 15.5, fontWeight: 600, cursor: 'pointer' }}>
                  Life at Wiftco
                </button>
              </div>
            </div>

            {/* Values */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {VALUES.map((v, i) => (
                <div key={i} style={{ padding: 18, background: '#fff', borderRadius: 14, border: `1px solid ${SC.hairline}`, boxShadow: SC.shadowSoft }}>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>{v.emoji} {v.title}</div>
                  <div style={{ fontSize: 12.5, color: SC.muted, marginTop: 4 }}>{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Roles */}
      <div id="roles" style={{ padding: '72px 0', background: '#fff' }}>
        <Container>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 28 }}>
            <h2 style={{ margin: 0, fontSize: 36, fontWeight: 800, letterSpacing: -1 }}>
              Open roles <span style={{ color: SC.muted, fontWeight: 500 }}>· {ROLES.length}</span>
            </h2>
            <div style={{ display: 'flex', gap: 8 }}>
              {FILTERS.map((t, i) => (
                <span key={i} style={{
                  padding: '6px 12px', borderRadius: 999, cursor: 'pointer',
                  background: i === 0 ? SC.primary : '#FAFAFB',
                  color: i === 0 ? '#fff' : SC.muted,
                  fontSize: 12, fontWeight: 600,
                  border: i === 0 ? 'none' : `1px solid ${SC.hairline}`,
                }}>{t}</span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {ROLES.map((r, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '110px 1fr 1fr auto auto',
                gap: 24, padding: '20px 24px', background: '#FAFAFB',
                borderRadius: 14, border: `1px solid ${SC.hairline}`,
                alignItems: 'center',
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: SC.primary, letterSpacing: 1 }}>{r.team.toUpperCase()}</div>
                <div style={{ fontSize: 15, fontWeight: 700 }}>{r.title}</div>
                <div style={{ fontSize: 13, color: SC.muted }}>{r.loc}</div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {r.tags.map(t => (
                    <span key={t} style={{ padding: '4px 10px', borderRadius: 999, background: '#fff', border: `1px solid ${SC.hairline}`, fontSize: 11, fontWeight: 600, color: SC.muted }}>{t}</span>
                  ))}
                </div>
                <div style={{ color: SC.primary, fontSize: 13, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>Apply →</div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <CTABand title="Don't see your role?" sub="Send us what you'd build. We hire for slope, not specifics." />
      <Footer />
    </div>
  );
}
