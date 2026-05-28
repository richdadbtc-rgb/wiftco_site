import React from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import Avatar from '@/components/Avatar';
import WBtn from '@/components/WBtn';
import PhoneMockup from '@/components/PhoneMockup';
import { SC } from '@/lib/tokens';

const FEATURED = {
  cat: 'PRODUCT',
  title: 'Why we built SwiftBot — and why an AI should never move your money without asking.',
  excerpt: "The internal arguments that shaped our assistant's first principle: confirm before commit. A look at how we made an AI feel safe with ₦.",
  author: 'Amaka Eze', role: 'Head of Design', date: '24 May 2026', read: '8 min read',
};

const POSTS = [
  { cat: 'ENGINEERING', title: 'How we keep transfers under 3 seconds on 3G', author: 'Tunde Adeleke', date: '22 May 2026', read: '12 min', bg: 'linear-gradient(135deg, #F3EEFE, #C7B9F3)' },
  { cat: 'DESIGN', title: 'Designing for thumbs, in a country that prefers thumbs', author: 'Amaka Eze', date: '18 May 2026', read: '6 min', bg: 'linear-gradient(135deg, #E6F7EF, #C7EEDC)' },
  { cat: 'COMPANY', title: "Closing our pre-seed: ₦1.2B and what we're doing with it", author: 'Chinedu Okwu', date: '12 May 2026', read: '5 min', bg: 'linear-gradient(135deg, #FEF4D9, #FCE3A9)' },
  { cat: 'REGULATION', title: 'What our CBN license means for our users', author: 'Funmi Olanrewaju', date: '03 May 2026', read: '4 min', bg: 'linear-gradient(135deg, #DBEAFE, #BFDBFE)' },
  { cat: 'PRODUCT', title: 'The case against custom keypads in fintech', author: 'Amaka Eze', date: '28 Apr 2026', read: '7 min', bg: 'linear-gradient(135deg, #FCE7F3, #FBCFE8)' },
  { cat: 'ENGINEERING', title: 'Postgres + Kafka: the boring stack behind SwiftCom payments', author: 'Sade Bakare', date: '20 Apr 2026', read: '14 min', bg: 'linear-gradient(135deg, #F3F4F6, #E5E7EB)' },
];

const FILTERS = ['All', 'Engineering', 'Product', 'Design', 'Company', 'Regulation'];

export default function BlogPage() {
  return (
    <div style={{ fontFamily: SC.font, color: SC.ink }}>
      <Nav />
      <PageHeader
        eyebrow="BLOG"
        title="Notes from the engineering room."
        subtitle="What we're building, what we learned, and why we made the calls we made."
      />

      {/* Featured */}
      <div style={{ padding: '60px 0 32px', background: '#fff' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40, background: SC.purpleGradDiag, color: '#fff', borderRadius: 24, padding: 40, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', bottom: -40, right: -40, opacity: 0.10 }}>
              <svg width="320" height="320" viewBox="0 0 24 24"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z" fill="#fff" /></svg>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'inline-block', padding: '4px 10px', background: 'rgba(255,255,255,0.18)', borderRadius: 999, fontSize: 10.5, fontWeight: 700, letterSpacing: 1.2, marginBottom: 18 }}>
                FEATURED · {FEATURED.cat}
              </div>
              <h2 style={{ margin: 0, fontSize: 36, fontWeight: 800, letterSpacing: -1.2, lineHeight: 1.1 }}>{FEATURED.title}</h2>
              <p style={{ marginTop: 16, fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.55, maxWidth: 480 }}>{FEATURED.excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 28 }}>
                <Avatar name={FEATURED.author} size={40} />
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 700 }}>{FEATURED.author}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>{FEATURED.role} · {FEATURED.date} · {FEATURED.read}</div>
                </div>
              </div>
              <div style={{ marginTop: 24 }}>
                <WBtn variant="light" size="md">Read article →</WBtn>
              </div>
            </div>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', inset: '-10%', background: 'radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)' }} />
              <PhoneMockup screen="aibot" scale={0.5} />
            </div>
          </div>
        </Container>
      </div>

      {/* Filter tabs */}
      <div style={{ padding: '0 0 40px', background: '#fff' }}>
        <Container>
          <div style={{ display: 'flex', gap: 8, borderBottom: `1px solid ${SC.hairline}`, paddingBottom: 12 }}>
            {FILTERS.map((t, i) => (
              <span key={i} style={{
                padding: '8px 14px', borderRadius: 999, cursor: 'pointer',
                background: i === 0 ? SC.primary : 'transparent',
                color: i === 0 ? '#fff' : SC.muted,
                fontSize: 13, fontWeight: 600,
              }}>{t}</span>
            ))}
          </div>
        </Container>
      </div>

      {/* Posts grid */}
      <div style={{ padding: '0 0 80px', background: '#fff' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {POSTS.map((p, i) => (
              <article key={i} style={{ background: '#FAFAFB', borderRadius: 16, padding: 24, border: `1px solid ${SC.hairline}`, cursor: 'pointer' }}>
                <div style={{ height: 140, borderRadius: 12, background: p.bg, marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', color: SC.muted, fontFamily: 'ui-monospace, monospace', fontSize: 11 }}>
                  [ hero image · 1200×800 ]
                </div>
                <div style={{ fontSize: 10.5, fontWeight: 700, color: SC.primary, letterSpacing: 1.2 }}>{p.cat}</div>
                <h3 style={{ margin: '8px 0 12px', fontSize: 18, fontWeight: 700, letterSpacing: -0.4, lineHeight: 1.25 }}>{p.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 16 }}>
                  <Avatar name={p.author} size={28} />
                  <div style={{ fontSize: 12, color: SC.muted }}>
                    <b style={{ color: SC.ink }}>{p.author}</b> · {p.date} · {p.read}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
