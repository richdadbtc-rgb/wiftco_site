import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import { BUSINESS } from '@/lib/business';
import { SC } from '@/lib/tokens';

export const metadata: Metadata = {
  title: 'Refund Policy | Wiftco',
  description: "Read Wiftco's refund policy for failed transactions, duplicate payments, airtime, data and bill payment services.",
  alternates: { canonical: '/refund-policy' },
};

const eligible = [
  'A payment was successfully debited but the requested service was not delivered.',
  'A transaction failed but the customer’s account was debited.',
  'A customer was charged more than once for the same transaction.',
  'Wiftco or an upstream service provider confirms that a transaction cannot be completed.',
  'A transaction is reversed or cancelled before fulfilment where a refund is permitted.',
];

const requestDetails = ['Full name', 'Registered email or phone number', 'Transaction reference', 'Date of transaction', 'Amount', 'Service purchased', 'Description of the issue', 'Screenshot or proof of debit where applicable'];
const nonRefundable = [
  'A digital service was successfully delivered.',
  'Incorrect phone numbers, meter numbers, smartcard numbers or other recipient information were supplied by the customer.',
  'A transaction has already been fulfilled.',
  'The refund request involves fraud, abuse or a violation of Wiftco’s terms.',
  'The transaction falls outside an upstream payment or service provider’s refund eligibility requirements.',
];

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section style={{ padding: '28px 0', borderTop: `1px solid ${SC.hairline}` }}><h2 style={{ margin: '0 0 12px', fontSize: 23 }}>{title}</h2><div style={{ color: SC.muted, fontSize: 15.5, lineHeight: 1.78 }}>{children}</div></section>;
}

export default function RefundPolicyPage() {
  return (
    <div style={{ fontFamily: SC.font, color: SC.ink, background: '#fff' }}>
      <Nav />
      <PageHeader eyebrow="LEGAL" title="Refund Policy" subtitle="How Wiftco handles failed, duplicated, reversed and otherwise eligible transactions." />
      <main style={{ padding: '72px 0 90px' }}><Container><div style={{ maxWidth: 850, margin: '0 auto' }}>
        <div style={{ padding: '18px 22px', marginBottom: 30, border: `1px solid ${SC.hairline}`, borderRadius: 14, color: SC.muted, background: '#f6f1ff' }}>Last Updated: 29 August 2026</div>
        <PolicySection title="1. Introduction"><p>This Refund Policy applies to transactions made through Wiftco and explains how failed, duplicated, reversed or otherwise eligible transactions are handled.</p></PolicySection>
        <PolicySection title="2. Eligible Refunds"><p>A user may qualify for a refund where:</p><ul style={{ margin: '12px 0 0 22px' }}>{eligible.map(item => <li key={item}>{item}</li>)}</ul></PolicySection>
        <PolicySection title="3. Airtime, Data and Bill Payment Transactions"><p>Airtime, data bundles, electricity tokens, cable TV subscriptions and similar digital services are generally non-refundable once successfully delivered to the phone number, meter number, smartcard number or account information supplied by the customer.</p><p style={{ marginTop: 12 }}>If a transaction is marked successful by the service provider and delivered to the information supplied by the customer, Wiftco may be unable to reverse it. Users are responsible for confirming recipient information before completing a transaction.</p></PolicySection>
        <PolicySection title="4. Failed Transactions"><p>Where a customer is debited but a transaction fails, Wiftco will investigate with the payment processor or service provider. Where confirmed as failed, the amount will be refunded or reversed to the appropriate wallet or payment source, subject to the payment provider’s processing timeline.</p></PolicySection>
        <PolicySection title="5. Duplicate Transactions"><p>Where a customer is charged multiple times for one transaction, confirmed duplicate charges will be refunded after verification.</p></PolicySection>
        <PolicySection title="6. Refund Processing Time"><p>Refund requests are reviewed as quickly as possible. Approved refunds initiated by Wiftco will generally be processed within 5–10 business days. Actual settlement time may depend on the customer’s bank, card issuer, payment processor or service provider.</p></PolicySection>
        <PolicySection title="7. How to Request a Refund"><p>Email <a href={`mailto:${BUSINESS.supportEmail}`} style={{ color: SC.primary, fontWeight: 700 }}>{BUSINESS.supportEmail}</a> and provide:</p><ul style={{ margin: '12px 0 0 22px' }}>{requestDetails.map(item => <li key={item}>{item}</li>)}</ul></PolicySection>
        <PolicySection title="8. Non-Refundable Transactions"><p>Refunds may not be available where:</p><ul style={{ margin: '12px 0 0 22px' }}>{nonRefundable.map(item => <li key={item}>{item}</li>)}</ul></PolicySection>
        <PolicySection title="9. Payment Processor Refunds"><p>Wiftco may use third-party payment processors such as Flutterwave and other approved providers to process payments and fulfil digital services. Refunds involving those providers may be subject to their processing timelines and verification requirements. This does not indicate that any particular provider is currently live in production.</p></PolicySection>
        <PolicySection title="10. Contact Us"><address style={{ fontStyle: 'normal' }}><strong>{BUSINESS.legalName}</strong><br />Support Email: <a href={`mailto:${BUSINESS.supportEmail}`} style={{ color: SC.primary }}>{BUSINESS.supportEmail}</a><br />Phone: <a href={BUSINESS.supportPhoneHref} style={{ color: SC.primary }}>{BUSINESS.supportPhoneDisplay}</a><br />Business Address: {BUSINESS.address}<br />Website: <a href={BUSINESS.website} style={{ color: SC.primary }}>{BUSINESS.website}</a></address></PolicySection>
      </div></Container></main>
      <Footer />
    </div>
  );
}
