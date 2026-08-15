import type {Metadata} from 'next'; import EditorialPage from '@/components/EditorialPage';
export const metadata:Metadata={title:'Business & Technology | Wiftco',description:'Explore future platform integrations, telecom partnerships and digital-service distribution with Wiftco.'};
export default function Page(){return <EditorialPage eyebrow="BUSINESS & TECHNOLOGY" title="Build new digital experiences with Wiftco." intro="We are preparing a provider-independent platform for telecom partnerships, digital-service distribution and future enterprise integrations. Public production APIs are not yet generally available." items={[
{title:'Telecom partnerships',body:'Integrate authorised voice, numbers, messaging, eSIM, airtime and data infrastructure with the Wiftco application layer.'},
{title:'Digital-service distribution',body:'Explore controlled distribution of supported connectivity and everyday digital services through one user experience.'},
{title:'Future APIs',body:'Our adapter-based backend is designed for partner integration. Developer access and public documentation will follow production readiness.'},
{title:'Enterprise connectivity',body:'We welcome conversations with operators, MVNOs, infrastructure providers and technology platforms.'}]} cta={{label:'Explore telecom partnerships',href:'/business/partnerships'}}/>}
