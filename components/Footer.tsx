'use client';

import type React from 'react';
import Link from 'next/link';
import { LINKS } from '@/lib/tokens';
import { BUSINESS } from '@/lib/business';

const columns = [
  ['Product', [['Messages', '/features'], ['Calls', '/features'], ['Connectivity', '/features#connectivity'], ['Wallet', '/features'], ['Ben', '/features'], ['Feed', '/features']]],
  ['Business', [['For Businesses', '/business'], ['Telecom Partnerships', '/business/partnerships'], ['Technology/API', '/business'], ['Contact Us', '/contact']]],
  ['Company', [['About', '/about'], ['Careers', '/careers'], ['Press', '/press'], ['Blog', '/blog']]],
  ['Legal', [['Privacy Policy', '/privacy'], ['Terms & Conditions', '/terms'], ['Refund Policy', '/refund-policy'], ['Account deletion', '/account-deletion']]],
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
            <a href={`mailto:${BUSINESS.supportEmail}`} style={{ display: 'inline-block', marginTop: 18, color: '#cdb8ff', textDecoration: 'none' }}>
              {BUSINESS.supportEmail}
            </a>
            <div style={{ marginTop: 20 }}>
              <div style={{ marginBottom: 9, color: 'rgba(255,255,255,.48)', fontSize: 9, fontWeight: 800, letterSpacing: 1.4 }}>FOLLOW WIFTCO</div>
              <div style={{ display: 'inline-flex', gap: 10, flexWrap: 'wrap' }}>
                {[
                  { href: LINKS.x, label: 'Follow Wiftco on X', svg: <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.24 2H21l-6.03 6.9L22 22h-5.5l-4.3-5.63L7.27 22H4.5l6.4-7.32L4.16 2h5.64l3.9 5.15L18.24 2Zm-.97 17.7h1.53L8.96 4.18H7.32L17.27 19.7Z" /></svg> },
                  { href: LINKS.facebook, label: 'Follow Wiftco on Facebook', svg: <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.89h-2.34V21.88C18.34 21.12 22 16.99 22 12z" /></svg> },
                  { href: LINKS.instagram, label: 'Follow Wiftco on Instagram', svg: <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.08 1.65.08 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.25-1.69 4.77-4.92 4.92-1.27.06-1.65.08-4.85.08-3.2 0-3.58-.01-4.85-.07-3.25-.15-4.77-1.69-4.92-4.92-.06-1.27-.08-1.65-.08-4.85 0-3.2.01-3.58.07-4.85.15-3.25 1.69-4.77 4.92-4.92C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07c-4.35.2-6.78 2.62-7 7C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.35 2.62 6.78 7 7C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 7-7C23.99 15.67 24 15.26 24 12s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" /></svg> },
                  { href: LINKS.linkedin, label: 'Follow Wiftco on LinkedIn', svg: <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77A1.75 1.75 0 0 0 0 1.76v20.48A1.75 1.75 0 0 0 1.77 24h20.45A1.75 1.75 0 0 0 24 22.24V1.76A1.75 1.75 0 0 0 22.22 0z" /></svg> },
                  { href: LINKS.tiktok, label: 'Follow Wiftco on TikTok', svg: <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.28 8.28 0 0 0 4.76 1.52V6.57a4.85 4.85 0 0 1-1-.12z" /></svg> },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    title={item.label}
                    style={{ display: 'inline-grid', width: 38, height: 38, placeItems: 'center', border: '1px solid rgba(255,255,255,.2)', borderRadius: '50%', color: '#fff', background: 'rgba(255,255,255,.07)', textDecoration: 'none' }}
                  >
                    {item.svg}
                  </a>
                ))}
              </div>
            </div>
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
          <div>© 2026 {BUSINESS.legalName} · CAC {BUSINESS.registration}. Carrier-dependent services require authorised partners and applicable regulatory approval.</div>
          <div style={{ marginTop: 8 }}>Wiftco may use approved third-party payment processors and service providers to process payments and fulfil digital services.</div>
        </div>
      </div>
      <style jsx>{`
        @media(max-width:800px){.footer-grid{grid-template-columns:1fr 1fr!important}.footer-grid>div:first-child{grid-column:1/-1}}
        @media(max-width:480px){.footer-store-buttons{flex-direction:column}}
      `}</style>
    </footer>
  );
}
