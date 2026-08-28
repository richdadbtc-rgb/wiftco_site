'use client';

import type React from 'react';
import Link from 'next/link';
import { LINKS } from '@/lib/tokens';

const columns = [
  ['Product', [['Messages', '/features'], ['Calls', '/features'], ['Connectivity', '/features#connectivity'], ['Wallet', '/features'], ['Ben', '/features'], ['Feed', '/features']]],
  ['Business', [['For Businesses', '/business'], ['Telecom Partnerships', '/business/partnerships'], ['Technology/API', '/business'], ['Contact', 'mailto:partnerships@wiftco.com']]],
  ['Company', [['About', '/about'], ['Careers', '/careers'], ['Press', '/press'], ['Blog', '/blog']]],
  ['Legal', [['Privacy', '/privacy'], ['Terms', '/terms'], ['Account deletion', '/account-deletion']]],
] as const;

const storeButtonStyle: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 10, minWidth: 154,
  padding: '8px 12px', border: '1px solid rgba(255,255,255,.2)',
  borderRadius: 11, color: '#fff', background: '#08070d', textAlign: 'left',
  textDecoration: 'none', cursor: 'pointer',
};

export default function Footer() {
  return (
    <footer style={{ background: '#171329', color: '#fff', padding: '72px 24px 34px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(4,1fr)', gap: 36 }}>
          <div>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
              <img src="/swiftco-logo.png" alt="Wiftco" style={{ height: 38, width: 'auto' }} />
            </Link>
            <p style={{ maxWidth: 280, marginTop: 20, color: 'rgba(255,255,255,.66)', lineHeight: 1.65 }}>
              Communication, connectivity and everyday digital services - one experience.
            </p>
            <a href="mailto:partnerships@wiftco.com" style={{ display: 'inline-block', marginTop: 18, color: '#cdb8ff', textDecoration: 'none' }}>
              partnerships@wiftco.com
            </a>
            <div className="footer-store-buttons" style={{ display: 'flex', flexWrap: 'wrap', gap: 9, marginTop: 22 }}>
              <a href={LINKS.playStore} target="_blank" rel="noreferrer" aria-label="Get Wiftco on Google Play" style={storeButtonStyle}>
                <img src="/google-play-icon.svg" alt="" width={24} height={28} style={{ display: 'block', flexShrink: 0 }} />
                <span>
                  <small style={{ display: 'block', color: 'rgba(255,255,255,.65)', fontSize: 8, letterSpacing: .6 }}>GET IT ON</small>
                  <b style={{ display: 'block', marginTop: 1, fontSize: 13 }}>Google Play</b>
                </span>
              </a>
              <button type="button" onClick={() => window.alert('Wiftco for iPhone is coming soon.')} aria-label="Wiftco for iPhone is coming soon" style={storeButtonStyle}>
                <img src="/app-store-icon.svg" alt="" width={27} height={27} style={{ display: 'block', flexShrink: 0 }} />
                <span>
                  <small style={{ display: 'block', color: 'rgba(255,255,255,.65)', fontSize: 8, letterSpacing: .6 }}>COMING SOON ON</small>
                  <b style={{ display: 'block', marginTop: 1, fontSize: 13 }}>App Store</b>
                </span>
              </button>
            </div>
          </div>
          {columns.map(([title, links]) => (
            <div key={title}>
              <h2 style={{ fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>{title}</h2>
              {links.map(([label, href]) => (
                <Link key={label} href={href} style={{ display: 'block', padding: '6px 0', color: 'rgba(255,255,255,.66)', textDecoration: 'none', fontSize: 14 }}>
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 50, paddingTop: 26, borderTop: '1px solid rgba(255,255,255,.12)', color: 'rgba(255,255,255,.48)', fontSize: 12 }}>
          © 2026 Wiftco. Carrier-dependent services require authorised partners and applicable regulatory approval.
        </div>
      </div>
      <style jsx>{`
        @media(max-width:800px){.footer-grid{grid-template-columns:1fr 1fr!important}.footer-grid>div:first-child{grid-column:1/-1}}
        @media(max-width:480px){.footer-store-buttons{flex-direction:column}}
      `}</style>
    </footer>
  );
}
