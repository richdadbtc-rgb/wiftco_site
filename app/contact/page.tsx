import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import { BUSINESS } from '@/lib/business';
import { SC } from '@/lib/tokens';

export const metadata: Metadata = {
  title: 'Contact Us | Wiftco',
  description: 'Contact Wiftco Tech Services for customer support and business enquiries.',
  alternates: { canonical: '/contact' },
};

const details = [
  ['Business name', BUSINESS.legalName],
  ['Support email', BUSINESS.supportEmail],
  ['Phone', BUSINESS.supportPhoneDisplay],
  ['Business address', BUSINESS.address],
  ['Website', BUSINESS.websiteDisplay],
  ['CAC registration', BUSINESS.registration],
] as const;

export default function ContactPage() {
  return (
    <div style={{ fontFamily: SC.font, color: SC.ink, background: '#fff' }}>
      <Nav />
      <PageHeader eyebrow="CONTACT WIFTCO" title="We’re here to help." subtitle="Contact Wiftco Tech Services about your account, a transaction, digital services or general support." />
      <main style={{ padding: '72px 0 90px' }}>
        <Container>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <div style={{ display: 'grid', gap: 14 }}>
              {details.map(([label, value]) => (
                <div key={label} style={{ padding: '20px 22px', border: `1px solid ${SC.hairline}`, borderRadius: 15, background: '#faf8ff' }}>
                  <div style={{ color: SC.muted, fontSize: 12, fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase' }}>{label}</div>
                  <div style={{ marginTop: 7, fontSize: 17, fontWeight: 700 }}>
                    {label === 'Support email' ? <a href={`mailto:${BUSINESS.supportEmail}`} style={{ color: SC.primary }}>{value}</a> :
                      label === 'Phone' ? <a href={BUSINESS.supportPhoneHref} style={{ color: SC.primary }}>{value}</a> :
                        label === 'Website' ? <a href={BUSINESS.website} style={{ color: SC.primary }}>{value}</a> : value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
