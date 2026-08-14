import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import { SC } from '@/lib/tokens';

export const metadata: Metadata = {
  title: 'Request Account Deletion — Wiftco',
  description: 'Request deletion of your Wiftco account and associated personal data.',
};

const deletionEmail = 'mailto:support@wiftco.com?subject=Wiftco%20account%20deletion%20request&body=Hello%20Wiftco%20Privacy%20Team%2C%0A%0AI%20want%20to%20delete%20my%20Wiftco%20account%20and%20associated%20personal%20data.%0A%0AAccount%20email%3A%20%0AWiftco%20ID%20(optional)%3A%20%0A%0APlease%20tell%20me%20the%20next%20verification%20step.%0A%0AThank%20you.';

const steps = [
  ['1', 'Send your request', 'Use the button below from the email address connected to your Wiftco account. Include your account email and, if available, your Wiftco ID.'],
  ['2', 'Verify account ownership', 'For your protection, Wiftco will ask you to complete a secure identity check. Never send your password, PIN, OTP, BVN, NIN or full card details by email.'],
  ['3', 'Deletion is processed', 'After verification, we will close the account and delete or anonymise associated personal data, except information we must retain for fraud prevention, disputes, financial records or other legal obligations.'],
];

export default function AccountDeletionPage() {
  return (
    <div style={{ fontFamily: SC.font, color: SC.ink, background: '#fff' }}>
      <Nav />
      <PageHeader eyebrow="PRIVACY REQUEST" title="Delete your Wiftco account." subtitle="You can request closure of your account and deletion of the personal data associated with it." />
      <main style={{ padding: '72px 0 90px' }}>
        <Container>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <div style={{ display: 'grid', gap: 14 }}>
              {steps.map(([number, title, body]) => (
                <section key={number} style={{ display: 'flex', gap: 18, padding: 24, border: `1px solid ${SC.hairline}`, borderRadius: 17, background: '#fff', boxShadow: SC.shadowSoft }}>
                  <div style={{ width: 38, height: 38, borderRadius: 12, flexShrink: 0, display: 'grid', placeItems: 'center', color: '#fff', background: SC.primary, fontWeight: 800 }}>{number}</div>
                  <div><h2 style={{ margin: '2px 0 7px', fontSize: 19 }}>{title}</h2><p style={{ margin: 0, color: SC.muted, fontSize: 14.5, lineHeight: 1.65 }}>{body}</p></div>
                </section>
              ))}
            </div>

            <div style={{ marginTop: 32, padding: '30px 28px', borderRadius: 20, background: SC.purpleGradDiag, color: '#fff', textAlign: 'center' }}>
              <h2 style={{ margin: 0, fontSize: 25 }}>Ready to submit your request?</h2>
              <p style={{ margin: '10px auto 22px', maxWidth: 590, color: 'rgba(255,255,255,.78)', lineHeight: 1.6 }}>Email our privacy team from your registered email address. We will reply with the secure verification steps.</p>
              <a href={deletionEmail} style={{ display: 'inline-flex', padding: '13px 20px', borderRadius: 12, background: '#fff', color: SC.primary, textDecoration: 'none', fontWeight: 800 }}>Email account deletion request</a>
            </div>

            <p style={{ marginTop: 24, textAlign: 'center', color: SC.muted, fontSize: 13.5 }}>
              Need help first? Email <a href="mailto:support@wiftco.com" style={{ color: SC.primary }}>support@wiftco.com</a> or read our <Link href="/privacy" style={{ color: SC.primary }}>Privacy Policy</Link>.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
