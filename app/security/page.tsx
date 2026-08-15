import type {Metadata} from 'next'; import EditorialPage from '@/components/EditorialPage';
export const metadata:Metadata={title:'Security | Wiftco',description:'How Wiftco approaches account security, transactional integrity and partner-safe architecture.'};
export default function Page(){return <EditorialPage eyebrow="SECURITY BY DESIGN" title="Controls that grow with the platform." intro="Wiftco’s security approach combines transport protection, server-side authorisation, transactional integrity and careful operational controls. We do not claim certifications or regulatory licences that have not been independently verified." items={[
{title:'Account and session security',body:'Authenticated requests, server-side ownership checks, protected sessions and role-based administrative access.'},
{title:'Transactional integrity',body:'PostgreSQL transactions, idempotency, wallet reservations and reconciliation controls protect supported financial workflows.'},
{title:'Privacy-safe operations',body:'Sensitive data is minimised, access controlled and masked in logs where full values are unnecessary.'},
{title:'Fraud and failure controls',body:'Provider failures, duplicate events and unresolved outcomes are handled conservatively and surfaced for reconciliation.'},
{title:'Partner-safe telecom architecture',body:'Telecom credentials and provider controls remain server-side and are not exposed to client applications.'},
{title:'Responsible AI',body:'Ben is self-hosted and cannot directly execute financial operations. Sensitive actions require separate user confirmation.'}]} />}
