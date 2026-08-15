import type {Metadata} from 'next'; import EditorialPage from '@/components/EditorialPage';
export const metadata:Metadata={title:'About Wiftco',description:'Wiftco is a Nigerian technology company building a unified digital communications experience.'};
export default function Page(){return <EditorialPage eyebrow="ABOUT WIFTCO" title="A simpler digital communications experience." intro="Wiftco is a Nigerian technology company building a new digital communications experience around messaging, connectivity and everyday services." items={[
{title:'Our mission',body:'Make communication and digital connectivity feel coherent, accessible and beautifully simple.'},
{title:'What we are building',body:'A cross-platform application and provider-independent control layer that can connect users to supported services through authorised partners.'},
{title:'How we work',body:'We build deliberately, communicate product status honestly and treat security, reconciliation and user authorisation as core product requirements.'}]} cta={{label:'Partner with Wiftco',href:'/business/partnerships'}}/>}
