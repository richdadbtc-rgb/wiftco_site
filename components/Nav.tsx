'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SC, WEB } from '@/lib/tokens';
import { IcoBolt } from '@/components/icons';

const NAV_ITEMS = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Business', href: '/business' },
  { label: 'Security', href: '/security' },
  { label: 'Company', href: '/about' },
  { label: 'Help', href: '/help' },
];

interface NavProps {
  dark?: boolean;
}

export default function Nav({ dark = false }: NavProps) {
  const pathname = usePathname();
  const ink = dark ? '#fff' : SC.ink;
  const muted = dark ? 'rgba(255,255,255,0.7)' : SC.muted;
  const bg = dark ? 'transparent' : '#fff';

  return (
    <nav style={{
      height: WEB.navH,
      padding: '0 56px',
      background: bg,
      borderBottom: dark ? 'none' : `1px solid ${SC.hairline}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative',
      zIndex: 10,
    }}>
      {/* Logo + links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 44 }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img 
            src="/swiftco-logo.png" 
            alt="Wiftco" 
            style={{ height: 40, width: 'auto' }}
          />
        </Link>

        <div style={{ display: 'flex', gap: 28 }}>
          {NAV_ITEMS.map(item => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link key={item.href} href={item.href} style={{
                fontSize: 14,
                color: isActive ? ink : muted,
                fontWeight: isActive ? 600 : 500,
                position: 'relative',
                textDecoration: 'none',
                paddingBottom: 22,
              }}>
                {item.label}
                {isActive && (
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    height: 2, background: SC.primary, borderRadius: 2,
                  }} />
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Link href="/download" style={{ fontSize: 13.5, color: muted, fontWeight: 500, textDecoration: 'none' }}>
          Sign in
        </Link>
        <Link href="/download" style={{
          padding: '8px 16px',
          background: dark ? '#fff' : SC.primary,
          color: dark ? SC.primary : '#fff',
          borderRadius: 10,
          fontSize: 13,
          fontWeight: 600,
          textDecoration: 'none',
          boxShadow: dark ? '0 10px 24px rgba(0,0,0,0.10)' : '0 10px 24px rgba(94,23,235,0.30)',
        }}>
          Get early access
        </Link>
      </div>
    </nav>
  );
}
