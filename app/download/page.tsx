'use client';
import React from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import LaunchSignup from '@/components/LaunchSignup';
import PhoneMockup from '@/components/PhoneMockup';
import { LINKS, SC } from '@/lib/tokens';
import { useResponsive } from '@/lib/useResponsive';

export default function DownloadPage() {
  const { isMobile } = useResponsive();

  return (
    <div style={{ fontFamily: SC.font, color: SC.ink }}>
      <Nav />

      {/* Dark hero */}
      <div style={{ background: SC.purpleDeepGrad, color: '#fff', padding: isMobile ? '60px 0 72px' : '80px 0 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -60, right: -60, opacity: 0.08 }}>
          <svg width="400" height="400" viewBox="0 0 24 24"><path d="M13.5 2L4 14h6l-1.5 8L19 10h-6l.5-8z" fill="#fff" /></svg>
        </div>
        <div style={{ position: 'absolute', bottom: -150, left: -100, width: 400, height: 400, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />

        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 12px', background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 999, fontSize: 12.5, marginBottom: 24 }}>
                <span style={{ width: 6, height: 6, borderRadius: 3, background: SC.success, boxShadow: '0 0 8px #10B981', display: 'inline-block' }} />
                Private development · early access
              </div>
              <h1 style={{ margin: 0, fontSize: isMobile ? 52 : 76, fontWeight: 800, letterSpacing: isMobile ? -2 : -2.8, lineHeight: 1 }}>
                Get on the<br />list.
              </h1>
              <p style={{ marginTop: 24, fontSize: 18, color: 'rgba(255,255,255,0.75)', maxWidth: 480, lineHeight: 1.55 }}>
                Join the Wiftco early-access list. We&apos;ll email you with genuine product and launch updates as release preparation progresses.
              </p>

              {/* Email capture */}
              <div style={{ marginTop: 36, maxWidth: 460 }}>
                <LaunchSignup source="download" stacked={isMobile} />
              </div>

              {/* App store badges */}
              <div style={{ marginTop: 32 }}>
                <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.55)', fontWeight: 600, letterSpacing: 2, marginBottom: 14 }}>MOBILE RELEASE STATUS</div>
                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 22px', background: '#000', borderRadius: 14, border: '1px solid rgba(255,255,255,0.15)' }}>
                    <div style={{ fontSize: 24 }} aria-hidden="true">●</div>
                    <div>
                      <div style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.7)', letterSpacing: 0.5 }}>PREPARING FOR RELEASE</div>
                      <div style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginTop: 1 }}>iOS</div>
                    </div>
                  </div>
                  <a href={LINKS.playStore} target="_blank" rel="noreferrer" aria-label="Get Wiftco on Google Play" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 22px', background: '#000', borderRadius: 14, border: '1px solid rgba(255,255,255,0.28)', cursor: 'pointer', textDecoration: 'none' }}>
                    <svg
                      width="28"
                      height="31"
                      viewBox="0 0 28 31"
                      aria-hidden="true"
                      style={{ flexShrink: 0 }}
                    >
                      <path fill="#00D7FE" d="M1.1 1.6c-.4.6-.6 1.4-.6 2.4v23c0 1 .2 1.8.6 2.4l13.2-13.9L1.1 1.6Z" />
                      <path fill="#00F076" d="m14.3 15.5 4.4-4.6L3.4 2.1C2.5 1.6 1.7 1.4 1.1 1.6l13.2 13.9Z" />
                      <path fill="#FF3A44" d="M1.1 29.4c.6.2 1.4 0 2.3-.5l15.4-8.8-4.5-4.6L1.1 29.4Z" />
                      <path fill="#FFCE00" d="m25.2 13-6.5-3.8-4.4 4.6v3.4l4.5 4.6 6.4-3.7c2.4-1.4 2.4-3.7 0-5.1Z" />
                    </svg>
                    <div>
                      <div style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.7)', letterSpacing: 0.5 }}>GET IT ON</div>
                      <div style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginTop: 1 }}>Google Play</div>
                    </div>
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 12 : 28, marginTop: 36, fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>
                {[['Private', 'development'], ['Early access', 'updates'], ['Android', 'available on Google Play']].map(([v, l], i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                    <span style={{ fontSize: 22, fontWeight: 800, color: '#fff' }}>{v}</span>
                    <span>{l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone showcase — hidden on mobile, reduced on tablet */}
            {!isMobile && (
              <div style={{ position: 'relative', height: 720, display: 'flex', justifyContent: 'center' }}>
                <div style={{ position: 'absolute', inset: '5% 5%', background: 'radial-gradient(circle, rgba(255,255,255,0.15), transparent 60%)' }} />
                <div style={{ position: 'absolute', left: 30, top: 30, zIndex: 1 }}>
                  <PhoneMockup screen="chat" scale={0.62} tilt={-5} />
                </div>
                <div style={{ position: 'absolute', right: 30, top: 70, zIndex: 2 }}>
                  <PhoneMockup screen="dashboard" scale={0.62} tilt={5} />
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>

      {/* Compatibility band */}
      <div style={{ padding: '48px 0', background: '#fff', borderBottom: `1px solid ${SC.hairline}` }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: 32, alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: SC.primary, letterSpacing: 2, marginBottom: 8 }}>SUPPORTED ON</div>
              <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.6 }}>Mobile-first,<br />release preparation.</div>
            </div>
            {[['iOS', 'Release details to follow'], ['Android', 'Available on Google Play'], ['Availability', 'Nigeria']].map(([v, l], i) => (
              <div key={i} style={{ padding: 20, background: '#FAFAFB', borderRadius: 14, border: `1px solid ${SC.hairline}` }}>
                <div style={{ fontSize: 18, fontWeight: 700 }}>{v}</div>
                <div style={{ fontSize: 13, color: SC.muted, marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
