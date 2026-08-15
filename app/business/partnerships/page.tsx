import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import HumanHeroVisual from '@/components/HumanHeroVisual';

export const metadata: Metadata = {
  title: 'Telecom & Technology Partnerships | Wiftco',
  description: 'Explore telecom, carrier, eSIM, API and infrastructure partnership opportunities with Wiftco.',
  alternates: { canonical: '/business/partnerships' },
};

const needs = [
  ['Voice & Interconnect',['SIP connectivity','PSTN termination','Inbound voice','Caller-ID provisioning','Carrier routing']],
  ['Numbers',['Nigerian DID or virtual-number provisioning where permitted','Number lifecycle APIs','Inbound number routing']],
  ['Messaging',['SMS','SMPP or API connectivity','Delivery receipts']],
  ['eSIM',['Profile provisioning','Activation APIs','Mobile-data plans','Lifecycle management']],
  ['Airtime & Data',['Wholesale airtime','Data bundles','Transaction and reconciliation APIs']],
  ['Infrastructure',['Carrier APIs','Sandbox environments','CDRs and webhooks','Interconnection','Operational SLAs']],
];

const capabilities=['Cross-platform Flutter application','Django and FastAPI backend','PostgreSQL financial controls','WebRTC and WebSocket communications','Provider-independent telecom control plane','Rating and billing','CDR processing','Reconciliation','Fraud controls','Admin operations','Self-hosted Ben AI architecture','Partner adapter architecture'];
const models=['Wholesale Connectivity','Carrier/API Integration','Revenue Share','Digital Distribution','Strategic Product Partnership','Infrastructure Partnership'];

export default function PartnershipsPage(){return <main className="marketing-page"><Nav dark/>
  <section className="partnership-hero"><Container><div className="partnership-hero-grid"><div><span className="eyebrow light">TELECOM & TECHNOLOGY PARTNERSHIPS</span><h1>Let&apos;s build the connection layer together.</h1><p className="hero-lead">Behind every call, message and moment of connection are people — and the partners who make it possible. Wiftco has built the digital application and provider-independent control layer. Now we&apos;re looking for the right people to bring carrier-integrated services to market with us.</p><div className="button-row"><a className="button light-button" href="mailto:partnerships@wiftco.com">Start a conversation</a><a className="button secondary" style={{color:'#fff',background:'transparent',borderColor:'rgba(255,255,255,.35)'}} href="mailto:partnerships@wiftco.com?subject=Wiftco%20technical%20capabilities">View technical capabilities</a></div></div><HumanHeroVisual business/></div></Container></section>
  <section className="section"><Container><div className="section-heading"><span className="eyebrow">PARTNER OPPORTUNITIES</span><h2>What we&apos;re looking for.</h2><p>We are exploring practical, compliant integration paths with operators and infrastructure providers.</p></div><div className="partner-cards">{needs.map(([title,items])=><article className="partner-card" key={title as string}><h3>{title as string}</h3><ul>{(items as string[]).map(item=><li key={item}>{item}</li>)}</ul></article>)}</div><p className="legal-note">Final integration structure is subject to commercial agreement and applicable regulation.</p></Container></section>
  <section className="section" style={{background:'#faf8ff'}}><Container><div className="section-heading"><span className="eyebrow">WHAT WIFTCO BRINGS</span><h2>The application layer is already being built.</h2><p>A serious technology foundation designed for controlled partner integration, without exposing confidential architecture.</p></div><div className="capability-grid">{capabilities.map(item=><span key={item}>✓ {item}</span>)}</div></Container></section>
  <section className="section"><Container><div className="section-heading"><span className="eyebrow">FLEXIBLE ENGAGEMENT</span><h2>Partnership models.</h2><p>We are open to structures that align incentives, protect users and respect regulatory requirements. No fixed commercial terms are implied.</p></div><div className="capability-grid">{models.map(item=><span key={item}>{item}</span>)}</div></Container></section>
  <section className="section vision-section"><Container><div style={{maxWidth:760,margin:'0 auto',textAlign:'center'}}><span className="eyebrow light">START A CONVERSATION</span><h2>Ready to explore what&apos;s possible?</h2><p>We&apos;re speaking with operators, MVNOs, infrastructure providers, eSIM platforms and technology partners interested in building new digital communications experiences.</p><a className="button light-button" style={{marginTop:24}} href="mailto:partnerships@wiftco.com">Contact Wiftco Partnerships</a><p style={{marginTop:18}}>partnerships@wiftco.com · www.wiftco.com</p></div></Container></section>
  <Footer/></main>}
