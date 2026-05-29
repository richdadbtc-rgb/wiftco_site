'use client';
import React from 'react';
import Link from 'next/link';
import { SC } from '@/lib/tokens';
import { IcoBolt, IcoFlag } from '@/components/icons';
import { useResponsive } from '@/lib/useResponsive';

const COLS = [
  { title: 'Product', items: [
    { label: 'Chat & calls', href: '/features' },
    { label: 'Wallet', href: '/features' },
    { label: 'Pay bills', href: '/features' },
    { label: 'eSIM', href: '/features' },
    { label: 'WiftBot AI', href: '/features' },
    { label: 'Download', href: '/download' },
  ]},
  { title: 'Company', items: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/help' },
  ]},
  { title: 'Business', items: [
    { label: 'For merchants', href: '/business' },
    { label: 'API & docs', href: '/business' },
    { label: 'Partnerships', href: '/business' },
    { label: 'Status', href: '/business' },
  ]},
  { title: 'Legal', items: [
    { label: 'Privacy', href: '/help' },
    { label: 'Terms', href: '/help' },
    { label: 'CBN disclosures', href: '/security' },
    { label: 'AML policy', href: '/security' },
  ]},
];

const SOCIALS = ['𝕏', 'IG', 'in', 'TT'];

export default function Footer() {
  const { isMobile } = useResponsive();

  return (
    <footer style={{ background: SC.ink, color: '#fff', padding: isMobile ? '48px 20px 28px' : '72px 56px 36px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Main grid */}
        {isMobile ? (
          <div style={{ marginBottom: 40 }}>
            {/* Brand column — full width on mobile */}
            <div style={{ marginBottom: 32 }}>
              <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 34, height: 34, borderRadius: 10, background: SC.primary,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 6px 16px rgba(94,23,235,0.35)', color: '#fff',
                }}>
                  <IcoBolt size={20} />
                </div>
                <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.6, color: '#fff' }}>Wiftco</span>
              </Link>
              <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.65)', marginTop: 18, lineHeight: 1.6, maxWidth: 280 }}>
                The all-in-one Nigerian super-app for chat, money, and connectivity. Built in Lagos. ⚡
              </p>
              <div style={{ display: 'flex', gap: 8, marginTop: 22 }}>
                {SOCIALS.map((s, i) => (
                  <div key={i} style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, fontWeight: 600, color: '#fff', cursor: 'pointer',
                  }}>{s}</div>
                ))}
              </div>
            </div>
            {/* Link columns in 2-col grid on mobile */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
              {COLS.map(col => (
                <div key={col.title}>
                  <div style={{ fontSize: 11.5, fontWeight: 700, color: '#fff', letterSpacing: 1.5, marginBottom: 16 }}>
                    {col.title.toUpperCase()}
                  </div>
                  {col.items.map(item => (
                    <Link key={item.label} href={item.href} style={{
                      display: 'block', fontSize: 13.5, color: 'rgba(255,255,255,0.7)',
                      padding: '6px 0', fontWeight: 500, textDecoration: 'none',
                    }}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', gap: 40, marginBottom: 56 }}>
            {/* Brand column */}
            <div>
              <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 34, height: 34, borderRadius: 10, background: SC.primary,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 6px 16px rgba(94,23,235,0.35)', color: '#fff',
                }}>
                  <IcoBolt size={20} />
                </div>
                <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.6, color: '#fff' }}>Wiftco</span>
              </Link>
              <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.65)', marginTop: 18, lineHeight: 1.6, maxWidth: 280 }}>
                The all-in-one Nigerian super-app for chat, money, and connectivity. Built in Lagos. ⚡
              </p>
              <div style={{ display: 'flex', gap: 8, marginTop: 22 }}>
                {SOCIALS.map((s, i) => (
                  <div key={i} style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, fontWeight: 600, color: '#fff', cursor: 'pointer',
                  }}>{s}</div>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {COLS.map(col => (
              <div key={col.title}>
                <div style={{ fontSize: 11.5, fontWeight: 700, color: '#fff', letterSpacing: 1.5, marginBottom: 16 }}>
                  {col.title.toUpperCase()}
                </div>
                {col.items.map(item => (
                  <Link key={item.label} href={item.href} style={{
                    display: 'block', fontSize: 13.5, color: 'rgba(255,255,255,0.7)',
                    padding: '6px 0', fontWeight: 500, textDecoration: 'none',
                  }}>
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Bottom bar */}
        <div style={{
          display: 'flex', alignItems: isMobile ? 'flex-start' : 'center',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          gap: isMobile ? 12 : 0,
          paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.10)',
          fontSize: 12, color: 'rgba(255,255,255,0.5)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span>© 2026 Wiftco Technologies Ltd · RC 2104587</span>
            <span style={{ width: 4, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.3)', display: 'inline-block' }} />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <IcoFlag size={12} /> Lagos, Nigeria
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <span>Licensed by CBN · NDIC insured</span>
            <span style={{
              padding: '4px 10px', borderRadius: 999,
              background: 'rgba(16,185,129,0.15)', color: SC.success,
              fontSize: 11, fontWeight: 600, border: '1px solid rgba(16,185,129,0.3)',
            }}>● All systems normal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
