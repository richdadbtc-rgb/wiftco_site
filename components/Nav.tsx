'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LINKS, SC, WEB } from '@/lib/tokens';
import { IcoBolt } from '@/components/icons';
import { useResponsive } from '@/lib/useResponsive';

const NAV_ITEMS = [
  { label: 'Product', href: '/features' },
  { label: 'Connectivity', href: '/features#connectivity' },
  { label: 'Business', href: '/business' },
  { label: 'Security', href: '/security' },
  { label: 'Company', href: '/about' },
];

interface NavProps { dark?: boolean; }

export default function Nav({ dark = false }: NavProps) {
  const pathname = usePathname();
  const { isMobile } = useResponsive();
  const [open, setOpen] = useState(false);

  const ink = dark ? '#fff' : SC.ink;
  const muted = dark ? 'rgba(255,255,255,0.7)' : SC.muted;
  const bg = dark ? 'transparent' : '#fff';

  return (
    <div style={{ position: 'relative', zIndex: 100 }}>
      <nav style={{
        height: WEB.navH,
        padding: isMobile ? '0 20px' : '0 56px',
        background: bg,
        borderBottom: dark ? 'none' : `1px solid ${SC.hairline}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} onClick={() => setOpen(false)}>
          <img src="/swiftco-logo.png" alt="Wiftco" style={{ height: 36, width: 'auto' }} />
        </Link>

        {/* Desktop: nav links */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: 28 }}>
            {NAV_ITEMS.map(item => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link key={item.href} href={item.href} style={{ fontSize: 14, color: isActive ? ink : muted, fontWeight: isActive ? 600 : 500, position: 'relative', textDecoration: 'none', paddingBottom: 22 }}>
                  {item.label}
                  {isActive && <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: SC.primary, borderRadius: 2 }} />}
                </Link>
              );
            })}
            <Link href="/business/partnerships" style={{ fontSize:14,color:muted,fontWeight:500,textDecoration:'none',paddingBottom:22 }}>Partnerships</Link>
          </div>
        )}

        {/* Desktop: CTA */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link href="/download" style={{ fontSize: 13.5, color: muted, fontWeight: 500, textDecoration: 'none' }}>Sign in</Link>
            <a href={LINKS.playStore} target="_blank" rel="noreferrer" style={{ padding: '8px 16px', background: dark ? '#fff' : SC.primary, color: dark ? SC.primary : '#fff', borderRadius: 10, fontSize: 13, fontWeight: 600, textDecoration: 'none', boxShadow: dark ? '0 10px 24px rgba(0,0,0,0.10)' : '0 10px 24px rgba(94,23,235,0.30)' }}>Get the app</a>
          </div>
        )}

        {/* Mobile: hamburger button */}
        {isMobile && (
          <button
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: ink, display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center', justifyContent: 'center' }}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? (
              // X icon
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            ) : (
              // Hamburger icon
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        )}
      </nav>

      {/* Mobile dropdown menu */}
      {isMobile && open && (
        <>
          {/* Dim overlay */}
          <div onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, top: WEB.navH, background: 'rgba(0,0,0,0.35)', zIndex: 99 }} />
          {/* Menu panel */}
          <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: '#fff', borderBottom: `1px solid ${SC.hairline}`, zIndex: 100, padding: '8px 0 24px', boxShadow: '0 16px 40px rgba(0,0,0,0.12)' }}>
            {NAV_ITEMS.map(item => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} style={{ display: 'block', padding: '14px 24px', fontSize: 17, fontWeight: isActive ? 700 : 500, color: isActive ? SC.primary : SC.ink, textDecoration: 'none', borderLeft: isActive ? `3px solid ${SC.primary}` : '3px solid transparent' }}>
                  {item.label}
                </Link>
              );
            })}
            <Link href="/business/partnerships" onClick={() => setOpen(false)} style={{display:'block',padding:'14px 24px',fontSize:17,fontWeight:500,color:SC.ink,textDecoration:'none',borderLeft:'3px solid transparent'}}>Telecom Partnerships</Link>
            <div style={{ margin: '16px 24px 0' }}>
              <a href={LINKS.playStore} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} style={{ display: 'block', textAlign: 'center', padding: '14px', background: SC.primary, color: '#fff', borderRadius: 12, fontSize: 15, fontWeight: 600, textDecoration: 'none', boxShadow: '0 8px 20px rgba(94,23,235,0.30)' }}>
                Get Wiftco on Google Play
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
