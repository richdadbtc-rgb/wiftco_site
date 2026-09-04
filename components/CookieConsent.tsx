'use client';

import { useEffect, useState } from 'react';
import { SC } from '@/lib/tokens';

type Consent = {
  necessary: true;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
  decidedAt: string;
};

const STORAGE_KEY = 'wiftco_cookie_consent_v1';

const defaultConsent: Consent = {
  necessary: true,
  analytics: false,
  functional: false,
  marketing: false,
  decidedAt: '',
};

function readConsent(): Consent | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;
    return parsed as Consent;
  } catch {
    return null;
  }
}

function writeConsent(consent: Consent) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    /* ignore quota / privacy mode errors */
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [functional, setFunctional] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (existing) {
      setAnalytics(!!existing.analytics);
      setFunctional(!!existing.functional);
      setMarketing(!!existing.marketing);
      return;
    }
    // Defer rendering so it does not block first paint
    const t = window.setTimeout(() => setVisible(true), 350);
    return () => window.clearTimeout(t);
  }, []);

  function save(consent: Consent) {
    writeConsent(consent);
    setVisible(false);
  }

  function acceptAll() {
    save({
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true,
      decidedAt: new Date().toISOString(),
    });
  }

  function rejectAll() {
    save({ ...defaultConsent, decidedAt: new Date().toISOString() });
  }

  function saveSelection() {
    save({
      necessary: true,
      analytics,
      functional,
      marketing,
      decidedAt: new Date().toISOString(),
    });
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      style={{
        position: 'fixed',
        left: 16,
        right: 16,
        bottom: 16,
        zIndex: 80,
        maxWidth: 720,
        margin: '0 auto',
        background: '#0f0a1f',
        color: '#fff',
        borderRadius: 18,
        padding: showDetails ? '22px 22px 18px' : '18px 20px',
        boxShadow: '0 20px 50px rgba(15,10,31,.35)',
        border: '1px solid rgba(255,255,255,.08)',
        fontFamily: SC.font,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, flexWrap: 'wrap' }}>
        <div
          aria-hidden="true"
          style={{
            width: 38,
            height: 38,
            borderRadius: 12,
            background: 'rgba(94,23,235,.18)',
            color: '#cdb8ff',
            display: 'grid',
            placeItems: 'center',
            flexShrink: 0,
            fontSize: 18,
          }}
        >
          🍪
        </div>
        <div style={{ flex: 1, minWidth: 240 }}>
          <strong style={{ display: 'block', fontSize: 15, marginBottom: 4 }}>
            We use cookies
          </strong>
          <p
            style={{
              margin: 0,
              fontSize: 13.5,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,.74)',
            }}
          >
            Wiftco uses strictly necessary cookies to run the site, plus optional
            cookies to measure performance, remember preferences and support
            marketing. You can accept, reject or choose categories.{' '}
            <a
              href="/cookie-policy"
              style={{ color: '#cdb8ff', textDecoration: 'underline' }}
            >
              Cookie policy
            </a>{' '}
            ·{' '}
            <a
              href="/privacy"
              style={{ color: '#cdb8ff', textDecoration: 'underline' }}
            >
              Privacy policy
            </a>
          </p>
        </div>
      </div>

      {showDetails && (
        <div
          style={{
            marginTop: 16,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 10,
          }}
        >
          <ConsentRow
            label="Strictly necessary"
            description="Required for the site to function."
            checked
            disabled
          />
          <ConsentRow
            label="Performance & analytics"
            description="Helps us understand usage."
            checked={analytics}
            onChange={setAnalytics}
          />
          <ConsentRow
            label="Functional"
            description="Remembers your preferences."
            checked={functional}
            onChange={setFunctional}
          />
          <ConsentRow
            label="Marketing"
            description="Personalises communications."
            checked={marketing}
            onChange={setMarketing}
          />
        </div>
      )}

      <div
        style={{
          marginTop: 16,
          display: 'flex',
          gap: 8,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        {!showDetails ? (
          <button
            type="button"
            onClick={() => setShowDetails(true)}
            style={{
              padding: '10px 14px',
              borderRadius: 10,
              border: '1px solid rgba(255,255,255,.18)',
              background: 'transparent',
              color: '#fff',
              fontSize: 13,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Customise
          </button>
        ) : (
          <button
            type="button"
            onClick={saveSelection}
            style={{
              padding: '10px 14px',
              borderRadius: 10,
              border: '1px solid rgba(255,255,255,.18)',
              background: 'transparent',
              color: '#fff',
              fontSize: 13,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Save selection
          </button>
        )}
        <button
          type="button"
          onClick={rejectAll}
          style={{
            padding: '10px 14px',
            borderRadius: 10,
            border: '1px solid rgba(255,255,255,.18)',
            background: 'transparent',
            color: '#fff',
            fontSize: 13,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Reject all
        </button>
        <button
          type="button"
          onClick={acceptAll}
          style={{
            marginLeft: 'auto',
            padding: '10px 16px',
            borderRadius: 10,
            border: 'none',
            background: SC.primary,
            color: '#fff',
            fontSize: 13,
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 8px 20px rgba(94,23,235,.35)',
          }}
        >
          Accept all
        </button>
      </div>
    </div>
  );
}

function ConsentRow({
  label,
  description,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <label
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 10,
        padding: '10px 12px',
        borderRadius: 10,
        background: 'rgba(255,255,255,.04)',
        border: '1px solid rgba(255,255,255,.08)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? .85 : 1,
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        style={{ marginTop: 2, accentColor: SC.primary }}
      />
      <span>
        <strong style={{ display: 'block', fontSize: 13 }}>{label}</strong>
        <span
          style={{
            display: 'block',
            fontSize: 11.5,
            color: 'rgba(255,255,255,.6)',
            lineHeight: 1.45,
          }}
        >
          {description}
          {disabled ? ' · Always on' : ''}
        </span>
      </span>
    </label>
  );
}
