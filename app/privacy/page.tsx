import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { SC } from '@/lib/tokens';

export const metadata: Metadata = {
  title: 'Privacy Policy — Wiftco',
  description: 'How Wiftco collects, uses, protects, and manages your personal information.',
};

const sections = [
  ['1. Who we are', 'Wiftco provides communications, connectivity, wallet and related digital services. This notice applies to the Wiftco website, waitlist and launch-update emails. The mobile app may present additional notices when a feature needs other information.'],
  ['2. Information we collect', 'When you join our launch list, we collect your email address, the page where you subscribed, your consent time and subscription status. Our hosting and security systems may also process basic technical records such as IP address, browser type, timestamps and request logs to operate and protect the website.'],
  ['3. Why we use it', 'We use your email only to send the launch, early-access and product-update messages you requested. We use limited technical records to deliver the site, prevent abuse, diagnose faults and protect Wiftco. We do not sell your personal information.'],
  ['4. Our lawful basis', 'Launch and product-update email is based on your affirmative consent. You may withhold or withdraw that consent at any time without affecting your access to the website. Essential website security and operational processing may rely on our legitimate interests and legal obligations.'],
  ['5. Who receives information', 'Authorised Wiftco personnel and service providers supporting hosting, email delivery, security and operations may process information only for these purposes and under appropriate safeguards. We may disclose information where lawfully required.'],
  ['6. How long we keep it', 'We keep an active subscriber record until you unsubscribe. After withdrawal, we retain the minimum suppression and audit record needed to honour your choice, resolve complaints and meet legal obligations. Security logs are kept only as long as reasonably necessary for their operational purpose.'],
  ['7. International processing', 'Some carefully selected technology providers may process information outside Nigeria. Where this occurs, Wiftco will use safeguards required by applicable data-protection law and assess the protection available to your information.'],
  ['8. Your choices and rights', 'Subject to applicable law, you may ask to access, correct, erase or restrict your information, object to certain processing, withdraw consent, request portability, or complain to the Nigeria Data Protection Commission. Every marketing email contains an unsubscribe link.'],
  ['9. Security', 'We apply technical and organisational safeguards appropriate to the nature of the information. No internet service is completely risk-free, so we continually review access, delivery and monitoring controls.'],
  ['10. Children', 'The website launch list is not directed to children. Do not submit a child’s email address without appropriate parental or guardian authority.'],
  ['11. Updates and contact', 'We may update this notice as Wiftco develops. Material changes will be clearly posted with a new effective date. For privacy requests or questions, email support@wiftco.com.'],
];

export default function PrivacyPage() {
  return (
    <div style={{ fontFamily: SC.font, color: SC.ink, background: '#fff' }}>
      <Nav />
      <PageHeader eyebrow="LEGAL & PRIVACY" title="Your information. Your choice." subtitle="A clear explanation of what the Wiftco website collects, why we use it, and how you stay in control." />
      <main style={{ padding: '72px 0 90px' }}>
        <Container>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <div style={{ padding: '18px 22px', borderRadius: 14, background: '#f6f1ff', border: `1px solid ${SC.hairline}`, color: SC.muted, fontSize: 13.5, lineHeight: 1.6, marginBottom: 38 }}>
              Effective 14 August 2026 · This notice is designed around the Nigeria Data Protection Act 2023. It is not a contract and does not reduce any rights the law gives you.
            </div>
            <div style={{ padding: '22px 24px', borderRadius: 16, background: SC.ink, color: '#fff', marginBottom: 38, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
              <div>
                <strong style={{ display: 'block', fontSize: 17, marginBottom: 4 }}>Want to delete your Wiftco account?</strong>
                <span style={{ color: 'rgba(255,255,255,.72)', fontSize: 13.5 }}>Submit an account and associated-data deletion request.</span>
              </div>
              <Link href="/account-deletion" style={{ padding: '11px 17px', borderRadius: 11, background: '#fff', color: SC.primary, textDecoration: 'none', fontWeight: 700, fontSize: 13.5 }}>Request deletion →</Link>
            </div>
            {sections.map(([title, body]) => (
              <section key={title} style={{ padding: '26px 0', borderTop: `1px solid ${SC.hairline}` }}>
                <h2 style={{ margin: '0 0 10px', fontSize: 22, letterSpacing: -.4 }}>{title}</h2>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.75, color: SC.muted }}>{body}</p>
              </section>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
