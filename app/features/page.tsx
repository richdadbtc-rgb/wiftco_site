import type {Metadata} from 'next'; import EditorialPage from '@/components/EditorialPage';
export const metadata:Metadata={title:'Wiftco Product | Messaging, Calling & Connectivity',description:'Explore the Wiftco communication, connectivity and digital-service experience.'};
export default function Page(){return <EditorialPage eyebrow="PRODUCT" title="One experience, built around connection." intro="Wiftco brings communication, connectivity and everyday digital services into a clear, modern mobile experience. Product status is shown plainly." items={[
{title:'Conversations without friction.',body:'Message Wiftco users through a modern, responsive communication experience.',tag:'Built'},
{title:'Voice and video, built in.',body:'Internet-based voice and video calling is integrated directly into the Wiftco experience.',tag:'Built'},
{title:'Connectivity without old complexity.',body:'Our eSIM and connectivity workflows are designed to integrate with authorised telecom partners before public provisioning.',tag:'Partner integration'},
{title:'Everyday services, one interface.',body:'The wallet control layer organises balances, transaction history and supported digital-service payments. Live regulated services depend on approved providers.',tag:'Control layer built'},
{title:'Meet Ben.',body:'Ben is Wiftco’s self-hosted AI assistant. It helps users find information and prepare supported actions; sensitive and financial operations require explicit user authorisation.',tag:'Built'},
{title:'A community, not just a utility.',body:'Feed brings updates, media and conversations together for Wiftco users.',tag:'Built'}]} cta={{label:'Get early access',href:'/download'}}/>}
