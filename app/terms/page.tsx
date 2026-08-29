import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import { BUSINESS } from '@/lib/business';

export const metadata: Metadata={title:'Terms & Conditions | Wiftco',description:'Terms governing use of Wiftco websites and early-access services.',alternates:{canonical:'/terms'}};
export default function TermsPage(){return <><Nav/><main className="section"><Container w={850}><span className="eyebrow">LEGAL</span><h1 style={{fontSize:52,margin:'16px 0'}}>Terms &amp; Conditions</h1><p style={{color:'#6d6b80'}}>Last updated: 29 August 2026</p>{[
['Business identity',`${BUSINESS.brandName} is operated by ${BUSINESS.legalName}, a Nigerian Sole Proprietorship registered with the Corporate Affairs Commission under ${BUSINESS.registration}.`],
['Product status','The Wiftco Android application is available on Google Play through Early Access. Some features may remain in limited testing or require service-provider integration.'],
['Carrier and regulated services','Carrier-dependent services will be delivered through authorised telecommunications partners and applicable regulatory frameworks. Wiftco does not represent itself as a bank, mobile network operator or spectrum owner.'],
['Payments and service fulfilment','Wiftco may use approved third-party payment processors and service providers to process payments and fulfil digital services. Availability and completion times may depend on those providers.'],
['Early access','Joining the early-access list does not guarantee availability, pricing or a release date. We may contact you about product and launch updates according to your consent choices.'],
['Acceptable use','You must not misuse the website, attempt unauthorised access, disrupt services or use Wiftco materials unlawfully.'],
['Intellectual property','Wiftco branding, product designs and website content are protected materials. No licence is granted except the limited right to view and use this website normally.'],
['Contact',`Questions about these terms can be sent to ${BUSINESS.supportEmail}. You can also contact us at ${BUSINESS.supportPhoneDisplay} or ${BUSINESS.address}.`]].map(([h,p])=><section key={h} style={{marginTop:34}}><h2>{h}</h2><p style={{color:'#5f5d70',lineHeight:1.75}}>{p}</p></section>)}</Container></main><Footer/></>}
