import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Container from '@/components/Container';

export const metadata: Metadata={title:'Terms of Use | Wiftco',description:'Terms governing use of Wiftco websites and early-access services.'};
export default function TermsPage(){return <><Nav/><main className="section"><Container w={850}><span className="eyebrow">LEGAL</span><h1 style={{fontSize:52,margin:'16px 0'}}>Terms of Use</h1><p style={{color:'#6d6b80'}}>Last updated: 15 August 2026</p>{[
['Product status','Wiftco is a communications technology platform currently preparing for market deployment. Features described on this website may be in private development, limited testing or awaiting provider integration.'],
['Carrier and regulated services','Carrier-dependent services will be delivered through authorised telecommunications partners and applicable regulatory frameworks. Wiftco does not represent itself as a bank, mobile network operator or spectrum owner.'],
['Early access','Joining the early-access list does not guarantee availability, pricing or a release date. We may contact you about product and launch updates according to your consent choices.'],
['Acceptable use','You must not misuse the website, attempt unauthorised access, disrupt services or use Wiftco materials unlawfully.'],
['Intellectual property','Wiftco branding, product designs and website content are protected materials. No licence is granted except the limited right to view and use this website normally.'],
['Contact','Questions about these terms can be sent to partnerships@wiftco.com.']].map(([h,p])=><section key={h} style={{marginTop:34}}><h2>{h}</h2><p style={{color:'#5f5d70',lineHeight:1.75}}>{p}</p></section>)}</Container></main><Footer/></>}
