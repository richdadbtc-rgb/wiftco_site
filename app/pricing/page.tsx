import type {Metadata} from 'next'; import EditorialPage from '@/components/EditorialPage';
export const metadata:Metadata={title:'Plans & Availability | Wiftco',description:'Wiftco plans will be announced with public product availability.'};
export default function Page(){return <EditorialPage eyebrow="PLANS" title="Pricing will launch with public availability." intro="Wiftco is in private development. We will publish clear consumer and business pricing only when the relevant services, provider integrations and commercial terms are ready." items={[
{title:'No placeholder subscriptions',body:'We are not taking payment for carrier, eSIM or regulated wallet plans that are not publicly available.'},
{title:'Clear service status',body:'Early-access updates will distinguish built product capabilities from services awaiting authorised provider integration.'},
{title:'Partner-led commercial terms',body:'Carrier, distribution and infrastructure pricing will be agreed directly with qualified partners; no fixed terms are implied here.'}]} cta={{label:'Join early access',href:'/download'}}/>}
