'use client';

import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError('');
    const data = new FormData(event.currentTarget);
    const response = await fetch('/api/admin/auth/login', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier: data.get('email'), password: data.get('password') }),
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) { setError(payload.detail || 'Unable to sign in.'); setBusy(false); return; }
    router.replace('/admin'); router.refresh();
  }

  return <main className="admin-login">
    <section className="login-card">
      <div className="login-brand"><Image src="/wiftco%20icon.png" alt="Wiftco" width={58} height={58} /><div><strong>Wiftco</strong><span>Control centre</span></div></div>
      <div className="login-copy"><span className="eyebrow">SECURE ADMIN PORTAL</span><h1>Welcome back</h1><p>Sign in with an authorised staff account to manage Wiftco.</p></div>
      <form onSubmit={submit}>
        <label>Email or Wift ID<input name="email" autoComplete="username" required placeholder="admin@wiftco.com" /></label>
        <label>Password<input name="password" type="password" autoComplete="current-password" required placeholder="Enter your password" /></label>
        {error && <div className="form-error">{error}</div>}
        <button className="primary-button" disabled={busy}>{busy ? 'Signing in…' : 'Sign in securely'}</button>
      </form>
      <p className="login-foot">Protected staff access · Activity is audited</p>
    </section>
  </main>;
}
