'use client';

import { useEffect } from 'react';

export default function SmoothMotion() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Reveal on scroll
    const revealTargets = document.querySelectorAll<HTMLElement>(
      '.reveal-on-scroll, .reveal-left-on-scroll, .reveal-right-on-scroll, .feature-card, .partner-card, .architecture span, .hero-people, .human-hero-visual, .people-hero, .early-card',
    );
    revealTargets.forEach((el) => {
      el.style.opacity = '0';
      if (el.classList.contains('reveal-left-on-scroll') || el.classList.contains('feature-card')) {
        el.style.transform = 'translate3d(-18px, 14px, 0)';
      } else if (el.classList.contains('reveal-right-on-scroll')) {
        el.style.transform = 'translate3d(18px, 14px, 0)';
      } else {
        el.style.transform = 'translate3d(0, 22px, 0)';
      }
      el.style.transition =
        'opacity .85s cubic-bezier(.2,.7,.2,1), transform .85s cubic-bezier(.2,.7,.2,1)';
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.style.opacity = '1';
          el.style.transform = 'translate3d(0,0,0)';
          io.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    revealTargets.forEach((el) => io.observe(el));

    // Parallax on hero artwork
    const parallaxEls = document.querySelectorAll<HTMLElement>('.parallax, .parallax-up, .parallax-zoom');
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        parallaxEls.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const center = rect.top + rect.height / 2 - window.innerHeight / 2;
          el.style.setProperty('--scroll-y', String(Math.max(-180, Math.min(180, center / 14))));
        });
        raf = 0;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
