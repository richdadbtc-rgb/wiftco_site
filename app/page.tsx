'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import PhoneMockup from '@/components/PhoneMockup';

const products = [
  ['Messages', 'Conversations without friction.', 'Message Wiftco users through a modern, responsive communication experience.', 'Built'],
  ['Calls', 'Voice and video, built in.', 'Internet-based voice and video calling is integrated directly into the Wiftco experience.', 'Built'],
  ['Connectivity', 'Connectivity without the old complexity.', 'A simplified eSIM and digital connectivity experience designed to integrate with authorised telecom partners.', 'Partner integration in progress'],
  ['Wallet', 'Everyday services, one interface.', 'View balances, transactions and supported digital-service payments from one secure interface.', 'Control layer built'],
  ['Ben', 'Meet Ben.', "Wiftco's self-hosted AI assistant helps users understand the app and navigate supported services. Sensitive actions always require explicit authorisation.", 'Built'],
  ['Feed', 'More than a utility app.', 'Share updates, media and conversations with the Wiftco community.', 'Built'],
];

const trust = ['Private development', 'Secure architecture', 'Provider-independent telecom layer', 'Built in Nigeria'];

export default function HomePage() {
  return <main className="marketing-page">
    <Nav />
    <section className="hero-section">
      <Container><div className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">THE NEXT WAY TO CONNECT</span>
          <h1>One app for the way you <span>connect.</span></h1>
          <p className="hero-lead">Message, call, manage connectivity and access everyday digital services through one beautifully simple experience.</p>
          <p className="hero-note">Wiftco is building a digital-first communications platform for Nigeria and beyond.</p>
          <div className="button-row"><Link className="button primary" href="/download">Get early access</Link><Link className="button secondary" href="/features">Explore Wiftco</Link></div>
          <Link className="partner-link" href="/business/partnerships">Telecom or technology partner? <b>Partner with Wiftco →</b></Link>
        </div>
        <div className="hero-phones" aria-label="Wiftco mobile application preview"><div className="phone phone-main"><PhoneMockup screen="dashboard" scale={0.58}/></div><div className="phone phone-side"><PhoneMockup screen="chat" scale={0.45} tilt={-7}/></div></div>
      </div></Container>
    </section>
    <section className="trust-strip" aria-label="Product status">{trust.map(item=><span key={item}>✓ {item}</span>)}</section>
    <section className="section"><Container>
      <div className="section-heading"><span className="eyebrow">THE WIFTCO EXPERIENCE</span><h2>Everything you need to stay connected.</h2><p>Communication, connectivity and everyday digital services, brought together with a clear view of what is available now and what requires partner integration.</p></div>
      <div className="feature-grid">{products.map(([name,title,copy,status])=><article className="feature-card" key={name}><span className="status-tag">{status}</span><small>{name}</small><h3>{title}</h3><p>{copy}</p><Link href="/features">Explore {name.toLowerCase()} →</Link></article>)}</div>
    </Container></section>
    <section className="section vision-section"><Container><div className="vision-grid">
      <div><span className="eyebrow light">THE WIFTCO VISION</span><h2>From an app to a connection layer.</h2><p>Wiftco is being designed so users can eventually access communication and connectivity services through a single digital identity - supported by licensed network and infrastructure partners.</p><Link className="button light-button" href="/business/partnerships">Learn about telecom partnerships →</Link></div>
      <div className="architecture" aria-label="Wiftco connection architecture"><span>Wiftco user</span><i>↓</i><span>Wiftco app</span><i>↓</i><span>Telecom control layer</span><i>↓</i><span>Authorised network partner</span><i>↓</i><span>Mobile infrastructure</span></div>
    </div></Container></section>
    <section className="section early-section"><Container><div className="early-card"><div><span className="eyebrow">EARLY ACCESS</span><h2>Be first to experience Wiftco.</h2><p>The application is in private development. Join the early-access list for product and launch updates.</p></div><Link className="button primary" href="/download">Join the list</Link></div></Container></section>
    <Footer />
  </main>;
}
